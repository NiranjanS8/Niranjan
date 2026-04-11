"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { skillCategories } from "@/lib/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="relative bg-white/[0.02] px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-14">
      <div className="absolute right-0 top-1/2 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-3 sm:mb-12"
        >
          <Layers className="h-8 w-8 text-accent" />
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Skills &amp; Technologies</h2>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-[1.35rem] border border-white/[0.07] bg-white/[0.04] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.14)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.12] hover:bg-white/[0.055] hover:shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:rounded-[1.5rem] sm:p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-accent/10 p-3 transition-all duration-300 group-hover:bg-accent/15 group-hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)]">
                  <category.icon className="h-5 w-5 text-accent transition-transform duration-300 group-hover:scale-105" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/[0.08] bg-white/[0.05] px-3 py-1 text-sm text-gray-300 transition-all duration-200 hover:border-accent/30 hover:bg-white/[0.08] hover:text-white"
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
