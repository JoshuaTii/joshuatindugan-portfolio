"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ClickableImage } from "@/app/components/ClickableImage";

const ACCENT = "var(--cs-accent-gw)";
const EASE = [0.22, 1, 0.36, 1] as const;

const PHASES = [
  {
    id: "early",
    label: "Early Concepts",
    description:
      "Early concepts focused on showing shuttle and route information clearly. Paper sketches helped explore the core problem before any digital tools were opened: how should timing, routes, and stops be organized so students could make a decision in seconds?",
    cards: [
      "Explored where arrival time should live in the interface hierarchy.",
      "Sketched the relationship between map view, route list, and stop detail.",
      "Considered whether tracking or route browsing should be the primary entry point.",
      "Tested rough flow: home, route, stop, ETA.",
    ],
    images: [
      { src: "/gwride/sketch-1.png", alt: "Early concept sketch 1" },
      { src: "/gwride/sketch-2.png", alt: "Early concept sketch 2" },
    ],
    cols: "grid-cols-1 md:grid-cols-2",
  },
  {
    id: "lofi",
    label: "Low-Fidelity Wireframes",
    description:
      "The first wireframes focused on structure before visual design. The main goal was to map the basic experience around timing, routes, and proposed bus stops near key campus destinations. Grayscale layouts helped test hierarchy without relying on color.",
    cards: [
      "Focused on structure before visual design.",
      "Explored the core flows: onboarding, live shuttle tracking, route discovery, and stop details.",
      "Placed ETA information early. Arrival time is the first thing students need.",
      "Used map-first screens because shuttle decisions depend on location and timing.",
      "Kept route and stop information modular so students could scan quickly while walking.",
      "Designed navigation around fast access, not deep exploration.",
    ],
    images: [
      { src: "/gwride/lofi-opening.png", alt: "Lo-fi onboarding" },
      { src: "/gwride/lofi-main-1.png", alt: "Lo-fi main screen" },
      { src: "/gwride/lofi-main-2.png", alt: "Lo-fi route view" },
      { src: "/gwride/lofi-main-3.png", alt: "Lo-fi stop details" },
      { src: "/gwride/lofi-explore.png", alt: "Lo-fi explore" },
      { src: "/gwride/lofi-map.png", alt: "Lo-fi map" },
    ],
    cols: "grid-cols-2 md:grid-cols-4",
  },
  {
    id: "proto",
    label: "Initial Prototype",
    description:
      "Once the structure felt clear, we moved into a more realistic prototype with color, type, route cards, stop names, and ETA details. This phase helped test whether the interface still worked once real content was added. The main question: could a student immediately find the information they needed without hesitation?",
    cards: [
      "Added real ETA numbers, stop names, route labels, and visual hierarchy.",
      "Used route cards to separate shuttle options without overwhelming the map.",
      "Made timing the strongest visual element. Students scan for 'how many minutes?' first.",
      "Added route colors to help students distinguish options faster.",
      "Tested whether students could understand the next shuttle, route direction, and stop context.",
      "Learned that ETA should appear first, route name second, and stop detail last.",
    ],
    images: [
      { src: "/gwride/proto-1.png", alt: "Prototype screen 1" },
      { src: "/gwride/proto-2.png", alt: "Prototype screen 2" },
      { src: "/gwride/proto-3.png", alt: "Prototype screen 3" },
      { src: "/gwride/proto-4.png", alt: "Prototype screen 4" },
      { src: "/gwride/proto-5.png", alt: "Prototype screen 5" },
      { src: "/gwride/proto-6.png", alt: "Prototype screen 6" },
      { src: "/gwride/proto-7.png", alt: "Prototype screen 7" },
      { src: "/gwride/proto-8.png", alt: "Prototype screen 8" },
    ],
    cols: "grid-cols-2 md:grid-cols-4",
  },
  {
    id: "hifi",
    label: "Prototype Iterations",
    description:
      "The final design focused on clarity, confidence, and campus awareness. After feedback, the design became more focused and easier to scan. The revised screens were reorganized around students' actual scanning order: ETA first, route name second, stop detail last. The app also expanded to support campus discovery through the Explore feature.",
    cards: [
      "Strengthened the typographic hierarchy so the ETA stood out immediately.",
      "Cleaned up route cards so they felt useful rather than crowded.",
      "Made stop details more grounded in campus landmarks students recognize.",
      "Reduced visual noise around the map so movement and timing stayed central.",
      "Added the Explore feature to make the app useful beyond shuttle tracking.",
      "Refined around one question: is the shuttle close enough for me to wait?",
    ],
    images: [
      { src: "/gwride/hifi-1.png", alt: "High fidelity screen 1" },
      { src: "/gwride/hifi-2.png", alt: "High fidelity screen 2" },
      { src: "/gwride/hifi-3.png", alt: "High fidelity screen 3" },
      { src: "/gwride/hifi-4.png", alt: "High fidelity screen 4" },
      { src: "/gwride/hifi-5.png", alt: "High fidelity screen 5" },
      { src: "/gwride/hifi-6.png", alt: "High fidelity screen 6" },
      { src: "/gwride/hifi-7.png", alt: "High fidelity screen 7" },
      { src: "/gwride/hifi-8.png", alt: "High fidelity screen 8" },
    ],
    cols: "grid-cols-2 md:grid-cols-4",
  },
  {
    id: "final-proto",
    label: "Final Prototype",
    description:
      "The final prototype brought together all the design decisions made across earlier phases. Every screen was tested against one core question: can a student immediately understand what they need and act on it without confusion? Onboarding was streamlined, tracking was foregrounded, and the Explore feature was refined to feel like a natural extension of the transit experience.",
    cards: [
      "Streamlined onboarding so students could reach live shuttle information in under a minute.",
      "Foregrounded ETA on the tracking screen so the most critical number was always visible.",
      "Added route colors and stop markers so students could identify their shuttle at a glance.",
      "Refined Explore to surface the most relevant nearby places without overloading the screen.",
      "Reduced cognitive load by removing information that was available but not needed in the moment.",
      "Ensured every primary action required no more than two taps from the home screen.",
    ],
    images: [
      { src: "/gwride/final-order/b.png", alt: "Final prototype, onboarding" },
      { src: "/gwride/final-order/f.png", alt: "Final prototype, onboarding complete" },
      { src: "/gwride/final-order/g.png", alt: "Final prototype, shuttle tracking" },
      { src: "/gwride/final-order/h.png", alt: "Final prototype, live tracking" },
      { src: "/gwride/final-order/i.png", alt: "Final prototype, route view" },
      { src: "/gwride/final-order/j.png", alt: "Final prototype, route detail" },
      { src: "/gwride/final-order/k.png", alt: "Final prototype, explore" },
      { src: "/gwride/final-order/l.png", alt: "Final prototype, explore detail" },
    ],
    cols: "grid-cols-2 md:grid-cols-4",
  },
];

