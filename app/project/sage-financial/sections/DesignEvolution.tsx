"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const LOGO_STAGES = [
  {
    src: "/sage/logo-sketch-1.jpg",
    label: "Sketch 01",
    caption: "Early mark exploration: concepts of growth, financial movement, and community connection were explored through rough gesture forms.",
  },
  {
    src: "/sage/logo-sketch-2.jpg",
    label: "Sketch 02",
    caption: "Refining toward trustworthiness and accessibility, moving away from abstract forms toward something that felt grounded and legible at small sizes.",
  },
  {
    src: "/sage/logo-initial-design.png",
    label: "Initial Design",
    caption: "A formalized version that established the typographic relationship and tested the mark for clarity across app contexts: splash screens, icons, and headers.",
  },
  {
    src: "/sage/logo-final-design.png",
    label: "Final Design",
    caption: "The final mark balances geometric precision with warmth. The sage-green palette signals trust and empowerment without clinical coldness.",
  },
];

const PHASES = [
  {
    id: "lofi",
    label: "Lo-fi Wireframes",
    description:
      "At this stage, I kept the design simple on purpose. Before making anything look polished, I wanted to understand whether the basic structure made sense. The goal was to make sure users could quickly understand where to go, what to do, and how the main features connected.",
    cards: [
      "Focused on structure before visual design.",
      "Tested the core flows: payment status, learning, local support, and microloan progress.",
      "Used grayscale to check hierarchy without relying on color.",
      "Built the interface around cards so complex financial information felt easier to scan.",
      "Established bottom navigation early so the app could feel like a daily-use tool.",
    ],
    screens: [
      { src: "/sage/de-lofi-1.png", caption: "Cross Section" },
      { src: "/sage/de-lofi-2.png", caption: "Sage" },
      { src: "/sage/de-lofi-3.png", caption: "Lessons" },
      { src: "/sage/de-lofi-4.png", caption: "Microloan" },
    ],
  },
  {
    id: "proto",
    label: "Initial Prototype",
    description:
      "Once the structure felt solid, I started adding personality through color, type, real content, and imagery. This version helped me see what felt promising, but also what needed more restraint. It made the app feel more alive, but also showed that the visual tone had to feel more trustworthy for a financial product.",
    cards: [
      "Added color, typography, icons, real copy, and image-based lesson cards.",
      "Used bright green to suggest money, growth, and progress.",
      "Placed payment actions near the payment amount to reduce decision friction.",
      "Added the map experience to connect users with nearby community resources.",
      "Learned that the green felt optimistic, but too dominant and less mature for the final direction.",
    ],
    screens: [
      { src: "/sage/de-proto-1.png", caption: "Cross Section" },
      { src: "/sage/de-proto-2.png", caption: "Sage" },
      { src: "/sage/de-proto-3.png", caption: "Lessons" },
      { src: "/sage/de-proto-4.png", caption: "Microloan" },
    ],
  },
  {
    id: "final",
    label: "Final Design",
    description:
      "The final design became more focused, calm, and intentional. I wanted SAGE to feel supportive without feeling childish, and professional without feeling cold. Since the app deals with money, repayment, learning, and local resources, every visual decision needed to build trust quickly.",
    cards: [
      "Shifted to a dark navy interface to create a calmer and more secure feeling.",
      "Used green as an accent for progress, success, and key actions instead of the main background.",
      "Refined spacing, cards, contrast, and hierarchy for faster scanning.",
      "Made repayment feel more encouraging with language like \"60% paid\" and \"You're on track.\"",
      "Organized local help around real user needs like debt, food, rent, and emergencies.",
      "Made learning feel less intimidating through visual cards, progress bars, and clear next steps.",
    ],
    screens: [
      { src: "/sage/de-final-2.png", caption: "Cross Section" },
      { src: "/sage/de-final-3.png", caption: "Sage" },
      { src: "/sage/de-final-4.png", caption: "Lessons" },
      { src: "/sage/de-final-5.png", caption: "Microloan" },
    ],
  },
];

