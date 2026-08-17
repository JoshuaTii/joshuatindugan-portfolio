import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
  type MotionValue,
} from "motion/react";

// Ported from the Motion Portfolio build: one word flashes solid amber at a
// time (a hard switch, not a cross-fade — see HeroWord), then the tool row
// lifts each badge in turn as a smooth function of scroll distance, then
// the whole block fades and scales down. All three stages read progress
// from the same pinned scroll range instead of separate triggers, so
// scrolling back through it reverses everything exactly.
const heroLine1 = ["I", "design", "complex", "digital", "products"];
const heroLine2 = ["from", "system", "logic", "to", "polished,"];
const heroLine3 = ["high-fidelity", "interaction."];

const tools = [
  { name: "Figma", icon: "/tools/figma.png" },
  { name: "Illustrator", icon: "/tools/illustrator.png" },
  { name: "InDesign", icon: "/tools/indesign.png" },
  { name: "Photoshop", icon: "/tools/photoshop.png" },
  { name: "Claude", icon: "/tools/claude.png" },
  { name: "Git", icon: "/tools/git.png" },
  { name: "Miro", icon: "/tools/miro.png" },
  { name: "Cursor", icon: "/tools/cursor.png" },
];

const FLASH_END = 0.35;
const TOOL_START = 0.36;
const TOOL_END = 0.76;

function HeroWord({ word, index, activeIndex }: { word: string; index: number; activeIndex: MotionValue<number> }) {
  const color = useTransform(activeIndex, (v) => (v === index ? "#e8a23d" : "var(--ink)"));
  return (
    <motion.span style={{ color }} className="inline-block">
      {word}
    </motion.span>
  );
}

function ToolBadge({
  tool,
  index,
  toolPosition,
}: {
  tool: (typeof tools)[number];
  index: number;
  toolPosition: MotionValue<number>;
}) {
  const lift = useTransform(toolPosition, (pos) => {
    const d = Math.abs(pos - index);
    return Math.max(0, Math.min(1, 1 - d));
  });
  const transform = useTransform(lift, (l) => `translateY(${-l * 20}px) rotateX(${-l * 12}deg)`);
  // Cubed, not linear: lift itself is a smooth function of distance from the
  // active badge, so neighboring badges always carry some nonzero lift
  // during the handoff between them — a linear opacity tie would show a
  // visible glow bleeding across several badges at once. Cubing keeps that
  // bleed imperceptible (lift 0.5 -> opacity 0.125, lift 0.3 -> 0.027) so
  // the glow reads as "this one logo, right now" instead of an ambient wash.
  const glowOpacity = useTransform(lift, (l) => l * l * l);

  return (
    <motion.div
      className="tool-badge relative size-11 rounded-[13px]"
      style={{ transform, transformStyle: "preserve-3d" }}
    >
      <motion.span
        className="tool-glow pointer-events-none absolute left-1/2 -bottom-4 h-6 w-14 -translate-x-1/2 rounded-full blur-[6px]"
        style={{
          opacity: glowOpacity,
          background: "radial-gradient(ellipse at center, rgba(232,162,61,0.65), transparent 72%)",
        }}
      />
      <img
        src={tool.icon}
        alt=""
        className="size-full rounded-[13px] object-cover"
        style={{ filter: "drop-shadow(0 6px 14px rgba(0,0,0,0.35))" }}
        loading="eager"
      />
    </motion.div>
  );
}

