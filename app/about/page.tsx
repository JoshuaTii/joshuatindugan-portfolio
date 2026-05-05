"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { skills, experience } from "../data";

const springEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.55, ease: springEase },
});

export default function About() {
  return (
    <div className="pt-24 pb-24 px-6 max-w-6xl mx-auto w-full">
      {/* Header */}
      <motion.div {...fadeUp()} className="mb-20">
        <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: "var(--lime)" }}>
          Info
        </p>
        <h1
          className="font-black tracking-tight leading-none mb-6"
          style={{ fontSize: "clamp(3rem,8vw,7rem)", color: "var(--text)" }}
        >
          About Me
        </h1>
        <p className="text-lg md:text-xl max-w-2xl leading-relaxed" style={{ color: "var(--muted)" }}>
          A D.C. based creative designer and photographer working with care, intention, and
          attention to detail — shaping stories that live on screens, in print, and everywhere in between.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 mb-20">
        {/* Bio */}
        <motion.div {...fadeUp(0.1)}>
          <h2 className="text-xs font-mono tracking-widest uppercase mb-6" style={{ color: "var(--lime)" }}>
            Background
          </h2>
          <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <p>
              Based in Washington, D.C. since 2022, I design digital and print experiences that
              centre community, trust, and equity. My work spans mobile apps, editorial systems,
              brand identities, and photography — all driven by the same principle: good design
              should serve people first.
            </p>
            <p>
              I&apos;m currently completing my B.S. in Interaction and Graphic Design at George
              Washington University (May 2026), where my capstone thesis explored equitable
              financial product design for underserved D.C. neighborhoods.
            </p>
            <p>
              Outside of client and academic work, I run{" "}
              <a
                href="https://instagram.com/joshuba.archive"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors hover:text-white"
                style={{ color: "var(--lime)" }}
              >
                @joshuba.archive
              </a>{" "}
              — an ongoing photography project studying color, light, and everyday life in the city.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border" style={{ borderColor: "var(--border)" }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#10b981", boxShadow: "0 0 6px #10b981" }} />
              <span className="text-xs font-medium" style={{ color: "#10b981" }}>Open for work</span>
            </div>
            <span className="text-xs px-3 py-1.5 rounded-full border" style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
              4 years experience
            </span>
            <span className="text-xs px-3 py-1.5 rounded-full border" style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
              5+ projects
            </span>
          </div>

          <Link
            href="/about/cv.pdf"
            className="inline-flex items-center gap-2 mt-6 text-sm font-medium transition-colors hover:text-white"
            style={{ color: "var(--muted)" }}
          >
            ↓ Download CV
          </Link>
        </motion.div>

        {/* Services */}
        <motion.div {...fadeUp(0.15)}>
          <h2 className="text-xs font-mono tracking-widest uppercase mb-6" style={{ color: "var(--lime)" }}>
            Services
          </h2>
          <div className="space-y-5">
            {[
              {
                title: "Web Design",
                desc: "Intuitive, elegant websites that balance form and function — from wireframe to final build.",
              },
              {
                title: "Graphic Design",
                desc: "Digital and print visuals: social assets, packaging, posters, and brand systems.",
              },
              {
                title: "Photography",
                desc: "Lifestyle, editorial, product, and brand photography across Washington D.C.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="p-5 rounded-2xl border"
                style={{ background: "var(--card)", borderColor: "var(--border)" }}
              >
                <p className="font-semibold mb-1" style={{ color: "var(--text)" }}>{s.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Tools */}
      <motion.div {...fadeUp(0.2)} className="mb-20">
        <h2 className="text-xs font-mono tracking-widest uppercase mb-8" style={{ color: "var(--lime)" }}>
          Tools
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {skills.map((s) => (
            <div
              key={s.name}
              className="p-4 rounded-2xl border text-center"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              <p className="font-semibold text-sm" style={{ color: "var(--text)" }}>{s.name}</p>
              <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>{s.category}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Experience */}
      <motion.div {...fadeUp(0.25)}>
        <h2 className="text-xs font-mono tracking-widest uppercase mb-8" style={{ color: "var(--lime)" }}>
          Experience
        </h2>
        <div className="flex flex-col">
          {experience.map((e, i) => (
            <div
              key={i}
              className="flex gap-6 py-6"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <span
                className="text-xs font-mono shrink-0 pt-1 w-24"
                style={{ color: "var(--muted)" }}
              >
                {e.year}
              </span>
              <div>
                <p className="font-semibold" style={{ color: "var(--text)" }}>{e.role}</p>
                <p className="text-sm font-medium mt-0.5" style={{ color: "var(--lime)", opacity: 0.85 }}>
                  {e.org}
                </p>
                <p className="text-sm mt-1 leading-relaxed" style={{ color: "var(--muted)" }}>
                  {e.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
