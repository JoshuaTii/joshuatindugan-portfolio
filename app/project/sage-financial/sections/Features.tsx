"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const FEATURES = [
  {
    id: "hub",
    kicker: "Feature 01",
    title: "Community Hub",
    subtitle: "The community as infrastructure.",
    body: "The Community Hub connects Ward 7 and 8 residents with local financial workshops, peer advisors, and neighborhood resources. It treats the community as the real platform, not the app. Residents can post questions, share tips, and find verified local financial counselors without leaving their network.",
    tags: ["Community", "Resources", "Peer Network"],
    images: [
      "/sage/feat1-1.png",
      "/sage/feat1-2.png",
      "/sage/feat1-3.png",
      "/sage/feat1-4.png",
    ],
    color: "#7ab688",
  },
  {
    id: "edu",
    kicker: "Feature 02",
    title: "Financial Lessons",
    subtitle: "Bite-sized education. No jargon. No shame.",
    body: "Financial Lessons delivers short, culturally relevant financial education modules. No textbook language. No condescension. Topics are drawn from real questions residents ask, presented in a format that respects their time and intelligence. Completing lessons builds a financial profile that the rest of SAGE adapts to.",
    tags: ["Education", "Financial Literacy", "Progress Tracking"],
    images: [
      "/sage/feat2-1.png",
      "/sage/feat2-2.png",
      "/sage/feat2-3.png",
    ],
    color: "#9b82c4",
  },
  {
    id: "loan",
    kicker: "Feature 03",
    title: "Microloan Marketplace",
    subtitle: "Access capital without a credit score.",
    body: "The Microloan Marketplace enables residents to access small, community-backed loans without a traditional credit check. Peer accountability replaces collateral. Borrowers build a trust history within the community, creating a pathway to formal credit that the traditional banking system never offered.",
    tags: ["Microloans", "Credit Building", "Peer Accountability"],
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
    color: "#c4894a",
  },
  {
    id: "dashboard",
    kicker: "Feature 04",
    title: "Dashboard",
    subtitle: "Progress at a glance.",
    body: "The Dashboard brings everything together in one place: financial progress, active lessons, loan status, and key actions. It gives residents a clear picture of where they stand and what to do next, reducing the cognitive load of managing multiple financial goals simultaneously.",
    tags: ["Dashboard", "Progress Overview", "Financial Health"],
    images: [
      "/sage/feat4-1.png",
    ],
    color: "#6ba3c4",
  },
];

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
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`grid grid-cols-1 ${isEven ? "md:grid-cols-[1fr_1.1fr]" : "md:grid-cols-[1.1fr_1fr]"}`}
      style={{ gap: "48px 80px", alignItems: "center" }}
    >
      {/* Text â€” always renders first in DOM; CSS order swaps on desktop */}
      <div
        style={{
          display: "flex",
          flexDirection: "column" as const,
          gap: 20,
          order: isEven ? 0 : 1,
        }}
        className="md:order-none"
      >
        <p className="kicker" style={{ color: feature.color }}>
          {feature.kicker}
        </p>
        <h3
          style={{
            fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#f2ede8",
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
            color: "rgba(242,237,232,0.55)",
            lineHeight: 1.5,
          }}
        >
          {feature.subtitle}
        </p>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "rgba(242,237,232,0.6)" }}>
          {feature.body}
        </p>
        <div className="flex flex-wrap" style={{ gap: 8 }}>
          {feature.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        {/* Image nav â€” only when more than 1 screen */}
        {feature.images.length > 1 && (
          <div className="flex flex-wrap" style={{ gap: 8, marginTop: 4 }}>
            {feature.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 8,
                  border: `1px solid ${i === activeImg ? feature.color : "rgba(255,255,255,0.08)"}`,
                  backgroundColor: i === activeImg ? `${feature.color}1a` : "transparent",
                  cursor: "pointer",
                  fontSize: "0.7rem",
                  color: i === activeImg ? feature.color : "rgba(242,237,232,0.35)",
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
        style={{
          position: "relative" as const,
          order: isEven ? 1 : 0,
        }}
        className="md:order-none"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 80% 80% at 50% 50%, ${feature.color}16 0%, transparent 70%)`,
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
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
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
          />
        ))}
      </div>
    </motion.div>
  );
}

export function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="features"
      className="!pt-[120px] !pb-[160px]"
      style={{ backgroundColor: "rgba(17,17,19,0.5)" }}
    >
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 96 }}
        >
          <p className="kicker">The Solution</p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#f2ede8",
              maxWidth: 640,
            }}
          >
            Four features. One argument.
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column" as const, gap: 140 }}>
          {FEATURES.map((feature, i) => (
            <FeatureBlock key={feature.id} feature={feature} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

