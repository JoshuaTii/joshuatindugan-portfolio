"use client";
import { ParticleBackground } from "./components/ParticleBackground";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Info } from "./components/Info";
import { Contact } from "./components/Contact";
import { SiteFooter } from "./components/SiteFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#090909]">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Info />
      <Contact />
      <SiteFooter />
    </div>
  );
}
