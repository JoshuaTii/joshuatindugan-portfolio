"use client";
import { useState, useEffect, useCallback, CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ClickableImageProps {
  src: string;
  alt: string;
  style?: CSSProperties;
  className?: string;
  wrapperStyle?: CSSProperties;
  wrapperClassName?: string;
  loading?: "lazy" | "eager";
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function ClickableImage({
  src,
  alt,
  style,
  className,
  wrapperStyle,
  wrapperClassName,
  loading = "lazy",
}: ClickableImageProps) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => {
    setOpen(false);
    document.body.style.overflow = "";
  }, []);

  const openLightbox = useCallback(() => {
    setOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, close]);

  // Clean up overflow on unmount
  useEffect(() => () => { document.body.style.overflow = ""; }, []);

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        aria-label={`View full screen: ${alt}`}
        onClick={openLightbox}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openLightbox();
          }
        }}
        style={{
          cursor: "zoom-in",
          position: "relative",
          display: "block",
          ...wrapperStyle,
        }}
        className={wrapperClassName}
      >
        <img
          src={src}
          alt={alt}
          style={style}
          className={className}
          loading={loading}
        />
        {/* Subtle hover overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            background: "rgba(0,0,0,0)",
            transition: "background 200ms ease",
            pointerEvents: "none",
          }}
          className="clickable-image-overlay"
        />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Full screen: ${alt}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={close}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              background: "rgba(0,0,0,0.88)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
            }}
          >
            {/* Close button */}
            <motion.button
              onClick={(e) => { e.stopPropagation(); close(); }}
              aria-label="Close"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              style={{
                position: "fixed",
                top: 20,
                right: 20,
                zIndex: 10000,
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.18)",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(8px)",
                transition: "background 200ms ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.18)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </motion.button>

            {/* Image */}
            <motion.img
              key={src}
              src={src}
              alt={alt}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.28, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "92vw",
                maxHeight: "92vh",
                width: "auto",
                height: "auto",
                objectFit: "contain",
                borderRadius: 16,
                display: "block",
                boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover effect CSS */}
      <style>{`
        [role="button"]:hover .clickable-image-overlay {
          background: rgba(0,0,0,0.08) !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .clickable-image-overlay { transition: none !important; }
        }
      `}</style>
    </>
  );
}
