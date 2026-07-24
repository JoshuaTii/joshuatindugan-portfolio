import { Resend } from "resend";

/**
 * Minimal structural types for Vercel's Node serverless request/response,
 * kept local instead of depending on @vercel/node purely for typings — its
 * devDependency tree (ts-morph, undici, py-analysis, etc.) drags in a long
 * chain of unrelated CVEs for a package we'd only use for two type imports.
 * The actual runtime objects Vercel provides are structurally identical.
 */
type ContactRequest = {
  method?: string;
  headers: Record<string, string | string[] | undefined>;
  socket?: { remoteAddress?: string };
  body?: { name?: unknown; email?: unknown; message?: unknown; _honeypot?: unknown };
};
type ContactResponse = {
  setHeader(name: string, value: string): void;
  status(code: number): ContactResponse;
  json(body: Record<string, unknown>): void;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Lightweight per-IP throttle. Serverless instances are short-lived so this
// isn't a durable rate limiter, but it stops naive repeat-submit abuse
// without provisioning external storage for a single-owner contact form.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 3;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
}

export default async function handler(req: ContactRequest, res: ContactResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  const ip =
    (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
    req.socket?.remoteAddress ||
    "unknown";
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: "Too many requests. Please try again in a minute." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] Missing RESEND_API_KEY environment variable");
    return res.status(500).json({ error: "Server is not configured to send messages yet." });
  }

  try {
    const { name, email, message, _honeypot } = req.body ?? {};

    // Honeypot: bots fill hidden fields, real visitors never see this one.
    if (_honeypot) {
      return res.status(400).json({ error: "Blocked." });
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }
    if (!EMAIL_RE.test(email)) {
      return res.status(400).json({ error: "Enter a valid email address." });
    }
    if (name.length > 200 || email.length > 200 || message.length > 5000) {
      return res.status(400).json({ error: "One of the fields is too long." });
    }

    // Sent as plain text only (no HTML rendering), so no injection risk from
    // user input reaching the outbound email body.
    const safeName = name.trim();
    const safeEmail = email.trim();
    const safeMessage = message.trim();

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "jtindugan16@gmail.com",
      replyTo: safeEmail,
      subject: `New portfolio message from ${safeName}`,
      text: [
        `Name:    ${safeName}`,
        `Email:   ${safeEmail}`,
        "",
        "Message:",
        safeMessage,
        "",
        "---",
        "Sent from the portfolio site's Connect form",
      ].join("\n"),
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return res.status(502).json({ error: "Could not send the message. Please try again." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[contact] send error:", err);
    return res.status(500).json({ error: "Server error. Please try again." });
  }
}
