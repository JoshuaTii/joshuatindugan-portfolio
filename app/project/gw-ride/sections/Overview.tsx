"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ACCENT = "#60A5FA";

const META_CARDS = [
  {
    label: "Role",
    items: ["UX Designer", "UX Researcher"],
  },
  {
    label: "Timeline",
    items: ["Spring 2024"],
  },
  {
    label: "Team",
    items: ["Collaborative Design Project"],
  },
  {
    label: "Tools",
    items: ["Figma", "Photoshop", "Illustrator"],
  },
  {
    label: "Deliverables",
    items: ["Mobile App Concept", "Research · Wireframes · Hi-Fi"],
  },
];

export function Overview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="overview" style={{ scrollMarginTop: 80, paddingBlock: "120px 140px" }}>
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            style={{
              display: "inline-block",
              fontSize: "0.75rem",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: ACCENT,
              marginBottom: 16,
            }}
          >
            Project Overview
          </p>
          <div
            className="flex flex-col md:flex-row md:items-end md:justify-between"
            style={{ gap: "24px 64px", marginBottom: 72 }}
          >
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "#f2ede8",
                lineHeight: 1.1,
              }}
            >
              Rethinking how GW students
              <br />
              move across campus.
            </h2>
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.65,
                color: "rgba(242,237,232,0.45)",
                maxWidth: 380,
                textAlign: "right" as const,
              }}
            >
              A semester-long UX project at George Washington University, exploring the transit
              experience of students who rely on campus shuttles every day.
            </p>
          </div>
        </motion.div>

        {/* Meta cards — equal item hierarchy */}
        <div className="grid grid-cols-2 md:grid-cols-5" style={{ gap: 16 }}>
          {META_CARDS.map(({ label, items }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
              style={{
                padding: "24px 20px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.06)",
                backgroundColor: "#111113",
                display: "flex",
                flexDirection: "column" as const,
                gap: 12,
              }}
            >
              <span
                className="text-xs uppercase"
                style={{ letterSpacing: "0.1em", color: ACCENT }}
              >
                {label}
              </span>
              <div className="flex flex-col" style={{ gap: 6 }}>
                {items.map((item) => (
                  <span
                    key={item}
                    style={{ fontSize: "0.88rem", fontWeight: 500, color: "#f2ede8", lineHeight: 1.4 }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            marginTop: 64,
            paddingTop: 64,
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "grid",
            gap: 28,
          }}
          className="md:grid-cols-2"
        >
          <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "rgba(242,237,232,0.65)", maxWidth: 560 }}>
            GW Ride started with a simple observation: GWU has a shuttle network, but most students
            don't use it. Not because the shuttles aren't there, but because students can't trust
            the information available to them. Unclear ETAs, confusing routes, and zero real-time
            visibility make the default choice a rideshare.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "rgba(242,237,232,0.65)", maxWidth: 560 }}>
            By centering on live tracking, route clarity, and instant decision support, GW Ride is built
            around one question: what&apos;s the minimum information a student needs to confidently choose
            the shuttle over a rideshare? The answer shaped every screen.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
