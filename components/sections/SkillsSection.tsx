"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { skillCategories } from "@/lib/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="relative px-4 py-20 sm:px-6">
      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center justify-center gap-3 sm:mb-12 md:justify-start"
        >
          <span className="icon-badge h-12 w-12">
            <Layers className="h-6 w-6" />
          </span>
          <h2 className="scribble-underline text-4xl font-bold text-foreground sm:text-5xl">Skills &amp; Technologies</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`sketch-card group p-5 transition-transform duration-100 hover:rotate-1 hover:bg-[var(--post-it)] sm:p-6 ${
                index % 2 === 0 ? "rotate-[-0.7deg]" : "rotate-[0.8deg]"
              }`}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="icon-badge h-12 w-12 bg-white transition-transform duration-100 group-hover:rotate-[-3deg]">
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="sketch-chip px-3 py-1 text-base transition-transform duration-100 hover:rotate-[-1deg] hover:bg-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
