import { useEffect } from "react";
import { motion } from "motion/react";
import { Hero } from "./Hero";
import { Work } from "./Work";
import { Process } from "./Process";
import { ConnectLinks, ContactForm } from "./Connect";
import { Eyebrow } from "./Eyebrow";
import { type Project } from "../data/projects";

type HomeProps = {
  onOpen: (project: Project) => void;
  onSectionChange: (id: string) => void;
};

// Numbered, amber-numeral treatment — matches Process's 01/02/03 pattern
// instead of a generic icon-in-circle card grid.
const capabilities = [
  {
    num: "01",
    title: "UX Research",
    body: "Interviews, synthesis, and iteration grounded in real constraints, turning lived experience into clear design direction.",
  },
  {
    num: "02",
    title: "Product Design",
    body: "End-to-end interfaces across fintech, transit, and edtech, from systems mapping to high-fidelity prototypes.",
  },
  {
    num: "03",
    title: "Systems & Accessibility",
    body: "Equity-minded, WCAG-aware decisions from structure to screen, so experiences feel simple, transparent, and human.",
  },
];

export function Home({ onOpen, onSectionChange }: HomeProps) {
  useEffect(() => {
    const ids = ["home", "about", "work", "process", "connect", "contact"];
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
    <div>
      <Hero />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
      {/* About */}
      <section id="about" className="scroll-mt-24 py-24">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.5fr]">
          <div>
            <Eyebrow>About</Eyebrow>
            <h2
              style={{ fontFamily: "var(--font-serif)" }}
              className="mt-4 text-[2.4rem] leading-tight md:text-[3.4rem]"
            >
              About me
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

            <div className="mt-4 flex flex-col border-t" style={{ borderColor: "var(--border)" }}>
              {capabilities.map(({ num, title, body }, i) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="grid grid-cols-[56px_1fr] items-baseline gap-5 border-b py-6"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span style={{ fontFamily: "var(--font-serif)" }} className="text-[1.4rem] text-accent">
                    {num}
                  </span>
                  <div>
                    <span
                      style={{ fontFamily: "var(--font-serif)" }}
                      className="block font-semibold text-[1.2rem]"
                    >
                      {title}
                    </span>
                    <span className="mt-2 block text-[1.12rem] leading-relaxed text-muted-foreground">
                      {body}
                    </span>
                  </div>
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
      </div>

      <Process />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
      {/* Connect */}
      <section id="connect" className="scroll-mt-24 py-24">
        <div className="mb-12 max-w-2xl">
          <Eyebrow>Connect</Eyebrow>
          <h2
            style={{ fontFamily: "var(--font-serif)" }}
            className="mt-4 text-[2.4rem] leading-tight md:text-[3.4rem]"
          >
            Find the work elsewhere.
          </h2>
        </div>
        <ConnectLinks />
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 py-24">
        <div className="mx-auto mb-10 max-w-xl text-center">
          <div className="flex justify-center">
            <Eyebrow>Contact</Eyebrow>
          </div>
          <h2
            style={{ fontFamily: "var(--font-serif)" }}
            className="mt-4 text-[2.4rem] leading-tight md:text-[3.4rem]"
          >
            Get in touch.
          </h2>
          <p className="mt-3 text-[1.05rem]" style={{ color: "var(--ink-dim)" }}>
            Usually replies within a few days.
          </p>
        </div>
        <div className="mx-auto max-w-xl">
          <ContactForm />
        </div>
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
    </div>
  );
}