export function Hero() {
  const pinRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [toolLabel, setToolLabel] = useState("");

  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end end"],
  });

  const n = heroLine1.length + heroLine2.length + heroLine3.length;
  const step = FLASH_END / n;
  const activeIndex = useTransform(scrollYProgress, (p) => {
    if (p >= FLASH_END) return -1;
    return Math.max(0, Math.min(n - 1, Math.floor(p / step)));
  });

  // clamp: false so this extrapolates below 0 before TOOL_START (and above
  // tools.length-1 after TOOL_END) instead of holding at the boundary value.
  // With clamp:true, scroll position 0 already reads as toolPosition=0,
  // which made the first badge's lift formula (1 - |pos-index|) evaluate to
  // a permanent 1 — full lift/glow before the tool stage had even begun.
  const toolPosition = useTransform(
    scrollYProgress,
    [TOOL_START, TOOL_END],
    [0, tools.length - 1],
    { clamp: false },
  );

  useMotionValueEvent(toolPosition, "change", (pos) => {
    let bestIdx = -1;
    let bestLift = 0;
    tools.forEach((_, i) => {
      const lift = Math.max(0, Math.min(1, 1 - Math.abs(pos - i)));
      if (lift > bestLift) {
        bestLift = lift;
        bestIdx = i;
      }
    });
    // Only names a badge once it's genuinely the one in focus (lift > 0.6,
    // not just nosing ahead mid-transition) — matches the word flash's
    // hard-switch philosophy rather than a gradual label cross-fade.
    setToolLabel(bestLift > 0.6 && bestIdx >= 0 ? tools[bestIdx].name : "");
  });

  const hide = useTransform(scrollYProgress, [0.82, 0.98], [0, 1], { clamp: true });
  const heroOpacity = useTransform(hide, (h) => 1 - h);
  const heroTransform = useTransform(hide, (h) => `translateY(${h * -40}px) scale(${1 - h * 0.18})`);
  const labelOpacity = useTransform(hide, (h) => Math.max(0, 1 - h * 1.4));

  if (reduceMotion) {
    // Real static equivalent, not just "animation: none": words render at
    // rest (no flash), tools render at rest (no lift), nothing pins.
    return (
      <section id="home" className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1
          style={{ fontFamily: "var(--font-serif)" }}
          className="max-w-4xl text-[1.8rem] leading-[1.1] md:text-[3.8rem]"
        >
          {[...heroLine1, ...heroLine2, ...heroLine3].join(" ")}
        </h1>
        <p className="mt-6 max-w-[80ch] text-[1.05rem] text-[var(--ink-dim)]">
          Joshua Uba Tindugan is a product designer based in Washington, D.C., specializing in
          complex product flows, scalable design systems, high-fidelity interaction, prototyping,
          and AI-assisted front-end execution.
        </p>
        <div className="mt-14 flex flex-wrap justify-center gap-5">
          {tools.map((tool) => (
            <img key={tool.name} src={tool.icon} alt={tool.name} className="size-11 rounded-[13px]" />
          ))}
        </div>
      </section>
    );
  }

  let flatIndex = -1;

  return (
    <div ref={pinRef} id="home" style={{ height: "400vh" }}>
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-6">
        <motion.div
          style={{ opacity: heroOpacity, transform: heroTransform }}
          className="mx-auto text-center"
        >
          <h1
            style={{ fontFamily: "var(--font-serif)" }}
            className="text-[1.8rem] leading-[1.1] md:text-[3.8rem]"
          >
            {heroLine1.map((w) => {
              flatIndex++;
              return (
                <span key={flatIndex}>
                  <HeroWord word={w} index={flatIndex} activeIndex={activeIndex} />{" "}
                </span>
              );
            })}
            <br />
            {heroLine2.map((w) => {
              flatIndex++;
              return (
                <span key={flatIndex}>
                  <HeroWord word={w} index={flatIndex} activeIndex={activeIndex} />{" "}
                </span>
              );
            })}
            <br />
            {heroLine3.map((w) => {
              flatIndex++;
              return (
                <span key={flatIndex}>
                  <HeroWord word={w} index={flatIndex} activeIndex={activeIndex} />{" "}
                </span>
              );
            })}
          </h1>
          <p className="mx-auto mt-6 max-w-[80ch] text-[1.05rem] leading-relaxed text-[var(--ink-dim)]">
            Joshua Uba Tindugan is a product designer based in Washington, D.C.,
            <br />
            specializing in complex product flows, scalable design systems,
            <br />
            high-fidelity interaction, prototyping, and AI-assisted front-end execution.
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute bottom-14 left-1/2 flex -translate-x-1/2 gap-5"
        >
          {tools.map((tool, i) => (
            <ToolBadge key={tool.name} tool={tool} index={i} toolPosition={toolPosition} />
          ))}
        </motion.div>
        <motion.div
          style={{ opacity: labelOpacity }}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.72rem] tracking-[0.08em] text-[var(--ink-dim)]"
        >
          {toolLabel}
        </motion.div>
      </div>
    </div>
  );
}
