"use client";
import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbox } from "./Lightbox";

const ACCENT = "#60A5FA";

const HERO_SCREENS = [
  "/gwride/mockup-1.png",
  "/gwride/mockup-2.png",
  "/gwride/mockup-3.png",
  "/gwride/mockup-4.png",
  "/gwride/mockup-5.png",
];

const FINAL_ORDER_SCREENS = [
  "a", "b", "c", "d", "e", "f",
  "g", "h", "i", "j", "k", "l",
].map((letter) => `/gwride/final-order/${letter}.png`);

const COLORS = [
  { hex: "#AA9868", name: "GWU Buff", usage: "Primary brand · Accent" },
  { hex: "#033C5A", name: "GWU Colonial Blue", usage: "Backgrounds · Structure" },
  { hex: "#FFFFFF", name: "White", usage: "Text · Icons · UI" },
];

const FEEDBACK_THEMES = [
  {
    theme: "Intuitive Navigation",
    body: "Students found the app easy to navigate without instruction. Core flows — checking a shuttle ETA, finding a stop — were completed without hesitation.",
  },
  {
    theme: "Improved Confidence",
    body: "Participants noted they felt more confident about choosing the shuttle when they could see live location data. The uncertainty that usually drove them to rideshares was gone.",
  },
  {
    theme: "Information Hierarchy",
    body: "The layout was praised for being scannable. Students could extract the key decision — is a shuttle close enough to wait for? — in under five seconds.",
  },
];

const NEXT_STEPS = [
  "Test with students during actual commute moments on campus",
  "Partner with GW Transportation to access live shuttle data via API integration",
  "Add push notifications and alerts for approaching shuttles at saved stops",
  "Conduct a formal accessibility audit — screen reader support, color contrast, tap target size",
  "Expand stop detail screens with campus building names and landmark references",
  "Explore a commute scheduler mode for planning transit around class times",
];

