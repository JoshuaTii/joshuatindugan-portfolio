"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ACCENT = "var(--cs-accent-it)";
const EASE = [0.22, 1, 0.36, 1] as const;

const VALIDATION_CHANGES = [
  "The social feature was refined so it connected more clearly to peer guidance and scholarship confidence.",
  "Text-heavy sections were shortened to make the experience easier to scan.",
  "The student profile became more central because it powers matching and reusable application information.",
  "Scholarship cards were structured to make deadlines, award amounts, and eligibility easier to compare.",
  "The prototype connected onboarding, discovery, applying, and peer support into a clearer end-to-end flow.",
];

const LEARNINGS = [
  {
    title: "Information Needs Structure",
    body: "Students do not simply need more scholarships. They need scholarship information organized in a way that helps them decide what is worth applying for.",
  },
  {
    title: "Reusable Data Reduces Friction",
    body: "The profile became more than an account page. It became the engine that supports matching, applying, and reducing repeated work across the scholarship process.",
  },
  {
    title: "Peer Support Needs Purpose",
    body: "The social feature became stronger once it was tied directly to scholarship confidence, guidance, and shared experience rather than general networking.",
  },
];

const NEXT_STEPS = [
  "Test the platform with junior and senior high school first-generation students.",
  "Study how early college-planning students compare scholarship opportunities.",
  "Refine filters around eligibility, deadline, award amount, and education level.",
  "Improve guidance for students applying for scholarships for the first time.",
  "Expand support content around essays, deadlines, and financial aid preparation.",
];

export function Reflection() {
  const ref = useRef(null);
  const reflectRef = useRef(null);
  const nextRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reflectInView = useInView(reflectRef, { once: true, margin: "-80px" });
  const nextInView = useInView(nextRef, { once: true, margin: "-80px" });

  return (
    <section
      id="reflection"
      style={{
        scrollMarginTop: 80,
        paddingBlock: "120px 140px",
        backgroundColor: "var(--cs-bg-secondary)",
      }}
    >
      <div className="section-container">
        {/* Validation */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ marginBottom: 48 }}
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
            Validation / Feedback
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
            Feedback that shaped the final experience.
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--cs-text-muted)", maxWidth: 620 }}>
            Because this was a collaborative student project, validation focused on qualitative
            feedback rather than business or shipped metrics.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          style={{ marginBottom: 96 }}
        >
          <h3
            style={{
              fontSize: "0.88rem",
              fontWeight: 600,
              color: "var(--cs-text-muted)",
              textTransform: "uppercase" as const,
              letterSpacing: "0.1em",
              marginBottom: 20,
            }}
          >
            What Changed After Feedback
          </h3>
          <div
            style={{
              padding: "32px 36px",
              borderRadius: 20,
              border: "1px solid var(--cs-border)",
              backgroundColor: "var(--cs-surface)",
              display: "flex",
              flexDirection: "column" as const,
              gap: 16,
            }}
          >
            {VALIDATION_CHANGES.map((change, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.06 * i, ease: EASE }}
                style={{ display: "flex", gap: 16, alignItems: "flex-start" }}
              >
                <span
                  style={{
                    minWidth: 24,
                    height: 24,
                    borderRadius: "50%",
                    backgroundColor: "var(--accent-dim)",
                    border: "1px solid var(--accent-border-strong)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    color: ACCENT,
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                >
                  {i + 1}
                </span>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.65, color: "var(--cs-text-muted)" }}>
                  {change}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Reflection */}
        <div ref={reflectRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={reflectInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
            style={{ marginBottom: 32 }}
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
              Reflection
            </p>
            <h3
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--cs-text)",
                lineHeight: 1.2,
                maxWidth: 600,
                marginBottom: 20,
              }}
            >
              What I Learned
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--cs-text-muted)", maxWidth: 620 }}>
              This project taught me that the scholarship search is not only a discovery problem.
              It is also a structure problem. Students may have access to opportunities, but they
              need a clearer way to filter, track, and act on them without wasting time they cannot
              afford to lose.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-3"
            style={{ gap: 16, marginBottom: 56 }}
          >
            {LEARNINGS.map(({ title, body }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={reflectInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.08 * i, ease: EASE }}
                style={{
                  padding: "24px 24px",
                  borderRadius: 14,
                  border: "1px solid var(--cs-border)",
                  backgroundColor: "var(--cs-surface)",
                }}
              >
                <h4
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    color: "var(--cs-text)",
                    letterSpacing: "-0.01em",
                    marginBottom: 10,
                    lineHeight: 1.3,
                  }}
                >
                  {title}
                </h4>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "var(--cs-text-muted)" }}>
                  {body}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={reflectInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            style={{
              display: "grid",
              gap: 28,
              paddingTop: 40,
              borderTop: "1px solid var(--cs-border)",
              marginBottom: 96,
            }}
            className="md:grid-cols-2"
          >
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--cs-text-muted)", maxWidth: 560 }}>
              The scholarship search is not a feature problem. It is a cognitive load problem.
              Students already have access to scholarships. What they do not have is a way to
              filter, track, and act on that information without it consuming time they cannot
              spare. That framing kept the design focused on structure and clarity rather than
              adding more discovery surfaces.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--cs-text-muted)", maxWidth: 560 }}>
              The biggest design lesson was that students do not simply need more information.
              They need information structured in a way that helps them act. Working
              collaboratively also meant learning to defend design decisions in critique:
              articulating not just what we built, but why a specific structural choice serves
              the student's actual moment of need.
            </p>
          </motion.div>
        </div>

        {/* Next Steps */}
        <div ref={nextRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={nextInView ? { opacity: 1, y: 0 } : {}}
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
              Next Steps
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
              If development were to continue.
            </h3>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--cs-text-muted)", maxWidth: 600, marginBottom: 24 }}>
              If I continued developing InTuition, I would expand testing beyond college students
              and focus more directly on junior and senior high school first-generation students
              preparing to fund their higher education.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={nextInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            style={{
              padding: "32px 36px",
              borderRadius: 20,
              border: "1px solid var(--cs-border)",
              backgroundColor: "var(--cs-surface)",
              display: "flex",
              flexDirection: "column" as const,
              gap: 16,
            }}
          >
            {NEXT_STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={nextInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.06 * i, ease: EASE }}
                style={{ display: "flex", gap: 16, alignItems: "flex-start" }}
              >
                <span
                  style={{
                    minWidth: 24,
                    height: 24,
                    borderRadius: "50%",
                    backgroundColor: "var(--accent-dim)",
                    border: "1px solid var(--accent-border-strong)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    color: ACCENT,
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                >
                  {i + 1}
                </span>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.65, color: "var(--cs-text-muted)" }}>
                  {step}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
