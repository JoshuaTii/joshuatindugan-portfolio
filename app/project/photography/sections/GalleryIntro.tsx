"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function GalleryIntro() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{
        paddingBlock: "80px 64px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "0.75rem",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.16em",
            color: "#fb7185",
            marginBottom: 20,
          }}
        >
          Selected Frames
        </motion.p>

        <div className="grid md:grid-cols-2" style={{ gap: "20px 80px", alignItems: "end" }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#f2ede8",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Moments, Structures,
            <br className="hidden md:block" />
            and Details in Focus
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "rgba(242,237,232,0.45)",
                margin: 0,
              }}
            >
              A curated collection of photographs exploring architecture, patterns, color,
              perspective, and composition. Each image captures a moment of observation: through
              the geometry of a building, the quiet rhythm of repeated forms, the mood of color,
              or the way light changes a scene.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
