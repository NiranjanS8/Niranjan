import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { href: "https://github.com/NiranjanS8", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/niranjans8/", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:niranjansankeshwari9@gmail.com", label: "Email", icon: Mail },
];

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-3 pt-4 sm:gap-4">
      {links.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="icon-badge h-12 w-12 bg-white transition-transform duration-100 hover:translate-x-0.5 hover:translate-y-0.5 hover:rotate-[-2deg] hover:bg-[var(--post-it)]"
          aria-label={item.label}
        >
          <item.icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}
