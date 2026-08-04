import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { projects, type Project } from "../data/projects";

type WorkProps = {
  onOpen: (project: Project) => void;
};

export function Work({ onOpen }: WorkProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.8, 520);
    el.scrollBy({ left: amount * dir, behavior: "smooth" });
  };

  const updateEdges = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    // The trailing snap-comfort spacer keeps scrollWidth a few px past the
    // last real card, so the edge tolerance has to clear that gap too.
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 16);
  };

  useEffect(() => {
    updateEdges();
  }, []);

  useEffect(() => {
    const root = trackRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            setActiveIndex(idx);
          }
        });
      },
      { root, threshold: [0.6] },
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <div>
          <span className="font-bold text-[0.85rem] uppercase tracking-[0.25em] text-accent">
            Selected Work
          </span>
          <h2
            style={{ fontFamily: "var(--font-serif)" }}
            className="mt-3 text-[2.4rem] md:text-[3rem]"
          >
            Six case studies, one ongoing practice
          </h2>
        </div>
        <div className="flex shrink-0 gap-3 self-end sm:self-auto">
          <button
            onClick={() => scrollBy(-1)}
            disabled={atStart}
            aria-label="Previous project"
            className="group flex size-12 items-center justify-center rounded-full bg-card transition-colors duration-300 hover:enabled:bg-primary hover:enabled:text-primary-foreground disabled:opacity-35"
          >
            <ArrowLeft
              size={20}
              className="transition-transform duration-300 group-enabled:group-hover:-translate-x-1"
            />
          </button>
          <button
            onClick={() => scrollBy(1)}
            disabled={atEnd}
            aria-label="Next project"
            className="group flex size-12 items-center justify-center rounded-full bg-card transition-colors duration-300 hover:enabled:bg-primary hover:enabled:text-primary-foreground disabled:opacity-35"
          >
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-enabled:group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        onScroll={updateEdges}
        className="scrollbar-hide mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
        style={{ scrollPaddingLeft: "0px" }}
      >
        {projects.map((project, i) => (
          <motion.button
            key={project.id}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            data-index={i}
            onClick={() => onOpen(project)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative flex w-[82vw] shrink-0 snap-start flex-col overflow-hidden rounded-[10px] bg-card text-left sm:w-[420px]"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
              <ImageWithFallback
                src={project.cover}
                alt={`${project.title}, ${project.discipline}`}
                className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
              />
              <span className="absolute left-5 top-5 rounded-full bg-primary/85 px-3.5 py-1.5 text-[0.8rem] text-primary-foreground backdrop-blur-sm">
                {project.kicker ?? `${project.index} / 06`}
              </span>
              <span className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-full bg-[var(--accent-bright)] text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5">
                <ArrowUpRight size={20} />
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6 texture-grain">
              <span className="text-[0.82rem] uppercase tracking-[0.16em] text-muted-foreground">
                {project.discipline}
              </span>
              <h3
                style={{ fontFamily: "var(--font-serif)" }}
                className="mt-2 text-[1.6rem]"
              >
                {project.title}
              </h3>
              <p className="mt-3 text-[1.15rem] leading-relaxed text-muted-foreground">
                {project.summary}
              </p>
              <div className="scrollbar-hide mt-auto flex gap-2 overflow-x-auto pt-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="shrink-0 whitespace-nowrap rounded-full border px-3 py-1 text-[0.8rem] text-foreground/70"
                    style={{ borderColor: "rgba(15,15,15,0.22)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.button>
        ))}

        {/* trailing spacer for snap comfort */}
        <div className="w-2 shrink-0" aria-hidden />
      </div>

      <div className="mt-2 flex items-center justify-center gap-1 md:hidden">
        {projects.map((project, i) => (
          <button
            key={project.id}
            onClick={() =>
              cardRefs.current[i]?.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start",
              })
            }
            aria-label={`Go to ${project.title}`}
            aria-current={activeIndex === i}
            className="flex h-11 w-8 items-center justify-center"
          >
            <span
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: activeIndex === i ? "1.5rem" : "0.4rem",
                background: activeIndex === i ? "var(--accent-bright)" : "var(--border)",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
