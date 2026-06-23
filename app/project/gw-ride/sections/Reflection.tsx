"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ACCENT = "var(--cs-accent-gw)";
const EASE = [0.22, 1, 0.36, 1] as const;

const VALIDATION_CHANGES = [
  "Real-time shuttle tracking became more visible and immediately accessible from the home screen.",
  "Route and stop information was simplified so students could scan it faster without reading every detail.",
  "The experience shifted from only transportation to transportation plus nearby discovery.",
  "Explore was added to support students outside of the active shuttle flow.",
  "The interface was refined to help students make quick decisions while moving around campus.",
];

const LEARNINGS = [
  "Students need quick answers when they are moving. Not more information.",
  "A transit app should help users decide, not just display information.",
  "Nearby discovery can make a transportation tool more useful in everyday campus life.",
];

const NEXT_STEPS = [
  "Test the prototype with more GW students during actual commute moments on campus.",
  "Explore live shuttle data integration by partnering with GW Transportation.",
  "Refine the Explore feature with better place categories and campus-specific context.",
  "Add accessibility details for stops and routes: physical access, covered waiting areas.",
  "Evaluate push notifications for shuttle arrivals, delays, and route changes.",
];

export function Reflection() {
  const ref = useRef(null);
  const reflectionRef = useRef(null);
  const nextRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reflectionInView = useInView(reflectionRef, { once: true, margin: "-80px" });
  const nextInView = useInView(nextRef, { once: true, margin: "-80px" });

  return (
    <section
      id="reflection"
      style={{ scrollMarginTop: 80, paddingBlock: "120px 140px" }}
    >
      <div className="section-container">
        {/* Validation / Feedback header */}
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
            Validation / Feedback
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
            Feedback that shaped the final experience.
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--cs-text-muted)", maxWidth: 620 }}>
            Because this was a student design project for a university proposal, validation focused
            on qualitative feedback rather than business or shipped metrics.
          </p>
        </motion.div>

        {/* What changed after feedback */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          style={{ marginBottom: 96 }}
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
            What Changed After Feedback
          </h3>
          <div
            style={{
              padding: "32px 36px",
              borderRadius: 20,
              border: "1px solid var(--cs-border)",
              backgroundColor: "var(--cs-surface)",
              display: "flex",
              flexDirection: "column" as const,
              gap: 16,
            }}
          >
            {VALIDATION_CHANGES.map((change, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.06 * i, ease: EASE }}
                style={{ display: "flex", gap: 16, alignItems: "flex-start" }}
              >
                <span
                  style={{
                    minWidth: 24,
                    height: 24,
                    borderRadius: "50%",
                    backgroundColor: "var(--accent-dim)",
                    border: "1px solid var(--accent-border-strong)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    color: ACCENT,
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                >
                  {i + 1}
                </span>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.65, color: "var(--cs-text-muted)" }}>
                  {change}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Reflection */}
        <div ref={reflectionRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={reflectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
            style={{ marginBottom: 28 }}
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
              Reflection
            </p>
            <h3
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--cs-text)",
                lineHeight: 1.2,
                maxWidth: 600,
                marginBottom: 20,
              }}
            >
              What I Learned
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--cs-text-muted)", maxWidth: 620 }}>
              This project taught me that campus transportation is not only about getting from one
              stop to another. It is also about reducing uncertainty, helping students feel
              oriented, and making the surrounding campus easier to understand.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={reflectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            style={{
              display: "grid",
              gap: 16,
              marginBottom: 56,
            }}
            className="grid-cols-1 sm:grid-cols-3"
          >
            {LEARNINGS.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "24px 24px",
                  borderRadius: 14,
                  border: "1px solid var(--cs-border)",
                  backgroundColor: "var(--cs-surface)",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  color: "var(--cs-text-muted)",
                }}
              >
                {item}
              </div>
            ))}
          </motion.div>

          {/* Reflection prose */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={reflectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            style={{
              display: "grid",
              gap: 28,
              paddingTop: 40,
              borderTop: "1px solid var(--cs-border)",
              marginBottom: 96,
            }}
            className="md:grid-cols-2"
          >
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "var(--cs-text-muted)", maxWidth: 560 }}>
              Designing GW Ride taught me that transportation UX is fundamentally about reducing
              anxiety, not adding features. Students don&rsquo;t want more information. They want
              the right information at the right moment. The most valuable insight was how much
              cognitive load unclear transit data creates.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "var(--cs-text-muted)", maxWidth: 560 }}>
              This project also showed me how visual hierarchy functions as a tool, not just an
              aesthetic choice. Every decision (type scale, information density, color contrast)
              was in direct service of helping someone make a faster, more confident decision in
              a genuinely pressure-filled moment.
            </p>
          </motion.div>
        </div>

        {/* Next Steps */}
        <div ref={nextRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={nextInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
            style={{ marginBottom: 24 }}
          >
            <p
              style={{
                display: "inline-block",
                fontSize: "0.75rem",
                fontWeight: 500,
                textTransform: "uppercase" as const,
                letterSpacing: "0.12em",
                color: ACCENT,
                marginBottom: 12,
              }}
            >
              Next Steps
            </p>
            <h3
              style={{
                fontSize: "1.05rem",
                fontWeight: 600,
                color: "var(--cs-text)",
                letterSpacing: "-0.01em",
                marginBottom: 4,
              }}
            >
              If development were to continue.
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={nextInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            style={{
              padding: "32px 36px",
              borderRadius: 20,
              border: "1px solid var(--cs-border)",
              backgroundColor: "var(--cs-surface)",
              display: "flex",
              flexDirection: "column" as const,
              gap: 16,
            }}
          >
            {NEXT_STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={nextInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.06 * i, ease: EASE }}
                style={{ display: "flex", gap: 16, alignItems: "flex-start" }}
              >
                <span
                  style={{
                    minWidth: 24,
                    height: 24,
                    borderRadius: "50%",
                    backgroundColor: "var(--accent-dim)",
                    border: "1px solid var(--accent-border-strong)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    color: ACCENT,
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                >
                  {i + 1}
                </span>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.65, color: "var(--cs-text-muted)" }}>
                  {step}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
