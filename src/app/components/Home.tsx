import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowDown, Sparkles, Compass, PenTool } from "lucide-react";
import { Work } from "./Work";
import { Connect } from "./Connect";
import { type Project } from "../data/projects";

type HomeProps = {
  onOpen: (project: Project) => void;
  onSectionChange: (id: string) => void;
};

const capabilities = [
  {
    Icon: Compass,
    title: "UX Research",
    body: "Interviews, synthesis, and iteration grounded in real constraints, turning lived experience into clear design direction.",
  },
  {
    Icon: PenTool,
    title: "Product Design",
    body: "End-to-end interfaces across fintech, transit, and edtech, from systems mapping to high-fidelity prototypes.",
  },
  {
    Icon: Sparkles,
    title: "Systems & Accessibility",
    body: "Equity-minded, WCAG-aware decisions from structure to screen, so experiences feel simple, transparent, and human.",
  },
];

export function Home({ onOpen, onSectionChange }: HomeProps) {
  useEffect(() => {
    const ids = ["home", "about", "work", "connect"];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) onSectionChange(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [onSectionChange]);

  return (
    <div className="mx-auto max-w-[1400px] px-6 md:px-10">
      {/* Hero */}
      <section
        id="home"
        className="flex min-h-screen flex-col justify-center pt-28 pb-16"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 font-bold text-[0.9rem] uppercase tracking-[0.25em] text-accent"
        >
          <span className="inline-block h-px w-10" style={{ background: "var(--accent)" }} />
          Product Designer · Washington, D.C.
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: "var(--font-sans)" }}
          className="mt-6 max-w-5xl text-[3.2rem] leading-[1.02] md:text-[6rem]"
        >
          Product design for people navigating{" "}
          <span style={{ color: "var(--accent)" }}>broken</span> systems.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 max-w-2xl text-[1.37rem] leading-relaxed text-muted-foreground"
        >
          I'm Joshua Uba Tindugan, a designer focused on research, structure,
          and turning complex systems and workflows into simple, accessible
          digital products. My work is driven by community impact, breaking down
          barriers, and helping people move forward. I currently lead product
          design at COMPETE bePlayFuel.
        </motion.p>

        <motion.a
          href="#work"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="group mt-12 flex w-fit items-center gap-3 rounded-full bg-primary px-7 py-4 text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
        >
          <span>View selected work</span>
          <ArrowDown
            size={20}
            className="transition-transform duration-300 group-hover:translate-y-1"
          />
        </motion.a>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 py-24">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.5fr]">
          <div>
            <span className="font-bold text-[0.85rem] uppercase tracking-[0.25em] text-accent">
              About
            </span>
            <h2
              style={{ fontFamily: "var(--font-serif)" }}
              className="mt-4 text-[2.4rem] leading-tight md:text-[3.4rem]"
            >
              Who is Joshua?
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-[1.37rem] leading-relaxed text-foreground/85">
              I'm a product designer based in Washington, D.C., originally from
              Camiguin, a small island in the Philippines with little access to
              technology growing up. Drawing was my first way of exploring
              ideas, before I discovered how art and design could work with
              technology and went on to study Interaction Design at George
              Washington University, and graduated{" "}in{" "}2026.
            </p>
            <p className="text-[1.27rem] leading-relaxed text-muted-foreground">
              Most of my recent work has focused on research-driven, accessible
              design for financial access, education, transit, and improving
              experiences for the people. Outside of product work, I still draw
              and shoot photography, the same practice in a different medium.
            </p>

            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {capabilities.map(({ Icon, title, body }) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5 }}
                  className="group flex flex-col rounded-[1.75rem] bg-card p-6 texture-grain"
                >
                  <span className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors duration-300 group-hover:bg-accent">
                    <Icon
                      size={22}
                      className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                    />
                  </span>
                  <span
                    style={{ fontFamily: "var(--font-serif)" }}
                    className="mt-5 font-semibold text-[1.2rem]"
                  >
                    {title}
                  </span>
                  <span className="mt-2 text-[1.12rem] leading-relaxed text-muted-foreground">
                    {body}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="scroll-mt-24 py-24">
        <Work onOpen={onOpen} />
      </section>

      {/* Connect */}
      <section id="connect" className="scroll-mt-24 py-24">
        <div className="mb-12 max-w-2xl">
          <span className="font-bold text-[0.85rem] uppercase tracking-[0.25em] text-accent">
            Connect
          </span>
          <h2
            style={{ fontFamily: "var(--font-serif)" }}
            className="mt-4 text-[2.4rem] leading-tight md:text-[3.4rem]"
          >
            Let's start something great together!
          </h2>
        </div>
        <Connect />
      </section>

      <footer className="flex flex-col items-center gap-2 border-t border-border py-12 text-center text-muted-foreground">
        <span style={{ fontFamily: "var(--font-serif)" }} className="text-[1.1rem] text-foreground">
          Joshua Uba Tindugan
        </span>
        <span className="text-[0.9rem]">
          UI/UX Design · Washington, D.C. · {new Date().getFullYear()}
        </span>
      </footer>
    </div>
  );
}
