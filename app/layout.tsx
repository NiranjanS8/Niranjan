import type { Metadata } from "next";
import { Kreon, Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-body",
});

const kreon = Kreon({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Niranjan | Backend Developer",
  description:
    "Minimalist portfolio for Niranjan, a backend developer focused on Java, Spring Boot, PostgreSQL, and scalable APIs.",
  icons: {
    icon: "/n_icon.png",
    shortcut: "/n_icon.png",
    apple: "/n_icon.png",
  },
  openGraph: {
    title: "Niranjan | Backend Developer",
    description:
      "Backend developer focused on Java, Spring Boot, PostgreSQL, and scalable APIs. View projects and get in touch.",
    url: "https://www.niranjans.tech",
    siteName: "Niranjan's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Niranjan | Backend Developer",
    description:
      "Backend developer focused on Java, Spring Boot, PostgreSQL, and scalable APIs.",
  },
  metadataBase: new URL("https://www.niranjans.tech"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} ${kreon.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Niranjan",
              url: "https://www.niranjans.tech",
              jobTitle: "Backend Developer",
              description:
                "Backend developer focused on Java, Spring Boot, PostgreSQL, and scalable APIs.",
              sameAs: [
                "https://github.com/NiranjanS8",
                "https://www.linkedin.com/in/niranjans8/",
              ],
              knowsAbout: [
                "Java",
                "Spring Boot",
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
