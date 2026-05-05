"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../data";

const categories = ["All", "UI/UX Design", "Photography"];

export default function Work() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="pt-24 pb-24 px-6 max-w-6xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="mb-16"
      >
        <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: "var(--lime)" }}>
          Work
        </p>
        <h1
          className="font-black tracking-tight leading-none mb-8"
          style={{ fontSize: "clamp(3rem,8vw,7rem)", color: "var(--text)" }}
        >
          My Work
        </h1>

        {/* Filters */}
        <div className="flex gap-3 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className="text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200"
              style={{
                borderColor: active === c ? "var(--lime)" : "var(--border)",
                color: active === c ? "#000" : "var(--muted)",
                background: active === c ? "var(--lime)" : "transparent",
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="flex flex-col">
        {filtered.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, duration: 0.45 }}
          >
            <Link href={`/work/${p.slug}`} className="group block">
              <div
                className="flex items-center justify-between py-7 transition-all duration-200 group-hover:pl-3"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <div className="flex items-center gap-6 min-w-0">
                  <span
                    className="text-xs font-mono w-7 shrink-0"
                    style={{ color: p.color, opacity: 0.8 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <p
                      className="text-xl md:text-3xl font-bold tracking-tight transition-colors duration-200 group-hover:text-white"
                      style={{ color: "var(--text)" }}
                    >
                      {p.title}
                    </p>
                    <p className="text-sm mt-1 leading-relaxed max-w-xl" style={{ color: "var(--muted)" }}>
                      {p.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 shrink-0 ml-6">
                  <div className="hidden sm:flex gap-2 flex-wrap justify-end">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full border"
                        style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-mono whitespace-nowrap" style={{ color: "var(--muted)" }}>
                    {p.period}
                  </span>
                  <span
                    className="text-lg transition-transform duration-200 group-hover:translate-x-1"
                    style={{ color: p.color }}
                  >
                    →
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
