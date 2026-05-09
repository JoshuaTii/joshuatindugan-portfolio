"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const ACCENT = "#60A5FA";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden !pt-0 !pb-0"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(96,165,250,0.07) 0%, transparent 70%)",
        }}
      />

      <div
        className="section-container flex-1 flex flex-col"
        style={{ paddingTop: 120, paddingBottom: 80 }}
      >
        <div className="grid md:grid-cols-2 flex-1" style={{ gap: "48px 80px", alignItems: "center" }}>
          {/* Left — text */}
          <div className="flex flex-col" style={{ gap: 0 }}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
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
              UX Case Study
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontSize: "clamp(3.5rem, 8vw, 6rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1,
                color: "#f2ede8",
                marginBottom: 20,
              }}
            >
              GW Ride
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
                fontWeight: 400,
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontStyle: "italic",
                color: "rgba(242,237,232,0.6)",
                letterSpacing: "0.01em",
                lineHeight: 1.35,
                marginBottom: 36,
              }}
            >
              Designing a clearer, more reliable campus shuttle experience for GW students
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "rgba(242,237,232,0.6)",
                maxWidth: 480,
                marginBottom: 48,
              }}
            >
              A mobile app concept designed to reduce the uncertainty students face around shuttle timing,
              route visibility, and stop information — so navigating campus feels confident and low-stress.
            </motion.p>

            {/* Meta row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap"
              style={{ gap: "16px 36px" }}
            >
              {[
                { label: "Role", value: "UX Designer + Researcher" },
                { label: "Timeline", value: "Spring 2026" },
                { label: "Platform", value: "Mobile — iOS" },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col" style={{ gap: 5 }}>
                  <span
                    className="text-xs uppercase"
                    style={{ letterSpacing: "0.1em", color: "rgba(242,237,232,0.4)" }}
                  >
                    {label}
                  </span>
                  <span style={{ fontSize: "0.9rem", color: "rgba(242,237,232,0.85)", fontWeight: 500 }}>
                    {value}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — hero mockup cluster */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center"
            style={{ position: "relative", minHeight: 480 }}
          >
            {/* Glow behind cluster */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(96,165,250,0.12) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />

            {/* Back screen — slightly left */}
            <motion.img
              src="/gwride/final-main.png"
              alt="GW Ride main tracking screen"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "absolute",
                left: "0%",
                top: "50%",
                transform: "translateY(-50%) rotate(-4deg)",
                width: "46%",
                maxWidth: 200,
                objectFit: "contain",
                filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.5))",
                zIndex: 1,
                borderRadius: 20,
              }}
            />

            {/* Front center screen — main */}
            <img
              src="/gwride/final-opening.png"
              alt="GW Ride opening screen"
              style={{
                position: "relative",
                zIndex: 2,
                width: "54%",
                maxWidth: 240,
                objectFit: "contain",
                filter: "drop-shadow(0 32px 64px rgba(0,0,0,0.6))",
                borderRadius: 24,
              }}
            />

            {/* Right screen */}
            <motion.img
              src="/gwride/final-explore.png"
              alt="GW Ride explore screen"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "absolute",
                right: "0%",
                top: "50%",
                transform: "translateY(-50%) rotate(4deg)",
                width: "46%",
                maxWidth: 200,
                objectFit: "contain",
                filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.5))",
                zIndex: 1,
                borderRadius: 20,
              }}
            />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col items-center"
          style={{ gap: 8, paddingTop: 40 }}
        >
          <span
            className="text-xs uppercase"
            style={{ letterSpacing: "0.1em", color: "rgba(242,237,232,0.25)" }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={14} style={{ color: "rgba(242,237,232,0.25)" }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
