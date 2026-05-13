"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ACCENT = "#4ade80";

const FINAL_FIGMA_SRC =
  "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2F0ymuy0VQlIhUR7PuUn7OwG%2FEditorial-Sage%3Fnode-id%3D0-1%26t%3DHje2gMCEyqMNwmhc-1";

const FINAL_FIGMA_HREF =
  "https://www.figma.com/design/0ymuy0VQlIhUR7PuUn7OwG/Editorial-Sage?node-id=0-1&t=Hje2gMCEyqMNwmhc-1";

const PROTO_FIGMA_SRC =
  "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F0ymuy0VQlIhUR7PuUn7OwG%2FEditorial-Sage%3Fpage-id%3D0%253A1%26node-id%3D1-3135%26p%3Df%26viewport%3D-1752%252C-30%252C0.36%26t%3DI5mE11KMThImR3JY-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D1%253A574";

const PROTO_FIGMA_HREF =
  "https://www.figma.com/proto/0ymuy0VQlIhUR7PuUn7OwG/Editorial-Sage?page-id=0%3A1&node-id=1-3135&p=f&viewport=-1752%2C-30%2C0.36&t=I5mE11KMThImR3JY-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A574";

export function SEFinalDesign() {
  const ref = useRef(null);
  const embedRef = useRef(null);
  const protoRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const embedInView = useInView(embedRef, { once: true, margin: "-80px" });
  const protoInView = useInView(protoRef, { once: true, margin: "-80px" });

  return (
    <section
      id="final-design"
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
            Final Design
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
            Final Design
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(242,237,232,0.6)",
              maxWidth: 640,
            }}
          >
            The final design resolves every direction decision into concrete editorial choices.
            Structured article sections establish reading rhythm and signal to users that content
            is organized, not overwhelming. The muted sage palette deliberately steps back from
            the app's brighter accent: a publication earns trust through restraint, not energy.
            Expressive serif headlines carry the warmth and credibility that SAGE's communities
            need to feel like this publication was made for them, not distributed to them.
          </p>
        </motion.div>

        {/* Main mockup — Group 637 */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 96 }}
        >
          <img
            src="/sage-editorial/group-637.png"
            alt="SAGE Editorial final design website mockup"
            loading="lazy"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </motion.div>

        {/* Final Figma embed */}
        <motion.div
          ref={embedRef}
          initial={{ opacity: 0, y: 32 }}
          animate={embedInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 56 }}
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
            Final High-Fidelity Figma File
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
                src={FINAL_FIGMA_SRC}
                title="SAGE Editorial final high-fidelity Figma design"
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
                Full high-fidelity design file
              </span>
              <a
                href={FINAL_FIGMA_HREF}
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
                Open final design in Figma ↗
              </a>
            </div>
          </div>
        </motion.div>

        {/* Interactive Prototype embed */}
        <motion.div
          ref={protoRef}
          initial={{ opacity: 0, y: 32 }}
          animate={protoInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            style={{
              fontSize: "0.82rem",
              fontWeight: 600,
              color: "rgba(242,237,232,0.5)",
              marginBottom: 8,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Interactive Prototype
          </p>
          <p
            style={{
              fontSize: "0.9rem",
              color: "rgba(242,237,232,0.5)",
              lineHeight: 1.6,
              marginBottom: 20,
            }}
          >
            Explore the final SAGE Editorial prototype and page flow.
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
                src={PROTO_FIGMA_SRC}
                title="SAGE Editorial interactive prototype"
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
            <div
              style={{
                padding: "10px 24px",
                borderTop: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(242,237,232,0.3)",
                  lineHeight: 1.5,
                  marginBottom: 10,
                }}
              >
                Tip: You can drag, zoom, and click through the Figma prototype.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                }}
              >
                <span style={{ fontSize: "0.8rem", color: "rgba(242,237,232,0.35)" }}>
                  Interactive page flow
                </span>
                <a
                  href={PROTO_FIGMA_HREF}
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
                  Open prototype in Figma ↗
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
