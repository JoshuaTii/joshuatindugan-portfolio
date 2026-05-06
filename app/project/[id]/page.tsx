"use client";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Wrench, User } from "lucide-react";
import { projects } from "../../data/projects";

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const index = projects.findIndex((p) => p.id === id);
  const project = projects[index];
  const prev = projects[index - 1];
  const next = projects[index + 1];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white/40 bg-[#090909]">
        Project not found.{" "}
        <Link href="/" className="text-[#4ade80] ml-2 underline">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#090909]" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* Fixed top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#090909]/85 backdrop-blur-xl border-b border-white/5">
        <div className="section-container py-4 md:py-5 flex items-center justify-between">
          <button
            onClick={() => router.push("/#work")}
            className="flex items-center gap-2.5 text-white/50 hover:text-white transition-colors duration-300 text-sm group"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Work
          </button>
          <span className="text-white/20 text-xs tracking-widest uppercase">
            {project.number} / 05
          </span>
        </div>
      </div>

      {/* Hero image — full width */}
      <section className="relative pt-16 md:pt-[72px]">
        <div className="relative h-[55vh] md:h-[65vh] overflow-hidden">
          <img
            src={project.logo}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/30 to-transparent" />

          {/* Title overlay — centered container */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="section-container pb-14 md:pb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: project.color }}>
                  {project.category} · {project.year}
                </p>
                <h1
                  className="text-white max-w-3xl"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em" }}
                >
                  {project.title}
                </h1>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Case study content */}
      <div className="relative z-10">
        <div className="section-container py-24 md:py-32">

          {/* Meta cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 mb-28 md:mb-32"
          >
            {[
              { icon: User, label: "Role", value: project.role },
              { icon: Clock, label: "Duration", value: project.duration },
              { icon: Wrench, label: "Tools", value: project.tools.join(", ") },
            ].map((item, i) => (
              <div key={i} className="p-5 md:p-6 rounded-2xl border border-white/6 bg-white/2">
                <div className="flex items-center gap-2 mb-3">
                  <item.icon size={13} style={{ color: project.color }} />
                  <span className="text-xs tracking-widest uppercase text-white/30">{item.label}</span>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">{item.value}</p>
              </div>
            ))}
          </motion.div>

          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-28 md:mb-32"
          >
            <p className="text-xs tracking-widest uppercase mb-5" style={{ color: project.color }}>Overview</p>
            <p className="text-white/60 max-w-3xl" style={{ fontSize: "1.15rem", lineHeight: 1.9 }}>
              {project.overview}
            </p>
          </motion.div>

          {/* Main project image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-28 md:mb-32 rounded-2xl overflow-hidden border border-white/6"
          >
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full object-cover"
            />
          </motion.div>

          {/* Problem / Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="grid md:grid-cols-2 gap-6 md:gap-8 mb-28 md:mb-32"
          >
            <div className="p-8 md:p-10 rounded-2xl border border-white/6 bg-white/2">
              <p className="text-xs tracking-widest uppercase mb-5" style={{ color: project.color }}>The Problem</p>
              <p className="text-white/55" style={{ lineHeight: 1.85 }}>{project.problem}</p>
            </div>
            <div className="p-8 md:p-10 rounded-2xl border border-white/6 bg-white/2">
              <p className="text-xs tracking-widest uppercase mb-5" style={{ color: project.color }}>The Solution</p>
              <p className="text-white/55" style={{ lineHeight: 1.85 }}>{project.solution}</p>
            </div>
          </motion.div>

          {/* Feature / Scope */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid md:grid-cols-2 gap-6 md:gap-8 mb-28 md:mb-32"
          >
            <div className="p-8 md:p-10 rounded-2xl border border-white/6 bg-white/2">
              <p className="text-xs tracking-widest uppercase mb-5" style={{ color: project.color }}>Feature</p>
              <p className="text-white/55" style={{ lineHeight: 1.85 }}>{project.feature}</p>
            </div>
            <div className="p-8 md:p-10 rounded-2xl border border-white/6 bg-white/2">
              <p className="text-xs tracking-widest uppercase mb-5" style={{ color: project.color }}>Scope</p>
              <p className="text-white/55" style={{ lineHeight: 1.85 }}>{project.scope}</p>
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap gap-3 mb-32 md:mb-40"
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full text-sm border"
                style={{ borderColor: `${project.color}25`, color: project.color, background: `${project.color}08` }}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Prev / Next */}
          <div className="border-t border-white/6 pt-16 md:pt-20 grid md:grid-cols-2 gap-5">
            {prev ? (
              <Link
                href={`/project/${prev.id}`}
                className="group flex items-center gap-5 p-7 rounded-2xl border border-white/6 bg-white/2 hover:border-white/12 transition-all duration-300"
              >
                <ArrowLeft size={18} className="text-white/30 group-hover:text-white shrink-0 group-hover:-translate-x-1 transition-all duration-300" />
                <div>
                  <p className="text-white/30 text-xs mb-1.5">Previous</p>
                  <p className="text-white" style={{ fontWeight: 600 }}>{prev.title}</p>
                </div>
              </Link>
            ) : <div />}

            {next ? (
              <Link
                href={`/project/${next.id}`}
                className="group flex items-center justify-end gap-5 p-7 rounded-2xl border border-white/6 bg-white/2 hover:border-white/12 transition-all duration-300 text-right"
              >
                <div>
                  <p className="text-white/30 text-xs mb-1.5">Next</p>
                  <p className="text-white" style={{ fontWeight: 600 }}>{next.title}</p>
                </div>
                <ArrowRight size={18} className="text-white/30 group-hover:text-white shrink-0 group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-[#090909]/60 py-12">
        <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">© 2026 Joshua Tindugan. All rights reserved.</p>
          <p className="text-white/35 text-xs tracking-wider">UX Designer · Washington, D.C.</p>
        </div>
      </footer>
    </div>
  );
}
