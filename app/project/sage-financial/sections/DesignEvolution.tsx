"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ClickableImage } from "./ClickableImage";

const EASE = [0.22, 1, 0.36, 1] as const;

const LOGO_STAGES = [
  {
    src: "/sage/logo-sketch-1.jpg",
    label: "Sketch 01",
    caption: "Early marks exploring growth, guidance, and community through rough gesture forms.",
  },
  {
    src: "/sage/logo-sketch-2.jpg",
    label: "Sketch 02",
    caption: "Refining toward trustworthiness and accessibility, moving away from abstract forms.",
  },
  {
    src: "/sage/logo-initial-design.png",
    label: "Initial Design",
    caption: "A formalized version that tested the mark for clarity across app contexts.",
  },
  {
    src: "/sage/logo-final-design.png",
    label: "Final Design",
    caption: "The final mark expresses unity, growth, community, and security.",
  },
];

const PHASES = [
  {
    id: "lofi",
    label: "Lo-fi Wireframes",
    description:
      "The first wireframes focused on structure before visual design. At this stage, the main goal was to organize the experience around the user journey: learn, connect, take action, and track progress. Grayscale layouts helped test hierarchy without relying on color, while the card-based structure made complex financial information easier to scan.",
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
    label: "Early Prototype",
    description:
      "The early prototype helped explore the overall experience, but it felt too busy and leaned heavily into the visual language of traditional fintech apps. During feedback sessions, one user even asked, \"It looks like Cash App. Is this Cash App?\" That comment highlighted a larger issue: the design felt more transactional than supportive. To better reflect SAGE's focus on trust, community, and financial empowerment, the visual direction was refined to feel calmer, more approachable, and less centered on payments alone.",
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
    label: "Final Design Direction",
    description:
      "Early feedback suggested the first visual direction felt too bright and transactional for a trust-based financial product. The final direction uses darker surfaces, limited accent color, and clearer hierarchy to feel calmer, safer, and more credible.",
    cards: [
      "Shifted to a dark navy interface to create a calmer and more secure feeling.",
      "Used green as an accent for progress, success, and key actions instead of the main background.",
      "Refined spacing, cards, contrast, and hierarchy for faster scanning.",
      "Made repayment feel more encouraging with language like \"60% paid\" and \"You're on track.\"",
      "Organized local help around real user needs like debt, food, rent, and emergencies.",
      "Made learning feel less intimidating through visual cards, progress bars, and clear next steps.",
    ],
    screens: [
      { src: "/sage/fd-plain-1.png", caption: "Cross Section" },
      { src: "/sage/fd-plain-2.png", caption: "Sage" },
      { src: "/sage/fd-plain-3.png", caption: "Lessons" },
      { src: "/sage/fd-plain-4.png", caption: "Microloan" },
    ],
  },
];

const FEEDBACK_CHANGES = [
  {
    feedback: '"It looks like Cash App."',
    change:
      "Shifted the visual language away from transactional fintech patterns and toward a more supportive, community-centered experience.",
  },
  {
    feedback: "Information felt overwhelming.",
    change:
      "Reduced content density and grouped information into smaller, scannable sections.",
  },
  {
    feedback: "Users wanted clearer next steps.",
    change:
      "Added progress indicators, recommendations, and action-focused cards throughout the experience.",
  },
  {
    feedback: "Community support was not obvious enough.",
    change:
      "Increased visibility of local resources, workshops, and neighborhood-based assistance.",
  },
];

