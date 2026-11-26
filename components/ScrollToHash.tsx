"use client";

import { useLayoutEffect } from "react";

export default function ScrollToHash() {
  useLayoutEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const target = document.getElementById(hash.slice(1));
    if (target) {
      target.scrollIntoView({ behavior: "instant" });
    }
  }, []);

  return null;
}
