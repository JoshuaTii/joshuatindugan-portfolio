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
  { id: "connect", label: "Connect" },
];

export function Navbar({ active, onNavigate, showBack, onBack }: NavbarProps) {
  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-5">
        <div className="flex items-center justify-between rounded-full bg-primary/90 backdrop-blur-md px-5 md:px-7 py-3 text-primary-foreground">
          {showBack ? (
            <button
              onClick={onBack}
              className="group flex items-center gap-2 text-[0.95rem]"
            >
              <ArrowLeft
                size={18}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              <span>Back to home</span>
            </button>
          ) : (
            <button
              onClick={() => onNavigate("home")}
              className="flex items-center gap-2"
            >
              <span
                className="inline-block size-2.5 rounded-full"
                style={{ background: "var(--accent-bright)" }}
              />
              <span className="tracking-tight" style={{ fontFamily: "var(--font-serif)" }}>
                Joshua Tindugan
              </span>
            </button>
          )}

          <nav className="flex items-center gap-1 sm:gap-2">
            {links.map((link) => {
              const isActive = active === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="relative rounded-full px-3 sm:px-4 py-1.5 text-[0.9rem] transition-colors duration-300 hover:text-white"
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full"
                      style={{ background: "rgba(255,255,255,0.14)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span
                    className="relative z-10"
                    style={{ color: isActive ? "var(--accent-bright)" : undefined }}
                  >
                    {link.label}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
