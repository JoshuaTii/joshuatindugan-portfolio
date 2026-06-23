"use client";
import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const FEATURES = [
  {
    id: "dashboard",
    kicker: "Feature 01",
    title: "Dashboard",
    subtitle: "One clear place to see what matters right now.",
    userNeed:
      "Users need one clear place to see what matters right now: payments, goals, lessons, and local support.",
    decision:
      "The dashboard brings these pieces together into simple cards, so users can quickly understand what needs attention and where to go next.",
    why:
      "Instead of making users search through different sections, the dashboard gives them a calm starting point and helps them keep moving forward.",
    screensShown:
      "Dashboard overview, financial goals, learning progress, resource recommendations, upcoming payments.",
    tags: ["Dashboard", "Progress Overview", "Financial Health"],
    images: ["/sage/feat4-1.png"],
  },
  {
    id: "hub",
    kicker: "Feature 02",
    title: "Community Hub",
    subtitle: "Trust built through community, not institutions.",
    userNeed:
      "Residents need trusted places to find support, ask questions, and discover local financial resources.",
    decision:
      "The Community Hub brings together local organizations, workshops, events, and support networks in one place.",
    why:
      "Financial growth often happens through trusted relationships and community support, not just digital tools.",
    screensShown:
      "Community feed, local events, resource directory, map-based support.",
    tags: ["Community", "Resources", "Peer Network"],
    images: [
      "/sage/feat1-1.png",
      "/sage/feat1-2.png",
      "/sage/feat1-3.png",
      "/sage/feat1-4.png",
    ],
  },
  {
    id: "edu",
    kicker: "Feature 03",
    title: "Financial Lessons",
    subtitle: "Bite-sized education. No jargon. No shame.",
    userNeed:
      "Residents need financial education that feels clear, short, and nonjudgmental to help inform decisions.",
    decision:
      "Lessons are broken into bite-sized cards with plain-language explanations and progress tracking.",
    why:
      "This reduces shame and increases confidence, making financial learning feel attainable.",
    screensShown:
      "Lesson library, lesson details, progress tracking, workshops.",
    tags: ["Education", "Financial Literacy", "Progress Tracking"],
    images: [
      "/sage/feat2-1.png",
      "/sage/feat2-2.png",
      "/sage/feat2-3.png",
    ],
  },
  {
    id: "loan",
    kicker: "Feature 04",
    title: "Microloan",
    subtitle: "Safer alternatives. Transparent options.",
    userNeed:
      "Residents need safer alternatives to predatory lending and clearer ways to compare available financial options.",
    decision:
      "The marketplace allows users to explore loan opportunities, compare options, and learn eligibility requirements in a transparent way.",
    why:
      "Helping users understand available options can reduce uncertainty and support more informed financial decisions.",
    screensShown:
      "Loan marketplace, loan details, repayment progress, payment options.",
    tags: ["Microloans", "Credit Building", "Transparency"],
    images: [
      "/sage/feat3-1.png",
      "/sage/feat3-2.png",
      "/sage/feat3-3.png",
      "/sage/feat3-4.png",
      "/sage/feat3-5.png",
      "/sage/feat3-6.png",
      "/sage/feat3-7.png",
      "/sage/feat3-8.png",
      "/sage/feat3-9.png",
    ],
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

function FeatureBlock({
  feature,
  index,
  inView,
}: {
  feature: (typeof FEATURES)[0];
  index: number;
  inView: boolean;
}) {
  const [activeImg, setActiveImg] = useState(0);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const isEven = index % 2 === 0;

  const openLightbox = useCallback((src: string) => {
    setLightboxSrc(src);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxSrc(null);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    if (!lightboxSrc) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") closeLightbox(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxSrc, closeLightbox]);

  useEffect(() => () => { document.body.style.overflow = ""; }, []);

  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.08, ease: EASE }}
      style={{
        padding: "52px 0",
        borderTop: "1px solid var(--cs-border)",
      }}
    >
      <div
        className={`grid grid-cols-1 ${isEven ? "md:grid-cols-[1fr_1.1fr]" : "md:grid-cols-[1.1fr_1fr]"}`}
        style={{ gap: "48px 80px", alignItems: "start" }}
      >
        {/* Text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column" as const,
            gap: 20,
            order: isEven ? 0 : 1,
          }}
          className="md:order-none"
        >
          <p className="kicker" style={{ color: "var(--cs-accent-sf)" }}>
            {feature.kicker}
          </p>
          <h3
            style={{
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--cs-text)",
              lineHeight: 1.1,
            }}
          >
            {feature.title}
          </h3>
          <p
            style={{
              fontSize: "1rem",
              fontStyle: "italic",
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: "var(--cs-text-muted)",
              lineHeight: 1.5,
            }}
          >
            {feature.subtitle}
          </p>

          {/* User Need / Decision / Why */}
          <div
            style={{
              display: "flex",
              flexDirection: "column" as const,
              gap: 16,
              padding: "24px 24px",
              borderRadius: 16,
              border: "1px solid var(--cs-border)",
              backgroundColor: "var(--cs-surface)",
            }}
          >
            {[
              { label: "User Need", text: feature.userNeed },
              { label: "Design Decision", text: feature.decision },
              { label: "Why It Matters", text: feature.why },
            ].map(({ label, text }) => (
              <div key={label} style={{ display: "flex", flexDirection: "column" as const, gap: 5 }}>
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.1em",
                    color: "var(--cs-accent-sf)",
                  }}
                >
                  {label}
                </span>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.65, color: "var(--cs-text-muted)" }}>
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Screens shown */}
          <p
            style={{
              fontSize: "0.78rem",
              color: "var(--cs-text-faint)",
              lineHeight: 1.55,
            }}
          >
            <span
              style={{
                fontWeight: 600,
                textTransform: "uppercase" as const,
                letterSpacing: "0.08em",
                fontSize: "0.7rem",
                color: "var(--cs-text-faint)",
              }}
            >
              Screens shown:{" "}
            </span>
            {feature.screensShown}
          </p>

          <div className="flex flex-wrap" style={{ gap: 8 }}>
            {feature.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          {/* Image nav - only when more than 1 screen */}
          {feature.images.length > 1 && (
            <div className="flex flex-wrap" style={{ gap: 8 }}>
              {feature.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 8,
                    border: `1px solid ${i === activeImg ? "var(--cs-accent-sf)" : "var(--cs-border-strong)"}`,
                    backgroundColor: i === activeImg ? "var(--accent-interactive-bg)" : "transparent",
                    cursor: "pointer",
                    fontSize: "0.7rem",
                    color: i === activeImg ? "var(--cs-accent-sf)" : "var(--cs-text-faint)",
                    fontWeight: 600,
                    transition: "all 250ms ease",
                  }}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Image */}
        <div
          role="button"
          tabIndex={0}
          aria-label={`View ${feature.title} screens fullscreen`}
          onClick={() => openLightbox(feature.images[activeImg])}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(feature.images[activeImg]); } }}
          style={{
            position: "relative" as const,
            order: isEven ? 1 : 0,
            cursor: "zoom-in",
          }}
          className="md:order-none"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 80% 80% at 50% 50%, var(--glow) 0%, transparent 70%)",
              filter: "blur(40px)",
              borderRadius: 24,
            }}
          />
          {feature.images.map((src, i) => (
            <motion.img
              key={src}
              src={src}
              alt={`${feature.title} screen ${i + 1}`}
              animate={{ opacity: i === activeImg ? 1 : 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              style={{
                position: i === 0 ? ("relative" as const) : ("absolute" as const),
                top: 0,
                left: 0,
                width: "100%",
                height: i === 0 ? "auto" : "100%",
                objectFit: "contain" as const,
                maxHeight: 720,
                filter: "drop-shadow(0 28px 56px rgba(0,0,0,0.55))",
                display: "block",
                pointerEvents: i === activeImg ? ("auto" as const) : ("none" as const),
              }}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </motion.div>

    <AnimatePresence>
      {lightboxSrc && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={closeLightbox}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.88)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <motion.button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            aria-label="Close"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 20,
              right: 20,
              zIndex: 10000,
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(8px)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </motion.button>
          <motion.img
            key={lightboxSrc}
            src={lightboxSrc}
            alt={`${feature.title} fullscreen`}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.28, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "92vw",
              maxHeight: "92vh",
              width: "auto",
              height: "auto",
              objectFit: "contain",
              borderRadius: 16,
              display: "block",
              boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}

export function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="!pt-[80px] !pb-[120px]"
      style={{ backgroundColor: "var(--cs-bg-secondary)" }}
    >
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ marginBottom: 16 }}
        >
          <p className="kicker">Designing the Experience</p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--cs-text)",
              maxWidth: 640,
              marginBottom: 20,
            }}
          >
            Turning research into solutions.
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "var(--cs-text-muted)",
              maxWidth: 580,
            }}
          >
            Each feature maps directly to a research finding. The design decisions were not
            about adding tools. They were about removing barriers.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column" as const }}>
          {FEATURES.map((feature, i) => (
            <FeatureBlock key={feature.id} feature={feature} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
