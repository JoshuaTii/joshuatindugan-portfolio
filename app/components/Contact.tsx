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
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, _honeypot: "" }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      } else {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      }
    } catch {
      setErrorMsg("Something went wrong. Please try again or email me directly.");
      setStatus("error");
    }
  };

  const inputStyle = (id: string) => ({
    padding: "18px 22px",
    minHeight: 56,
    lineHeight: 1.4,
    borderRadius: 12,
    border: "1px solid",
    borderColor: focused === id ? "rgba(74,222,128,0.35)" : "rgba(255,255,255,0.07)",
    boxShadow: focused === id ? "0 0 0 3px rgba(74,222,128,0.06)" : "none",
    background: "rgba(255,255,255,0.03)",
    color: "white",
    outline: "none",
    width: "100%",
    fontSize: "0.875rem",
    transition: "border-color 0.3s, box-shadow 0.3s",
  });

  return (
    <section id="contact" className="relative z-10 !pt-[180px] !pb-[120px] bg-[#090909]/60">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] pointer-events-none">
        <div className="w-full h-full bg-[#4ade80]/4 blur-[120px] rounded-full" />
      </div>

      <div ref={ref} className="section-container">

        {/* Header — flex column, gap 18px, center, max-width 760px, mb 72px */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center"
          style={{ gap: 18, maxWidth: 760, margin: "0 auto 72px" }}
        >
          <p className="text-[#4ade80] text-xs uppercase" style={{ letterSpacing: "0.12em" }}>
            Contact
          </p>
          <h2
            className="text-white"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
            }}
          >
            Let&apos;s work together
          </h2>
          <p className="text-white/40" style={{ lineHeight: 1.65, maxWidth: 480 }}>
            Whether you have a project in mind or just want to chat about design, my inbox is always open.
          </p>
        </motion.div>

        {/* Two columns — gap 72px */}
        <div className="grid lg:grid-cols-2 items-start" style={{ gap: 72 }}>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-24 text-center"
                style={{ gap: 16 }}
              >
                <div
                  className="rounded-full bg-[#4ade80]/10 border border-[#4ade80]/25 flex items-center justify-center"
                  style={{ width: 64, height: 64 }}
                >
                  <CheckCircle size={28} className="text-[#4ade80]" />
                </div>
                <p className="text-white" style={{ fontWeight: 600, fontSize: "1.2rem" }}>Message sent.</p>
                <p className="text-white/40 text-sm">I&apos;ll get back to you soon.</p>
              </motion.div>
            ) : (
              /* Form — flex column, gap 24px between field groups */
              <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: 24 }}>

                {/* Honeypot — hidden from real users, bots fill it in */}
                <input
                  type="text"
                  name="_honeypot"
                  tabIndex={-1}
                  aria-hidden="true"
                  style={{ display: "none" }}
                  onChange={() => {}}
                />

                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your full name" },
                  { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map((field) => (
                  <div key={field.id} className="flex flex-col" style={{ gap: 10 }}>
                    <label
                      htmlFor={`contact-${field.id}`}
                      className="text-white/40 text-xs uppercase"
                      style={{ letterSpacing: "0.08em" }}
                    >
                      {field.label}
                    </label>
                    <input
                      id={`contact-${field.id}`}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.id as "name" | "email"]}
                      onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                      onFocus={() => setFocused(field.id)}
                      onBlur={() => setFocused(null)}
                      required
                      disabled={status === "loading"}
                      className="placeholder:text-white/20"
                      style={inputStyle(field.id)}
                    />
                  </div>
                ))}

                {/* Message field group */}
                <div className="flex flex-col" style={{ gap: 10 }}>
                  <label
                    htmlFor="contact-message"
                    className="text-white/40 text-xs uppercase"
                    style={{ letterSpacing: "0.08em" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    required
                    disabled={status === "loading"}
                    className="resize-none placeholder:text-white/20"
                    style={{
                      ...inputStyle("message"),
                      minHeight: 180,
                      height: "auto",
                    }}
                    rows={7}
                  />
                </div>

                {/* Error message */}
                {status === "error" && (
                  <p
                    role="alert"
                    aria-live="polite"
                    style={{ fontSize: "0.875rem", color: "#f87171", lineHeight: 1.5 }}
                  >
                    {errorMsg}
                  </p>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center bg-[#4ade80] text-[#090909] rounded-xl text-sm tracking-widest uppercase transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
                  style={{
                    fontWeight: 600,
                    minHeight: 56,
                    padding: "18px 32px",
                    gap: 10,
                    opacity: status === "loading" ? 0.7 : 1,
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                  }}
                >
                  {status === "loading" ? "Sending…" : "Send Message"}
                  {status !== "loading" && <ArrowRight size={16} />}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right column — contact cards + availability */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
            style={{ gap: 32 }}
          >
            <div>
              <p
                className="text-white/25 text-xs uppercase"
                style={{ letterSpacing: "0.12em", marginBottom: 20 }}
              >
                Reach Out Directly
              </p>

              {/* Social cards — gap 18px, min-height 84px, padding 24px 28px */}
              <div className="flex flex-col" style={{ gap: 18 }}>
                {socials.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                    className="group flex items-center rounded-xl border border-white/6 bg-white/2 hover:border-[#4ade80]/20 hover:bg-[#4ade80]/3 transition-all duration-300"
                    style={{ minHeight: 84, padding: "24px 28px", gap: 18 }}
                  >
                    <div
                      className="rounded-full bg-white/5 border border-white/8 flex items-center justify-center group-hover:border-[#4ade80]/25 group-hover:bg-[#4ade80]/8 transition-all duration-300 shrink-0"
                      style={{ width: 44, height: 44 }}
                    >
                      <social.icon size={17} className="text-white/50 group-hover:text-[#4ade80] transition-colors duration-300" />
                    </div>
                    <div className="min-w-0 flex flex-col" style={{ gap: 4 }}>
                      <p className="text-white/30 text-xs">{social.label}</p>
                      <p className="text-white/70 text-sm group-hover:text-white transition-colors duration-300 truncate">
                        {social.value}
                      </p>
                    </div>
                    <ArrowRight
                      size={14}
                      className="ml-auto shrink-0 text-white/20 group-hover:text-[#4ade80] transition-all duration-300 -translate-x-1 group-hover:translate-x-0"
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability card — padding 22px 26px */}
            <div
              className="rounded-xl border border-[#4ade80]/10 bg-[#4ade80]/3 flex flex-col"
              style={{ padding: "22px 26px", gap: 14 }}
            >
              <div className="flex items-center" style={{ gap: 10 }}>
                <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
                <span className="text-[#4ade80] text-xs uppercase" style={{ letterSpacing: "0.12em" }}>
                  Available for Work
                </span>
              </div>
              <p className="text-white/50 text-sm" style={{ lineHeight: 1.65 }}>
                Open to work now — freelance projects, collaborations, and full-time opportunities. Let&apos;s create something great.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
