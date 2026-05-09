"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ACCENT = "#60A5FA";

export function Context() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="context" style={{ scrollMarginTop: 80, paddingBlock: "120px 140px", backgroundColor: "#0d0d10" }}>
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 72 }}
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
            Context
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#f2ede8",
              lineHeight: 1.1,
              maxWidth: 640,
            }}
          >
            A transit system that exists, but feels unreachable.
          </h2>
        </motion.div>

        {/* Problem + Solution cards */}
        <div className="grid md:grid-cols-2" style={{ gap: 24 }}>
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              padding: "40px 36px",
              borderRadius: 20,
              border: "1px solid rgba(255,255,255,0.06)",
              backgroundColor: "#111113",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 36,
                height: 36,
                borderRadius: 10,
                backgroundColor: "rgba(96,165,250,0.1)",
                marginBottom: 20,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke={ACCENT} strokeWidth="1.5" />
                <path d="M8 5v4M8 11v.5" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#f2ede8",
                marginBottom: 16,
                letterSpacing: "-0.01em",
              }}
            >
              The Problem
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "rgba(242,237,232,0.6)" }}>
              Students at George Washington University face real friction when navigating campus
              shuttle transportation. Shuttle arrival times are unclear, stop locations lack context,
              and route information is difficult to access quickly.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "rgba(242,237,232,0.6)", marginTop: 12 }}>
              When students can't trust transit information, they default to rideshares — adding cost,
              stress, and environmental impact to their daily routine. The underlying problem isn't
              shuttle availability. It's information confidence.
            </p>

            {/* HMW */}
            <div
              style={{
                marginTop: 28,
                padding: "16px 20px",
                borderRadius: 12,
                backgroundColor: "rgba(96,165,250,0.06)",
                borderLeft: `3px solid ${ACCENT}`,
              }}
            >
              <p
                style={{
                  fontSize: "0.78rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: ACCENT,
                  marginBottom: 6,
                  fontWeight: 500,
                }}
              >
                Design Challenge
              </p>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "rgba(242,237,232,0.75)", fontStyle: "italic" }}>
                How might we give GWU students enough real-time information to confidently choose the shuttle over a rideshare?
              </p>
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              padding: "40px 36px",
              borderRadius: 20,
              border: "1px solid rgba(255,255,255,0.06)",
              backgroundColor: "#111113",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 36,
                height: 36,
                borderRadius: 10,
                backgroundColor: "rgba(96,165,250,0.1)",
                marginBottom: 20,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8.5L6 11.5L13 4.5" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#f2ede8",
                marginBottom: 16,
                letterSpacing: "-0.01em",
              }}
            >
              The Solution
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "rgba(242,237,232,0.6)" }}>
              GW Ride is a mobile app centered on giving students the information confidence to
              choose the shuttle. By surfacing live tracking, clear ETAs, route context, and stop
              detail, the app makes the shuttle feel reliable — even before a student leaves their building.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "rgba(242,237,232,0.6)", marginTop: 12 }}>
              The design focuses on speed and scannability: a student standing outside with ten minutes
              before class should be able to open the app, find the nearest shuttle, and make a
              decision in under fifteen seconds.
            </p>

            {/* Key features preview */}
            <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Live shuttle location on campus map",
                "Real-time ETA per stop",
                "Route cards with stop context",
                "Explore view for discovering routes",
              ].map((feat) => (
                <div key={feat} className="flex items-center" style={{ gap: 10 }}>
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      backgroundColor: ACCENT,
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: "0.88rem", color: "rgba(242,237,232,0.6)" }}>{feat}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Supporting mockup */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginTop: 56, display: "flex", justifyContent: "center" }}
        >
          <div style={{ position: "relative", display: "inline-flex", gap: 28 }}>
            {["/gwride/final-main.png", "/gwride/final-main-2.png", "/gwride/final-main-3.png"].map(
              (src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`GW Ride screen ${i + 1}`}
                  style={{
                    width: "clamp(180px, 28vw, 300px)",
                    objectFit: "contain",
                    borderRadius: 24,
                    filter: "drop-shadow(0 20px 48px rgba(0,0,0,0.55))",
                    transform: i === 1 ? "translateY(-16px)" : "none",
                  }}
                />
              )
            )}
          </div>
        </motion.div>
        <p
          style={{
            textAlign: "center",
            marginTop: 16,
            fontSize: "0.78rem",
            color: "rgba(242,237,232,0.35)",
            letterSpacing: "0.04em",
          }}
        >
          Final design — main tracking and route views
        </p>
      </div>
    </section>
  );
}
