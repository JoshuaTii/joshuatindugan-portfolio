"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ACCENT = "var(--cs-accent-sf)";
const EASE = [0.22, 1, 0.36, 1] as const;

const RESEARCH_METHODS = [
  {
    method: "Student Conversations",
    purpose: "Understand how students use the shuttle and what makes the experience difficult.",
    revealed: "Students wanted faster access to arrival times, stop locations, and route information.",
  },
  {
    method: "Campus Transit Observation",
    purpose: "Observe how students move around campus and interact with shuttle stops.",
    revealed: "Students often had to make quick decisions with limited information available at stops.",
  },
  {
    method: "Competitive Analysis",
    purpose: "Review how transit and map-based apps communicate movement, nearby places, and route details.",
    revealed: "Real-time tracking, clear stop details, and simple map interactions were important patterns to include.",
  },
  {
    method: "Journey Mapping",
    purpose: "Understand the shuttle experience before, during, and after a ride.",
    revealed: "The biggest pain point was not only waiting, but not knowing whether waiting was worth it.",
  },
];

export function Research() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="research"
      style={{ scrollMarginTop: 80, paddingBlock: "120px 140px" }}
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
            Research Approach
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
            Understanding what students actually need at the moment of decision.
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--cs-text-muted)", maxWidth: 600 }}>
            Research focused on understanding how students navigate GW&rsquo;s campus
            transportation, what makes the shuttle experience frustrating, and what information
            students need before deciding to wait or walk.
          </p>
        </motion.div>

        {/* Research methods table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        >
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              color: "var(--cs-text-muted)",
              textTransform: "uppercase" as const,
              letterSpacing: "0.1em",
              marginBottom: 24,
            }}
          >
            Research Methods
          </h3>

          {/* Desktop table */}
          <div
            className="hidden md:block"
            style={{
              borderRadius: 16,
              border: "1px solid var(--cs-border)",
              overflow: "hidden",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" as const }}>
              <thead>
                <tr style={{ backgroundColor: "var(--cs-surface)" }}>
                  {["Research Method", "Purpose", "What It Revealed"].map((col) => (
                    <th
                      key={col}
                      style={{
                        padding: "16px 24px",
                        textAlign: "left" as const,
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        textTransform: "uppercase" as const,
                        letterSpacing: "0.1em",
                        color: ACCENT,
                        borderBottom: "1px solid var(--cs-border)",
                        whiteSpace: "nowrap" as const,
                      }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {RESEARCH_METHODS.map((row, i) => (
                  <motion.tr
                    key={row.method}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                    style={{
                      borderBottom:
                        i < RESEARCH_METHODS.length - 1 ? "1px solid var(--cs-border)" : "none",
                      transition: "background-color 200ms ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor =
                        "rgba(155,233,49,0.04)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                    }}
                  >
                    <td
                      style={{
                        padding: "18px 24px",
                        fontSize: "0.88rem",
                        fontWeight: 600,
                        color: "var(--cs-text)",
                        verticalAlign: "top" as const,
                        whiteSpace: "nowrap" as const,
                      }}
                    >
                      {row.method}
                    </td>
                    <td
                      style={{
                        padding: "18px 24px",
                        fontSize: "0.88rem",
                        lineHeight: 1.65,
                        color: "var(--cs-text-muted)",
                        verticalAlign: "top" as const,
                      }}
                    >
                      {row.purpose}
                    </td>
                    <td
                      style={{
                        padding: "18px 24px",
                        fontSize: "0.88rem",
                        lineHeight: 1.65,
                        color: "var(--cs-text-muted)",
                        verticalAlign: "top" as const,
                      }}
                    >
                      {row.revealed}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: stacked cards */}
          <div className="md:hidden flex flex-col" style={{ gap: 12 }}>
            {RESEARCH_METHODS.map((row, i) => (
              <motion.div
                key={row.method}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.06, ease: EASE }}
                style={{
                  padding: "20px 20px",
                  borderRadius: 14,
                  border: "1px solid var(--cs-border)",
                  backgroundColor: "var(--cs-surface)",
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: 10,
                }}
              >
                <span
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: ACCENT,
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.08em",
                  }}
                >
                  {row.method}
                </span>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "var(--cs-text-muted)" }}>
                  <strong style={{ color: "var(--cs-text-faint)" }}>Purpose:</strong>{" "}
                  {row.purpose}
                </p>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "var(--cs-text-muted)" }}>
                  <strong style={{ color: "var(--cs-text-faint)" }}>Revealed:</strong>{" "}
                  {row.revealed}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
