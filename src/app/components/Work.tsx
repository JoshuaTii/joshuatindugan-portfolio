import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "../data/projects";
import { Eyebrow } from "./Eyebrow";

type WorkProps = {
  onOpen: (project: Project) => void;
};

// Ported from the Motion Portfolio build: vertical page scroll alone reveals
// every case — no sideways scrolling needed. Each card's position is a
// smooth function of its signed distance from a continuous "deck position"
// (scroll progress × card count), so there's no index to floor and no
// branch boundary to jump across; scrolling back up unstacks the same way
// in reverse. Only KEYBOARD focus pins a card to front regardless of scroll
// position (matches the reference: its `focusedIndex` is set from a real
// focus event, never from mouseenter) — mouse hover intentionally does NOT
// touch refPos, only the curtain-blind reveal and border color below, both
// pure CSS :hover. Freezing the stack position on hover was tried earlier
// and made the scroll-driven stacking feel "stuck" under the cursor.
function CaseCard({
  project,
  index,
  count,
  refPos,
  onFocus,
  onBlur,
  onOpen,
  cardRef,
}: {
  project: Project;
  index: number;
  count: number;
  refPos: MotionValue<number>;
  onFocus: () => void;
  onBlur: () => void;
  onOpen: () => void;
  cardRef: (el: HTMLAnchorElement | null) => void;
}) {
  const d = useTransform(refPos, (rp) => index - rp);
  const x = useTransform(d, (dv) => (dv >= 0 ? dv * 90 : dv * 62));
  const scale = useTransform(d, (dv) => {
    if (dv >= 0) return Math.max(0.85, Math.min(1, 1 - dv * 0.08));
    const ad = Math.abs(dv);
    return Math.max(0.6, Math.min(1, 1 - ad * 0.07));
  });
  const scrim = useTransform(d, (dv) => {
    if (dv >= 0) return Math.max(0, Math.min(0.85, dv * 0.35));
    return Math.max(0, Math.min(0.8, Math.abs(dv) * 0.16));
  });
  const zIndex = useTransform(d, (dv) => Math.round(100 - Math.abs(dv) * 10));
  const transform = useTransform([x, scale], ([xv, sv]) => `translateX(${xv}px) scale(${sv})`);

  return (
    <motion.a
      ref={cardRef}
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onOpen();
      }}
      onFocus={onFocus}
      onBlur={onBlur}
      style={{ transform, zIndex, borderColor: "var(--g3)" }}
      className="group absolute inset-0 overflow-hidden rounded-[24px] border no-underline outline-none transition-colors duration-150 hover:!border-[var(--accent)] focus-visible:!border-[var(--accent)]"
    >
      <div className="absolute inset-0 rounded-[inherit]" style={{ background: "var(--g1)" }} />
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none rounded-[inherit]"
        style={{ background: "var(--g0)", opacity: scrim }}
      />

      {/* Curtain blind + inverted content, revealed together on hover/focus */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1] origin-top scale-y-0 transition-transform duration-[380ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-y-100 group-focus-visible:scale-y-100"
        style={{ background: "var(--accent)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 z-[2] flex flex-col gap-7 p-8 pointer-events-none [clip-path:inset(0_0_100%_0)] transition-[clip-path] duration-[380ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:[clip-path:inset(0_0_0%_0)] group-focus-visible:[clip-path:inset(0_0_0%_0)]"
        style={{ color: "var(--accent-ink)" }}
      >
        <CaseBody project={project} index={index} inverted />
      </div>

      <div className="relative z-0 flex h-full flex-col gap-7 p-8" style={{ color: "var(--ink)" }}>
        <CaseBody project={project} index={index} />
      </div>
    </motion.a>
  );
}

function CaseBody({ project, index, inverted }: { project: Project; index: number; inverted?: boolean }) {
  return (
    <>
      <div className="flex items-start justify-between gap-4">
        <span className="text-[0.78rem]" style={{ color: inverted ? "var(--accent-ink)" : "var(--ink-dim)" }}>
          {project.index || String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-[0.78rem]" style={{ color: inverted ? "var(--accent-ink)" : "var(--ink-dim)" }}>
          {project.year}
        </span>
      </div>
      <div>
        <h3 className="text-[1.5rem] font-medium" style={{ fontFamily: "var(--font-serif)" }}>
          {project.title}
        </h3>
        <p
          className="mt-2.5 max-w-[42ch] text-[0.94rem]"
          style={{ color: inverted ? "var(--accent-ink)" : "var(--ink-dim)" }}
        >
          {project.summary}
        </p>
        <p
          className="mt-2.5 text-[0.76rem] tracking-[0.02em]"
          style={{ color: inverted ? "var(--accent-ink)" : "var(--ink-dim)" }}
        >
          {project.discipline}
        </p>
      </div>
      <div
        className="mt-auto flex items-center gap-2 text-[0.85rem] font-medium"
        style={{ color: inverted ? "var(--accent-ink)" : "var(--accent)" }}
      >
        <span>See Case Study</span>
        <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </>
  );
}

export function Work({ onOpen }: WorkProps) {
  const pinRef = useRef<HTMLDivElement>(null);
  const cardEls = useRef<(HTMLAnchorElement | null)[]>([]);
  const reduceMotion = useReducedMotion();
  const count = projects.length;

  const { scrollYProgress } = useScroll({ target: pinRef, offset: ["start start", "end end"] });
  const scrollPos = useTransform(scrollYProgress, (p) => Math.max(0, Math.min(count - 1, p * count)));
  // Only keyboard focus writes here (see CaseCard's comment) — mouse hover
  // never touches this, so the scroll-driven stack keeps animating under
  // the cursor in either scroll direction.
  const focusedMV = useMotionValue(-1);
  const refPos = useTransform([scrollPos, focusedMV], ([sp, f]) => ((f as number) >= 0 ? (f as number) : (sp as number)));

  const progressWidth = useTransform(refPos, (rp) => `${8 + Math.max(0, Math.min(1, rp / (count - 1))) * 92}%`);

  function handleKeyDown(e: React.KeyboardEvent) {
    const idx = cardEls.current.findIndex((el) => el === document.activeElement);
    if (idx === -1) return;
    if (e.key === "ArrowRight" && idx < count - 1) {
      e.preventDefault();
      cardEls.current[idx + 1]?.focus();
    } else if (e.key === "ArrowLeft" && idx > 0) {
      e.preventDefault();
      cardEls.current[idx - 1]?.focus();
    }
  }

  if (reduceMotion) {
    return (
      <div>
        <div className="mb-13 flex flex-col items-center text-center">
          <Eyebrow>Selected work</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-serif)" }} className="mx-auto mt-4 max-w-[22ch] text-[2.4rem] leading-tight md:text-[3.4rem]">
            Case studies, one ongoing practice.
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => onOpen(project)}
              className="flex min-h-[260px] flex-col gap-7 rounded-[24px] border p-8 text-left"
              style={{ borderColor: "var(--g3)", background: "var(--g1)" }}
            >
              <CaseBody project={project} index={0} />
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={pinRef} style={{ height: `${count * 76}vh` }}>
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center">
        <div className="mb-13 flex flex-col items-center text-center">
          <Eyebrow>Selected work</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-serif)" }} className="mx-auto mt-4 max-w-[22ch] text-[2.4rem] leading-tight md:text-[3.4rem]">
            Case studies, one ongoing practice.
          </h2>
        </div>

        <div
          role="group"
          aria-label="Case studies. Tab or use arrow keys to move between them."
          onKeyDown={handleKeyDown}
          className="relative"
          style={{ width: "min(460px, 84vw)", height: "420px" }}
        >
          {projects.map((project, i) => (
            <CaseCard
              key={project.id}
              project={project}
              index={i}
              count={count}
              refPos={refPos}
              cardRef={(el) => {
                cardEls.current[i] = el;
              }}
              onFocus={() => focusedMV.set(i)}
              onBlur={() => focusedMV.set(-1)}
              onOpen={() => onOpen(project)}
            />
          ))}
        </div>

        <div className="mt-8 rounded-full" style={{ width: "min(460px, 84vw)", height: "2px", background: "var(--g3)" }}>
          <motion.div className="h-full rounded-full" style={{ width: progressWidth, background: "var(--accent)" }} />
        </div>
        <div className="mt-3.5 text-center text-[0.72rem]" style={{ color: "var(--ink-dim)" }}>
          ← → or Tab to browse
        </div>
      </div>
    </div>
  );
}
