"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ACCENT = "#f59e0b";

const FEATURES = [
  {
    number: "01",
    title: "Smart Scholarship Matching",
    body: "Students build a profile once — the platform uses that data to surface relevant scholarships instantly, filtered by eligibility, deadline, and category. No more manual hunting across dozens of sites.",
    screen: "/intuition/final/Main.png",
    screenAlt: "Smart matching — main scholarship feed",
  },
  {
    number: "02",
    title: "Unified Application Form",
    body: "One form applies across multiple scholarships. Shared data pre-fills repeated fields so students spend less time on paperwork and more time on the applications that matter.",
    screen: "/intuition/final/Explore.png",
    screenAlt: "Unified application — explore view",
  },
  {
    number: "03",
    title: "Progress Tracking & Deadlines",
    body: "A central dashboard tracks every in-progress application, surfaces upcoming deadlines, and sends reminders. Students never lose track of where they are in the process.",
    screen: "/intuition/final/Inbox.png",
    screenAlt: "Progress tracking — inbox view",
  },
  {
    number: "04",
    title: "Social Scholarship Community",
    body: "Students share scholarship wins, tips, and experiences. Social proof from peers who have successfully applied makes the process feel achievable — especially for first-generation students.",
    screen: "/intuition/final/Chat.png",
    screenAlt: "Social community — chat view",
  },
];

export function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="features"
      style={{
        scrollMarginTop: 80,
        paddingBlock: "120px 140px",
      }}
    >
      <div className="section-container" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "0.75rem",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: ACCENT,
            marginBottom: 16,
          }}
        >
          Key Features
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#f2ede8",
            lineHeight: 1.1,
            marginBottom: 80,
            maxWidth: 680,
          }}
        >
          One platform for every step
          <br className="hidden md:block" />
          of the scholarship journey.
        </motion.h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
          {FEATURES.map(({ number, title, body, screen, screenAlt }, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.08 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="grid md:grid-cols-2"
                style={{ gap: "40px 80px", alignItems: "center" }}
              >
                {/* Text — alternates left/right */}
                <div
                  style={{
                    order: isEven ? 0 : 1,
                    display: "flex",
                    flexDirection: "column" as const,
                    gap: 20,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        color: ACCENT,
                        fontWeight: 600,
                      }}
                    >
                      Feature {number}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
                      fontWeight: 700,
                      color: "#f2ede8",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.15,
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: 1.8,
                      color: "rgba(242,237,232,0.55)",
                      maxWidth: 440,
                    }}
                  >
                    {body}
                  </p>
                </div>

                {/* Screen image */}
                <div
                  style={{
                    order: isEven ? 1 : 0,
                    borderRadius: 16,
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.06)",
                    backgroundColor: "#111113",
                  }}
                >
                  <img
                    src={screen}
                    alt={screenAlt}
                    style={{
                      width: "100%",
                      display: "block",
                      objectFit: "contain",
                      maxHeight: 440,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
