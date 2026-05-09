"use client";
import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Lightbox } from "./Lightbox";

const ACCENT = "#60A5FA";

const FINDINGS = [
  {
    stat: "Awareness Gap",
    body: "Most students are unaware of the full GWU shuttle network — many don't know which routes run near where they live or study.",
  },
  {
    stat: "Unreliable ETAs",
    body: "Inaccurate arrival times cause students to show up at stops only to find the shuttle already gone. Lost trust compounds quickly.",
  },
  {
    stat: "Wait Anxiety",
    body: "Without knowing when the next shuttle arrives, waiting feels open-ended and stressful — especially when students are running between classes.",
  },
  {
    stat: "Low App Satisfaction",
    body: "Students consistently rated the existing campus transit app very poorly. The information hierarchy and real-time capability fell far short of expectations.",
  },
  {
    stat: "Time-Pressured Decisions",
    body: "Transit choices happen in seconds — often mid-walk or mid-class. Information that takes effort to find simply gets ignored.",
  },
];

const STORYBOARD_FRAMES = Array.from({ length: 9 }, (_, i) => ({
  src: `/gwride/storyboard-${i + 1}.png`,
  caption: [
    "Nick checks his class schedule and realizes he has 12 minutes to get across campus.",
    "He heads toward the shuttle stop, unsure which route to take or when it arrives.",
    "He stands at the stop with no information — no ETA, no map, no indication a shuttle is coming.",
    "Five minutes pass. He pulls out his phone, tries the campus app — it's unclear and outdated.",
    "Frustrated, he opens a rideshare app instead and requests a car.",
    "The shuttle arrives two minutes later. Nick is already in the Uber.",
    "With GW Ride, Nick checks the app before leaving — he sees a live shuttle 3 minutes away.",
    "He walks to the stop confidently, knowing exactly when to arrive.",
    "He boards on time and gets to class without the stress — or the added cost.",
  ][i],
}));

