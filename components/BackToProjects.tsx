"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackToProjects() {
  return (
    <Link
      href="/#projects"
      className="outline-button inline-flex items-center gap-2 px-4 py-2.5 text-lg"
    >
      <ArrowLeft className="h-4 w-4" />
      Back to Projects
    </Link>
  );
}
