"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;

const SOCIALS = [
  { icon: "/icons/email.svg",     label: "Email",     value: "jtindugan16@gmail.com",           href: "mailto:jtindugan16@gmail.com" },
  { icon: "/icons/linkedin.svg",  label: "LinkedIn",  value: "linkedin.com/in/joshua-tindugan", href: "https://www.linkedin.com/in/joshua-tindugan" },
  { icon: "/icons/instagram.svg", label: "Instagram", value: "@JoshuaTi_",                      href: "https://www.instagram.com/JoshuaTi_" },
];

export function Contact() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [form,     setForm]     = useState({ name: "", email: "", message: "" });
  const [status,   setStatus]   = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [focused,  setFocused]  = useState<string | null>(null);

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, _honeypot: "" }),
      });
      const data = await res.json();
      if (!res.ok) { setErrorMsg(data.error || "Something went wrong."); setStatus("error"); }
      else         { setStatus("success"); setForm({ name: "", email: "", message: "" }); }
    } catch {
      setErrorMsg("Could not reach the server. Please email me directly.");
      setStatus("error");
    }
  };

  const fieldStyle = (id: string): React.CSSProperties => ({
    width: "100%", padding: "14px 18px", lineHeight: 1.5,
    border: "1px solid",
    borderColor: focused === id ? "var(--input-focus)" : "var(--contact-border)",
    borderRadius: 10,
    background: "var(--input-bg)",
    color: "var(--text)",
    fontFamily: "var(--font-sans, 'Montserrat', sans-serif)",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 250ms ease, background 250ms ease",
  });

  return (
    <section id="connect" style={{ position: "relative", zIndex: 1, paddingBlock: "100px 120px", background: "var(--bg)", transition: "background 300ms ease" }}>
      <div style={{ position: "absolute", top: 0, left: 40, right: 40, height: 1, background: "var(--card-border)" }} aria-hidden="true" />
      <div ref={ref} className="section-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ marginBottom: 56 }}
        >
          <p style={{
            fontFamily: "var(--font-sans, 'Montserrat', sans-serif)",
            fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.2em",
            textTransform: "uppercase", color: "var(--text-3)", marginBottom: 14,
          }}>
            CONNECT
          </p>
          <h2 style={{
            fontFamily: "var(--font-hand, 'Caveat', cursive)",
            fontSize: "clamp(2rem, 5vw, 3.6rem)",
            fontWeight: 700, color: "var(--green)", lineHeight: 1.05, marginBottom: 16,
          }}>
            Let&apos;s start something great together!
          </h2>
          <p style={{ fontFamily: "var(--font-sans, 'Montserrat', sans-serif)", fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-2)", maxWidth: 520 }}>
            I&apos;m open to full-time roles, freelance, and collaboration.<br />Let&apos;s talk!
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 items-start" style={{ gap: 64 }}>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.12, ease: EASE }}
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, paddingBlock: 80, textAlign: "center" }}
              >
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--green-dim)", border: "1px solid var(--green-border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <CheckCircle size={24} color="var(--green)" strokeWidth={1.8} />
                </div>
                <p style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--text)", fontFamily: "var(--font-sans, 'Montserrat', sans-serif)" }}>Message sent.</p>
                <p style={{ fontSize: "0.82rem", color: "var(--text-2)", fontFamily: "var(--font-sans, 'Montserrat', sans-serif)" }}>I&apos;ll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <input type="text" name="_honeypot" tabIndex={-1} aria-hidden="true" style={{ display: "none" }} />

                {[
                  { id: "name",  label: "NAME",  type: "text",  placeholder: "Your full name" },
                  { id: "email", label: "EMAIL", type: "email", placeholder: "your@email.com" },
                ].map((f) => (
                  <div key={f.id} style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    <label htmlFor={`c-${f.id}`} style={{ fontFamily: "var(--font-sans, 'Montserrat', sans-serif)", fontSize: "0.65rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-3)", fontWeight: 700 }}>
                      {f.label}
                    </label>
                    <input id={`c-${f.id}`} type={f.type} placeholder={f.placeholder} required disabled={status === "loading"}
                      value={form[f.id as "name" | "email"]}
                      onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                      onFocus={() => setFocused(f.id)} onBlur={() => setFocused(null)}
                      className="placeholder:text-white/20"
                      style={fieldStyle(f.id)} />
                  </div>
                ))}

                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  <label htmlFor="c-message" style={{ fontFamily: "var(--font-sans, 'Montserrat', sans-serif)", fontSize: "0.65rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-3)", fontWeight: 700 }}>
                    MESSAGE
                  </label>
                  <textarea id="c-message" placeholder="Tell me about your project..." required rows={6} disabled={status === "loading"}
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                    className="resize-none placeholder:text-white/20"
                    style={{ ...fieldStyle("message"), minHeight: 150 }} />
                </div>

                {status === "error" && <p role="alert" style={{ fontSize: "0.8rem", color: "#f87171", fontFamily: "var(--font-sans, 'Montserrat', sans-serif)" }}>{errorMsg}</p>}

                {/* Send button — green bg, BLACK text, no arrow */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    width: "100%",
                    background: status === "loading" ? "var(--green-border)" : "var(--green-btn)",
                    color: "var(--btn-text)",
                    border: "none", borderRadius: 100,
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                    fontFamily: "var(--font-sans, 'Montserrat', sans-serif)",
                    fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase",
                    minHeight: 52, padding: "16px 28px",
                    opacity: status === "loading" ? 0.6 : 1,
                    transition: "opacity 220ms ease, transform 200ms ease",
                  }}
                  onMouseEnter={(e) => { if (status !== "loading") (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                >
                  {status === "loading" ? "Sending…" : "SEND MESSAGE"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Social cards — green icons, no right arrows */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.2, ease: EASE }}
            style={{ display: "flex", flexDirection: "column", gap: 24 }}
          >
            <p style={{ fontFamily: "var(--font-sans, 'Montserrat', sans-serif)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)" }}>
              REACH OUT DIRECTLY
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {SOCIALS.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.28 + i * 0.08 }}
                  style={{
                    display: "flex", alignItems: "center", gap: 16, textDecoration: "none",
                    border: "1px solid var(--contact-border)", borderRadius: 14,
                    background: "var(--card)", padding: "18px 22px",
                    transition: "border-color 240ms ease, background 240ms ease",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--green-border)"; (e.currentTarget as HTMLElement).style.background = "var(--green-dim)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--contact-border)"; (e.currentTarget as HTMLElement).style.background = "var(--card)"; }}
                >
                  {/* Green icon container */}
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%",
                    background: "var(--green-dim)", border: "1px solid var(--green-border)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <Image src={s.icon} alt={s.label} width={16} height={16}
                      style={{ filter: "brightness(0) saturate(100%) invert(55%) sepia(60%) saturate(400%) hue-rotate(100deg) brightness(95%)" }} />
                  </div>
                  <div style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: 3 }}>
                    <p style={{ fontFamily: "var(--font-sans, 'Montserrat', sans-serif)", fontSize: "0.65rem", color: "var(--text-3)", letterSpacing: "0.08em" }}>{s.label}</p>
                    <p style={{ fontFamily: "var(--font-sans, 'Montserrat', sans-serif)", fontSize: "0.82rem", color: "var(--text-2)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {s.value}
                    </p>
                  </div>
                  {/* No right arrow — removed per reference */}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
