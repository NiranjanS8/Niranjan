"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, FolderGit2, Github } from "lucide-react";
import { projects } from "@/lib/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative px-4 py-16 sm:px-6 sm:py-24">
      <div className="absolute left-0 top-1/2 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-3 sm:mb-12"
        >
          <FolderGit2 className="h-8 w-8 text-accent" />
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Featured Projects</h2>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group flex flex-col rounded-[1.35rem] border border-white/[0.06] bg-white/[0.04] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.14)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.1] hover:bg-white/[0.05] hover:shadow-[0_24px_70px_rgba(0,0,0,0.18)] sm:rounded-[1.5rem] sm:p-6"
            >
              <div className="flex flex-1 flex-col space-y-4">
                <div className="flex items-start justify-between">
                  <FolderGit2 className="h-8 w-8 text-accent" />
                  <div className="flex gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-accent">
                      <Github className="h-5 w-5" />
                    </a>
                    {project.demo ? (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-accent">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    ) : null}
                  </div>
                </div>

                <div>
                  <Link href={`/projects/${project.slug}`} className="mb-2 block text-xl font-bold text-white transition-colors group-hover:text-accent">
                    {project.title}
                  </Link>
                  <p className="line-clamp-3 text-sm leading-relaxed text-gray-400">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span key={tech} className="rounded-full border border-white/20 px-2.5 py-1 text-xs text-gray-400">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 ? (
                    <span className="rounded-full border border-white/20 px-2.5 py-1 text-xs text-gray-500">
                      +{project.techStack.length - 5}
                    </span>
                  ) : null}
                </div>

                <div className="flex-1 space-y-1 pt-2">
                  {project.features.slice(0, 3).map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <span className="mt-1 text-xs text-accent">+</span>
                      <p className="text-xs text-gray-400">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-2 pt-2 sm:flex-row">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex flex-1 items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm text-white transition-colors hover:bg-accent/90"
                  >
                    Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center rounded-lg border border-accent/50 px-4 py-2 text-sm text-accent transition-colors hover:bg-accent/10"
                  >
                    <Github className="mr-1 h-4 w-4" />
                    Code
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center rounded-lg border border-white/20 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-white/30 hover:bg-white/5 hover:text-white"
                    >
                      <ExternalLink className="mr-1 h-4 w-4" />
                      Live
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
