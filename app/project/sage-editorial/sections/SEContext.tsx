"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ACCENT = "#4ade80";

export function SEContext() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="context"
      style={{
        scrollMarginTop: 80,
        paddingBlock: "120px 140px",
        backgroundColor: "rgba(17,17,19,0.5)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 64 }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: ACCENT,
              marginBottom: 16,
            }}
          >
            Context
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#f2ede8",
              maxWidth: 720,
              marginBottom: 28,
              lineHeight: 1.1,
            }}
          >
            Why an Editorial Extension?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(242,237,232,0.6)",
              maxWidth: 640,
              marginBottom: 28,
            }}
          >
            SAGE started as a banking access tool for D.C.&apos;s Ward 7 and Ward 8, designed around
            the communities that predatory lenders had targeted for decades. For this editorial
            project, I wanted to extend that system beyond product features and into storytelling.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(242,237,232,0.6)",
              maxWidth: 640,
            }}
          >
            The editorial site became a space for local stories, daily decisions, community
            updates, and the financial realities that shape life in Ward 7 and Ward 8. It creates
            a more familiar entry point into the same themes SAGE addresses: trust, access, and
            the kind of financial knowledge that doesn&apos;t travel through bank brochures.
          </p>
        </motion.div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{
            padding: "32px 40px",
            borderRadius: 20,
            borderLeft: `3px solid ${ACCENT}`,
            backgroundColor: "rgba(74,222,128,0.04)",
            marginBottom: 48,
            maxWidth: 720,
          }}
        >
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: "rgba(242,237,232,0.75)",
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontStyle: "italic",
            }}
          >
            The goal was not to make the site feel like a corporate resource hub. The goal was to
            make it feel like a familiar publication: with structure, warmth, and a clear
            editorial voice.
          </p>
        </motion.div>

        {/* Class prompt card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{
            padding: "32px 36px",
            borderRadius: 20,
            border: "1px solid rgba(255,255,255,0.06)",
            backgroundColor: "#111113",
            maxWidth: 720,
          }}
        >
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: ACCENT,
              marginBottom: 14,
            }}
          >
            Assignment Frame
          </p>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.75,
              color: "rgba(242,237,232,0.6)",
            }}
          >
            The editorial course became a reason to ask a different question: what does SAGE look
            like when it&apos;s not selling something? The deliverable was a multi-page digital
            publication. The real challenge was making financial life feel human enough that
            someone would actually read it. Grid systems, typesetting, hierarchy, and editorial
            voice all in service of that.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
