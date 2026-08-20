"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = stored ? stored === "dark" : prefersDark;
    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      onClick={toggle}
      aria-label="다크모드 전환"
      className="fixed right-5 top-5 rounded-full border border-[var(--card-glass-border)] bg-[var(--toggle-bg)] p-2.5 text-lg shadow-[0_4px_16px_rgba(0,0,0,0.08)] backdrop-blur-md transition-transform hover:scale-105"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}
