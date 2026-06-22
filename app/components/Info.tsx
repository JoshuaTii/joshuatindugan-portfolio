"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const GREEN = "#45c97c";
const EASE  = [0.22, 1, 0.36, 1] as const;

const experience = [
  {
    role: "Interaction Design Student",
    company: "George Washington University",
    period: "2022–Present",
    description: "B.F.A. in Interaction Design, Minor in Graphic Design. Corcoran School of the Arts and Design. Graduated May 2026.",
  },
  {
    role: "Web Designer",
    company: "Mom n Tot Spot, Alexandria VA",
    period: "2023",
    description: "Redesigned the Mom n Tot Spot website to make booking easily accessible to users while simultaneously improving the overall visual appearance. Layout and Design.",
  },
  {
    role: "Joy Riot Document Designer",
    company: "Advertisement Agency",
    period: "2023",
    description: "Designed a presentation template and updated content for a more impactful, editable, and streamlined presentation of agency's work. Visual identity.",
  },
  {
    role: "Coding Camp Intern",
    company: "MBSYEP (Apple Coding Camp), D.C.",
    period: "2020",
    description: "Completed problem-solving and programming curriculum. Developed and presented a prototype interior design application as a final project deliverable.",
  },
];

const softwareStack = [
  { name: "Figma",       desc: "General Design Tool" },
  { name: "Illustrator", desc: "Graphic design" },
  { name: "Photoshop",   desc: "Image editing" },
  { name: "InDesign",    desc: "Layout Design" },
  { name: "Lightroom",   desc: "Photo Editing" },
  { name: "Framer",      desc: "No-code web design" },
  { name: "HTML",        desc: "Basic" },
  { name: "CSS",         desc: "Basic" },
];

const services = [
  {
    number: "01",
    title: "Web Design",
    desc: "Designing intuitive, elegant websites that balance aesthetics and usability. Whether it's a portfolio, landing page, or full site, I craft digital experiences that connect.",
  },
  {
    number: "02",
    title: "Graphic Design",
    desc: "Designing visuals for both digital and print, including social media assets, brand messaging, posters, and other creative collateral.",
  },
  {
    number: "03",
    title: "Photography",
    desc: "Capturing authentic, atmospheric visuals that enhance your brand and tell a story. Lifestyle, editorial, product, and brand photography.",
  },
];

const stats = [
  { value: "May 2026", label: "Graduated" },
  { value: "GWU",      label: "George Washington University" },
  { value: "10+",      label: "Projects completed" },
];

export function Info() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="info" className="relative !pt-[140px] !pb-[160px]" style={{ background: "var(--bg)" }}>

      <div
        aria-hidden="true"
        style={{
          position: "absolute", top: 0, left: 40, right: 40,
          height: 1, background: "rgba(255,255,255,0.06)",
        }}
      />

      <div ref={ref} className="section-container">

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col"
          style={{ gap: 20, maxWidth: 680, marginBottom: 56 }}
        >
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--green)" }}>
            Info
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.8vw, 2.8rem)",
              fontWeight: 700,
              lineHeight: 1.06,
              letterSpacing: "-0.025em",
              color: "var(--text)",
            }}
          >
            The work, the tools,<br />the background.
          </h2>
          <p style={{ lineHeight: 1.7, color: "var(--text-2)", fontSize: "1rem" }}>
            D.C.-based interaction designer and photographer holding a B.F.A Interaction Design degree.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
          className="flex flex-wrap"
          style={{ gap: 12, marginBottom: 36 }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                border: "1px solid rgba(255,255,255,0.07)",
                background: "var(--surface)",
                borderRadius: 12,
                padding: "16px 22px",
                minHeight: 60,
              }}
            >
              <span style={{ fontSize: "1.4rem", fontWeight: 700, lineHeight: 1, color: "var(--green)" }}>
                {stat.value}
              </span>
              <span style={{ fontSize: "0.8rem", color: "var(--text-3)" }}>{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Three columns */}
        <div className="grid lg:grid-cols-3" style={{ gap: 64, alignItems: "start", marginTop: 80 }}>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.14, ease: EASE }}
            className="flex flex-col"
            style={{ gap: 22 }}
          >
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-3)" }}>
              Services
            </p>
            <div className="flex flex-col" style={{ gap: 12 }}>
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.22 + i * 0.08, ease: EASE }}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 14,
                    padding: 24,
                    display: "flex",
                    flexDirection: "column" as const,
                    gap: 10,
                    transition: "border-color 250ms ease",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.13)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span
                      style={{
                        fontSize: "0.62rem",
                        fontWeight: 600,
                        color: GREEN,
                        letterSpacing: "0.05em",
                        opacity: 0.7,
                      }}
                    >
                      {s.number}
                    </span>
                    <p style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--text)" }}>
                      {s.title}
                    </p>
                  </div>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.62, color: "var(--text-3)", paddingLeft: 22 }}>
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Software Stack */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.22, ease: EASE }}
            className="flex flex-col"
            style={{ gap: 22 }}
          >
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-3)" }}>
              Software Stack
            </p>
            <div className="grid grid-cols-2" style={{ gap: 10 }}>
              {softwareStack.map((tool, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.30 + i * 0.05 }}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 12,
                    padding: 20,
                    display: "flex",
                    flexDirection: "column" as const,
                    gap: 6,
                    transition: "border-color 250ms ease",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.13)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; }}
                >
                  <p style={{ fontWeight: 600, fontSize: "0.85rem", lineHeight: 1, color: "var(--text)" }}>
                    {tool.name}
                  </p>
                  <p style={{ fontSize: "0.72rem", lineHeight: 1.4, color: "var(--text-3)" }}>{tool.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.30, ease: EASE }}
            className="flex flex-col"
            style={{ gap: 22 }}
          >
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-3)" }}>
              Experience
            </p>
            <div className="flex flex-col" style={{ gap: 36 }}>
              {experience.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.36 + i * 0.08, ease: EASE }}
                  style={{
                    borderLeft: "1px solid rgba(255,255,255,0.07)",
                    paddingLeft: 18,
                    display: "flex",
                    flexDirection: "column" as const,
                    gap: 5,
                    transition: "border-color 250ms ease",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.18)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; }}
                >
                  <p style={{ fontSize: "0.7rem", color: "var(--text-3)" }}>{item.period}</p>
                  <p style={{ fontWeight: 600, fontSize: "0.875rem", lineHeight: 1.2, color: "var(--text)" }}>
                    {item.role}
                  </p>
                  <p style={{ fontSize: "0.72rem", color: "var(--green)" }}>{item.company}</p>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "var(--text-3)", marginTop: 4 }}>
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
