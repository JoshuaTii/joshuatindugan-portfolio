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
    <section id="info" className="relative z-10 py-32 bg-[#0a0a0a]/60">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4ade80]/15 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <p className="text-[#4ade80] text-xs tracking-widest uppercase mb-4">Info</p>
          <h2 className="text-white mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            About Me.
          </h2>
          <p className="text-white/50 max-w-2xl" style={{ lineHeight: 1.8 }}>
            I&apos;m Joshua — a D.C.-based digital designer and photographer with 4 years of experience shaping stories that live on screens, in print, and everywhere in between. Whether I&apos;m designing or taking photos, I approach every project with care, intention, and attention to detail. I care about creating work that not only looks good, but also feels meaningful and impactful.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-4 mb-20"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="px-6 py-4 rounded-xl border border-white/6 bg-white/2 flex items-center gap-4"
            >
              <span className="text-[#4ade80]" style={{ fontSize: "1.5rem", fontWeight: 700 }}>{stat.value}</span>
              <span className="text-white/35 text-sm">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-20"
        >
          <a
            href="#"
            download
            className="group flex items-center gap-3 px-6 py-3.5 rounded-xl border border-[#4ade80]/25 bg-[#4ade80]/5 text-[#4ade80] text-sm tracking-wide hover:bg-[#4ade80]/12 hover:border-[#4ade80]/50 transition-all duration-300"
          >
            <Download size={15} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
            Download Résumé
          </a>
          <a
            href="#"
            download
            className="group flex items-center gap-3 px-6 py-3.5 rounded-xl border border-white/10 bg-white/3 text-white/60 text-sm tracking-wide hover:border-white/20 hover:text-white hover:bg-white/6 transition-all duration-300"
          >
            <FileText size={15} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
            Download Cover Letter
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-white/25 text-xs tracking-widest uppercase mb-8">Services</p>
            <div className="space-y-6">
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                  className="group p-5 rounded-xl border border-white/6 bg-white/2 hover:border-[#4ade80]/20 hover:bg-[#4ade80]/3 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-5 h-5 rounded-full border border-[#4ade80]/30 flex items-center justify-center text-[#4ade80] shrink-0" style={{ fontSize: "0.6rem", fontWeight: 700 }}>
                      {s.number}
                    </span>
                    <p className="text-white" style={{ fontWeight: 600 }}>{s.title}</p>
                  </div>
                  <p className="text-white/40 text-sm pl-8" style={{ lineHeight: 1.7 }}>{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-white/25 text-xs tracking-widest uppercase mb-8">Software Stack</p>
            <div className="grid grid-cols-2 gap-3">
              {softwareStack.map((tool, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.06 }}
                  className="p-4 rounded-xl border border-white/6 bg-white/2 hover:border-[#4ade80]/20 transition-colors duration-300"
                >
                  <p className="text-white mb-0.5" style={{ fontWeight: 600, fontSize: "0.9rem" }}>{tool.name}</p>
                  <p className="text-white/30 text-xs">{tool.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-white/25 text-xs tracking-widest uppercase mb-8">Experience</p>
            <div className="space-y-7">
              {experience.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                  className="relative pl-5 border-l border-white/6 hover:border-[#4ade80]/25 transition-colors duration-300"
                >
                  <p className="text-white/25 text-xs mb-1">{item.period}</p>
                  <p className="text-white mb-0.5" style={{ fontWeight: 600, fontSize: "0.9rem" }}>{item.role}</p>
                  <p className="text-[#4ade80] text-xs mb-2">{item.company}</p>
                  <p className="text-white/35 text-sm" style={{ lineHeight: 1.6 }}>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
