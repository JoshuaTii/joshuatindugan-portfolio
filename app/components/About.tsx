"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const EXPERIENCE = [
  {
    role:   "Interaction Design Student",
    org:    "George Washington University",
    period: "2022 – 2026",
    detail: "B.F.A. in Interaction Design, Minor in Graphic Design. Corcoran School of the Arts and Design. Graduated May 2026.",
  },
  {
    role:   "Web Designer Intern",
    org:    "Mom n Tot Spot, Alexandria VA",
    period: "2023",
    detail: "Redesigned the website to make booking easily accessible to users while improving the overall visual appearance.",
  },
  {
    role:   "Document Design Intern",
    org:    "Joy Riot, Advertisement Agency",
    period: "2023",
    detail: "Designed presentation templates and updated content for a more impactful, editable, and streamlined presentation.",
  },
  {
    role:   "Coding and Design Intern",
    org:    "Apple Coding Camp, MBSYEP D.C.",
    period: "2020",
    detail: "Completed programming curriculum and developed a prototype interior design application as a final project deliverable.",
  },
];

export function About() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="about"
      style={{
        position: "relative", zIndex: 1,
        paddingBlock: "100px 120px",
        background: "var(--bg-secondary)", /* lighter dark panel */
        transition: "background 300ms ease",
      }}
    >
      <div ref={ref} className="section-container grid md:grid-cols-2" style={{ gap: 72, alignItems: "start" }}>

        {/* Left — bio */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
          style={{ display: "flex", flexDirection: "column", gap: 22 }}
        >
          <p style={{
            fontFamily: "var(--font-sans, 'Montserrat', sans-serif)",
            fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.2em",
            textTransform: "uppercase", color: "var(--text-3)",
          }}>
            ABOUT
          </p>
          <h2 style={{
            fontFamily: "var(--font-hand, 'Caveat', cursive)",
            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
            fontWeight: 700, color: "var(--green)", lineHeight: 1.05,
          }}>
            Who is Joshua?
          </h2>

          <p style={{ fontFamily: "var(--font-sans, 'Montserrat', sans-serif)", fontSize: "0.875rem", lineHeight: 1.78, color: "var(--text-2)" }}>
            My name is Joshua Uba Tindugan, a UX/UI designer shaped by art, curiosity, and the belief that design should feel human. Growing up on the small island of Camiguin in the Philippines, there was little access to technology, but drawing became my first way of exploring ideas, stories, and imagination. After moving to the United States, I discovered how art and technology could work together, which led me to pursue Interaction Design at George Washington University.
          </p>
          <p style={{ fontFamily: "var(--font-sans, 'Montserrat', sans-serif)", fontSize: "0.875rem", lineHeight: 1.78, color: "var(--text-2)" }}>
            Through my time at GWU, I have been able to learn from design professors, receive feedback from established designers, and grow through projects that challenged me to think beyond the screen. My goal as a designer is to create transparent, accessible, and immersive experiences that feel simple, intuitive, and meaningful.
          </p>

          {/* Quote — same size as body text, subtle emphasis via font weight */}
          <p style={{
            fontFamily: "var(--font-sans, 'Montserrat', sans-serif)",
            fontSize: "0.875rem",
            fontWeight: 600,
            color: "var(--text-2)",
            lineHeight: 1.78,
            marginTop: 4,
          }}>
            UI/UX does not only live on screens. It lives in the moments where people feel seen, guided, and understood.
          </p>
        </motion.div>

        {/* Right — experience */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.12, ease: EASE }}
          style={{ display: "flex", flexDirection: "column", gap: 28 }}
        >
          <p style={{
            fontFamily: "var(--font-sans, 'Montserrat', sans-serif)",
            fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.2em",
            textTransform: "uppercase", color: "var(--text-3)",
          }}>
            | IMPACTFUL EXPERIENCE
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {EXPERIENCE.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.18 + i * 0.08, ease: EASE }}
                style={{
                  borderLeft: "2px solid var(--card-border)",
                  paddingLeft: 18,
                  display: "flex", flexDirection: "column", gap: 4,
                  transition: "border-color 250ms ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--green)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--card-border)"; }}
              >
                <p style={{ fontFamily: "var(--font-sans, 'Montserrat', sans-serif)", fontSize: "0.875rem", fontWeight: 700, color: "var(--text)", lineHeight: 1.2 }}>
                  {item.role}
                </p>
                <p style={{ fontFamily: "var(--font-sans, 'Montserrat', sans-serif)", fontSize: "0.75rem", color: "var(--green)", fontWeight: 600 }}>
                  {item.org}
                </p>
                <p style={{ fontFamily: "var(--font-sans, 'Montserrat', sans-serif)", fontSize: "0.68rem", color: "var(--text-3)" }}>
                  {item.period}
                </p>
                <p style={{ fontFamily: "var(--font-sans, 'Montserrat', sans-serif)", fontSize: "0.78rem", lineHeight: 1.65, color: "var(--text-2)", marginTop: 4 }}>
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
