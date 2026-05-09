"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const ACCENT = "#f59e0b";

const GALLERY_SCREENS = [
  { src: "/intuition/final/Login.png",    alt: "Login screen" },
  { src: "/intuition/final/sign-up.png",  alt: "Sign up screen" },
  { src: "/intuition/final/Main.png",     alt: "Main dashboard" },
  { src: "/intuition/final/Main-1.png",   alt: "Main — scholarships list" },
  { src: "/intuition/final/Main-2.png",   alt: "Main — filtered view" },
  { src: "/intuition/final/Main-3.png",   alt: "Main — detail panel" },
  { src: "/intuition/final/Explore.png",  alt: "Explore scholarships" },
  { src: "/intuition/final/Inbox.png",    alt: "Inbox" },
  { src: "/intuition/final/Chat.png",     alt: "Chat" },
  { src: "/intuition/final/Letter.png",   alt: "Letter template" },
  { src: "/intuition/final/Chat-1.png",   alt: "Chat — conversation" },
  { src: "/intuition/final/Letter-1.png", alt: "Letter — variation" },
];

// Real InTuition brand colors from visual guideline
const COLOR_SWATCHES = [
  { hex: "#504E76", label: "Muted Violet",  role: "Primary brand color" },
  { hex: "#CBCBE7", label: "Lavender",      role: "Secondary / surface" },
  { hex: "#FFBD36", label: "Amber Gold",    role: "Accent / highlight" },
  { hex: "#180727", label: "Deep Purple",   role: "Background / dark" },
];

const NEXT_STEPS = [
  "Test the platform with junior and senior high school first-generation students",
  "Study how early college-planning students compare scholarship opportunities",
  "Refine filters around eligibility, deadline, award amount, and education level",
  "Improve guidance for students applying for scholarships for the first time",
  "Expand support content around essays, deadlines, and financial aid preparation",
];

function HoverScreen({ src, alt, onClick }: { src: string; alt: string; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: "zoom-in",
        overflow: "hidden",
        borderRadius: 10,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          objectFit: "contain",
          display: "block",
          maxHeight: 420,
          transform: hovered ? "scale(1.03)" : "scale(1)",
          boxShadow: hovered
            ? "0 16px 40px rgba(0,0,0,0.4)"
            : "0 4px 12px rgba(0,0,0,0.2)",
          transition: "transform 250ms ease, box-shadow 250ms ease",
          borderRadius: 10,
        }}
      />
    </div>
  );
}

