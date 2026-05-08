"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PRINCIPLES = [
  {
    number: "01",
    title: "Simplicity over sophistication",
    body: "Every screen should work for someone using a phone for the first time. We removed every element that did not serve a direct user need.",
  },
  {
    number: "02",
    title: "Community over individualism",
    body: "Financial tools have historically isolated users. SAGE centers peer connection, shared knowledge, and collective progress at every touchpoint.",
  },
  {
    number: "03",
    title: "Transparency over complexity",
    body: "No hidden fees. No opaque processes. Every action in SAGE explains itself â€” because clarity is respect, and these users have been lied to before.",
  },
  {
    number: "04",
    title: "Progress over perfection",
    body: "Small wins compound. SAGE celebrates incremental financial progress rather than setting distant, abstract goals that feel impossible from the start.",
  },
];

export function Principles() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="principles" className="!pt-[120px] !pb-[140px]">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 72 }}
        >
          <p className="kicker">Design Principles</p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#f2ede8",
              maxWidth: 580,
            }}
          >
            The values every screen had to answer to.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 24 }}>
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{
                padding: "32px 36px",
                borderRadius: 20,
                border: "1px solid rgba(255,255,255,0.06)",
                backgroundColor: "#111113",
                display: "flex",
                flexDirection: "column" as const,
                gap: 16,
                cursor: "default",
                transition: "border-color 300ms ease, box-shadow 300ms ease, background-color 300ms ease",
              }}
              whileHover={{
                borderColor: "rgba(122,182,136,0.35)",
                boxShadow: "0 0 32px rgba(122,182,136,0.08)",
                backgroundColor: "rgba(122,182,136,0.04)",
              }}
            >
              <div className="flex items-baseline" style={{ gap: 16 }}>
                <span
                  style={{
                    fontSize: "clamp(1.1rem, 1.4vw, 1.5rem)",
                    fontWeight: 700,
                    color: "rgba(122,182,136,0.6)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    flexShrink: 0,
                  }}
                >
                  {p.number}
                </span>
                <h3
                  style={{
                    fontSize: "clamp(1.1rem, 1.4vw, 1.5rem)",
                    fontWeight: 600,
                    color: "#f2ede8",
                    lineHeight: 1.2,
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                  }}
                >
                  {p.title}
                </h3>
              </div>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(242,237,232,0.5)" }}>
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

