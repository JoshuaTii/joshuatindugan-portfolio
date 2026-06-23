"use client";
import { motion, useInView, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type ExperienceItem = {
  role:    string;
  org:     string;
  client?: string;
  period:  string;
  detail:  string;
};

// Ordered newest first
const EXPERIENCE: ExperienceItem[] = [
  {
    role:   "COMPETE bePlayfuel",
    org:    "Product Design Lead",
    client: "Orlando, Florida",
    period: "Jun 2026 - Present",
    detail: "Currently focused on strengthening COMPETE's UI and product experience by pitching a clearer design direction to the CEO and stakeholders, critiquing the existing design, and identifying stronger opportunities across the platform. Contributing to a more scalable, gamified sports experience by improving UI direction, user flows, gamified interactions, event discovery, and the overall competitive feel of the product. Role includes collaborating with designers and engineers, gathering complex data to support the app concept, proposing new features, leading co-designers through design direction, and supporting the product toward its next launch.",
  },
  {
    role:   "Interaction Design Student",
    org:    "George Washington University",
    period: "2022 - 2026",
    detail: "B.F.A. in Interaction Design, Minor in Graphic Design. Corcoran School of the Arts and Design. Graduated May 2026.",
  },
  {
    role:   "DDOT Workforce Stability Research Project",
    org:    "UX Researcher & Designer",
    client: "DDOT, Washington D.C.",
    period: "2025 - 2026",
    detail: "Designed accessible recruitment materials to support DDOT's workforce retention goals through research, targeted messaging, and visual communication.",
  },
  {
    role:   "National Gallery of Art Museum Experience Redesign",
    org:    "UX Researcher & Designer",
    client: "National Gallery of Art, Washington D.C.",
    period: "2025",
    detail: "Created interactive museum print materials, map concepts, icons, and family-friendly visual artifacts to improve engagement for younger visitors.",
  },
  {
    role:   "Web Designer Intern",
    org:    "Mom n Tot Spot, Alexandria VA",
    period: "2023",
    detail: "Redesigned the website to make booking easily accessible to users while improving the overall visual appearance.",
  },
  {
    role:   "Document Design Intern",
    org:    "Joy Riot, Advertisement Agency",
    period: "2023",
    detail: "Designed presentation templates and updated content for a more impactful, editable, and streamlined presentation.",
  },
  {
    role:   "Coding and Design Intern",
    org:    "Apple Coding Camp, MBSYEP D.C.",
    period: "2020",
    detail: "Completed programming curriculum and developed a prototype interior design application as a final project deliverable.",
  },
];

function ExperienceTimeline({ visible }: { visible: boolean }) {
  const containerRef    = useRef<HTMLDivElement>(null);
  const itemRefs        = useRef<(HTMLDivElement | null)[]>(EXPERIENCE.map(() => null));
  const circlePositions = useRef<number[]>([]);
  const [active, setActive]   = useState<boolean[]>(EXPERIENCE.map(() => false));
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReduced(true);
      setActive(EXPERIENCE.map(() => true));
      return;
    }

    // Cache each circle's center Y relative to containerRef (layout-stable, unaffected by transforms)
    const calcPositions = () => {
      circlePositions.current = itemRefs.current.map(ref =>
        // item.offsetTop = distance from item top to containerRef top (offsetParent)
        // circle top within item = 3px, circle half-height = 8px
        ref ? ref.offsetTop + 11 : Infinity
      );
    };

    calcPositions();
    window.addEventListener("resize", calcPositions, { passive: true });
    return () => window.removeEventListener("resize", calcPositions);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.15"],
  });

  // Collision: circle activates only when animated line tip reaches its center
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (reduced) return;
    const container = containerRef.current;
    if (!container || circlePositions.current.length === 0) return;

    // Line tip Y from container top: track starts at top:8, spans containerHeight-16
    const lineY = 8 + progress * (container.offsetHeight - 16);

    setActive(prev => {
      const next = circlePositions.current.map(cy => lineY >= cy);
      // Bail out if nothing changed to avoid unnecessary re-renders
      return prev.every((v, i) => v === next[i]) ? prev : next;
    });
  });

  return (
    <div ref={containerRef} style={{ position: "relative", paddingLeft: 24 }}>
      {/* Track line - always visible, muted grey */}
      <div style={{
        position: "absolute", left: 8, top: 8, bottom: 8, width: 2,
        background: "var(--timeline-muted)",
      }} />

      {/* Animated fill line - primary accent color, grows from top with scroll */}
      {reduced ? (
        <div style={{
          position: "absolute", left: 8, top: 8, bottom: 8, width: 2,
          background: "var(--accent)",
        }} />
      ) : (
        <motion.div style={{
          position: "absolute", left: 8, top: 8, bottom: 8, width: 2,
          background: "var(--accent)",
          transformOrigin: "top",
          scaleY: scrollYProgress,
        }} />
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        {EXPERIENCE.map((item, i) => (
          <motion.div
            key={i}
            data-exp=""
            ref={(el) => { itemRefs.current[i] = el as HTMLDivElement | null; }}
            initial={{ opacity: 0, y: 12 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.18 + i * 0.08, ease: EASE }}
            style={{ position: "relative" }}
          >
            {/* Circle indicator
                Idle:   muted grey stroke, transparent fill, no inner dot
                Active: accent stroke, accent inner dot (not solid filled) */}
            <div style={{
              position:     "absolute",
              left:         -23,
              top:          3,
              width:        16,
              height:       16,
              borderRadius: "50%",
              border:       `1.5px solid ${active[i] ? "var(--accent)" : "var(--timeline-muted)"}`,
              background:   "transparent",
              transition:   "border-color 350ms ease",
              display:      "flex",
              alignItems:   "center",
              justifyContent: "center",
              zIndex:       1,
            }}>
              {/* Inner dot - appears only when active */}
              <div style={{
                width:      6,
                height:     6,
                borderRadius: "50%",
                background: "var(--accent)",
                opacity:    active[i] ? 1 : 0,
                transform:  active[i] ? "scale(1)" : "scale(0.3)",
                transition: "opacity 300ms ease, transform 300ms ease",
              }} />
            </div>

            {/* Content */}
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <p style={{
                fontFamily: "var(--font-sans, 'Sora', sans-serif)",
                fontSize: "0.875rem", fontWeight: 700,
                color: "var(--text)", lineHeight: 1.2,
              }}>
                {item.role}
              </p>
              <p style={{
                fontFamily: "var(--font-sans, 'Sora', sans-serif)",
                fontSize: "0.75rem", fontWeight: 600,
                color: "var(--accent)",
              }}>
                {item.org}
              </p>
              {item.client && (
                <p style={{
                  fontFamily: "var(--font-sans, 'Sora', sans-serif)",
                  fontSize: "0.68rem", color: "var(--text-3)",
                }}>
                  {item.client}
                </p>
              )}
              <p style={{
                fontFamily: "var(--font-sans, 'Sora', sans-serif)",
                fontSize: "0.68rem", color: "var(--text-3)",
              }}>
                {item.period}
              </p>
              <p style={{
                fontFamily: "var(--font-sans, 'Sora', sans-serif)",
                fontSize: "0.875rem", lineHeight: 1.65,
                color: "var(--text-2)", marginTop: 4,
              }}>
                {item.detail}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function About() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="about"
      style={{
        position: "relative", zIndex: 1,
        paddingBlock: "100px 120px",
        background: "var(--bg-secondary)",
        transition: "background 300ms ease",
      }}
    >
      <div ref={ref} className="section-container grid md:grid-cols-2" style={{ gap: 72, alignItems: "start" }}>

        {/* Left - bio */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
          style={{ display: "flex", flexDirection: "column", gap: 22 }}
        >
          <p style={{
            fontFamily: "var(--font-sans, 'Sora', sans-serif)",
            fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.2em",
            textTransform: "uppercase", color: "var(--text-3)",
          }}>
            ABOUT
          </p>
          <h2 style={{
            fontFamily: "var(--font-hand, 'Caveat', cursive)",
            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
            fontWeight: 700, color: "var(--accent)", lineHeight: 1.05,
          }}>
            Who is Joshua?
          </h2>

          <p style={{ fontFamily: "var(--font-sans, 'Sora', sans-serif)", fontSize: "1rem", lineHeight: 1.78, color: "var(--text-2)" }}>
            My name is Joshua Uba Tindugan, a UX/UI designer shaped by art, curiosity, and the belief that design should feel human. Growing up on the small island of Camiguin in the Philippines, there was little access to technology, but drawing became my first way of exploring ideas, stories, and imagination. After moving to the United States, I discovered how art and technology could work together, which led me to pursue Interaction Design at George Washington University.
          </p>
          <p style={{ fontFamily: "var(--font-sans, 'Sora', sans-serif)", fontSize: "1rem", lineHeight: 1.78, color: "var(--text-2)" }}>
            Through my time at GWU, I have been able to learn from design professors, receive feedback from established designers, and grow through projects that challenged me to think beyond the screen. My goal as a designer is to create transparent, accessible, and immersive experiences that feel simple, intuitive, and meaningful.
          </p>

          <p style={{
            fontFamily: "var(--font-sans, 'Sora', sans-serif)",
            fontSize: "1rem", fontWeight: 600, color: "var(--text-2)", lineHeight: 1.78, marginTop: 4,
          }}>
            UI/UX does not only live on screens. It lives in the moments where people feel seen, guided, and understood.
          </p>
        </motion.div>

        {/* Right - experience timeline */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.12, ease: EASE }}
          style={{ display: "flex", flexDirection: "column", gap: 28, position: "relative" }}
        >
          <p style={{
            fontFamily: "var(--font-sans, 'Sora', sans-serif)",
            fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.2em",
            textTransform: "uppercase", color: "var(--text-3)",
          }}>
            IMPACTFUL EXPERIENCE
          </p>

          <ExperienceTimeline visible={inView} />
        </motion.div>

      </div>
    </section>
  );
}
