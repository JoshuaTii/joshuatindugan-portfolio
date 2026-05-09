"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "User Research", "Wireframing", "Prototyping", "Figma",
  "Design Systems", "Usability Testing", "Information Architecture",
  "Interaction Design", "Accessibility", "Visual Design",
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative z-10 !pt-[120px] !pb-[140px] bg-[#090909]/60">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-[#4ade80]/30" />

      {/* Two-column grid: gap 96px, image left / text right */}
      <div ref={ref} className="section-container grid md:grid-cols-2 items-center" style={{ gap: 96 }}>

        {/* Portrait — no padding, just the image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
            <img
              src="/portrait.png"
              alt="Joshua Tindugan"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 rounded-3xl border border-white/5 z-20" />
          </div>
          <div className="absolute -bottom-8 -right-8 w-52 h-52 border border-[#4ade80]/10 rounded-3xl -z-10" />
          <div className="absolute -top-6 -left-6 w-28 h-28 border border-white/5 rounded-2xl -z-10" />
        </motion.div>

        {/* Text column — flex column, gap 24px between every element */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col"
          style={{ gap: 24 }}
        >
          {/* Section label — 12px tracking, 16px mb baked into gap */}
          <p
            className="text-[#4ade80] text-xs uppercase"
            style={{ letterSpacing: "0.12em", marginBottom: 0 }}
          >
            About Me
          </p>

          {/* H2 — line-height 1.05, no margin (gap handles separation) */}
          <h2
            className="text-white"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: 0,
            }}
          >
            Designing with purpose,<br className="hidden lg:block" /> building with empathy
          </h2>

          {/* Body paragraphs — line-height 1.7, max-width 680px */}
          <p className="text-white/50" style={{ lineHeight: 1.7, maxWidth: 680 }}>
            I&apos;m a UX Designer with a passion for creating digital products that feel effortless. With over 4 years of experience, I specialize in turning complex problems into intuitive, delightful interfaces.
          </p>

          <p className="text-white/50" style={{ lineHeight: 1.7, maxWidth: 680 }}>
            My process is rooted in empathy — I believe great design starts by deeply understanding the people we&apos;re designing for. I work closely with cross-functional teams to deliver experiences that are both beautiful and functional.
          </p>

          {/* Skill chips — padding 7px 13px, min-height 30px, gap 10px */}
          <div className="flex flex-wrap" style={{ gap: 10 }}>
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.04 }}
                className="inline-flex items-center rounded-full border text-white/50 text-xs tracking-wide hover:border-[#4ade80]/30 hover:text-[#4ade80] transition-colors duration-300 cursor-default"
                style={{
                  padding: "7px 13px",
                  minHeight: 30,
                  borderColor: "rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.03)",
                  lineHeight: 1,
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
