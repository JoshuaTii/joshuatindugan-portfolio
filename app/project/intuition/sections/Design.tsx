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
    body: "At the beginning, we kept the design rough so we could focus on the system instead of the styling. InTuition had to support multiple student needs at once: finding scholarships, understanding eligibility, applying efficiently, and learning from peers. The early sketches helped us figure out how those pieces should connect before committing to a polished interface.",
    cards: [
      "Focused on structure before visual design.",
      "Explored how discovery, applications, profiles, and social features could live in one platform.",
      "Used rough sketches to test layout options quickly without getting attached to one direction.",
      "Prioritized a dashboard-style structure because students needed one place to browse, track, and act.",
      "Kept the experience centered on reducing overwhelm, not simply showing more scholarships.",
    ],
    images: SKETCH_IMAGES,
    cols: 4 as const,
  },
  {
    number: "02",
    label: "Phase 02",
    title: "Lo-fi Digital Mockups",
    body: "Once the core idea felt clearer, we moved the best sketches into Figma. This helped us test the information architecture more seriously. The goal was to see whether students could understand where scholarships, their profile, and the social feed belonged within the same experience.",
    cards: [
      "Translated the strongest sketch concepts into digital wireframes.",
      "Clarified the relationship between scholarship listings, student profiles, and peer/social content.",
      "Used simple layouts to check whether the platform felt easy to navigate.",
      "Treated the student profile as a functional tool, not just an account page, because it powers matching and reusable application data.",
      "Started shaping the platform around the idea that students should enter information once and reuse it across opportunities.",
    ],
    images: LOFI_IMAGES,
    cols: 4 as const,
  },
  {
    number: "03",
    label: "Phase 03",
    title: "Medium Fidelity",
    body: "In this phase, the product started to feel more real. We added stronger hierarchy, spacing, early colors, and clearer content blocks. This helped us see how students might scan scholarship opportunities and decide what to click first. The goal was to make the experience feel helpful without making it feel crowded.",
    cards: [
      "Added typography hierarchy, card spacing, and an early color direction.",
      "Used cards to separate scholarships into easier-to-scan opportunities.",
      "Started testing how filters, scholarship details, and profile-based matching could work together.",
      "Made the interface more structured so deadlines, award amounts, and eligibility could stand out faster.",
      "Used this phase to catch sections that felt too text-heavy before moving into the full prototype.",
    ],
    images: MEDIUM_IMAGES,
    cols: 4 as const,
  },
  {
    number: "04",
    label: "Phase 04",
    title: "Interactive Prototype",
    body: "The clickable prototype connected the main experience from onboarding to scholarship discovery, application, and social sharing. This phase was important because it showed where the concept worked and where users still felt unclear. Testing revealed that the social page needed a sharper purpose, some text needed to be shortened, and peer profiles needed to connect more clearly to the scholarship journey.",
    cards: [
      "Connected login, onboarding, discovery, application, and social flows.",
      "Tested whether students understood the purpose of each main section.",
      "Found that the social feature needed to feel more useful, not just added on.",
      "Reduced text-heavy moments to make the experience easier to scan.",
      "Strengthened the connection between peer stories, user profiles, and scholarship confidence.",
    ],
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
          {PHASES.map(({ number, label, title, body, cards, images, cols }, phaseIdx) => (
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

              {/* Design choice cards */}
              <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                style={{ gap: 12, marginBottom: 32 }}
              >
                {cards.map((card: string, ci: number) => (
                  <div
                    key={ci}
                    style={{
                      padding: "18px 20px",
                      borderRadius: 12,
                      border: "1px solid rgba(255,255,255,0.07)",
                      backgroundColor: "#111113",
                      fontSize: "0.88rem",
                      lineHeight: 1.65,
                      color: "rgba(242,237,232,0.6)",
                      borderLeft: `2px solid rgba(245,158,11,0.4)`,
                    }}
                  >
                    {card}
                  </div>
                ))}
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
