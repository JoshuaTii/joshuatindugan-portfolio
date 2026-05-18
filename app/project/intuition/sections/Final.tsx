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

      loading="lazy"
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
            marginBottom: 32,
          }}
        >
          The final design brought the experience together as one complete scholarship platform.
          Instead of making students jump across websites, InTuition organizes discovery, matching,
          applying, tracking, and community in one place. The design became less about finding more
          scholarships and more about helping students know which opportunities matter and what to
          do next.
        </motion.p>

        {/* Design choice cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 12, marginBottom: 64 }}
        >
          {[
            "Used a soft purple and lavender palette to make the experience feel academic, calm, and approachable.",
            "Added amber gold as an accent to highlight important actions and moments of opportunity.",
            "Used Albert Sans for body text so scholarship information stayed readable and practical.",
            "Organized scholarships around smart filters like deadline, award amount, eligibility, major, year level, and required materials.",
            "Made the reusable student profile a core feature to reduce repetitive form-filling.",
            "Added tracking features so saved, in-progress, submitted, and upcoming applications stay in one place.",
            "Kept peer/community features connected to confidence and social proof, not just social networking.",
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
                borderLeft: "2px solid rgba(245,158,11,0.4)",
              }}
            >
              {card}
            </div>
          ))}
        </motion.div>

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

          loading="lazy"
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
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FZFpuwcRXS8LhFZibl83SUQ%2FInTuition-2.0%3Fnode-id%3D1-233%26viewport%3D609%252C263%252C0.12%26t%3DOzFutJdTgII3wVm2-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D1%253A233%26page-id%3D0%253A1"
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
            href="https://www.figma.com/proto/ZFpuwcRXS8LhFZibl83SUQ/InTuition-2.0?node-id=1-233&viewport=609%2C263%2C0.12&t=OzFutJdTgII3wVm2-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A233&page-id=0%3A1"
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
                    Header, Arima Medium
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
                    Subheader, Arima Regular
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
                    Body, Albert Sans
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
              The scholarship search is not a feature problem. It is a cognitive load problem.
              Students already have access to scholarships. What they do not have is a way to
              filter, track, and act on that information without it consuming time they cannot
              spare. That framing kept the design focused on structure and clarity rather than
              adding more discovery surfaces.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(242,237,232,0.6)" }}>
              The biggest design lesson was that students do not simply need more information. They
              need information structured in a way that helps them act. Working collaboratively also
              meant learning to defend design decisions in critique: articulating not just what we
              built, but why a specific structural choice serves the user's actual moment of need.
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

          loading="lazy"
          />
        </div>
      )}
    </section>
  );
}
