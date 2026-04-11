"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Linkedin, Mail, Phone, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative px-4 py-16 sm:px-6 sm:py-24">
      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center sm:mb-12"
        >
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-[0.16em] text-accent">
              Available for opportunities
            </span>
          </div>
          <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">Get In Touch</h2>
          <p className="mx-auto max-w-xl text-sm leading-7 text-gray-400 sm:text-base md:text-lg">
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
            <div className="flex h-full w-full flex-col rounded-2xl border border-white/[0.04] bg-white/[0.035] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur-md sm:p-6">
              <h3 className="mb-6 text-xl font-bold text-white">Let&apos;s Connect</h3>
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
                    className="group flex items-center gap-3 rounded-xl border border-white/[0.045] bg-white/[0.045] p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.06] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] sm:gap-4 sm:p-4"
                  >
                    <div className="rounded-lg bg-accent/10 p-3 transition-all duration-200 group-hover:bg-accent/15">
                      <item.icon className="h-5 w-5 text-accent transition-transform duration-200 group-hover:scale-105" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <p className="truncate text-white">{item.value}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-500 transition-colors duration-200 group-hover:text-accent" />
                  </a>
                ))}
              </div>

              <div className="mt-auto pt-4">
                <div className="rounded-xl border border-white/[0.04] bg-white/[0.03] px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-white/[0.04] p-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-gray-500">Phone</p>
                      <a href="tel:+919606694256" className="mt-1 inline-block text-sm text-gray-400 transition-colors hover:text-white">
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
            className="flex h-full flex-col rounded-2xl border border-white/[0.04] bg-white/[0.035] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur-md sm:p-6"
          >
            <h3 className="text-xl font-bold text-white">Best Ways To Reach Me</h3>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Email and LinkedIn are the fastest</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Open to backend roles and internships</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Happy to discuss projects and collaborations</span>
              </li>
            </ul>

            <div className="mt-6 space-y-3 text-sm text-gray-300">
              <section className="rounded-xl border border-white/[0.045] bg-white/[0.045] p-4 transition-all duration-200 hover:bg-white/[0.06] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)]">
                <h4 className="text-xs uppercase tracking-[0.18em] text-accent">Open To</h4>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                    <span>Backend developer roles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                    <span>Internships and entry-level opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
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
