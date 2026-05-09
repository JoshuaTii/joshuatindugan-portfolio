"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function Overview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="overview" className="!pt-[120px] !pb-[140px]">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="kicker">Project Overview</p>
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
              }}
            >
              A thesis project rooted in
              <br />
              lived experience and real data.
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
              Designed over two semesters at George Washington University as part of my
              undergraduate design thesis.
            </p>
          </div>
        </motion.div>

        {/* Meta cards */}
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 20 }}>
          {/* Role card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              padding: "28px 24px",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.06)",
              backgroundColor: "#111113",
              display: "flex",
              flexDirection: "column" as const,
              gap: 14,
            }}
          >
            <span className="text-xs uppercase" style={{ letterSpacing: "0.1em", color: "#7ab688" }}>
              Role
            </span>
            <div className="flex flex-col" style={{ gap: 8 }}>
              <span style={{ fontSize: "0.95rem", fontWeight: 500, color: "#f2ede8" }}>
                UX Designer
              </span>
              <span style={{ fontSize: "0.95rem", fontWeight: 500, color: "#f2ede8" }}>
                UX Researcher
              </span>
            </div>
          </motion.div>

          {/* Timeline card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.17, ease: [0.22, 1, 0.36, 1] }}
            style={{
              padding: "28px 24px",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.06)",
              backgroundColor: "#111113",
              display: "flex",
              flexDirection: "column" as const,
              gap: 14,
            }}
          >
            <span className="text-xs uppercase" style={{ letterSpacing: "0.1em", color: "#7ab688" }}>
              Timeline
            </span>
            <div className="flex flex-col" style={{ gap: 4 }}>
              <span style={{ fontSize: "0.95rem", fontWeight: 500, color: "#f2ede8" }}>
                Fall 2025 - Spring 2026
              </span>
              <span style={{ fontSize: "0.82rem", color: "rgba(242,237,232,0.5)" }}>
                Two semesters
              </span>
            </div>
          </motion.div>

          {/* Platform card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            style={{
              padding: "28px 24px",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.06)",
              backgroundColor: "#111113",
              display: "flex",
              flexDirection: "column" as const,
              gap: 14,
            }}
          >
            <span className="text-xs uppercase" style={{ letterSpacing: "0.1em", color: "#7ab688" }}>
              Platform
            </span>
            <div className="flex flex-col" style={{ gap: 4 }}>
              <span style={{ fontSize: "0.95rem", fontWeight: 500, color: "#f2ede8" }}>
                Mobile
              </span>
              <span style={{ fontSize: "0.82rem", color: "rgba(242,237,232,0.5)" }}>
                iOS + Android
              </span>
            </div>
          </motion.div>

          {/* Tools card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.31, ease: [0.22, 1, 0.36, 1] }}
            style={{
              padding: "28px 24px",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.06)",
              backgroundColor: "#111113",
              display: "flex",
              flexDirection: "column" as const,
              gap: 14,
            }}
          >
            <span className="text-xs uppercase" style={{ letterSpacing: "0.1em", color: "#7ab688" }}>
              Tools
            </span>
            <div className="flex flex-col" style={{ gap: 4 }}>
              <span style={{ fontSize: "0.95rem", fontWeight: 500, color: "#f2ede8" }}>
                Figma
              </span>
              <span style={{ fontSize: "0.82rem", color: "rgba(242,237,232,0.5)" }}>
                Photoshop · Illustrator
              </span>
            </div>
          </motion.div>
        </div>

        {/* Brief summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            marginTop: 64,
            paddingTop: 64,
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 28,
          }}
          className="md:grid-cols-2"
        >
          <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "rgba(242,237,232,0.65)", maxWidth: 560 }}>
            SAGE started as a question I couldn't stop asking: why does financial technology
            consistently ignore the communities that need it most? Ward 7 and Ward 8 in Washington
            D.C. have some of the lowest banking access rates in the country, despite being minutes
            from the nation's financial center.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "rgba(242,237,232,0.65)", maxWidth: 560 }}>
            I spent two semesters mapping the systems that create financial exclusion, talking to
            residents, and designing a platform that treats trust as infrastructure. SAGE is not
            just an app. It is a design argument: that access and dignity are not mutually exclusive.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

