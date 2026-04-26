"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, FolderGit2, Github } from "lucide-react";
import { projects } from "@/lib/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="paper-band relative px-4 py-20 sm:px-6">
      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center justify-center gap-3 sm:mb-12 md:justify-start"
        >
          <span className="icon-badge h-12 w-12">
            <FolderGit2 className="h-6 w-6" />
          </span>
          <h2 className="scribble-underline text-4xl font-bold text-foreground sm:text-5xl">Featured Projects</h2>
        </motion.div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`sketch-card group flex flex-col p-5 transition-transform duration-100 hover:rotate-1 hover:shadow-[6px_6px_0px_0px_var(--foreground)] sm:p-6 ${
                index % 3 === 1 ? "post-it-card rotate-[0.7deg] tack" : "rotate-[-0.6deg] tape"
              }`}
            >
              <div className="flex flex-1 flex-col space-y-4">
                <div className="flex items-start justify-between">
                  <span className="icon-badge h-12 w-12 bg-white">
                    <FolderGit2 className="h-6 w-6" />
                  </span>
                  <div className="flex gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-badge h-10 w-10 bg-white transition-transform duration-100 hover:rotate-[-3deg]" aria-label={`${project.title} GitHub`}>
                      <Github className="h-5 w-5" />
                    </a>
                    {project.demo ? (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="icon-badge h-10 w-10 bg-white transition-transform duration-100 hover:rotate-3" aria-label={`${project.title} live demo`}>
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    ) : null}
                  </div>
                </div>

                <div>
                  <Link href={`/projects/${project.slug}`} className="mb-2 block text-2xl font-bold leading-tight text-foreground transition-colors group-hover:text-accent">
                    {project.title}
                  </Link>
                  <p className="line-clamp-3 text-lg leading-7 text-foreground/75">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span key={tech} className="sketch-chip px-2.5 py-1 text-sm">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 ? (
                    <span className="sketch-chip px-2.5 py-1 text-sm">
                      +{project.techStack.length - 5}
                    </span>
                  ) : null}
                </div>

                <div className="flex-1 space-y-1 pt-2">
                  {project.features.slice(0, 3).map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <span className="mt-[0.55rem] h-2 w-2 shrink-0 rounded-full border border-foreground bg-accent" />
                      <p className="text-base leading-6 text-foreground/75">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className={`grid gap-3 pt-2 ${project.demo ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-2"}`}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className={`primary-button px-4 py-2 text-base ${project.demo ? "col-span-2" : ""}`}
                  >
                    Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="outline-button px-4 py-2 text-base"
                  >
                    <Github className="mr-1 h-4 w-4" />
                    Code
                  </a>
                  {project.demo ? (
                    <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="outline-button px-4 py-2 text-base"
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
