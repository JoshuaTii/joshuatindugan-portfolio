"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ACCENT = "var(--cs-accent-it)";
const EASE = [0.22, 1, 0.36, 1] as const;

const SNAPSHOT = [
  { label: "Role",      value: "UX Designer" },
  { label: "Timeline",  value: "Fall 2024" },
  { label: "Platform",  value: "Website" },
  { label: "Tools",     value: "Figma, Illustrator, Photoshop" },
  { label: "Methods",   value: "Student workshop, interviews, persona development, competitive analysis, wireframing, prototyping, usability feedback" },
  { label: "Outcome",   value: "Designed a high-fidelity website prototype that helps students discover scholarships, manage applications, and reuse profile information across opportunities." },
  { label: "Focus",     value: "Scholarship discovery, first-generation students, financial access, application tracking, reusable student profiles" },
];

export function Overview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="overview"
      style={{
        scrollMarginTop: 80,
        paddingBlock: "120px 140px",
        backgroundColor: "var(--cs-bg-secondary)",
      }}
    >
      <div className="section-container">
        <motion.div
          ref={ref}
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
            Project Snapshot
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
            The scholarship process wastes the time of the students who can least afford to lose it.
          </h2>
        </motion.div>

        {/* Snapshot grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ gap: 12, marginBottom: 72 }}
        >
          {SNAPSHOT.map(({ label, value }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.06 * i, ease: EASE }}
              style={{
                padding: "20px 20px",
                borderRadius: 14,
                border: "1px solid var(--cs-border)",
                backgroundColor: "var(--cs-surface)",
                display: "flex",
                flexDirection: "column" as const,
                gap: 10,
                gridColumn: label === "Focus" ? "1 / -1" : (label === "Methods" || label === "Outcome") ? "span 2" : undefined,
              }}
            >
              <span
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 500,
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.1em",
                  color: ACCENT,
                }}
              >
                {label}
              </span>
              <span style={{ fontSize: "0.88rem", fontWeight: 500, color: "var(--cs-text)", lineHeight: 1.5 }}>
                {value}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Summary prose */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
          style={{
            paddingTop: 64,
            borderTop: "1px solid var(--cs-border)",
            display: "grid",
            gap: 28,
          }}
          className="md:grid-cols-2"
        >
          <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "var(--cs-text-muted)", maxWidth: 560 }}>
            Applying for scholarships is broken. Students spend hours hunting across dozens of
            websites, filling out redundant forms, and still miss opportunities they were qualified
            for. InTuition reimagines this experience: a single, smart platform that does the
            matching work for you.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "var(--cs-text-muted)", maxWidth: 560 }}>
            We designed a profile-driven matching engine that surfaces relevant scholarships the
            moment a student builds their profile. A unified form applies that data across multiple
            opportunities, eliminating the redundant work that causes most students to give up
            halfway through.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
