"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SNAPSHOT = [
  {
    label: "Role",
    value: "UX Designer + UX Researcher",
    detail: null,
  },
  {
    label: "Timeline",
    value: "Fall 2025 – Spring 2026",
    detail: "Two semesters",
  },
  {
    label: "Platform",
    value: "iOS / Android",
    detail: null,
  },
  {
    label: "Tools",
    value: "Figma, Adobe Creative Suite",
    detail: null,
  },
  {
    label: "Methods",
    value: "Systems mapping, contextual inquiry, market analysis, wireframing, prototyping",
    detail: null,
  },
  {
    label: "Focus",
    value: "Financial access, trust, community support, financial literacy, underbanked users",
    detail: null,
  },
  {
    label: "Outcome",
    value: "Designed a mobile prototype with four core features: Community Hub, Financial Lessons, Microloan, and Dashboard.",
    detail: null,
  },
];

export function Overview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="overview" className="!pt-[120px] !pb-[140px]">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 64 }}
        >
          <p className="kicker">Project Snapshot</p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--cs-text)",
              maxWidth: 640,
            }}
          >
            A thesis project rooted in
            <br />
            lived experience and real data.
          </h2>
        </motion.div>

        {/* Snapshot grid — 2 cols on mobile, 3-4 on desktop */}
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ gap: 16, marginBottom: 64 }}
        >
          {SNAPSHOT.map(({ label, value, detail }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              style={{
                padding: "24px 20px",
                borderRadius: 16,
                border: "1px solid var(--cs-border)",
                backgroundColor: "var(--cs-surface)",
                display: "flex",
                flexDirection: "column" as const,
                gap: 10,
                /* Outcome and Methods/Focus span full width on small grids */
                gridColumn: (label === "Outcome" || label === "Methods" || label === "Focus") ? "span 2" : "span 1",
              }}
              className={
                label === "Outcome" || label === "Methods" || label === "Focus"
                  ? "col-span-2 md:col-span-2"
                  : ""
              }
            >
              <span
                className="text-xs uppercase"
                style={{ letterSpacing: "0.1em", color: "var(--cs-accent-sf)" }}
              >
                {label}
              </span>
              <div className="flex flex-col" style={{ gap: 4 }}>
                <span style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--cs-text)", lineHeight: 1.5 }}>
                  {value}
                </span>
                {detail && (
                  <span style={{ fontSize: "0.8rem", color: "var(--cs-text-muted)" }}>
                    {detail}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brief summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            paddingTop: 56,
            borderTop: "1px solid var(--cs-border)",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 28,
          }}
          className="md:grid-cols-2"
        >
          <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "var(--cs-text-muted)", maxWidth: 560 }}>
            SAGE started as a question I couldn&rsquo;t stop asking: why does financial technology
            consistently ignore the communities that need it most? Ward 7 and Ward 8 in Washington
            D.C. have some of the lowest banking access rates in the country, despite being minutes
            from the nation&rsquo;s financial center.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "var(--cs-text-muted)", maxWidth: 560 }}>
            I spent two semesters mapping the systems that create financial exclusion, talking to
            residents, and designing a platform that treats trust as infrastructure. SAGE is not
            just an app. It is a design argument: that access and dignity are not mutually exclusive.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
