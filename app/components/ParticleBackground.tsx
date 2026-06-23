"use client";
import { useEffect, useRef } from "react";
import { useTheme } from "../providers/ThemeProvider";

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  baseVx: number; baseVy: number;
  size: number; alpha: number;
}

const REPULSE_RADIUS   = 120;
const REPULSE_STRENGTH = 4;
const RETURN_SPEED     = 0.04;
const PARTICLE_COUNT   = 70;
const CONNECTION_DIST  = 120;

export function ParticleBackground() {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse     = useRef({ x: -9999, y: -9999 });
  const themeRef  = useRef(theme);

  useEffect(() => { themeRef.current = theme; }, [theme]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width  = (canvas.width  = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animId: number;

    const particles: Particle[] = [];

    const spawn = () => {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const bvx = (Math.random() - 0.5) * 0.35;
        const bvy = (Math.random() - 0.5) * 0.35;
        particles.push({
          x: Math.random() * width, y: Math.random() * height,
          vx: bvx, vy: bvy, baseVx: bvx, baseVy: bvy,
          size: Math.random() * 1.6 + 0.5,
          alpha: Math.random() * 0.4 + 0.1,
        });
      }
    };
    spawn();

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const dark = themeRef.current === "dark";
      // Dark: #95fbff (electric cyan, subtle on black)
      // Light: #00696c (deep teal, visible against light bg)
      const r = dark ? 149 : 0;
      const g = dark ? 251 : 105;
      const b = dark ? 255 : 108;
      // Light particles need more weight to read against a pale background
      const alphaMul = dark ? 1 : 1.7;
      const mx = mouse.current.x;
      const my = mouse.current.y;

      for (const p of particles) {
        const dx   = p.x - mx;
        const dy   = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < REPULSE_RADIUS && dist > 0) {
          const force = ((REPULSE_RADIUS - dist) / REPULSE_RADIUS) * REPULSE_STRENGTH;
          p.vx += (dx / dist) * force * 0.08;
          p.vy += (dy / dist) * force * 0.08;
        }
        p.vx += (p.baseVx - p.vx) * RETURN_SPEED;
        p.vy += (p.baseVy - p.vy) * RETURN_SPEED;
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 4) { p.vx = (p.vx / speed) * 4; p.vy = (p.vy / speed) * 4; }
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = width;  if (p.x > width)  p.x = 0;
        if (p.y < 0) p.y = height; if (p.y > height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${Math.min(1, p.alpha * alphaMul)})`;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECTION_DIST) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const lineAlpha = dark ? 0.06 : 0.16;
            ctx.strokeStyle = `rgba(${r},${g},${b},${lineAlpha * (1 - d / CONNECTION_DIST)})`;
            ctx.lineWidth = dark ? 0.5 : 0.7;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    const onResize    = () => { width = canvas.width  = window.innerWidth; height = canvas.height = window.innerHeight; spawn(); };
    const onMouseMove = (e: MouseEvent) => { mouse.current = { x: e.clientX, y: e.clientY }; };
    const onLeave     = () => { mouse.current = { x: -9999, y: -9999 }; };

    window.addEventListener("resize",    onResize,    { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize",    onResize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed", inset: 0,
        pointerEvents: "none", zIndex: 0,
        opacity: theme === "dark" ? 0.75 : 0.8,
        transition: "opacity 300ms ease",
      }}
    />
  );
}
