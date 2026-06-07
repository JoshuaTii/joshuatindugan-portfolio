"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ─── Prototype data ──────────────────────────────────────────────────────── */
const PROTOTYPES = [
  {
    id: "sage",
    title: "SAGE",
    category: "Fintech · Product Design",
    description: "An equitable financial access platform for underserved D.C. neighborhoods. Transparent loan management, budgeting tools, and guided financial learning built around community trust.",
    device: "phone" as const,
    figmaUrl: "https://www.figma.com/proto/TPDwOcOuNh3hqxroJa6ycm/Sage?node-id=922-2083&p=f&viewport=439%2C-3800%2C0.27&t=7exmeErv2KqeWoET-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=922%3A1952&page-id=0%3A1",
    projectPath: "/project/sage-financial",
  },
  {
    id: "sage-editorial",
    title: "SAGE EDITORIAL",
    category: "Editorial Design · Web",
    description: "A community-centered publication extending the SAGE platform with local stories, financial guides, and resource access for Ward 7 and 8 residents of Washington D.C.",
    device: "macbook" as const,
    figmaUrl: "https://www.figma.com/proto/0ymuy0VQlIhUR7PuUn7OwG/Editorial-Sage?node-id=1-574&p=f&viewport=-7613%2C-35%2C0.57&t=6LM5l5L7MS771u0o-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A574&page-id=0%3A1",
    projectPath: "/project/sage-editorial",
  },
  {
    id: "gw-ride",
    title: "GW RIDE",
    category: "Mobile Design · Transit",
    description: "Real-time shuttle tracking for GWU campuses with live locations, crowd-level indicators, and estimated arrival times to make the daily commute less of a gamble.",
    device: "phone" as const,
    figmaUrl: "https://www.figma.com/proto/ezhpWQgVx2L0xAo2q8JGKj/GW-Ride?node-id=2251-993&p=f&viewport=-8975%2C2581%2C0.57&t=sh8Qx16eKDjNu1a0-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2251%3A993&page-id=0%3A1",
    projectPath: "/project/gw-ride",
  },
  {
    id: "intuition",
    title: "INTUITION",
    category: "Product Design · EdTech",
    description: "A scholarship discovery platform that matches students to funding through smart filtering and a unified application, removing friction from a broken, fragmented process.",
    device: "macbook" as const,
    figmaUrl: "https://www.figma.com/proto/ZFpuwcRXS8LhFZibl83SUQ/InTuition-2.0?page-id=0%3A1&node-id=1-233&viewport=-1406%2C-374%2C0.33&t=ehlpwFrXPa0p9rhf-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A233",
    projectPath: "/project/intuition",
  },
];

/* ─── Phone mockup ────────────────────────────────────────────────────────── */
function PhoneMockup({ src }: { src: string }) {
  const FRAME_W = 280;
  const FRAME_H = 560;
  const SCREEN_W = FRAME_W - 20;
  const SCREEN_H = FRAME_H - 60;

  return (
    <div
      style={{
        position: "relative",
        width: FRAME_W, height: FRAME_H,
        borderRadius: 40,
        background: "#111111",
        border: "2px solid #2a2a2a",
        boxShadow: "0 24px 60px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.06)",
        flexShrink: 0,
        overflow: "hidden",
      }}
    >
      {/* Notch */}
      <div style={{ position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)", width: 80, height: 22, background: "#111111", borderRadius: 11, zIndex: 5 }} />
      {/* Screen */}
      <div style={{ position: "absolute", top: 10, left: 10, right: 10, bottom: 10, borderRadius: 32, overflow: "hidden", background: "#1a1a1a" }}>
        <iframe
          src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(src)}`}
          style={{ width: "100%", height: "100%", border: "none", display: "block" }}
          allowFullScreen
          loading="lazy"
          title="Figma prototype"
        />
      </div>
      {/* Home bar */}
      <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", width: 60, height: 4, background: "rgba(255,255,255,0.25)", borderRadius: 2, zIndex: 5 }} />
    </div>
  );
}

/* ─── MacBook mockup ──────────────────────────────────────────────────────── */
function MacbookMockup({ src }: { src: string }) {
  return (
    <div style={{ flexShrink: 0, width: "min(540px, 100%)" }}>
      {/* Screen */}
      <div
        style={{
          position: "relative",
          background: "#1a1a1a",
          border: "2px solid #2a2a2a",
          borderRadius: "14px 14px 0 0",
          overflow: "hidden",
          boxShadow: "0 -4px 24px rgba(0,0,0,0.3)",
          aspectRatio: "16 / 10",
        }}
      >
        {/* Menu bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 22, background: "#111", zIndex: 4, display: "flex", alignItems: "center", gap: 6, paddingLeft: 10 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f57" }} />
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#febc2e" }} />
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#28c840" }} />
        </div>
        {/* Iframe */}
        <div style={{ position: "absolute", top: 22, left: 0, right: 0, bottom: 0, overflow: "hidden" }}>
          <iframe
            src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(src)}`}
            style={{ width: "100%", height: "100%", border: "none", display: "block" }}
            allowFullScreen
            loading="lazy"
            title="Figma prototype"
          />
        </div>
      </div>
      {/* Base / hinge */}
      <div style={{ height: 10, background: "linear-gradient(to bottom, #222, #181818)", borderRadius: "0 0 4px 4px", border: "2px solid #2a2a2a", borderTop: "none" }} />
      {/* Keyboard base */}
      <div style={{ height: 22, background: "#181818", borderRadius: "0 0 12px 12px", border: "2px solid #2a2a2a", borderTop: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 70, height: 5, borderRadius: 3, background: "#222" }} />
      </div>
    </div>
  );
}

