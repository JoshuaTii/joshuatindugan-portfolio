import { useState } from "react";
import { motion } from "motion/react";
import { Instagram, Linkedin, Mail, Send, ArrowUpRight, Check } from "lucide-react";
import { toast } from "sonner";

const socials = [
  {
    id: "instagram",
    label: "Instagram",
    handle: "@JoshuaTi_",
    href: "https://www.instagram.com/JoshuaTi_",
    Icon: Instagram,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "in/joshua-tindugan",
    href: "https://www.linkedin.com/in/joshua-tindugan",
    Icon: Linkedin,
  },
  {
    id: "email",
    label: "Email",
    handle: "jtindugan16@gmail.com",
    href: "mailto:jtindugan16@gmail.com",
    Icon: Mail,
  },
];

type Status = "idle" | "loading" | "success" | "error";

export function Connect() {
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
    <div className="grid items-stretch gap-6 lg:grid-cols-2">
      {/* Social links */}
      <div className="flex flex-col gap-6">
        {socials.map(({ id, label, handle, href, Icon }, i) => (
          <motion.a
            key={id}
            href={href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group flex flex-1 items-center justify-between rounded-[2rem] bg-card px-7 py-6 texture-grain"
          >
            <div className="flex items-center gap-5">
              <span className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors duration-300 group-hover:bg-accent">
                <Icon
                  size={22}
                  className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                />
              </span>
              <span className="flex flex-col">
                <span style={{ fontFamily: "var(--font-serif)" }} className="text-[1.35rem]">
                  {label}
                </span>
                <span className="text-muted-foreground text-[0.95rem]">{handle}</span>
              </span>
            </div>
            <ArrowUpRight
              size={24}
              className="text-muted-foreground transition-all duration-300 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </motion.a>
        ))}
      </div>

      {/* Message card */}
      <motion.form
        onSubmit={handleSend}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex h-full flex-col rounded-[2rem] bg-primary p-8 text-primary-foreground texture-grain texture-grain-light"
        noValidate
      >
        <h3 style={{ fontFamily: "var(--font-serif)" }} className="text-[1.6rem]">
          Leave a quick note
        </h3>
        <p className="mt-2 text-[1.12rem] text-white/60">
          A thought, a project, or just hello. I read every one.
        </p>

        {status === "success" ? (
          <div className="mt-7 flex flex-1 flex-col items-center justify-center gap-4 text-center">
            <span className="flex size-14 items-center justify-center rounded-full bg-[var(--accent-bright)] text-primary">
              <Check size={26} />
            </span>
            <span style={{ fontFamily: "var(--font-serif)" }} className="text-[1.3rem]">
              Message sent.
            </span>
            <p className="text-[1rem] text-white/60">I'll get back to you soon.</p>
          </div>
        ) : (
          <>
            <div className="mt-7 flex flex-1 flex-col gap-4">
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
                className="rounded-2xl bg-white/10 px-5 py-3.5 text-white placeholder:text-white/40 outline-none transition-shadow duration-300 focus:ring-2 focus:ring-[var(--accent-bright)] disabled:opacity-60"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                aria-label="Your email"
                required
                disabled={status === "loading"}
                className="rounded-2xl bg-white/10 px-5 py-3.5 text-white placeholder:text-white/40 outline-none transition-shadow duration-300 focus:ring-2 focus:ring-[var(--accent-bright)] disabled:opacity-60"
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your note"
                aria-label="Your note"
                required
                disabled={status === "loading"}
                className="min-h-[140px] flex-1 resize-none rounded-2xl bg-white/10 px-5 py-3.5 text-white placeholder:text-white/40 outline-none transition-shadow duration-300 focus:ring-2 focus:ring-[var(--accent-bright)] disabled:opacity-60"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="group mt-6 flex items-center justify-center gap-2 self-start rounded-full bg-[var(--accent-bright)] px-7 py-3.5 text-primary transition-transform duration-300 hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
            >
              <span>{status === "loading" ? "Sending…" : "Send note"}</span>
              <Send
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
              />
            </button>
          </>
        )}
      </motion.form>
    </div>
  );
}
