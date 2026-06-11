"use client";
import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbox } from "./Lightbox";

const ACCENT = "var(--cs-accent-sf)";
const EASE = [0.22, 1, 0.36, 1] as const;

const SCREENS = [
  { src: "/gwride/final-order/a.png", alt: "Onboarding, screen 1" },
  { src: "/gwride/final-order/b.png", alt: "Onboarding, screen 2" },
  { src: "/gwride/final-order/c.png", alt: "Onboarding, screen 3" },
  { src: "/gwride/final-order/d.png", alt: "Onboarding, screen 4" },
  { src: "/gwride/final-order/e.png", alt: "Onboarding, screen 5" },
  { src: "/gwride/final-order/f.png", alt: "Onboarding, screen 6" },
  { src: "/gwride/final-order/g.png", alt: "Shuttle tracking, screen 1" },
  { src: "/gwride/final-order/h.png", alt: "Shuttle tracking, screen 2" },
  { src: "/gwride/final-order/i.png", alt: "Route view, screen 1" },
  { src: "/gwride/final-order/j.png", alt: "Route view, screen 2" },
  { src: "/gwride/final-order/k.png", alt: "Explore, screen 1" },
  { src: "/gwride/final-order/l.png", alt: "Explore, screen 2" },
];

export function Final() {
  const ref = useRef(null);
  const protoRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const protoInView = useInView(protoRef, { once: true, margin: "-80px" });

  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const openLightbox = useCallback((src: string, alt: string) => setLightbox({ src, alt }), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  return (
    <section
      id="final"
      style={{
        scrollMarginTop: 80,
        paddingBlock: "80px 120px",
        backgroundColor: "var(--cs-bg-secondary)",
      }}
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={ref}
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
            Final Screens
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
            A polished campus transit experience built around student confidence.
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "var(--cs-text-muted)",
              maxWidth: 620,
            }}
          >
            The final design gives students the right information at the right time: where the
            shuttle is, when it arrives, what route it follows, and what is nearby. Four core
            flows, each designed to answer a specific question students have on campus.
          </p>
        </motion.div>

        {/* Flat screen grid — no borders, no containers */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          style={{ gap: 16, marginBottom: 16 }}
        >
          {SCREENS.map((screen, i) => (
            <motion.div
              key={screen.src}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.04 * i, ease: EASE }}
              style={{ cursor: "zoom-in", transition: "transform 300ms ease" }}
              onClick={() => openLightbox(screen.src, screen.alt)}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px) scale(1.02)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "none";
              }}
            >
              <img
                src={screen.src}
                alt={screen.alt}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        <p
          style={{
            fontSize: "0.75rem",
            color: "var(--cs-text-faint)",
            marginBottom: 80,
            textAlign: "center" as const,
          }}
        >
          Click any screen to expand
        </p>

        {/* Interactive Prototype */}
        <div ref={protoRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={protoInView ? { opacity: 1, y: 0 } : {}}
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
              Interactive Prototype
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
              Explore the full flow
            </h3>
            <p style={{ fontSize: "0.88rem", color: "var(--cs-text-faint)", maxWidth: 600 }}>
              This interactive demo shows the core app flow: onboarding, route discovery, shuttle
              information, and campus exploration.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={protoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
            {/* Desktop/tablet iframe */}
            <div
              className="hidden md:block"
              style={{
                width: "100%",
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid var(--cs-border)",
                backgroundColor: "var(--cs-surface)",
              }}
            >
              <iframe
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FezhpWQgVx2L0xAo2q8JGKj%2FGW-Ride%3Fnode-id%3D2251-993%26p%3Df%26viewport%3D-1738%252C-5681%252C0.43%26t%3DhSqqHpGAWMdz0xjR-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D2251%253A993%26page-id%3D0%253A1"
                title="GW Ride Figma Prototype"
                loading="lazy"
                allowFullScreen
                style={{
                  width: "100%",
                  height: "clamp(650px, 60vw, 820px)",
                  border: 0,
                  display: "block",
                }}
              />
            </div>

            {/* Mobile fallback */}
            <div
              className="md:hidden"
              style={{
                padding: "48px 32px",
                borderRadius: 16,
                border: "1px solid var(--cs-border)",
                backgroundColor: "var(--cs-surface)",
                display: "flex",
                flexDirection: "column" as const,
                alignItems: "center",
                gap: 20,
                textAlign: "center" as const,
              }}
            >
              <p
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "var(--cs-text)",
                  marginBottom: 4,
                }}
              >
                Best viewed on desktop
              </p>
              <p style={{ fontSize: "0.85rem", color: "var(--cs-text-faint)", lineHeight: 1.6 }}>
                Open the prototype in Figma to explore the full interactive flow.
              </p>
              <a
                href="https://www.figma.com/proto/ezhpWQgVx2L0xAo2q8JGKj/GW-Ride?node-id=2251-993&p=f&viewport=-1738%2C-5681%2C0.43&t=hSqqHpGAWMdz0xjR-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2251%3A993&page-id=0%3A1"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 24px",
                  borderRadius: 10,
                  border: "1px solid rgba(155,233,49,0.3)",
                  backgroundColor: "rgba(155,233,49,0.08)",
                  color: ACCENT,
                  fontSize: "0.88rem",
                  fontWeight: 500,
                  textDecoration: "none",
                }}
              >
                Open prototype in Figma
              </a>
            </div>

            {/* Below-iframe CTA — desktop only */}
            <div
              className="hidden md:flex"
              style={{ marginTop: 16, flexDirection: "column" as const, alignItems: "center", gap: 10 }}
            >
              <p style={{ fontSize: "0.75rem", color: "var(--cs-text-faint)", textAlign: "center" as const }}>
                If the prototype does not load, open it directly in Figma.
              </p>
              <a
                href="https://www.figma.com/proto/ezhpWQgVx2L0xAo2q8JGKj/GW-Ride?node-id=2251-993&p=f&viewport=-1738%2C-5681%2C0.43&t=hSqqHpGAWMdz0xjR-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2251%3A993&page-id=0%3A1"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 20px",
                  borderRadius: 9,
                  border: "1px solid rgba(155,233,49,0.25)",
                  backgroundColor: "rgba(155,233,49,0.07)",
                  color: ACCENT,
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  textDecoration: "none",
                }}
              >
                Open prototype in Figma
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 10L10 2M10 2H4.5M10 2V7.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <Lightbox src={lightbox?.src ?? null} alt={lightbox?.alt ?? ""} onClose={closeLightbox} />
    </section>
  );
}
