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
      parts.push(<strong key={`b-${key++}`} className="font-semibold text-white">{match[2]}</strong>);
    } else if (match[3]) {
      parts.push(<em key={`i-${key++}`}>{match[3]}</em>);
    } else if (match[4]) {
      parts.push(<code key={`c-${key++}`} className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-accent">{match[4]}</code>);
    } else if (match[5] && match[6]) {
      parts.push(
        <a key={`a-${key++}`} href={match[6]} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
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
        <pre key={`code-${key++}`} className="overflow-x-auto rounded-2xl border border-white/[0.06] bg-[#0f131b] p-4 text-sm text-gray-200">
          <code>{codeLines.join("\n")}</code>
        </pre>,
      );
      continue;
    }

    if (line.startsWith("# ")) {
      elements.push(
        <h1 key={`h1-${key++}`} className="text-3xl font-bold text-white">
          {renderInline(line.slice(2))}
        </h1>,
      );
      i += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={`h2-${key++}`} className="pt-3 text-2xl font-semibold text-white">
          {renderInline(line.slice(3))}
        </h2>,
      );
      i += 1;
      continue;
    }

    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={`h3-${key++}`} className="pt-2 text-xl font-semibold text-white">
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
              <span className="mt-[0.7rem] h-1.5 w-1.5 rounded-full bg-accent/80" />
              <span className="leading-7 text-gray-300">{renderInline(item)}</span>
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
        <blockquote key={`bq-${key++}`} className="border-l-2 border-accent/40 pl-4 text-gray-400 italic">
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
      <p key={`p-${key++}`} className="leading-8 text-gray-300">
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

        <section className="mt-6 rounded-[2rem] border border-white/[0.05] bg-white/[0.035] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-md">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-3">
                <FolderGit2 className="h-6 w-6 text-accent" />
              </div>
              <h1 className="text-4xl font-bold text-white">{project.title}</h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-300">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[1rem] border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm font-medium text-white transition-all hover:border-accent/25 hover:bg-white/[0.05]"
              >
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-[1rem] border border-accent/30 bg-accent px-4 py-3 text-sm font-medium text-white transition-all hover:bg-accent/90"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live
                </a>
              ) : null}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="rounded-full border border-white/[0.08] bg-white/[0.05] px-3 py-1 text-sm text-gray-300">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-white/[0.05] bg-white/[0.035] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-md">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold text-white">README</h2>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent transition-colors hover:text-white"
            >
              Open on GitHub
            </a>
          </div>

          {readme ? (
            <article className="space-y-5">{renderMarkdown(readme)}</article>
          ) : (
            <div className="rounded-2xl border border-white/[0.05] bg-white/[0.03] p-6 text-gray-300">
              README could not be loaded automatically right now. You can still view the repository directly from the GitHub button above.
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
