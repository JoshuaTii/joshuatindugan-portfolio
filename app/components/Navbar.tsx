"use client";
import { useState, useEffect, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTheme } from "../providers/ThemeProvider";

const HOME_SECTIONS = [
  { label: "Home",     id: "hero"    },
  { label: "Projects", id: "work"    },
  { label: "About",    id: "about"   },
  { label: "Connect",  id: "connect" },
];

const ALL_LINKS = [
  ...HOME_SECTIONS.slice(0, 2),
  { label: "Prototypes", id: "prototypes" },
  ...HOME_SECTIONS.slice(2),
];

// Row 1 = 56px, divider = 1px, Row 2 = 48px
// Only Row 1 gets the scrolled background (inner div). Row 2 floats transparent.
export const HEADER_H = 105; // desktop total (56 + 1 + 48)
export const ROW1_H   = 56;  // mobile (Row 2 is hidden)

/* ── Theme toggle — exact SVG from reference design ────────────────────────
   Dark mode:  right half (moon) green-filled, sun pale outline
   Light mode: left half (sun) green-filled, moon pale outline
────────────────────────────────────────────────────────────────────────── */
function ThemeToggle({ theme, onClick }: { theme: string; onClick: () => void }) {
  const isDark = theme === "dark";
  return (
    <button
      onClick={onClick}
      aria-label="Toggle color mode"
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      style={{ background: "none", border: "none", cursor: "pointer", padding: 0, lineHeight: 0, flexShrink: 0 }}
    >
      <svg width="71" height="26" viewBox="0 0 71 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Active-half green fill */}
        <rect x={isDark ? 35 : 0} y="0.257812" width="36" height="25" rx="12.5" fill="#4ADE80" />

        {/* Sun icon — left side */}
        <path
          d="M11.0938 12.7578H11.895M18.3047 5.54688V6.34809M24.7144 12.7578H25.5156M18.3047 19.1675V19.9688M13.1769 7.63003L13.7378 8.19089M23.4325 7.63003L22.8716 8.19089M22.8716 17.3247L23.4325 17.8856M13.7378 17.3247L13.1769 17.8856M15.0998 12.7578C15.0998 13.6078 15.4375 14.423 16.0385 15.024C16.6395 15.625 17.4547 15.9627 18.3047 15.9627C19.1547 15.9627 19.9698 15.625 20.5709 15.024C21.1719 14.423 21.5095 13.6078 21.5095 12.7578C21.5095 11.9078 21.1719 11.0927 20.5709 10.4916C19.9698 9.89061 19.1547 9.55295 18.3047 9.55295C17.4547 9.55295 16.6395 9.89061 16.0385 10.4916C15.4375 11.0927 15.0998 11.9078 15.0998 12.7578Z"
          stroke={isDark ? "#B4FFCF" : "#25613B"}
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        />

        {/* Moon icon — right side */}
        <path
          d="M52.404 6.66217H52.7062C51.7182 7.54501 51.0832 8.73288 50.9115 10.0193C50.7398 11.3057 51.0422 12.6093 51.7662 13.7035C52.4902 14.7978 53.5901 15.6134 54.8745 16.0086C56.159 16.4039 57.5468 16.3538 58.7969 15.867C58.316 16.9797 57.5301 17.946 56.523 18.6628C55.5159 19.3797 54.3253 19.8201 53.0783 19.9372C51.8313 20.0543 50.5746 19.8437 49.4423 19.3278C48.31 18.8119 47.3446 18.0101 46.649 17.0079C45.9534 16.0057 45.5537 14.8407 45.4926 13.6372C45.4315 12.4336 45.7112 11.2367 46.302 10.1741C46.8928 9.11147 47.7724 8.223 48.847 7.60346C49.9217 6.98392 51.151 6.65654 52.404 6.65625V6.66217Z"
          stroke={isDark ? "#25613B" : "#1c5a37"}
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        />

        {/* Pill outline — visible in both themes */}
        <rect x="0.5" y="0.5" width="70" height="24.5156" rx="12.2578"
          stroke={isDark ? "#BAFFD3" : "#1d7a46"} strokeOpacity={isDark ? 1 : 0.55} />
      </svg>
    </button>
  );
}

