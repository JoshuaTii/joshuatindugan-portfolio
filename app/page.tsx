"use client";
import { ParticleBackground } from "./components/ParticleBackground";
import { Navbar }             from "./components/Navbar";
import { Hero }               from "./components/Hero";
import { Marquee }            from "./components/Marquee";
import { Work }               from "./components/Work";
import { About }              from "./components/About";
import { Contact }            from "./components/Contact";
import { SiteFooter }         from "./components/SiteFooter";

export default function Home() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "var(--bg)", transition: "background 300ms ease" }}>
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
