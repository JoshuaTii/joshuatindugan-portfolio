"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ClickableImage } from "@/app/components/ClickableImage";

const ACCENT = "var(--cs-accent-sf)";
const EASE = [0.22, 1, 0.36, 1] as const;

const RESEARCH_METHODS = [
  {
    method: "Student Workshop",
    participants: "15 participants",
    goal: "Understand the emotional experience of scholarship searching and map pain points in the current process.",
  },
  {
    method: "Student Interviews",
    participants: "15 participants",
    goal: "Hear individual stories about how students currently search, apply, and track scholarship opportunities.",
  },
  {
    method: "Persona Development",
    participants: "Synthesis",
    goal: "Distill research into a primary persona representing the first-generation student most underserved by existing platforms.",
  },
  {
    method: "Competitive Analysis",
    participants: "6 platforms",
    goal: "Audit existing scholarship sites for gaps in matching quality, application friction, and missing support features.",
  },
  {
    method: "Prototype Feedback",
    participants: "10 reviewers",
    goal: "Gather qualitative feedback on the interactive prototype to guide final design decisions before delivery.",
  },
];

const WORKSHOP_PHOTOS = [
  "/intuition/workshop/photo-1.png",
  "/intuition/workshop/photo-2.png",
  "/intuition/workshop/photo-3.png",
  "/intuition/workshop/photo-4.png",
];

const USER_TESTING_OBSERVATIONS = [
  "We need to narrow down what the intention of the social page is",
  "Color choices need to make the website feel inviting",
  "Need to shorten some sections of text",
  "Could add in what it would look like to view another user's profile",
];

