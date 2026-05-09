"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { projects } from "../data/projects";

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const router = useRouter();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => router.push(`/project/${project.id}`)}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); router.push(`/project/${project.id}`); } }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
      role="link"
      aria-label={`View ${project.title} case study`}
      className="relative rounded-2xl bg-[#0f0f0f] overflow-hidden cursor-pointer"
      style={{
        contain: "layout paint",
        display: "flex",
        flexDirection: "column",
        border: "1px solid",
        borderColor: hovered ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)",
        boxShadow: hovered ? `0 0 48px ${project.color}14` : "none",
        transition: "border-color 300ms ease, box-shadow 300ms ease",
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
      }}
    >
      {/* Thumbnail — isolated GPU layer, clips the scaling image */}
      <div
        style={{
          position: "relative",
          height: 280,
          flexShrink: 0,
          overflow: "hidden",
          isolation: "isolate",
          transform: "translateZ(0)",
          backgroundColor: "#111",
        }}
      >
        {/* Image — scale driven by hovered state so transform + transition stay in sync */}
        <img
          src={project.image}
          alt={project.title}
          loading={index === 0 ? "eager" : "lazy"}
          className="w-full h-full object-cover"
          style={{
            display: "block",
            transform: hovered ? "scale(1.03)" : "scale(1)",
            transition: "transform 450ms cubic-bezier(0.22, 1, 0.36, 1)",
            willChange: "transform",
          }}
        />

        {/* Bottom gradient — always visible, never animates */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, #0f0f0f 0%, transparent 55%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* Darkening overlay — opacity-only transition avoids background-color repaint per frame */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.36)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 300ms ease",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />

        {/* Arrow button — no backdrop-filter to prevent compositing layer flicker */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            zIndex: 3,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: hovered ? 1 : 0,
              transform: hovered ? "scale(1)" : "scale(0.9)",
              transition: "opacity 300ms ease, transform 300ms ease",
            }}
          >
            <ArrowUpRight size={20} color="white" />
          </div>
        </div>

        {/* Project number badge */}
        <span
          className="absolute top-4 right-4 text-xs tracking-widest select-none rounded-full border border-white/10 bg-black/50"
          style={{ color: project.color, padding: "5px 10px", zIndex: 4 }}
        >
          {project.number}
        </span>
      </div>

      {/* Card content: 32px padding, flex column, gap 18px between all elements */}
      <div
        className="flex flex-col"
        style={{ padding: 32, gap: 18, flexGrow: 1 }}
      >
        {/* Meta row: category left, year right */}
        <div className="flex items-start justify-between" style={{ gap: 16 }}>
          <div className="flex flex-col" style={{ gap: 10 }}>
            <p
              className="text-xs uppercase"
              style={{ color: project.color, letterSpacing: "0.12em", lineHeight: 1 }}
            >
              {project.category}
            </p>
            <h3
              className="text-white"
              style={{ fontSize: "1.2rem", fontWeight: 600, lineHeight: 1.1 }}
            >
              {project.title}
            </h3>
          </div>
          <span className="text-white/20 text-xs shrink-0" style={{ marginTop: 2 }}>
            {project.year}
          </span>
        </div>

        {/* Description — line-height 1.65, 3-line clamp */}
        <p className="text-white/40 text-sm line-clamp-3" style={{ lineHeight: 1.65 }}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap" style={{ gap: 10 }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-white/6 bg-white/3 text-white/40 text-xs"
              style={{ padding: "7px 13px", minHeight: 30, lineHeight: 1 }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div
          className="flex items-center text-xs tracking-wider uppercase"
          style={{ color: project.color, gap: 6, marginTop: "auto", paddingTop: 4 }}
        >
          View Project
          <ArrowUpRight
            size={13}
            style={{
              transform: hovered ? "translate(2px, -2px)" : "translate(0, 0)",
              transition: "transform 300ms ease",
            }}
          />
        </div>
      </div>
    </motion.article>
  );
}

export function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="relative z-10 !pt-[120px] !pb-[140px] bg-[#090909]/60">
      <div className="section-container">

        {/* Work header: title left, helper text right — grid, mb 72px */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 72 }}
        >
          {/* Section label */}
          <p
            className="text-[#4ade80] text-xs uppercase"
            style={{ letterSpacing: "0.12em", marginBottom: 16 }}
          >
            Selected Work
          </p>

          {/* Title + helper in a row at md+ */}
          <div
            className="flex flex-col md:flex-row md:items-end md:justify-between"
            style={{ gap: "24px 64px" }}
          >
            <h2
              className="text-white"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Projects that matter
            </h2>
            <p
              className="text-white/35 text-sm"
              style={{ lineHeight: 1.55, maxWidth: 420, textAlign: "right" }}
            >
              Click any project to explore the full case study.
            </p>
          </div>
        </motion.div>

        {/* Top 3-column grid — gap 36px */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3" style={{ gap: 36 }}>
          {projects.slice(0, 3).map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Bottom 2-column grid — gap 36px, mt 36px */}
        <div className="grid md:grid-cols-2" style={{ gap: 36, marginTop: 36 }}>
          {projects.slice(3).map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
