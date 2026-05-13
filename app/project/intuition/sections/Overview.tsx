"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ACCENT = "#f59e0b";

const META_CARDS = [
  { label: "Role",         items: ["UX Designer"] },
  { label: "Timeline",     items: ["Fall 2024"] },
  { label: "Team",         items: ["Collaborative Student Project"] },
  { label: "Tools",        items: ["Figma", "Illustrator", "Photoshop"] },
  { label: "Deliverables", items: ["Website Prototype", "Hi-Fi"] },
];

export function Overview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="overview" style={{ scrollMarginTop: 80, paddingBlock: "120px 140px" }}>
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
            Project Overview
          </p>
          <div
            className="flex flex-col md:flex-row md:items-end md:justify-between"
            style={{ gap: "24px 64px", marginBottom: 72 }}
          >
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "#f2ede8",
                lineHeight: 1.1,
              }}
            >
              The scholarship process wastes the time
              <br />
              of the students who can least afford to lose it.
            </h2>
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.65,
                color: "rgba(242,237,232,0.45)",
                maxWidth: 380,
                textAlign: "right" as const,
              }}
            >
              An 8-week collaborative UI/UX student project exploring how design can
              remove the invisible barriers that prevent qualified students from finding and
              applying for funding.
            </p>
          </div>
        </motion.div>

        {/* Meta cards */}
        <div className="grid grid-cols-2 md:grid-cols-5" style={{ gap: 16 }}>
          {META_CARDS.map(({ label, items }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
              style={{
                padding: "24px 20px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.06)",
                backgroundColor: "#111113",
                display: "flex",
                flexDirection: "column" as const,
                gap: 12,
              }}
            >
              <span
                className="text-xs uppercase"
                style={{ letterSpacing: "0.1em", color: ACCENT }}
              >
                {label}
              </span>
              <div className="flex flex-col" style={{ gap: 6 }}>
                {items.map((item) => (
                  <span
                    key={item}
                    style={{ fontSize: "0.88rem", fontWeight: 500, color: "#f2ede8", lineHeight: 1.4 }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            marginTop: 64,
            paddingTop: 64,
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "grid",
            gap: 28,
          }}
          className="md:grid-cols-2"
        >
          <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "rgba(242,237,232,0.65)", maxWidth: 560 }}>
            Applying for scholarships is broken. Students spend hours hunting across dozens of websites,
            filling out redundant forms, and still miss opportunities they were qualified for. InTuition
            reimagines this experience: a single, smart platform that does the matching work for you.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "rgba(242,237,232,0.65)", maxWidth: 560 }}>
            We designed a profile-driven matching engine that surfaces relevant scholarships
            the moment a student builds their profile. A single unified form applies that data
            across multiple opportunities, eliminating the redundant work that causes most
            students to give up halfway through.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
