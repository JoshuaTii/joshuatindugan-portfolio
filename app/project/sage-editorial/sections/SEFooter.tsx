"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function SEFooter() {
  return (
    <footer style={{ borderTop: "1px solid var(--cs-border)", paddingBlock: "64px 48px" }}>
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between" style={{ gap: 32 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                color: "var(--cs-text)",
              }}
            >
              SAGE Editorial
            </span>
            <p style={{ fontSize: "0.85rem", color: "var(--cs-text-faint)", lineHeight: 1.5 }}>
              Editorial design project · Spring 2026
            </p>
          </div>

          <div className="flex flex-col" style={{ gap: 12, alignItems: "flex-end" }}>
            <Link
              href="/#work"
              className="flex items-center gap-2 text-sm"
              style={{ textDecoration: "none", color: "var(--cs-text-faint)", transition: "color 250ms ease" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--cs-accent-se)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--cs-text-faint)")}
            >
              <ArrowLeft size={14} />
              Back to portfolio
            </Link>
            <p style={{ fontSize: "0.75rem", color: "var(--cs-text-faint)" }}>
              &copy; 2026 Joshua Tindugan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
