"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ACCENT = "var(--cs-accent-sf)";
const EASE = [0.22, 1, 0.36, 1] as const;

const INSIGHTS = [
  {
    number: "01",
    title: "Overwhelm Blocks Action",
    body: "Students described the scholarship search as emotionally draining. Not from lack of effort, but from the sheer volume of disconnected information to track without knowing where to start.",
    response:
      "InTuition organizes scholarships through profile-based matching, smart filters, and clear application states so students can focus on relevant opportunities instead of managing the search itself.",
  },
  {
    number: "02",
    title: "First-Generation Students Need More Guidance",
    body: "Participants who were first-generation college students reported feeling especially lost. They lacked the institutional knowledge that peers with more connected families take for granted.",
    response:
      "The platform makes eligibility, deadlines, and next steps easier to understand so students are not left guessing about whether they qualify or what to do next.",
  },
  {
    number: "03",
    title: "Repeated Forms Create Drop-Off",
    body: "Most participants mentioned abandoning applications mid-way because they had already submitted the same information elsewhere and did not want to fill it out again.",
    response:
      "The reusable student profile stores key information once and applies it across multiple scholarship opportunities, reducing the repetitive work that makes people give up.",
  },
  {
    number: "04",
    title: "Social Proof Builds Confidence",
    body: "Students trusted scholarship information more when it came from peers who had successfully applied. Hearing real stories made the process feel more achievable and less intimidating.",
    response:
      "Peer profiles and community features connect students to others who have applied, making the scholarship journey feel less isolated and the outcomes feel more realistic.",
  },
];

export function Insights() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      style={{
        scrollMarginTop: 80,
        paddingBlock: "80px 120px",
        backgroundColor: "var(--cs-bg-secondary)",
      }}
    >
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ marginBottom: 56 }}
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
            Key Insights
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--cs-text)",
              lineHeight: 1.1,
              maxWidth: 640,
            }}
          >
            Four patterns that shaped the design direction.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 16 }}>
          {INSIGHTS.map(({ number, title, body, response }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 * i, ease: EASE }}
              style={{
                padding: "32px 28px",
                borderRadius: 16,
                border: "1px solid var(--cs-border)",
                backgroundColor: "var(--cs-surface)",
                display: "flex",
                flexDirection: "column" as const,
                gap: 16,
              }}
            >
              <span
                style={{
                  fontSize: "0.7rem",
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.1em",
                  color: ACCENT,
                  fontWeight: 600,
                }}
              >
                {number}
              </span>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--cs-text)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.3,
                }}
              >
                {title}
              </h3>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: "var(--cs-text-muted)" }}>
                {body}
              </p>
              <div
                style={{
                  paddingTop: 16,
                  borderTop: "1px solid var(--cs-border)",
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: 6,
                }}
              >
                <span
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.1em",
                    color: ACCENT,
                  }}
                >
                  Design Response
                </span>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.65, color: "var(--cs-text-muted)" }}>
                  {response}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
