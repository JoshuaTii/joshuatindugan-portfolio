"use client";
import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Overview", href: "#overview", id: "overview" },
  { label: "Context", href: "#context", id: "context" },
  { label: "Research", href: "#research", id: "research" },
  { label: "Features", href: "#features", id: "features" },
  { label: "Design", href: "#design", id: "design" },
  { label: "Final", href: "#final", id: "final" },
];

const ACCENT = "#60A5FA";

export function GWRideNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-15% 0px -65% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
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
        {/* Left */}
        <div className="flex items-center" style={{ gap: 20 }}>
          <Link
            href="/#work"
            className="flex items-center gap-1.5"
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
          <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "rgba(242,237,232,0.85)", letterSpacing: "0.02em" }}>
            GW Ride
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center" style={{ gap: 28 }}>
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-xs uppercase relative"
                style={{
                  letterSpacing: "0.1em",
                  textDecoration: "none",
                  color: isActive ? ACCENT : "rgba(242,237,232,0.4)",
                  transition: "color 250ms ease",
                  paddingBottom: 4,
                  display: "flex",
                  flexDirection: "column" as const,
                  alignItems: "center",
                  gap: 0,
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = "rgba(242,237,232,0.75)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = isActive ? ACCENT : "rgba(242,237,232,0.4)";
                }}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="gwride-nav-active"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 1.5,
                      borderRadius: 1,
                      backgroundColor: ACCENT,
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center"
          style={{ width: 36, height: 36, gap: 6, background: "none", border: "none", cursor: "pointer" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className="block bg-white/60"
            style={{ width: 22, height: 1.5, transform: open ? "translateY(7.5px) rotate(45deg)" : "none", transition: "transform 200ms ease" }}
          />
          <span
            className="block bg-white/60"
            style={{ width: 22, height: 1.5, opacity: open ? 0 : 1, transition: "opacity 200ms ease" }}
          />
          <span
            className="block bg-white/60"
            style={{ width: 22, height: 1.5, transform: open ? "translateY(-7.5px) rotate(-45deg)" : "none", transition: "transform 200ms ease" }}
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
              onClick={(e) => handleNavClick(e, link.id)}
              className="block text-sm py-3"
              style={{
                textDecoration: "none",
                color: activeSection === link.id ? ACCENT : "rgba(242,237,232,0.5)",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
                transition: "color 250ms ease",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
