"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, FileText } from "lucide-react";

const experience = [
  {
    role: "Interaction and Graphic Design Student",
    company: "George Washington University",
    period: "2022 — Present",
    description:
      "Currently enrolled in Interaction and Graphic Design program in Corcoran School of the Arts and Design at GWU. Graduating May 2026.",
  },
  {
    role: "Web Designer",
    company: "Mom n Tot Spot, Alexandria VA",
    period: "2023",
    description:
      "Redesigned the Mom n Tot Spot website to make booking easily accessible to users while simultaneously improving the overall visual appearance. Layout and Design.",
  },
  {
    role: "Joy Riot Document Designer",
    company: "Advertisement Agency",
    period: "2023",
    description:
      "Designed a presentation template and updated content for a more impactful, editable, and streamlined presentation of agency's work. Visual identity.",
  },
  {
    role: "Apple Coding Camp Internship",
    company: "MBSYEP, D.C.",
    period: "2020",
    description:
      "Learned basic Python skills through mobile puzzle game. Developed and proposed a prototype of an interior design application using Keynote. Coding and Design.",
  },
];

const softwareStack = [
  { name: "Figma", desc: "General Design Tool" },
  { name: "Illustrator", desc: "Graphic design" },
  { name: "Photoshop", desc: "Image editing" },
  { name: "InDesign", desc: "Layout Design" },
  { name: "Lightroom", desc: "Photo Editing" },
  { name: "Framer", desc: "No-code web design" },
];

const services = [
  {
    number: "1",
    title: "Web Design",
    desc: "Designing intuitive, elegant websites that balance aesthetics and usability. Whether it's a portfolio, landing page, or full site, I craft digital experiences that connect.",
  },
  {
    number: "2",
    title: "Graphic Design",
    desc: "Designing visuals for both digital and print, including social media assets, brand messaging, posters, and other creative collateral.",
  },
  {
    number: "3",
    title: "Photography",
    desc: "Capturing authentic, atmospheric visuals that enhance your brand and tell a story — including lifestyle, editorial, product, and brand photography.",
  },
];

const stats = [
  { value: "4+", label: "Years of experience" },
  { value: "GWU", label: "George Washington University" },
  { value: "10+", label: "Projects completed" },
];