const APP_COLORS = [
  { hex: "#AA9868", name: "GWU Buff", usage: "Primary brand · Accent" },
  { hex: "#033C5A", name: "GWU Colonial Blue", usage: "Backgrounds · Structure" },
  { hex: "#FFFFFF", name: "White", usage: "Text · Icons · UI" },
];

function PhaseGallery({
  images,
  inView,
  cols,
}: {
  images: { src: string; alt: string }[];
  inView: boolean;
  cols: string;
}) {
  return (
    <div className={`grid ${cols}`} style={{ gap: 12 }}>
      {images.map((img, i) => (
        <motion.div
          key={img.src}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 * i, ease: EASE }}
        >
          <ClickableImage src={img.src} alt={img.alt} loading="lazy" />
        </motion.div>
      ))}
    </div>
  );
}

export function Design() {
  const ref = useRef(null);
  const vgRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const vgInView = useInView(vgRef, { once: true, margin: "-80px" });
  const [activePhase, setActivePhase] = useState("early");

  const phase = PHASES.find((p) => p.id === activePhase)!;

  return (
    <section
      id="design"
      style={{ scrollMarginTop: 80, paddingBlock: "120px 140px" }}
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ marginBottom: 72 }}
        >
          <p
            style={{
              display: "inline-block",
              fontSize: "0.75rem",
              fontWeight: 500,
              textTransform: "uppercase" as const,
              letterSpacing: "0.12em",
              color: ACCENT,
              marginBottom: 16,
            }}
          >
            Design Evolution
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--cs-text)",
              lineHeight: 1.1,
              maxWidth: 640,
              marginBottom: 20,
            }}
          >
            From rough structure to a focused, confident experience.
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--cs-text-muted)", maxWidth: 600 }}>
            The design moved through five phases: early sketches to test the concept, low-fidelity
            wireframes to establish structure, an initial prototype with real content, iterated
            prototype screens, and a final prototype that resolved the full experience.
          </p>
        </motion.div>

        {/* Phase selector */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          className="flex flex-wrap"
          style={{ gap: 12, marginBottom: 32 }}
        >
          {PHASES.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActivePhase(p.id)}
              style={{
                padding: "10px 22px",
                borderRadius: 999,
                border: `1px solid ${activePhase === p.id ? ACCENT : "var(--cs-border-strong)"}`,
                backgroundColor: activePhase === p.id ? "var(--accent-interactive-bg)" : "transparent",
                color: activePhase === p.id ? ACCENT : "var(--cs-text-faint)",
                fontSize: "0.8rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 250ms ease",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ color: ACCENT, fontSize: "0.7rem", opacity: 0.6 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {p.label}
            </button>
          ))}
        </motion.div>

        {/* Phase description */}
        <motion.p
          key={activePhase + "-desc"}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: EASE }}
          style={{
            fontSize: "0.95rem",
            lineHeight: 1.75,
            color: "var(--cs-text-muted)",
            maxWidth: 600,
            marginBottom: 24,
          }}
        >
          {phase.description}
        </motion.p>

        {/* Design choice cards - no colored left borders */}
        <motion.div
          key={activePhase + "-cards"}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 12, marginBottom: 32 }}
        >
          {phase.cards.map((card, i) => (
            <div
              key={i}
              style={{
                padding: "18px 20px",
                borderRadius: 12,
                border: "1px solid var(--cs-border)",
                backgroundColor: "var(--cs-surface)",
                fontSize: "0.88rem",
                lineHeight: 1.65,
                color: "var(--cs-text-muted)",
              }}
            >
              {card}
            </div>
          ))}
        </motion.div>

        {/* Phase gallery */}
        <motion.div
          key={activePhase + "-gallery"}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          <PhaseGallery
            images={phase.images}
            inView={inView}
            cols={phase.cols}
          />
        </motion.div>

        {/* Evolution note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          style={{
            marginTop: 48,
            marginBottom: 96,
            padding: "24px 28px",
            borderRadius: 14,
            backgroundColor: "var(--accent-interactive-bg)",
            border: "1px solid var(--accent-border)",
          }}
        >
          <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--cs-text-muted)" }}>
            <strong style={{ color: "var(--cs-text)" }}>What changed most between iterations:</strong>{" "}
            The prototype revealed that students scanned for ETA first, route name second, and stop
            detail last. The revised screens were reorganized around that scanning order, making the
            single most important number (minutes until arrival) the largest, most immediate element
            on every key screen.
          </p>
        </motion.div>

        {/* Visual Guidelines */}
        <div ref={vgRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={vgInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
            style={{ marginBottom: 24 }}
          >
            <p
              style={{
                display: "inline-block",
                fontSize: "0.75rem",
                fontWeight: 500,
                textTransform: "uppercase" as const,
                letterSpacing: "0.12em",
                color: ACCENT,
                marginBottom: 12,
              }}
            >
              Visual Guidelines
            </p>
            <h3
              style={{
                fontSize: "1.05rem",
                fontWeight: 600,
                color: "var(--cs-text)",
                letterSpacing: "-0.01em",
                marginBottom: 4,
              }}
            >
              Typography and color system established for GW Ride.
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={vgInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            style={{
              padding: "40px 40px",
              borderRadius: 20,
              border: "1px solid var(--cs-border)",
              backgroundColor: "var(--cs-surface)",
            }}
          >
            {/* Typography */}
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 500,
                textTransform: "uppercase" as const,
                letterSpacing: "0.12em",
                color: "var(--cs-text-faint)",
                marginBottom: 24,
              }}
            >
              Typography
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 24, marginBottom: 48 }}>
              <div
                style={{
                  padding: "28px 28px",
                  borderRadius: 14,
                  border: "1px solid var(--cs-border)",
                  backgroundColor: "var(--cs-bg-secondary)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.68rem",
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.1em",
                    color: ACCENT,
                    marginBottom: 16,
                    fontWeight: 500,
                  }}
                >
                  Display · Headings
                </div>
                <div
                  style={{
                    fontSize: "clamp(2rem, 5vw, 3.2rem)",
                    fontWeight: 800,
                    color: "var(--cs-text)",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    marginBottom: 12,
                    fontFamily: '"GW Liberated", Georgia, serif',
                  }}
                >
                  GW Liberated
                </div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--cs-text-faint)",
                    lineHeight: 1.5,
                    fontFamily: '"GW Liberated", Georgia, serif',
                  }}
                >
                  A B C D E F G H I J K<br />
                  1 2 3 4 5 6 7 8 9 0
                </div>
              </div>

              <div
                style={{
                  padding: "28px 28px",
                  borderRadius: 14,
                  border: "1px solid var(--cs-border)",
                  backgroundColor: "var(--cs-bg-secondary)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.68rem",
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.1em",
                    color: ACCENT,
                    marginBottom: 16,
                    fontWeight: 500,
                  }}
                >
                  Body · Interface
                </div>
                <div
                  style={{
                    fontSize: "clamp(2rem, 5vw, 3.2rem)",
                    fontWeight: 500,
                    color: "var(--cs-text)",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                    marginBottom: 12,
                  }}
                >
                  Basic Sans
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--cs-text-faint)", lineHeight: 1.5 }}>
                  a b c d e f g h i j k l m<br />
                  Used for labels, ETAs, stop names
                </div>
              </div>
            </div>

            {/* Colors */}
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 500,
                textTransform: "uppercase" as const,
                letterSpacing: "0.12em",
                color: "var(--cs-text-faint)",
                marginBottom: 24,
              }}
            >
              Color System
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 16 }}>
              {APP_COLORS.map((color) => (
                <div
                  key={color.hex}
                  style={{
                    borderRadius: 14,
                    overflow: "hidden",
                    border: "1px solid var(--cs-border)",
                  }}
                >
                  <div
                    style={{
                      height: 80,
                      backgroundColor: color.hex,
                      borderBottom: "1px solid var(--cs-border)",
                    }}
                  />
                  <div style={{ padding: "16px 18px", backgroundColor: "var(--cs-bg-secondary)" }}>
                    <p style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--cs-text)", marginBottom: 4, fontFamily: "monospace" }}>
                      {color.hex}
                    </p>
                    <p style={{ fontSize: "0.82rem", color: "var(--cs-text-muted)", marginBottom: 2 }}>
                      {color.name}
                    </p>
                    <p style={{ fontSize: "0.75rem", color: "var(--cs-text-faint)" }}>
                      {color.usage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
