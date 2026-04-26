"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/lib/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative px-4 py-20 sm:px-6">
      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center justify-center gap-3 sm:mb-12 md:justify-start"
        >
          <span className="icon-badge h-12 w-12">
            <Briefcase className="h-6 w-6" />
          </span>
          <h2 className="scribble-underline text-4xl font-bold text-foreground sm:text-5xl">Experience</h2>
        </motion.div>

        <div className="space-y-8">
          {experience.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative border-l-[3px] border-dashed border-foreground pb-8 pl-6 last:pb-0 sm:pl-8"
            >
              <div className="absolute -left-[12px] top-1">
                <div className="h-5 w-5 rounded-full border-[3px] border-foreground bg-accent shadow-[2px_2px_0px_0px_var(--foreground)]" />
              </div>

              <div className="sketch-card group rotate-[-0.4deg] p-6 transition-transform duration-100 hover:rotate-[0.7deg] hover:bg-[var(--post-it)]">
                <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground transition-colors group-hover:text-accent">{item.role}</h3>
                    <p className="text-xl text-[var(--secondary-accent)]">{item.company}</p>
                  </div>
                  {item.duration ? <p className="section-label mt-2 text-base md:mt-0">{item.duration}</p> : null}
                </div>

                <ul className="space-y-3">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="grid grid-cols-[12px_1fr] items-start gap-x-3">
                      <span className="mt-[0.55rem] h-2 w-2 rounded-full border border-foreground bg-accent" />
                      <p className="text-lg leading-7 text-foreground/75">{responsibility}</p>
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
