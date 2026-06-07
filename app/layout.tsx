import type { Metadata } from "next";
import { Caveat, Montserrat } from "next/font/google";
import { ThemeProvider }       from "./providers/ThemeProvider";
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
const montserrat = Montserrat({
  variable: "--font-sans",
  subsets:  ["latin"],
  weight:   ["300", "400", "500", "600", "700"],
  display:  "swap",
});

export const metadata: Metadata = {
  title: "Joshua Tindugan · Interaction Designer",
  description:
    "Interaction designer, B.F.A. GWU. Designing for trust: financial access platforms, transit tools, and scholarship discovery.",
  keywords: ["UX Design", "UI Design", "Interaction Design", "Product Design", "Photography", "Washington DC", "Portfolio"],
  metadataBase: new URL("https://joshuaubatindugan.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title:       "Joshua Tindugan · Interaction Designer",
    description: "Interaction designer, B.F.A. GWU.",
    url:         "https://joshuaubatindugan.com",
    siteName:    "Joshua Tindugan",
    type:        "website",
    images: [{ url: "https://joshuaubatindugan.com/portrait.png", width: 1200, height: 630, alt: "Joshua Tindugan" }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Joshua Tindugan · Interaction Designer",
    description: "Interaction designer, B.F.A. GWU.",
    images:      ["https://joshuaubatindugan.com/portrait.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${caveat.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <body style={{ fontFamily: "var(--font-sans, 'Montserrat', sans-serif)" }}>
        <ThemeProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
