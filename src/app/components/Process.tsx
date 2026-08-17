import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Eyebrow } from "./Eyebrow";

// Ported from the Motion Portfolio build: four steps stacked in normal flow,
// each `position: sticky` at the same top offset with an opaque background,
// so scrolling past one causes the next to slide up and cover it rather
// than cross-fading. All four are held at an equal, JS-measured height
// (the tallest step's natural content height) so a shorter step can never
// render shorter than the one before it and fail to fully cover it — the
// whole point of the stack. Re-measured on resize since zoom fires resize too.
//
// No useReducedMotion() branch: unlike Hero/Work, this effect has no
// independent animation loop to disable — it's pure CSS position:sticky
// driven 1:1 by the browser's own scroll handling, with no JS interpolation
// or transform tweening in between. There's nothing to make static that
// scrolling itself doesn't already do.
const steps = [
  {
    num: "01",
    title: "Frame the product, not just the screen",
    body: "I start by connecting user needs, product goals, technical constraints, and the larger system around them. Research, stakeholder input, and competitive context help me identify the right problem, define success, and turn an open brief into a clear product direction.",
  },
  {
    num: "02",
    title: "Turn complexity into a usable system",
    body: "Before refining visuals, I map journeys, information architecture, flows, features, and edge cases. This makes the full experience visible, aligns decisions across the product, and gives every screen a clear reason to exist.",
  },
  {
    num: "03",
    title: "Design how it works and feels",
    body: "I bring the system to life through wireframes, high-fidelity UI, interaction patterns, responsive layouts, accessible hierarchy, motion, and reusable components. Visual craft matters, but every detail must strengthen clarity, behavior, and the product's identity.",
  },
  {
    num: "04",
    title: "Prototype, test, and build toward launch",
    body: "I use interactive prototypes and real feedback to test ideas early and refine them quickly. From detailed handoff to front-end experiments and AI-assisted development, I stay close to implementation so the final experience keeps its logic, quality, and design intent.",
  },
];

const STICKY_TOP = 120;

export function Process() {
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [slideHeight, setSlideHeight] = useState<number | undefined>(undefined);
  const [activeStep, setActiveStep] = useState(0);

  useLayoutEffect(() => {
    function equalize() {
      const els = slideRefs.current.filter(Boolean) as HTMLDivElement[];
      if (!els.length) return;
      setSlideHeight(undefined);
      requestAnimationFrame(() => {
        const maxH = Math.max(...els.map((el) => el.getBoundingClientRect().height));
        setSlideHeight(maxH);
      });
    }
    equalize();
    window.addEventListener("resize", equalize);
    return () => window.removeEventListener("resize", equalize);
  }, []);

  // Which step is currently "stuck" at STICKY_TOP — the one whose top edge
  // has reached the sticky offset and hasn't yet been covered by the next
  // step catching up. Compared with a small tolerance since sub-pixel
  // scroll positions rarely land on an exact integer.
  useEffect(() => {
    let queued = false;
    const measure = () => {
      queued = false;
      const els = slideRefs.current;
      let stuckIndex = 0;
      for (let i = 0; i < els.length; i++) {
        const top = els[i]?.getBoundingClientRect().top;
        if (top !== undefined && top <= STICKY_TOP + 1) stuckIndex = i;
      }
      setActiveStep(stuckIndex);
    };
    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="process" className="scroll-mt-24">
      <div className="mx-auto max-w-[1400px] px-6 pb-14 md:px-10">
        <Eyebrow>Process</Eyebrow>
        <h2
          style={{ fontFamily: "var(--font-serif)" }}
          className="mt-4 max-w-[24ch] text-[2.4rem] leading-tight md:text-[3.4rem]"
        >
          How the work happens.
        </h2>
      </div>

      <div className="relative">
        {steps.map((step, i) => {
          const isActive = activeStep === i;
          return (
            <div
              key={step.num}
              ref={(el) => {
                slideRefs.current[i] = el;
              }}
              className="sticky flex items-center border-t border-border transition-colors duration-500 ease-out"
              style={{
                top: "120px",
                minHeight: "54vh",
                height: slideHeight,
                background: isActive ? "var(--accent)" : "var(--background)",
              }}
            >
              <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-4 px-6 py-6 md:grid-cols-[140px_1fr] md:gap-16 md:px-10">
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: isActive ? "var(--accent-ink)" : "var(--accent)",
                    transition: "color 500ms ease-out",
                  }}
                  className="text-[3rem] leading-none md:text-[5rem]"
                >
                  {step.num}
                </div>
                <div className="max-w-[640px]">
                  <h3
                    className="mb-3.5 text-[1.5rem] transition-colors duration-500 ease-out"
                    style={{ color: isActive ? "var(--accent-ink)" : "var(--foreground)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="max-w-[52ch] text-[1rem] transition-colors duration-500 ease-out"
                    style={{ color: isActive ? "rgba(22,17,10,0.72)" : "var(--muted-foreground)" }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
