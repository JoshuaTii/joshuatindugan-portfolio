"use client";
import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";

const METHODS = [
  {
    method: "Systems Mapping",
    desc: "Mapped the full ecosystem of financial exclusion: policy failures, institutional barriers, and community adaptations. This gave me a systems-level view before any design work started.",
  },
  {
    method: "Contextual Inquiry",
    desc: "Spoke with Ward 7 and 8 residents about their real financial behaviors, workarounds, and relationships with money. Listening came before designing.",
  },
  {
    method: "Competitive Analysis",
    desc: "Audited existing fintech products against the actual needs of underbanked users. Most products failed before onboarding, revealing a fundamental mismatch.",
  },
];

export function Research() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const carouselRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 });
  const [grabbing, setGrabbing] = useState(false);

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = carouselRef.current;
    if (!el) return;
    drag.current = { active: true, startX: e.clientX, scrollLeft: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
    setGrabbing(true);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;
    const el = carouselRef.current;
    if (!el) return;
    const delta = e.clientX - drag.current.startX;
    el.scrollLeft = drag.current.scrollLeft - delta;
  }, []);

  const onPointerUp = useCallback(() => {
    drag.current.active = false;
    setGrabbing(false);
  }, []);

  return (
    <section id="research" className="!pt-[120px] !pb-[140px]">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 72 }}
        >
          <p className="kicker">Research</p>
          <div
            className="flex flex-col md:flex-row md:items-end md:justify-between"
            style={{ gap: "24px 64px" }}
          >
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "#f2ede8",
                maxWidth: 560,
              }}
            >
              Starting with what's broken,
              <br />
              not what's missing.
            </h2>
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.65,
                color: "rgba(242,237,232,0.45)",
                maxWidth: 380,
                textAlign: "right" as const,
              }}
            >
              I used systems mapping, contextual inquiry, and secondary research to understand
              the full landscape before designing anything.
            </p>
          </div>
        </motion.div>

        {/* Pain points map */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.06)",
            marginBottom: 64,
          }}
        >
          <img
            src="/sage/pain-points.png"
            alt="Pain points map: barriers identified through resident research"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div
            style={{
              padding: "14px 24px",
              backgroundColor: "#111113",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <p className="caption">
              Pain points map: aggregated barriers, frustrations, and unmet needs surfaced through
              research interviews and secondary data.
            </p>
          </div>
        </motion.div>

        {/* Research methods as cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 72 }}
        >
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              color: "rgba(242,237,232,0.5)",
              textTransform: "uppercase" as const,
              letterSpacing: "0.1em",
              marginBottom: 24,
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}
          >
            What I Did
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 24 }}>
            {METHODS.map(({ method, desc }, i) => (
              <motion.div
                key={method}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  padding: 28,
                  borderRadius: 16,
                  border: "1px solid rgba(255,255,255,0.06)",
                  backgroundColor: "#111113",
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: 14,
                }}
              >
                <span
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#7ab688",
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.08em",
                  }}
                >
                  {method}
                </span>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.65, color: "rgba(242,237,232,0.55)" }}>
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ideation sketch carousel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              color: "rgba(242,237,232,0.5)",
              textTransform: "uppercase" as const,
              letterSpacing: "0.1em",
              marginBottom: 24,
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}
          >
            Early Ideation Sketches
          </h3>

          {/* Carousel wrapper */}
          <div style={{ position: "relative" as const }}>
            <div
              ref={carouselRef}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerLeave={onPointerUp}
              onPointerCancel={onPointerUp}
              style={{
                display: "flex",
                gap: 20,
                overflowX: "auto",
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
                paddingBottom: 16,
                cursor: grabbing ? "grabbing" : "grab",
                userSelect: "none",
                touchAction: "pan-y",
                overscrollBehaviorInline: "contain",
              }}
              className="ideation-carousel"
            >
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  style={{
                    flexShrink: 0,
                    width: "min(520px, 85vw)",
                    scrollSnapAlign: "start",
                    borderRadius: 16,
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.06)",
                    backgroundColor: "#111113",
                  }}
                >
                  <img
                    src={`/sage/ideation-0${n}.png`}
                    alt={`Early ideation sketch ${n}`}
                    draggable={false}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      objectFit: "contain",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Scroll hint */}
            <p
              className="caption"
              style={{ marginTop: 12 }}
            >
              Early ideation sketches: exploring interaction models and information flows before
              moving to digital tools. Drag or scroll to see all sketches.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

