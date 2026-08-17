import type { ReactNode } from "react";

// Ported from the Motion Portfolio build's `.eyebrow`: a small accent dot
// (a real span, not a ::before, so Tailwind's per-instance overrides stay
// simple) plus sentence-case label — not the bold/uppercase/tracked style
// used elsewhere on the web, which the reference build deliberately avoids.
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span
      className="flex items-center gap-3 text-[0.78rem] tracking-[0.06em]"
      style={{ fontFamily: "var(--font-serif)", color: "var(--accent)" }}
    >
      <span className="inline-block size-1.5 shrink-0 rounded-full" style={{ background: "var(--accent)" }} />
      {children}
    </span>
  );
}
