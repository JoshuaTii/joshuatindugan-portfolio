"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function Context() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="context" className="!pt-[120px] !pb-[140px]" style={{ backgroundColor: "rgba(17,17,19,0.5)" }}>
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 72 }}
        >
          <p className="kicker">The Problem</p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#f2ede8",
              maxWidth: 720,
              marginBottom: 28,
            }}
          >
            The red lines still hold.
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: "rgba(242,237,232,0.6)",
              maxWidth: 640,
            }}
          >
            Redlining was officially banned in 1968. But in Ward 7 and Ward 8, its effects never left.
            These are neighborhoods where a bank branch is harder to find than a payday lender, where
            a credit score determines more than a person's ambition ever will. The name SAGE is
            intentional. Beyond financial wisdom, it names the communities I designed for: people
            who have been told, repeatedly, that the system was not built for them.
          </p>
        </motion.div>

        {/* Systems map */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.06)",
            marginBottom: 48,
          }}
        >
          <img
            src="/sage/systems-map.png"
            alt="Systems map: structural barriers to financial access in Ward 7 and 8"
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
              Systems map: mapping the structural barriers that create financial exclusion in
              D.C.'s eastern wards.
            </p>
          </div>
        </motion.div>

        {/* Key context cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: 24 }}
        >
          {[
            {
              stat: "Bank Desert",
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
                "Residents I interviewed expressed deep distrust of financial institutions, shaped by generations of denial, exploitation, and broken promises.",
            },
          ].map(({ stat, detail }) => (
            <div
              key={stat}
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
                {stat}
              </span>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.65, color: "rgba(242,237,232,0.55)" }}>
                {detail}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

