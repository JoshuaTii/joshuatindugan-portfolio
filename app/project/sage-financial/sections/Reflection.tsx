"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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

export function Reflection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="reflection" className="!pt-[120px] !pb-[160px]">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 72 }}
        >
          <p className="kicker">Reflection</p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#f2ede8",
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
              color: "rgba(242,237,232,0.55)",
              maxWidth: 600,
            }}
          >
            Two semesters is a long time to spend with a single design problem. Long enough to
            get it wrong multiple times, reconsider your assumptions, and come out the other side
            with something you actually believe in.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 28, marginBottom: 80 }}>
          {LEARNINGS.map((learning, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                padding: 32,
                borderRadius: 20,
                border: "1px solid rgba(255,255,255,0.06)",
                backgroundColor: "#111113",
                display: "flex",
                flexDirection: "column" as const,
                gap: 18,
              }}
            >
              <h3
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "#f2ede8",
                  lineHeight: 1.4,
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontStyle: "italic",
                }}
              >
                {learning.title}
              </h3>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: "rgba(242,237,232,0.52)" }}>
                {learning.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* What's next */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            padding: "48px 56px",
            borderRadius: 24,
            border: "1px solid rgba(122,182,136,0.15)",
            background:
              "linear-gradient(135deg, rgba(122,182,136,0.06) 0%, rgba(9,9,11,0) 60%)",
            display: "flex",
            flexDirection: "column" as const,
            gap: 20,
          }}
        >
          <p className="kicker" style={{ marginBottom: 0 }}>
            What's Next
          </p>
          <h3
            style={{
              fontSize: "1.3rem",
              fontWeight: 600,
              color: "#f2ede8",
              letterSpacing: "-0.01em",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}
          >
            If I took SAGE further.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 24 }}>
            {[
              {
                title: "Community pilot",
                desc: "Launch a small pilot with Ward 7 and 8 residents through trusted local organizations to evaluate how SAGE performs beyond a prototype, especially around trust, repeat use, financial confidence, and movement away from predatory lending.",
              },
              {
                title: "Loan ecosystem design",
                desc: "Design the back-end community trust model that the microloan feature depends on, including how peer accountability scales as the user base grows.",
              },
              {
                title: "Accessibility audit",
                desc: "Conduct a full WCAG accessibility audit and redesign any interaction that fails low-vision or motor-accessibility standards.",
              },
            ].map(({ title, desc }) => (
              <div key={title} style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
                <span
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#7ab688",
                  }}
                >
                  {title}
                </span>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.65, color: "rgba(242,237,232,0.48)" }}>
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

