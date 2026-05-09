"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const MAIN_SCREENS = [
  { src: "/sage/de-final-1.png", alt: "SAGE final screen 1" },
  { src: "/sage/de-final-2.png", alt: "SAGE final screen 2" },
  { src: "/sage/de-final-3.png", alt: "SAGE final screen 3" },
  { src: "/sage/de-final-4.png", alt: "SAGE final screen 4" },
];

const GALLERY_SCREENS = Array.from({ length: 17 }, (_, i) => ({
  src: `/sage/de-final-${i + 1}.png`,
  alt: `SAGE final design screen ${i + 1}`,
}));

const COLOR_SWATCHES = [
  { name: "White", hex: "#FFFFFF", desc: "Primary text: clean contrast for maximum readability." },
  { name: "Lime Green", hex: "#9BE931", desc: "Primary accent: energy, growth, and financial empowerment." },
  { name: "Light Lime", hex: "#D1FEAE", desc: "Secondary tint: soft highlights and background accent states." },
  { name: "Dark Navy", hex: "#011521", desc: "Primary background: grounded depth that anchors trust." },
  { name: "Navy", hex: "#10203D", desc: "Surface background: card and panel elevation." },
];

export function FinalDesign() {
  const ref = useRef(null);
  const protoRef = useRef(null);
  const guidelinesRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const protoInView = useInView(protoRef, { once: true, margin: "-80px" });
  const guidelinesInView = useInView(guidelinesRef, { once: true, margin: "-80px" });
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const openLightbox = useCallback((img: { src: string; alt: string }) => {
    setLightbox(img);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeLightbox(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, closeLightbox]);

  useEffect(() => () => { document.body.style.overflow = ""; }, []);

  return (
    <section
      id="final-design"
      className="!pt-[120px] !pb-[160px]"
      style={{ backgroundColor: "rgba(17,17,19,0.5)" }}
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 72, textAlign: "center" as const }}
        >
          <p className="kicker">The Final Design</p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#f2ede8",
              marginBottom: 20,
            }}
          >
            The finished product.
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "rgba(242,237,232,0.5)",
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            Every screen designed to feel trustworthy, accessible, and built for the people
            it serves.
          </p>
        </motion.div>

        {/* Main 4 screens - large, no borders */}
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 24, marginBottom: 24, padding: "8px 0" }}>
          {MAIN_SCREENS.map((screen, i) => (
            <motion.div
              key={screen.src}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.05 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => openLightbox(screen)}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(screen); } }}
              role="button"
              tabIndex={0}
              aria-label={`View ${screen.alt} full screen`}
              style={{
                borderRadius: 20,
                backgroundColor: "#111113",
                position: "relative" as const,
                zIndex: 1,
                cursor: "pointer",
              }}
              whileHover={{
                boxShadow: "0 0 60px rgba(122,182,136,0.1)",
                scale: 1.02,
                zIndex: 10,
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
              }}
            >
              <img
                src={screen.src}
                alt={screen.alt}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "contain",
                  borderRadius: 20,
                  pointerEvents: "none",
                }}

              loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* Full gallery grid - all 17 screens */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
          style={{ columnGap: 36, rowGap: 56, marginBottom: 120, padding: "12px 0" }}
        >
          {GALLERY_SCREENS.slice(4).map((screen, i) => (
            <motion.div
              key={screen.src}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: 0.3 + i * 0.03,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => openLightbox(screen)}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(screen); } }}
              role="button"
              tabIndex={0}
              aria-label={`View ${screen.alt} full screen`}
              style={{
                borderRadius: 14,
                backgroundColor: "#111113",
                position: "relative" as const,
                zIndex: 1,
                cursor: "pointer",
              }}
              whileHover={{
                boxShadow: "0 0 40px rgba(122,182,136,0.12)",
                scale: 1.04,
                zIndex: 10,
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
              }}
            >
              <img
                src={screen.src}
                alt={screen.alt}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "contain",
                  borderRadius: 14,
                  pointerEvents: "none",
                }}

              loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* â”€â”€ Visual Guidelines â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        {/* ── Interactive Prototype ── */}
        <div ref={protoRef} style={{ marginBottom: 120 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={protoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: 24 }}
          >
            <p className="kicker">Interactive Prototype</p>
            <div
              className="flex flex-col md:flex-row md:items-end md:justify-between"
              style={{ gap: "12px 64px" }}
            >
              <h2
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "#f2ede8",
                  maxWidth: 480,
                }}
              >
                Try it yourself.
              </h2>
              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.65,
                  color: "rgba(242,237,232,0.45)",
                  maxWidth: 400,
                  flexShrink: 0,
                }}
              >
                Explore the SAGE prototype directly in the page. This interactive demo shows the
                core product flow, including onboarding, learning, resource discovery, financial
                support, and transparency-focused decision moments.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={protoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Desktop/tablet iframe */}
            <div
              className="hidden md:block"
              style={{
                width: "100%",
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.06)",
                backgroundColor: "#111113",
              }}
            >
              <iframe
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FCat48J4rpvGNeh3lSnIhGs%2FSAGE%3Fnode-id%3D1-2724%26p%3Df%26viewport%3D354%252C585%252C0.04%26t%3DfdrABSxSpw5dH5ZJ-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D1%253A179%26page-id%3D0%253A1"
                title="SAGE Figma Prototype"
                loading="lazy"
                allowFullScreen
                style={{
                  width: "100%",
                  height: "clamp(650px, 60vw, 820px)",
                  border: 0,
                  display: "block",
                }}
              />
            </div>

            {/* Mobile fallback card */}
            <div
              className="md:hidden"
              style={{
                padding: "48px 32px",
                borderRadius: 20,
                border: "1px solid rgba(255,255,255,0.06)",
                backgroundColor: "#111113",
                display: "flex",
                flexDirection: "column" as const,
                alignItems: "center",
                gap: 20,
                textAlign: "center" as const,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: "rgba(155,233,49,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 10h12M10 4l6 6-6 6"
                    stroke="#9BE931"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "#f2ede8", marginBottom: 8 }}>
                  Best viewed on desktop
                </p>
                <p style={{ fontSize: "0.85rem", color: "rgba(242,237,232,0.45)", lineHeight: 1.6 }}>
                  Open the prototype in Figma to explore the full interactive flow on your device.
                </p>
              </div>
              <a
                href="https://www.figma.com/proto/Cat48J4rpvGNeh3lSnIhGs/SAGE?node-id=1-2724&p=f&viewport=354%2C585%2C0.04&t=fdrABSxSpw5dH5ZJ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A179&page-id=0%3A1"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 24px",
                  borderRadius: 10,
                  border: "1px solid rgba(155,233,49,0.3)",
                  backgroundColor: "rgba(155,233,49,0.08)",
                  color: "#9BE931",
                  fontSize: "0.88rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "background-color 200ms ease, border-color 200ms ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(155,233,49,0.14)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(155,233,49,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(155,233,49,0.08)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(155,233,49,0.3)";
                }}
              >
                Open prototype in Figma
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4.5M10 2V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Below-iframe fallback note + CTA (desktop) */}
            <div
              className="hidden md:flex"
              style={{ marginTop: 20, flexDirection: "column" as const, alignItems: "center", gap: 12 }}
            >
              <p style={{ fontSize: "0.75rem", color: "rgba(242,237,232,0.28)", textAlign: "center" as const }}>
                If the prototype does not load, open it directly in Figma.
              </p>
              <a
                href="https://www.figma.com/proto/Cat48J4rpvGNeh3lSnIhGs/SAGE?node-id=1-2724&p=f&viewport=354%2C585%2C0.04&t=fdrABSxSpw5dH5ZJ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A179&page-id=0%3A1"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 20px",
                  borderRadius: 9,
                  border: "1px solid rgba(155,233,49,0.25)",
                  backgroundColor: "rgba(155,233,49,0.07)",
                  color: "#9BE931",
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "background-color 200ms ease, border-color 200ms ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(155,233,49,0.13)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(155,233,49,0.45)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(155,233,49,0.07)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(155,233,49,0.25)";
                }}
              >
                Open prototype in Figma
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4.5M10 2V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={guidelinesRef}
          initial={{ opacity: 0, y: 32 }}
          animate={guidelinesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="kicker">Visual Guidelines</p>
          <div
            className="flex flex-col md:flex-row md:items-end md:justify-between"
            style={{ gap: "16px 64px", marginBottom: 56 }}
          >
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "#f2ede8",
                maxWidth: 540,
              }}
            >
              A system built for trust.
            </h2>
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.65,
                color: "rgba(242,237,232,0.45)",
                maxWidth: 380,
                flexShrink: 0,
              }}
            >
              Every color and typeface choice in SAGE was made to reduce anxiety, build trust,
              and make financial tools feel accessible to people who have been excluded from them.
            </p>
          </div>

          {/* Color system */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={guidelinesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: 64 }}
          >
            <h3
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "rgba(242,237,232,0.4)",
                textTransform: "uppercase" as const,
                letterSpacing: "0.12em",
                marginBottom: 24,
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              Color System
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6" style={{ gap: 16 }}>
              {COLOR_SWATCHES.map((swatch) => (
                <div
                  key={swatch.name}
                  style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}
                >
                  <div
                    style={{
                      height: 72,
                      borderRadius: 12,
                      backgroundColor: swatch.hex,
                      border: (swatch.hex === "#011521" || swatch.hex === "#10203D") ? "1px solid rgba(255,255,255,0.12)" : "none",
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ display: "flex", flexDirection: "column" as const, gap: 3 }}>
                    <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#f2ede8" }}>
                      {swatch.name}
                    </span>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        color: "rgba(242,237,232,0.35)",
                        letterSpacing: "0.04em",
                        fontFamily: "monospace",
                      }}
                    >
                      {swatch.hex}
                    </span>
                    <p style={{ fontSize: "0.78rem", lineHeight: 1.5, color: "rgba(242,237,232,0.45)", marginTop: 2 }}>
                      {swatch.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={guidelinesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: 64 }}
          >
            <h3
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "rgba(242,237,232,0.4)",
                textTransform: "uppercase" as const,
                letterSpacing: "0.12em",
                marginBottom: 24,
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              Typography
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 24 }}>
              {/* Display */}
              <div
                style={{
                  padding: "32px 36px",
                  borderRadius: 20,
                  border: "1px solid rgba(255,255,255,0.06)",
                  backgroundColor: "#111113",
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: 16,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 4 }}>
                  <span style={{ fontSize: "0.72rem", color: "#9BE931", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>
                    Display
                  </span>
                  <span style={{ fontSize: "0.82rem", color: "rgba(242,237,232,0.4)" }}>
                    Clash Display
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                    fontWeight: 300,
                    color: "#f2ede8",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Beyond the
                  <br />
                  Red Lines
                </p>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.65, color: "rgba(242,237,232,0.45)" }}>
                  Used for headlines and hero text. The thin geometric weight commands attention
                  without aggression, balancing SAGE's energy with approachability.
                </p>
              </div>

              {/* Body */}
              <div
                style={{
                  padding: "32px 36px",
                  borderRadius: 20,
                  border: "1px solid rgba(255,255,255,0.06)",
                  backgroundColor: "#111113",
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: 16,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 4 }}>
                  <span style={{ fontSize: "0.72rem", color: "#9BE931", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>
                    Body + UI
                  </span>
                  <span style={{ fontSize: "0.82rem", color: "rgba(242,237,232,0.4)" }}>
                    Basic Sans
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 8 }}>
                  <p
                    style={{
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: "#f2ede8",
                      lineHeight: 1.3,
                    }}
                  >
                    Financial empowerment starts here.
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: "0.9rem",
                      color: "rgba(242,237,232,0.55)",
                      lineHeight: 1.65,
                    }}
                  >
                    Structured and legible across every screen size. Basic Sans carries body
                    copy, labels, and UI elements, clear without clinical coldness.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Usage notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={guidelinesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              padding: "40px 48px",
              borderRadius: 20,
              border: "1px solid rgba(155,233,49,0.12)",
              background: "linear-gradient(135deg, rgba(155,233,49,0.05) 0%, transparent 60%)",
            }}
          >
            <h3
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "rgba(242,237,232,0.4)",
                textTransform: "uppercase" as const,
                letterSpacing: "0.12em",
                marginBottom: 24,
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              Design Intent
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: 24 }}>
              {[
                {
                  label: "Trust",
                  body: "Dark backgrounds with warm text feel safe rather than cold. The SAGE green appears sparingly, reserved for actions and positive reinforcement.",
                },
                {
                  label: "Clarity",
                  body: "High-contrast text hierarchy and consistent spacing reduce cognitive load. Nothing competes for attention that isn't earning it.",
                },
                {
                  label: "Accessibility",
                  body: "All primary text exceeds 4.5:1 contrast ratio. Interactive elements meet minimum touch target sizes of 44x44px.",
                },
                {
                  label: "Community",
                  body: "Warm amber secondary accents signal human connection and shared progress, not just individual financial metrics.",
                },
              ].map(({ label, body }) => (
                <div key={label} style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#9BE931" }}>
                    {label}
                  </span>
                  <p style={{ fontSize: "0.85rem", lineHeight: 1.65, color: "rgba(242,237,232,0.5)" }}>
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <AnimatePresence>
        {lightbox && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={closeLightbox}
            style={{
              position: "fixed" as const,
              inset: 0,
              zIndex: 9999,
              background: "rgba(0,0,0,0.88)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
            }}
          >
            <motion.button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              aria-label="Close image preview"
              whileHover={{ background: "rgba(255,255,255,0.18)", borderColor: "rgba(255,255,255,0.28)" }}
              transition={{ duration: 0.15 }}
              style={{
                position: "fixed" as const,
                top: 24,
                right: 24,
                zIndex: 10000,
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.14)",
                color: "rgba(242,237,232,0.8)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </motion.button>

            <motion.img
              key={lightbox.src}
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.93 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              src={lightbox.src}
              alt={lightbox.alt}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                objectFit: "contain" as const,
                borderRadius: 24,
                display: "block",
                boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

