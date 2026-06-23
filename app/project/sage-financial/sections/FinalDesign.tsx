"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ClickableImage } from "@/app/components/ClickableImage";

const EASE = [0.22, 1, 0.36, 1] as const;

const SCREEN_GROUPS = [
  {
    id: "dashboard",
    label: "Cross Section / Dashboard",
    kicker: "Home",
    callouts: [
      {
        title: "Personalized Financial Snapshot",
        desc: "The dashboard shows what matters most right now: payments, goals, lessons, and nearby support. This gives users a clear starting point without making them search through the whole app.",
      },
      {
        title: "Resource Recommendations",
        desc: "Local resources are brought directly into the home screen. This makes support feel easier to find and less hidden.",
      },
      {
        title: "Goal Tracking",
        desc: "Goals are broken into smaller steps so users can see progress over time. This helps big financial goals feel more manageable.",
      },
      {
        title: "Learning Progress",
        desc: "Lesson progress is visible on the dashboard to remind users of what they have already started. It encourages users to keep learning without feeling pressured.",
      },
      {
        title: "Clear Next Actions",
        desc: "Each card gives users a clear action (view, resume, or pay). This helps reduce confusion and makes the next step easier to take.",
      },
    ],
    screens: [
      { src: "/sage/de-final-1.png", alt: "Dashboard screen 1" },
      { src: "/sage/de-final-2.png", alt: "Dashboard screen 2" },
      { src: "/sage/de-final-3.png", alt: "Dashboard screen 3" },
      { src: "/sage/de-final-4.png", alt: "Dashboard screen 4" },
    ],
  },
  {
    id: "community",
    label: "Community Hub",
    kicker: "Sage",
    callouts: [
      {
        title: "Support Built Around Location",
        desc: "The map focuses on nearby help instead of generic resources. This makes support feel more real and reachable.",
      },
      {
        title: "Quick Help Categories",
        desc: "Common needs like debt, food, and rent are shown as quick-access categories. Users can find help faster without typing long searches.",
      },
      {
        title: "Local Resource Discovery",
        desc: "Nearby help centers are shown clearly on the map. This helps users understand what support exists around them.",
      },
      {
        title: "Community-Focused Guidance",
        desc: "SAGE connects users to organizations and workshops, not just app features. This makes the product feel more human and community-based.",
      },
      {
        title: "Actionable Financial Tips",
        desc: "Short tips give users small pieces of guidance at the right moment. They keep the tone supportive without overwhelming the user.",
      },
    ],
    screens: [
      { src: "/sage/feat1-1.png", alt: "Community Hub screen 1" },
      { src: "/sage/feat1-2.png", alt: "Community Hub screen 2" },
      { src: "/sage/feat1-3.png", alt: "Community Hub screen 3" },
      { src: "/sage/feat1-4.png", alt: "Community Hub screen 4" },
    ],
  },
  {
    id: "learn",
    label: "Financial Lessons",
    kicker: "Learn",
    callouts: [
      {
        title: "Personalized Learning Paths",
        desc: "Lessons are grouped around real financial needs like credit, saving, and money management. This helps users find content that feels useful to their situation.",
      },
      {
        title: "Bite-Sized Content",
        desc: "Financial topics are broken into smaller lessons instead of long explanations. This makes learning feel less overwhelming.",
      },
      {
        title: "Progress Visibility",
        desc: "Progress bars show users how much they have completed. Small signs of progress can help users feel motivated to continue.",
      },
      {
        title: "Workshops and Community Learning",
        desc: "The Learn section also connects users to workshops, not just app lessons. This keeps financial learning tied to real people and local support.",
      },
      {
        title: "Recommended Lessons",
        desc: "Suggested lessons help users know where to start next. This makes the experience feel guided instead of leaving users to figure everything out alone.",
      },
    ],
    screens: [
      { src: "/sage/feat2-1.png", alt: "Lessons screen 1" },
      { src: "/sage/feat2-2.png", alt: "Lessons screen 2" },
      { src: "/sage/feat2-3.png", alt: "Lessons screen 3" },
    ],
  },
  {
    id: "loan",
    label: "Microloan",
    kicker: "Loan",
    callouts: [
      {
        title: "Transparent Loan Information",
        desc: "The loan screen clearly shows the payment amount, due date, and remaining balance. This helps users understand where they stand before making a payment.",
      },
      {
        title: "Progress Tracking",
        desc: "The repayment progress is shown in a simple, visual way. Users can quickly see how much they have paid and what is still left.",
      },
      {
        title: "Payment Reminders",
        desc: "Upcoming due dates are placed in a clear card so they are hard to miss. This supports better planning and helps reduce missed payments.",
      },
      {
        title: "Simplified Payment Flow",
        desc: "Payment options are easy to access and not buried behind extra steps. This makes repayment feel more straightforward and less stressful.",
      },
      {
        title: "Positive Reinforcement",
        desc: "Messages like \"You're on track\" help the experience feel supportive. The goal is to encourage users instead of making money management feel scary.",
      },
    ],
    screens: [
      { src: "/sage/feat3-1.png", alt: "Microloan screen 1" },
      { src: "/sage/feat3-2.png", alt: "Microloan screen 2" },
      { src: "/sage/feat3-3.png", alt: "Microloan screen 3" },
      { src: "/sage/feat3-4.png", alt: "Microloan screen 4" },
      { src: "/sage/feat3-5.png", alt: "Microloan screen 5" },
    ],
  },
];

