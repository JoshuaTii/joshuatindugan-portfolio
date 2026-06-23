"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ACCENT = "var(--cs-accent-gw)";
const EASE = [0.22, 1, 0.36, 1] as const;

const SNAPSHOT_FIELDS = [
  { label: "Role", value: "UX Designer + UX Researcher" },
  { label: "Timeline", value: "Spring 2024" },
  { label: "Platform", value: "Mobile" },
  { label: "Tools", value: "Figma" },
  { label: "Methods", value: "User research, competitive analysis, journey mapping, wireframing, prototyping" },
  { label: "Focus", value: "Campus transportation, real-time tracking, wayfinding, student mobility, nearby discovery" },
  { label: "Outcome", value: "Designed a mobile prototype with four core features: shuttle tracking, route visibility, stop information, and Explore." },
];

export function Overview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="overview"
      style={{ scrollMarginTop: 80, paddingBlock: "100px 120px", backgroundColor: "var(--cs-bg-secondary)" }}
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
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--cs-text)",
              lineHeight: 1.15,
              maxWidth: 560,
            }}
          >
            A campus transit experience built around student confidence.
          </h2>
        </motion.div>

        {/* Snapshot grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 16, marginBottom: 56 }}
        >
          {SNAPSHOT_FIELDS.map((field, i) => (
            <motion.div
              key={field.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.07 * i, ease: EASE }}
              style={{
                padding: "22px 24px",
                borderRadius: 16,
                border: "1px solid var(--cs-border)",
                backgroundColor: "var(--cs-surface)",
                display: "flex",
                flexDirection: "column" as const,
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
                {field.label}
              </span>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "var(--cs-text-muted)" }}>
                {field.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Summary prose */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
          style={{
            padding: "36px 40px",
            borderRadius: 20,
            border: "1px solid var(--cs-border)",
            backgroundColor: "var(--cs-surface)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "28px 48px" }}>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "var(--cs-text-muted)" }}>
              GW RIDE is a mobile shuttle and campus discovery app designed for George Washington
              University students who rely on campus transportation to move between classes,
              residence halls, and nearby campus areas.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "var(--cs-text-muted)" }}>
              The project explores how real-time shuttle tracking, clearer stop information, and
              nearby place discovery can help students move around campus with more confidence
              and less confusion.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
