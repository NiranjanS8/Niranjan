"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackToProjects() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="outline-button inline-flex items-center gap-2 px-4 py-2.5 text-lg"
    >
      <ArrowLeft className="h-4 w-4" />
      Back to Projects
    </button>
  );
}
