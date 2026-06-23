"use client";
import { Fragment, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";

const EASE = [0.22, 1, 0.36, 1] as const;

type Project = {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  href: string;
  btnLabel: string;
  tags: string[];
  description: string;
  thumbLogo?: string;
  /**
   * Set to `true` to show a "Work in Progress" overlay and block navigation.
   * To re-enable: remove this line or change to `false`.
   */
  isDisabled?: boolean;
};

const FEATURED: Project[] = [
  {
    id:          "sage-financial",
    title:       "SAGE",
    category:    "PRODUCT DESIGN",
    date:        "FALL 2025 | SPRING 2026",
    image:       "/sage.png",
    href:        "/project/sage-financial",
    btnLabel:    "View Case Study",
    tags:        ["Fintech", "Accessibility", "UX Research", "Equity Design", "Systems Design", "UI/UX"],
    description: "A financial empowerment platform designed for Washington D.C's Ward 7 and Ward 8 communities, helping residents navigate safer financial options and reduce reliance on predatory lenders.",
  },
  {
    id:          "sage-editorial",
    title:       "SAGE: EDITORIAL",
    category:    "EDITORIAL PRODUCT DESIGN",
    date:        "SPRING 2026",
    image:       "/sage-editorial.png",
    thumbLogo:   "/sage-editorial/logo.png",
    href:        "/project/sage-editorial",
    btnLabel:    "View Case Study",
    tags:        ["Editorial Design", "Typography", "Figma"],
    description: "SAGE Editorial expands the thesis project into a content-driven platform that explores the everyday realities, overlooked stories, and community context surrounding financial access in D.C.",
  },
  {
    id:          "gw-ride",
    title:       "GW RIDE",
    category:    "PRODUCT DESIGN",
    date:        "SPRING 2024",
    image:       "/gw-ride.png",
    thumbLogo:   "/gw-ride/logo.png",
    href:        "/project/gw-ride",
    btnLabel:    "View Case Study",
    tags:        ["Mobile Design", "Transit UX", "Figma"],
    description: "A mobile app concept designed to reduce the uncertainty GWU students face around shuttle timing, route visibility, and stop coverage, so navigating campus feels low-stress.",
  },
  {
    id:          "intuition",
    title:       "InTUITION",
    category:    "PRODUCT DESIGN",
    date:        "FALL 2024",
    image:       "/intuition.png",
    href:        "/project/intuition",
    btnLabel:    "View Case Study",
    tags:        ["EdTech", "Student Design", "UX Research", "Accessibility"],
    description: "A concept that replaces the fragmented scholarship search with a single smart platform. It matches students to opportunities based on their profile and allows streamlined application.",
    // ─── TEMPORARILY DISABLED ────────────────────────────────────────────────
    // Remove this line (or set to false) to re-enable the InTuition case study.
    isDisabled: true,
    // ─────────────────────────────────────────────────────────────────────────
  },
];

const PHOTOGRAPHY: Project = {
  id:          "photography",
  title:       "PHOTOGRAPHY ARCHIVE",
  category:    "PHOTOGRAPHY",
  date:        "2023 | PRESENT",
  image:       "/photography-2.png",
  href:        "/project/photography",
  btnLabel:    "View Archive",
  tags:        ["Photography", "Art Direction", "Lightroom"],
  description: "A visual archive of lifestyle, editorial, and brand photography, studying color, composition, and perspective beyond the technical.",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const router = useRouter();
  const [hovered, setHovered] = useState(false);

  const isDisabled = project.isDisabled === true;

  // When disabled, navigate does nothing — all click handlers use this
  const handleNavigate = () => {
    if (!isDisabled) router.push(project.href);
  };

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.06, ease: EASE }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative", // required for absolute overlay/badge children
        display: "flex", flexDirection: "column",
        background: "var(--card)",
        border: "1px solid",
        borderColor: hovered ? "var(--card-border-hover)" : "var(--card-border)",
        borderRadius: 12, overflow: "hidden",
        // Disabled cards don't lift — no pointer affordance
        cursor: isDisabled ? "default" : "pointer",
        transform: (!isDisabled && hovered) ? "translateY(-3px)" : "translateY(0)",
        boxShadow: (!isDisabled && hovered) ? "var(--card-shadow-hover)" : "var(--card-shadow)",
        transition: "transform 280ms ease, border-color 280ms ease, box-shadow 280ms ease",
        willChange: "transform",
      }}
    >
      {/* Thumbnail */}
      <div
        onClick={handleNavigate}
        style={{
          position: "relative", height: 220, overflow: "hidden", flexShrink: 0,
          background: project.thumbLogo ? "#ffffff" : "var(--bg-secondary)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >
        <img
          src={project.thumbLogo ?? project.image}
          alt={project.title}
          loading={index === 0 ? "eager" : "lazy"}
          style={project.thumbLogo ? {
            maxWidth: "62%", maxHeight: "62%", objectFit: "contain", display: "block",
            transform: (!isDisabled && hovered) ? "scale(1.04)" : "scale(1)",
            transition: "transform 480ms cubic-bezier(0.22,1,0.36,1)",
            willChange: "transform",
          } : {
            width: "100%", height: "100%", objectFit: "cover", display: "block",
            transform: (!isDisabled && hovered) ? "scale(1.04)" : "scale(1)",
            transition: "transform 480ms cubic-bezier(0.22,1,0.36,1)",
            willChange: "transform",
          }}
        />
        {/* Standard hover scrim (only for non-disabled cards) */}
        {!isDisabled && (
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: project.thumbLogo ? "rgba(0,0,0,0.04)" : "rgba(0,0,0,0.22)",
            opacity: hovered ? 1 : 0, transition: "opacity 280ms ease",
          }} />
        )}
      </div>

      {/* Card body */}
      <div style={{ display: "flex", flexDirection: "column", padding: "20px 20px 20px", gap: 10, flexGrow: 1 }}>

        {/* Meta row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
          <span style={{
            fontFamily: "var(--font-sans, 'Sora', sans-serif)",
            fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.1em",
            textTransform: "uppercase", color: "var(--green)",
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
          }}>
            {project.category}
          </span>
          <span style={{
            fontFamily: "var(--font-sans, 'Sora', sans-serif)",
            fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.06em",
            color: "var(--green)", flexShrink: 0, whiteSpace: "nowrap",
          }}>
            {project.date}
          </span>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: "var(--font-sans, 'Sora', sans-serif)",
          fontSize: "1.25rem", fontWeight: 800, letterSpacing: "-0.01em",
          color: "var(--text)", lineHeight: 1.15,
        }}>
          {project.title}
        </h3>

        {/* Description */}
        <p style={{
          fontFamily: "var(--font-sans, 'Sora', sans-serif)",
          fontSize: "0.9rem", lineHeight: 1.6,
          color: "var(--text-2)", flexGrow: 1,
        }}>
          {project.description}
        </p>

        {/* Tags */}
        {project.tags.length > 0 && (
          <div style={{
            display: "flex", flexWrap: "wrap", alignItems: "center",
            rowGap: 4, marginTop: 12,
          }}>
            {project.tags.map((tag, i) => (
              <Fragment key={tag}>
                {i > 0 && (
                  <span style={{
                    margin: "0 7px",
                    fontFamily: "var(--font-sans, 'Sora', sans-serif)",
                    fontSize: "0.62rem", color: "var(--text-3)", opacity: 0.55,
                    userSelect: "none",
                  }}>·</span>
                )}
                <span style={{
                  fontFamily: "var(--font-sans, 'Sora', sans-serif)",
                  fontSize: "0.7rem", fontWeight: 500,
                  letterSpacing: "0.05em", color: "var(--text-3)",
                  lineHeight: 1.5,
                }}>
                  {tag}
                </span>
              </Fragment>
            ))}
          </div>
        )}

        {/* CTA button */}
        <button
          onClick={handleNavigate}
          disabled={isDisabled}
          style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: "100%", marginTop: 16,
            fontFamily: "var(--font-sans, 'Sora', sans-serif)",
            fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.02em",
            color: isDisabled ? "var(--text-3)" : (hovered ? "var(--green)" : "var(--text-2)"),
            background: "transparent",
            border: `1px solid ${isDisabled ? "var(--card-border)" : (hovered ? "var(--green-border)" : "var(--card-border)")}`,
            borderRadius: 100,
            cursor: isDisabled ? "default" : "pointer",
            padding: "11px 20px",
            opacity: isDisabled ? 0.55 : 1,
            transition: "color 220ms ease, border-color 220ms ease, opacity 220ms ease",
          }}
        >
          {isDisabled ? "Being Updated" : project.btnLabel}
        </button>
      </div>

      {/* ── WIP overlay: covers full card on hover (desktop), pointer-events none ─── */}
      {isDisabled && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute", inset: 0, zIndex: 2,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            gap: 6,
            background: "var(--nav-bg)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 280ms ease",
            pointerEvents: "none",
          }}
        >
          <span style={{
            fontFamily: "var(--font-sans, 'Sora', sans-serif)",
            fontSize: "0.75rem", fontWeight: 700,
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: "var(--text)",
          }}>
            Work in Progress
          </span>
          <span style={{
            fontFamily: "var(--font-sans, 'Sora', sans-serif)",
            fontSize: "0.72rem", fontWeight: 400,
            letterSpacing: "0.02em",
            color: "var(--text-2)",
          }}>
            Case study is being updated.
          </span>
        </div>
      )}

      {/* ── WIP badge: always visible — communicates state on touch where hover is unavailable ── */}
      {isDisabled && (
        <div
          aria-label="Work in Progress"
          style={{
            position: "absolute", top: 10, right: 10, zIndex: 3,
            display: "inline-flex", alignItems: "center", gap: 5,
            padding: "4px 10px", borderRadius: 100,
            background: "var(--nav-bg)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: "1px solid var(--card-border)",
            pointerEvents: "none",
          }}
        >
          <span style={{
            width: 5, height: 5, borderRadius: "50%",
            background: "var(--green)", flexShrink: 0,
          }} />
          <span style={{
            fontFamily: "var(--font-sans, 'Sora', sans-serif)",
            fontSize: "0.58rem", fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: "var(--text-2)",
          }}>
            Updating
          </span>
        </div>
      )}
    </motion.article>
  );
}

