"use client";
import { useEffect, useRef } from "react";
import { useSketch } from "../providers/SketchProvider";
import { useTheme } from "../providers/ThemeProvider";

const STROKE_DARK  = "#95fbff";
const STROKE_LIGHT = "#00696c";

export function SketchCanvas() {
  const { sketchOn, canvasRef, pushHistory } = useSketch();
  const { theme } = useTheme();

  const drawing   = useRef(false);
  const points    = useRef<{ x: number; y: number }[]>([]);
  const rafId     = useRef<number | null>(null);
  const strokeRef = useRef(theme === "dark" ? STROKE_DARK : STROKE_LIGHT);

  // Keep stroke color current without re-running the drawing effect
  useEffect(() => {
    strokeRef.current = theme === "dark" ? STROKE_DARK : STROKE_LIGHT;
  }, [theme]);

  // Size canvas to full document; save/restore pixel content on resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const ctx = canvas.getContext("2d");
      let saved: ImageData | null = null;
      if (ctx && canvas.width > 0 && canvas.height > 0) {
        try { saved = ctx.getImageData(0, 0, canvas.width, canvas.height); } catch (_) {}
      }
      // Hide canvas before measuring so it doesn't inflate scrollHeight (breaks feedback loop)
      canvas.style.display = "none";
      const w = document.documentElement.clientWidth;  // excludes scrollbar width
      const h = document.documentElement.scrollHeight; // true content height
      canvas.style.display = "block";
      canvas.width  = w;
      canvas.height = h;
      if (ctx && saved) ctx.putImageData(saved, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    const ro = new ResizeObserver(resize);
    ro.observe(document.body);
    return () => {
      window.removeEventListener("resize", resize);
      ro.disconnect();
    };
  }, [canvasRef]);

  // Pointer events + requestAnimationFrame + quadratic bezier smoothing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const flush = () => {
      const pts = points.current;
      if (pts.length < 2) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.strokeStyle = strokeRef.current;
      ctx.lineWidth   = 2.5;
      ctx.lineCap     = "round";
      ctx.lineJoin    = "round";
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);

      for (let i = 1; i < pts.length - 1; i++) {
        const mx = (pts[i].x + pts[i + 1].x) / 2;
        const my = (pts[i].y + pts[i + 1].y) / 2;
        ctx.quadraticCurveTo(pts[i].x, pts[i].y, mx, my);
      }
      ctx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);
      ctx.stroke();

      // Keep last point so next frame continues the stroke smoothly
      points.current = [pts[pts.length - 1]];
    };

    const scheduleFlush = () => {
      if (rafId.current !== null) return;
      rafId.current = requestAnimationFrame(() => {
        rafId.current = null;
        flush();
      });
    };

    const onPointerDown = (e: PointerEvent) => {
      canvas.setPointerCapture(e.pointerId);
      pushHistory();
      drawing.current = true;
      points.current  = [{ x: e.clientX, y: e.clientY + window.scrollY }];
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!drawing.current) return;
      points.current.push({ x: e.clientX, y: e.clientY + window.scrollY });
      scheduleFlush();
    };

    const stopDrawing = () => {
      drawing.current = false;
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
      flush();
      points.current = [];
    };

    canvas.addEventListener("pointerdown",   onPointerDown);
    canvas.addEventListener("pointermove",   onPointerMove);
    canvas.addEventListener("pointerup",     stopDrawing);
    canvas.addEventListener("pointercancel", stopDrawing);

    return () => {
      drawing.current = false;
      points.current  = [];
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
      canvas.removeEventListener("pointerdown",   onPointerDown);
      canvas.removeEventListener("pointermove",   onPointerMove);
      canvas.removeEventListener("pointerup",     stopDrawing);
      canvas.removeEventListener("pointercancel", stopDrawing);
    };
  }, [canvasRef, pushHistory]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position:      "absolute",
        top:           0,
        left:          0,
        display:       "block",
        zIndex:        48,
        pointerEvents: sketchOn ? "auto" : "none",
        cursor:        sketchOn ? "crosshair" : "default",
        touchAction:   sketchOn ? "none"      : "auto",
      }}
    />
  );
}
