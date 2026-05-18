import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Joshua Tindugan · Interaction Designer",
  description:
    "Interaction designer, B.F.A. GWU. Designing for trust: financial access platforms, transit tools, and scholarship discovery.",
  keywords: ["UX Design", "UI Design", "Interaction Design", "Product Design", "Photography", "Washington DC", "Portfolio"],
  metadataBase: new URL("https://joshuaubatindugan.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Joshua Tindugan · Interaction Designer",
    description:
      "Interaction designer, B.F.A. GWU. Designing for trust: financial access platforms, transit tools, and scholarship discovery.",
    url: "https://joshuaubatindugan.com",
    siteName: "Joshua Tindugan",
    type: "website",
    images: [
      {
        url: "https://joshuaubatindugan.com/portrait.png",
        width: 1200,
        height: 630,
        alt: "Joshua Tindugan, Interaction Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Tindugan · Interaction Designer",
    description:
      "Interaction design senior at GWU. Designing for trust: financial access platforms, transit tools, and scholarship discovery.",
    images: ["https://joshuaubatindugan.com/portrait.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={playfair.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
