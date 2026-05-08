"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const INSIGHTS = [
  {
    number: "01",
    title: "Trust is infrastructure.",
    body: "Financial apps fail in Ward 7 and 8 not because of missing features, but because institutions burned trust for decades. Every design decision had to answer: why would someone believe this?",
  },
  {
    number: "02",
    title: "Complexity is a barrier.",
    body: "Dense financial language and multi-step onboarding excludes the people who need financial tools most. Simplicity is not a design preference here. It is a prerequisite for access.",
  },
  {
    number: "03",
    title: "Community is the platform.",
    body: "Peer networks are the primary mechanism for economic mobility in Ward 7 and 8. Residents already help each other with money. The right design amplifies that, rather than replacing it with an institution.",
  },
];

export function Insights() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="insights"
      className="!pt-[120px] !pb-[140px]"
      style={{ backgroundColor: "rgba(17,17,19,0.5)" }}
    >
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 72 }}
        >
          <p className="kicker">Key Insights</p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#f2ede8",
              maxWidth: 640,
            }}
          >
            Three truths that shaped every decision.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 28 }}>
          {INSIGHTS.map((insight, i) => (
            <motion.div
              key={insight.number}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                padding: 32,
                borderRadius: 20,
                border: "1px solid rgba(255,255,255,0.06)",
                backgroundColor: "#111113",
                display: "flex",
                flexDirection: "column" as const,
                gap: 20,
                cursor: "default",
                transition: "border-color 300ms ease, box-shadow 300ms ease, background-color 300ms ease",
              }}
              whileHover={{
                borderColor: "rgba(122,182,136,0.35)",
                boxShadow: "0 0 32px rgba(122,182,136,0.08)",
                backgroundColor: "rgba(122,182,136,0.04)",
              }}
            >
              <span
                style={{
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "rgba(122,182,136,0.5)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  fontFamily: "var(--font-playfair), Georgia, serif",
                }}
              >
                {insight.number}
              </span>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#f2ede8",
                  lineHeight: 1.3,
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontStyle: "italic",
                }}
              >
                {insight.title}
              </h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(242,237,232,0.55)" }}>
                {insight.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

