"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/app/data";

interface Props {
  slug: string;
}

export default function CaseStudy({ slug }: Props) {
  const idx = projects.findIndex((p) => p.slug === slug);
  const project = projects[idx];
  const prev = projects[idx - 1] ?? null;
  const next = projects[idx + 1] ?? null;

  if (!project) return null;

  return (
    <div className="pt-24 pb-24 px-6 max-w-5xl mx-auto w-full">
      {/* Back */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-12"
      >
        <Link
          href="/work"
          className="text-xs font-mono tracking-widest uppercase transition-colors hover:text-white"
          style={{ color: "var(--muted)" }}
        >
          ← All Work
        </Link>
      </motion.div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full border"
              style={{ borderColor: project.color + "55", color: project.color }}
            >
              {t}
            </span>
          ))}
          <span
            className="text-xs px-3 py-1 rounded-full border"
            style={{ borderColor: "var(--border)", color: "var(--muted)" }}
          >
            {project.period}
          </span>
        </div>

        <h1
          className="font-black tracking-tight leading-none mb-6"
          style={{ fontSize: "clamp(2.5rem,7vw,6rem)", color: "var(--text)" }}
        >
          {project.title}
        </h1>
        <p
          className="text-lg md:text-xl leading-relaxed max-w-2xl"
          style={{ color: "var(--muted)" }}
        >
          {project.description}
        </p>
      </motion.div>

      {/* Placeholder image banner */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.55 }}
        className="w-full h-72 md:h-96 rounded-3xl mb-16 flex items-center justify-center border"
        style={{
          background: `linear-gradient(135deg, ${project.color}11, ${project.color}22)`,
          borderColor: project.color + "33",
        }}
      >
        <p className="text-xs font-mono tracking-widest uppercase" style={{ color: project.color, opacity: 0.5 }}>
          Project Mockup — {project.title}
        </p>
      </motion.div>

      {/* Overview + Scope */}
      <div className="grid md:grid-cols-3 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2"
        >
          <h2
            className="text-xs font-mono tracking-widest uppercase mb-4"
            style={{ color: "var(--lime)" }}
          >
            Overview
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            {project.overview}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <h2
            className="text-xs font-mono tracking-widest uppercase mb-4"
            style={{ color: "var(--lime)" }}
          >
            Scope
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            {project.scope}
          </p>
        </motion.div>
      </div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2
          className="text-xs font-mono tracking-widest uppercase mb-8"
          style={{ color: "var(--lime)" }}
        >
          Key Features
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {project.features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              className="flex gap-3 p-5 rounded-2xl border"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              <span className="text-sm font-bold shrink-0 mt-0.5" style={{ color: project.color }}>
                0{i + 1}
              </span>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{f}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTAs */}
      {"prototype" in project && project.prototype && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex flex-wrap gap-3 mb-16"
        >
          <a
            href={project.prototype}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full font-semibold text-sm transition-transform duration-200 hover:scale-105"
            style={{ background: "var(--lime)", color: "#000" }}
          >
            {("protocolLabel" in project && project.protocolLabel) || "View Prototype"} →
          </a>
        </motion.div>
      )}

      {"instagram" in project && project.instagram && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex flex-wrap gap-3 mb-16"
        >
          <a
            href={project.instagram as string}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full font-semibold text-sm transition-transform duration-200 hover:scale-105"
            style={{ background: "var(--lime)", color: "#000" }}
          >
            View on Instagram →
          </a>
        </motion.div>
      )}

      {/* Prev / Next */}
      <div
        className="flex justify-between pt-12 mt-12 border-t"
        style={{ borderColor: "var(--border)" }}
      >
        {prev ? (
          <Link
            href={`/work/${prev.slug}`}
            className="group flex flex-col gap-1"
          >
            <span className="text-xs font-mono tracking-widest uppercase" style={{ color: "var(--muted)" }}>
              ← Previous
            </span>
            <span
              className="font-semibold transition-colors group-hover:text-white"
              style={{ color: "var(--text)" }}
            >
              {prev.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {next && (
          <Link
            href={`/work/${next.slug}`}
            className="group flex flex-col gap-1 text-right"
          >
            <span className="text-xs font-mono tracking-widest uppercase" style={{ color: "var(--muted)" }}>
              Next →
            </span>
            <span
              className="font-semibold transition-colors group-hover:text-white"
              style={{ color: "var(--text)" }}
            >
              {next.title}
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
