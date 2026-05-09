"use client";
import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbox } from "./Lightbox";

const ACCENT = "#60A5FA";

const FINAL_SCREENS = [
  { src: "/gwride/final-opening.png", caption: "Onboarding — splash & entry" },
  { src: "/gwride/final-opening-1.png", caption: "Onboarding — screen 2" },
  { src: "/gwride/final-opening-2.png", caption: "Onboarding — screen 3" },
  { src: "/gwride/final-main.png", caption: "Main — live tracking view" },
  { src: "/gwride/final-main-2.png", caption: "Main — route cards" },
  { src: "/gwride/final-main-3.png", caption: "Main — stop detail" },
  { src: "/gwride/final-main-4.png", caption: "Main — ETA overlay" },
  { src: "/gwride/final-explore.png", caption: "Explore — route browser" },
  { src: "/gwride/final-explore-2.png", caption: "Explore — route detail" },
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
  "Test with real students during actual commute moments on campus",
  "Partner with GW Transportation to access live shuttle data via API integration",
  "Add push notifications and alerts for approaching shuttles at saved stops",
  "Conduct a formal accessibility audit — screen reader support, color contrast, tap target size",
  "Expand stop detail screens with campus building names and landmark references",
  "Explore a commute scheduler mode for planning transit around class times",
];

export function Final() {
  const ref = useRef(null);
  const feedbackRef = useRef(null);
  const reflectionRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
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

        {/* Final screens gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-3"
          style={{ gap: 16, marginBottom: 16 }}
        >
          {FINAL_SCREENS.map((screen, i) => (
            <motion.div
              key={screen.src}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: "flex",
                flexDirection: "column" as const,
                gap: 10,
                cursor: "zoom-in",
              }}
              onClick={() => openLightbox(screen.src, screen.caption)}
            >
              <div
                style={{
                  borderRadius: 14,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backgroundColor: "#111113",
                  transition: "transform 300ms ease, border-color 300ms ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px) scale(1.01)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(96,165,250,0.25)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "none";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                }}
              >
                <img
                  src={screen.src}
                  alt={screen.caption}
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    display: "block",
                    maxHeight: 360,
                  }}
                />
              </div>
              <p style={{ fontSize: "0.75rem", color: "rgba(242,237,232,0.4)", lineHeight: 1.4 }}>
                {screen.caption}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <p style={{ fontSize: "0.75rem", color: "rgba(242,237,232,0.25)", marginBottom: 96 }}>
          Click any screen to expand — all final design screens
        </p>

        {/* Visual guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 96 }}
        >
          <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#f2ede8", letterSpacing: "-0.01em", marginBottom: 4 }}>
            Visual Guidelines
          </h3>
          <p style={{ fontSize: "0.88rem", color: "rgba(242,237,232,0.45)", marginBottom: 24 }}>
            The typography and color system established for GW Ride.
          </p>
          <div
            style={{
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.06)",
              cursor: "zoom-in",
              backgroundColor: "#111113",
            }}
            onClick={() => openLightbox("/gwride/visual-guidelines.png", "GW Ride visual guidelines — typography and color")}
          >
            <img
              src="/gwride/visual-guidelines.png"
              alt="GW Ride visual guidelines"
              style={{
                width: "100%",
                objectFit: "contain",
                display: "block",
                transition: "transform 300ms ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.01)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
            />
          </div>
          <p style={{ fontSize: "0.75rem", color: "rgba(242,237,232,0.35)", marginTop: 12, textAlign: "center" as const }}>
            Typography system — GW Liberated (headings) + Basic Sans (body)
          </p>
        </motion.div>

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
                <span style={{ fontSize: "0.78rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: ACCENT }}>
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
