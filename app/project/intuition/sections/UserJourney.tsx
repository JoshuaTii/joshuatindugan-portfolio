"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ClickableImage } from "@/app/components/ClickableImage";

const ACCENT = "var(--cs-accent-it)";
const EASE = [0.22, 1, 0.36, 1] as const;

export function UserJourney() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      style={{ scrollMarginTop: 80, paddingBlock: "120px 140px" }}
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
            One place to discover, apply, and track without starting over every time.
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--cs-text-muted)", maxWidth: 620 }}>
            Students needed one place to discover scholarships, check fit, apply, and track
            progress without rebuilding their application from scratch every time. The core
            flow was designed to reduce repeated work at every step.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
        >
          <ClickableImage
            src="/intuition/contents/thesis-second-half.png"
            alt="InTuition user journey and core flow diagram"
            wrapperStyle={{ width: "115%", marginLeft: "-7.5%" }}
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
