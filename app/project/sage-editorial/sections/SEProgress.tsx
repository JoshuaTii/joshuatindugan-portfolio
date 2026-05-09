"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ACCENT = "#4ade80";

const PROGRESS_FIGMA_SRC =
  "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2F0ymuy0VQlIhUR7PuUn7OwG%2FEditorial-Sage%3Fnode-id%3D1-4646%26t%3DHje2gMCEyqMNwmhc-1";

const PROGRESS_FIGMA_HREF =
  "https://www.figma.com/design/0ymuy0VQlIhUR7PuUn7OwG/Editorial-Sage?node-id=1-4646&t=Hje2gMCEyqMNwmhc-1";

export function SEProgress() {
  const ref = useRef(null);
  const embedRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const embedInView = useInView(embedRef, { once: true, margin: "-80px" });

  return (
    <section
      id="progress"
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
            Progress
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
            Progress and Layout Exploration
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(242,237,232,0.6)",
              maxWidth: 640,
            }}
          >
            For the low to medium fidelity stage, I focused on building a strong editorial
            structure before refining the visual system. The priority was clarity: how sections
            are organized, how readers move through content, and how grids can support multiple
            types of editorial information without feeling chaotic.
          </p>
        </motion.div>

        {/* Figma embed */}
        <motion.div
          ref={embedRef}
          initial={{ opacity: 0, y: 32 }}
          animate={embedInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 64 }}
        >
          <p
            style={{
              fontSize: "0.82rem",
              fontWeight: 600,
              color: "rgba(242,237,232,0.5)",
              marginBottom: 20,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Low to Medium Fidelity Figma Exploration
          </p>

          <div
            style={{
              borderRadius: 20,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.07)",
              backgroundColor: "#111113",
            }}
          >
            <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%" }}>
              <iframe
                src={PROGRESS_FIGMA_SRC}
                title="SAGE Editorial low to medium fidelity Figma exploration"
                loading="lazy"
                allowFullScreen
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              />
            </div>
            <p
              style={{
                padding: "10px 24px",
                fontSize: "0.75rem",
                color: "rgba(242,237,232,0.3)",
                lineHeight: 1.5,
                borderTop: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              Tip: You can drag and zoom inside the Figma preview to explore the layout.
            </p>
            <div
              style={{
                padding: "14px 24px",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
              }}
            >
              <span style={{ fontSize: "0.8rem", color: "rgba(242,237,232,0.35)" }}>
                Low to medium fidelity exploration
              </span>
              <a
                href={PROGRESS_FIGMA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.78rem",
                  color: ACCENT,
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  whiteSpace: "nowrap" as const,
                }}
              >
                Open in Figma ↗
              </a>
            </div>
          </div>
        </motion.div>

        {/* Peer critique note */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={embedInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
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
              color: "rgba(242,237,232,0.35)",
              marginBottom: 14,
            }}
          >
            Peer Critique
          </p>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.75,
              color: "rgba(242,237,232,0.6)",
            }}
          >
            During peer critique, the response was mostly positive — which is always welcome, but
            not always the most actionable design feedback. Since there were not many major
            critiques to act on, I used that moment to self-audit the system more closely: checking
            hierarchy, section rhythm, readability, and whether the editorial direction still felt
            genuinely connected to SAGE and its communities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
