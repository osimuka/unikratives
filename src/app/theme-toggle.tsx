"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

type Theme = "light" | "dark";

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem("theme");

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => getPreferredTheme());

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="grid size-11 place-items-center rounded-lg border border-stone-200 bg-white text-stone-800 shadow-sm transition hover:border-emerald-700 hover:text-emerald-800 dark:border-white/10 dark:bg-stone-900 dark:text-stone-100 dark:hover:border-emerald-400 dark:hover:text-emerald-300 cursor-pointer"
    >
      {isDark ? <FaSun aria-hidden className="size-4" /> : <FaMoon aria-hidden className="size-4" />}
    </button>
  );
}
