"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Photo {
  src: string;
  alt: string;
}

const PHOTOS: Photo[] = [
  { src: "/photography/1.jpg",  alt: "Geometric architectural detail — intersecting lines and shadow" },
  { src: "/photography/4.jpg",  alt: "Architectural facade with repeating windows and structure" },
  { src: "/photography/5.jpg",  alt: "Urban pattern — rhythmic forms against open sky" },
  { src: "/photography/6.jpg",  alt: "Building exterior with geometric texture and tone" },
  { src: "/photography/7.jpg",  alt: "Structural detail framed through perspective" },
  { src: "/photography/8.jpg",  alt: "Minimal composition — form and negative space" },
  { src: "/photography/9.jpg",  alt: "Repeating architectural module in warm light" },
  { src: "/photography/10.jpg", alt: "Diagonal lines leading through a built environment" },
  { src: "/photography/11.jpg", alt: "Color and shadow on a textured surface" },
  { src: "/photography/12.jpg", alt: "Overhead perspective capturing pattern and depth" },
  { src: "/photography/13.jpg", alt: "Urban detail — material, edge, and contrast" },
  { src: "/photography/14.jpg", alt: "Layered architectural planes receding into distance" },
  { src: "/photography/15.jpg", alt: "Light falling across a structured surface" },
  { src: "/photography/16.jpg", alt: "Quiet street moment framed with intention" },
  { src: "/photography/17.jpg", alt: "Monumental form against an open sky" },
  { src: "/photography/18.jpg", alt: "Graphic silhouette — bold shape and minimal color" },
  { src: "/photography/19.jpg", alt: "Close-up texture study — surface detail and grain" },
  { src: "/photography/20.jpg", alt: "Symmetry and order in a built structure" },
  { src: "/photography/21.jpg", alt: "Color mood — hue and atmosphere in context" },
  { src: "/photography/22.jpg", alt: "Rhythm of repeated elements across a frame" },
  { src: "/photography/23.jpg", alt: "Converging lines and depth in architectural space" },
  { src: "/photography/24.jpg", alt: "Natural and built — material meeting material" },
  { src: "/photography/25.jpg", alt: "Urban composition — scale, form, and stillness" },
  { src: "/photography/26.jpg", alt: "Architectural moment — angle, edge, and light" },
  { src: "/photography/29.jpg", alt: "Pattern study — grid, repetition, and surface" },
  { src: "/photography/30.jpg", alt: "Detail shot — object and environment in frame" },
];

export function PhotoGallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + PHOTOS.length) % PHOTOS.length));
  }, []);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % PHOTOS.length));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape")      closeLightbox();
      if (e.key === "ArrowLeft")   prev();
      if (e.key === "ArrowRight")  next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, closeLightbox, prev, next]);

  // Body scroll lock
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <>
      <section
        ref={ref}
        style={{ paddingBottom: 120 }}
      >
        <div className="section-container">
          {/* Masonry columns */}
          <div
            style={{
              columns: "3 300px",
              columnGap: 12,
            }}
          >
            {PHOTOS.map((photo, i) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: Math.min(i * 0.04, 0.6),
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  breakInside: "avoid",
                  marginBottom: 12,
                  borderRadius: 10,
                  overflow: "hidden",
                  cursor: "pointer",
                  position: "relative",
                }}
                onClick={() => openLightbox(i)}
                tabIndex={0}
                role="button"
                aria-label={`Open photo: ${photo.alt}`}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(i); } }}
              >
                <div
                  style={{
                    overflow: "hidden",
                    borderRadius: 10,
                    display: "block",
                    lineHeight: 0,
                  }}
                  className="photo-item"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={900}
                    height={600}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading={i < 6 ? "eager" : "lazy"}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      transition: "transform 320ms cubic-bezier(0.22,1,0.36,1)",
                    }}
                    className="gallery-photo"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hover styles */}
      <style>{`
        .photo-item:hover .gallery-photo {
          transform: scale(1.04);
        }
        .photo-item:focus-visible {
          outline: 2px solid rgba(251,113,133,0.7);
          outline-offset: 2px;
        }
      `}</style>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={PHOTOS[lightboxIndex].alt}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.94)",
            padding: "20px",
          }}
          onClick={closeLightbox}
        >
          {/* Image container — stops propagation so clicking image doesn't close */}
          <div
            style={{
              position: "relative",
              maxWidth: "min(90vw, 1200px)",
              maxHeight: "90vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={PHOTOS[lightboxIndex].src}
              alt={PHOTOS[lightboxIndex].alt}
              width={1800}
              height={1200}
              sizes="90vw"
              priority
              style={{
                maxWidth: "min(90vw, 1200px)",
                maxHeight: "90vh",
                width: "auto",
                height: "auto",
                borderRadius: 8,
                display: "block",
              }}
            />
          </div>

          {/* Close */}
          <button
            onClick={closeLightbox}
            aria-label="Close lightbox"
            style={{
              position: "fixed",
              top: 20,
              right: 24,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 100,
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "rgba(242,237,232,0.7)",
              transition: "background 200ms ease, color 200ms ease",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.15)"; (e.currentTarget as HTMLElement).style.color = "#f2ede8"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.color = "rgba(242,237,232,0.7)"; }}
          >
            <X size={16} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous photo"
            style={{
              position: "fixed",
              left: 20,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 100,
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "rgba(242,237,232,0.7)",
              transition: "background 200ms ease, color 200ms ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.15)"; (e.currentTarget as HTMLElement).style.color = "#f2ede8"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.color = "rgba(242,237,232,0.7)"; }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next photo"
            style={{
              position: "fixed",
              right: 20,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 100,
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "rgba(242,237,232,0.7)",
              transition: "background 200ms ease, color 200ms ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.15)"; (e.currentTarget as HTMLElement).style.color = "#f2ede8"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.color = "rgba(242,237,232,0.7)"; }}
          >
            <ChevronRight size={20} />
          </button>

          {/* Counter */}
          <div
            style={{
              position: "fixed",
              bottom: 24,
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "0.75rem",
              color: "rgba(242,237,232,0.35)",
              letterSpacing: "0.08em",
              pointerEvents: "none",
            }}
          >
            {lightboxIndex + 1} / {PHOTOS.length}
          </div>
        </div>
      )}
    </>
  );
}
