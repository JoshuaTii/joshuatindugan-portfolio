"use client";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const navLinks = ["About", "Work", "Info", "Contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach((link) => {
      const el = document.getElementById(link.toLowerCase());
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileOpen(false);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        // Border is ALWAYS 1px — only color transitions, never width.
        // This prevents the 1px layout shift that caused the white-line flash.
        backgroundColor: scrolled ? "rgba(9,9,9,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
        transition:
          "background-color 300ms ease, border-color 300ms ease, backdrop-filter 300ms ease",
      }}
    >
      {/* Fixed 68px height matches SAGE navbar — never changes on scroll */}
      <div
        className="section-container flex items-center justify-between"
        style={{ height: 68 }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontSize: "0.875rem",
            transition: "color 300ms ease",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#4ade80")}
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)")
          }
        >
          JT
        </button>

        {/* Desktop nav */}
        <ul
          className="hidden md:flex items-center"
          style={{ gap: 40, listStyle: "none", margin: 0, padding: 0 }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.toLowerCase();
            return (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    position: "relative",
                    fontSize: "0.8125rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: isActive ? "#4ade80" : "rgba(255,255,255,0.5)",
                    transition: "color 250ms ease",
                    paddingBottom: 4,
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLElement).style.color =
                        "rgba(255,255,255,0.85)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = isActive
                      ? "#4ade80"
                      : "rgba(255,255,255,0.5)";
                  }}
                >
                  {link}
                  {isActive && (
                    <motion.span
                      layoutId="home-nav-active"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 1.5,
                        borderRadius: 1,
                        backgroundColor: "#4ade80",
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center"
          style={{
            width: 36,
            height: 36,
            gap: 6,
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            style={{
              display: "block",
              width: 22,
              height: 1.5,
              backgroundColor: "rgba(255,255,255,0.6)",
              transform: mobileOpen ? "translateY(7.5px) rotate(45deg)" : "none",
              transition: "transform 200ms ease",
            }}
          />
          <span
            style={{
              display: "block",
              width: 22,
              height: 1.5,
              backgroundColor: "rgba(255,255,255,0.6)",
              opacity: mobileOpen ? 0 : 1,
              transition: "opacity 200ms ease",
            }}
          />
          <span
            style={{
              display: "block",
              width: 22,
              height: 1.5,
              backgroundColor: "rgba(255,255,255,0.6)",
              transform: mobileOpen ? "translateY(-7.5px) rotate(-45deg)" : "none",
              transition: "transform 200ms ease",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            backgroundColor: "rgba(9,9,9,0.96)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "16px 32px 24px",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
                cursor: "pointer",
                color:
                  activeSection === link.toLowerCase()
                    ? "#4ade80"
                    : "rgba(255,255,255,0.5)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontSize: "0.875rem",
                padding: "12px 0",
                transition: "color 250ms ease",
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
