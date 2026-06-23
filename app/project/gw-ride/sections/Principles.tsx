"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ACCENT = "var(--cs-accent-gw)";
const EASE = [0.22, 1, 0.36, 1] as const;

const PRINCIPLES = [
  {
    number: "01",
    title: "Reduce Waiting Uncertainty",
    body: "Students should know where the shuttle is and when it is expected to arrive. Uncertainty about timing is the main reason students choose rideshares instead.",
  },
  {
    number: "02",
    title: "Make Routes Easy to Understand",
    body: "Routes, stops, and destinations should be simple to scan without needing extra explanation. A student should be able to understand the shuttle system in seconds.",
  },
  {
    number: "03",
    title: "Support Campus Life Beyond Transportation",
    body: "The app should help students not only move around campus, but also discover nearby places that support their daily routines: food, study spots, services.",
  },
  {
    number: "04",
    title: "Keep Decisions Quick",
    body: "Students often check transit information while walking, rushing to class, or deciding whether to wait. The experience should be fast and easy to understand at a glance.",
  },
];

export function Principles() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      style={{ scrollMarginTop: 80, paddingBlock: "80px 120px", backgroundColor: "var(--cs-bg-secondary)" }}
    >
      <div className="section-container">
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
            Design Principles
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
            Four ideas that shaped every design decision.
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column" as const, gap: 14 }}>
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i, ease: EASE }}
              style={{
                display: "grid",
                gridTemplateColumns: "64px 1fr",
                gap: "0 28px",
                padding: "28px 32px",
                borderRadius: 16,
                border: "1px solid var(--cs-border)",
                backgroundColor: "var(--cs-surface)",
                alignItems: "start",
              }}
            >
              <span
                style={{
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "var(--accent-dim)",
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
                    color: "var(--cs-text)",
                    marginBottom: 8,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.title}
                </h4>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.65, color: "var(--cs-text-muted)" }}>
                  {p.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
