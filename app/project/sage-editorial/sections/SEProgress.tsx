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
            Lo-fi Sketches and Layout Exploration
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(242,237,232,0.6)",
              maxWidth: 640,
            }}
          >
            For SAGE Editorial, the lo-fi stage is less about app functionality and more about
            building a reading system. Since this project extends SAGE into stories, updates, and
            community context, the early sketches needed to answer a different question: not
            "what can users do here?" but "how should people move through information in a way
            that feels trustworthy, local, and easy to read?" The goal was to shape a publication
            experience that could carry serious topics like financial access, community resources,
            and Ward 7 and Ward 8 stories without feeling like a corporate resource page.
          </p>
        </motion.div>

        {/* Lo-fi Sketches subsection */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 40 }}
        >
          <p
            style={{
              fontSize: "0.72rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "rgba(74,222,128,0.7)",
              marginBottom: 12,
            }}
          >
            Lo-fi Sketches
          </p>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.75,
              color: "rgba(242,237,232,0.55)",
              maxWidth: 600,
              marginBottom: 24,
            }}
          >
            At this stage, I focused on creating the structure of the editorial site before making
            visual decisions. I treated the page like a publication system, not a landing page.
            That meant thinking about rhythm, section order, article hierarchy, and how different
            types of content could sit together without overwhelming the reader.
          </p>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            style={{ gap: 12 }}
          >
            {[
              "Explored newspaper and magazine-inspired layouts to make the site feel familiar and readable.",
              "Used early grids to test how headlines, article cards, feature stories, and resource sections could work together.",
              "Prioritized reading flow so the page could move from big-picture context into more specific community stories and updates.",
              "Treated spacing as a trust-building tool, giving serious content enough room to breathe instead of feeling dense or promotional.",
              "Designed the hierarchy around scanning first, then deeper reading, because users may not read every article immediately.",
              "Considered how the editorial site could feel connected to SAGE without copying the app interface directly.",
              "Focused on making financial access feel human through structure, not just through visuals or copy.",
              "Used the lo-fi phase to test whether the site felt like a real publication with a point of view, rather than a collection of disconnected content blocks.",
            ].map((card, i) => (
              <div
                key={i}
                style={{
                  padding: "18px 20px",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.07)",
                  backgroundColor: "#111113",
                  fontSize: "0.88rem",
                  lineHeight: 1.65,
                  color: "rgba(242,237,232,0.6)",
                  borderLeft: "2px solid rgba(74,222,128,0.35)",
                }}
              >
                {card}
              </div>
            ))}
          </div>
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

        {/* Final validation note */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={embedInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            padding: "32px 36px",
            borderRadius: 20,
            border: "1px solid rgba(74,222,128,0.1)",
            backgroundColor: "rgba(74,222,128,0.03)",
            maxWidth: 720,
          }}
        >
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "rgba(74,222,128,0.6)",
              marginBottom: 14,
            }}
          >
            What this phase validated
          </p>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.75,
              color: "rgba(242,237,232,0.6)",
            }}
          >
            The main validation for this phase is that the sketches gave the project an editorial
            backbone. They helped define how SAGE could expand beyond a financial tool and become
            a storytelling platform. Before color, typography, or polished mockups, the structure
            needed to prove that the content could feel organized, credible, and community-centered.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
