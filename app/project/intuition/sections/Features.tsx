"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ACCENT = "#f59e0b";

const FEATURES = [
  {
    number: "01",
    title: "Personalized Scholarship Matching",
    body: "Students discover scholarships based on their profile, academic background, interests, financial need, and eligibility, surfaced instantly rather than buried across dozens of sites.",
  },
  {
    number: "02",
    title: "Smart Filters",
    body: "Narrow opportunities by deadline, award amount, eligibility, major, year level, application type, and required materials so students spend time on the right scholarships.",
  },
  {
    number: "03",
    title: "Reusable Student Profile",
    body: "Students store their information once and reuse it across multiple applications, eliminating repetitive form-filling and reducing the friction that makes people give up.",
  },
  {
    number: "04",
    title: "Application Tracker",
    body: "Saved, in-progress, submitted, and upcoming scholarship applications all in one place, with deadline reminders so nothing slips through the cracks.",
  },
];

export function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="features"
      style={{
        scrollMarginTop: 80,
        paddingBlock: "120px 140px",
        backgroundColor: "rgba(255,255,255,0.015)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="section-container" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "0.75rem",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: ACCENT,
            marginBottom: 16,
          }}
        >
          Key Features
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#f2ede8",
            lineHeight: 1.1,
            marginBottom: 64,
            maxWidth: 680,
          }}
        >
          One platform for every step
          <br className="hidden md:block" />
          of the scholarship journey.
        </motion.h2>

        {/* 2×2 card grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: 20 }}
        >
          {FEATURES.map(({ number, title, body }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              style={{
                padding: "32px 28px",
                borderRadius: 20,
                border: "1px solid rgba(255,255,255,0.06)",
                backgroundColor: "#111113",
                display: "flex",
                flexDirection: "column" as const,
                gap: 16,
              }}
            >
              <span
                style={{
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: ACCENT,
                  fontWeight: 700,
                }}
              >
                {number}
              </span>
              <h3
                style={{
                  fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
                  fontWeight: 700,
                  color: "#f2ede8",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.75,
                  color: "rgba(242,237,232,0.55)",
                  margin: 0,
                }}
              >
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
