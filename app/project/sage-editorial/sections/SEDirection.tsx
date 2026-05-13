"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ACCENT = "#4ade80";

const DIRECTION_CARDS = [
  {
    title: "Familiarity through editorial cues",
    body: "Newspaper-like structures, article blocks, section hierarchy, and strong grids help the experience feel familiar and readable, drawing on what readers already know.",
  },
  {
    title: "Trust through structure",
    body: "Clear spacing, organized layouts, and consistent content patterns make the site feel reliable without becoming cold or institutional.",
  },
  {
    title: "Community through storytelling",
    body: "The editorial format creates room for stories, updates, and lived experiences that a product interface alone cannot fully express.",
  },
  {
    title: "A softer SAGE identity",
    body: "The color system takes inspiration from SAGE but uses muted editorial tones to create a distinct publication personality that still feels connected to the same design world.",
  },
];

export function SEDirection() {
  const ref = useRef(null);
  const moodRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const moodInView = useInView(moodRef, { once: true, margin: "-80px" });

  return (
    <section
      id="direction"
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
            Direction
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
            Editorial Direction
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(242,237,232,0.6)",
              maxWidth: 640,
            }}
          >
            I focused on making the site feel familiar by borrowing cues from newspaper and
            magazine layouts while still keeping the experience clear, structured, and trustworthy.
            Since SAGE deals with serious topics like financial access, trust, and community
            resources, the editorial direction needed to balance warmth with credibility.
          </p>
        </motion.div>

        {/* Direction cards */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 20, marginBottom: 96 }}>
          {DIRECTION_CARDS.map(({ title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              style={{
                padding: "32px 28px",
                borderRadius: 20,
                border: "1px solid rgba(255,255,255,0.06)",
                backgroundColor: "#111113",
                display: "flex",
                flexDirection: "column" as const,
                gap: 16,
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
                  fontSize: "clamp(1rem, 2vw, 1.15rem)",
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
                  color: "rgba(242,237,232,0.55)",
                  margin: 0,
                }}
              >
                {body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Moodboard */}
        <motion.div
          ref={moodRef}
          initial={{ opacity: 0, y: 32 }}
          animate={moodInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
            Visual References
          </p>
          <h3
            style={{
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#f2ede8",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Moodboard and Visual References
          </h3>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.75,
              color: "rgba(242,237,232,0.55)",
              maxWidth: 600,
              marginBottom: 40,
            }}
          >
            The moodboard helped define the editorial tone of the site: structured, calm, readable,
            and publication-driven. I looked at newspaper layouts, fashion editorials, magazine-style
            grids, muted color systems, and expressive typography to shape a site that felt familiar
            but still distinct from the main SAGE app.
          </p>

          <img
            src="/sage-editorial/moodboard.png"
            alt="SAGE Editorial moodboard exploring newspaper layouts, sage colors, typography, and editorial references"
            loading="lazy"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