export function Navbar() {
  const { theme, toggle } = useTheme();
  const pathname = usePathname();
  const router   = useRouter();

  const isHome       = pathname === "/" || pathname === "";
  const isPrototypes = pathname.startsWith("/prototypes");

  const [scrolled,      setScrolled]      = useState(false);
  const [mobileOpen,    setMobileOpen]    = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const ids = HOME_SECTIONS.map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }); },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [mobileOpen]);

  const handleNav = useCallback((id: string) => {
    setMobileOpen(false);
    if (id === "prototypes") { router.push("/prototypes"); return; }
    if (isHome) {
      const el = document.getElementById(id);
      if (el) {
        const headerH = window.innerWidth >= 1024 ? HEADER_H : ROW1_H;
        const top = el.getBoundingClientRect().top + window.scrollY - headerH;
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else {
      router.push(`/${id === "hero" ? "" : `#${id}`}`);
    }
  }, [isHome, router]);

  const getActive = (id: string) => {
    if (id === "prototypes") return isPrototypes;
    if (isPrototypes) return false;
    if (isHome) return activeSection === id;
    return false;
  };

  const GREEN = "var(--green)";

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}
      >
        {/* Background layer — only covers Row 1 + divider (57px). Row 2 stays transparent. */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 57,
            backgroundColor: scrolled ? "var(--nav-bg)" : "transparent",
            backdropFilter: scrolled ? "blur(16px)" : "none",
            transition: "background-color 300ms ease, backdrop-filter 300ms ease",
            zIndex: 0, pointerEvents: "none",
          }}
        />
        {/* ── Row 1: Logo · Nav links · Social icons ──────────────────────── */}
        <div
          className="section-container flex items-center justify-between"
          style={{ height: 56, position: "relative", zIndex: 1 }}
        >
          {/* Logo / name */}
          <button
            onClick={() => { isHome ? window.scrollTo({ top: 0, behavior: "smooth" }) : router.push("/"); }}
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "var(--font-sans, 'Montserrat', sans-serif)",
              fontSize: "0.88rem", fontWeight: 700, letterSpacing: "0.03em",
              color: "var(--text)", transition: "color 200ms ease", flexShrink: 0,
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = GREEN)}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text)")}
          >
            Joshua Uba Tindugan
          </button>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center" style={{ gap: 28 }}>
            {ALL_LINKS.map((link) => {
              const isActive = getActive(link.id);
              return (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    position: "relative",
                    fontFamily: "var(--font-sans, 'Montserrat', sans-serif)",
                    fontSize: "0.75rem", fontWeight: isActive ? 600 : 500,
                    letterSpacing: "0.04em",
                    color: isActive ? GREEN : "var(--text-2)",
                    transition: "color 200ms ease",
                    paddingBottom: 2,
                  }}
                  onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.color = GREEN; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = isActive ? GREEN : "var(--text-2)"; }}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1.5, background: GREEN, borderRadius: 1 }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right side: social icons (desktop) + hamburger (mobile) */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            {/* Social icons — desktop only */}
            <div className="hidden lg:flex items-center" style={{ gap: 14 }}>
              {[
                { src: "/icons/email.svg",     href: "mailto:jtindugan16@gmail.com",                label: "Email"    },
                { src: "/icons/linkedin.svg",  href: "https://www.linkedin.com/in/joshua-tindugan", label: "LinkedIn" },
                { src: "/icons/instagram.svg", href: "https://www.instagram.com/JoshuaTi_",         label: "Instagram"},
              ].map((icon) => (
                <a
                  key={icon.label}
                  href={icon.href}
                  target={icon.href.startsWith("http") ? "_blank" : undefined}
                  rel={icon.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={icon.label}
                  className="social-icon"
                >
                  <Image
                    src={icon.src}
                    alt={icon.label}
                    width={18}
                    height={18}
                    style={{ filter: theme === "light" ? "invert(1)" : "none", width: 18, height: "auto" }}
                  />
                </a>
              ))}
            </div>

            {/* Hamburger — mobile/tablet only; uses className only (no inline display) */}
            <button
              className="flex lg:hidden flex-col justify-center"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              style={{ gap: 5, width: 36, height: 36, background: "none", border: "none", cursor: "pointer" }}
            >
              {/* Three straight lines → animate to × when open */}
              <span style={{ display: "block", height: 1.5, width: 22, background: "var(--text)", transform: mobileOpen ? "translateY(6.5px) rotate(45deg)" : "none", transition: "transform 220ms ease" }} />
              <span style={{ display: "block", height: 1.5, width: 22, background: "var(--text)", opacity: mobileOpen ? 0 : 1, transition: "opacity 180ms ease" }} />
              <span style={{ display: "block", height: 1.5, width: 22, background: "var(--text)", transform: mobileOpen ? "translateY(-6.5px) rotate(-45deg)" : "none", transition: "transform 220ms ease" }} />
            </button>
          </div>
        </div>

        {/* ── Divider ────────────────────────────────────────────────────────── */}
        <div
          className="hidden lg:block"
          style={{ borderTop: "1px solid var(--nav-border)", position: "relative", zIndex: 1 }}
        />

        {/* ── Row 2: Resume · CV · Toggle (desktop only, right-aligned) ──────
            No background — floats transparently below Row 1's backdrop.      */}
        <div className="hidden lg:block" style={{ position: "relative", zIndex: 1 }}>
          <div
            className="section-container flex items-center justify-end"
            style={{ height: 48, gap: 24 }}
          >
            <ThemeToggle theme={theme} onClick={toggle} />
          </div>
        </div>
      </motion.header>

      {/* ── Mobile / tablet full-screen menu ──────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed", inset: 0, zIndex: 49,
              background: "var(--bg)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              gap: 28,
            }}
          >
            {/* Nav links — Montserrat, uppercase */}
            {ALL_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontFamily: "var(--font-sans, 'Montserrat', sans-serif)",
                  fontSize: "1.25rem", fontWeight: 700, letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: getActive(link.id) ? GREEN : "var(--text)",
                  transition: "color 200ms ease",
                }}
              >
                {link.label}
              </button>
            ))}

            {/* Secondary controls */}
            <div style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 8 }}>
              <ThemeToggle theme={theme} onClick={toggle} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
