import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joshua Tindugan — UX Designer & Photographer",
  description:
    "D.C. based UX Designer and photographer crafting intentional digital experiences that bridge user needs and business goals.",
  keywords: ["UX Design", "Graphic Design", "Photography", "Washington DC", "Portfolio"],
  openGraph: {
    title: "Joshua Tindugan — UX Designer & Photographer",
    description: "D.C. based UX Designer and photographer.",
    url: "https://joshuaubatindugan.com",
    siteName: "Joshua Tindugan",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