export function Info() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="info" className="relative z-10 !pt-[140px] !pb-[160px] bg-[#0a0a0a]/60">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4ade80]/15 to-transparent" />

      <div ref={ref} className="section-container">

        {/* Intro block — flex column, gap 22px, max-width 720px, mb 56px */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col"
          style={{ gap: 22, maxWidth: 720, marginBottom: 56 }}
        >
          <p className="text-[#4ade80] text-xs uppercase" style={{ letterSpacing: "0.12em" }}>
            Info
          </p>
          <h2
            className="text-white"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            About Me.
          </h2>
          <p className="text-white/50" style={{ lineHeight: 1.65 }}>
            I&apos;m Joshua — a D.C.-based digital designer and photographer with 4 years of experience shaping stories that live on screens, in print, and everywhere in between. Whether I&apos;m designing or taking photos, I approach every project with care, intention, and attention to detail. I care about creating work that not only looks good, but also feels meaningful and impactful.
          </p>
        </motion.div>

        {/* Stats row — gap 18px, mb 42px, stat card min-height 64px, padding 18px 24px */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap"
          style={{ gap: 18, marginBottom: 42 }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/6 bg-white/2 flex items-center"
              style={{ minHeight: 64, padding: "18px 24px", gap: 16 }}
            >
              <span className="text-[#4ade80]" style={{ fontSize: "1.5rem", fontWeight: 700, lineHeight: 1 }}>
                {stat.value}
              </span>
              <span className="text-white/35 text-sm">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Download buttons — gap 16px, mb 80px */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap"
          style={{ gap: 16, marginBottom: 80 }}
        >
          <a
            href="/documents/Joshua_Tindugan_Resume.pdf"
            download="Joshua_Tindugan_Resume.pdf"
            aria-label="Download Joshua Tindugan resume PDF"
            className="group inline-flex items-center rounded-xl border border-[#4ade80]/25 bg-[#4ade80]/5 text-[#4ade80] text-sm tracking-wide hover:bg-[#4ade80]/12 hover:border-[#4ade80]/50 transition-all duration-300"
            style={{ gap: 10, padding: "14px 24px", minHeight: 52 }}
          >
            <Download size={15} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
            Download Résumé
          </a>
          <a
            href="/documents/Joshua_Tindugan_CV.pdf"
            download="Joshua_Tindugan_CV.pdf"
            aria-label="Download Joshua Tindugan CV PDF"
            className="group inline-flex items-center rounded-xl border border-white/10 bg-white/3 text-white/60 text-sm tracking-wide hover:border-white/20 hover:text-white hover:bg-white/6 transition-all duration-300"
            style={{ gap: 10, padding: "14px 24px", minHeight: 52 }}
          >
            <FileText size={15} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
            Download CV
          </a>
        </motion.div>

        {/* Three columns — gap 80px */}
        <div className="grid lg:grid-cols-3" style={{ gap: 80, alignItems: "start" }}>

          {/* Services column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
            style={{ gap: 24 }}
          >
            <p className="text-white/25 text-xs uppercase" style={{ letterSpacing: "0.12em" }}>
              Services
            </p>
            {/* Service cards — gap 16px between cards */}
            <div className="flex flex-col" style={{ gap: 16 }}>
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                  className="group rounded-xl border border-white/6 bg-white/2 hover:border-[#4ade80]/20 hover:bg-[#4ade80]/3 transition-all duration-300 flex flex-col"
                  style={{ padding: 28, gap: 12 }}
                >
                  {/* Number + title row */}
                  <div className="flex items-center" style={{ gap: 12 }}>
                    <span
                      className="rounded-full border border-[#4ade80]/30 flex items-center justify-center text-[#4ade80] shrink-0"
                      style={{ width: 20, height: 20, fontSize: "0.6rem", fontWeight: 700 }}
                    >
                      {s.number}
                    </span>
                    <p className="text-white" style={{ fontWeight: 600 }}>{s.title}</p>
                  </div>
                  {/* Description — line-height 1.6, inset to align with title */}
                  <p className="text-white/40 text-sm" style={{ lineHeight: 1.6, paddingLeft: 32 }}>
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Software Stack column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
            style={{ gap: 24 }}
          >
            <p className="text-white/25 text-xs uppercase" style={{ letterSpacing: "0.12em" }}>
              Software Stack
            </p>
            {/* 2-col grid — gap 14px, card padding 24px */}
            <div className="grid grid-cols-2" style={{ gap: 14 }}>
              {softwareStack.map((tool, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.06 }}
                  className="rounded-xl border border-white/6 bg-white/2 hover:border-[#4ade80]/20 transition-colors duration-300 flex flex-col"
                  style={{ padding: 24, gap: 8 }}
                >
                  <p className="text-white" style={{ fontWeight: 600, fontSize: "0.9rem", lineHeight: 1 }}>
                    {tool.name}
                  </p>
                  <p className="text-white/30 text-xs" style={{ lineHeight: 1.4 }}>{tool.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
            style={{ gap: 24 }}
          >
            <p className="text-white/25 text-xs uppercase" style={{ letterSpacing: "0.12em" }}>
              Experience
            </p>
            {/* Experience items — gap 42px */}
            <div className="flex flex-col" style={{ gap: 42 }}>
              {experience.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                  className="relative border-l border-white/6 hover:border-[#4ade80]/25 transition-colors duration-300 flex flex-col"
                  style={{ paddingLeft: 20, gap: 6 }}
                >
                  <p className="text-white/25 text-xs">{item.period}</p>
                  <p className="text-white" style={{ fontWeight: 600, fontSize: "0.9rem", lineHeight: 1.2 }}>
                    {item.role}
                  </p>
                  <p className="text-[#4ade80] text-xs">{item.company}</p>
                  <p className="text-white/35 text-sm" style={{ lineHeight: 1.65, marginTop: 6 }}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
