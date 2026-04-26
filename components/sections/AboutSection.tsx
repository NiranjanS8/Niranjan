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
    <section id="about" className="paper-band relative px-4 py-20 sm:px-6">
      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center justify-center gap-3 sm:mb-12 md:justify-start"
        >
          <span className="icon-badge h-12 w-12">
            <Code2 className="h-6 w-6" />
          </span>
          <h2 className="scribble-underline text-4xl font-bold text-foreground sm:text-5xl">About Me</h2>
        </motion.div>

        <div className="sketch-card-strong tape mx-auto max-w-4xl rotate-[-0.6deg] p-6 sm:p-8">
          <div className="space-y-5 sm:space-y-6">
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={paragraph}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="text-xl leading-8 text-foreground/80 sm:text-2xl"
            >
              {paragraph}
            </motion.p>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
