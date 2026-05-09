"use client";
import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbox } from "./Lightbox";

const ACCENT = "#60A5FA";

const LOFI_IMAGES = [
  { src: "/gwride/lofi-opening.png", caption: "Onboarding / opening flow" },
  { src: "/gwride/lofi-main-1.png", caption: "Main map view — draft 1" },
  { src: "/gwride/lofi-main-2.png", caption: "Main map view — draft 2" },
  { src: "/gwride/lofi-main-3.png", caption: "Main map view — draft 3" },
  { src: "/gwride/lofi-explore.png", caption: "Explore / browse routes" },
  { src: "/gwride/lofi-map.png", caption: "Full campus map view" },
];

const HIFI_IMAGES = [
  { src: "/gwride/revision-opening.png", caption: "Opening — revised" },
  { src: "/gwride/revision-opening-2.png", caption: "Onboarding flow — screen 2" },
  { src: "/gwride/revision-opening-3.png", caption: "Onboarding flow — screen 3" },
  { src: "/gwride/revision-main.png", caption: "Main tracking view — revised" },
  { src: "/gwride/revision-main-2.png", caption: "Route cards — revised" },
  { src: "/gwride/revision-main-3.png", caption: "Stop detail — revised" },
  { src: "/gwride/revision-explore.png", caption: "Explore view — revised" },
  { src: "/gwride/revision-map.png", caption: "Full-screen map — revised" },
];

type GalleryItem = { src: string; caption: string };

function GalleryGrid({
  items,
  inView,
  onOpen,
  colClass = "grid-cols-2 md:grid-cols-3",
}: {
  items: GalleryItem[];
  inView: boolean;
  onOpen: (src: string, alt: string) => void;
  colClass?: string;
}) {
  return (
    <div
      className={`grid ${colClass}`}
      style={{ gap: 16 }}
    >
      {items.map((item, i) => (
        <motion.div
          key={item.src}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", flexDirection: "column" as const, gap: 10, cursor: "zoom-in" }}
          onClick={() => onOpen(item.src, item.caption)}
        >
          <div
            style={{
              borderRadius: 14,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.06)",
              backgroundColor: "#111113",
              transition: "transform 300ms ease, border-color 300ms ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(96,165,250,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "none";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
            }}
          >
            <img
              src={item.src}
              alt={item.caption}
              style={{
                width: "100%",
                objectFit: "contain",
                display: "block",
                maxHeight: 320,
              }}
            />
          </div>
          <p style={{ fontSize: "0.75rem", color: "rgba(242,237,232,0.4)", lineHeight: 1.4 }}>
            {item.caption}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export function Design() {
  const ref = useRef(null);
  const hifiRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const hifiInView = useInView(hifiRef, { once: true, margin: "-80px" });

  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const openLightbox = useCallback((src: string, alt: string) => setLightbox({ src, alt }), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  return (
    <section id="design" style={{ scrollMarginTop: 80, paddingBlock: "120px 140px" }}>
      <div className="section-container">
        {/* Header */}
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
            Design Process
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#f2ede8",
              lineHeight: 1.1,
              maxWidth: 640,
              marginBottom: 20,
            }}
          >
            From structure to polish — one iteration at a time.
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(242,237,232,0.55)", maxWidth: 600 }}>
            The design moved through two distinct phases: low-fidelity wireframes to nail the
            information hierarchy and core flows, followed by high-fidelity screens to refine
            the visual language, readability, and interaction details.
          </p>
        </motion.div>

        {/* ── Lo-fi ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 32 }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 8 }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#f2ede8", letterSpacing: "-0.01em" }}>
              Low Fidelity Wireframes
            </h3>
            <span style={{ fontSize: "0.75rem", color: "rgba(242,237,232,0.3)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Phase 01
            </span>
          </div>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(242,237,232,0.5)", maxWidth: 640 }}>
            Wireframes explored three core flows — onboarding, the main shuttle tracking map view, and an
            explore/browse mode for discovering routes. At this stage, decisions were structural:
            where does the ETA live? How do you show multiple routes without overwhelming the screen?
            What does a stop look like without visual decoration in the way?
          </p>
        </motion.div>

        <div style={{ marginBottom: 96 }}>
          <GalleryGrid items={LOFI_IMAGES} inView={inView} onOpen={openLightbox} colClass="grid-cols-2 md:grid-cols-3" />
        </div>

        {/* ── Hi-fi ── */}
        <div ref={hifiRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={hifiInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: 32 }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 8 }}>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#f2ede8", letterSpacing: "-0.01em" }}>
                High Fidelity Screens
              </h3>
              <span style={{ fontSize: "0.75rem", color: "rgba(242,237,232,0.3)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Phase 02
              </span>
            </div>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(242,237,232,0.5)", maxWidth: 640 }}>
              After building an initial prototype and collecting informal student feedback, the design
              was refined significantly. Key improvements: stronger typographic hierarchy on the main
              map view, a cleaner route card layout that surfaces ETAs without visual clutter, and a
              more intuitive stop detail pattern that grounds location in campus landmarks students
              actually recognize.
            </p>
          </motion.div>

          <GalleryGrid items={HIFI_IMAGES} inView={hifiInView} onOpen={openLightbox} colClass="grid-cols-2 md:grid-cols-4" />
        </div>

        {/* Evolution note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={hifiInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            marginTop: 48,
            padding: "24px 28px",
            borderRadius: 14,
            backgroundColor: "rgba(96,165,250,0.05)",
            border: "1px solid rgba(96,165,250,0.12)",
          }}
        >
          <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(242,237,232,0.6)" }}>
            <strong style={{ color: "rgba(242,237,232,0.85)" }}>What changed most between iterations:</strong>{" "}
            The first prototype revealed that students scanned for ETA first, route name second, and stop
            detail last. The revised screens were reorganized around that scanning order — making the
            single most important number (minutes until arrival) the largest, most immediate element on
            every key screen.
          </p>
        </motion.div>
      </div>

      <Lightbox src={lightbox?.src ?? null} alt={lightbox?.alt ?? ""} onClose={closeLightbox} />
    </section>
  );
}
