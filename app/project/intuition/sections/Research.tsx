"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const ACCENT = "#f59e0b";

const WORKSHOP_PHOTOS = [
  "/intuition/workshop/photo-1.png",
  "/intuition/workshop/photo-2.png",
  "/intuition/workshop/photo-3.png",
  "/intuition/workshop/photo-4.png",
];

const INSIGHTS = [
  {
    number: "01",
    title: "Overwhelm as a barrier",
    body: "Students described the scholarship search as emotionally draining — not from lack of effort, but from the sheer volume of disconnected information to track.",
  },
  {
    number: "02",
    title: "First-gen students are most at risk",
    body: "Participants who were first-generation college students reported feeling especially lost — they lacked the institutional knowledge that peers with connected families take for granted.",
  },
  {
    number: "03",
    title: "Social proof matters",
    body: "Students trusted scholarship information more when it came from peers who had successfully applied. Hearing real stories made the process feel achievable.",
  },
  {
    number: "04",
    title: "Deadline anxiety is universal",
    body: "Almost every participant mentioned missing or nearly missing deadlines because information was spread across bookmarks, emails, and sticky notes — not one place.",
  },
];

export function Research() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <section id="research" style={{ scrollMarginTop: 80, paddingBlock: "120px 140px" }}>
      <div className="section-container" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "0.75rem",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: ACCENT,
            marginBottom: 16,
          }}
        >
          Discovery & Research
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#f2ede8",
            lineHeight: 1.1,
            marginBottom: 64,
            maxWidth: 680,
          }}
        >
          Understanding the student experience
          <br className="hidden md:block" />
          through workshops and interviews.
        </motion.h2>

        {/* Workshop photos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 80 }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgba(242,237,232,0.35)",
              marginBottom: 20,
            }}
          >
            Student Workshop & Interviews
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 12 }}>
            {WORKSHOP_PHOTOS.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.12 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setLightboxSrc(src)}
                style={{
                  borderRadius: 14,
                  overflow: "hidden",
                  cursor: "zoom-in",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <img
                  src={src}
                  alt={`Workshop photo ${i + 1}`}
                  style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* User persona + feedback */}
        <div className="grid md:grid-cols-2" style={{ gap: "40px 60px", marginBottom: 80 }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "rgba(242,237,232,0.35)",
                marginBottom: 16,
              }}
            >
              User Persona
            </p>
            <div
              onClick={() => setLightboxSrc("/intuition/persona.png")}
              style={{ borderRadius: 16, overflow: "hidden", cursor: "zoom-in", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <img
                src="/intuition/persona.png"
                alt="User persona"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "rgba(242,237,232,0.35)",
                marginBottom: 16,
              }}
            >
              User Feedback
            </p>
            <div
              onClick={() => setLightboxSrc("/intuition/feedback/Frame.png")}
              style={{ borderRadius: 16, overflow: "hidden", cursor: "zoom-in", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <img
                src="/intuition/feedback/Frame.png"
                alt="User feedback synthesis"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Key insights */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "rgba(242,237,232,0.35)",
            marginBottom: 24,
          }}
        >
          Key Research Insights
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 16 }}>
          {INSIGHTS.map(({ number, title, body }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
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
              <span
                style={{
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: ACCENT,
                  fontWeight: 600,
                }}
              >
                {number}
              </span>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#f2ede8",
                  lineHeight: 1.3,
                }}
              >
                {title}
              </h3>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "rgba(242,237,232,0.5)" }}>
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          onClick={() => setLightboxSrc(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            backgroundColor: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            cursor: "zoom-out",
          }}
        >
          <img
            src={lightboxSrc}
            alt="Expanded view"
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: 12,
            }}
          />
        </div>
      )}
    </section>
  );
}
