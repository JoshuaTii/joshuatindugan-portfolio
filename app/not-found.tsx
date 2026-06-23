import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#000000]" style={{ fontFamily: "'Sora', system-ui, sans-serif" }}>
      <p className="text-[#95fbff] text-xs tracking-widest uppercase mb-4">404</p>
      <h1 className="text-white mb-4" style={{ fontSize: "3rem", fontWeight: 700 }}>Page not found</h1>
      <p className="text-white/40 mb-8">This page doesn&apos;t exist.</p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full text-sm tracking-wider uppercase transition-opacity hover:opacity-80"
        style={{ background: "#95fbff", color: "#0D2A2B", fontWeight: 600 }}
      >
        Back to Portfolio
      </Link>
    </div>
  );
}
