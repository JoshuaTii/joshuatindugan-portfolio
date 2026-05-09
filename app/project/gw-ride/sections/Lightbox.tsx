"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type LightboxProps = {
  src: string | null;
  alt: string;
  onClose: () => void;
};

export function Lightbox({ src, alt, onClose }: LightboxProps) {
  useEffect(() => {
    if (!src) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [src, onClose]);

  useEffect(() => {
    if (!src) document.body.style.overflow = "";
  }, [src]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <motion.button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            aria-label="Close image preview"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 24,
              right: 24,
              zIndex: 10000,
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
              <path d="M1 1L13 13M13 1L1 13" />
            </svg>
          </motion.button>
          <motion.img
            key={src}
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: 16,
              boxShadow: "0 40px 80px rgba(0,0,0,0.8)",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
