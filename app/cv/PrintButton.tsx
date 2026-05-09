"use client";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "9px 22px",
        background: "#1e5c38",
        color: "#fff",
        border: "none",
        borderRadius: 6,
        fontSize: 12,
        fontWeight: 600,
        cursor: "pointer",
        fontFamily: "inherit",
        letterSpacing: "0.02em",
        transition: "background 150ms ease",
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#174d2f"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#1e5c38"; }}
    >
      Print / Save as PDF
    </button>
  );
}
