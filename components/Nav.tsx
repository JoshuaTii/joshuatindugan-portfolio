"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Info", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(5,5,7,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-bold tracking-widest uppercase"
            style={{ color: "var(--lime)", letterSpacing: "0.2em" }}
          >
            JT
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{
                  color: pathname === l.href ? "var(--lime)" : "var(--muted)",
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 hover:bg-[var(--lime)] hover:text-black hover:border-[var(--lime)]"
              style={{ borderColor: "var(--border)", color: "var(--text)" }}
            >
              Book a Call
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-0.5 transition-all duration-200"
              style={{
                background: "var(--text)",
                transform: menuOpen ? "rotate(45deg) translate(4px,4px)" : "none",
              }}
            />
            <span
              className="block w-5 h-0.5 transition-all duration-200"
              style={{
                background: "var(--text)",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-5 h-0.5 transition-all duration-200"
              style={{
                background: "var(--text)",
                transform: menuOpen ? "rotate(-45deg) translate(4px,-4px)" : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden"
            style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}
          >
            <nav className="flex flex-col px-6 py-6 gap-5">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-base font-medium"
                  style={{ color: pathname === l.href ? "var(--lime)" : "var(--text)" }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="text-sm font-semibold mt-2 px-4 py-2.5 rounded-full text-center"
                style={{ background: "var(--lime)", color: "#000" }}
              >
                Book a Call
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
