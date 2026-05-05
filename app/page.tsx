"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "./data";

const springEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55 },
  }),
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-6xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono tracking-widest uppercase mb-8"
          style={{ color: "var(--muted)" }}
        >
          Portfolio — 2026
        </motion.p>

        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: springEase }}
            className="font-black leading-none tracking-tight"
            style={{ fontSize: "clamp(3.5rem,10vw,9rem)", color: "var(--text)" }}
          >
            Hello,
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: springEase }}
            className="font-black leading-none tracking-tight"
            style={{ fontSize: "clamp(3.5rem,10vw,9rem)", color: "var(--lime)" }}
          >
            I&apos;m Joshua.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="text-lg md:text-xl max-w-xl leading-relaxed mb-10"
          style={{ color: "var(--muted)" }}
        >
          A D.C. based creative designer and photographer with 4 years of experience
          shaping stories that live on screens, in print, and everywhere in between.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap items-center gap-3"
        >
          <Link
            href="/work"
            className="px-6 py-3 rounded-full font-semibold text-sm transition-transform duration-200 hover:scale-105"
            style={{ background: "var(--lime)", color: "#000" }}
          >
            View My Work
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 rounded-full font-semibold text-sm border transition-colors duration-200 hover:border-white"
            style={{ borderColor: "var(--border)", color: "var(--text)" }}
          >
            About Me
          </Link>
          <div className="flex items-center gap-2 ml-1">
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "#10b981", boxShadow: "0 0 8px #10b981" }}
            />
            <span className="text-sm" style={{ color: "var(--muted)" }}>
              Open for work
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-3 mt-12 pt-12"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {["UI/UX Design", "Graphic Design", "Photography"].map((s) => (
            <span
              key={s}
              className="text-xs font-mono tracking-widest uppercase px-3 py-1.5 rounded-full border"
              style={{ borderColor: "var(--border)", color: "var(--muted)" }}
            >
              {s}
            </span>
          ))}
        </motion.div>
      </section>

      {/* Selected Work */}
      <section className="px-6 pb-24 max-w-6xl mx-auto w-full">
        <div className="flex items-center justify-between mb-12">
          <h2
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: "var(--lime)" }}
          >
            Selected Work
          </h2>
          <Link
            href="/work"
            className="text-xs font-medium transition-colors hover:text-white"
            style={{ color: "var(--muted)" }}
          >
            All projects →
          </Link>
        </div>

        <div className="flex flex-col">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              <Link href={`/work/${p.slug}`} className="group block">
                <div
                  className="flex items-center justify-between py-6 transition-all duration-200 group-hover:pl-3"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <div className="flex items-center gap-5 min-w-0">
                    <span
                      className="text-xs font-mono w-7 shrink-0"
                      style={{ color: p.color, opacity: 0.8 }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <p
                        className="text-lg md:text-2xl font-bold tracking-tight transition-colors duration-200 group-hover:text-white"
                        style={{ color: "var(--text)" }}
                      >
                        {p.title}
                      </p>
                      <p className="text-sm mt-0.5 truncate" style={{ color: "var(--muted)" }}>
                        {p.description.slice(0, 72)}…
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0 ml-4">
                    <div className="hidden md:flex gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-full border"
                          style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-mono" style={{ color: "var(--muted)" }}>
                      {p.period}
                    </span>
                    <span
                      className="transition-transform duration-200 group-hover:translate-x-1"
                      style={{ color: p.color }}
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 border-t" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-6"
          >
            Let&apos;s create{" "}
            <span style={{ color: "var(--lime)" }}>together.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base mb-8"
            style={{ color: "var(--muted)" }}
          >
            Available for freelance, internships, and full-time roles.
          </motion.p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-full font-semibold text-sm transition-transform duration-200 hover:scale-105"
            style={{ background: "var(--lime)", color: "#000" }}
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
