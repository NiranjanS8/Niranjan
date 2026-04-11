"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackToProjects() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-gray-300 transition-all hover:-translate-y-0.5 hover:border-accent/30 hover:bg-white/[0.06] hover:text-white"
    >
      <ArrowLeft className="h-4 w-4" />
      Back to Projects
    </button>
  );
}
