import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

type NavbarProps = {
  active: string;
  onNavigate: (section: string) => void;
  showBack: boolean;
  onBack: () => void;
};

const links = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "process", label: "Process" },
  { id: "connect", label: "Connect" },
];

// Ported from the Motion Portfolio build: the logo and the nav links are two
// separate fixed elements (brand-mark top-left, a centered pill top-center)
// rather than one combined bar. On small screens the pill drops to a bottom
// tab bar instead of trying to squeeze both into one row.
export function Navbar({ active, onNavigate, showBack, onBack }: NavbarProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-5 top-5 z-50 md:left-6 md:top-6"
      >
        {/* Plain text, no pill/background — a subtle text-shadow (not a
            container) keeps it legible over whatever page content happens
            to scroll underneath it. */}
        {showBack ? (
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-[0.85rem] text-[var(--ink)]"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            <span>Back to home</span>
          </button>
        ) : (
          <button
            onClick={() => onNavigate("home")}
            className="tracking-tight text-[0.85rem] text-[var(--ink)]"
            style={{ fontFamily: "var(--font-serif)", textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
          >
            joshua<span style={{ color: "var(--accent)" }}>·</span>tindugan
          </button>
        )}
      </motion.div>

      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-4 bottom-4 z-50 flex items-center justify-around gap-1 rounded-full border p-1.5 backdrop-blur-[10px] md:inset-x-auto md:bottom-auto md:left-1/2 md:top-5 md:right-auto md:-translate-x-1/2 md:justify-center md:gap-1 md:p-1.5"
        style={{ background: "rgba(22,24,29,0.7)", borderColor: "var(--g3)" }}
      >
        {links.map((link) => {
          const isActive = !showBack && active === link.id;
          return (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className="rounded-full px-4 py-[9px] text-[0.8rem] transition-colors duration-150 hover:bg-[var(--g2)] hover:text-[var(--ink)] focus-visible:bg-[var(--g2)] focus-visible:text-[var(--ink)]"
              style={{ color: isActive ? "var(--accent)" : "var(--ink-dim)" }}
            >
              {link.label}
            </button>
          );
        })}
      </motion.nav>
    </>
  );
}
