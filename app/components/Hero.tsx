"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative z-10 !pt-0 !pb-0 min-h-screen flex items-center justify-center overflow-hidden bg-[#090909]/40">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#4ade80]/5 blur-[140px]" />
      </div>

      {/* Center column, flex, all gaps explicit */}
      <div className="relative z-10 section-container flex flex-col items-center text-center">

        {/* Badge — padding 7px 20px, mb 22px */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 22 }}
        >
          <span
            className="inline-flex items-center gap-2.5 rounded-full border border-[#4ade80]/20 bg-[#4ade80]/5 text-[#4ade80] text-xs tracking-widest uppercase"
            style={{ padding: "9px 20px" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
            Available for work
          </span>
        </motion.div>

        {/* H1 — mb 28px */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-white"
          style={{
            fontSize: "clamp(3.5rem, 9vw, 8rem)",
            fontWeight: 700,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            marginBottom: 28,
          }}
        >
          Joshua <br />
          <span className="text-[#4ade80]">Tindugan</span>
        </motion.h1>

        {/* Subtitle — max-width 580px, line-height 1.6 */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/50"
          style={{
            fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
            lineHeight: 1.6,
            maxWidth: 580,
          }}
        >
          UX Designer crafting intentional digital experiences that bridge user needs and business goals.
        </motion.p>

        {/* Buttons — mt 44px, gap 18px, min-height 52px, padding 16px 32px */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center"
          style={{ gap: 18, marginTop: 44 }}
        >
          <button
            onClick={scrollToWork}
            className="inline-flex items-center justify-center bg-[#4ade80] text-[#090909] rounded-full text-sm tracking-widest uppercase hover:bg-[#86efac] transition-all duration-300 hover:scale-105 active:scale-95"
            style={{ fontWeight: 700, minHeight: 52, padding: "16px 36px" }}
          >
            View Work
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center justify-center border border-white/15 text-white/60 rounded-full text-sm tracking-widest uppercase hover:border-[#4ade80]/40 hover:text-white transition-all duration-300"
            style={{ minHeight: 52, padding: "16px 36px" }}
          >
            Get in Touch
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator — absolute, does not affect layout flow */}
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
