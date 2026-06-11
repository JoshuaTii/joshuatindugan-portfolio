"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ClickableImage } from "./ClickableImage";

const EASE = [0.22, 1, 0.36, 1] as const;

export function UserJourney() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      className="!pt-[120px] !pb-[140px]"
      style={{ backgroundColor: "var(--cs-bg-secondary)" }}
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ marginBottom: 56 }}
        >
          <p className="kicker">User Journey / Core Flow</p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--cs-text)",
              maxWidth: 640,
              marginBottom: 24,
            }}
          >
            From research to product experience.
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "var(--cs-text-muted)",
              maxWidth: 620,
            }}
          >
            Research showed that residents needed more than financial tools. They needed trusted
            guidance, accessible learning, local support, and clear next steps. To turn those
            needs into a product experience, the platform was designed around a simple journey:
            learn, connect, take action, and track progress.
          </p>
        </motion.div>

        {/* User journey map image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          style={{ marginBottom: 64 }}
        >
          <ClickableImage
            src="/sage/user-journey-map.png"
            alt="SAGE user journey map"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: 16,
              border: "1px solid var(--cs-border)",
            }}
          />
          <p className="caption" style={{ marginTop: 12 }}>
            User journey map showing how residents move through the SAGE platform across key touchpoints.
          </p>
        </motion.div>

        {/* Core needs callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
          style={{
            padding: "36px 40px",
            borderRadius: 20,
            border: "1px solid rgba(155,233,49,0.14)",
            background: "linear-gradient(135deg, rgba(155,233,49,0.04) 0%, transparent 60%)",
          }}
        >
          <p
            style={{
              fontSize: "0.72rem",
              fontWeight: 600,
              textTransform: "uppercase" as const,
              letterSpacing: "0.12em",
              color: "var(--cs-accent-sf)",
              marginBottom: 16,
            }}
          >
            Core user needs driving this flow
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 24 }}>
            {[
              { need: "Trusted Guidance", desc: "A place that feels safe and familiar, not institutional." },
              { need: "Accessible Learning", desc: "Financial concepts explained simply, without shame." },
              { need: "Local Support", desc: "Real connections to nearby organizations and resources." },
              { need: "Clear Next Steps", desc: "Always know what to do next without feeling lost." },
            ].map(({ need, desc }) => (
              <div key={need} style={{ display: "flex", flexDirection: "column" as const, gap: 6 }}>
                <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--cs-text)" }}>
                  {need}
                </span>
                <p style={{ fontSize: "0.82rem", lineHeight: 1.6, color: "var(--cs-text-muted)" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
