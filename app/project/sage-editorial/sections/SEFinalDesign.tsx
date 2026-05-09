"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ACCENT = "#4ade80";

const FINAL_FIGMA_SRC =
  "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2F0ymuy0VQlIhUR7PuUn7OwG%2FEditorial-Sage%3Fnode-id%3D0-1%26t%3DHje2gMCEyqMNwmhc-1";

const FINAL_FIGMA_HREF =
  "https://www.figma.com/design/0ymuy0VQlIhUR7PuUn7OwG/Editorial-Sage?node-id=0-1&t=Hje2gMCEyqMNwmhc-1";

const GALLERY = [
  { src: "/sage-editorial/homepage-1280.png",  alt: "SAGE Editorial homepage — desktop 1280px" },
  { src: "/sage-editorial/homepage-393.png",   alt: "SAGE Editorial homepage — mobile 393px" },
  { src: "/sage-editorial/section-1280.png",   alt: "SAGE Editorial section landing page — desktop" },
  { src: "/sage-editorial/article-393.png",    alt: "SAGE Editorial article page — mobile" },
  { src: "/sage-editorial/sage-newsletter.png", alt: "SAGE Editorial newsletter mockup" },
  { src: "/sage-editorial/iphone-14.png",      alt: "SAGE Editorial on iPhone 14 — mobile mockup" },
];

export function SEFinalDesign() {
  const ref = useRef(null);
  const embedRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const embedInView = useInView(embedRef, { once: true, margin: "-80px" });

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
            The final design brings the editorial direction into a high-fidelity website experience.
            It uses structured article sections, publication-style hierarchy, muted sage tones, and
            expressive typography to create a site that feels both familiar and distinct from the
            main SAGE app.
          </p>
        </motion.div>

        {/* Main mockup — Group 637 */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 32 }}
        >
          <div
            style={{
              borderRadius: 20,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <img
              src="/sage-editorial/group-637.png"
              alt="SAGE Editorial final design website mockup"
              loading="lazy"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </motion.div>

        {/* Supporting caption */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "0.82rem",
            color: "rgba(242,237,232,0.35)",
            lineHeight: 1.6,
            maxWidth: 640,
            marginBottom: 64,
          }}
        >
          The goal was to create a reading experience that could hold local updates, features,
          stories, and resource-driven content while still feeling designed, trustworthy, and
          easy to navigate.
        </motion.p>

        {/* Gallery grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 96 }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgba(242,237,232,0.3)",
              marginBottom: 24,
            }}
          >
            Page Screens
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 16 }}>
            {GALLERY.map(({ src, alt }) => (
              <div
                key={src}
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final Figma embed */}
        <motion.div
          ref={embedRef}
          initial={{ opacity: 0, y: 32 }}
          animate={embedInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
                Open in Figma ↗
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