export function Final() {
  const ref = useRef(null);
  const guidesRef = useRef(null);
  const feedbackRef = useRef(null);
  const reflectionRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const guidesInView = useInView(guidesRef, { once: true, margin: "-80px" });
  const feedbackInView = useInView(feedbackRef, { once: true, margin: "-80px" });
  const reflectionInView = useInView(reflectionRef, { once: true, margin: "-80px" });

  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const openLightbox = useCallback((src: string, alt: string) => setLightbox({ src, alt }), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  return (
    <section id="final" style={{ scrollMarginTop: 80, paddingBlock: "120px 140px", backgroundColor: "#0d0d10" }}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 56 }}
        >
          <p
            style={{
              display: "inline-block",
              fontSize: "0.75rem",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: ACCENT,
              marginBottom: 16,
            }}
          >
            Final Design
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#f2ede8",
              lineHeight: 1.1,
              maxWidth: 640,
              marginBottom: 20,
            }}
          >
            A polished transit experience built around student confidence.
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(242,237,232,0.55)", maxWidth: 600 }}>
            The final screens bring together live tracking, route clarity, stop detail, and
            an intuitive navigation pattern — all in service of one outcome: students who
            trust their shuttle option enough to use it.
          </p>
        </motion.div>

        {/* ── Hero screens — 5 large mockups ── */}
        <div className="grid grid-cols-2 md:grid-cols-5" style={{ gap: 20, marginBottom: 16 }}>
          {HERO_SCREENS.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.07 * i, ease: [0.22, 1, 0.36, 1] }}
              style={{ cursor: "zoom-in", transition: "transform 300ms ease" }}
              onClick={() => openLightbox(src, `Final design — screen ${i + 1}`)}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-5px) scale(1.02)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "none";
              }}
            >
              <img
                src={src}
                alt={`Final design — screen ${i + 1}`}
                style={{
                  width: "100%",
                  objectFit: "contain",
                  display: "block",
                  maxHeight: 680,
                }}
              />
            </motion.div>
          ))}
        </div>

        <p style={{ fontSize: "0.75rem", color: "rgba(242,237,232,0.25)", marginBottom: 72, textAlign: "center" as const }}>
          Click any screen to expand
        </p>

        {/* ── Final design order gallery — 4 rows × 3 cols ── */}
        <div
          className="grid grid-cols-2 md:grid-cols-3"
          style={{ columnGap: 40, rowGap: 52, marginBottom: 96 }}
        >
          {FINAL_ORDER_SCREENS.map((src: string, i: number) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.04 * i, ease: [0.22, 1, 0.36, 1] }}
              style={{ cursor: "zoom-in", transition: "transform 300ms ease" }}
              onClick={() => openLightbox(src, `Final design — screen ${i + 1}`)}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px) scale(1.01)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "none";
              }}
            >
              <img
                src={src}
                alt={`Final design — screen ${i + 1}`}
                style={{
                  width: "100%",
                  objectFit: "contain",
                  display: "block",
                  maxHeight: 400,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* ── Visual Guidelines (HTML/CSS) ── */}
        <div ref={guidesRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={guidesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: 24 }}
          >
            <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#f2ede8", letterSpacing: "-0.01em", marginBottom: 4 }}>
              Visual Guidelines
            </h3>
            <p style={{ fontSize: "0.88rem", color: "rgba(242,237,232,0.45)" }}>
              Typography and color system established for GW Ride.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={guidesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              padding: "40px 40px",
              borderRadius: 20,
              border: "1px solid rgba(255,255,255,0.06)",
              backgroundColor: "#111113",
              marginBottom: 96,
            }}
          >
            {/* Typography */}
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "rgba(242,237,232,0.3)",
                marginBottom: 24,
              }}
            >
              Typography
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 24, marginBottom: 48 }}>
              {/* GW Liberated */}
              <div
                style={{
                  padding: "28px 28px",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.06)",
                  backgroundColor: "#0d0d10",
                }}
              >
                <div
                  style={{
                    fontSize: "0.68rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: ACCENT,
                    marginBottom: 16,
                    fontWeight: 500,
                  }}
                >
                  Display · Headings
                </div>
                <div
                  style={{
                    fontSize: "clamp(2rem, 5vw, 3.2rem)",
                    fontWeight: 800,
                    color: "#f2ede8",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    marginBottom: 12,
                    fontFamily: '"GW Liberated", Georgia, serif',
                  }}
                >
                  GW Liberated
                </div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "rgba(242,237,232,0.4)",
                    lineHeight: 1.5,
                    fontFamily: '"GW Liberated", Georgia, serif',
                  }}
                >
                  A B C D E F G H I J K<br />
                  1 2 3 4 5 6 7 8 9 0
                </div>
              </div>

              {/* Basic Sans */}
              <div
                style={{
                  padding: "28px 28px",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.06)",
                  backgroundColor: "#0d0d10",
                }}
              >
                <div
                  style={{
                    fontSize: "0.68rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: ACCENT,
                    marginBottom: 16,
                    fontWeight: 500,
                  }}
                >
                  Body · Interface
                </div>
                <div
                  style={{
                    fontSize: "clamp(2rem, 5vw, 3.2rem)",
                    fontWeight: 500,
                    color: "#f2ede8",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                    marginBottom: 12,
                  }}
                >
                  Basic Sans
                </div>
                <div style={{ fontSize: "0.85rem", color: "rgba(242,237,232,0.4)", lineHeight: 1.5 }}>
                  a b c d e f g h i j k l m<br />
                  Used for labels, ETAs, stop names
                </div>
              </div>
            </div>

            {/* Colors */}
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "rgba(242,237,232,0.3)",
                marginBottom: 24,
              }}
            >
              Color System
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 16 }}>
              {COLORS.map((color) => (
                <div
                  key={color.hex}
                  style={{
                    borderRadius: 14,
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    style={{
                      height: 80,
                      backgroundColor: color.hex,
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  />
                  <div style={{ padding: "16px 18px", backgroundColor: "#0d0d10" }}>
                    <p style={{ fontSize: "0.88rem", fontWeight: 600, color: "#f2ede8", marginBottom: 4, fontFamily: "monospace" }}>
                      {color.hex}
                    </p>
                    <p style={{ fontSize: "0.82rem", color: "rgba(242,237,232,0.6)", marginBottom: 2 }}>{color.name}</p>
                    <p style={{ fontSize: "0.75rem", color: "rgba(242,237,232,0.35)" }}>{color.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── User Feedback ── */}
        <div ref={feedbackRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={feedbackInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: 32 }}
          >
            <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#f2ede8", letterSpacing: "-0.01em", marginBottom: 4 }}>
              User Feedback
            </h3>
            <p style={{ fontSize: "0.88rem", color: "rgba(242,237,232,0.45)", maxWidth: 600 }}>
              After sharing the prototype with GWU students, three clear themes emerged.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3" style={{ gap: 16, marginBottom: 96 }}>
            {FEEDBACK_THEMES.map((f, i) => (
              <motion.div
                key={f.theme}
                initial={{ opacity: 0, y: 28 }}
                animate={feedbackInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  padding: "28px 24px",
                  borderRadius: 16,
                  border: "1px solid rgba(255,255,255,0.06)",
                  backgroundColor: "#111113",
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: 12,
                }}
              >
                <span
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: ACCENT,
                  }}
                >
                  {f.theme}
                </span>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.65, color: "rgba(242,237,232,0.65)" }}>
                  {f.body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={feedbackInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: 96 }}
          >
            <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#f2ede8", letterSpacing: "-0.01em", marginBottom: 4 }}>
              Next Steps
            </h3>
            <p style={{ fontSize: "0.88rem", color: "rgba(242,237,232,0.45)", marginBottom: 28, maxWidth: 600 }}>
              If development were to continue, the prioritized path forward would look like this.
            </p>
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
              {NEXT_STEPS.map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -16 }}
                  animate={feedbackInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
                  style={{ display: "flex", gap: 16, alignItems: "flex-start" }}
                >
                  <span
                    style={{
                      minWidth: 24,
                      height: 24,
                      borderRadius: "50%",
                      backgroundColor: "rgba(96,165,250,0.12)",
                      border: "1px solid rgba(96,165,250,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      color: ACCENT,
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    {i + 1}
                  </span>
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.65, color: "rgba(242,237,232,0.65)" }}>
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Reflection ── */}
        <div ref={reflectionRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={reflectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: 32 }}
          >
            <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#f2ede8", letterSpacing: "-0.01em", marginBottom: 4 }}>
              What I Learned
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={reflectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: "grid",
              gap: 28,
              paddingTop: 40,
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
            className="md:grid-cols-2"
          >
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "rgba(242,237,232,0.65)", maxWidth: 560 }}>
              Designing GW Ride taught me that transportation UX is fundamentally about reducing anxiety,
              not adding features. Students don't want more information — they want the right information
              at the right moment. The most valuable insight was how much cognitive load unclear transit
              data creates. A three-second ETA check shouldn't require navigating three screens.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "rgba(242,237,232,0.65)", maxWidth: 560 }}>
              This project also showed me how visual hierarchy functions as a tool, not just an aesthetic
              choice. Every decision — type scale, information density, color contrast — was in direct
              service of helping someone make a faster, more confident decision in a genuinely
              pressure-filled moment. Designing for urgency is a distinct and valuable skill.
            </p>
          </motion.div>
        </div>
      </div>

      <Lightbox src={lightbox?.src ?? null} alt={lightbox?.alt ?? ""} onClose={closeLightbox} />
    </section>
  );
}
