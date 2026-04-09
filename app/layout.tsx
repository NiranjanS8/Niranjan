import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Niranjan S | Backend Developer",
  description:
    "Minimalist portfolio for Niranjan S, a backend developer focused on Java, Spring Boot, PostgreSQL, and scalable APIs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
