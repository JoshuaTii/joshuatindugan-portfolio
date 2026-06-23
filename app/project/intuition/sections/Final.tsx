"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ClickableImage } from "@/app/components/ClickableImage";

const ACCENT = "var(--cs-accent-it)";
const EASE = [0.22, 1, 0.36, 1] as const;

const SCREEN_GROUPS = [
  {
    label: "Onboarding",
    desc: "Students create an account and build the profile that powers matching and reusable application data.",
    screens: [
      { src: "/intuition/final/Main.png",    alt: "Main dashboard" },
      { src: "/intuition/final/Login.png",   alt: "Login screen" },
      { src: "/intuition/final/sign-up.png", alt: "Sign up screen" },
    ],
  },
  {
    label: "Dashboard and Discover",
    desc: "The main hub. Students see matched scholarships, manage saved opportunities, explore the catalog, and track what is in progress.",
    screens: [
      { src: "/intuition/final/Main-1.png", alt: "Main, scholarships list" },
      { src: "/intuition/final/Main-2.png", alt: "Main, filtered view" },
      { src: "/intuition/final/Main-3.png", alt: "Main, detail panel" },
      { src: "/intuition/final/Main-4.png", alt: "Main, expanded view" },
      { src: "/intuition/final/Main-5.png", alt: "Main, scholarship detail" },
      { src: "/intuition/final/Main-6.png", alt: "Main, results" },
    ],
  },
  {
    label: "Profile and Application",
    desc: "Saved profile data pre-fills applications. Students review, edit, and submit without starting from scratch.",
    screens: [
      { src: "/intuition/final/sign-up-1.png",      alt: "Sign up, continued" },
      { src: "/intuition/final/Explore.png",         alt: "Explore scholarships" },
      { src: "/intuition/final/Inbox.png",           alt: "Inbox" },
      { src: "/intuition/final/Letter.png",          alt: "Letter template" },
      { src: "/intuition/final/Letter_Minimize.png", alt: "Letter minimized" },
    ],
  },
  {
    label: "Peer Support",
    desc: "Students connect with peers who have navigated the scholarship process. Community messaging and shared experience.",
    screens: [
      { src: "/intuition/final/Chat.png",   alt: "Chat" },
      { src: "/intuition/final/Chat-1.png", alt: "Chat, conversation" },
      { src: "/intuition/final/Chat-2.png", alt: "Chat, expanded" },
    ],
  },
];

const COLOR_SWATCHES = [
  { hex: "#504E76", label: "Muted Violet",  role: "Primary brand color" },
  { hex: "#CBCBE7", label: "Lavender",      role: "Secondary / surface" },
  { hex: "#FFBD36", label: "Amber Gold",    role: "Accent / highlight" },
  { hex: "#180727", label: "Deep Purple",   role: "Background / dark" },
];

function ScreenGroup({
  group,
  index,
}: {
  group: (typeof SCREEN_GROUPS)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: EASE }}
        style={{ marginBottom: 24 }}
      >
        <p
          style={{
            fontSize: "0.72rem",
            textTransform: "uppercase" as const,
            letterSpacing: "0.12em",
            color: ACCENT,
            fontWeight: 600,
            marginBottom: 6,
          }}
        >
          {String(index + 1).padStart(2, "0")}. {group.label}
        </p>
        <p style={{ fontSize: "0.88rem", lineHeight: 1.65, color: "var(--cs-text-muted)", maxWidth: 540 }}>
          {group.desc}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
        className="grid grid-cols-2"
        style={{ gap: 24 }}
      >
        {group.screens.map(({ src, alt }) => (
          <ClickableImage key={src} src={src} alt={alt} loading="lazy" />
        ))}
      </motion.div>
    </div>
  );
}

