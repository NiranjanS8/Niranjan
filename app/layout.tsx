import type { Metadata } from "next";
import { Kalam, Patrick_Hand } from "next/font/google";
import "./globals.css";

const patrickHand = Patrick_Hand({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-body",
});

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Niranjan | Backend & AI Engineer",
  description:
    "Portfolio of Niranjan — Backend & AI Engineer building scalable APIs with Spring Boot and intelligent systems with LangChain, RAG pipelines, and agentic workflows.",
  icons: {
    icon: "/n_icon.png",
    shortcut: "/n_icon.png",
    apple: "/n_icon.png",
  },
  openGraph: {
    title: "Niranjan | Backend & AI Engineer",
    description:
      "Backend & AI Engineer building scalable APIs with Spring Boot and intelligent systems with LangChain, RAG pipelines, and agentic workflows. View projects and get in touch.",
    url: "https://www.niranjans.tech",
    siteName: "Niranjan's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Niranjan | Backend & AI Engineer",
    description:
      "Backend & AI Engineer building scalable APIs with Spring Boot and intelligent systems with LangChain, RAG, and agentic workflows.",
  },
  metadataBase: new URL("https://www.niranjans.tech"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark-theme');
                  } else {
                    document.documentElement.classList.remove('dark-theme');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${patrickHand.variable} ${kalam.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Niranjan",
              url: "https://www.niranjans.tech",
              jobTitle: "Backend & AI Engineer",
              description:
                "Backend & AI Engineer building scalable APIs with Spring Boot and intelligent systems with LangChain, RAG pipelines, and agentic workflows.",
              sameAs: [
                "https://github.com/NiranjanS8",
                "https://www.linkedin.com/in/niranjans8/",
              ],
              knowsAbout: [
                "Java",
                "Spring Boot",
                "Python",
                "LangChain",
                "LangGraph",
                "RAG Pipelines",
                "AI Agents",
                "FastAPI",
                "PostgreSQL",
                "Redis",
                "Docker",
                "AWS",
                "REST APIs",
                "Microservices",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