export function Research() {
  const ref = useRef(null);
  const personaRef = useRef(null);
  const storyRef = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const personaInView = useInView(personaRef, { once: true, margin: "-80px" });
  const storyInView = useInView(storyRef, { once: true, margin: "-80px" });

  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const openLightbox = useCallback((src: string, alt: string) => setLightbox({ src, alt }), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  const scrollCarousel = useCallback((dir: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: dir * 272, behavior: "smooth" });
  }, []);

  return (
    <section id="research" style={{ scrollMarginTop: 80, paddingBlock: "120px 140px" }}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 72 }}
        >
          <p
            style={{
              display: "inline-block",
              fontSize: "0.75rem",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: ACCENT,
              marginBottom: 16,
            }}
          >
            Research &amp; Discovery
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#f2ede8",
              lineHeight: 1.1,
              maxWidth: 640,
              marginBottom: 20,
            }}
          >
            Understanding the gap between system and experience.
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(242,237,232,0.55)", maxWidth: 600 }}>
            We conducted student interviews across the GWU campus, focusing on daily commute
            behaviors, transit decision moments, and the specific friction points that push students
            toward rideshares instead of available campus shuttle options.
          </p>
        </motion.div>

        {/* ── Key Findings ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 24 }}
        >
          <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#f2ede8", letterSpacing: "-0.01em", marginBottom: 4 }}>
            Key Findings
          </h3>
          <p style={{ fontSize: "0.88rem", color: "rgba(242,237,232,0.45)" }}>
            Five patterns that shaped the entire design direction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3" style={{ gap: 16, marginBottom: 96 }}>
          {FINDINGS.map((f, i) => (
            <motion.div
              key={f.stat}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
              style={{
                padding: "28px 24px",
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.06)",
                backgroundColor: "#111113",
                display: "flex",
                flexDirection: "column" as const,
                gap: 12,
              }}
            >
              <span style={{ fontSize: "0.78rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: ACCENT }}>
                {f.stat}
              </span>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.65, color: "rgba(242,237,232,0.65)" }}>
                {f.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Persona ── */}
        <div ref={personaRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={personaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: 24 }}
          >
            <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#f2ede8", letterSpacing: "-0.01em", marginBottom: 4 }}>
              Persona
            </h3>
            <p style={{ fontSize: "0.88rem", color: "rgba(242,237,232,0.45)" }}>
              A design tool grounded in real student behavior and commute patterns.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={personaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              padding: "40px 36px",
              borderRadius: 20,
              border: "1px solid rgba(255,255,255,0.06)",
              backgroundColor: "#111113",
              marginBottom: 96,
            }}
          >
            <div className="grid md:grid-cols-2" style={{ gap: 40 }}>
              {/* Left — identity */}
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 28 }}>
                <div>
                  <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: ACCENT, marginBottom: 12, fontWeight: 500 }}>
                    Primary Persona
                  </p>
                  <h4 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#f2ede8", letterSpacing: "-0.01em", marginBottom: 6 }}>
                    Cameron Jones
                  </h4>
                  <p style={{ fontSize: "0.88rem", color: "rgba(242,237,232,0.5)", marginBottom: 20 }}>
                    Age 19 · Freshman · Exercise Science + Fine Arts
                  </p>
                  <p style={{ fontSize: "0.93rem", lineHeight: 1.75, color: "rgba(242,237,232,0.6)" }}>
                    Cameron is a first-year student living on the Mount Vernon Campus. Coming from
                    a suburban area with limited public transit experience, navigating GWU's two
                    campuses feels overwhelming. They rely on the Vex shuttle daily to get between
                    Corcoran and Milken — but crowded buses, unpredictable delays, and limited stop
                    coverage make every commute feel like a gamble.
                  </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  {[
                    { label: "Location", items: ["Mount Vernon Campus"] },
                    { label: "Daily Route", items: ["Corcoran ↔ Milken", "via Vex shuttle"] },
                  ].map(({ label, items }) => (
                    <div key={label}>
                      <p style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.09em", color: "rgba(242,237,232,0.3)", marginBottom: 8, fontWeight: 500 }}>
                        {label}
                      </p>
                      {items.map((item) => (
                        <p key={item} style={{ fontSize: "0.88rem", color: "rgba(242,237,232,0.65)", lineHeight: 1.5 }}>{item}</p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — structured attributes */}
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 24 }}>
                {[
                  {
                    label: "Goals",
                    items: [
                      "Get between classes quickly without long walks",
                      "Find food nearby between class sessions",
                      "Avoid the stress of missed or overcrowded shuttles",
                    ],
                  },
                  {
                    label: "Frustrations",
                    items: [
                      "15-minute walks between Milken and Corcoran",
                      "No time for lunch between back-to-back classes",
                      "Vex crowding and unpredictable wait times",
                      "Delays worsen significantly in poor weather",
                    ],
                  },
                  {
                    label: "Design Implication",
                    items: [
                      "Real-time Vex tracking + clear ETA would let Cameron confidently plan each leg of their day — reducing the anxiety that currently makes every commute feel uncertain.",
                    ],
                    accent: true,
                  },
                ].map(({ label, items, accent }) => (
                  <div key={label}>
                    <p style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.09em", color: accent ? ACCENT : "rgba(242,237,232,0.3)", marginBottom: 10, fontWeight: 500 }}>
                      {label}
                    </p>
                    <div style={{ display: "flex", flexDirection: "column" as const, gap: 7 }}>
                      {items.map((item) => (
                        <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                          <span style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: accent ? ACCENT : "rgba(242,237,232,0.3)", flexShrink: 0, marginTop: 8 }} />
                          <span style={{ fontSize: "0.88rem", color: accent ? "rgba(242,237,232,0.75)" : "rgba(242,237,232,0.6)", lineHeight: 1.6 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Storyboard ── */}
        <div ref={storyRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: 24 }}
          >
            <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#f2ede8", letterSpacing: "-0.01em", marginBottom: 4 }}>
              Storyboard
            </h3>
            <p style={{ fontSize: "0.88rem", color: "rgba(242,237,232,0.45)", maxWidth: 600 }}>
              Following Nick — a GWU freshman who misses his shuttle due to lack of real-time
              information, and how GW Ride changes that moment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "relative" }}
          >
            {/* Right fade gradient */}
            <div
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                bottom: 24,
                width: 72,
                background: "linear-gradient(to left, #09090b, transparent)",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />

            {/* Scrollable rail */}
            <div
              ref={scrollRef}
              style={{
                overflowX: "auto",
                paddingBottom: 24,
                scrollbarWidth: "none" as const,
                msOverflowStyle: "none",
              }}
              className="ideation-carousel"
            >
              <div style={{ display: "flex", gap: 16, minWidth: "max-content", paddingRight: 72 }}>
                {STORYBOARD_FRAMES.map((frame, i) => (
                  <div
                    key={frame.src}
                    style={{
                      width: 256,
                      flexShrink: 0,
                      display: "flex",
                      flexDirection: "column" as const,
                      gap: 10,
                      cursor: "zoom-in",
                    }}
                    onClick={() => openLightbox(frame.src, `Storyboard frame ${i + 1}`)}
                  >
                    <div
                      style={{
                        borderRadius: 12,
                        overflow: "hidden",
                        border: "1px solid rgba(255,255,255,0.06)",
                        backgroundColor: "#1a1a1e",
                      }}
                    >
                      <img
                        src={frame.src}
                        alt={`Storyboard frame ${i + 1}`}
                        style={{
                          width: "100%",
                          aspectRatio: "4/3",
                          objectFit: "contain",
                          display: "block",
                          backgroundColor: "#1a1a1e",
                        }}
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" as const, gap: 4 }}>
                      <span style={{ fontSize: "0.7rem", color: ACCENT, fontWeight: 500 }}>
                        Frame {i + 1}
                      </span>
                      <p style={{ fontSize: "0.78rem", color: "rgba(242,237,232,0.5)", lineHeight: 1.5 }}>
                        {frame.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow controls */}
            <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
              <button
                onClick={() => scrollCarousel(-1)}
                aria-label="Scroll storyboard left"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "#111113",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "border-color 200ms ease, background-color 200ms ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = ACCENT;
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(96,165,250,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#111113";
                }}
              >
                <ChevronLeft size={16} color="rgba(242,237,232,0.6)" />
              </button>
              <button
                onClick={() => scrollCarousel(1)}
                aria-label="Scroll storyboard right"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "#111113",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "border-color 200ms ease, background-color 200ms ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = ACCENT;
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(96,165,250,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#111113";
                }}
              >
                <ChevronRight size={16} color="rgba(242,237,232,0.6)" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <Lightbox src={lightbox?.src ?? null} alt={lightbox?.alt ?? ""} onClose={closeLightbox} />
    </section>
  );
}
