"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ACCENT = "#4ade80";

const APP_PALETTE = [
  { name: "Off White",  hex: "#F8F9F3", textDark: true,  desc: "Surface and background base" },
  { name: "Bright Sage", hex: "#D1FEAE", textDark: true,  desc: "Primary app accent" },
  { name: "Deep Navy",  hex: "#011521", textDark: false, desc: "Primary app background" },
];

const EDITORIAL_PALETTE = [
  { name: "Off White",   hex: "#F8F9F3", textDark: true,  desc: "Light background / editorial surface" },
  { name: "Muted Sage",  hex: "#47574C", textDark: false, desc: "Editorial primary green — calm, trustworthy" },
  { name: "Olive Gray",  hex: "#7B7A5B", textDark: false, desc: "Secondary tone — warmth and editorial texture" },
  { name: "Deep Navy",   hex: "#011521", textDark: false, desc: "Anchoring background — shared with the app" },
];

function Swatch({
  name,
  hex,
  textDark,
  desc,
}: {
  name: string;
  hex: string;
  textDark: boolean;
  desc: string;
}) {
  return (
    <div
      style={{
        borderRadius: 16,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.06)",
        display: "flex",
        flexDirection: "column" as const,
      }}
    >
      <div
        style={{
          backgroundColor: hex,
          height: 100,
          display: "flex",
          alignItems: "flex-end",
          padding: "12px 16px",
        }}
      >
        <span
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            fontFamily: "monospace",
            color: textDark ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.6)",
            letterSpacing: "0.05em",
          }}
        >
          {hex}
        </span>
      </div>
      <div
        style={{
          padding: "14px 16px",
          backgroundColor: "#111113",
          display: "flex",
          flexDirection: "column" as const,
          gap: 4,
        }}
      >
        <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#f2ede8" }}>{name}</span>
        <span style={{ fontSize: "0.78rem", color: "rgba(242,237,232,0.4)", lineHeight: 1.4 }}>{desc}</span>
      </div>
    </div>
  );
}

export function SEVisual() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="visual-system"
      style={{
        scrollMarginTop: 80,
        paddingBlock: "120px 140px",
        backgroundColor: "rgba(17,17,19,0.5)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 72 }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: ACCENT,
              marginBottom: 16,
            }}
          >
            Visual System
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#f2ede8",
              maxWidth: 720,
              lineHeight: 1.1,
              marginBottom: 28,
            }}
          >
            Visual Guidelines
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(242,237,232,0.6)",
              maxWidth: 640,
            }}
          >
            The original SAGE app palette used a brighter green accent, but the editorial site
            needed a softer and more publication-driven tone. I shifted the palette toward muted
            sage and olive-gray values so the editorial experience could feel trustworthy, calm,
            and distinct while still staying connected to SAGE.
          </p>
        </motion.div>

        {/* App color palette */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 64 }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "rgba(242,237,232,0.35)",
              marginBottom: 24,
            }}
          >
            App Color Palette
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3" style={{ gap: 16, maxWidth: 640 }}>
            {APP_PALETTE.map((s) => (
              <Swatch key={s.hex} {...s} />
            ))}
          </div>
        </motion.div>

        {/* Editorial color palette */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 80 }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "rgba(242,237,232,0.35)",
              marginBottom: 24,
            }}
          >
            Editorial Site Color Palette
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 16 }}>
            {EDITORIAL_PALETTE.map((s) => (
              <Swatch key={s.hex} {...s} />
            ))}
          </div>
        </motion.div>

        {/* Typography */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "rgba(242,237,232,0.35)",
              marginBottom: 32,
            }}
          >
            Typography
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 24 }}>
            {/* Warbler */}
            <div
              style={{
                padding: "36px 32px",
                borderRadius: 20,
                border: "1px solid rgba(255,255,255,0.06)",
                backgroundColor: "#111113",
                display: "flex",
                flexDirection: "column" as const,
                gap: 20,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 6 }}>
                <span
                  style={{
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: ACCENT,
                    fontWeight: 700,
                  }}
                >
                  Headlines
                </span>
                <span style={{ fontSize: "0.85rem", color: "rgba(242,237,232,0.4)" }}>Warbler</span>
              </div>
              <p
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                  color: "#f2ede8",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                }}
              >
                Community Stories, Told Clearly.
              </p>
              <p style={{ fontSize: "0.82rem", color: "rgba(242,237,232,0.35)", lineHeight: 1.5 }}>
                Warbler is used for expressive editorial headlines and section titles — bringing a
                publication quality and warmth to the reading experience.
              </p>
            </div>

            {/* Basic Sans */}
            <div
              style={{
                padding: "36px 32px",
                borderRadius: 20,
                border: "1px solid rgba(255,255,255,0.06)",
                backgroundColor: "#111113",
                display: "flex",
                flexDirection: "column" as const,
                gap: 20,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 6 }}>
                <span
                  style={{
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: ACCENT,
                    fontWeight: 700,
                  }}
                >
                  Body / Navigation
                </span>
                <span style={{ fontSize: "0.85rem", color: "rgba(242,237,232,0.4)" }}>Basic Sans</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 16 }}>
                <p
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 400,
                    color: "#f2ede8",
                    lineHeight: 1.6,
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                  }}
                >
                  Access. Trust. Community. These are not abstract ideas — they are daily realities
                  for Ward 7 and Ward 8 residents navigating financial life.
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "rgba(242,237,232,0.4)",
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                  }}
                >
                  Money · Housing · Community · Resources
                </p>
              </div>
              <p style={{ fontSize: "0.82rem", color: "rgba(242,237,232,0.35)", lineHeight: 1.5 }}>
                Basic Sans handles body copy, navigation, labels, and all supporting text — keeping
                the reading experience clean and accessible.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
