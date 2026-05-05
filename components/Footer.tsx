import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="border-t px-6 py-10"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs tracking-widest uppercase font-bold" style={{ color: "var(--lime)" }}>
          Joshua Tindugan
        </p>
        <nav className="flex gap-6">
          {[
            { label: "Info", href: "/about" },
            { label: "Work", href: "/work" },
            { label: "Contact", href: "/contact" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs font-medium transition-colors hover:text-white"
              style={{ color: "var(--muted)" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs" style={{ color: "var(--muted)" }}>
          © {new Date().getFullYear()} · Washington, D.C.
        </p>
      </div>
    </footer>
  );
}