export function DesignEvolution() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activePhase, setActivePhase] = useState("lofi");

  const phase = PHASES.find((p) => p.id === activePhase)!;

  return (
    <section id="design-evolution" className="!pt-[120px] !pb-[140px]">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 72 }}
        >
          <p className="kicker">Design Evolution</p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#f2ede8",
              maxWidth: 640,
              marginBottom: 16,
            }}
          >
            From sketch to system.
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "rgba(242,237,232,0.5)",
              maxWidth: 520,
            }}
          >
            The design went through three distinct phases. Select a phase to see the screens.
          </p>
        </motion.div>

        {/* Logo Evolution */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 96 }}
        >
          <p
            className="kicker"
            style={{ color: "rgba(122,182,136,0.7)", marginBottom: 12 }}
          >
            Logo Evolution
          </p>
          <div
            className="flex flex-col md:flex-row md:items-end md:justify-between"
            style={{ gap: "16px 64px", marginBottom: 40 }}
          >
            <h3
              style={{
                fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "#f2ede8",
                lineHeight: 1.1,
              }}
            >
              A mark built on clarity, trust, and scale.
            </h3>
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.65,
                color: "rgba(242,237,232,0.45)",
                maxWidth: 400,
                flexShrink: 0,
              }}
            >
              The SAGE wordmark went through four iterations, each time getting cleaner, more
              scalable, and more aligned with what the platform stands for.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 20 }}>
            {LOGO_STAGES.map((stage, i) => (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}
              >
                <div
                  style={{
                    borderRadius: 14,
                    overflow: "hidden",
                    backgroundColor: "#111113",
                    minHeight: 200,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 24,
                  }}
                >
                  <img
                    src={stage.src}
                    alt={stage.label}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      display: "block",
                    }}

                  loading="lazy"
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 4 }}>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      color: "#7ab688",
                      textTransform: "uppercase" as const,
                      letterSpacing: "0.1em",
                    }}
                  >
                    {stage.label}
                  </span>
                  <p className="caption">{stage.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginBottom: 72 }} />

        {/* Phase selector */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
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
                border: `1px solid ${activePhase === p.id ? "#7ab688" : "rgba(255,255,255,0.08)"}`,
                backgroundColor: activePhase === p.id ? "rgba(122,182,136,0.1)" : "transparent",
                color: activePhase === p.id ? "#7ab688" : "rgba(242,237,232,0.45)",
                fontSize: "0.8rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 250ms ease",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ color: "rgba(122,182,136,0.5)", fontSize: "0.7rem" }}>
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
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "0.95rem",
            lineHeight: 1.75,
            color: "rgba(242,237,232,0.55)",
            maxWidth: 600,
            marginBottom: 24,
          }}
        >
          {phase.description}
        </motion.p>

        {/* Design choice cards */}
        <motion.div
          key={activePhase + "-cards"}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 12, marginBottom: 40 }}
        >
          {phase.cards.map((card, i) => (
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
                borderLeft: "2px solid rgba(122,182,136,0.4)",
              }}
            >
              {card}
            </div>
          ))}
        </motion.div>

        {/* Screen grid */}
        <motion.div
          key={activePhase + "-grid"}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ gap: 20 }}
        >
          {phase.screens.map((screen, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
              <div
                style={{
                  borderRadius: 14,
                  overflow: "hidden",
                  aspectRatio: "9/16",
                }}
              >
                <img
                  src={screen.src}
                  alt={screen.caption}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                  }}

                loading="lazy"
                />
              </div>
              <p className="caption">{screen.caption}</p>
            </div>
          ))}
        </motion.div>

        {/* Why the redesign is stronger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            marginTop: 72,
            padding: "32px 36px",
            borderRadius: 16,
            border: "1px solid rgba(122,182,136,0.15)",
            backgroundColor: "rgba(122,182,136,0.04)",
          }}
        >
          <p
            style={{
              fontSize: "0.72rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#7ab688",
              marginBottom: 14,
            }}
          >
            Why the redesign is stronger
          </p>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.75,
              color: "rgba(242,237,232,0.6)",
              maxWidth: 680,
            }}
          >
            The redesign is stronger because it does more than make the app look better. Testing
            showed that the earlier version felt too bright, almost too &ldquo;Cash App-y&rdquo; and
            busy for a financial product, so I refined the experience to feel safer, clearer, and
            more trustworthy. The final version uses color with purpose, simplifies financial
            information, and helps users understand their next step without feeling overwhelmed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

