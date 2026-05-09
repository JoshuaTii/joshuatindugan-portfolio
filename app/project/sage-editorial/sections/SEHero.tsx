"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const ACCENT = "#4ade80";

const TAGS = ["UI/UX", "Editorial Design", "Visual System", "Content Strategy"];

const META = [
  { label: "Role",         value: "UI/UX Designer" },
  { label: "Project Type", value: "Editorial Website" },
  { label: "Timeline",     value: "Spring 2026" },
  { label: "Tools",        value: "Figma · Illustrator · Photoshop" },
  { label: "Deliverables", value: "Hi-Fi Editorial Prototype" },
];

export function SEHero() {
  return (
    <section
      id="overview"
      className="relative overflow-hidden"
      style={{ scrollMarginTop: 68 }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 20% 40%, rgba(74,222,128,0.05) 0%, transparent 65%)",
        }}
      />

      {/* Back nav */}
      <div
        className="section-container"
        style={{ paddingTop: 40, position: "absolute", top: 0, left: 0, right: 0, zIndex: 10 }}
      >
        <Link
          href="/#work"
          className="flex items-center gap-1.5"
          style={{
            textDecoration: "none",
            color: "rgba(242,237,232,0.35)",
            fontSize: "0.75rem",
            letterSpacing: "0.06em",
            transition: "color 250ms ease",
            width: "fit-content",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#f2ede8")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(242,237,232,0.35)")}
        >
          <ArrowLeft size={13} />
          Portfolio
        </Link>
      </div>

      <div className="section-container" style={{ paddingBlock: "140px 80px" }}>
        <div style={{ maxWidth: 820 }}>
          {/* Kicker */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: "0.75rem",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              color: ACCENT,
              marginBottom: 24,
            }}
          >
            Editorial Design · SAGE Extension
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              lineHeight: 1.02,
              color: "#f2ede8",
              marginBottom: 28,
            }}
          >
            SAGE Editorial
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              fontWeight: 400,
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontStyle: "italic",
              color: "rgba(242,237,232,0.55)",
              lineHeight: 1.5,
              marginBottom: 24,
              maxWidth: 680,
            }}
          >
            An editorial website extending SAGE into stories, updates, and lived experiences from
            Washington, D.C.'s Ward 7 and Ward 8 communities.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(242,237,232,0.5)",
              maxWidth: 580,
              marginBottom: 48,
            }}
          >
            SAGE Editorial expands my thesis project into a content-driven platform that explores
            the everyday realities, overlooked stories, and community context surrounding financial
            access in D.C. Rather than presenting SAGE only as a product, this editorial extension
            creates space for narrative, local updates, cultural texture, and community-centered
            storytelling.
          </motion.p>

          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap"
            style={{ gap: "16px 40px", marginBottom: 40 }}
          >
            {META.map(({ label, value }) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <span
                  style={{
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "rgba(242,237,232,0.35)",
                  }}
                >
                  {label}
                </span>
                <span style={{ fontSize: "0.88rem", color: "rgba(242,237,232,0.8)", fontWeight: 500 }}>
                  {value}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap"
            style={{ gap: 10 }}
          >
            {TAGS.map((tag) => (
              <span
                key={tag}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "7px 14px",
                  borderRadius: 100,
                  border: `1px solid rgba(74,222,128,0.18)`,
                  backgroundColor: `rgba(74,222,128,0.05)`,
                  fontSize: "0.75rem",
                  color: `rgba(74,222,128,0.75)`,
                  letterSpacing: "0.04em",
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="section-container"
        style={{ paddingBottom: 120 }}
      >
        <div
          style={{
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <img
            src="/sage-editorial/head-image.png"
            alt="SAGE Editorial website mockup hero image"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
