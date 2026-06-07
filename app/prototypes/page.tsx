"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import { Navbar }             from "../components/Navbar";
import { SiteFooter }         from "../components/SiteFooter";
import { Contact }            from "../components/Contact";
import { ParticleBackground } from "../components/ParticleBackground";

const EASE = [0.22, 1, 0.36, 1] as const;

/*
  FigmaEmbed — clips Figma's top and bottom toolbars so only the prototype
  canvas is visible. The container height drives what the user sees;
  the iframe is rendered taller and shifted up.

  containerHeight accepts CSS strings ("82vh", "600px") or numbers (px).
*/
const TOP_BAR = 44;   // Figma top toolbar height (px)
const BOT_BAR = 50;   // Figma bottom toolbar height (px, with buffer)

function FigmaEmbed({
  url,
  containerHeight = "82vh",
  borderRadius = 10,
}: {
  url: string;
  containerHeight?: string | number;
  borderRadius?: number;
}) {
  const isCssString = typeof containerHeight === "string";
  const embedUrl = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`;

  const containerH: React.CSSProperties["height"] = isCssString
    ? containerHeight
    : containerHeight;

  const iframeH: React.CSSProperties["height"] = isCssString
    ? `calc(${containerHeight} + ${TOP_BAR + BOT_BAR}px)`
    : (containerHeight as number) + TOP_BAR + BOT_BAR;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: containerH,
        overflow: "hidden",
        borderRadius,
        border: "1px solid var(--card-border)",
        background: "var(--bg-secondary)",
      }}
    >
      <iframe
        src={embedUrl}
        style={{
          border: "none",
          width: "100%",
          height: iframeH,
          marginTop: -TOP_BAR,
          display: "block",
          /* Ensure pointer events work — user must be able to click/scroll */
          pointerEvents: "auto",
        }}
        allowFullScreen
        loading="lazy"
        title="Figma prototype"
        allow="fullscreen"
      />
    </div>
  );
}

/* ── VIEW PROJECT button ──────────────────────────────────────────────────── */
function ViewProjectBtn({ href }: { href: string }) {
  const router = useRouter();
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={() => router.push(href)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        fontFamily: "var(--font-sans, 'Montserrat', sans-serif)",
        fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
        color: hov ? "var(--green)" : "var(--text)",
        background: "transparent",
        border: `1px solid ${hov ? "var(--green-border)" : "var(--card-border)"}`,
        borderRadius: 100, cursor: "pointer",
        padding: "12px 32px",
        transition: "color 200ms ease, border-color 200ms ease",
        flexShrink: 0,
      }}
    >
      VIEW PROJECT
    </button>
  );
}

/* ── Shared prototype section layout ─────────────────────────────────────────
   Each section: full-width embed at top, then title + description + button below.
   This gives the prototype maximum screen real-estate to interact with.
────────────────────────────────────────────────────────────────────────────── */
function ProtoSection({
  title,
  description,
  figmaUrl,
  caseStudyHref,
  delay = 0,
  last = false,
}: {
  title: string;
  description: string;
  figmaUrl: string;
  caseStudyHref: string;
  delay?: number;
  last?: boolean;
}) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: EASE }}
      style={{
        paddingBlock: 56,
        borderBottom: last ? "none" : "1px solid var(--card-border)",
      }}
    >
      {/* Full-width interactive embed */}
      <div style={{ marginBottom: 32 }}>
        <FigmaEmbed url={figmaUrl} containerHeight="82vh" borderRadius={12} />
      </div>

      {/* Title + description left, button right */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 600, flex: 1 }}>
          <h3 style={{
            fontFamily: "var(--font-sans, 'Montserrat', sans-serif)",
            fontSize: "1.5rem", fontWeight: 800,
            color: "var(--text)", letterSpacing: "-0.01em",
          }}>
            {title}
          </h3>
          <p style={{
            fontFamily: "var(--font-sans, 'Montserrat', sans-serif)",
            fontSize: "0.85rem", lineHeight: 1.75, color: "var(--text-2)",
          }}>
            {description}
          </p>
        </div>
        <div style={{ paddingTop: 6 }}>
          <ViewProjectBtn href={caseStudyHref} />
        </div>
      </div>
    </motion.div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function PrototypesPage() {
  const headerRef = useRef(null);
  const inView    = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "var(--bg)", transition: "background 300ms ease" }}>
      <ParticleBackground />
      <Navbar />

      <main style={{ position: "relative", zIndex: 1 }}>
        <section style={{ paddingTop: 128, paddingBottom: 40 }}>
          <div className="section-container">

            {/* Page header — title left, load warning right */}
            <motion.div
              ref={headerRef}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE }}
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                gap: 16,
                marginBottom: 16,
                flexWrap: "wrap",
              }}
            >
              <div>
                <p style={{
                  fontFamily: "var(--font-sans, 'Montserrat', sans-serif)",
                  fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.2em",
                  textTransform: "uppercase", color: "var(--text-3)", marginBottom: 14,
                }}>
                  INTERACTIVE PROTOTYPES
                </p>
                <h1 style={{
                  fontFamily: "var(--font-hand, 'Caveat', cursive)",
                  fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
                  fontWeight: 700, color: "var(--green)", lineHeight: 1.0,
                }}>
                  Play around, Have fun!
                </h1>
              </div>

              {/* Subtle load-time notice — right-aligned at same level */}
              <p style={{
                fontFamily: "var(--font-sans, 'Montserrat', sans-serif)",
                fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.06em",
                color: "var(--text-3)",
                textAlign: "right",
                flexShrink: 0,
                paddingBottom: 4,
              }}>
                Prototypes may load slow!
              </p>
            </motion.div>

            <ProtoSection
              title="SAGE"
              description="A financial empowerment platform designed for Washington D.C's Ward 7 and Ward 8 communities, neighborhoods historically denied access to banking and capital, helping residents navigate safer financial options and reduce reliance on predatory lenders."
              figmaUrl="https://www.figma.com/proto/TPDwOcOuNh3hqxroJa6ycm/Sage?node-id=922-2083&p=f&viewport=439%2C-3800%2C0.27&t=7exmeErv2KqeWoET-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=922%3A1952&page-id=0%3A1"
              caseStudyHref="/project/sage-financial"
              delay={0.04}
            />

            <ProtoSection
              title="SAGE: EDITORIAL"
              description="SAGE Editorial expands my thesis project into a content-driven platform that explores the everyday realities, overlooked stories, and community context surrounding financial access in D.C. Rather than presenting SAGE only as a product, this editorial extension creates space for narrative, local updates, cultural texture, and community-centered storytelling."
              figmaUrl="https://www.figma.com/proto/0ymuy0VQlIhUR7PuUn7OwG/Editorial-Sage?node-id=1-574&p=f&viewport=-7613%2C-35%2C0.57&t=6LM5l5L7MS771u0o-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A574&page-id=0%3A1"
              caseStudyHref="/project/sage-editorial"
              delay={0.06}
            />

            <ProtoSection
              title="GW RIDE"
              description="A mobile app concept designed to reduce the uncertainty GWU students face around shuttle timing, route visibility, and better stop route, so navigating campus feels low-stress."
              figmaUrl="https://www.figma.com/proto/ezhpWQgVx2L0xAo2q8JGKj/GW-Ride?node-id=2251-993&p=f&viewport=-8975%2C2581%2C0.57&t=sh8Qx16eKDjNu1a0-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2251%3A993&page-id=0%3A1"
              caseStudyHref="/project/gw-ride"
              delay={0.04}
            />

            <ProtoSection
              title="InTUITION"
              description="A concept that replaces the fragmented scholarship search with a single smart platform. It matches students to opportunities based on their profile and allows streamline application."
              figmaUrl="https://www.figma.com/proto/ZFpuwcRXS8LhFZibl83SUQ/InTuition-2.0?page-id=0%3A1&node-id=1-233&viewport=-1406%2C-374%2C0.33&t=ehlpwFrXPa0p9rhf-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A233"
              caseStudyHref="/project/intuition"
              delay={0.06}
              last
            />
          </div>
        </section>

        <Contact />
      </main>

      <SiteFooter />
    </div>
  );
}
