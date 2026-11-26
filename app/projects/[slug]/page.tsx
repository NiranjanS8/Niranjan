import { notFound } from "next/navigation";
import { ExternalLink, FolderGit2, Github } from "lucide-react";
import BackToProjects from "@/components/BackToProjects";
import MermaidDiagram from "@/components/MermaidDiagram";
import ScrollToHash from "@/components/ScrollToHash";
import fs from "node:fs";
import path from "node:path";
import type { ReactNode } from "react";
import { getProjectBySlug, projects } from "@/lib/projects";

export const revalidate = 3600;

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

type ReadmeData = {
  content: string;
  sourceUrl: string;
};

interface RenderContext {
  baseRawDir: string;
  githubUrl: string;
  branch: string;
}

function getRenderContext(sourceUrl: string, githubUrl: string): RenderContext {
  const lastSlash = sourceUrl.lastIndexOf("/");
  const baseRawDir = lastSlash !== -1 ? sourceUrl.substring(0, lastSlash) : sourceUrl;

  const rawPrefix = "https://raw.githubusercontent.com/";
  let branch = "main";
  if (sourceUrl.startsWith(rawPrefix)) {
    const segments = sourceUrl.slice(rawPrefix.length).split("/");
    if (segments.length >= 3) {
      branch = segments[2];
    }
  }

  return {
    baseRawDir,
    githubUrl,
    branch,
  };
}

