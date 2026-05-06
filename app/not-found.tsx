import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#090909]" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <p className="text-[#4ade80] text-xs tracking-widest uppercase mb-4">404</p>
      <h1 className="text-white mb-4" style={{ fontSize: "3rem", fontWeight: 700 }}>Page not found</h1>
      <p className="text-white/40 mb-8">This page doesn&apos;t exist.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#4ade80] text-[#090909] rounded-full text-sm tracking-wider uppercase hover:bg-[#86efac] transition-colors"
        style={{ fontWeight: 600 }}
      >
        Back to Portfolio
      </Link>
    </div>
  );
}
