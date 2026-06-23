import type { Metadata } from "next";
import { Caveat, Sora } from "next/font/google";
import { ThemeProvider }       from "./providers/ThemeProvider";
import { SketchProvider }      from "./providers/SketchProvider";
import { SketchCanvas }        from "./components/SketchCanvas";
import { SmoothScrollProvider } from "./providers/SmoothScrollProvider";
import "./globals.css";

/* ── Handwriting font (closest web-safe substitute for Figma Hand) ── */
const caveat = Caveat({
  variable: "--font-hand",
  subsets:  ["latin"],
  weight:   ["400", "500", "600", "700"],
  display:  "swap",
});

/* ── Primary sans-serif body font ── */
const sora = Sora({
  variable: "--font-sans",
  subsets:  ["latin"],
  weight:   ["300", "400", "500", "600", "700", "800"],
  display:  "swap",
});

export const metadata: Metadata = {
  title: "Joshua Uba Tindugan · Interaction Designer",
  description:
    "Interaction designer, B.F.A. GWU. Designing for trust: financial access platforms, transit tools, and scholarship discovery.",
  keywords: ["UX Design", "UI Design", "Interaction Design", "Product Design", "Photography", "Washington DC", "Portfolio"],
  metadataBase: new URL("https://joshuaubatindugan.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title:       "Joshua Uba Tindugan · Interaction Designer",
    description: "Interaction designer, B.F.A. GWU.",
    url:         "https://joshuaubatindugan.com",
    siteName:    "Joshua Uba Tindugan",
    type:        "website",
    images: [{ url: "https://joshuaubatindugan.com/portrait.png", width: 1200, height: 630, alt: "Joshua Uba Tindugan" }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Joshua Uba Tindugan · Interaction Designer",
    description: "Interaction designer, B.F.A. GWU.",
    images:      ["https://joshuaubatindugan.com/portrait.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${caveat.variable} ${sora.variable}`}
      suppressHydrationWarning
    >
      <body style={{ fontFamily: "var(--font-sans, 'Sora', sans-serif)" }}>
        <ThemeProvider>
          <SketchProvider>
            <SmoothScrollProvider>{children}</SmoothScrollProvider>
            <SketchCanvas />
          </SketchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
