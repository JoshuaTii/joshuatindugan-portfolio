"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ACCENT = "var(--cs-accent-sf)";
const EASE = [0.22, 1, 0.36, 1] as const;

export function Context() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="context"
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
            Problem / Context
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--cs-text)",
              lineHeight: 1.1,
              maxWidth: 680,
              marginBottom: 24,
            }}
          >
            Campus Transit Should Feel Clear, Not Uncertain
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "var(--cs-text-muted)",
              maxWidth: 620,
            }}
          >
            GW students often move between different parts of campus (classes, housing, dining,
            study spaces, and nearby places). When shuttle locations, arrival times, and stops are
            unclear, students have to guess whether to wait, walk, or find another option.
          </p>
        </motion.div>

        {/* Challenge cards */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 20 }}>
          {/* What it wasn't */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
            style={{
              padding: "40px 36px",
              borderRadius: 20,
              border: "1px solid var(--cs-border)",
              backgroundColor: "var(--cs-surface)",
            }}
          >
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 600,
                textTransform: "uppercase" as const,
                letterSpacing: "0.12em",
                color: "var(--cs-text-faint)",
                marginBottom: 20,
              }}
            >
              The question we avoided
            </p>
            <div
              style={{
                padding: "20px 24px",
                borderRadius: 14,
                backgroundColor: "var(--cs-bg-secondary)",
                border: "1px solid var(--cs-border)",
                marginBottom: 20,
              }}
            >
              <p
                style={{
                  fontSize: "1.05rem",
                  fontStyle: "italic",
                  color: "var(--cs-text-muted)",
                  lineHeight: 1.65,
                }}
              >
                &ldquo;How might we make another transit app?&rdquo;
              </p>
            </div>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--cs-text-muted)" }}>
              Generic transit features (maps, timetables, route lists) exist already. Building
              another one wouldn&rsquo;t help students make better decisions on campus.
            </p>
          </motion.div>

          {/* The real challenge */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2, ease: EASE }}
            style={{
              padding: "40px 36px",
              borderRadius: 20,
              border: "1px solid rgba(155,233,49,0.2)",
              backgroundColor: "var(--cs-surface)",
              background: "linear-gradient(135deg, rgba(155,233,49,0.04) 0%, transparent 60%)",
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
              The real challenge
            </p>
            <div
              style={{
                padding: "20px 24px",
                borderRadius: 14,
                backgroundColor: "rgba(155,233,49,0.06)",
                border: "1px solid rgba(155,233,49,0.14)",
                marginBottom: 20,
              }}
            >
              <p
                style={{
                  fontSize: "1.05rem",
                  fontStyle: "italic",
                  color: "var(--cs-text)",
                  lineHeight: 1.65,
                }}
              >
                &ldquo;How might we help students quickly understand where the shuttle is, where
                it goes, and what nearby places they can access around campus?&rdquo;
              </p>
            </div>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--cs-text-muted)" }}>
              The design challenge was about clarity, confidence, and campus-connected mobility.
              Giving students enough information to make a fast, low-stress decision.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
