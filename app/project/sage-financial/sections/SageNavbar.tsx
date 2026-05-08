"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Context", href: "#context" },
  { label: "Research", href: "#research" },
  { label: "Features", href: "#features" },
  { label: "Design", href: "#design-evolution" },
  { label: "Final", href: "#final-design" },
];

export function SageNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: scrolled ? "rgba(9,9,11,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        transition: "background-color 300ms ease, border-color 300ms ease, backdrop-filter 300ms ease",
      }}
    >
      <div className="section-container flex items-center justify-between" style={{ height: 68 }}>
        {/* Left — back link + logo */}
        <div className="flex items-center" style={{ gap: 20 }}>
          <Link
            href="/#work"
            className="flex items-center gap-1.5 group"
            style={{
              textDecoration: "none",
              color: "rgba(242,237,232,0.4)",
              fontSize: "0.75rem",
              letterSpacing: "0.06em",
              transition: "color 250ms ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#f2ede8")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(242,237,232,0.4)")}
          >
            <ArrowLeft size={13} />
            Portfolio
          </Link>
          <span style={{ color: "rgba(255,255,255,0.1)", fontSize: "0.7rem" }}>/</span>
          <img
            src="/sage/logo.png"
            alt="SAGE"
            style={{ height: 24, width: "auto", objectFit: "contain" }}
          />
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center" style={{ gap: 32 }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase"
              style={{
                letterSpacing: "0.1em",
                textDecoration: "none",
                color: "rgba(242,237,232,0.4)",
                transition: "color 250ms ease",
              }}
              onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#7ab688")}
              onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(242,237,232,0.4)")}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center"
          style={{ width: 36, height: 36, gap: 6 }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className="block bg-white/60"
            style={{
              width: 22,
              height: 1.5,
              transform: open ? "translateY(7.5px) rotate(45deg)" : "none",
              transition: "transform 200ms ease",
            }}
          />
          <span
            className="block bg-white/60"
            style={{
              width: 22,
              height: 1.5,
              opacity: open ? 0 : 1,
              transition: "opacity 200ms ease",
            }}
          />
          <span
            className="block bg-white/60"
            style={{
              width: 22,
              height: 1.5,
              transform: open ? "translateY(-7.5px) rotate(-45deg)" : "none",
              transition: "transform 200ms ease",
            }}
          />
        </button>
      </div>

      {open && (
        <div
          className="md:hidden"
          style={{
            backgroundColor: "rgba(9,9,11,0.96)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "16px 32px 24px",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm py-3 transition-colors"
              style={{
                textDecoration: "none",
                color: "rgba(242,237,232,0.5)",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
                transition: "color 250ms ease",
              }}
              onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#7ab688")}
              onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(242,237,232,0.5)")}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
