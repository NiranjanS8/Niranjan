import { notFound } from "next/navigation";
import { ExternalLink, FolderGit2, Github } from "lucide-react";
import BackToProjects from "@/components/BackToProjects";
import type { ReactNode } from "react";
import { getProjectBySlug } from "@/lib/projects";

export const revalidate = 3600;

async function fetchReadme(urls: string[]) {
  for (const url of urls) {
    try {
      const response = await fetch(url, { next: { revalidate: 3600 } });
      if (response.ok) {
        const text = await response.text();
        if (text.trim()) return text;
      }
    } catch {
      // Try the next fallback URL.
    }
  }

  return null;
}

function renderInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const regex = /(\*\*(.+?)\*\*|\*(.+?)\*|`(.+?)`|\[([^\]]+)\]\(([^)]+)\))/g;
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
    } else if (match[5] && match[6]) {
      parts.push(
        <a key={`a-${key++}`} href={match[6]} target="_blank" rel="noopener noreferrer" className="text-accent underline decoration-2 underline-offset-4">
          {match[5]}
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

function renderMarkdown(markdown: string) {
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

    if (line.startsWith("```")) {
      const codeLines: string[] = [];
      i += 1;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i += 1;
      }
      i += 1;
      elements.push(
        <pre key={`code-${key++}`} className="overflow-x-auto border-2 border-foreground bg-white p-4 text-sm text-foreground" style={{ borderRadius: "28px 18px 34px 20px / 18px 34px 20px 30px" }}>
          <code>{codeLines.join("\n")}</code>
        </pre>,
      );
      continue;
    }

    if (line.startsWith("# ")) {
      elements.push(
        <h1 key={`h1-${key++}`} className="text-4xl font-bold text-foreground">
          {renderInline(line.slice(2))}
        </h1>,
      );
      i += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={`h2-${key++}`} className="pt-3 text-3xl font-semibold text-foreground">
          {renderInline(line.slice(3))}
        </h2>,
      );
      i += 1;
      continue;
    }

    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={`h3-${key++}`} className="pt-2 text-2xl font-semibold text-foreground">
          {renderInline(line.slice(4))}
        </h3>,
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
              <span className="text-lg leading-7 text-foreground/75">{renderInline(item)}</span>
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
        <blockquote key={`bq-${key++}`} className="border-l-[3px] border-dashed border-accent pl-4 text-lg text-foreground/70 italic">
          {renderInline(quoteLines.join(" "))}
        </blockquote>,
      );
      continue;
    }

    const paragraphLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].startsWith("#") &&
      !lines[i].startsWith("```") &&
      !/^[-*]\s+/.test(lines[i]) &&
      !lines[i].startsWith("> ")
    ) {
      paragraphLines.push(lines[i].trim());
      i += 1;
    }
    elements.push(
      <p key={`p-${key++}`} className="text-lg leading-8 text-foreground/75">
        {renderInline(paragraphLines.join(" "))}
      </p>,
    );
  }

  return elements;
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

  const readme = await fetchReadme(project.readmeRawUrls);

  return (
    <main className="min-h-screen bg-background px-6 py-24">
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

        <section className="sketch-card mt-8 bg-white p-6 sm:p-8">
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

          {readme ? (
            <article className="space-y-5">{renderMarkdown(readme)}</article>
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