const COLOR_SWATCHES = [
  { name: "White", hex: "#FFFFFF", desc: "Primary text: clean contrast for maximum readability." },
  { name: "Lime Green", hex: "#9BE931", desc: "Primary accent: energy, growth, and financial empowerment." },
  { name: "Light Lime", hex: "#D1FEAE", desc: "Secondary tint: soft highlights and background accent states." },
  { name: "Dark Navy", hex: "#011521", desc: "Primary background: grounded depth that anchors trust." },
  { name: "Navy", hex: "#10203D", desc: "Surface background: card and panel elevation." },
];

export function FinalDesign() {
  const ref = useRef(null);
  const protoRef = useRef(null);
  const nextFestRef = useRef(null);
  const guidelinesRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const protoInView = useInView(protoRef, { once: true, margin: "-80px" });
  const nextFestInView = useInView(nextFestRef, { once: true, margin: "-80px" });
  const guidelinesInView = useInView(guidelinesRef, { once: true, margin: "-80px" });
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [videoStarted, setVideoStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openLightbox = useCallback((img: { src: string; alt: string }) => {
    setLightbox(img);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeLightbox(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, closeLightbox]);

  useEffect(() => () => { document.body.style.overflow = ""; }, []);

  return (
    <section
      className="!pt-[80px] !pb-[80px]"
      style={{ backgroundColor: "var(--cs-bg-secondary)" }}
    >
      <div className="section-container">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ marginBottom: 80, textAlign: "center" as const }}
        >
          <p className="kicker">Final Screens</p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--cs-text)",
              marginBottom: 16,
            }}
          >
            The finished product.
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "var(--cs-text-muted)",
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            Every screen designed to feel trustworthy, accessible, and built for the people
            it serves. Organized by user flow.
          </p>
        </motion.div>

        {/* Screen groups */}
        {SCREEN_GROUPS.map((group, gi) => (
          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 + gi * 0.08, ease: EASE }}
            style={{
              marginBottom: gi < SCREEN_GROUPS.length - 1 ? 96 : 0,
            }}
          >
            {/* Group label */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 32,
              }}
            >
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.12em",
                  color: "var(--cs-accent-sf)",
                  padding: "4px 12px",
                  borderRadius: 999,
                  border: "1px solid var(--cs-accent-sf)",
                  backgroundColor: "var(--accent-interactive-bg)",
                }}
              >
                {group.kicker}
              </span>
              <h3
                style={{
                  fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                  fontWeight: 600,
                  color: "var(--cs-text)",
                  letterSpacing: "-0.01em",
                }}
              >
                {group.label}
              </h3>
            </div>

            {/* Screens row */}
            <div
              className="grid grid-cols-2 md:grid-cols-4"
              style={{
                gap: 16,
                marginBottom: 32,
              }}
            >
              {group.screens.map((screen, si) => (
                <motion.div
                  key={screen.src}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + gi * 0.06 + si * 0.04, ease: EASE }}
                  onClick={() => openLightbox(screen)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openLightbox(screen);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${screen.alt} full screen`}
                  style={{
                    cursor: "pointer",
                    position: "relative" as const,
                    zIndex: 1,
                    overflow: "hidden",
                  }}
                  whileHover={{
                    boxShadow: "0 0 40px var(--glow)",
                    scale: 1.02,
                    zIndex: 10,
                    transition: { duration: 0.25, ease: EASE },
                  }}
                >
                  <img
                    src={screen.src}
                    alt={screen.alt}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      objectFit: "contain",
                      pointerEvents: "none",
                    }}
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>

            {/* Callout notes */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              style={{ gap: 12 }}
            >
              {group.callouts.map((callout, ci) => (
                <motion.div
                  key={callout.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.25 + gi * 0.06 + ci * 0.04, ease: EASE }}
                  style={{
                    padding: "18px 20px",
                    borderRadius: 12,
                    border: "1px solid var(--cs-border)",
                    backgroundColor: "var(--cs-surface)",
                    display: "flex",
                    flexDirection: "column" as const,
                    gap: 6,
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "var(--cs-accent-sf)",
                      lineHeight: 1.2,
                    }}
                  >
                    {callout.title}
                  </span>
                  <p style={{ fontSize: "0.82rem", lineHeight: 1.6, color: "var(--cs-text-muted)" }}>
                    {callout.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Interactive Prototype */}
        <div ref={protoRef} style={{ marginTop: 120 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={protoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
            style={{ marginBottom: 24 }}
          >
            <p className="kicker">Interactive Prototype</p>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--cs-text)",
                maxWidth: 400,
                marginBottom: 12,
              }}
            >
              Try it yourself.
            </h2>
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.65,
                color: "var(--cs-text-faint)",
                maxWidth: 480,
              }}
            >
              Explore the full SAGE prototype. This interactive demo shows the core product flow
              including learning, resource discovery, and financial support.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={protoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
            {/* Desktop iframe */}
            <div
              className="hidden md:block"
              style={{
                width: "100%",
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid var(--cs-border)",
                backgroundColor: "var(--cs-surface)",
              }}
            >
              <iframe
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FCat48J4rpvGNeh3lSnIhGs%2FSAGE%3Fnode-id%3D1-2724%26p%3Df%26viewport%3D354%252C585%252C0.04%26t%3DfdrABSxSpw5dH5ZJ-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D1%253A179%26page-id%3D0%253A1"
                title="SAGE Figma Prototype"
                loading="lazy"
                allowFullScreen
                style={{
                  width: "100%",
                  height: "clamp(650px, 60vw, 820px)",
                  border: 0,
                  display: "block",
                }}
              />
            </div>

            {/* Mobile fallback */}
            <div
              className="md:hidden"
              style={{
                padding: "48px 32px",
                borderRadius: 20,
                border: "1px solid var(--cs-border)",
                backgroundColor: "var(--cs-surface)",
                display: "flex",
                flexDirection: "column" as const,
                alignItems: "center",
                gap: 20,
                textAlign: "center" as const,
              }}
            >
              <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--cs-text)" }}>
                Best viewed on desktop
              </p>
              <p style={{ fontSize: "0.85rem", color: "var(--cs-text-faint)", lineHeight: 1.6 }}>
                Open the prototype in Figma to explore the full interactive flow on your device.
              </p>
              <a
                href="https://www.figma.com/proto/Cat48J4rpvGNeh3lSnIhGs/SAGE?node-id=1-2724&p=f&viewport=354%2C585%2C0.04&t=fdrABSxSpw5dH5ZJ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A179&page-id=0%3A1"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 24px",
                  borderRadius: 10,
                  border: "1px solid var(--accent-border-strong)",
                  backgroundColor: "var(--accent-interactive-bg)",
                  color: "var(--cs-accent-sf)",
                  fontSize: "0.88rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "background-color 200ms ease, border-color 200ms ease",
                }}
              >
                Open prototype in Figma
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4.5M10 2V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Desktop fallback note */}
            <div
              className="hidden md:flex"
              style={{ marginTop: 16, flexDirection: "column" as const, alignItems: "center", gap: 10 }}
            >
              <p style={{ fontSize: "0.75rem", color: "var(--cs-text-faint)", textAlign: "center" as const }}>
                If the prototype does not load, open it directly in Figma.
              </p>
              <a
                href="https://www.figma.com/proto/Cat48J4rpvGNeh3lSnIhGs/SAGE?node-id=1-2724&p=f&viewport=354%2C585%2C0.04&t=fdrABSxSpw5dH5ZJ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A179&page-id=0%3A1"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 20px",
                  borderRadius: 9,
                  border: "1px solid var(--accent-border-strong)",
                  backgroundColor: "var(--accent-interactive-bg)",
                  color: "var(--cs-accent-sf)",
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "background-color 200ms ease, border-color 200ms ease",
                }}
              >
                Open prototype in Figma
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4.5M10 2V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* GWU NEXT Festival 2026 */}
        <div ref={nextFestRef} style={{ marginTop: 120 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={nextFestInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            style={{ marginBottom: 32 }}
          >
            <p className="kicker">GWU NEXT Festival 2026</p>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--cs-text)",
                marginBottom: 16,
              }}
            >
              Presented at GWU NEXT.
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "var(--cs-text-muted)",
                maxWidth: 600,
              }}
            >
              SAGE was presented at the GWU NEXT Festival 2026, where students, faculty, and
              visitors explored thesis work focused on design, technology, and social impact.
            </p>
          </motion.div>

          {/* Motion graphic video */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={nextFestInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            style={{
              borderRadius: 20,
              overflow: "hidden",
              border: "1px solid var(--cs-border)",
              backgroundColor: "var(--cs-surface)",
              marginBottom: 12,
              position: "relative" as const,
            }}
          >
            {/* TODO before deploy: replace local path with Vimeo/YouTube URL - 295 MB exceeds Vercel limits */}
            <video
              ref={videoRef}
              src="/sage/sage-next-festival.mp4"
              controls
              playsInline
              preload="none"
              style={{ width: "100%", display: videoStarted ? "block" : "none" }}
              aria-label="SAGE motion graphic - GWU NEXT Festival 2026 thesis demonstration"
            />
            {!videoStarted && (
              <button
                onClick={() => {
                  setVideoStarted(true);
                  setTimeout(() => videoRef.current?.play(), 50);
                }}
                aria-label="Play SAGE motion graphic video"
                style={{
                  width: "100%",
                  aspectRatio: "16/9",
                  display: "flex",
                  flexDirection: "column" as const,
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 16,
                  background: "var(--cs-surface)",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    border: "1px solid var(--accent-border-strong)",
                    backgroundColor: "var(--accent-interactive-bg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background-color 200ms ease, border-color 200ms ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent-interactive-bg)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-border-glow)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent-interactive-bg)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-border-strong)";
                  }}
                >
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
                    <path d="M8 5.5L21 13L8 20.5V5.5Z" fill="var(--cs-accent-sf)" />
                  </svg>
                </div>
                <span
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase" as const,
                    color: "var(--cs-text-muted)",
                  }}
                >
                  Watch Video
                </span>
              </button>
            )}
          </motion.div>
          <p className="caption" style={{ marginBottom: 40 }}>
            Motion graphic created as a visual thesis demonstration for the GWU NEXT Festival 2026
            at the Corcoran School of Arts and Design. This piece is a conceptual showcase, not a
            representation of the final product design.
          </p>

          {/* Festival photos - 07, 08, 09 */}
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: 12 }}
          >
            {[7, 8, 9].map((n, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 12 }}
                animate={nextFestInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.07, ease: EASE }}
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  border: "1px solid var(--cs-border)",
                  aspectRatio: "4/5",
                }}
              >
                <ClickableImage
                  src={`/sage/team/sage-team-${String(n).padStart(2, "0")}.jpg`}
                  alt={`GWU NEXT Festival 2026 - SAGE presentation, photo ${n - 6}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual Guidelines */}
        <div ref={guidelinesRef} style={{ marginTop: 120 }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={guidelinesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            style={{ marginBottom: 56 }}
          >
            <p className="kicker">Visual Guidelines</p>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--cs-text)",
                maxWidth: 480,
                marginBottom: 16,
              }}
            >
              A system built for trust.
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "var(--cs-text-muted)",
                maxWidth: 560,
              }}
            >
              Every visual decision in SAGE reinforces the same goal: help residents feel safe,
              informed, and in control of their financial lives.
            </p>
          </motion.div>

          {/* Color System */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={guidelinesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            style={{ marginBottom: 64 }}
          >
            <h3
              style={{
                fontSize: "0.72rem",
                fontWeight: 600,
                textTransform: "uppercase" as const,
                letterSpacing: "0.12em",
                color: "var(--cs-text-faint)",
                marginBottom: 20,
              }}
            >
              Color System
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5" style={{ gap: 16 }}>
              {COLOR_SWATCHES.map((swatch, i) => (
                <motion.div
                  key={swatch.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={guidelinesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.15 + i * 0.06, ease: EASE }}
                  style={{
                    borderRadius: 16,
                    border: "1px solid var(--cs-border)",
                    overflow: "hidden",
                    backgroundColor: "var(--cs-surface)",
                  }}
                >
                  <div
                    style={{
                      height: 80,
                      backgroundColor: swatch.hex,
                      borderBottom: "1px solid var(--cs-border)",
                    }}
                  />
                  <div style={{ padding: "14px 14px 16px" }}>
                    <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--cs-text)", marginBottom: 4 }}>
                      {swatch.name}
                    </p>
                    <p style={{ fontSize: "0.72rem", color: "var(--cs-text-faint)", lineHeight: 1.5 }}>
                      {swatch.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={guidelinesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            style={{ marginBottom: 64 }}
          >
            <h3
              style={{
                fontSize: "0.72rem",
                fontWeight: 600,
                textTransform: "uppercase" as const,
                letterSpacing: "0.12em",
                color: "var(--cs-text-faint)",
                marginBottom: 20,
              }}
            >
              Typography
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 20 }}>
              {[
                {
                  name: "Clash Display",
                  role: "Display / Headings",
                  sample: "SAGE Financial",
                  desc: "Used for headings, hero text, and key moments. Clash Display brings confidence and structure without feeling stiff.",
                  sampleStyle: { fontFamily: "var(--font-clash, sans-serif)", fontWeight: 700, fontSize: "1.6rem" },
                },
                {
                  name: "Basic Sans",
                  role: "Body / UI",
                  sample: "Track your progress",
                  desc: "Used for body copy, labels, and UI elements. Its clean legibility keeps the experience calm and easy to scan.",
                  sampleStyle: { fontFamily: "inherit", fontWeight: 400, fontSize: "1.1rem" },
                },
              ].map(({ name, role, sample, desc, sampleStyle }) => (
                <div
                  key={name}
                  style={{
                    padding: "28px",
                    borderRadius: 16,
                    border: "1px solid var(--cs-border)",
                    backgroundColor: "var(--cs-surface)",
                    display: "flex",
                    flexDirection: "column" as const,
                    gap: 16,
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" as const, gap: 4 }}>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        textTransform: "uppercase" as const,
                        letterSpacing: "0.1em",
                        color: "var(--cs-text-faint)",
                      }}
                    >
                      {role}
                    </span>
                    <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--cs-text)" }}>
                      {name}
                    </span>
                  </div>
                  <p style={{ ...sampleStyle, color: "var(--cs-text)", lineHeight: 1.2 }}>{sample}</p>
                  <p style={{ fontSize: "0.82rem", lineHeight: 1.6, color: "var(--cs-text-faint)" }}>{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Design Intent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={guidelinesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          >
            <h3
              style={{
                fontSize: "0.72rem",
                fontWeight: 600,
                textTransform: "uppercase" as const,
                letterSpacing: "0.12em",
                color: "var(--cs-text-faint)",
                marginBottom: 20,
              }}
            >
              Design Intent
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 16 }}>
              {[
                { label: "Trust", desc: "Dark navy palette and consistent layout patterns that feel stable and safe." },
                { label: "Clarity", desc: "Short sentences, plain language, and scannable card layouts that reduce cognitive load." },
                { label: "Accessibility", desc: "High contrast ratios, generous touch targets, and clear focus states throughout." },
                { label: "Community", desc: "Warm accents and human language that remind users this platform is built for them." },
              ].map(({ label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={guidelinesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.35 + i * 0.06, ease: EASE }}
                  style={{
                    padding: "24px 20px",
                    borderRadius: 14,
                    border: "1px solid var(--cs-border)",
                    backgroundColor: "var(--cs-surface)",
                    display: "flex",
                    flexDirection: "column" as const,
                    gap: 10,
                  }}
                >
                  <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--cs-accent-sf)" }}>
                    {label}
                  </span>
                  <p style={{ fontSize: "0.82rem", lineHeight: 1.6, color: "var(--cs-text-faint)" }}>
                    {desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={closeLightbox}
            style={{
              position: "fixed" as const,
              inset: 0,
              zIndex: 9999,
              background: "rgba(0,0,0,0.88)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
            }}
          >
            <motion.button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              aria-label="Close image preview"
              whileHover={{ background: "rgba(255,255,255,0.18)", borderColor: "rgba(255,255,255,0.28)" }}
              transition={{ duration: 0.15 }}
              style={{
                position: "fixed" as const,
                top: 24,
                right: 24,
                zIndex: 10000,
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "var(--cs-border-strong)",
                border: "1px solid var(--cs-border-strong)",
                color: "var(--cs-text)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </motion.button>
            <motion.img
              key={lightbox.src}
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.93 }}
              transition={{ duration: 0.28, ease: EASE }}
              src={lightbox.src}
              alt={lightbox.alt}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                objectFit: "contain" as const,
                borderRadius: 24,
                display: "block",
                boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
