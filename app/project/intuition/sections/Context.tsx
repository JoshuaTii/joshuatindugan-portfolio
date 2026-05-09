"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ACCENT = "#f59e0b";

export function Context() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="context"
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
          The Challenge
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
          The scholarship process is fragmented,
          <br className="hidden md:block" />
          exhausting, and inaccessible.
        </motion.h2>

        <div className="grid md:grid-cols-2" style={{ gap: "40px 80px" }}>
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              padding: "36px 32px",
              borderRadius: 20,
              border: "1px solid rgba(255,255,255,0.06)",
              backgroundColor: "#111113",
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
                  backgroundColor: "rgba(245,158,11,0.1)",
                  border: "1px solid rgba(245,158,11,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.75rem",
                  color: ACCENT,
                  fontWeight: 700,
                }}
              >
                01
              </div>
              <span
                style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: ACCENT,
                  fontWeight: 500,
                }}
              >
                The Problem
              </span>
            </div>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "rgba(242,237,232,0.65)" }}>
              Students — especially first-generation college students — face an invisible wall when trying
              to find financial support. Information is scattered across dozens of sites, each with
              different requirements and redundant application forms. The process is so overwhelming
              that many qualified students never apply at all.
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: 10, margin: 0, paddingLeft: 0, listStyle: "none" }}>
              {[
                "Scholarship searches require hours across multiple sites",
                "Duplicate application forms waste student time",
                "Deadlines are easy to miss without a central dashboard",
                "First-gen students lack institutional guidance",
              ].map((point) => (
                <li
                  key={point}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    fontSize: "0.875rem",
                    color: "rgba(242,237,232,0.5)",
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ color: ACCENT, marginTop: 3, flexShrink: 0 }}>—</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            style={{
              padding: "36px 32px",
              borderRadius: 20,
              border: "1px solid rgba(255,255,255,0.06)",
              backgroundColor: "#111113",
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
                  backgroundColor: "rgba(245,158,11,0.1)",
                  border: "1px solid rgba(245,158,11,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.75rem",
                  color: ACCENT,
                  fontWeight: 700,
                }}
              >
                02
              </div>
              <span
                style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: ACCENT,
                  fontWeight: 500,
                }}
              >
                Our Approach
              </span>
            </div>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "rgba(242,237,232,0.65)" }}>
              InTuition consolidates the entire scholarship journey into one cohesive platform.
              Students build a profile once — and the system uses that data to surface personalized
              matches, pre-fill applications, and track deadlines automatically. Less friction
              at every step means more students reach the finish line.
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: 10, margin: 0, paddingLeft: 0, listStyle: "none" }}>
              {[
                "Smart matching surfaces relevant scholarships instantly",
                "One unified form applies to multiple opportunities",
                "Progress tracking and deadline reminders built in",
                "Social features let students share and learn from peers",
              ].map((point) => (
                <li
                  key={point}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    fontSize: "0.875rem",
                    color: "rgba(242,237,232,0.5)",
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ color: ACCENT, marginTop: 3, flexShrink: 0 }}>—</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Scope note */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            marginTop: 48,
            fontSize: "0.875rem",
            lineHeight: 1.65,
            color: "rgba(242,237,232,0.35)",
            maxWidth: 600,
          }}
        >
          <span style={{ color: "rgba(245,158,11,0.6)", fontWeight: 500 }}>Scope: </span>
          Two months from problem discovery through high-fidelity prototype delivery.
        </motion.p>
      </div>
    </section>
  );
}
