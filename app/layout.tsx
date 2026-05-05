import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Joshua Tindugan — Creative Designer & Photographer",
  description:
    "D.C. based creative designer and photographer with 4 years of experience shaping stories that live on screens, in print, and everywhere in between.",
  keywords: ["UI/UX Design", "Graphic Design", "Photography", "Washington DC", "Portfolio"],
  openGraph: {
    title: "Joshua Tindugan — Creative Designer & Photographer",
    description: "D.C. based creative designer and photographer.",
    url: "https://joshuatindugan.com",
    siteName: "Joshua Tindugan",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col" style={{ background: "var(--bg)", color: "var(--text)" }}>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
