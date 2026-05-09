"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ACCENT = "#4ade80";

const NEXT_STEPS = [
  {
    title: "Prototype key interactions",
    body: "Build interactive Figma prototypes for the newsletter signup flow, article navigation, and section filtering to demonstrate how the editorial site would behave as a live product.",
  },
  {
    title: "Expand the article system",
    body: "Design additional article templates — long-form features, resource roundups, and community spotlights — to show how the editorial grid adapts to different content types.",
  },
  {
    title: "Develop the mobile experience",
    body: "Refine the mobile breakpoints with more detail: gesture interactions, bottom navigation patterns, and reading-mode optimizations for smaller screens.",
  },
  {
    title: "Test with real readers",
    body: "Run usability sessions with Ward 7 and Ward 8 community members to evaluate whether the editorial structure, hierarchy, and tone feel genuinely accessible and trustworthy.",
  },
  {
    title: "Connect editorial content to app features",
    body: "Map specific article types to SAGE app features — for example, a story about local credit unions could link directly to the app's credit union finder — creating a seamless bridge between reading and action.",
  },
];

export function SENextSteps() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="next-steps"
      style={{
        scrollMarginTop: 80,
        paddingBlock: "120px 140px",
        backgroundColor: "rgba(17,17,19,0.5)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
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
            Next Steps
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
            If I Were to Continue
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(242,237,232,0.6)",
              maxWidth: 640,
            }}
          >
            The editorial site as designed is a strong visual and structural foundation. If this
            project were to move toward a live product, these are the next areas I would focus on
            to deepen both the design system and its real-world usability.
          </p>
        </motion.div>

        {/* Steps list */}
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 16 }}>
          {NEXT_STEPS.map(({ title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.06 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: "flex",
                gap: 28,
                padding: "28px 32px",
                borderRadius: 20,
                border: "1px solid rgba(255,255,255,0.06)",
                backgroundColor: "#111113",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: ACCENT,
                  letterSpacing: "0.08em",
                  minWidth: 28,
                  paddingTop: 3,
                  flexShrink: 0,
                }}
              >
                0{i + 1}
              </span>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#f2ede8",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.3,
                    margin: 0,
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.75,
                    color: "rgba(242,237,232,0.5)",
                    margin: 0,
                  }}
                >
                  {body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