function PhotographyCard({ project }: { project: Project }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const router = useRouter();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: EASE }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", flexDirection: "column",
        background: "var(--card)",
        border: "1px solid",
        borderColor: hovered ? "var(--card-border-hover)" : "var(--card-border)",
        borderRadius: 12, overflow: "hidden",
        cursor: "pointer",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hovered ? "var(--card-shadow-hover)" : "var(--card-shadow)",
        transition: "transform 280ms ease, border-color 280ms ease, box-shadow 280ms ease",
        willChange: "transform",
        maxWidth: 620,
        width: "100%",
        margin: "0 auto",
      }}
    >
      {/* Thumbnail */}
      <div
        onClick={() => router.push(project.href)}
        style={{
          position: "relative", height: 260, overflow: "hidden", flexShrink: 0,
          background: "var(--bg-secondary)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          style={{
            width: "100%", height: "100%", objectFit: "cover", display: "block",
            transform: hovered ? "scale(1.04)" : "scale(1)",
            transition: "transform 480ms cubic-bezier(0.22,1,0.36,1)",
            willChange: "transform",
          }}
        />
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "rgba(0,0,0,0.22)",
          opacity: hovered ? 1 : 0, transition: "opacity 280ms ease",
        }} />
      </div>

      {/* Card body */}
      <div style={{ display: "flex", flexDirection: "column", padding: "24px 24px 24px", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
          <span style={{
            fontFamily: "var(--font-sans, 'Sora', sans-serif)",
            fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.1em",
            textTransform: "uppercase", color: "var(--green)",
          }}>
            {project.category}
          </span>
          <span style={{
            fontFamily: "var(--font-sans, 'Sora', sans-serif)",
            fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.06em",
            color: "var(--green)", flexShrink: 0,
          }}>
            {project.date}
          </span>
        </div>

        <h3 style={{
          fontFamily: "var(--font-sans, 'Sora', sans-serif)",
          fontSize: "1.25rem", fontWeight: 800, letterSpacing: "-0.01em",
          color: "var(--text)", lineHeight: 1.15,
        }}>
          {project.title}
        </h3>

        <p style={{
          fontFamily: "var(--font-sans, 'Sora', sans-serif)",
          fontSize: "0.9rem", lineHeight: 1.6,
          color: "var(--text-2)", maxWidth: 480,
        }}>
          {project.description}
        </p>

        {project.tags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", rowGap: 4, marginTop: 8 }}>
            {project.tags.map((tag, i) => (
              <Fragment key={tag}>
                {i > 0 && (
                  <span style={{ margin: "0 7px", fontFamily: "var(--font-sans, 'Sora', sans-serif)", fontSize: "0.62rem", color: "var(--text-3)", opacity: 0.55, userSelect: "none" }}>·</span>
                )}
                <span style={{ fontFamily: "var(--font-sans, 'Sora', sans-serif)", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.05em", color: "var(--text-3)", lineHeight: 1.5 }}>
                  {tag}
                </span>
              </Fragment>
            ))}
          </div>
        )}

        <button
          onClick={() => router.push(project.href)}
          style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            alignSelf: "flex-start", marginTop: 16,
            fontFamily: "var(--font-sans, 'Sora', sans-serif)",
            fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.02em",
            color: hovered ? "var(--green)" : "var(--text-2)",
            background: "transparent",
            border: `1px solid ${hovered ? "var(--green-border)" : "var(--card-border)"}`,
            borderRadius: 100, cursor: "pointer",
            padding: "11px 28px",
            transition: "color 220ms ease, border-color 220ms ease",
          }}
        >
          {project.btnLabel}
        </button>
      </div>
    </motion.article>
  );
}

