"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { projects } from "../data/projects";

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const router = useRouter();

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => router.push(`/project/${project.id}`)}
      className="group relative rounded-2xl border border-white/6 bg-[#0f0f0f] overflow-hidden cursor-pointer hover:border-white/12"
      style={{
        boxShadow: "none",
        display: "flex",
        flexDirection: "column",
        // Force GPU compositing layer so border-radius + overflow clip stays crisp.
        // Do NOT scale the card — scaling an overflow:hidden + rounded element causes
        // the browser to re-rasterize the clip path each frame, producing the 1px edge gap.
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        transition: "border-color 300ms ease",
      }}
      whileHover={{ boxShadow: `0 0 60px ${project.color}12` }}
    >
      {/* Thumbnail wrapper — isolated GPU layer, overflow:hidden clips the scaling image */}
      <div
        className="relative bg-[#111]"
        style={{
          height: 280,
          flexShrink: 0,
          overflow: "hidden",
          // Own compositing layer so the clip boundary never interferes with the card layer
          transform: "translateZ(0)",
        }}
      >
        {/* Image — only this element scales on hover, nothing else */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-[1.025]"
          style={{
            display: "block",           // kills inline baseline gap (default img bottom space)
            backfaceVisibility: "hidden",
            transform: "translateZ(0)", // initial GPU layer, avoids promotion flicker on hover start
            willChange: "transform",
            transition: "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />

        {/* Bottom gradient — always covers full wrapper with inset:0, never scales */}
        <div
          className="absolute pointer-events-none"
          style={{
            inset: 0,
            background: "linear-gradient(to top, #0f0f0f 0%, transparent 55%)",
            transform: "translateZ(0)",
          }}
        />

        {/* Hover darkening overlay — opacity/background-color only, no dimension changes */}
        <div
          className="absolute flex items-center justify-center"
          style={{
            inset: 0,
            backgroundColor: "transparent",
            transition: "background-color 300ms ease",
          }}
        >
          {/* Inner overlay colour via a child so we can use group-hover Tailwind class */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
          <div className="relative w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
            <ArrowUpRight size={20} className="text-white" />
          </div>
        </div>

        <span
          className="absolute top-4 right-4 text-xs tracking-widest select-none z-10 rounded-full border border-white/10 bg-black/50 backdrop-blur-sm"
          style={{ color: project.color, padding: "5px 10px" }}
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
            {/* Category kicker — 12px tracking */}
            <p
              className="text-xs uppercase"
              style={{ color: project.color, letterSpacing: "0.12em", lineHeight: 1 }}
            >
              {project.category}
            </p>
            {/* Title — line-height 1.1 */}
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

        {/* Tags — padding 7px 13px, min-height 30px, gap 10px */}
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

        {/* CTA link — align self start, gap 6px */}
        <div
          className="flex items-center text-xs tracking-wider uppercase"
          style={{ color: project.color, gap: 6, marginTop: "auto", paddingTop: 4 }}
        >
          View Project
          <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
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
          {/* Section label — 16px mb, 0.12em tracking */}
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
