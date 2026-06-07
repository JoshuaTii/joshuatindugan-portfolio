"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";

const EASE = [0.22, 1, 0.36, 1] as const;

const PROJECTS = [
  {
    id:        "sage-financial",
    title:     "SAGE",
    category:  "PRODUCT DESIGN",
    date:      "FALL 2025 | SPRING 2026",
    image:     "/sage.png",
    href:      "/project/sage-financial",
    btnLabel:  "View Case Study",
    tags:      ["Fintech", "Accessibility", "UX Research", "Equity Design", "Systems Design", "UI/UX"],
    description: "A financial empowerment platform designed for Washington D.C's Ward 7 and Ward 8 communities, neighborhoods historically denied access to banking and capital, helping residents navigate safer financial options and reduce reliance on predatory lenders.",
  },
  {
    id:        "sage-editorial",
    title:     "SAGE: EDITORIAL",
    category:  "EDITORIAL PRODUCT DESIGN",
    date:      "SPRING 2026",
    image:     "/sage-editorial.png",
    href:      "/project/sage-editorial",
    btnLabel:  "View Case Study",
    tags:      ["Editorial Design", "Typography", "Figma"],
    description: "SAGE Editorial expands the thesis project into a content-driven platform that explores the everyday realities, overlooked stories, and community context surrounding financial access in D.C.",
  },
  {
    id:        "intuition",
    title:     "InTUITION",
    category:  "PRODUCT DESIGN",
    date:      "FALL 2024",
    image:     "/intuition.png",
    href:      "/project/intuition",
    btnLabel:  "View Case Study",
    tags:      ["EdTech", "Student Design", "UX Research", "Accessibility"],
    description: "A concept that replaces the fragmented scholarship search with a single smart platform. It matches students to opportunities based on their profile and allows streamline application.",
  },
  {
    id:        "gw-ride",
    title:     "GW RIDE",
    category:  "PRODUCT DESIGN",
    date:      "SPRING 2024",
    image:     "/gw-ride.png",
    href:      "/project/gw-ride",
    btnLabel:  "View Case Study",
    tags:      ["Mobile Design", "Transit UX", "Figma"],
    description: "A mobile app concept designed to reduce the uncertainty GWU students face around shuttle timing, route visibility, and stop coverage, so navigating campus feels low-stress.",
  },
  {
    id:        "photography",
    title:     "PHOTOGRAPHY ARCHIVE",
    category:  "PHOTOGRAPHY",
    date:      "2023 | PRESENT",
    image:     "/photography-2.png",
    href:      "/project/photography",
    btnLabel:  "View Archive",
    tags:      ["Photography", "Art Direction", "Lightroom"],
    description: "A visual archive of lifestyle, editorial, and brand photography, studying color, composition, and perspective beyond the technical.",
  },
];

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const router = useRouter();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.06, ease: EASE }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", flexDirection: "column",
        background: "var(--card)",
        border: "1px solid",
        borderColor: hovered ? "var(--card-hover)" : "var(--card-border)",
        borderRadius: 12, overflow: "hidden",
        cursor: "pointer",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
        transition: "transform 280ms ease, border-color 280ms ease",
        willChange: "transform",
      }}
    >
      {/* Thumbnail */}
      <div
        onClick={() => router.push(project.href)}
        style={{ position: "relative", height: 220, overflow: "hidden", background: "var(--bg-secondary)", flexShrink: 0 }}
      >
        <img
          src={project.image}
          alt={project.title}
          loading={index === 0 ? "eager" : "lazy"}
          style={{
            width: "100%", height: "100%", objectFit: "cover", display: "block",
            transform: hovered ? "scale(1.04)" : "scale(1)",
            transition: "transform 480ms cubic-bezier(0.22,1,0.36,1)",
            willChange: "transform",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.22)", opacity: hovered ? 1 : 0, transition: "opacity 280ms ease", pointerEvents: "none" }} />
      </div>

      {/* Card body */}
      <div style={{ display: "flex", flexDirection: "column", padding: "20px 20px 20px", gap: 10, flexGrow: 1 }}>

        {/* Meta row — category left (green), date right (green) */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
          <span style={{
            fontFamily: "var(--font-sans, 'Montserrat', sans-serif)",
            fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.1em",
            textTransform: "uppercase", color: "var(--green)",
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
          }}>
            {project.category}
          </span>
          <span style={{
            fontFamily: "var(--font-sans, 'Montserrat', sans-serif)",
            fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.06em",
            color: "var(--green)", flexShrink: 0, whiteSpace: "nowrap",
          }}>
            {project.date}
          </span>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: "var(--font-sans, 'Montserrat', sans-serif)",
          fontSize: "1.25rem", fontWeight: 800, letterSpacing: "-0.01em",
          color: "var(--text)", lineHeight: 1.15,
        }}>
          {project.title}
        </h3>

        {/* Description */}
        <p className="line-clamp-3" style={{
          fontFamily: "var(--font-sans, 'Montserrat', sans-serif)",
          fontSize: "0.78rem", lineHeight: 1.65,
          color: "var(--text-2)", flexGrow: 1,
        }}>
          {project.description}
        </p>

        {/* Tags — dot-separated, below description */}
        {project.tags.length > 0 && (
          <p style={{
            fontFamily: "var(--font-sans, 'Montserrat', sans-serif)",
            fontSize: "0.62rem", fontWeight: 500,
            letterSpacing: "0.06em",
            color: "var(--text-3)",
            lineHeight: 1.6,
          }}>
            {project.tags.join(" · ")}
          </p>
        )}

        {/* CTA button */}
        <button
          onClick={() => router.push(project.href)}
          style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: "100%", marginTop: 4,
            fontFamily: "var(--font-sans, 'Montserrat', sans-serif)",
            fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.02em",
            color: hovered ? "var(--green)" : "var(--text-2)",
            background: "transparent",
            border: `1px solid ${hovered ? "var(--green-border)" : "var(--card-border)"}`,
            borderRadius: 100, cursor: "pointer",
            padding: "11px 20px",
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
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section id="work" style={{ position: "relative", zIndex: 1, paddingBlock: "100px 120px", background: "var(--bg)", transition: "background 300ms ease" }}>
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ marginBottom: 52 }}
        >
          <p style={{ fontFamily: "var(--font-sans, 'Montserrat', sans-serif)", fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 14 }}>
            SELECTED PROJECTS
          </p>
          <h2 style={{ fontFamily: "var(--font-hand, 'Caveat', cursive)", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 700, color: "var(--green)", lineHeight: 1.05 }}>
            Projects that mattered to me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2" style={{ gap: 24, marginBottom: 24 }}>
          {PROJECTS.slice(0, 2).map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
        <div className="grid md:grid-cols-3" style={{ gap: 24 }}>
          {PROJECTS.slice(2).map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i + 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
