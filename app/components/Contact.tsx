"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";

function LinkedInIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

const socials = [
  { icon: Mail, label: "Email", value: "jtindugan16@gmail.com", href: "mailto:jtindugan16@gmail.com" },
  { icon: LinkedInIcon, label: "LinkedIn", value: "linkedin.com/in/joshua-tindugan", href: "https://www.linkedin.com/in/joshua-tindugan" },
  { icon: InstagramIcon, label: "Instagram", value: "@JoshuaTi_", href: "https://www.instagram.com/JoshuaTi_" },
];

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative z-10 py-32 bg-[#090909]/60">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none">
        <div className="w-full h-full bg-[#4ade80]/4 blur-[100px] rounded-full" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p className="text-[#4ade80] text-xs tracking-widest uppercase mb-4">Contact</p>
          <h2 className="text-white mb-4" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Let&apos;s work together
          </h2>
          <p className="text-white/40 max-w-md mx-auto" style={{ lineHeight: 1.7 }}>
            Whether you have a project in mind or just want to chat about design, my inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/25 flex items-center justify-center mb-5">
                  <CheckCircle size={28} className="text-[#4ade80]" />
                </div>
                <p className="text-white mb-2" style={{ fontWeight: 600, fontSize: "1.2rem" }}>Message Sent!</p>
                <p className="text-white/40 text-sm">I&apos;ll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your full name" },
                  { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map((field) => (
                  <div key={field.id}>
                    <label className="block text-white/40 text-xs tracking-wider uppercase mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.id as "name" | "email"]}
                      onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                      onFocus={() => setFocused(field.id)}
                      onBlur={() => setFocused(null)}
                      required
                      className="w-full px-5 py-4 rounded-xl border bg-white/3 text-white placeholder:text-white/20 outline-none transition-all duration-300 text-sm"
                      style={{
                        borderColor: focused === field.id ? "rgba(74,222,128,0.35)" : "rgba(255,255,255,0.07)",
                        boxShadow: focused === field.id ? "0 0 0 3px rgba(74,222,128,0.06)" : "none",
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-white/40 text-xs tracking-wider uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    required
                    rows={5}
                    className="w-full px-5 py-4 rounded-xl border bg-white/3 text-white placeholder:text-white/20 outline-none transition-all duration-300 text-sm resize-none"
                    style={{
                      borderColor: focused === "message" ? "rgba(74,222,128,0.35)" : "rgba(255,255,255,0.07)",
                      boxShadow: focused === "message" ? "0 0 0 3px rgba(74,222,128,0.06)" : "none",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-[#4ade80] text-[#090909] rounded-xl text-sm tracking-wider uppercase hover:bg-[#86efac] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
                  style={{ fontWeight: 600 }}
                >
                  Send Message
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div>
              <p className="text-white/25 text-xs tracking-widest uppercase mb-6">Reach Out Directly</p>
              <div className="space-y-4">
                {socials.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                    className="group flex items-center gap-4 p-4 rounded-xl border border-white/6 bg-white/2 hover:border-[#4ade80]/20 hover:bg-[#4ade80]/3 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/8 flex items-center justify-center group-hover:border-[#4ade80]/25 group-hover:bg-[#4ade80]/8 transition-all duration-300">
                      <social.icon size={16} className="text-white/50 group-hover:text-[#4ade80] transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-white/30 text-xs">{social.label}</p>
                      <p className="text-white/70 text-sm group-hover:text-white transition-colors duration-300">
                        {social.value}
                      </p>
                    </div>
                    <ArrowRight size={14} className="ml-auto text-white/20 group-hover:text-[#4ade80] transition-all duration-300 -translate-x-1 group-hover:translate-x-0" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl border border-[#4ade80]/10 bg-[#4ade80]/3">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
                <span className="text-[#4ade80] text-xs tracking-widest uppercase">Available for Work</span>
              </div>
              <p className="text-white/50 text-sm" style={{ lineHeight: 1.7 }}>
                Open to work now — freelance projects, collaborations, and full-time opportunities. Let&apos;s create something great.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