export function Final() {
  const heroRef    = useRef(null);
  const heroInView  = useInView(heroRef, { once: true, margin: "-80px" });

  const galleryRef    = useRef(null);
  const galleryInView  = useInView(galleryRef, { once: true, margin: "-80px" });

  const guideRef    = useRef(null);
  const guideInView  = useInView(guideRef, { once: true, margin: "-80px" });

  const reflectRef    = useRef(null);
  const reflectInView  = useInView(reflectRef, { once: true, margin: "-80px" });

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
          onClick={() => openLightbox("/intuition/mockup.png", "InTuition final design mockup")}
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

        {/* ── Final screen gallery with hover */}
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
              >
                <HoverScreen src={src} alt={alt} onClick={() => openLightbox(src, alt)} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Interactive Prototype */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={galleryInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            marginTop: 100,
            paddingTop: 72,
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
            Interactive Prototype
          </p>
          <h3
            style={{
              fontSize: "clamp(1.5rem, 2.8vw, 2rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#f2ede8",
              lineHeight: 1.1,
              marginBottom: 12,
            }}
          >
            Explore the InTuition experience.
          </h3>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "rgba(242,237,232,0.5)",
              maxWidth: 540,
              marginBottom: 36,
            }}
          >
            Walk through the scholarship discovery and application flow.
          </p>

          {/* Figma embed */}
          <div
            style={{
              borderRadius: 20,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.06)",
              backgroundColor: "#111113",
              position: "relative",
            }}
          >
            <iframe
              title="InTuition interactive prototype"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FZFpuwcRXS8LhFZibl83SUQ%2FInTuition-2.0%3Fnode-id%3D0-1%26t%3D16yinqAVTONmoLcL-1"
              loading="lazy"
              allowFullScreen
              style={{
                width: "100%",
                height: "clamp(480px, 60vw, 720px)",
                border: "none",
                display: "block",
              }}
            />
          </div>

          <a
            href="https://www.figma.com/design/ZFpuwcRXS8LhFZibl83SUQ/InTuition-2.0?node-id=0-1&t=16yinqAVTONmoLcL-1"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginTop: 20,
              fontSize: "0.85rem",
              color: ACCENT,
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "opacity 200ms ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            Open prototype in Figma ↗
          </a>
        </motion.div>

        {/* ── Visual Guidelines — InTuition brand */}
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
            InTuition design language.
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

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {/* Arima Medium — headings */}
                <div
                  style={{
                    padding: "24px 28px",
                    borderRadius: 16,
                    border: "1px solid rgba(255,255,255,0.06)",
                    backgroundColor: "#111113",
                  }}
                >
                  <p style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(242,237,232,0.3)", marginBottom: 12 }}>
                    Header — Arima Medium
                  </p>
                  <p
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: "2.8rem",
                      fontWeight: 500,
                      color: "#f2ede8",
                      lineHeight: 1.05,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Header
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "rgba(242,237,232,0.35)", marginTop: 10 }}>
                    Arima-Medium · used for primary headings and display text
                  </p>
                </div>

                {/* Arima Regular — subheadings */}
                <div
                  style={{
                    padding: "24px 28px",
                    borderRadius: 16,
                    border: "1px solid rgba(255,255,255,0.06)",
                    backgroundColor: "#111113",
                  }}
                >
                  <p style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(242,237,232,0.3)", marginBottom: 12 }}>
                    Subheader — Arima Regular
                  </p>
                  <p
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: "1.75rem",
                      fontWeight: 400,
                      color: "#f2ede8",
                      lineHeight: 1.2,
                    }}
                  >
                    Subheader
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "rgba(242,237,232,0.35)", marginTop: 10 }}>
                    Arima-regular · used for section subheadings and navigation
                  </p>
                </div>

                {/* Albert Sans — body */}
                <div
                  style={{
                    padding: "24px 28px",
                    borderRadius: 16,
                    border: "1px solid rgba(255,255,255,0.06)",
                    backgroundColor: "#111113",
                  }}
                >
                  <p style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(242,237,232,0.3)", marginBottom: 12 }}>
                    Body — Albert Sans
                  </p>
                  <p
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      fontSize: "1rem",
                      fontWeight: 400,
                      color: "rgba(242,237,232,0.65)",
                      lineHeight: 1.7,
                    }}
                  >
                    Body · Albert Sans
                    <br />
                    Applied to paragraph text, labels, and UI copy throughout the platform.
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
                        width: 48,
                        height: 48,
                        borderRadius: 10,
                        backgroundColor: hex,
                        flexShrink: 0,
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    />
                    <div>
                      <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#f2ede8" }}>{label}</p>
                      <p style={{ fontSize: "0.75rem", color: "rgba(242,237,232,0.4)" }}>
                        #{hex.replace("#", "")} · {role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Reflections */}
        <motion.div
          ref={reflectRef}
          initial={{ opacity: 0, y: 32 }}
          animate={reflectInView ? { opacity: 1, y: 0 } : {}}
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
            Reflections
          </p>

          <h2
            style={{
              fontSize: "clamp(1.5rem, 2.8vw, 2rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#f2ede8",
              lineHeight: 1.1,
              marginBottom: 48,
            }}
          >
            What I learned.
          </h2>

          <div className="grid md:grid-cols-2" style={{ gap: "28px 80px" }}>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(242,237,232,0.6)" }}>
              This project helped me think more deeply about how design can reduce barriers in
              education access. A scholarship platform cannot solve the cost of higher education by
              itself, but it can make the process of finding support feel less scattered, less
              confusing, and less discouraging.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(242,237,232,0.6)" }}>
              The biggest design lesson was that students do not simply need more information. They
              need information structured in a way that helps them act. Through InTuition, I focused
              on creating a platform experience that feels clear, supportive, and useful at each
              stage of the scholarship journey.
            </p>
          </div>
        </motion.div>

        {/* ── Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={reflectInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{
            marginTop: 80,
            paddingTop: 64,
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
            Next Steps
          </p>

          <h2
            style={{
              fontSize: "clamp(1.5rem, 2.8vw, 2rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#f2ede8",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            If I continued.
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "rgba(242,237,232,0.5)",
              maxWidth: 640,
              marginBottom: 40,
            }}
          >
            If I continued developing InTuition, I would expand testing beyond college students
            and focus more directly on junior and senior high school first-generation students
            preparing to fund their higher education. This next phase would help me understand how
            students earlier in the college-planning process search for scholarships, what language
            or filters feel most useful to them, and where they need the most guidance before applying.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {NEXT_STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={reflectInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                  padding: "18px 24px",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.06)",
                  backgroundColor: "#111113",
                }}
              >
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    color: ACCENT,
                    letterSpacing: "0.06em",
                    minWidth: 24,
                    paddingTop: 2,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "rgba(242,237,232,0.65)" }}>
                  {step}
                </p>
              </motion.div>
            ))}
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