export function Final() {
  const heroRef   = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-80px" });

  const guideRef   = useRef(null);
  const guideInView = useInView(guideRef, { once: true, margin: "-80px" });

  return (
    <section id="final" style={{ scrollMarginTop: 80, paddingBlock: "120px 140px" }}>
      <div className="section-container">

        <motion.p
          ref={heroRef}
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          style={{
            fontSize: "0.75rem",
            fontWeight: 500,
            textTransform: "uppercase" as const,
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
          transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--cs-text)",
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
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          style={{
            fontSize: "1rem",
            lineHeight: 1.75,
            color: "var(--cs-text-muted)",
            maxWidth: 600,
            marginBottom: 80,
          }}
        >
          The final design brought the experience together as one complete scholarship platform.
          Instead of making students jump across websites, InTuition organizes discovery, matching,
          applying, tracking, and community in one place. The design became less about finding more
          scholarships and more about helping students know which opportunities matter and what to
          do next.
        </motion.p>

        {/* Screen groups */}
        <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
          {SCREEN_GROUPS.map((group, gi) => (
            <ScreenGroup key={group.label} group={group} index={gi} />
          ))}
        </div>

        {/* Interactive Prototype */}
        <div
          style={{
            marginTop: 100,
            paddingTop: 72,
            borderTop: "1px solid var(--cs-border)",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 500,
              textTransform: "uppercase" as const,
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
              color: "var(--cs-text)",
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
              color: "var(--cs-text-muted)",
              maxWidth: 540,
              marginBottom: 36,
            }}
          >
            Walk through the scholarship discovery and application flow.
          </p>

          <div
            style={{
              borderRadius: 20,
              overflow: "hidden",
              border: "1px solid var(--cs-border)",
              backgroundColor: "var(--cs-surface)",
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
        </div>

        {/* Visual Guidelines */}
        <motion.div
          ref={guideRef}
          initial={{ opacity: 0, y: 32 }}
          animate={guideInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
          style={{
            marginTop: 120,
            paddingTop: 80,
            borderTop: "1px solid var(--cs-border)",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 500,
              textTransform: "uppercase" as const,
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
              color: "var(--cs-text)",
              lineHeight: 1.1,
              marginBottom: 56,
            }}
          >
            InTuition design language.
          </h2>

          <div className="grid md:grid-cols-2" style={{ gap: "48px 80px" }}>
            <div>
              <p style={{ fontSize: "0.75rem", textTransform: "uppercase" as const, letterSpacing: "0.1em", color: "var(--cs-text-faint)", marginBottom: 24 }}>
                Typography
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ padding: "24px 28px", borderRadius: 16, border: "1px solid var(--cs-border)", backgroundColor: "var(--cs-surface)" }}>
                  <p style={{ fontSize: "0.7rem", textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "var(--cs-text-faint)", marginBottom: 12 }}>Header, Arima Medium</p>
                  <p style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "2.8rem", fontWeight: 500, color: "var(--cs-text)", lineHeight: 1.05, letterSpacing: "-0.01em" }}>Header</p>
                  <p style={{ fontSize: "0.8rem", color: "var(--cs-text-faint)", marginTop: 10 }}>Arima-Medium · used for primary headings and display text</p>
                </div>
                <div style={{ padding: "24px 28px", borderRadius: 16, border: "1px solid var(--cs-border)", backgroundColor: "var(--cs-surface)" }}>
                  <p style={{ fontSize: "0.7rem", textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "var(--cs-text-faint)", marginBottom: 12 }}>Subheader, Arima Regular</p>
                  <p style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "1.75rem", fontWeight: 400, color: "var(--cs-text)", lineHeight: 1.2 }}>Subheader</p>
                  <p style={{ fontSize: "0.8rem", color: "var(--cs-text-faint)", marginTop: 10 }}>Arima-regular · used for section subheadings and navigation</p>
                </div>
                <div style={{ padding: "24px 28px", borderRadius: 16, border: "1px solid var(--cs-border)", backgroundColor: "var(--cs-surface)" }}>
                  <p style={{ fontSize: "0.7rem", textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "var(--cs-text-faint)", marginBottom: 12 }}>Body, Albert Sans</p>
                  <p style={{ fontFamily: "system-ui, -apple-system, sans-serif", fontSize: "1rem", fontWeight: 400, color: "var(--cs-text-muted)", lineHeight: 1.7 }}>
                    Body · Albert Sans
                    <br />
                    Applied to paragraph text, labels, and UI copy throughout the platform.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p style={{ fontSize: "0.75rem", textTransform: "uppercase" as const, letterSpacing: "0.1em", color: "var(--cs-text-faint)", marginBottom: 24 }}>
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
                      border: "1px solid var(--cs-border)",
                      backgroundColor: "var(--cs-surface)",
                    }}
                  >
                    <div style={{ width: 48, height: 48, borderRadius: 10, backgroundColor: hex, flexShrink: 0, border: "1px solid var(--cs-border)" }} />
                    <div>
                      <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--cs-text)" }}>{label}</p>
                      <p style={{ fontSize: "0.75rem", color: "var(--cs-text-faint)" }}>{hex} · {role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
