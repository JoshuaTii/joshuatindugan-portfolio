"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ACCENT = "var(--cs-accent-sf)";
const EASE = [0.22, 1, 0.36, 1] as const;

const PRINCIPLES = [
  {
    number: "01",
    title: "Reduce Overwhelm",
    body: "Students should not have to sort through endless opportunities without knowing what is relevant to them. The experience should filter for them, not ask them to filter everything manually.",
  },
  {
    number: "02",
    title: "Make Eligibility Clear",
    body: "Scholarship requirements should be easy to understand before students commit time to applying. Students should know whether they qualify before they start, not after.",
  },
  {
    number: "03",
    title: "Reuse What Students Already Entered",
    body: "Students should not have to repeat the same personal, academic, and financial information across every application. Enter it once. Use it everywhere.",
  },
  {
    number: "04",
    title: "Build Confidence Through Guidance",
    body: "The platform should help students feel supported, especially when they are applying without strong institutional or family guidance. Clear structure reduces anxiety.",
  },
];

export function Principles() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ scrollMarginTop: 80, paddingBlock: "80px 120px" }}>
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ marginBottom: 56 }}
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
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--cs-text)",
              lineHeight: 1.1,
              maxWidth: 640,
            }}
          >
            Four principles that kept the design grounded.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 20 }}>
          {PRINCIPLES.map(({ number, title, body }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 * i, ease: EASE }}
              style={{
                padding: "32px 28px",
                borderRadius: 20,
                border: "1px solid var(--cs-border)",
                backgroundColor: "var(--cs-surface)",
                display: "flex",
                flexDirection: "column" as const,
                gap: 16,
              }}
            >
              <span
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  color: "rgba(155,233,49,0.18)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                {number}
              </span>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--cs-text)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.25,
                }}
              >
                {title}
              </h3>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: "var(--cs-text-muted)" }}>
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
