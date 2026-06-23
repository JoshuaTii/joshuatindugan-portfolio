"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const WHAT_CHANGED = [
  "The visual style became calmer and less like a typical fintech app, so the product felt more supportive than transactional.",
  "The dashboard was redesigned to show the most important things first: payments, goals, lessons, and nearby resources.",
  "Information was broken into smaller cards so users could scan the screen faster without feeling overwhelmed.",
  "Learning progress and goal tracking became more visible to help users feel a sense of momentum.",
  "Community resources were moved closer to the main experience, making local support easier to find and access.",
  "Loan details were made clearer by showing payment status, due dates, and repayment options in a simple way.",
  "The navigation was simplified so users could move between Home, Learn, Sage, Loan, and Account without confusion.",
];

const LEARNINGS = [
  {
    title: "Design cannot solve systemic problems. It can dignify the entry point.",
    body: "SAGE does not fix redlining. It does not rebuild the banks that were never built. What it can do is meet people where they are and provide a tool that does not make them feel small. That is a meaningful contribution, even if it is not a solution.",
  },
  {
    title: "Trust is earned through consistency, not features.",
    body: "Every interaction in SAGE is an opportunity to keep or lose trust. I learned to treat each screen as a promise. The most important design decisions were not what to add, but what to leave out.",
  },
  {
    title: "Research methodology shapes what you find.",
    body: "My initial research framed residents as victims of a broken system. When I reframed them as resourceful people navigating constraints, the design changed completely. The features that emerged from that reframe are more useful and more respectful.",
  },
];

const NEXT_STEPS = [
  {
    title: "Community pilot",
    desc: "Launch a small pilot with Ward 7 and 8 residents through trusted local organizations to evaluate how SAGE performs beyond a prototype, especially around trust, repeat use, financial confidence, and movement away from predatory lending.",
  },
  {
    title: "Loan ecosystem design",
    desc: "Design the back-end community trust model that the microloan feature depends on, including how peer accountability scales as the user base grows.",
  },
  {
    title: "Partner feedback loop",
    desc: "Build an ongoing feedback loop with local organizations, counselors, and residents to keep improving SAGE around real community needs, not assumptions.",
  },
];

export function Reflection() {
  const ref = useRef(null);
  const validationRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const validationInView = useInView(validationRef, { once: true, margin: "-80px" });

  return (
    <section id="reflection" className="!pt-[120px] !pb-[160px]">
      <div className="section-container">

        {/* ── Validation / Feedback ─────────────────────────────────── */}
        <div ref={validationRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={validationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            style={{ marginBottom: 56 }}
          >
            <p className="kicker">Validation / Feedback</p>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--cs-text)",
                maxWidth: 640,
                marginBottom: 24,
              }}
            >
              Testing without metrics.
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: "var(--cs-text-muted)",
                maxWidth: 600,
              }}
            >
              Because this was a solo thesis project, validation focused on qualitative feedback
              rather than business metrics.
            </p>
          </motion.div>

          {/* Validation methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={validationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
            style={{ gap: 12, marginBottom: 56 }}
          >
            {[
              "15+ usability walkthroughs",
              "Peer critiques and design reviews",
              "Professor feedback sessions",
              "Accessibility review",
              "Task-based prototype testing",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 12 }}
                animate={validationInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.06, ease: EASE }}
                style={{
                  padding: "18px 16px",
                  borderRadius: 12,
                  border: "1px solid var(--cs-border)",
                  backgroundColor: "var(--cs-surface)",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: "var(--cs-text-muted)",
                  lineHeight: 1.4,
                  textAlign: "center" as const,
                  borderTop: "2px solid var(--accent-border-strong)",
                }}
              >
                {item}
              </motion.div>
            ))}
          </motion.div>

          {/* What changed */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={validationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            style={{ marginBottom: 96 }}
          >
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                color: "var(--cs-text-muted)",
                textTransform: "uppercase" as const,
                letterSpacing: "0.1em",
                marginBottom: 20,
              }}
            >
              What changed after feedback
            </h3>
            <div className="flex flex-col" style={{ gap: 10 }}>
              {WHAT_CHANGED.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={validationInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.25 + i * 0.05, ease: EASE }}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 16,
                    padding: "16px 20px",
                    borderRadius: 12,
                    border: "1px solid var(--cs-border)",
                    backgroundColor: "var(--cs-surface)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "var(--cs-accent-sf)",
                      minWidth: 20,
                      textAlign: "center" as const,
                      paddingTop: 2,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.65, color: "var(--cs-text-muted)" }}>
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Reflection ────────────────────────────────────────────── */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ marginBottom: 72 }}
        >
          <p className="kicker">Reflection</p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--cs-text)",
              maxWidth: 640,
              marginBottom: 28,
            }}
          >
            What this project taught me.
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: "var(--cs-text-muted)",
              maxWidth: 600,
            }}
          >
            This project taught me that designing for financial access is not just about creating
            tools. It is about understanding trust, fear, history, and the systems people are
            forced to navigate. SAGE pushed me to slow down, question my first ideas, and design
            with more care around what users need to feel informed, supported, and in control.
          </p>
        </motion.div>

        {/* Reflection cards */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 28, marginBottom: 80 }}>
          {LEARNINGS.map((learning, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: EASE }}
              style={{
                padding: 32,
                borderRadius: 20,
                border: "1px solid var(--cs-border)",
                backgroundColor: "var(--cs-surface)",
                display: "flex",
                flexDirection: "column" as const,
                gap: 18,
                transition: "border-color 300ms ease, box-shadow 300ms ease, background-color 300ms ease",
              }}
              whileHover={{
                borderColor: "var(--accent-border-strong)",
                boxShadow: "0 0 28px var(--glow)",
                backgroundColor: "var(--accent-interactive-bg)",
              }}
            >
              <h3
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "var(--cs-text)",
                  lineHeight: 1.4,
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontStyle: "italic",
                }}
              >
                {learning.title}
              </h3>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: "var(--cs-text-faint)" }}>
                {learning.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* What's next */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
          style={{
            padding: "48px 56px",
            borderRadius: 24,
            border: "1px solid var(--accent-border)",
            background: "linear-gradient(135deg, var(--accent-interactive-bg) 0%, transparent 60%)",
            display: "flex",
            flexDirection: "column" as const,
            gap: 20,
          }}
        >
          <p className="kicker" style={{ marginBottom: 0 }}>
            What&rsquo;s Next
          </p>
          <h3
            style={{
              fontSize: "1.3rem",
              fontWeight: 600,
              color: "var(--cs-text)",
              letterSpacing: "-0.01em",
            }}
          >
            If I took SAGE further.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 24 }}>
            {NEXT_STEPS.map(({ title, desc }) => (
              <div key={title} style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
                <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--cs-accent-sf)" }}>
                  {title}
                </span>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.65, color: "var(--cs-text-faint)" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
