"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function PhotoHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(251,113,133,0.06) 0%, transparent 65%)",
        }}
      />

      {/* Back nav */}
      <div
        className="section-container"
        style={{ paddingTop: 40, position: "absolute", top: 0, left: 0, right: 0 }}
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

      <div className="section-container" style={{ paddingBlock: "140px 100px" }}>
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
              color: "#fb7185",
              marginBottom: 24,
            }}
          >
            Photography
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
            Freezing Time Through
            <br />
            Light, Form, and Perspective
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
              marginBottom: 32,
              maxWidth: 680,
            }}
          >
            A visual study of architecture, patterns, color, composition, and the quiet moments
            that often go unnoticed.
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
            Photography allows me to slow down and hold onto moments before they disappear.
            My work focuses on the beauty of architecture, the rhythm of patterns, the drama
            of angles, and the emotion created through color and composition. Through framing
            and perspective, I aim to capture ordinary scenes with more stillness, intention,
            and care.
          </motion.p>

          {/* Camera tag */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 16px",
                borderRadius: 100,
                border: "1px solid rgba(251,113,133,0.2)",
                backgroundColor: "rgba(251,113,133,0.05)",
                fontSize: "0.75rem",
                color: "rgba(251,113,133,0.8)",
                letterSpacing: "0.04em",
              }}
            >
              <span style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "#fb7185", display: "inline-block", flexShrink: 0 }} />
              Shot on Canon EOS R50 · RF-S 18-45mm F4.5-6.3 IS STM Lens
            </span>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: 120,
          background: "linear-gradient(to bottom, transparent, #09090b)",
        }}
      />
    </section>
  );
}
