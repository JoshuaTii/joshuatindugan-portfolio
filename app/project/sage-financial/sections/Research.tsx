"use client";
import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { ClickableImage } from "./ClickableImage";

const RESEARCH_METHODS = [
  {
    method: "Secondary Research",
    purpose: "Understand financial access barriers in Wards 7 & 8.",
    revealed:
      "Residents face banking deserts, branch closures, transportation barriers, and greater reliance on alternative financial services.",
  },
  {
    method: "Competitive Analysis",
    purpose: "Evaluate existing fintech, literacy, and community banking solutions.",
    revealed:
      "Most platforms focus on transactions and budgeting, but few address trust, local resources, and community support.",
  },
  {
    method: "Systems Mapping",
    purpose: "Understand relationships between residents, lenders, banks, nonprofits, and government programs.",
    revealed:
      "Financial exclusion is influenced by interconnected social, economic, and institutional factors rather than a single problem.",
  },
  {
    method: "Stakeholder Mapping",
    purpose: "Identify key groups involved in financial access.",
    revealed:
      "Residents, nonprofits, credit unions, community organizations, and financial educators all play important roles in support networks.",
  },
  {
    method: "Resident Conversations",
    purpose: "Learn about lived experiences and perceptions of financial services.",
    revealed:
      "Trust, accessibility, and clear guidance were more important than advanced financial tools.",
  },
  {
    method: "Literature Review",
    purpose: "Explore existing research on financial literacy and banking access.",
    revealed:
      "Financial education is most effective when paired with actionable resources and ongoing support.",
  },
  {
    method: "Pain Point Analysis",
    purpose: "Synthesize research findings into design opportunities.",
    revealed:
      "Users needed trusted guidance, simplified learning, local resources, and achievable financial goals.",
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
    el.scrollLeft = drag.current.scrollLeft - (e.clientX - drag.current.startX);
  }, []);

  const onPointerUp = useCallback(() => {
    drag.current.active = false;
    setGrabbing(false);
  }, []);

  return (
    <section id="research" className="!pt-[120px] !pb-[140px]">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 72 }}
        >
          <p className="kicker">Research Approach</p>
          <div
            className="flex flex-col md:flex-row md:items-end md:justify-between"
            style={{ gap: "24px 64px" }}
          >
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--cs-text)",
                maxWidth: 560,
              }}
            >
              Starting with what&rsquo;s broken,
              <br />
              not what&rsquo;s missing.
            </h2>
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.65,
                color: "var(--cs-text-faint)",
                maxWidth: 380,
                textAlign: "right" as const,
              }}
            >
              Research combined 10 qualitative interviews, secondary data sources,
              competitive analysis, and systems mapping to understand the full landscape
              before any design work started.
            </p>
          </div>
        </motion.div>

        {/* Research scope callouts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: 16, marginBottom: 72 }}
        >
          {[
            {
              label: "Primary Research",
              desc: "10 qualitative interviews with Ward 7 and 8 residents exploring lived financial experiences, trust, and barriers.",
            },
            {
              label: "Secondary Research",
              desc: "Government and public data from FDIC, DC Government, Bank On DC, DC BizCAP, DC REACH, academic sources, and journalism.",
            },
            {
              label: "Competitive Analysis",
              desc: "Benchmarked Cash App, Chime, SoFi, Khan Academy, Zogo, Mission Asset Fund, MoCaFi, local credit unions, and DC financial initiatives.",
            },
          ].map(({ label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              style={{
                padding: "24px 24px",
                borderRadius: 16,
                border: "1px solid var(--cs-border)",
                backgroundColor: "var(--cs-surface)",
                display: "flex",
                flexDirection: "column" as const,
                gap: 10,
              }}
            >
              <span
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: "var(--cs-accent-sf)",
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.08em",
                }}
              >
                {label}
              </span>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.65, color: "var(--cs-text-muted)" }}>
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Pain points map */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid var(--cs-border)",
            marginBottom: 72,
          }}
        >
          <ClickableImage
            src="/sage/pain-points.png"
            alt="Pain points map: barriers identified through resident research"
            style={{ width: "100%", height: "auto", display: "block" }}
            loading="lazy"
          />
          <div
            style={{
              padding: "14px 24px",
              backgroundColor: "var(--cs-surface)",
              borderTop: "1px solid var(--cs-border)",
            }}
          >
            <p className="caption">
              Pain points map: aggregated barriers, frustrations, and unmet needs surfaced through
              research interviews and secondary data.
            </p>
          </div>
        </motion.div>

        {/* Research methods table */}
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
              color: "var(--cs-text-muted)",
              textTransform: "uppercase" as const,
              letterSpacing: "0.1em",
              marginBottom: 24,
            }}
          >
            Research Methods
          </h3>

          {/* Table — responsive: hidden on mobile, shown on md+ */}
          <div
            className="hidden md:block"
            style={{
              borderRadius: 16,
              border: "1px solid var(--cs-border)",
              overflow: "hidden",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" as const }}>
              <thead>
                <tr style={{ backgroundColor: "var(--cs-surface)" }}>
                  {["Research Method", "Purpose", "What It Revealed"].map((col) => (
                    <th
                      key={col}
                      style={{
                        padding: "16px 24px",
                        textAlign: "left" as const,
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        textTransform: "uppercase" as const,
                        letterSpacing: "0.1em",
                        color: "var(--cs-accent-sf)",
                        borderBottom: "1px solid var(--cs-border)",
                        whiteSpace: "nowrap" as const,
                      }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {RESEARCH_METHODS.map((row, i) => (
                  <motion.tr
                    key={row.method}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                    style={{
                      borderBottom: i < RESEARCH_METHODS.length - 1 ? "1px solid var(--cs-border)" : "none",
                      transition: "background-color 200ms ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(155,233,49,0.04)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                    }}
                  >
                    <td
                      style={{
                        padding: "18px 24px",
                        fontSize: "0.88rem",
                        fontWeight: 600,
                        color: "var(--cs-text)",
                        verticalAlign: "top" as const,
                        whiteSpace: "nowrap" as const,
                      }}
                    >
                      {row.method}
                    </td>
                    <td
                      style={{
                        padding: "18px 24px",
                        fontSize: "0.88rem",
                        lineHeight: 1.65,
                        color: "var(--cs-text-muted)",
                        verticalAlign: "top" as const,
                      }}
                    >
                      {row.purpose}
                    </td>
                    <td
                      style={{
                        padding: "18px 24px",
                        fontSize: "0.88rem",
                        lineHeight: 1.65,
                        color: "var(--cs-text-muted)",
                        verticalAlign: "top" as const,
                      }}
                    >
                      {row.revealed}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: stacked cards */}
          <div className="md:hidden flex flex-col" style={{ gap: 12 }}>
            {RESEARCH_METHODS.map((row, i) => (
              <motion.div
                key={row.method}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  padding: "20px 20px",
                  borderRadius: 14,
                  border: "1px solid var(--cs-border)",
                  backgroundColor: "var(--cs-surface)",
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: 10,
                }}
              >
                <span
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "var(--cs-accent-sf)",
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.08em",
                  }}
                >
                  {row.method}
                </span>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "var(--cs-text-muted)" }}>
                  <strong style={{ color: "var(--cs-text-faint)" }}>Purpose:</strong> {row.purpose}
                </p>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "var(--cs-text-muted)" }}>
                  <strong style={{ color: "var(--cs-text-faint)" }}>Revealed:</strong> {row.revealed}
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
              color: "var(--cs-text-muted)",
              textTransform: "uppercase" as const,
              letterSpacing: "0.1em",
              marginBottom: 24,
            }}
          >
            Early Ideation Sketches
          </h3>

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
                    width: "min(900px, 88vw)",
                    scrollSnapAlign: "start",
                    borderRadius: 16,
                    overflow: "hidden",
                    border: "1px solid var(--cs-border)",
                    backgroundColor: "var(--cs-surface)",
                  }}
                >
                  <ClickableImage
                    src={`/sage/ideation-0${n}.png`}
                    alt={`Early ideation sketch ${n}`}
                    style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" as const }}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <p className="caption" style={{ marginTop: 12 }}>
              Early ideation sketches: exploring interaction models and information flows before
              moving to digital tools. Drag or scroll to see all sketches.
            </p>
          </div>
        </motion.div>

        {/* Team photos */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginTop: 72 }}
        >
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              color: "var(--cs-text-muted)",
              textTransform: "uppercase" as const,
              letterSpacing: "0.1em",
              marginBottom: 8,
            }}
          >
            Research &amp; Design Team
          </h3>
          <p
            style={{
              fontSize: "0.9rem",
              lineHeight: 1.65,
              color: "var(--cs-text-faint)",
              marginBottom: 28,
              maxWidth: 560,
            }}
          >
            Documentation from community engagement, research sessions, and the design
            process behind SAGE.
          </p>
          <div
            className="grid grid-cols-2 md:grid-cols-3"
            style={{ gap: 12 }}
          >
            {[1, 2, 3, 10, 5, 6].map((n, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.45 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  borderRadius: 12,
                  overflow: "hidden",
                  border: "1px solid var(--cs-border)",
                  aspectRatio: "4/5",
                }}
              >
                <ClickableImage
                  src={`/sage/team/sage-team-${String(n).padStart(2, "0")}.jpg`}
                  alt={`SAGE research and design team photo ${n}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
