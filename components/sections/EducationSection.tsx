"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="relative px-4 py-20 sm:px-6">
      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center justify-center gap-3 sm:mb-12 md:justify-start"
        >
          <span className="icon-badge h-12 w-12">
            <GraduationCap className="h-6 w-6" />
          </span>
          <h2 className="scribble-underline text-4xl font-bold text-foreground sm:text-5xl">Education</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative border-l-[3px] border-dashed border-foreground pl-6 sm:pl-8"
        >
          <div className="absolute -left-[12px] top-1">
            <div className="h-5 w-5 rounded-full border-[3px] border-[var(--badge-border)] bg-accent shadow-[var(--timeline-dot-shadow)]" />
          </div>

          <div className="sketch-card group rotate-[-0.4deg] p-6 transition-transform duration-100 hover:rotate-[0.7deg] hover:bg-[var(--post-it)]">
            <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-foreground transition-colors group-hover:text-accent">
                  B.E. in Artificial Intelligence & Data Science
                </h3>
                <p className="text-xl text-[var(--secondary-accent)]">
                  East West Institute of Technology
                </p>
              </div>
              <div className="flex flex-col gap-1 md:items-end">
                <span className="section-label flex items-center gap-1.5 text-base">
                  <Calendar className="h-4 w-4" />
                  2022 – 2026
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="sketch-chip flex items-center gap-1.5 bg-card px-3 py-1 text-base">
                <MapPin className="h-4 w-4 text-accent" />
                Bengaluru, India
              </div>
              <div className="sketch-chip flex items-center gap-1.5 bg-card px-3 py-1 text-base">
                <Award className="h-4 w-4 text-[var(--secondary-accent)]" />
                8.5 CGPA
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
