"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/lib/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative bg-white/[0.02] px-4 py-16 sm:px-6 sm:py-24">
      <div className="absolute bottom-0 right-1/2 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-3 sm:mb-12"
        >
          <Briefcase className="h-8 w-8 text-accent" />
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Experience</h2>
        </motion.div>

        <div className="space-y-8">
          {experience.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative border-l-2 border-gradient pl-6 pb-8 last:pb-0 sm:pl-8"
              style={{ borderImage: "linear-gradient(to bottom, #3B82F6, rgba(59, 130, 246, 0.2)) 1" }}
            >
              <div className="absolute -left-[9px] top-0">
                <div className="relative h-4 w-4 rounded-full border-4 border-background bg-accent">
                  <div className="absolute inset-0 rounded-full bg-accent opacity-75 animate-ping" />
                </div>
              </div>

              <div className="group rounded-xl border border-white/10 bg-card p-6 transition-all hover:border-accent/50">
                <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white transition-colors group-hover:text-accent">{item.role}</h3>
                    <p className="text-accent">{item.company}</p>
                  </div>
                  {item.duration ? <p className="mt-2 text-sm text-gray-400 md:mt-0">{item.duration}</p> : null}
                </div>

                <ul className="space-y-3">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="grid grid-cols-[12px_1fr] items-start gap-x-3">
                      <span className="mt-[0.55rem] h-1.5 w-1.5 rounded-full bg-accent/80" />
                      <p className="leading-7 text-gray-400">{responsibility}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
