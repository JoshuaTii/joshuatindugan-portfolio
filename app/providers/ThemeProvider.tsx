"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeCtx { theme: Theme; toggle: () => void; }

const Ctx = createContext<ThemeCtx>({ theme: "dark", toggle: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  // Sync from localStorage on mount — runs client-side only
  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme | null) ?? "dark";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const toggle = () =>
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      document.documentElement.setAttribute("data-theme", next);
      return next;
    });

  return <Ctx.Provider value={{ theme, toggle }}>{children}</Ctx.Provider>;
}

export const useTheme = () => useContext(Ctx);
