"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ACCENT = "var(--cs-accent-sf)";
const EASE = [0.22, 1, 0.36, 1] as const;

const CHALLENGE_CARDS = [
  {
    tag: "The Wrong Question",
    heading: "What do students want from a scholarship platform?",
    body: "Most platforms were built around browsability: more scholarships, better filters, cleaner layouts. They answered the wrong question. Students were not asking for more options. They were asking how to stop wasting time on options that did not fit.",
    points: [
      "Information scattered across dozens of unrelated websites",
      "No way to know if you qualify before investing hours in an application",
      "Redundant forms asked for the same data over and over again",
      "No central place to track what was saved, in progress, or submitted",
    ],
  },
  {
    tag: "The Real Challenge",
    heading: "Students need structure, not more scholarships.",
    body: "First-generation students especially lacked the institutional knowledge their more-connected peers took for granted. They needed a platform built around their actual process: understand options, check fit, apply efficiently, track progress, and get guidance from peers who had been through it.",
    points: [
      "Profile-based matching surfaces what actually fits",
      "Eligibility and requirements visible before applying",
      "Reusable application data eliminates repeated form-filling",
      "Peer support grounds the experience in real student outcomes",
    ],
  },
];

export function Context() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="context"
      style={{
        scrollMarginTop: 80,
        paddingBlock: "120px 140px",
        backgroundColor: "var(--cs-bg-secondary)",
      }}
    >
      <div className="section-container" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          style={{
            fontSize: "0.75rem",
            fontWeight: 500,
            textTransform: "uppercase" as const,
            letterSpacing: "0.12em",
            color: ACCENT,
            marginBottom: 16,
          }}
        >
          The Challenge
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--cs-text)",
            lineHeight: 1.1,
            marginBottom: 64,
            maxWidth: 680,
          }}
        >
          The Scholarship Search Should Not Feel Like a Second Job.
        </motion.h2>

        <div className="grid md:grid-cols-2" style={{ gap: "32px 48px" }}>
          {CHALLENGE_CARDS.map(({ tag, heading, body, points }, i) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.08 + i * 0.1, ease: EASE }}
              style={{
                padding: "36px 32px",
                borderRadius: 20,
                border: "1px solid var(--cs-border)",
                backgroundColor: "var(--cs-surface)",
                display: "flex",
                flexDirection: "column" as const,
                gap: 20,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    backgroundColor: "rgba(155,233,49,0.1)",
                    border: "1px solid rgba(155,233,49,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.65rem",
                    color: ACCENT,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span
                  style={{
                    fontSize: "0.72rem",
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.1em",
                    color: ACCENT,
                    fontWeight: 500,
                  }}
                >
                  {tag}
                </span>
              </div>

              <h3
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.2rem)",
                  fontWeight: 700,
                  color: "var(--cs-text)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.25,
                }}
              >
                {heading}
              </h3>

              <p style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "var(--cs-text-muted)" }}>
                {body}
              </p>

              <ul style={{ display: "flex", flexDirection: "column" as const, gap: 10, margin: 0, paddingLeft: 0, listStyle: "none" }}>
                {points.map((point) => (
                  <li
                    key={point}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      fontSize: "0.875rem",
                      color: "var(--cs-text-muted)",
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: ACCENT, marginTop: 3, flexShrink: 0 }}>-</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          style={{
            marginTop: 48,
            fontSize: "0.875rem",
            lineHeight: 1.65,
            color: "var(--cs-text-faint)",
            maxWidth: 600,
          }}
        >
          <span style={{ color: ACCENT, fontWeight: 500 }}>Scope: </span>
          Two months from problem discovery through high-fidelity prototype delivery.
        </motion.p>
      </div>
    </section>
  );
}
