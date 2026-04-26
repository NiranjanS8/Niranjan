import { AtSign, Copyright, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 border-t-[3px] border-dashed border-foreground/40 pt-8 md:flex-row">
        <div className="text-center md:text-left">
          <p className="inline-flex items-center gap-2 text-lg text-foreground/70">
            <Copyright className="h-4 w-4" />
            <span>2026 Niranjan. All rights reserved.</span>
          </p>
        </div>

        <div className="flex items-center gap-4 md:pr-20">
          <a href="https://github.com/NiranjanS8" target="_blank" rel="noopener noreferrer" className="icon-badge h-11 w-11 bg-white transition-transform duration-100 hover:rotate-[-3deg]" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/niranjans8/" target="_blank" rel="noopener noreferrer" className="icon-badge h-11 w-11 bg-white transition-transform duration-100 hover:rotate-3" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:niranjansankeshwari9@gmail.com" className="icon-badge h-11 w-11 bg-white transition-transform duration-100 hover:rotate-[-2deg]" aria-label="Email">
            <AtSign className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
