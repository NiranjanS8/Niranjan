"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  Cloud,
  Code2,
  Database,
  Download,
  KeyRound,
  MessageSquareMore,
  Server,
  ShieldCheck,
} from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import SocialLinks from "@/components/SocialLinks";

const heroTechStack = [
  { label: "Java", icon: Code2 },
  { label: "Spring Boot", icon: Server },
  { label: "Spring Security", icon: ShieldCheck },
  { label: "PostgreSQL", icon: Database },
  { label: "Redis", icon: Boxes },
  { label: "AWS", icon: Cloud },
] as const;

export default function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-[86vh] items-center overflow-hidden px-4 pb-24 pt-24 sm:px-6 md:min-h-[92vh]">
      <div className="absolute left-6 top-24 hidden h-28 w-28 rotate-[-8deg] border-2 border-dashed border-foreground md:block" style={{ borderRadius: "55% 45% 52% 48% / 40% 60% 44% 56%" }} />
      <div className="absolute bottom-28 right-10 hidden h-20 w-20 rotate-6 border-[3px] border-foreground bg-[var(--post-it)] md:block" style={{ borderRadius: "45% 55% 40% 60% / 58% 38% 62% 42%" }} />

      <div className="relative z-10 mx-auto grid w-full max-w-5xl items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6 text-center md:text-left">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-3">
            <p className="section-label mx-auto text-lg md:mx-0">Backend notes from</p>
            <h1 className="text-5xl font-bold leading-[1.05] text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
              Niranjan<span className="inline-block rotate-6 text-accent">!</span>
            </h1>
            <h2 className="text-3xl font-bold text-[var(--secondary-accent)] sm:text-4xl md:text-5xl">Backend Developer</h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-xl leading-8 text-foreground/80 sm:text-2xl md:mx-0"
          >
            I build backend applications and APIs with a focus on clean architecture, database design, authentication,
            and scalable development. I enjoy turning ideas into practical, real-world software projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4 md:justify-start"
          >
            <svg className="absolute -right-12 -top-16 hidden h-20 w-28 text-foreground md:block" viewBox="0 0 120 80" fill="none" aria-hidden="true">
              <path d="M7 58C31 12 64 12 95 39" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="7 8" />
              <path d="M89 24L101 43L79 44" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <button onClick={() => scrollToSection("projects")} className="primary-button group w-full sm:w-auto">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a href="/Niranjans_resume.pdf" download title="Download PDF Resume" className="outline-button w-full sm:w-auto">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
            <div className="flex justify-center md:justify-start">
              <SocialLinks />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, rotate: 4, y: 24 }}
          animate={{ opacity: 1, rotate: -2, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="sketch-card-strong tape mx-auto w-full max-w-md bg-white p-5 sm:p-6"
        >
          <div
            className="relative overflow-hidden border-2 border-dashed border-foreground bg-[var(--post-it)] p-5 sm:p-6"
            style={{ borderRadius: "36px 18px 42px 24px / 24px 40px 20px 44px" }}
          >
            <div className="absolute right-4 top-4 h-10 w-10 rotate-12 border-2 border-foreground bg-white" style={{ borderRadius: "50% 42% 56% 44% / 44% 56% 42% 58%" }} />
            <div className="mb-5 pr-10">
              <span className="section-label text-base">system sketch</span>
              <p className="mt-3 font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">Backend flow I build</p>
            </div>

            <div className="relative mx-auto max-w-sm text-center">
              <div className="mx-auto grid max-w-[17rem] grid-cols-[1fr_auto_1fr] items-center gap-3">
                <div className="sketch-card bg-white p-3">
                  <Code2 className="mx-auto h-6 w-6 text-[var(--secondary-accent)]" strokeWidth={2.7} />
                  <p className="mt-1 text-lg leading-none">Client</p>
                </div>
                <ArrowRight className="h-7 w-7 rotate-[-6deg] text-foreground" strokeWidth={3} />
                <div className="sketch-card bg-white p-3">
                  <Server className="mx-auto h-6 w-6 text-accent" strokeWidth={2.7} />
                  <p className="mt-1 text-lg leading-none">REST API</p>
                </div>
              </div>

              <svg className="mx-auto my-1 h-10 w-56 text-foreground" viewBox="0 0 224 40" fill="none" aria-hidden="true">
                <path d="M112 4C112 17 112 23 112 36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 7" />
                <path d="M112 24C75 25 50 28 22 36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 7" />
                <path d="M112 24C149 25 174 28 202 36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 7" />
              </svg>

              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <div className="sketch-card rotate-[-1deg] bg-white p-3">
                  <KeyRound className="mx-auto h-6 w-6 text-[var(--secondary-accent)]" strokeWidth={2.7} />
                  <p className="mt-1 text-lg leading-none">Auth</p>
                </div>
                <div className="sketch-card bg-white p-3">
                  <Boxes className="mx-auto h-6 w-6 text-accent" strokeWidth={2.7} />
                  <p className="mt-1 text-lg leading-none">Redis</p>
                </div>
                <div className="sketch-card rotate-1 bg-white p-3">
                  <Database className="mx-auto h-6 w-6 text-[var(--secondary-accent)]" strokeWidth={2.7} />
                  <p className="mt-1 text-lg leading-none">SQL</p>
                </div>
              </div>

              <div className="sketch-card mt-4 flex items-center justify-center gap-2 bg-white px-3 py-2">
                <MessageSquareMore className="h-5 w-5 text-accent" strokeWidth={2.7} />
                <span className="text-lg leading-5">Events keep slow work off the request path</span>
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
                <item.icon className="h-4 w-4 text-accent" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
