"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 180;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) continue;
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b-2 border-dashed border-foreground bg-background/90" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <button
            onClick={() => scrollToSection("home")}
            className="sketch-chip px-4 py-1.5 text-xl transition-transform duration-100 hover:rotate-[-1deg] hover:bg-[var(--post-it)] sm:text-2xl"
          >
            Niranjan
          </button>

          <div className="hidden items-center gap-6 md:flex lg:gap-8">
            {sections.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                data-active={activeSection === item.id}
                className={`sketch-link text-lg transition-colors hover:text-accent ${
                  activeSection === item.id ? "text-accent" : "text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="z-50 flex h-11 w-11 items-center justify-center border-2 border-foreground bg-white p-2 text-[var(--secondary-accent)] shadow-[3px_3px_0px_0px_var(--foreground)] transition-transform duration-100 hover:rotate-[-2deg] md:hidden"
            style={{ borderRadius: "55% 45% 52% 48% / 44% 54% 46% 56%" }}
            onClick={() => setMobileMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-6 px-6">
              {sections.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  onClick={() => {
                    scrollToSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`sketch-card w-full max-w-xs px-5 py-3 text-2xl transition-transform duration-100 hover:rotate-1 hover:bg-[var(--post-it)] ${
                    activeSection === item.id ? "text-accent" : "text-foreground"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