export function Research() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="research" style={{ scrollMarginTop: 80, paddingBlock: "120px 140px" }}>
      <div className="section-container" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
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
          Discovery & Research
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--cs-text)",
            lineHeight: 1.1,
            marginBottom: 64,
            maxWidth: 680,
          }}
        >
          Understanding the student experience
          <br className="hidden md:block" />
          through workshops and interviews.
        </motion.h2>

        {/* Research methods table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.07, ease: EASE }}
          style={{ marginBottom: 80 }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase" as const,
              letterSpacing: "0.1em",
              color: "var(--cs-text-faint)",
              marginBottom: 20,
            }}
          >
            Research Methods
          </p>
          <div
            style={{
              borderRadius: 20,
              border: "1px solid var(--cs-border)",
              backgroundColor: "var(--cs-surface)",
              overflow: "hidden",
            }}
          >
            {/* Table header */}
            <div
              className="grid grid-cols-3"
              style={{
                padding: "14px 28px",
                borderBottom: "1px solid var(--cs-border)",
                backgroundColor: "rgba(155,233,49,0.04)",
              }}
            >
              {["Method", "Participants", "Research Goal"].map((h) => (
                <span
                  key={h}
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.1em",
                    color: ACCENT,
                  }}
                >
                  {h}
                </span>
              ))}
            </div>
            {/* Table rows */}
            {RESEARCH_METHODS.map(({ method, participants, goal }, i) => (
              <motion.div
                key={method}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.06, ease: EASE }}
                className="grid grid-cols-3"
                style={{
                  padding: "18px 28px",
                  borderBottom: i < RESEARCH_METHODS.length - 1 ? "1px solid var(--cs-border)" : "none",
                  alignItems: "start",
                }}
              >
                <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--cs-text)", lineHeight: 1.4 }}>
                  {method}
                </span>
                <span style={{ fontSize: "0.82rem", color: "var(--cs-text-muted)", lineHeight: 1.4 }}>
                  {participants}
                </span>
                <span style={{ fontSize: "0.82rem", color: "var(--cs-text-muted)", lineHeight: 1.55 }}>
                  {goal}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Workshop photos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          style={{ marginBottom: 80 }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase" as const,
              letterSpacing: "0.1em",
              color: "var(--cs-text-faint)",
              marginBottom: 20,
            }}
          >
            Student Workshop & Interviews
          </p>
          <div className="grid grid-cols-2" style={{ gap: 16 }}>
            {WORKSHOP_PHOTOS.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.12 + i * 0.07, ease: EASE }}
              >
                <ClickableImage
                  src={src}
                  alt={`Workshop photo ${i + 1}`}
                  style={{ aspectRatio: "4/3", objectFit: "cover" }}
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* User Persona */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          style={{ marginBottom: 48 }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase" as const,
              letterSpacing: "0.1em",
              color: "var(--cs-text-faint)",
              marginBottom: 24,
            }}
          >
            User Persona
          </p>

          <div
            style={{
              padding: "32px 36px",
              borderRadius: 20,
              border: "1px solid var(--cs-border)",
              backgroundColor: "var(--cs-surface)",
              marginBottom: 24,
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 20px", marginBottom: 28 }}>
              <h3
                style={{
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  fontWeight: 700,
                  color: "var(--cs-text)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.1,
                  margin: 0,
                }}
              >
                Rosa Sanchez
              </h3>
              <span
                style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  borderRadius: 6,
                  backgroundColor: ACCENT,
                  color: "var(--badge-on-accent)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                }}
              >
                The Cool Nerd
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3" style={{ gap: 16, marginBottom: 28 }}>
              {[
                { label: "Age",        value: "18" },
                { label: "Status",     value: "High school student" },
                { label: "Location",   value: "Maryland" },
                { label: "Income",     value: "Lower-class" },
                { label: "Employment", value: "Part-time waitress" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    padding: "16px 18px",
                    borderRadius: 12,
                    border: "1px solid var(--cs-border)",
                    backgroundColor: "var(--cs-bg-secondary)",
                  }}
                >
                  <p style={{ fontSize: "0.7rem", textTransform: "uppercase" as const, letterSpacing: "0.1em", color: ACCENT, marginBottom: 6 }}>
                    {label}
                  </p>
                  <p style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--cs-text)", lineHeight: 1.4 }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2" style={{ gap: 16 }}>
              <div>
                <p style={{ fontSize: "0.7rem", textTransform: "uppercase" as const, letterSpacing: "0.1em", color: "var(--cs-text-faint)", marginBottom: 12 }}>
                  Goals
                </p>
                <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column" as const, gap: 8 }}>
                  {[
                    "Find scholarships she actually qualifies for without hours of research",
                    "Fund college without taking on overwhelming debt",
                    "Apply efficiently alongside her part-time work schedule",
                  ].map((g) => (
                    <li key={g} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: "0.875rem", color: "var(--cs-text-muted)", lineHeight: 1.55 }}>
                      <span style={{ color: ACCENT, flexShrink: 0, marginTop: 3 }}>-</span>
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p style={{ fontSize: "0.7rem", textTransform: "uppercase" as const, letterSpacing: "0.1em", color: "var(--cs-text-faint)", marginBottom: 12 }}>
                  Pain Points
                </p>
                <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column" as const, gap: 8 }}>
                  {[
                    "Overwhelmed by scattered scholarship websites with conflicting information",
                    "No guidance as a first-generation college applicant",
                    "Limited time between school and work to search and apply",
                  ].map((p) => (
                    <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: "0.875rem", color: "var(--cs-text-muted)", lineHeight: 1.55 }}>
                      <span style={{ color: "var(--cs-text-faint)", flexShrink: 0, marginTop: 3 }}>-</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <ClickableImage
            src="/intuition/user-persona.png"
            alt="User persona, Rosa Sanchez"
            loading="lazy"
          />
        </motion.div>

        {/* User Testing Observations */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase" as const,
              letterSpacing: "0.1em",
              color: "var(--cs-text-faint)",
              marginBottom: 16,
            }}
          >
            User Testing Observations
          </p>
          <div
            style={{
              padding: "32px 36px",
              borderRadius: 16,
              border: "1px solid var(--cs-border)",
              backgroundColor: "var(--cs-surface)",
            }}
          >
            <p
              style={{
                fontSize: "0.8rem",
                textTransform: "uppercase" as const,
                letterSpacing: "0.1em",
                color: ACCENT,
                fontWeight: 600,
                marginBottom: 20,
              }}
            >
              From prototype testing sessions
            </p>
            <ul
              style={{
                display: "flex",
                flexDirection: "column" as const,
                gap: 14,
                margin: 0,
                paddingLeft: 0,
                listStyle: "none",
              }}
            >
              {USER_TESTING_OBSERVATIONS.map((obs, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.06, ease: EASE }}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    color: "var(--cs-text-muted)",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      backgroundColor: ACCENT,
                      marginTop: 8,
                      flexShrink: 0,
                    }}
                  />
                  {obs}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
