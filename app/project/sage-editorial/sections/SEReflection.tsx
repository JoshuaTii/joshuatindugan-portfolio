"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ACCENT = "#4ade80";

const TAKEAWAYS = [
  {
    label: "Design beyond the product",
    body: "Thinking about SAGE as a broader ecosystem (not just an app) pushed me to consider how editorial design, storytelling, and information architecture can serve the same mission differently.",
  },
  {
    label: "Editorial structure as UX",
    body: "Strong grid systems, hierarchy, and reading flow are not just aesthetic choices. They are UX decisions that shape how readers trust, engage with, and move through content.",
  },
  {
    label: "Color adaptation",
    body: "Adapting the SAGE palette rather than copying it taught me how to maintain brand continuity while developing a distinct visual identity for a different product context.",
  },
];

export function SEReflection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="reflection"
      style={{ scrollMarginTop: 80, paddingBlock: "120px 140px" }}
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={ref}
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
            Reflection
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#f2ede8",
              maxWidth: 720,
              lineHeight: 1.1,
              marginBottom: 28,
            }}
          >
            Reflection
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(242,237,232,0.6)",
              maxWidth: 640,
              marginBottom: 24,
            }}
          >
            This project helped me think about SAGE beyond the boundaries of an app interface.
            Designing an editorial extension meant stepping into a different kind of design
            problem: the primary challenge was not feature layout or interaction
            state, but rather how to make content feel trustworthy, readable, and genuinely
            connected to a community.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(242,237,232,0.6)",
              maxWidth: 640,
            }}
          >
            Working within an existing design system while developing a separate publication
            identity required careful judgment about what to borrow, what to soften, and what
            to leave behind. The editorial site needed to feel like it belonged to the same world
            as SAGE without feeling like a duplicate of it.
          </p>
        </motion.div>

        {/* Takeaway cards */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 20, marginBottom: 64 }}>
          {TAKEAWAYS.map(({ label, body }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                padding: "28px 24px",
                borderRadius: 20,
                border: "1px solid rgba(255,255,255,0.06)",
                backgroundColor: "#111113",
                display: "flex",
                flexDirection: "column" as const,
                gap: 14,
              }}
            >
              <span
                style={{
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: ACCENT,
                  fontWeight: 700,
                }}
              >
                0{i + 1}
              </span>
              <h3
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: "#f2ede8",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.3,
                  margin: 0,
                }}
              >
                {label}
              </h3>
              <p
                style={{
                  fontSize: "0.88rem",
                  lineHeight: 1.75,
                  color: "rgba(242,237,232,0.5)",
                  margin: 0,
                }}
              >
                {body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing quote */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{
            padding: "32px 40px",
            borderRadius: 20,
            borderLeft: `3px solid ${ACCENT}`,
            backgroundColor: "rgba(74,222,128,0.04)",
            maxWidth: 720,
          }}
        >
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: "rgba(242,237,232,0.7)",
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontStyle: "italic",
            }}
          >
            Designing editorial content is not just about layout. It is about how structure
            communicates trust, and how a publication can carry forward the same mission
            as a product, just in a different register.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
