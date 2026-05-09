import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message, _honeypot } = body;

    // Honeypot — bots fill hidden fields, humans don't
    if (_honeypot) {
      return NextResponse.json({ error: "Blocked." }, { status: 400 });
    }

    // Server-side field validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }
    if (name.length > 200 || email.length > 200 || message.length > 5000) {
      return NextResponse.json({ error: "Input exceeds maximum length." }, { status: 400 });
    }

    // Sanitize for plain-text email — no HTML rendering, so no injection risk
    const safeName    = name.trim();
    const safeEmail   = email.trim();
    const safeMessage = message.trim();

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to:   "jtindugan16@gmail.com",
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
        "Sent from: joshuaubatindugan.com contact form",
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send error:", err);
    return NextResponse.json({ error: "Server error. Please try again." }, { status: 500 });
  }
}
