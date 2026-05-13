"use client";
import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbox } from "./Lightbox";

const ACCENT = "#60A5FA";

const PRINCIPLES = [
  {
    number: "01",
    title: "Make timing obvious",
    body: "The most important information (when the next shuttle arrives) should be visible immediately. No tapping, no searching, no interpreting.",
  },
  {
    number: "02",
    title: "Design for fast decisions",
    body: "Students make transit decisions in seconds, often mid-walk. Every screen interaction must resolve in one or two taps. Speed is a feature.",
  },
  {
    number: "03",
    title: "Build on existing campus systems",
    body: "GW Ride was not designed as a separate transportation system. It builds on existing services like Vex and SafeRide, then improves usability through clearer real-time information, route visibility, expanded stop coverage, and nearby campus exploration.",
  },
  {
    number: "04",
    title: "Connect movement with campus discovery",
    body: "Beyond getting from one stop to another, GW Ride creates an opportunity for students to discover nearby campus places, making transportation feel more connected to everyday student life.",
  },
];

const SKETCHES = [
  { src: "/gwride/sketch-1.png", caption: "Early ideation: app concept and core flow structure" },
  { src: "/gwride/sketch-2.png", caption: "Brainstorming tracking features and navigation patterns" },
];

export function Features() {
  const ref = useRef(null);
  const whyRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const whyInView = useInView(whyRef, { once: true, margin: "-80px" });

  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const openLightbox = useCallback((src: string, alt: string) => setLightbox({ src, alt }), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  return (
    <section id="features" style={{ scrollMarginTop: 80, paddingBlock: "120px 140px", backgroundColor: "#0d0d10" }}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 72 }}
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
            Feature Thinking
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
            From open questions to a focused product direction.
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(242,237,232,0.55)", maxWidth: 600 }}>
            Early ideation explored a range of concepts — from GPS-based shuttle tracking to
            campus transit consultation tools. The process helped narrow focus toward the features
            that directly address the core problem: real-time confidence at the moment of decision.
          </p>
        </motion.div>

        {/* ── Brainstorming Sketches — 2 images, larger ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 20 }}
        >
          <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#f2ede8", letterSpacing: "-0.01em", marginBottom: 4 }}>
            Brainstorming
          </h3>
          <p style={{ fontSize: "0.88rem", color: "rgba(242,237,232,0.45)" }}>
            Paper sketches from early concept exploration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 24, marginBottom: 96 }}>
          {SKETCHES.map((sketch, i) => (
            <motion.div
              key={sketch.src}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "flex", flexDirection: "column" as const, gap: 12, cursor: "zoom-in" }}
              onClick={() => openLightbox(sketch.src, sketch.caption)}
            >
              <div
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backgroundColor: "#111113",
                  transition: "transform 300ms ease, border-color 300ms ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px) scale(1.01)";
                  (e.currentTarget as HTMLElement).style.borderColor = `rgba(96,165,250,0.2)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "none";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                }}
              >
                <img
                  src={sketch.src}
                  alt={sketch.caption}
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    objectFit: "contain",
                    display: "block",
                    padding: 20,
                    backgroundColor: "#f8f6f3",
                  }}

                loading="lazy"
                />
              </div>
              <p style={{ fontSize: "0.8rem", color: "rgba(242,237,232,0.4)", lineHeight: 1.5 }}>
                {sketch.caption}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Why / Design Rationale ── */}
        <div ref={whyRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: 24 }}
          >
            <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#f2ede8", letterSpacing: "-0.01em", marginBottom: 4 }}>
              Why This Direction?
            </h3>
            <p style={{ fontSize: "0.88rem", color: "rgba(242,237,232,0.45)", maxWidth: 600 }}>
              The research pointed clearly toward real-time information as the core need. The design
              rationale for every major decision came back to four principles.
            </p>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: 14 }}>
            {PRINCIPLES.map((p, i) => (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, x: -20 }}
                animate={whyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "64px 1fr",
                  gap: "0 28px",
                  padding: "28px 32px",
                  borderRadius: 16,
                  border: "1px solid rgba(255,255,255,0.06)",
                  backgroundColor: "#111113",
                  alignItems: "start",
                }}
              >
                <span
                  style={{
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "rgba(96,165,250,0.2)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    paddingTop: 4,
                  }}
                >
                  {p.number}
                </span>
                <div>
                  <h4
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "#f2ede8",
                      marginBottom: 8,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {p.title}
                  </h4>
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.65, color: "rgba(242,237,232,0.6)" }}>
                    {p.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Lightbox src={lightbox?.src ?? null} alt={lightbox?.alt ?? ""} onClose={closeLightbox} />
    </section>
  );
}
