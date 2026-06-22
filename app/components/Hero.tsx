"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="hero"
      style={{
        position: "relative", zIndex: 1,
        minHeight: "calc(100vh - 60px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 0,
      }}
    >
      <div
        className="section-container flex flex-col items-center text-center"
        style={{ paddingTop: 116, paddingBottom: 80 }}
      >
        {/* Name — "Joshua" white, "Uba" white, "Tindugan" green */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.18, ease: EASE }}
          style={{ marginBottom: 28 }}
        >
          <h1
            style={{
              fontFamily: "var(--font-hand, 'Caveat', cursive)",
              fontSize: "clamp(4.5rem, 12vw, 10rem)",
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.01em",
            }}
          >
            <span style={{ color: "var(--text)" }}>Joshua</span>
            <br />
            <span style={{ color: "var(--text)" }}>Uba </span><span style={{ color: "var(--green)" }}>Tindugan</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.42, ease: EASE }}
          style={{
            fontFamily: "var(--font-sans, 'Montserrat', sans-serif)",
            fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)",
            fontWeight: 400,
            lineHeight: 1.7,
            color: "var(--text-2)",
            maxWidth: 560,
            marginBottom: 44,
          }}
        >
          A UX/UI designer focused on designing clear, accessible and visually thoughtful
          products that help people move through digital experiences with less friction.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.58, ease: EASE }}
          style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", justifyContent: "center" }}
        >
          <button
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              background: "var(--green-btn)", color: "var(--btn-text)",
              fontFamily: "var(--font-sans, 'Montserrat', sans-serif)",
              fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
              border: "none", borderRadius: 100, cursor: "pointer",
              minHeight: 50, padding: "14px 36px",
              transition: "opacity 220ms ease, transform 200ms ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
          >
            VIEW PROJECTS
          </button>
          <button
            onClick={() => document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              background: "transparent", color: "var(--text)",
              fontFamily: "var(--font-sans, 'Montserrat', sans-serif)",
              fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase",
              border: "1px solid var(--text-3)", borderRadius: 100, cursor: "pointer",
              minHeight: 50, padding: "14px 36px",
              transition: "border-color 220ms ease, color 220ms ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--green)"; (e.currentTarget as HTMLElement).style.color = "var(--green)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--text-3)"; (e.currentTarget as HTMLElement).style.color = "var(--text)"; }}
          >
            GET IN TOUCH
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
        style={{
          position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
          background: "none", border: "none", cursor: "pointer",
          color: "var(--text-3)", transition: "color 220ms ease",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-2)")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-3)")}
      >
        <span style={{ fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "var(--font-sans, 'Montserrat', sans-serif)" }}>Scroll</span>
        <motion.div animate={prefersReduced ? {} : { y: [0, 5, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown size={14} strokeWidth={1.5} />
        </motion.div>
      </motion.button>
    </section>
  );
}
