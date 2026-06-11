"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ClickableImageProps {
  src: string;
  alt: string;
  style?: React.CSSProperties;
  className?: string;
  wrapperStyle?: React.CSSProperties;
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
  const triggerRef = useRef<HTMLButtonElement>(null);

  const openLightbox = useCallback(() => setOpen(true), []);
  const closeLightbox = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, closeLightbox]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-label={`Expand: ${alt}`}
        className={`ci-trigger${wrapperClassName ? ` ${wrapperClassName}` : ""}`}
        style={wrapperStyle}
        onClick={openLightbox}
      >
        <img
          src={src}
          alt={alt}
          className={`ci-img${className ? ` ${className}` : ""}`}
          style={style}
          loading={loading}
          decoding="async"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Expanded: ${alt}`}
            onClick={closeLightbox}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 200,
              backgroundColor: "rgba(0,0,0,0.9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
              cursor: "zoom-out",
            }}
          >
            <motion.img
              src={src}
              alt={alt}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.28, ease: EASE }}
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                objectFit: "contain",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
