"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Linkedin, Mail, Phone, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="paper-band relative px-4 py-20 sm:px-6">
      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center sm:mb-12"
        >
          <div className="mb-4 flex justify-center">
            <span className="section-label text-lg">
              Available for opportunities
            </span>
          </div>
          <h2 className="mb-3 text-4xl font-bold text-foreground sm:text-5xl">Get In Touch</h2>
          <p className="mx-auto max-w-2xl text-xl leading-8 text-foreground/75 sm:text-2xl">
            Open to backend roles, internships, and collaborations.
            <span className="block">Feel free to reach out - I usually respond quickly.</span>
          </p>
        </motion.div>

        <div className="grid gap-5 sm:gap-8 md:grid-cols-2 md:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex h-full"
          >
            <div className="sketch-card-strong tape flex h-full w-full flex-col p-5 sm:p-6">
              <h3 className="mb-6 text-3xl font-bold text-foreground">Let&apos;s Connect</h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "niranjansankeshwari9@gmail.com", href: "mailto:niranjansankeshwari9@gmail.com" },
                  { icon: Github, label: "GitHub", value: "github.com/NiranjanS8", href: "https://github.com/NiranjanS8" },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    value: "linkedin.com/in/niranjans8",
                    href: "https://www.linkedin.com/in/niranjans8/",
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="sketch-card group flex items-center gap-3 bg-white p-3.5 transition-transform duration-100 hover:rotate-[-0.7deg] hover:bg-[var(--post-it)] sm:gap-4 sm:p-4"
                  >
                    <div className="icon-badge h-12 w-12 bg-white transition-transform duration-100 group-hover:rotate-[-3deg]">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-base text-foreground/60">{item.label}</p>
                      <p className="truncate text-xl text-foreground">{item.value}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-[var(--secondary-accent)]" />
                  </a>
                ))}
              </div>

              <div className="mt-auto pt-4">
                <div className="sketch-card bg-[var(--post-it)] px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="icon-badge h-10 w-10 bg-white">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-base text-foreground/60">Phone</p>
                      <a href="tel:+919606694256" className="mt-1 inline-block text-lg text-foreground transition-colors hover:text-accent">
                        +91 9606694256
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="sketch-card-strong tack flex h-full flex-col bg-[var(--post-it)] p-5 sm:p-6"
          >
            <h3 className="text-3xl font-bold text-foreground">Best Ways To Reach Me</h3>
            <ul className="mt-4 space-y-2 text-lg leading-7 text-foreground/75">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full border border-foreground bg-accent" />
                <span>Email and LinkedIn are the fastest</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full border border-foreground bg-accent" />
                <span>Open to backend roles and internships</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full border border-foreground bg-accent" />
                <span>Happy to discuss projects and collaborations</span>
              </li>
            </ul>

            <div className="mt-6 space-y-3 text-lg text-foreground/75">
              <section className="sketch-card bg-white p-4">
                <h4 className="text-xl font-bold text-accent">Open To</h4>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full border border-foreground bg-[var(--secondary-accent)]" />
                    <span>Backend developer roles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full border border-foreground bg-[var(--secondary-accent)]" />
                    <span>Internships and entry-level opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full border border-foreground bg-[var(--secondary-accent)]" />
                    <span>Meaningful technical collaborations</span>
                  </li>
                </ul>
              </section>
            </div>

            <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row sm:flex-wrap">
              <a href="mailto:niranjansankeshwari9@gmail.com" className="primary-button w-full shadow-[0_10px_30px_rgba(59,130,246,0.2)] sm:w-auto">
                <Send className="mr-2 h-4 w-4" />
                Email Me
              </a>
              <a href="https://www.linkedin.com/in/niranjans8/" target="_blank" rel="noopener noreferrer" className="outline-button w-full sm:w-auto">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