export function Work() {
  const ref      = useRef(null);
  const refStudy = useRef(null);
  const inView      = useInView(ref,      { once: true, margin: "-40px" });
  const inViewStudy = useInView(refStudy, { once: true, margin: "-40px" });

  return (
    <>
      {/* ── Featured Case Studies ───────────────────────────────────────────── */}
      <section
        id="work"
        style={{ position: "relative", zIndex: 1, paddingBlock: "100px 120px", background: "var(--bg)", transition: "background 300ms ease" }}
      >
        <div className="section-container">
          {/* Section header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            style={{ marginBottom: 52 }}
          >
            <p style={{ fontFamily: "var(--font-sans, 'Sora', sans-serif)", fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 14 }}>
              SELECTED PROJECTS
            </p>
            <h2 style={{ fontFamily: "var(--font-hand, 'Caveat', cursive)", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 700, color: "var(--green)", lineHeight: 1.05 }}>
              Projects that mattered to me
            </h2>
          </motion.div>

          {/* 2×2 featured grid */}
          <div className="grid md:grid-cols-2" style={{ gap: 24 }}>
            {FEATURED.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Visual Study ────────────────────────────────────────────────────── */}
      <section
        id="visual-study"
        style={{ position: "relative", zIndex: 1, paddingBlock: "80px 100px", background: "var(--bg-secondary)", transition: "background 300ms ease" }}
      >
        {/* Top divider */}
        <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 40, right: 40, height: 1, background: "var(--card-border)" }} />

        <div className="section-container">
          <motion.div
            ref={refStudy}
            initial={{ opacity: 0, y: 24 }}
            animate={inViewStudy ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            style={{ marginBottom: 48 }}
          >
            <p style={{ fontFamily: "var(--font-sans, 'Sora', sans-serif)", fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 14 }}>
              VISUAL STUDY
            </p>
            <h2 style={{ fontFamily: "var(--font-hand, 'Caveat', cursive)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "var(--green)", lineHeight: 1.05, marginBottom: 12 }}>
              Photography Archive
            </h2>
            <p style={{ fontFamily: "var(--font-sans, 'Sora', sans-serif)", fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-2)", maxWidth: 480 }}>
              A personal study in light, color, and composition, separate from the product work but part of the same practice.
            </p>
          </motion.div>

          <PhotographyCard project={PHOTOGRAPHY} />
        </div>
      </section>
    </>
  );
}
