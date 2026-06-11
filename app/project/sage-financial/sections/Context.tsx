"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ClickableImage } from "./ClickableImage";

export function Context() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="context"
      className="!pt-[120px] !pb-[140px]"
      style={{ backgroundColor: "var(--cs-bg-secondary)" }}
    >
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 56 }}
        >
          <p className="kicker">The Problem</p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--cs-text)",
              maxWidth: 720,
              marginBottom: 28,
            }}
          >
            The red lines still hold.
          </h2>

          {/* UX problem statement */}
          <div
            style={{
              display: "flex",
              flexDirection: "column" as const,
              gap: 16,
              maxWidth: 680,
            }}
          >
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "var(--cs-text-muted)" }}>
              Residents in Ward 7 and Ward 8 are not just missing financial apps. They are
              navigating a system shaped by banking deserts, limited local financial services,
              high-fee alternatives, and long-term distrust toward institutions.
            </p>
            <div
              style={{
                padding: "28px 32px",
                borderRadius: 16,
                border: "1px solid rgba(155,233,49,0.12)",
                backgroundColor: "rgba(155,233,49,0.04)",
              }}
            >
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "var(--cs-text-faint)",
                  marginBottom: 12,
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.1em",
                  fontWeight: 600,
                }}
              >
                Design challenge
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: "var(--cs-text-muted)",
                  marginBottom: 12,
                }}
              >
                Not: <em style={{ color: "var(--cs-text-faint)" }}>"How might we make another fintech app?"</em>
              </p>
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.75,
                  color: "var(--cs-text)",
                  fontStyle: "italic",
                  fontFamily: "var(--font-playfair), Georgia, serif",
                }}
              >
                "How might we design a financial tool that feels trustworthy, understandable, and
                useful for people who have been repeatedly excluded from traditional banking?"
              </p>
            </div>
            <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--cs-text-muted)" }}>
              Redlining was officially banned in 1968. But in Ward 7 and Ward 8, its effects
              never left. These are neighborhoods where a bank branch is harder to find than a
              payday lender, where a credit score determines more than a person&rsquo;s ambition
              ever will.
            </p>
          </div>
        </motion.div>

        {/* Systems map */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid var(--cs-border)",
            marginBottom: 48,
          }}
        >
          <ClickableImage
            src="/sage/systems-map.png"
            alt="Systems map: structural barriers to financial access in Ward 7 and 8"
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
              Systems map: mapping the structural barriers that create financial exclusion in
              D.C.&rsquo;s eastern wards.
            </p>
          </div>
        </motion.div>

        {/* Key context callout cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: 24 }}
        >
          {[
            {
              stat: "Banking Desert",
              detail:
                "Ward 7 and 8 have significantly fewer bank branches per capita than any other D.C. ward, classified as banking deserts by federal standards.",
            },
            {
              stat: "Predatory Lending",
              detail:
                "Payday lenders and check-cashing services cluster in these wards, charging effective APRs that trap residents in cycles of debt.",
            },
            {
              stat: "Trust Deficit",
              detail:
                "Residents expressed deep distrust of financial institutions, shaped by generations of denial, exploitation, and broken promises.",
            },
          ].map(({ stat, detail }, i) => (
            <motion.div
              key={stat}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{
                padding: 28,
                borderRadius: 16,
                border: "1px solid var(--cs-border)",
                backgroundColor: "var(--cs-surface)",
                display: "flex",
                flexDirection: "column" as const,
                gap: 14,
                transition: "border-color 300ms ease, box-shadow 300ms ease",
              }}
              whileHover={{
                borderColor: "rgba(155,233,49,0.2)",
                boxShadow: "0 0 28px rgba(155,233,49,0.06)",
              }}
            >
              <span
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "var(--cs-accent-sf)",
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.08em",
                }}
              >
                {stat}
              </span>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.65, color: "var(--cs-text-muted)" }}>
                {detail}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
