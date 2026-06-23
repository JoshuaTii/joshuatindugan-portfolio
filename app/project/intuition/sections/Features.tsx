"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ClickableImage } from "@/app/components/ClickableImage";

const ACCENT = "var(--cs-accent-it)";
const EASE = [0.22, 1, 0.36, 1] as const;

const FEATURES = [
  {
    number: "01",
    title: "Scholarship Discovery and Smart Filtering",
    body: "InTuition surfaces scholarships that actually fit based on the student's profile. Smart filters let students narrow by deadline, award amount, eligibility, major, year level, and required materials so they spend time on opportunities worth applying for, not ones they will be rejected from.",
    bullets: [
      "Profile-driven matching runs automatically on setup",
      "Filters by deadline, amount, eligibility, and major",
      "Reduces time from search to qualified opportunity",
    ],
    image: "/intuition/final/Explore.png",
    alt: "InTuition scholarship discovery and filter view",
    imageRight: true,
  },
  {
    number: "02",
    title: "Streamlined Applications",
    body: "Students fill out one profile and reuse that information across multiple scholarship applications. The platform pre-fills form fields from stored data so each new application starts from a strong foundation instead of a blank form.",
    bullets: [
      "Stored profile data pre-fills application forms",
      "Removes repeated form-filling across scholarships",
      "Students focus on the application, not the paperwork",
    ],
    image: "/intuition/final/sign-up-1.png",
    alt: "InTuition streamlined scholarship application flow",
    imageRight: false,
  },
  {
    number: "03",
    title: "Reusable Student Profile",
    body: "The student profile is the engine behind everything. Students enter their academic background, interests, financial need, and goals once. That data powers matching, pre-fills forms, and builds a track record of applications over time.",
    bullets: [
      "Single profile powers the full platform experience",
      "Academic data, goals, and materials stored in one place",
      "Profile grows stronger the more the student uses it",
    ],
    image: "/intuition/final/Main.png",
    alt: "InTuition reusable student profile dashboard",
    imageRight: true,
  },
  {
    number: "04",
    title: "Networking and Peer Support",
    body: "Students connect with peers who have successfully navigated the scholarship process. Real stories and direct messaging make the process feel achievable and give first-generation students guidance they would not otherwise have access to.",
    bullets: [
      "Peer profiles tied to scholarship confidence and outcomes",
      "Community messaging for advice and shared experience",
      "Support grounded in real student stories",
    ],
    image: "/intuition/final/Chat-2.png",
    alt: "InTuition peer support and community chat",
    imageRight: false,
  },
];

function FeatureRow({
  feature,
}: {
  feature: (typeof FEATURES)[0];
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const textBlock = (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
      style={{ display: "flex", flexDirection: "column" as const, gap: 20 }}
    >
      <span
        style={{
          fontSize: "0.7rem",
          textTransform: "uppercase" as const,
          letterSpacing: "0.12em",
          color: ACCENT,
          fontWeight: 700,
        }}
      >
        {feature.number}
      </span>
      <h3
        style={{
          fontSize: "clamp(1.3rem, 2.8vw, 1.9rem)",
          fontWeight: 700,
          color: "var(--cs-text)",
          letterSpacing: "-0.02em",
          lineHeight: 1.15,
          margin: 0,
        }}
      >
        {feature.title}
      </h3>
      <p
        style={{
          fontSize: "0.95rem",
          lineHeight: 1.8,
          color: "var(--cs-text-muted)",
          maxWidth: 480,
        }}
      >
        {feature.body}
      </p>
      <ul style={{ display: "flex", flexDirection: "column" as const, gap: 10, margin: 0, paddingLeft: 0, listStyle: "none" }}>
        {feature.bullets.map((b) => (
          <li
            key={b}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
              fontSize: "0.875rem",
              color: "var(--cs-text-muted)",
              lineHeight: 1.5,
            }}
          >
            <span style={{ color: ACCENT, flexShrink: 0, marginTop: 2 }}>-</span>
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );

  const imageBlock = (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
      style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <ClickableImage
        src={feature.image}
        alt={feature.alt}
        loading="lazy"
      />
    </motion.div>
  );

  return (
    <div
      ref={ref}
      className="grid md:grid-cols-2"
      style={{ gap: "40px 100px", alignItems: "center" }}
    >
      {feature.imageRight ? (
        <>
          {textBlock}
          {imageBlock}
        </>
      ) : (
        <>
          <div className="order-2 md:order-1">{imageBlock}</div>
          <div className="order-1 md:order-2">{textBlock}</div>
        </>
      )}
    </div>
  );
}

export function Features() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="features"
      style={{
        scrollMarginTop: 80,
        paddingBlock: "120px 140px",
        backgroundColor: "var(--cs-bg-secondary)",
      }}
    >
      <div className="section-container">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ marginBottom: 100 }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 500,
              textTransform: "uppercase" as const,
              letterSpacing: "0.12em",
              color: ACCENT,
              marginBottom: 16,
            }}
          >
            Key Features
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--cs-text)",
              lineHeight: 1.1,
              maxWidth: 680,
            }}
          >
            One platform for every step
            <br className="hidden md:block" />
            of the scholarship journey.
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 120 }}>
          {FEATURES.map((feature) => (
            <FeatureRow key={feature.number} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
