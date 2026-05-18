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
            At the beginning, we kept the design simple so we could focus on the real problem: students
            were not missing shuttles because the system did not exist, they were missing them because
            the information was unclear and the stops were not always placed around student convenience.
            The lo-fi stage helped us map the basic experience around timing, routes, and proposed bus
            stops near key campus destinations, making it easier for students to understand where to go
            and whether the shuttle fit their schedule before thinking about visual polish.
          </p>
        </motion.div>

        {/* Lo-fi design choice cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 12, marginBottom: 32 }}
        >
          {[
            "Focused on structure before visual design.",
            "Explored the core flows: onboarding, live shuttle tracking, route discovery, and stop details.",
            "Placed ETA information early because arrival time is the first thing students need.",
            "Used map-first screens because shuttle decisions depend on location and timing.",
            "Kept route and stop information modular so students could scan quickly while walking or between classes.",
            "Designed the navigation around fast access, not deep exploration, because transit decisions happen in seconds.",
          ].map((card, i) => (
            <div
              key={i}
              style={{
                padding: "18px 20px",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.07)",
                backgroundColor: "#111113",
                fontSize: "0.88rem",
                lineHeight: 1.65,
                color: "rgba(242,237,232,0.6)",
                borderLeft: "2px solid rgba(96,165,250,0.4)",
              }}
            >
              {card}
            </div>
          ))}
        </div>

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
              Once the structure felt clear, we moved into a more realistic prototype with color, type,
              route cards, stop names, and ETA details. This phase helped us test whether the interface
              still worked once real content was added. The main goal was to make shuttle information
              feel trustworthy enough for a student to choose the Vex instead of opening a rideshare app.
            </p>
          </motion.div>

          {/* Medium fidelity design choice cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            style={{ gap: 12, marginBottom: 32 }}
          >
            {[
              "Added real ETA numbers, stop names, route labels, and visual hierarchy.",
              "Used route cards to separate shuttle options without overwhelming the map.",
              "Made timing the strongest visual element because students scan for \"how many minutes?\" first.",
              "Added route colors to help students distinguish options faster.",
              "Tested whether students could understand the next shuttle, route direction, and stop context without extra explanation.",
              "Learned that the layout needed to prioritize ETA first, route name second, and stop detail last.",
            ].map((card, i) => (
              <div
                key={i}
                style={{
                  padding: "18px 20px",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.07)",
                  backgroundColor: "#111113",
                  fontSize: "0.88rem",
                  lineHeight: 1.65,
                  color: "rgba(242,237,232,0.6)",
                  borderLeft: "2px solid rgba(96,165,250,0.4)",
                }}
              >
                {card}
              </div>
            ))}
          </div>

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
              After feedback, the design became more focused and easier to scan. This phase was about
              removing friction from the decision moment. If a student has ten minutes before class,
              the app cannot ask them to think too hard. The revised prototype made the most important
              information larger, clearer, and closer to the actions students needed to take.
            </p>
          </motion.div>

          {/* High fidelity design choice cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            style={{ gap: 12, marginBottom: 32 }}
          >
            {[
              "Strengthened the typographic hierarchy so the ETA stood out immediately.",
              "Cleaned up route cards so they felt useful instead of crowded.",
              "Made stop details more grounded in campus landmarks students recognize.",
              "Reduced visual noise around the map so movement and timing stayed central.",
              "Improved the flow between tracking, route detail, and campus exploration.",
              "Refined the experience around one question: is the shuttle close enough for me to wait?",
            ].map((card, i) => (
              <div
                key={i}
                style={{
                  padding: "18px 20px",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.07)",
                  backgroundColor: "#111113",
                  fontSize: "0.88rem",
                  lineHeight: 1.65,
                  color: "rgba(242,237,232,0.6)",
                  borderLeft: "2px solid rgba(96,165,250,0.4)",
                }}
              >
                {card}
              </div>
            ))}
          </div>

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
