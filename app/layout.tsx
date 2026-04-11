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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} ${kreon.variable}`}>{children}</body>
    </html>
  );
}