function resolveAssetUrl(url: string, baseRawDir: string): string {
  const trimmed = url.trim();
  if (
    trimmed.startsWith("http://") ||
    trimmed.startsWith("https://") ||
    trimmed.startsWith("data:") ||
    trimmed.startsWith("//")
  ) {
    return trimmed;
  }
  const cleanPath = trimmed.replace(/^\.?\//, "");
  return `${baseRawDir}/${cleanPath}`;
}

function resolveDocUrl(url: string, githubUrl: string, branch: string): string {
  const trimmed = url.trim();
  if (
    trimmed.startsWith("http://") ||
    trimmed.startsWith("https://") ||
    trimmed.startsWith("mailto:") ||
    trimmed.startsWith("#")
  ) {
    return trimmed;
  }
  const cleanPath = trimmed.replace(/^\.?\//, "");
  return `${githubUrl.replace(/\/$/, "")}/blob/${branch}/${cleanPath}`;
}

async function fetchReadme(urls: string[]): Promise<ReadmeData | null> {
  for (const url of urls) {
    try {
      const response = await fetch(url, {
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(5000),
      });
      if (response.ok) {
        const text = await response.text();
        if (text.trim()) return { content: text, sourceUrl: url };
      }
    } catch {
      // Try the next fallback URL.
    }
  }

  return null;
}

function renderInline(text: string, context: RenderContext): ReactNode[] {
  const parts: ReactNode[] = [];
  const regex = /(\*\*(.+?)\*\*|\*(.+?)\*|`(.+?)`|!\[([^\]]*?)\]\(([^)]+?)\)|\[([^\]]+?)\]\(([^)]+?)\))/g;
  let lastIndex = 0;
  let key = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    if (match[2]) {
      parts.push(<strong key={`b-${key++}`} className="font-semibold text-foreground">{match[2]}</strong>);
    } else if (match[3]) {
      parts.push(<em key={`i-${key++}`}>{match[3]}</em>);
    } else if (match[4]) {
      parts.push(<code key={`c-${key++}`} className="sketch-chip px-1.5 py-0.5 text-sm text-accent">{match[4]}</code>);
    } else if (match[5] !== undefined && match[6] !== undefined) {
      const altText = match[5] || "";
      const rawSrc = match[6];
      const resolvedSrc = resolveAssetUrl(rawSrc, context.baseRawDir);
      parts.push(
        <span key={`img-${key++}`} className="my-4 block text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={resolvedSrc}
            alt={altText}
            className="inline-block max-w-full h-auto border-2 border-foreground bg-card p-2 shadow-[4px_4px_0px_0px_var(--foreground)]"
            style={{ borderRadius: "14px 22px 16px 20px / 20px 16px 22px 14px" }}
            loading="lazy"
          />
          {altText && (
            <span className="mt-1.5 block text-sm italic text-foreground/60 font-body">
              {altText}
            </span>
          )}
        </span>,
      );
    } else if (match[7] && match[8]) {
      const linkText = match[7];
      const rawHref = match[8];
      const resolvedHref = resolveDocUrl(rawHref, context.githubUrl, context.branch);
      const isExternal = resolvedHref.startsWith("http://") || resolvedHref.startsWith("https://");
      parts.push(
        <a
          key={`a-${key++}`}
          href={resolvedHref}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-accent underline decoration-2 underline-offset-4 hover:opacity-80"
        >
          {linkText}
        </a>,
      );
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

function renderMarkdown(markdown: string, context: RenderContext) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const elements: ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i += 1;
      continue;
    }

    // Skip HTML comment blocks
    if (line.trim().startsWith("<!--")) {
      while (i < lines.length && !lines[i].includes("-->")) {
        i += 1;
      }
      i += 1;
      continue;
    }

    if (line.startsWith("```")) {
      const lang = line.slice(3).trim().toLowerCase();
      const codeLines: string[] = [];
      i += 1;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i += 1;
      }
      i += 1;

      if (lang === "mermaid") {
        elements.push(
          <MermaidDiagram key={`mermaid-${key++}`} chart={codeLines.join("\n")} />,
        );
        continue;
      }

      elements.push(
        <pre
          key={`code-${key++}`}
          className="overflow-x-auto border-2 border-foreground bg-card p-4 text-sm text-foreground"
          style={{ borderRadius: "28px 18px 34px 20px / 18px 34px 20px 30px" }}
        >
          <code>{codeLines.join("\n")}</code>
        </pre>,
      );
      continue;
    }

    // Standalone HTML <img> tags
    const imgTagMatch = line.match(/<img\s+[^>]*src=["']([^"']+)["'][^>]*>/i);
    if (imgTagMatch) {
      const rawSrc = imgTagMatch[1];
      const altMatch = line.match(/alt=["']([^"']*)["']/i);
      const altText = altMatch ? altMatch[1] : "";
      const resolvedSrc = resolveAssetUrl(rawSrc, context.baseRawDir);
      elements.push(
        <div key={`html-img-${key++}`} className="my-6 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={resolvedSrc}
            alt={altText}
            className="inline-block max-w-full h-auto border-2 border-foreground bg-card p-2 shadow-[4px_4px_0px_0px_var(--foreground)]"
            style={{ borderRadius: "14px 22px 16px 20px / 20px 16px 22px 14px" }}
            loading="lazy"
          />
          {altText && (
            <span className="mt-1.5 block text-sm italic text-foreground/60 font-body">
              {altText}
            </span>
          )}
        </div>,
      );
      i += 1;
      continue;
    }

    if (line.startsWith("# ")) {
      elements.push(
        <h1 key={`h1-${key++}`} className="text-4xl font-bold text-foreground">
          {renderInline(line.slice(2), context)}
        </h1>,
      );
      i += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={`h2-${key++}`} className="pt-3 text-3xl font-semibold text-foreground">
          {renderInline(line.slice(3), context)}
        </h2>,
      );
      i += 1;
      continue;
    }

    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={`h3-${key++}`} className="pt-2 text-2xl font-semibold text-foreground">
          {renderInline(line.slice(4), context)}
        </h3>,
      );
      i += 1;
      continue;
    }

    if (/^(?:-{3,}|\*{3,}|_{3,})$/.test(line.trim())) {
      elements.push(
        <hr key={`hr-${key++}`} className="my-6 border-t-2 border-dashed border-foreground/30" />,
      );
      i += 1;
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^[-*]\s+/, ""));
        i += 1;
      }
      elements.push(
        <ul key={`ul-${key++}`} className="space-y-2 pl-1">
          {items.map((item) => (
            <li key={`${item}-${key++}`} className="grid grid-cols-[10px_1fr] gap-x-3">
              <span className="mt-[0.7rem] h-2 w-2 rounded-full border border-foreground bg-accent" />
              <span className="text-lg leading-7 text-foreground/75">
                {renderInline(item, context)}
              </span>
            </li>
          ))}
        </ul>,
      );
      continue;
    }

    if (line.startsWith("> ")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        quoteLines.push(lines[i].slice(2));
        i += 1;
      }
      elements.push(
        <blockquote
          key={`bq-${key++}`}
          className="border-l-[3px] border-dashed border-accent pl-4 text-lg text-foreground/70 italic"
        >
          {renderInline(quoteLines.join(" "), context)}
        </blockquote>,
      );
      continue;
    }

    if (line.trim().startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i].trim());
        i += 1;
      }

      const getCells = (rowText: string) => {
        let cells = rowText.split("|").map((c) => c.trim());
        if (rowText.startsWith("|")) cells.shift();
        if (rowText.endsWith("|")) cells.pop();
        return cells;
      };

      if (tableLines.length >= 1) {
        const headerCells = getCells(tableLines[0]);
        let startIndex = 1;
        if (tableLines[1] && tableLines[1].includes("-")) {
          startIndex = 2;
        }

        const rows: string[][] = [];
        for (let r = startIndex; r < tableLines.length; r++) {
          const cells = getCells(tableLines[r]);
          if (cells.length > 0) {
            rows.push(cells);
          }
        }

        elements.push(
          <div
            key={`table-wrapper-${key++}`}
            className="overflow-x-auto my-6 border-2 border-foreground bg-card p-4"
            style={{ borderRadius: "18px 24px 15px 22px / 22px 15px 24px 18px" }}
          >
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-foreground">
                  {headerCells.map((cell, idx) => (
                    <th key={`th-${idx}`} className="px-4 py-2 font-bold font-heading text-lg">
                      {renderInline(cell, context)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIdx) => (
                  <tr
                    key={`tr-${rowIdx}`}
                    className="border-b border-foreground/30 last:border-0 hover:bg-foreground/5"
                  >
                    {row.map((cell, cellIdx) => (
                      <td key={`td-${cellIdx}`} className="px-4 py-2 text-lg">
                        {renderInline(cell, context)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>,
        );
      }
      continue;
    }

    const paragraphLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].startsWith("#") &&
      !lines[i].startsWith("```") &&
      !/^[-*]\s+/.test(lines[i]) &&
      !lines[i].startsWith("> ") &&
      !lines[i].trim().startsWith("|") &&
      !lines[i].trim().startsWith("<!--") &&
      !lines[i].match(/<img\s+/i) &&
      !/^(?:-{3,}|\*{3,}|_{3,})$/.test(lines[i].trim())
    ) {
      paragraphLines.push(lines[i].trim());
      i += 1;
    }
    elements.push(
      <p key={`p-${key++}`} className="text-lg leading-8 text-foreground/75">
        {renderInline(paragraphLines.join(" "), context)}
      </p>,
    );
  }

  return elements;
}

function getLocalReadme(slug: string): string | null {
  try {
    const filePath = path.join(process.cwd(), "content", "readmes", `${slug}.md`);
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, "utf-8");
    }
  } catch {
    // Ignore and fallback to remote fetch
  }
  return null;
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const localContent = getLocalReadme(slug);
  const result: ReadmeData | null = localContent
    ? {
        content: localContent,
        sourceUrl: project.readmeRawUrls[0] || `${project.github}/raw/main/README.md`,
      }
    : await fetchReadme(project.readmeRawUrls);

  const context = result
    ? getRenderContext(result.sourceUrl, project.github)
    : {
        baseRawDir: project.github.replace("github.com", "raw.githubusercontent.com") + "/main",
        githubUrl: project.github,
        branch: "main",
      };

  return (
    <main className="min-h-screen bg-background px-6 py-24">
      <ScrollToHash />
      <div className="mx-auto max-w-5xl">
        <BackToProjects />

        <section className="sketch-card-strong tape mt-8 p-6 sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="icon-badge mb-4 h-14 w-14">
                <FolderGit2 className="h-7 w-7" />
              </div>
              <h1 className="text-5xl font-bold text-foreground">{project.title}</h1>
              <p className="mt-4 max-w-3xl text-xl leading-8 text-foreground/75">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="outline-button inline-flex items-center justify-center px-4 py-3 text-lg"
              >
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-button inline-flex items-center justify-center px-4 py-3 text-lg"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live
                </a>
              ) : null}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="sketch-chip px-3 py-1 text-base">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section id="readme" className="sketch-card mt-8 scroll-mt-24 bg-card p-6 sm:p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-3xl font-semibold text-foreground">README</h2>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="sketch-link text-lg text-accent"
            >
              Open on GitHub
            </a>
          </div>

          {result ? (
            <article className="space-y-5">{renderMarkdown(result.content, context)}</article>
          ) : (
            <div className="sketch-card bg-[var(--post-it)] p-6 text-lg text-foreground/75">
              README could not be loaded automatically right now. You can still view the repository directly from the GitHub button above.
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