export function DesignEvolution() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activePhase, setActivePhase] = useState("lofi");

  const phase = PHASES.find((p) => p.id === activePhase)!;

  return (
    <section id="design" className="!pt-[120px] !pb-[140px]">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ marginBottom: 72 }}
        >
          <p className="kicker">Design Evolution</p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--cs-text)",
              maxWidth: 680,
              marginBottom: 16,
            }}
          >
            How the product moved from rough structure to a calmer, more trusted experience.
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "var(--cs-text-muted)",
              maxWidth: 560,
            }}
          >
            SAGE went through several visual and structural changes before reaching the final
            design. The goal was to make the product feel less like a flashy fintech app and more
            like a calm, trusted financial support tool.
          </p>
        </motion.div>

        {/* Logo Exploration */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          style={{ marginBottom: 96 }}
        >
          <p className="kicker" style={{ color: "var(--cs-accent-sf)", marginBottom: 12 }}>
            Logo Exploration
          </p>
          <h3
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "var(--cs-text)",
              lineHeight: 1.2,
              maxWidth: 480,
              marginBottom: 16,
            }}
          >
            A mark built on clarity, trust, and scale.
          </h3>
          <p
            style={{
              fontSize: "0.93rem",
              lineHeight: 1.7,
              color: "var(--cs-text-muted)",
              maxWidth: 560,
              marginBottom: 12,
            }}
          >
            The logo started with rough pencil sketches. I wanted to tailor it to D.C. itself,
            which led to the leaf symbol. Realizing shields represent unity and security, I
            combined both symbols. The final mark expresses unity, growth, community, and security.
          </p>
          <p
            style={{
              fontSize: "0.9rem",
              lineHeight: 1.65,
              color: "var(--cs-text-faint)",
              maxWidth: 560,
              marginBottom: 36,
            }}
          >
            As the product direction became clearer, the final logo moved toward a simpler symbol
            that felt more calm, trustworthy, and easier to recognize in a mobile app.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 20 }}>
            {LOGO_STAGES.map((stage, i) => (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.07, ease: EASE }}
                style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}
              >
                <div
                  style={{
                    borderRadius: 14,
                    overflow: "hidden",
                    backgroundColor: "var(--cs-surface)",
                    border: "1px solid var(--cs-border)",
                  }}
                >
                  <ClickableImage
                    src={stage.src}
                    alt={stage.label}
                    style={{ width: "100%", height: "auto", display: "block" }}
                    loading="lazy"
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 4, alignItems: "flex-start" }}>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      color: "var(--cs-accent-sf)",
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
        <div style={{ borderTop: "1px solid var(--cs-border)", marginBottom: 72 }} />

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
                border: `1px solid ${activePhase === p.id ? "var(--cs-accent-sf)" : "var(--cs-border-strong)"}`,
                backgroundColor: activePhase === p.id ? "rgba(155,233,49,0.08)" : "transparent",
                color: activePhase === p.id ? "var(--cs-accent-sf)" : "var(--cs-text-faint)",
                fontSize: "0.8rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 250ms ease",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ color: "var(--cs-accent-sf)", fontSize: "0.7rem", opacity: 0.6 }}>
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

        {/* Design choice cards */}
        <motion.div
          key={activePhase + "-cards"}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 12, marginBottom: 40 }}
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

        {/* Screen grid */}
        <motion.div
          key={activePhase + "-grid"}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ gap: 20, marginBottom: 80 }}
        >
          {phase.screens.map((screen, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
              <ClickableImage
                src={screen.src}
                alt={screen.caption}
                style={{ width: "100%", height: "auto", display: "block" }}
                loading="lazy"
              />
              <p className="caption">{screen.caption}</p>
            </div>
          ))}
        </motion.div>

        {/* Feedback → Design change table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        >
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              color: "var(--cs-text-muted)",
              textTransform: "uppercase" as const,
              letterSpacing: "0.1em",
              marginBottom: 24,
            }}
          >
            Feedback → Design Changes
          </h3>

          {/* Desktop table */}
          <div
            className="hidden md:block"
            style={{
              borderRadius: 16,
              border: "1px solid var(--cs-border)",
              overflow: "hidden",
              marginBottom: 40,
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" as const }}>
              <thead>
                <tr style={{ backgroundColor: "var(--cs-surface)" }}>
                  {["Feedback", "Design Change"].map((col) => (
                    <th
                      key={col}
                      style={{
                        padding: "16px 24px",
                        textAlign: "left" as const,
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        textTransform: "uppercase" as const,
                        letterSpacing: "0.1em",
                        color: "var(--cs-accent-sf)",
                        borderBottom: "1px solid var(--cs-border)",
                      }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEEDBACK_CHANGES.map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: i < FEEDBACK_CHANGES.length - 1 ? "1px solid var(--cs-border)" : "none",
                    }}
                  >
                    <td
                      style={{
                        padding: "18px 24px",
                        fontSize: "0.88rem",
                        fontStyle: "italic",
                        color: "var(--cs-text-muted)",
                        verticalAlign: "top" as const,
                        width: "40%",
                      }}
                    >
                      {row.feedback}
                    </td>
                    <td
                      style={{
                        padding: "18px 24px",
                        fontSize: "0.88rem",
                        lineHeight: 1.65,
                        color: "var(--cs-text-muted)",
                        verticalAlign: "top" as const,
                      }}
                    >
                      {row.change}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked */}
          <div className="md:hidden flex flex-col" style={{ gap: 12, marginBottom: 40 }}>
            {FEEDBACK_CHANGES.map((row, i) => (
              <div
                key={i}
                style={{
                  padding: "18px 20px",
                  borderRadius: 12,
                  border: "1px solid var(--cs-border)",
                  backgroundColor: "var(--cs-surface)",
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: 10,
                }}
              >
                <p
                  style={{
                    fontSize: "0.85rem",
                    fontStyle: "italic",
                    color: "var(--cs-text-muted)",
                  }}
                >
                  {row.feedback}
                </p>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.65, color: "var(--cs-text-muted)" }}>
                  {row.change}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
