"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const ACCENT = "#f59e0b";

const SKETCH_IMAGES = [
  { src: "/intuition/sketches/sketch-0.png", alt: "Lo-fi sketch — main layout" },
  { src: "/intuition/sketches/sketch-1.png", alt: "Lo-fi sketch — variation 1" },
  { src: "/intuition/sketches/sketch-2.png", alt: "Lo-fi sketch — variation 2" },
  { src: "/intuition/sketches/wireframe.png", alt: "Wireframe overview" },
];

const LOFI_IMAGES = [
  { src: "/intuition/lofi/main-page.png",           alt: "Lo-fi — Main page" },
  { src: "/intuition/lofi/Profile.png",             alt: "Lo-fi — Profile" },
  { src: "/intuition/lofi/Social.png",              alt: "Lo-fi — Social feed" },
  { src: "/intuition/lofi/filling-scholarship.png", alt: "Lo-fi — Filling scholarship" },
];

const MEDIUM_IMAGES = [
  { src: "/intuition/medium/medium-0.png", alt: "Medium fidelity — Main page" },
  { src: "/intuition/medium/medium-1.png", alt: "Medium fidelity — Variation 1" },
  { src: "/intuition/medium/medium-2.png", alt: "Medium fidelity — Variation 2" },
  { src: "/intuition/medium/medium-3.png", alt: "Medium fidelity — Variation 3" },
];

const PROTO_IMAGES = [
  { src: "/intuition/proto/Log-in.png",                   alt: "Prototype — Log in" },
  { src: "/intuition/proto/Main-Page.png",                alt: "Prototype — Main page" },
  { src: "/intuition/proto/Main-Page-1.png",              alt: "Prototype — Main page v1" },
  { src: "/intuition/proto/Main-Page-2.png",              alt: "Prototype — Main page v2" },
  { src: "/intuition/proto/Main-Page-After-Signing-Up.png", alt: "Prototype — After sign up" },
  { src: "/intuition/proto/Recieving-scholarship.png",    alt: "Prototype — Receiving scholarship" },
  { src: "/intuition/proto/Sign-Up.png",                  alt: "Prototype — Sign up" },
  { src: "/intuition/proto/Social.png",                   alt: "Prototype — Social" },
];

interface PhaseGalleryProps {
  images: { src: string; alt: string }[];
  inView: boolean;
  baseDelay?: number;
  onOpen: (src: string, alt: string) => void;
  cols?: 2 | 4;
}

function PhaseGallery({ images, inView, baseDelay = 0, onOpen, cols = 4 }: PhaseGalleryProps) {
  const colClass = cols === 4 ? "grid grid-cols-2 md:grid-cols-4" : "grid grid-cols-2";
  return (
    <div className={colClass} style={{ gap: 12 }}>
      {images.map(({ src, alt }, i) => (
        <motion.div
          key={src}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: baseDelay + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => onOpen(src, alt)}
          style={{
            borderRadius: 14,
            overflow: "hidden",
            cursor: "zoom-in",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <img
            src={src}
            alt={alt}
            style={{
              width: "100%",
              objectFit: "contain",
              display: "block",
              maxHeight: 360,
            }}

          loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  );
}

const PHASES = [
  {
    number: "01",
    label: "Phase 01",
    title: "Lo-fi Sketches & Wireframes",
    body: "We started with rough pencil sketches — deliberately lo-fi to prioritize flow over aesthetics. Working through different layout options helped us settle on a structure that balanced search, application, and social discovery.",
    images: SKETCH_IMAGES,
    cols: 4 as const,
  },
  {
    number: "02",
    label: "Phase 02",
    title: "Lo-fi Digital Mockups",
    body: "Moving into Figma, we translated the best sketch concepts into low-fidelity digital screens. These clarified the information architecture — how scholarship listings, profiles, and the social feed would relate to each other.",
    images: LOFI_IMAGES,
    cols: 4 as const,
  },
  {
    number: "03",
    label: "Phase 03",
    title: "Medium Fidelity",
    body: "With the layout validated, we added visual weight: typography hierarchy, card spacing, and an early color palette. Medium-fi allowed us to test the main page before investing in full polish.",
    images: MEDIUM_IMAGES,
    cols: 4 as const,
  },
  {
    number: "04",
    label: "Phase 04",
    title: "Interactive Prototype",
    body: "The first clickable prototype connected all the core flows — login, onboarding, scholarship discovery, application, and social sharing. We ran this through two rounds of user testing and iterated based on feedback.",
    images: PROTO_IMAGES,
    cols: 4 as const,
  },
];

export function Design() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>("");

  const openLightbox = (src: string, alt: string) => {
    setLightboxSrc(src);
    setLightboxAlt(alt);
  };

  return (
    <section
      id="design"
      style={{
        scrollMarginTop: 80,
        paddingBlock: "120px 140px",
        backgroundColor: "rgba(255,255,255,0.015)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="section-container" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "0.75rem",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: ACCENT,
            marginBottom: 16,
          }}
        >
          Design Process
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#f2ede8",
            lineHeight: 1.1,
            marginBottom: 80,
            maxWidth: 680,
          }}
        >
          From rough sketches to a
          <br className="hidden md:block" />
          fully interactive prototype.
        </motion.h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 96 }}>
          {PHASES.map(({ number, label, title, body, images, cols }, phaseIdx) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.08 * phaseIdx, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Phase header */}
              <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 24 }}>
                <span
                  style={{
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: ACCENT,
                    fontWeight: 600,
                  }}
                >
                  {label}
                </span>
                <div style={{ flex: 1, height: 1, backgroundColor: "rgba(255,255,255,0.06)" }} />
              </div>

              <div className="grid md:grid-cols-2" style={{ gap: "24px 64px", marginBottom: 32 }}>
                <h3
                  style={{
                    fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                    fontWeight: 700,
                    color: "#f2ede8",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.15,
                  }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "rgba(242,237,232,0.55)" }}>
                  {body}
                </p>
              </div>

              <PhaseGallery
                images={images}
                inView={inView}
                baseDelay={0.1 + phaseIdx * 0.04}
                onOpen={openLightbox}
                cols={cols}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          onClick={() => setLightboxSrc(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            backgroundColor: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            cursor: "zoom-out",
          }}
        >
          <img
            src={lightboxSrc}
            alt={lightboxAlt}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: 12,
            }}

          loading="lazy"
          />
        </div>
      )}
    </section>
  );
}
