"use client";
import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbox } from "./Lightbox";

const ACCENT = "#60A5FA";

const LOFI_IMAGES = [
  "/gwride/lofi-opening.png",
  "/gwride/lofi-main-1.png",
  "/gwride/lofi-main-2.png",
  "/gwride/lofi-main-3.png",
  "/gwride/lofi-explore.png",
  "/gwride/lofi-explore-2.png",
  "/gwride/lofi-explore-3.png",
  "/gwride/lofi-map.png",
];

const PROTO_IMAGES = Array.from({ length: 8 }, (_, i) => `/gwride/proto-${i + 1}.png`);
const HIFI_IMAGES = Array.from({ length: 8 }, (_, i) => `/gwride/hifi-${i + 1}.png`);

function PhaseGallery({
  images,
  inView,
  onOpen,
  altPrefix,
}: {
  images: string[];
  inView: boolean;
  onOpen: (src: string, alt: string) => void;
  altPrefix: string;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 12 }}>
      {images.map((src, i) => (
        <motion.div
          key={src}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
          style={{ cursor: "zoom-in", borderRadius: 14, overflow: "hidden" }}
          onClick={() => onOpen(src, `${altPrefix} — screen ${i + 1}`)}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(-4px) scale(1.01)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "none";
          }}
        >
          <img
            src={src}
            alt={`${altPrefix} — screen ${i + 1}`}
            style={{
              width: "100%",
              objectFit: "contain",
              display: "block",
              maxHeight: 480,
              backgroundColor: "#111113",
              transition: "transform 300ms ease",
            }}

          loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  );
}

export function Design() {
  const ref = useRef(null);
  const protoRef = useRef(null);
  const hifiRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const protoInView = useInView(protoRef, { once: true, margin: "-80px" });
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
            From structure to polish, one iteration at a time.
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(242,237,232,0.55)", maxWidth: 600 }}>
            The design moved through three distinct phases: low-fidelity wireframes to establish
            structure and core flows, a first prototype to test information hierarchy with real
            screens, and a revised high-fidelity pass that refined the visual language based on
            what the prototype revealed.
          </p>
        </motion.div>

        {/* ── Phase 01: Lo-fi ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 20 }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 8 }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#f2ede8", letterSpacing: "-0.01em" }}>
              Low Fidelity Wireframes
            </h3>
            <span
              style={{
                fontSize: "0.75rem",
                color: "rgba(242,237,232,0.3)",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Phase 01
            </span>
          </div>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(242,237,232,0.5)", maxWidth: 640 }}>
            Wireframes explored three core flows: onboarding, the main shuttle tracking map view, and an
            explore mode for discovering routes. At this stage, decisions were structural: where does the
            ETA live? How do you show multiple routes without overwhelming the screen? What does a stop
            look like without visual decoration in the way?
          </p>
        </motion.div>

        <div style={{ marginBottom: 96 }}>
          <PhaseGallery images={LOFI_IMAGES} inView={inView} onOpen={openLightbox} altPrefix="Low fidelity wireframe" />
        </div>

        {/* ── Phase 02: Medium Fidelity / First Prototype ── */}
        <div ref={protoRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={protoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: 20 }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 8 }}>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#f2ede8", letterSpacing: "-0.01em" }}>
                Medium Fidelity: First Prototype
              </h3>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(242,237,232,0.3)",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Phase 02
              </span>
            </div>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(242,237,232,0.5)", maxWidth: 640 }}>
              The first prototype brought wireframe structure into real screens, introducing color, type,
              and component shape for the first time. This phase was about testing whether the layout
              decisions made in lo-fi actually held up when real content filled the space: real ETA numbers,
              actual stop names, route colors with meaning.
            </p>
          </motion.div>

          <div style={{ marginBottom: 96 }}>
            <PhaseGallery images={PROTO_IMAGES} inView={protoInView} onOpen={openLightbox} altPrefix="First prototype" />
          </div>
        </div>

        {/* ── Phase 03: High Fidelity / Revised Prototype ── */}
        <div ref={hifiRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={hifiInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: 20 }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 8 }}>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#f2ede8", letterSpacing: "-0.01em" }}>
                High Fidelity: Revised Prototype
              </h3>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(242,237,232,0.3)",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Phase 03
              </span>
            </div>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(242,237,232,0.5)", maxWidth: 640 }}>
              After collecting informal feedback on the first prototype, the design was significantly
              refined. Key improvements: stronger typographic hierarchy on the main map view, a cleaner
              route card layout that surfaces ETAs without visual clutter, and a more intuitive stop detail
              pattern that grounds location in campus landmarks students actually recognize.
            </p>
          </motion.div>

          <PhaseGallery images={HIFI_IMAGES} inView={hifiInView} onOpen={openLightbox} altPrefix="High fidelity revised prototype" />
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
            detail last. The revised screens were reorganized around that scanning order, making the
            single most important number (minutes until arrival) the largest, most immediate element on
            every key screen.
          </p>
        </motion.div>
      </div>

      <Lightbox src={lightbox?.src ?? null} alt={lightbox?.alt ?? ""} onClose={closeLightbox} />
    </section>
  );
}
