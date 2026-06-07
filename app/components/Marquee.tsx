"use client";

const ITEMS = [
  "UI/UX",
  "UX Research",
  "Information Architecture",
  "Design System",
  "Branding",
  "Accessibility Design",
  "AI Prompt Engineering",
  "Graphic Design",
  "Wireframing",
  "Prototyping",
  "Figma",
  "Photoshop",
  "Illustrator",
  "InDesign",
  "HTML",
  "CSS",
  "Lightroom",
  "Notion",
  "Procreate",
];

function Track() {
  return (
    <>
      {ITEMS.map((item, i) => (
        <span
          key={i}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            marginRight: 10,
            border: "1px solid var(--card-border)",
            padding: "8px 18px",
            fontFamily: "var(--font-sans, 'Montserrat', sans-serif)",
            fontSize: "0.78rem",
            fontWeight: 500,
            letterSpacing: "0.04em",
            color: "var(--text-2)",
            whiteSpace: "nowrap",
            background: "transparent",
            transition: "border-color 200ms ease, color 200ms ease",
          }}
        >
          {item}
        </span>
      ))}
    </>
  );
}

export function Marquee() {
  return (
    <div
      style={{
        position: "relative", zIndex: 1,
        overflow: "hidden",
        borderTop:    "1px solid var(--card-border)",
        borderBottom: "1px solid var(--card-border)",
        height: 60,
        display: "flex",
        alignItems: "center",
        background: "var(--bg)",
        transition: "background 300ms ease",
      }}
      aria-hidden="true"
    >
      <div className="marquee-track">
        <div style={{ display: "inline-flex", alignItems: "center", paddingLeft: 10 }}>
          <Track />
        </div>
        <div style={{ display: "inline-flex", alignItems: "center", paddingLeft: 10 }} aria-hidden="true">
          <Track />
        </div>
      </div>
    </div>
  );
}
