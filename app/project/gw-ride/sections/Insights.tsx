"use client";
import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbox } from "./Lightbox";

const ACCENT = "var(--cs-accent-gw)";
const EASE = [0.22, 1, 0.36, 1] as const;

const INSIGHTS = [
  {
    number: "01",
    title: "Uncertainty Creates Friction",
    response:
      "Real-time shuttle tracking was made central to the experience so students can quickly decide whether to wait or walk.",
  },
  {
    number: "02",
    title: "Stops Need Better Visibility",
    response:
      "Stop information and route details were brought into the main flow so users do not have to search for basic transit details.",
  },
  {
    number: "03",
    title: "Campus Movement Is Also Campus Discovery",
    response:
      "The Explore feature helps students find nearby places around campus, making the app useful even beyond shuttle tracking.",
  },
];

export function Insights() {
  const ref = useRef(null);
  const routeRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const routeInView = useInView(routeRef, { once: true, margin: "-80px" });

  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const openLightbox = useCallback((src: string, alt: string) => setLightbox({ src, alt }), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  return (
    <section
      style={{
        scrollMarginTop: 80,
        paddingBlock: "80px 120px",
        backgroundColor: "var(--cs-bg-secondary)",
      }}
    >
      <div className="section-container">
        {/* Key Insights header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ marginBottom: 48 }}
        >
          <p
            style={{
              display: "inline-block",
              fontSize: "0.75rem",
              fontWeight: 500,
              textTransform: "uppercase" as const,
              letterSpacing: "0.12em",
              color: ACCENT,
              marginBottom: 16,
            }}
          >
            Key Insights
          </p>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--cs-text)",
              lineHeight: 1.15,
              maxWidth: 560,
            }}
          >
            Three patterns that shaped the design direction.
          </h2>
        </motion.div>

        {/* Insight cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: 16, marginBottom: 96 }}
        >
          {INSIGHTS.map((insight, i) => (
            <motion.div
              key={insight.number}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i, ease: EASE }}
              style={{
                padding: "32px 28px",
                borderRadius: 16,
                border: "1px solid var(--cs-border)",
                backgroundColor: "var(--cs-surface)",
                display: "flex",
                flexDirection: "column" as const,
                gap: 16,
              }}
            >
              <span
                style={{
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "var(--accent-dim)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                {insight.number}
              </span>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--cs-text)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.35,
                }}
              >
                {insight.title}
              </h3>
              <div
                style={{
                  paddingTop: 12,
                  borderTop: "1px solid var(--cs-border)",
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: 6,
                }}
              >
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.1em",
                    color: ACCENT,
                  }}
                >
                  Design Response
                </span>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.65, color: "var(--cs-text-muted)" }}>
                  {insight.response}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Route Proposal */}
        <div ref={routeRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={routeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
            style={{ marginBottom: 28 }}
          >
            <p
              style={{
                display: "inline-block",
                fontSize: "0.75rem",
                fontWeight: 500,
                textTransform: "uppercase" as const,
                letterSpacing: "0.12em",
                color: ACCENT,
                marginBottom: 12,
              }}
            >
              Bus Route Proposal
            </p>
            <h3
              style={{
                fontSize: "clamp(1.2rem, 2.2vw, 1.7rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--cs-text)",
                lineHeight: 1.2,
                maxWidth: 560,
                marginBottom: 12,
              }}
            >
              Expanding coverage to better serve students.
            </h3>
            <p style={{ fontSize: "0.93rem", lineHeight: 1.7, color: "var(--cs-text-muted)", maxWidth: 620 }}>
              The revised route proposal expanded coverage so it became more convenient for students
              and more efficient for getting from point A to point B on campus. The maps below show
              the difference between the existing routes and the proposed improvement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 20 }}>
            {[
              { src: "/gwride/route-before.png", label: "Before", caption: "Existing campus shuttle routes and stop coverage." },
              { src: "/gwride/route-after.png", label: "After", caption: "Proposed route expansion with improved coverage and student-centered stop placement." },
            ].map((map, i) => (
              <motion.div
                key={map.label}
                initial={{ opacity: 0, y: 24 }}
                animate={routeInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.1 * i, ease: EASE }}
                style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}
              >
                <div
                  style={{
                    borderRadius: 16,
                    overflow: "hidden",
                    border: "1px solid var(--cs-border)",
                    cursor: "zoom-in",
                    transition: "border-color 300ms ease, transform 300ms ease",
                  }}
                  onClick={() => openLightbox(map.src, map.caption)}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-border-strong)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--cs-border)";
                    (e.currentTarget as HTMLElement).style.transform = "none";
                  }}
                >
                  <div
                    style={{
                      padding: "8px 16px",
                      backgroundColor: "var(--cs-surface)",
                      borderBottom: "1px solid var(--cs-border)",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        textTransform: "uppercase" as const,
                        letterSpacing: "0.1em",
                        color: ACCENT,
                      }}
                    >
                      {map.label}
                    </span>
                  </div>
                  <img
                    src={map.src}
                    alt={map.caption}
                    style={{ width: "100%", height: "auto", display: "block" }}
                    loading="lazy"
                  />
                </div>
                <p
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--cs-text-faint)",
                    lineHeight: 1.5,
                  }}
                >
                  {map.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Lightbox src={lightbox?.src ?? null} alt={lightbox?.alt ?? ""} onClose={closeLightbox} />
    </section>
  );
}
