import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Joshua Tindugan · UX/UI Designer",
  description:
    "UX/UI designer focused on research-driven, accessible, and visually polished digital experiences across financial access, public systems, cultural institutions, and editorial design.",
  keywords: ["UX Design", "UI Design", "Product Design", "Photography", "Washington DC", "Portfolio"],
  openGraph: {
    title: "Joshua Tindugan · UX/UI Designer",
    description:
      "UX/UI designer focused on research-driven, accessible, and visually polished digital experiences across financial access, public systems, cultural institutions, and editorial design.",
    url: "https://joshuaubatindugan.com",
    siteName: "Joshua Tindugan",
    type: "website",
    images: [
      {
        url: "https://joshuaubatindugan.com/portrait.png",
        width: 1200,
        height: 630,
        alt: "Joshua Tindugan — UX/UI Designer",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={playfair.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
