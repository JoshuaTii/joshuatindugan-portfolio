"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function InTuitionFooter() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingBlock: "64px 48px" }}>
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between" style={{ gap: 32 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                color: "#f2ede8",
              }}
            >
              InTuition
            </span>
            <p style={{ fontSize: "0.85rem", color: "rgba(242,237,232,0.4)", lineHeight: 1.5 }}>
              A UX case study by Joshua Tindugan.
              <br />
              Collaborative student project, 2023.
            </p>
          </div>

          <div className="flex flex-col" style={{ gap: 12, alignItems: "flex-end" }}>
            <Link
              href="/#work"
              className="flex items-center gap-2 text-sm"
              style={{ textDecoration: "none", color: "rgba(242,237,232,0.4)", transition: "color 250ms ease" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#f59e0b")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(242,237,232,0.4)")}
            >
              <ArrowLeft size={14} />
              Back to portfolio
            </Link>
            <p style={{ fontSize: "0.75rem", color: "rgba(242,237,232,0.2)" }}>
              &copy; 2026 Joshua Tindugan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
