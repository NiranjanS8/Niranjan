"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const paragraphs = [
  "I am a final-year engineering student focused on backend development and building real-world software systems. I enjoy working with Java, Spring Boot, and PostgreSQL to design clean, scalable APIs and backend architectures.",
  "Through hands-on projects and internship experience, I have worked on database integration, authentication, ORM frameworks like Hibernate, and backend application structure. I focus on writing clean, maintainable code and understanding how systems work beyond just implementation.",
  "Currently, I am looking for backend developer roles and internships where I can contribute to real-world products, improve my system design skills, and grow as a software engineer.",
];

export default function AboutSection() {
  return (
    <section id="about" className="relative border-t border-white/[0.06] bg-white/[0.02] px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20">
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-3 sm:mb-12"
        >
          <Code2 className="h-8 w-8 text-accent" />
          <h2 className="text-3xl font-bold text-white sm:text-4xl">About Me</h2>
        </motion.div>

        <div className="space-y-5 sm:space-y-6">
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={paragraph}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="text-base leading-8 text-gray-400 sm:text-lg"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
