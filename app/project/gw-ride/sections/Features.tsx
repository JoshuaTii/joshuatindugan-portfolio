"use client";
import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbox } from "./Lightbox";

const ACCENT = "var(--cs-accent-sf)";
const EASE = [0.22, 1, 0.36, 1] as const;

const FEATURES = [
  {
    kicker: "Feature 01",
    title: "Real-Time Shuttle Tracking",
    userNeed:
      "Students need to know where the shuttle is before deciding whether to wait or walk.",
    decision:
      "The app shows shuttle location and arrival information clearly from the main experience. No searching required.",
    why: "This helps reduce uncertainty and gives students more control over their time. Knowing the shuttle is 3 minutes away changes the decision entirely.",
    screen: "/gwride/final-order/h.png",
  },
  {
    kicker: "Feature 02",
    title: "Route Visibility",
    userNeed:
      "Students need to understand where the shuttle goes and which stops are part of the route.",
    decision:
      "Routes are displayed with clear stop information and destination context so students can scan the full path at a glance.",
    why: "Students can quickly see whether the shuttle supports where they need to go, without opening a separate map or asking someone.",
    screen: "/gwride/final-order/i.png",
  },
  {
    kicker: "Feature 03",
    title: "Stop Information",
    userNeed:
      "Students need to find nearby stops and understand when shuttles are arriving.",
    decision:
      "Stop details include location, route coverage, and arrival information in one place, accessible in two taps from the home screen.",
    why: "This makes the shuttle system easier to use, especially for students who are new to campus or unfamiliar with a particular route.",
    screen: "/gwride/final-order/j.png",
  },
  {
    kicker: "Feature 04",
    title: "Explore",
    userNeed:
      "Students need a simple way to discover nearby places around campus: food, study spots, services, and useful locations.",
    decision:
      "The Explore feature highlights nearby places so students can connect transportation with campus life, not just transit stops.",
    why: "GW Ride becomes more than a shuttle tracker. It helps students understand what is around them and make better use of campus and nearby areas while they wait.",
    screen: "/gwride/final-order/k.png",
  },
];

export function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ marginBottom: 72 }}
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
            Feature Breakdown
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--cs-text)",
              lineHeight: 1.1,
              maxWidth: 640,
              marginBottom: 20,
            }}
          >
            Four features, each designed to answer a specific student need.
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--cs-text-muted)", maxWidth: 600 }}>
            Every feature in GW Ride was shaped by a real friction point: students missing
            shuttles, misunderstanding routes, or not knowing what was nearby. Each decision
            traced back to what students actually needed in that moment.
          </p>
        </motion.div>

        {/* Feature blocks */}
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 80 }}>
          {FEATURES.map((feature, i) => {
            const isReversed = i % 2 === 1;
            return (
              <motion.div
                key={feature.kicker}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.08 * i, ease: EASE }}
              >
                <div
                  className="grid grid-cols-1 md:grid-cols-2"
                  style={{ gap: "48px 64px", alignItems: "center" }}
                >
                  {/* Text column */}
                  <div
                    className={isReversed ? "md:order-2" : "md:order-1"}
                    style={{ display: "flex", flexDirection: "column" as const, gap: 28 }}
                  >
                    {/* Kicker pill */}
                    <div>
                      <span
                        style={{
                          display: "inline-block",
                          padding: "5px 14px",
                          borderRadius: 999,
                          border: `1px solid ${ACCENT}`,
                          backgroundColor: "rgba(155,233,49,0.06)",
                          fontSize: "0.72rem",
                          fontWeight: 600,
                          textTransform: "uppercase" as const,
                          letterSpacing: "0.1em",
                          color: ACCENT,
                          marginBottom: 16,
                        }}
                      >
                        {feature.kicker}
                      </span>
                      <h3
                        style={{
                          fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                          fontWeight: 700,
                          letterSpacing: "-0.02em",
                          color: "var(--cs-text)",
                          lineHeight: 1.2,
                        }}
                      >
                        {feature.title}
                      </h3>
                    </div>

                    {/* Labeled descriptions */}
                    {[
                      { label: "User Need", text: feature.userNeed },
                      { label: "Design Decision", text: feature.decision },
                      { label: "Why It Matters", text: feature.why },
                    ].map(({ label, text }) => (
                      <div key={label}>
                        <p
                          style={{
                            fontSize: "0.72rem",
                            fontWeight: 600,
                            textTransform: "uppercase" as const,
                            letterSpacing: "0.1em",
                            color: ACCENT,
                            marginBottom: 8,
                          }}
                        >
                          {label}
                        </p>
                        <p style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "var(--cs-text-muted)" }}>
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Image column — single phone, no container or border */}
                  <div
                    className={isReversed ? "md:order-1" : "md:order-2"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      cursor: "zoom-in",
                    }}
                    onClick={() => openLightbox(feature.screen, feature.title)}
                  >
                    <img
                      src={feature.screen}
                      alt={feature.title}
                      style={{
                        width: "100%",
                        maxWidth: 320,
                        height: "auto",
                        objectFit: "contain",
                        display: "block",
                        transition: "transform 300ms ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = "scale(1.02)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = "none";
                      }}
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <Lightbox src={lightbox?.src ?? null} alt={lightbox?.alt ?? ""} onClose={closeLightbox} />
    </section>
  );
}
