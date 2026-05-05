"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Opens native mail client as fallback — replace with a form service like Resend or Formspree
    window.location.href = `mailto:jtindugan16@gmail.com?subject=Portfolio Inquiry from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
    setSent(true);
  };

  return (
    <div className="pt-24 pb-24 px-6 max-w-6xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="mb-16"
      >
        <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: "var(--lime)" }}>
          Contact
        </p>
        <h1
          className="font-black tracking-tight leading-none"
          style={{ fontSize: "clamp(3rem,8vw,7rem)", color: "var(--text)" }}
        >
          Let&apos;s{" "}
          <span style={{ color: "var(--lime)" }}>create</span>
          <br />
          together.
        </h1>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Contact details */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.55 }}
        >
          <p className="text-base leading-relaxed mb-10" style={{ color: "var(--muted)" }}>
            Available for freelance projects, internships, and full-time roles. Reach out and
            let&apos;s talk about what we can build together.
          </p>

          <div className="space-y-6">
            {[
              { label: "Email", value: "jtindugan16@gmail.com", href: "mailto:jtindugan16@gmail.com" },
              { label: "Phone", value: "(202) 766-9321", href: "tel:+12027669321" },
              { label: "Location", value: "Washington, D.C.", href: null },
              { label: "Instagram", value: "@joshuba.archive", href: "https://instagram.com/joshuba.archive" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs font-mono tracking-widest uppercase mb-1" style={{ color: "var(--muted)" }}>
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-base font-medium transition-colors hover:text-white"
                    style={{ color: "var(--text)" }}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-base font-medium" style={{ color: "var(--text)" }}>{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.55 }}
        >
          {sent ? (
            <div
              className="h-full flex flex-col items-center justify-center text-center p-10 rounded-3xl border"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              <span className="text-4xl mb-4">✓</span>
              <p className="font-bold text-lg mb-2" style={{ color: "var(--lime)" }}>Message sent!</p>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                Your email client should have opened. I&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {[
                { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block text-xs font-mono tracking-widest uppercase mb-2"
                    style={{ color: "var(--muted)" }}
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    required
                    placeholder={field.placeholder}
                    value={form[field.id as "name" | "email"]}
                    onChange={(e) => setForm((f) => ({ ...f, [field.id]: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border outline-none transition-colors focus:border-[var(--lime)] text-sm"
                    style={{
                      background: "var(--card)",
                      borderColor: "var(--border)",
                      color: "var(--text)",
                    }}
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono tracking-widest uppercase mb-2"
                  style={{ color: "var(--muted)" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border outline-none transition-colors focus:border-[var(--lime)] text-sm resize-none"
                  style={{
                    background: "var(--card)",
                    borderColor: "var(--border)",
                    color: "var(--text)",
                  }}
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3.5 rounded-full font-semibold text-sm transition-transform duration-200 hover:scale-105 mt-2"
                style={{ background: "var(--lime)", color: "#000" }}
              >
                Send Message →
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
