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
      className="group relative rounded-2xl border border-white/6 bg-[#0f0f0f] overflow-hidden cursor-pointer transition-all duration-500 hover:border-white/12 hover:scale-[1.01]"
      style={{ boxShadow: "none" }}
      whileHover={{ boxShadow: `0 0 60px ${project.color}12` }}
    >
      {/* Thumbnail: 280px */}
      <div className="relative h-[280px] overflow-hidden bg-[#111]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex items-center justify-center transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
            <ArrowUpRight size={20} className="text-white" />
          </div>
        </div>

        <span
          className="absolute top-4 right-4 text-xs tracking-widest select-none z-10 px-2.5 py-1 rounded-full border border-white/10 bg-black/50 backdrop-blur-sm"
          style={{ color: project.color }}
        >
          {project.number}
        </span>
      </div>

      {/* Content: 32px padding, flex column, gap 16px between elements */}
      <div className="p-8 flex flex-col">
        <div className="flex items-start justify-between mb-5">
          <div>
            {/* category: mb 12px */}
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: project.color }}>
              {project.category}
            </p>
            <h3 className="text-white" style={{ fontSize: "1.2rem", fontWeight: 600, lineHeight: 1.3 }}>
              {project.title}
            </h3>
          </div>
          <span className="text-white/20 text-xs mt-0.5 shrink-0 ml-4">{project.year}</span>
        </div>

        {/* description: mb 20px, line-height 1.65 */}
        <p className="text-white/40 text-sm mb-5 line-clamp-3" style={{ lineHeight: 1.65 }}>
          {project.description}
        </p>

        {/* tags: gap 10px */}
        <div className="flex flex-wrap gap-[10px]">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-full text-xs border border-white/6 bg-white/3 text-white/40"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA: mt 20px */}
        <div className="mt-5 flex items-center gap-1.5 text-xs tracking-wider uppercase" style={{ color: project.color }}>
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
        {/* Header: mb 72px */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-[72px]"
        >
          {/* label: mb 16px */}
          <p className="text-[#4ade80] text-xs tracking-widest uppercase mb-4">Selected Work</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            {/* heading: mb 0 (gap handled by flex) */}
            <h2 className="text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Projects that matter
            </h2>
            <p className="text-white/35 text-sm max-w-xs" style={{ lineHeight: 1.65 }}>
              Click any project to explore the full case study.
            </p>
          </div>
        </motion.div>

        {/* Top row: 3 columns, gap 36px */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-9">
          {projects.slice(0, 3).map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
        {/* Bottom row: 2 columns, gap 36px, mt 36px */}
        <div className="grid md:grid-cols-2 gap-9 mt-9">
          {projects.slice(3).map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
