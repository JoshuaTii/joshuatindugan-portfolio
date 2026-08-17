import { useState } from "react";
import { motion } from "motion/react";
import { Send, ArrowUpRight, Check } from "lucide-react";
import { toast } from "sonner";
import { press, hoverScale } from "../lib/interactions";

const socials = [
  {
    id: "instagram",
    label: "Instagram",
    handle: "@JoshuaTi_",
    href: "https://www.instagram.com/JoshuaTi_",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "in/joshua-tindugan",
    href: "https://www.linkedin.com/in/joshua-tindugan",
  },
  {
    id: "email",
    label: "Email",
    handle: "jtindugan16@gmail.com",
    href: "mailto:jtindugan16@gmail.com",
  },
];

// Two separate full-width blocks, matching the reference build's #connect
// (this list) and #contact (ContactForm below) — not one merged two-column
// card, which is what the first port pass had done.
export function ConnectLinks() {
  return (
    <div className="flex flex-col border-t" style={{ borderColor: "var(--g3)" }}>
      {socials.map(({ id, label, handle, href }, i) => (
        <motion.a
          key={id}
          href={href}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          whileHover={hoverScale(1.012)}
          whileTap={press}
          className="group relative block overflow-hidden border-b no-underline"
          style={{ borderColor: "var(--g3)" }}
        >
          <span
            aria-hidden
            className="absolute inset-0 z-[1] origin-top scale-y-0 transition-transform duration-[380ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-y-100 group-focus-visible:scale-y-100"
            style={{ background: "var(--accent)" }}
          />

          <span
            aria-hidden
            className="absolute inset-0 z-[2] flex items-center gap-4 py-6 pointer-events-none [clip-path:inset(0_0_100%_0)] transition-[clip-path] duration-[380ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:[clip-path:inset(0_0_0%_0)] group-focus-visible:[clip-path:inset(0_0_0%_0)]"
            style={{ color: "var(--accent-ink)" }}
          >
            <span style={{ fontFamily: "var(--font-serif)" }} className="text-[1.25rem] font-medium">
              {label}
            </span>
            <span className="ml-auto text-[0.8rem] opacity-75">{handle}</span>
            <ArrowUpRight size={18} className="shrink-0" />
          </span>

          <span className="relative z-0 flex items-center gap-4 py-6" style={{ color: "var(--ink)" }}>
            <span style={{ fontFamily: "var(--font-serif)" }} className="text-[1.25rem] font-medium">
              {label}
            </span>
            <span className="ml-auto text-[0.8rem]" style={{ color: "var(--ink-dim)" }}>
              {handle}
            </span>
            <ArrowUpRight
              size={18}
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              style={{ color: "var(--ink-dim)" }}
            />
          </span>
        </motion.a>
      ))}
    </div>
  );
}

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Fill in your name, email, and a quick note before sending.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, _honeypot: honeypot }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        toast.error(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      toast.success("Note sent, thanks for reaching out.");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      toast.error("Could not reach the server. Please email me directly.");
      setStatus("error");
    }
  };

  return (
    <motion.form
        onSubmit={handleSend}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col rounded-[2rem] p-8 texture-grain"
        style={{ background: "var(--g1)", color: "var(--ink)" }}
        noValidate
      >
        {status === "success" ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 py-10 text-center">
            <span
              className="flex size-14 items-center justify-center rounded-full"
              style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
            >
              <Check size={26} />
            </span>
            <span style={{ fontFamily: "var(--font-serif)" }} className="text-[1.3rem]">
              Message sent.
            </span>
            <p className="text-[1rem]" style={{ color: "var(--ink-dim)" }}>
              I'll get back to you soon.
            </p>
          </div>
        ) : (
          <>
            <div className="flex flex-1 flex-col gap-4">
              {/* Honeypot: hidden from real visitors, bots tend to fill every field */}
              <input
                type="text"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                aria-label="Your name"
                required
                disabled={status === "loading"}
                className="rounded-2xl px-5 py-3.5 outline-none placeholder:text-[var(--ink-dim)] transition-shadow duration-300 focus:ring-2 focus:ring-[var(--accent)] disabled:opacity-60"
                style={{ background: "var(--g2)", color: "var(--ink)" }}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                aria-label="Your email"
                required
                disabled={status === "loading"}
                className="rounded-2xl px-5 py-3.5 outline-none placeholder:text-[var(--ink-dim)] transition-shadow duration-300 focus:ring-2 focus:ring-[var(--accent)] disabled:opacity-60"
                style={{ background: "var(--g2)", color: "var(--ink)" }}
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your note"
                aria-label="Your note"
                required
                disabled={status === "loading"}
                className="min-h-[140px] flex-1 resize-none rounded-2xl px-5 py-3.5 outline-none placeholder:text-[var(--ink-dim)] transition-shadow duration-300 focus:ring-2 focus:ring-[var(--accent)] disabled:opacity-60"
                style={{ background: "var(--g2)", color: "var(--ink)" }}
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={status === "loading" ? undefined : hoverScale(1.03)}
              whileTap={status === "loading" ? undefined : press}
              className="group mt-6 flex items-center justify-center gap-2 self-start rounded-full px-7 py-3.5 disabled:cursor-not-allowed disabled:opacity-70"
              style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
            >
              <span>{status === "loading" ? "Sending…" : "Send note"}</span>
              <Send
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
              />
            </motion.button>
          </>
        )}
      </motion.form>
  );
}
