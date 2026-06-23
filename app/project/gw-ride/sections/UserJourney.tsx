"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ClickableImage } from "@/app/components/ClickableImage";

const ACCENT = "var(--cs-accent-gw)";
const EASE = [0.22, 1, 0.36, 1] as const;

const FLOW_STEPS = [
  { step: "01", label: "Open App", desc: "Student launches GW Ride to check shuttle status." },
  { step: "02", label: "View Shuttle Location", desc: "Live shuttle position and arrival time appear immediately." },
  { step: "03", label: "Check Stop / Route Details", desc: "Student confirms the route covers where they need to go." },
  { step: "04", label: "Decide to Wait or Walk", desc: "With clear timing, the decision takes seconds, not guesswork." },
  { step: "05", label: "Explore Nearby Places", desc: "Between trips, students discover food, study spots, and campus services." },
];

export function UserJourney() {
  const ref = useRef(null);
  const flowRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const flowInView = useInView(flowRef, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      style={{ scrollMarginTop: 80, paddingBlock: "120px 140px" }}
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ marginBottom: 64 }}
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
            User Journey / Core Flow
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--cs-text)",
              lineHeight: 1.1,
              maxWidth: 640,
              marginBottom: 24,
            }}
          >
            From uncertainty to a confident campus commute.
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--cs-text-muted)", maxWidth: 620 }}>
            Students needed an experience that could answer quick questions in the moment: Where
            is the shuttle? When will it arrive? Where does it stop? What is nearby? The core flow
            was designed to answer all four with as few taps as possible.
          </p>
        </motion.div>

        {/* User flow diagram */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          style={{
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid var(--cs-border)",
            marginBottom: 64,
          }}
        >
          <ClickableImage
            src="/gw-ride/user-flow-diagram.png"
            alt="GW Ride user flow diagram: core interaction steps from app open to destination"
            style={{ width: "100%", height: "auto", display: "block" }}
            loading="lazy"
          />
          <div
            style={{
              padding: "14px 24px",
              backgroundColor: "var(--cs-surface)",
              borderTop: "1px solid var(--cs-border)",
            }}
          >
            <p className="caption">
              Core user flow: the end-to-end interaction path students follow from opening the app
              to making a confident commute decision.
            </p>
          </div>
        </motion.div>

        {/* Core flow steps */}
        <div ref={flowRef}>
          <div
            className="grid grid-cols-1 md:grid-cols-5"
            style={{ gap: 12, marginBottom: 64 }}
          >
            {FLOW_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={flowInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 * i, ease: EASE }}
                style={{
                  padding: "24px 20px",
                  borderRadius: 14,
                  border: "1px solid var(--cs-border)",
                  backgroundColor: "var(--cs-surface)",
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: 12,
                  position: "relative" as const,
                }}
              >
                {/* Arrow connector - hidden on mobile, shown on md+ */}
                {i < FLOW_STEPS.length - 1 && (
                  <div
                    className="hidden md:block"
                    style={{
                      position: "absolute" as const,
                      right: -8,
                      top: "50%",
                      transform: "translateY(-50%)",
                      zIndex: 2,
                      fontSize: "0.9rem",
                      color: "var(--cs-border-strong)",
                      fontWeight: 600,
                    }}
                  >
                    →
                  </div>
                )}
                <span
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "var(--accent-dim)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  {step.step}
                </span>
                <h4
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    color: "var(--cs-text)",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.35,
                  }}
                >
                  {step.label}
                </h4>
                <p style={{ fontSize: "0.8rem", lineHeight: 1.6, color: "var(--cs-text-muted)" }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Core needs callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={flowInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
            style={{
              padding: "36px 40px",
              borderRadius: 20,
              border: "1px solid var(--accent-border)",
              background: "linear-gradient(135deg, var(--accent-interactive-bg) 0%, transparent 60%)",
            }}
          >
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 600,
                textTransform: "uppercase" as const,
                letterSpacing: "0.12em",
                color: ACCENT,
                marginBottom: 20,
              }}
            >
              Questions the experience answers
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 24 }}>
              {[
                { q: "Where is the shuttle?", a: "Live location on the main screen." },
                { q: "When will it arrive?", a: "ETA visible without any extra taps." },
                { q: "Where does it stop?", a: "Route and stop details one tap away." },
                { q: "What is nearby?", a: "Explore surfaces places while students wait." },
              ].map(({ q, a }) => (
                <div key={q} style={{ display: "flex", flexDirection: "column" as const, gap: 6 }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--cs-text)" }}>
                    {q}
                  </span>
                  <p style={{ fontSize: "0.82rem", lineHeight: 1.6, color: "var(--cs-text-muted)" }}>
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