/* ─── Single prototype row ────────────────────────────────────────────────── */
function PrototypeRow({ item, index }: { item: typeof PROTOTYPES[0]; index: number }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [hovBtn, setHovBtn] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.08, ease: EASE }}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 48,
        paddingBlock: 48,
        borderBottom: "1px solid var(--card-border)",
      }}
      className="flex-col md:flex-row"
    >
      {/* Left — info */}
      <div style={{ flex: "0 0 auto", maxWidth: 340, display: "flex", flexDirection: "column", gap: 16 }}>
        <p style={{ fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--green)", fontWeight: 600, fontFamily: "var(--font-sans, 'Montserrat', sans-serif)" }}>
          {item.category}
        </p>
        <h3 style={{ fontFamily: "var(--font-sans, 'Montserrat', sans-serif)", fontSize: "1.35rem", fontWeight: 800, letterSpacing: "-0.01em", color: "var(--text)" }}>
          {item.title}
        </h3>
        <p style={{ fontSize: "0.82rem", lineHeight: 1.72, color: "var(--text-2)", fontFamily: "var(--font-sans, 'Montserrat', sans-serif)" }}>
          {item.description}
        </p>
        <Link
          href={item.projectPath}
          onMouseEnter={() => setHovBtn(true)}
          onMouseLeave={() => setHovBtn(false)}
          style={{
            display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none",
            alignSelf: "flex-start",
            fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
            fontFamily: "var(--font-sans, 'Montserrat', sans-serif)",
            color: hovBtn ? "#fff" : "var(--text)",
            background: hovBtn ? "var(--green)" : "transparent",
            border: `1px solid ${hovBtn ? "var(--green)" : "var(--card-hover)"}`,
            borderRadius: 100, padding: "10px 20px",
            transition: "color 220ms ease, background 220ms ease, border-color 220ms ease",
          }}
        >
          View Project
          <ExternalLink size={11} strokeWidth={2} />
        </Link>
      </div>

      {/* Right — device mockup */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        {item.device === "phone"
          ? <PhoneMockup src={item.figmaUrl} />
          : <MacbookMockup src={item.figmaUrl} />}
      </div>
    </motion.div>
  );
}

/* ─── Section ─────────────────────────────────────────────────────────────── */
export function Prototype() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="prototypes" style={{ position: "relative", zIndex: 1, paddingBlock: "100px 80px", background: "var(--bg)", transition: "background 300ms ease" }}>
      <div style={{ position: "absolute", top: 0, left: 40, right: 40, height: 1, background: "var(--card-border)" }} aria-hidden="true" />
      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ marginBottom: 16 }}
        >
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-3)", fontWeight: 600, marginBottom: 14, fontFamily: "var(--font-sans, 'Montserrat', sans-serif)" }}>
            Interactive Prototypes
          </p>
          <h2 style={{ fontFamily: "var(--font-hand, 'Caveat', cursive)", fontSize: "clamp(2rem, 5vw, 3.6rem)", fontWeight: 700, color: "var(--green)", lineHeight: 1.05 }}>
            Play around. Have fun!
          </h2>
        </motion.div>

        {/* Prototype rows */}
        {PROTOTYPES.map((item, i) => (
          <PrototypeRow key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
