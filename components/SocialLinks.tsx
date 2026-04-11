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
          className="rounded-lg border border-white/10 bg-white/5 p-3 transition-all hover:border-accent hover:bg-accent/20"
          aria-label={item.label}
        >
          <item.icon className="h-5 w-5 text-gray-300" />
        </a>
      ))}
    </div>
  );
}
