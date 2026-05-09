"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const ACCENT = "#f59e0b";

const GALLERY_SCREENS = [
  { src: "/intuition/final/Login.png",      alt: "Login screen" },
  { src: "/intuition/final/sign-up.png",    alt: "Sign up screen" },
  { src: "/intuition/final/Main.png",       alt: "Main dashboard" },
  { src: "/intuition/final/Main-1.png",     alt: "Main — scholarships list" },
  { src: "/intuition/final/Main-2.png",     alt: "Main — filtered view" },
  { src: "/intuition/final/Main-3.png",     alt: "Main — detail panel" },
  { src: "/intuition/final/Explore.png",    alt: "Explore scholarships" },
  { src: "/intuition/final/Inbox.png",      alt: "Inbox" },
  { src: "/intuition/final/Chat.png",       alt: "Chat" },
  { src: "/intuition/final/Letter.png",     alt: "Letter template" },
  { src: "/intuition/final/Chat-1.png",     alt: "Chat — conversation" },
  { src: "/intuition/final/Letter-1.png",   alt: "Letter — variation" },
];

const COLOR_SWATCHES = [
  { hex: "#F59E0B", label: "Amber",        role: "Primary accent" },
  { hex: "#1C1917", label: "Stone 900",    role: "Background" },
  { hex: "#FFFFFF", label: "White",        role: "Surface / text" },
  { hex: "#78716C", label: "Stone 500",    role: "Secondary text" },
];

export function Final() {
  const heroRef   = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-80px" });

  const galleryRef   = useRef(null);
  const galleryInView = useInView(galleryRef, { once: true, margin: "-80px" });

  const guideRef   = useRef(null);
  const guideInView = useInView(guideRef, { once: true, margin: "-80px" });

  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>("");

  const openLightbox = (src: string, alt: string) => {
    setLightboxSrc(src);
    setLightboxAlt(alt);
  };

  return (
    <section id="final" style={{ scrollMarginTop: 80, paddingBlock: "120px 140px" }}>
      <div className="section-container">
        {/* ── Section header */}
        <motion.p
          ref={heroRef}
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#f2ede8",
            lineHeight: 1.1,
            marginBottom: 16,
            maxWidth: 680,
          }}
        >
          A unified platform that puts
          <br className="hidden md:block" />
          students in control of their funding.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "1rem",
            lineHeight: 1.75,
            color: "rgba(242,237,232,0.5)",
            maxWidth: 600,
            marginBottom: 64,
          }}
        >
          The finished design connects every part of the scholarship journey — discovery, application,
          tracking, and community — into a single, cohesive experience.
        </motion.p>

        {/* ── Hero mockup */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => openLightbox("/intuition/mockup.png", "InTuition final mockup")}
          style={{
            borderRadius: 20,
            overflow: "hidden",
            cursor: "zoom-in",
            marginBottom: 80,
          }}
        >
          <img
            src="/intuition/mockup.png"
            alt="InTuition final design mockup"
            style={{ width: "100%", display: "block", maxHeight: 720, objectFit: "contain" }}
          />
        </motion.div>

        {/* ── Final screen gallery */}
        <div ref={galleryRef}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgba(242,237,232,0.35)",
              marginBottom: 20,
            }}
          >
            All Screens
          </motion.p>

          <div
            className="grid grid-cols-2 md:grid-cols-3"
            style={{ columnGap: 40, rowGap: 52 }}
          >
            {GALLERY_SCREENS.map(({ src, alt }, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 20 }}
                animate={galleryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => openLightbox(src, alt)}
                style={{ cursor: "zoom-in" }}
              >
                <img
                  src={src}
                  alt={alt}
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    display: "block",
                    maxHeight: 420,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Visual Guidelines */}
        <motion.div
          ref={guideRef}
          initial={{ opacity: 0, y: 32 }}
          animate={guideInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            marginTop: 120,
            paddingTop: 80,
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
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
            Visual Guidelines
          </p>

          <h2
            style={{
              fontSize: "clamp(1.5rem, 2.8vw, 2rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#f2ede8",
              lineHeight: 1.1,
              marginBottom: 56,
            }}
          >
            Design language.
          </h2>

          <div className="grid md:grid-cols-2" style={{ gap: "48px 80px" }}>
            {/* Typography */}
            <div>
              <p
                style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "rgba(242,237,232,0.3)",
                  marginBottom: 24,
                }}
              >
                Typography
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <div
                  style={{
                    padding: "24px 28px",
                    borderRadius: 16,
                    border: "1px solid rgba(255,255,255,0.06)",
                    backgroundColor: "#111113",
                  }}
                >
                  <p style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(242,237,232,0.3)", marginBottom: 12 }}>
                    Primary — Inter
                  </p>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "2rem", fontWeight: 700, color: "#f2ede8", lineHeight: 1.1 }}>
                    InTuition
                  </p>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", color: "rgba(242,237,232,0.5)", marginTop: 8, lineHeight: 1.6 }}>
                    Regular — applied to body text, labels, and UI copy
                  </p>
                </div>

                <div
                  style={{
                    padding: "24px 28px",
                    borderRadius: 16,
                    border: "1px solid rgba(255,255,255,0.06)",
                    backgroundColor: "#111113",
                  }}
                >
                  <p style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(242,237,232,0.3)", marginBottom: 12 }}>
                    Display — Inter Bold
                  </p>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "#f2ede8", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
                    Scholarship Discovery,
                    <br />
                    Simplified.
                  </p>
                </div>
              </div>
            </div>

            {/* Color palette */}
            <div>
              <p
                style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "rgba(242,237,232,0.3)",
                  marginBottom: 24,
                }}
              >
                Color Palette
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {COLOR_SWATCHES.map(({ hex, label, role }) => (
                  <div
                    key={hex}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      padding: "16px 20px",
                      borderRadius: 14,
                      border: "1px solid rgba(255,255,255,0.06)",
                      backgroundColor: "#111113",
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 10,
                        backgroundColor: hex,
                        flexShrink: 0,
                        border: hex === "#FFFFFF" ? "1px solid rgba(255,255,255,0.1)" : "none",
                      }}
                    />
                    <div>
                      <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#f2ede8" }}>{label}</p>
                      <p style={{ fontSize: "0.75rem", color: "rgba(242,237,232,0.4)" }}>
                        {hex} · {role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          onClick={() => setLightboxSrc(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            backgroundColor: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            cursor: "zoom-out",
          }}
        >
          <img
            src={lightboxSrc}
            alt={lightboxAlt}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: 12,
            }}
          />
        </div>
      )}
    </section>
  );
}
