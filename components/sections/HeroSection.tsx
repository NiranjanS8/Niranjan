"use client";

import { motion } from "framer-motion";
import { ArrowRight, Boxes, Cloud, Code2, Database, Download, Server, ShieldCheck } from "lucide-react";
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
    <section id="home" className="relative flex min-h-[78vh] items-center overflow-hidden px-4 pb-14 pt-20 sm:px-6 sm:pb-16 md:min-h-[88vh]">
      <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl sm:h-96 sm:w-96" />
      <div className="absolute bottom-1/3 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl justify-center">
        <div className="space-y-5 text-center sm:space-y-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-2 sm:space-y-3">
            <p className="text-base text-accent sm:text-lg">Hi, I&apos;m</p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">Niranjan</h1>
            <h2 className="text-2xl font-bold text-gray-400 sm:text-3xl md:text-4xl">Backend Developer</h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base leading-8 text-gray-400 sm:max-w-3xl sm:text-lg"
          >
            I build backend applications and APIs with a focus on clean architecture, database design, authentication,
            and scalable development. I enjoy turning ideas into practical, real-world software projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
          >
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
            <div className="flex justify-center">
              <SocialLinks />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-4 hidden overflow-hidden md:block">
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
