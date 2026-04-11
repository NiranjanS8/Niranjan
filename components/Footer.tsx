import { AtSign, Copyright, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="inline-flex items-center gap-2 text-sm text-gray-400">
            <Copyright className="h-4 w-4" />
            <span>2026 Niranjan. All rights reserved.</span>
          </p>
        </div>

        <div className="flex items-center gap-4 md:pr-20">
          <a href="https://github.com/NiranjanS8" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 transition-colors hover:text-accent" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/niranjans8/" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 transition-colors hover:text-accent" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:niranjansankeshwari9@gmail.com" className="p-2 text-gray-400 transition-colors hover:text-accent" aria-label="Email">
            <AtSign className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
