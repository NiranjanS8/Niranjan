"use client";

import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  Brain,
  Code2,
  Database,
  Download,
  KeyRound,
  MessageSquareMore,
  Server,
} from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import SocialLinks from "@/components/SocialLinks";

type SystemNodeId = "client" | "api" | "auth" | "redis" | "sql" | "rag";

const devicon = (name: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

const heroTechStack = [
  { label: "Java", iconUrl: devicon("java") },
  { label: "Spring Boot", iconUrl: devicon("spring") },
  { label: "Python", iconUrl: devicon("python") },
  { label: "LangChain", iconUrl: "https://cdn.simpleicons.org/langchain/1C3C3C" },
  { label: "FastAPI", iconUrl: devicon("fastapi") },
  { label: "RAG", iconUrl: "" },
  { label: "PostgreSQL", iconUrl: devicon("postgresql") },
  { label: "Redis", iconUrl: devicon("redis") },
  { label: "Vector DBs", iconUrl: "" },
  { label: "JavaScript", iconUrl: devicon("javascript") },
  { label: "Docker", iconUrl: devicon("docker") },
  { label: "AWS", iconUrl: devicon("amazonwebservices", "original-wordmark") },
] as const;

const nodeStatus: Record<SystemNodeId, string> = {
  client: "request queued",
  api: "route matched",
  auth: "token verified",
  redis: "cache warmed",
  sql: "query planned",
  rag: "context grounded",
};

const activityFeed = [
  "auth checked",
  "cache hit",
  "vector search",
  "agent response",
  "audit event saved",
] as const;

export default function HeroSection() {
  const [activeNode, setActiveNode] = useState<SystemNodeId | null>(null);

  return (
    <section id="home" className="relative flex min-h-[86vh] items-center overflow-hidden px-4 pb-24 pt-24 sm:px-6 min-[744px]:min-h-[92vh]">
      <div className="absolute left-6 top-24 hidden h-28 w-28 rotate-[-8deg] border-2 border-dashed border-foreground min-[744px]:block" style={{ borderRadius: "55% 45% 52% 48% / 40% 60% 44% 56%" }} />
      <div className="absolute bottom-28 right-10 hidden h-20 w-20 rotate-6 border-[3px] border-[var(--solid-circle-border)] bg-[var(--post-it)] min-[744px]:block" style={{ borderRadius: "45% 55% 40% 60% / 58% 38% 62% 42%" }} />

      <div className="relative z-10 mx-auto grid w-full max-w-5xl items-center gap-10 min-[744px]:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6 text-center min-[744px]:text-left">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-3">
            <h1 className="text-5xl font-bold leading-[1.05] text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
              Niranjan<span className="inline-block rotate-6 text-accent">!</span>
            </h1>
            <Typewriter />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-xl leading-8 text-foreground/80 sm:text-2xl md:mx-0"
          >
            I build backend systems and AI-powered applications, from scalable REST APIs with Spring Boot to RAG pipelines,
            agentic workflows, and LLM-driven tools with LangChain and LangGraph.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4 min-[744px]:justify-start"
          >
            <svg className="absolute -right-12 -top-16 hidden h-20 w-28 text-foreground min-[744px]:block" viewBox="0 0 120 80" fill="none" aria-hidden="true">
              <path d="M7 58C31 12 64 12 95 39" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="7 8" />
              <path d="M89 24L101 43L79 44" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <button onClick={() => scrollToSection("projects")} className="primary-button group w-full sm:w-auto">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a href="/Niranjan_Sankeshwari.pdf" target="_blank" rel="noopener noreferrer" title="Download Backend Resume" className="outline-button w-full sm:w-auto">
              <Download className="mr-2 h-4 w-4" />
              Backend Resume
            </a>
            <a href="/Niranjan_Sankeshwari_AI.pdf" target="_blank" rel="noopener noreferrer" title="Download AI Resume" className="outline-button w-full sm:w-auto">
              <Download className="mr-2 h-4 w-4" />
              AI Resume
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
            <div className="flex justify-center min-[744px]:justify-start">
              <SocialLinks />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, rotate: 4, y: 24 }}
          animate={{ opacity: 1, rotate: -2, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="sketch-card-strong tape mx-auto w-full max-w-md bg-card p-4 sm:p-6 hidden min-[744px]:block"
        >
          <div
            className="relative overflow-hidden border-2 border-dashed border-[var(--post-it-border)] bg-[var(--post-it)] p-4 sm:p-6"
            style={{ borderRadius: "36px 18px 42px 24px / 24px 40px 20px 44px" }}
          >
            <div className="absolute right-4 top-4 h-10 w-10 rotate-12 border-2 border-foreground bg-card" style={{ borderRadius: "50% 42% 56% 44% / 44% 56% 42% 58%" }} />
            <div className="mb-5 pr-10">
              <span className="section-label text-base">system sketch</span>
              <p className="mt-3 font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">Systems I build</p>
            </div>

            <div className="relative mx-auto max-w-sm text-center">
              <div
                className="system-sketch-board"
                data-active-node={activeNode ?? "none"}
                onPointerLeave={() => setActiveNode(null)}
              >
                <div className="system-topology mx-auto">
                  <SystemNode
                    id="client"
                    label="Client"
                    activeNode={activeNode}
                    onActivate={setActiveNode}
                    className="system-node-client rotate-[-1deg]"
                    icon={<Code2 className="mx-auto h-6 w-6 text-[var(--secondary-accent)]" strokeWidth={2.7} />}
                  />
                  <div className="system-arrow-wrap" aria-hidden="true">
                    <span className="system-packet system-packet-horizontal" />
                    <ArrowRight className="h-7 w-7 rotate-[-6deg] text-foreground" strokeWidth={3} />
                  </div>
                  <SystemNode
                    id="api"
                    label="REST API"
                    activeNode={activeNode}
                    onActivate={setActiveNode}
                    className="system-node-api rotate-[0.8deg]"
                    icon={<Server className="mx-auto h-6 w-6 text-accent" strokeWidth={2.7} />}
                  />
                </div>

                <svg className="system-flow-lines mx-auto my-1 h-12 w-64 text-foreground" viewBox="0 0 256 52" fill="none" aria-hidden="true">
                  <path className="system-line system-line-api" d="M128 4C128 18 128 28 128 48" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <path className="system-line system-line-auth" d="M128 30C88 31 60 36 25 48" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <path className="system-line system-line-rag" d="M128 30C168 31 196 36 231 48" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <circle className="system-packet-dot packet-to-auth" r="4" fill="currentColor">
                    <animateMotion dur="2.8s" repeatCount="indefinite" path="M128 30C88 31 60 36 25 48" />
                  </circle>
                  <circle className="system-packet-dot packet-to-sql" r="4" fill="currentColor">
                    <animateMotion dur="3.2s" begin="0.45s" repeatCount="indefinite" path="M128 4C128 18 128 28 128 48" />
                  </circle>
                  <circle className="system-packet-dot packet-to-rag" r="4" fill="currentColor">
                    <animateMotion dur="3s" begin="0.9s" repeatCount="indefinite" path="M128 30C168 31 196 36 231 48" />
                  </circle>
                </svg>

                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
                  <SystemNode
                    id="auth"
                    label="Auth"
                    activeNode={activeNode}
                    onActivate={setActiveNode}
                    className="rotate-[-1deg]"
                    icon={<KeyRound className="mx-auto h-6 w-6 text-[var(--secondary-accent)]" strokeWidth={2.7} />}
                  />
                  <SystemNode
                    id="redis"
                    label="Redis"
                    activeNode={activeNode}
                    onActivate={setActiveNode}
                    className="rotate-[0.4deg]"
                    icon={<Boxes className="mx-auto h-6 w-6 text-accent" strokeWidth={2.7} />}
                  />
                  <SystemNode
                    id="sql"
                    label="SQL"
                    activeNode={activeNode}
                    onActivate={setActiveNode}
                    className="rotate-1"
                    icon={<Database className="mx-auto h-6 w-6 text-[var(--secondary-accent)]" strokeWidth={2.7} />}
                  />
                  <SystemNode
                    id="rag"
                    label="RAG"
                    activeNode={activeNode}
                    onActivate={setActiveNode}
                    className="rotate-[-0.5deg]"
                    icon={<Brain className="mx-auto h-6 w-6 text-accent" strokeWidth={2.7} />}
                  />
                </div>
              </div>

              <div className="system-status-card sketch-card mt-4 flex items-center justify-center gap-2 bg-card px-3 py-2">
                <MessageSquareMore className="h-5 w-5 text-accent" strokeWidth={2.7} />
                <ActivityStatus />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-5 hidden overflow-hidden md:block">
        <div className="hero-marquee">
          <div className="hero-marquee-track">
            {[...heroTechStack, ...heroTechStack].map((item, index) => (
              <div key={`${item.label}-${index}`} className="hero-tech-pill">
                {item.iconUrl ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={item.iconUrl} alt="" className="h-4 w-4 shrink-0" loading="lazy" />
                ) : (
                  <Brain className="h-4 w-4 text-accent" />
                )}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SystemNode({
  id,
  label,
  icon,
  activeNode,
  onActivate,
  className = "",
}: {
  id: SystemNodeId;
  label: string;
  icon: ReactNode;
  activeNode: SystemNodeId | null;
  onActivate: (id: SystemNodeId | null) => void;
  className?: string;
}) {
  const isActive = activeNode === id;

  return (
    <button
      type="button"
      className={`system-node sketch-card bg-card p-3 ${className}`}
      data-node={id}
      data-active={isActive}
      onPointerEnter={() => onActivate(id)}
      onPointerLeave={() => onActivate(null)}
      onFocus={() => onActivate(id)}
      onBlur={() => onActivate(null)}
      aria-label={`${label}: ${nodeStatus[id]}`}
    >
      {icon}
      <p className="mt-1 text-lg leading-none">{label}</p>
      <span className="system-node-status">{nodeStatus[id]}</span>
    </button>
  );
}

function ActivityStatus() {
  const [feedIndex, setFeedIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setFeedIndex((current) => (current + 1) % activityFeed.length);
    }, 1650);

    return () => window.clearInterval(interval);
  }, []);

  const activeStatus = activityFeed[feedIndex];

  return (
    <span className="system-status-text text-lg leading-5">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={activeStatus}
          className="system-status-feed"
          initial={{ opacity: 0, y: 8, rotate: -1 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          exit={{ opacity: 0, y: -8, rotate: 1 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          {activeStatus}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function Typewriter() {
  const TITLES = [
    "Software Engineer",
    "Backend Developer",
    "AI Engineer",
    "RAG Pipeline Builder",
    "Agentic AI Developer",
  ];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = TITLES[index];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % TITLES.length);
      } else {
        setText(currentTitle.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, text === currentTitle && !isDeleting ? 1500 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <h2 className="text-3xl font-bold text-[var(--secondary-accent)] sm:text-4xl md:text-5xl flex items-center justify-center min-[744px]:justify-start h-[36px] sm:h-[40px] md:h-[48px]">
      <span>{text}</span>
      <span className="animate-pulse ml-1">|</span>
    </h2>
  );
}
