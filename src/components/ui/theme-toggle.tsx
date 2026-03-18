"use client";

import { useEffect, useState } from "react";
import {
  DEFAULT_THEME,
  isTheme,
  THEME_STORAGE_KEY,
  type Theme,
} from "@/lib/theme";

function applyTheme(nextTheme: Theme) {
  const root = document.documentElement;
  root.setAttribute("data-theme", nextTheme);
  root.style.colorScheme = nextTheme;
  localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");

    if (isTheme(current)) {
      setTheme(current);
      return;
    }

    const saved = localStorage.getItem(THEME_STORAGE_KEY);

    if (isTheme(saved)) {
      setTheme(saved);
      applyTheme(saved);
      return;
    }

    applyTheme(DEFAULT_THEME);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <button
      type="button"
      data-theme={theme}
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle color theme"
      aria-pressed={theme === "light"}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      <span className="theme-toggle__track" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          className="theme-toggle__icon theme-toggle__icon--sun"
        >
          <circle cx="12" cy="12" r="4" fill="currentColor" />
          <path
            d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.64 5.64l1.56 1.56M16.8 16.8l1.56 1.56M18.36 5.64L16.8 7.2M7.2 16.8l-1.56 1.56"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        <svg
          viewBox="0 0 24 24"
          className="theme-toggle__icon theme-toggle__icon--moon"
        >
          <path
            fill="currentColor"
            d="M14.3 3.2a1 1 0 0 0-1.22 1.2c.84 3.59-1.18 7.28-4.68 8.54a1 1 0 0 0-.05 1.86 8.96 8.96 0 0 0 11.7-9.36 1 1 0 0 0-1.74-.53A6.77 6.77 0 0 1 14 6.65c-.2-1.1-.16-2.26.3-3.45Z"
          />
        </svg>

        <span className="theme-toggle__thumb" />
      </span>
    </button>
  );
}
