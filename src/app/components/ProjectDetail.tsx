import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Clock, User, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Lightbox } from "./Lightbox";
import { CaseBlock } from "./case-study/CaseBlocks";
import { press } from "../lib/interactions";
import { projects, type Project, type ProjectImage } from "../data/projects";

type ProjectDetailProps = {
  project: Project;
  onOpen: (project: Project) => void;
};

export function ProjectDetail({ project, onOpen }: ProjectDetailProps) {
  const [activeSection, setActiveSection] = useState(project.sections[0].key);
  const [lightbox, setLightbox] = useState<{
    images: ProjectImage[];
    index: number;
  } | null>(null);

  useEffect(() => {
    const els = project.sections
      .map((s) => document.getElementById(`sec-${s.key}`))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id.replace("sec-", ""));
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [project]);

  const scrollTo = (key: string) => {
    document
      .getElementById(`sec-${key}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const nextProject =
    projects[(projects.findIndex((p) => p.id === project.id) + 1) % projects.length];

  const meta = [
    { Icon: User, label: "Role", value: project.role },
    { Icon: Clock, label: "Duration", value: project.duration },
    { Icon: Calendar, label: "Year", value: project.year },
  ];

  return (
    <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-32 pb-24">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="font-bold text-[0.85rem] uppercase tracking-[0.25em] text-accent">
          {project.kicker ?? `Case Study ${project.index} / 06`}
        </span>
        <h1
          style={{ fontFamily: "var(--font-sans)" }}
          className="mt-4 max-w-4xl text-[2.8rem] leading-[1.05] md:text-[4.5rem]"
        >
          {project.title}
        </h1>
        {project.tagline && (
          <p className="mt-4 max-w-2xl text-[1.35rem] italic leading-relaxed text-muted-foreground">
            {project.tagline}
          </p>
        )}
        <p className="mt-6 max-w-2xl text-[1.32rem] leading-relaxed text-muted-foreground">
          {project.summary}
        </p>

        {/* Flat divided row — icon + label/value directly on the page,
            separated by a hairline top border, instead of an icon-in-a-
            circle sitting inside its own filled card. */}
        <div className="mt-10 grid gap-x-8 gap-y-4 border-t border-border sm:grid-cols-3">
          {meta.map(({ Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3 pt-5">
              <Icon size={18} style={{ color: "var(--accent)" }} className="shrink-0" />
              <span className="flex flex-col">
                <span className="text-[0.8rem] uppercase tracking-[0.14em] text-muted-foreground">
                  {label}
                </span>
                <span className="text-[1.02rem]">{value}</span>
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12"
      >
        <motion.button
          type="button"
          onClick={() =>
            setLightbox({
              images: [{ src: project.heroLogo, alt: project.heroAlt ?? `${project.title} logo` }],
              index: 0,
            })
          }
          whileTap={press}
          aria-label={`View larger: ${project.heroAlt ?? `${project.title} logo`}`}
          className="group/hero block aspect-[16/8] w-full cursor-zoom-in overflow-hidden rounded-[10px] bg-muted focus:outline-none focus:ring-2 focus:ring-[var(--accent-bright)]"
        >
          <ImageWithFallback
            src={project.heroLogo}
            alt={project.heroAlt ?? `${project.title} logo`}
            className="size-full object-cover object-center transition-transform duration-[900ms] ease-out group-hover/hero:scale-[1.02]"
          />
        </motion.button>
      </motion.div>

      {/* Body with sticky index */}
      <div className="mt-20 grid gap-12 lg:grid-cols-[220px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-32 flex flex-col gap-1">
            <span className="mb-3 font-bold text-[0.78rem] uppercase tracking-[0.18em] text-muted-foreground">
              Contents
            </span>
            {project.sections.map((s) => {
              const isActive = activeSection === s.key;
              return (
                <motion.button
                  key={s.key}
                  onClick={() => scrollTo(s.key)}
                  whileTap={press}
                  className="group flex items-center gap-3 rounded-full py-2 pl-3 pr-4 text-left transition-colors duration-300 hover:bg-card"
                >
                  {/* Dot at rest, morphs into the active line/pill shape —
                      both states share the same accent color and rounded-full
                      radius, so only width/height actually animate. */}
                  <span
                    className="shrink-0 rounded-full transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)]"
                    style={{
                      background: "var(--accent)",
                      width: isActive ? "1.75rem" : "0.375rem",
                      height: isActive ? "2px" : "0.375rem",
                    }}
                  />
                  <span
                    className="text-[0.98rem] transition-colors"
                    style={{ color: isActive ? "var(--accent)" : "var(--muted-foreground)" }}
                  >
                    {s.label}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </aside>

        {/* Sections sit directly on the page background, separated by a
            hairline rule (matching Process's step dividers) instead of
            alternating filled card panels — one flat surface throughout,
            not a card inside a differently-toned card. */}
        <div className="flex min-w-0 flex-col gap-16">
          {project.sections.map((s, i) => (
            <motion.section
              key={s.key}
              id={`sec-${s.key}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`scroll-mt-32 ${i > 0 ? "border-t border-border pt-12" : ""}`}
            >
              <div className="flex items-baseline gap-4">
                <span
                  style={{ fontFamily: "var(--font-serif)" }}
                  className="text-[2rem] text-accent md:text-[2.4rem]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2
                  style={{ fontFamily: "var(--font-serif)" }}
                  className="text-[2rem] md:text-[2.4rem]"
                >
                  {s.label}
                </h2>
              </div>
              <div className="mt-6 flex min-w-0 flex-col gap-9 pl-0 md:gap-12 md:pl-10">
                {s.blocks.map((block, bi) => {
                  const isNewSubsection =
                    bi > 0 && block.type === "text" && Boolean(block.title);
                  return (
                    <div
                      key={bi}
                      className={isNewSubsection ? "mt-4 md:mt-6" : undefined}
                    >
                      <CaseBlock
                        block={block}
                        onImage={(images, index) => setLightbox({ images, index })}
                      />
                    </div>
                  );
                })}
              </div>
            </motion.section>
          ))}
        </div>
      </div>

      {/* Next project */}
      <motion.button
        onClick={() => {
          onOpen(nextProject);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        whileTap={press}
        className="group mt-24 flex w-full items-center justify-between gap-6 rounded-[2.5rem] p-8 texture-grain md:p-12"
        style={{ background: "var(--g1)", color: "var(--ink)" }}
      >
        <div className="flex flex-col text-left">
          <span className="font-bold text-[0.85rem] uppercase tracking-[0.2em]" style={{ color: "var(--ink-dim)" }}>
            Next project
          </span>
          <span
            style={{ fontFamily: "var(--font-serif)" }}
            className="mt-2 text-[2rem] md:text-[3rem]"
          >
            {nextProject.title}
          </span>
        </div>
        <span
          className="flex size-16 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-2"
          style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
        >
          <ArrowRight size={26} />
        </span>
      </motion.button>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onNavigate={(index) => setLightbox({ ...lightbox, index })}
        />
      )}
    </div>
  );
}
