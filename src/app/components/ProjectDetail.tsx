import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Clock, User, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Lightbox } from "./Lightbox";
import { CaseBlock } from "./case-study/CaseBlocks";
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
          {project.kicker ?? `Case Study ${project.index} / 04`}
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

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {meta.map(({ Icon, label, value }) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-[1.5rem] bg-card px-6 py-5 texture-grain"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Icon size={19} />
              </span>
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
        <button
          type="button"
          onClick={() =>
            setLightbox({
              images: [{ src: project.heroLogo, alt: project.heroAlt ?? `${project.title} logo` }],
              index: 0,
            })
          }
          aria-label={`View larger: ${project.heroAlt ?? `${project.title} logo`}`}
          className="group/hero block aspect-[16/8] w-full cursor-zoom-in overflow-hidden rounded-[2.5rem] bg-muted focus:outline-none focus:ring-2 focus:ring-[var(--accent-bright)]"
        >
          <ImageWithFallback
            src={project.heroLogo}
            alt={project.heroAlt ?? `${project.title} logo`}
            className="size-full object-cover object-center transition-transform duration-[900ms] ease-out group-hover/hero:scale-[1.02]"
          />
        </button>
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
                <button
                  key={s.key}
                  onClick={() => scrollTo(s.key)}
                  className="group flex items-center gap-3 rounded-full py-2 pl-3 pr-4 text-left transition-colors duration-300 hover:bg-card"
                >
                  <span
                    className="h-px w-6 transition-all duration-300"
                    style={{
                      background: isActive ? "var(--accent)" : "var(--border)",
                      width: isActive ? "1.75rem" : "1rem",
                    }}
                  />
                  <span
                    className="text-[0.98rem] transition-colors"
                    style={{ color: isActive ? "var(--accent)" : "var(--muted-foreground)" }}
                  >
                    {s.label}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        <div className="flex min-w-0 flex-col gap-16">
          {project.sections.map((s, i) => {
            const tone = i % 2 === 1 ? "card" : "plain";
            return (
              <motion.section
                key={s.key}
                id={`sec-${s.key}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`scroll-mt-32 rounded-[2rem] p-7 md:p-10 ${
                  i % 2 === 1 ? "texture-grain" : ""
                }`}
                style={{ background: i % 2 === 1 ? "var(--card)" : "transparent" }}
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
                          tone={tone}
                          onImage={(images, index) => setLightbox({ images, index })}
                        />
                      </div>
                    );
                  })}
                </div>
              </motion.section>
            );
          })}
        </div>
      </div>

      {/* Next project */}
      <button
        onClick={() => {
          onOpen(nextProject);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="group mt-24 flex w-full items-center justify-between gap-6 rounded-[2.5rem] bg-primary p-8 text-primary-foreground texture-grain texture-grain-light md:p-12"
      >
        <div className="flex flex-col text-left">
          <span className="font-bold text-[0.85rem] uppercase tracking-[0.2em] text-white/50">
            Next project
          </span>
          <span
            style={{ fontFamily: "var(--font-serif)" }}
            className="mt-2 text-[2rem] md:text-[3rem]"
          >
            {nextProject.title}
          </span>
        </div>
        <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-[var(--accent-bright)] text-primary transition-transform duration-300 group-hover:translate-x-2">
          <ArrowRight size={26} />
        </span>
      </button>

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
