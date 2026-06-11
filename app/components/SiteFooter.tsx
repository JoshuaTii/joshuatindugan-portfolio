export function SiteFooter() {
  return (
    <footer style={{ position: "relative", zIndex: 1, borderTop: "1px solid var(--card-border)", background: "var(--bg)", transition: "background 300ms ease", paddingBlock: 32 }}>
      <div className="section-container flex flex-col md:flex-row items-center justify-between" style={{ gap: 8 }}>
        <p style={{ fontSize: "0.75rem", color: "var(--text-3)", fontFamily: "var(--font-sans, 'Montserrat', sans-serif)" }}>
          © 2026 Joshua Uba Tindugan. All rights reserved.
        </p>
        <p style={{ fontSize: "0.72rem", color: "var(--text-3)", fontFamily: "var(--font-sans, 'Montserrat', sans-serif)", letterSpacing: "0.06em" }}>
          UI/UX Designer · Washington, D.C.
        </p>
      </div>
    </footer>
  );
}
