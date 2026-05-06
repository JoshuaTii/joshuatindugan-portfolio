"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden bg-[#090909]/40">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#4ade80]/5 blur-[140px]" />
      </div>

      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-[#4ade80]/20 bg-[#4ade80]/5 text-[#4ade80] text-xs tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
            Available for work
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-white mb-9"
          style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)", fontWeight: 700, lineHeight: 1.02, letterSpacing: "-0.03em" }}
        >
          Joshua <br />
          <span className="text-[#4ade80]">Tindugan</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/50 max-w-lg mx-auto mb-16"
          style={{ fontSize: "clamp(1.05rem, 2vw, 1.25rem)", lineHeight: 1.85 }}
        >
          UX Designer crafting intentional digital experiences that bridge user needs and business goals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-5"
        >
          <button
            onClick={scrollToWork}
            className="px-10 py-5 bg-[#4ade80] text-[#090909] rounded-full text-sm tracking-widest uppercase hover:bg-[#86efac] transition-all duration-300 hover:scale-105 active:scale-95"
            style={{ fontWeight: 700 }}
          >
            View Work
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-10 py-5 border border-white/15 text-white/60 rounded-full text-sm tracking-widest uppercase hover:border-[#4ade80]/40 hover:text-white transition-all duration-300"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToWork}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 text-white/25 hover:text-[#4ade80] transition-colors duration-300"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
