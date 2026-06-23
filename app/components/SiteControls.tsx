"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../providers/ThemeProvider";
import { useSketch } from "../providers/SketchProvider";

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      onClick={toggle}
      aria-label="Toggle color mode"
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      style={{ background: "none", border: "none", cursor: "pointer", padding: 0, lineHeight: 0, flexShrink: 0 }}
    >
      <svg width="71" height="26" viewBox="0 0 71 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x={isDark ? 35 : 0} y="0.257812" width="36" height="25" rx="12.5" fill={isDark ? "#95fbff" : "#00696c"} />
        <path
          d="M11.0938 12.7578H11.895M18.3047 5.54688V6.34809M24.7144 12.7578H25.5156M18.3047 19.1675V19.9688M13.1769 7.63003L13.7378 8.19089M23.4325 7.63003L22.8716 8.19089M22.8716 17.3247L23.4325 17.8856M13.7378 17.3247L13.1769 17.8856M15.0998 12.7578C15.0998 13.6078 15.4375 14.423 16.0385 15.024C16.6395 15.625 17.4547 15.9627 18.3047 15.9627C19.1547 15.9627 19.9698 15.625 20.5709 15.024C21.1719 14.423 21.5095 13.6078 21.5095 12.7578C21.5095 11.9078 21.1719 11.0927 20.5709 10.4916C19.9698 9.89061 19.1547 9.55295 18.3047 9.55295C17.4547 9.55295 16.6395 9.89061 16.0385 10.4916C15.4375 11.0927 15.0998 11.9078 15.0998 12.7578Z"
          stroke={isDark ? "#b0fbff" : "#005558"}
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        />
        <path
          d="M52.404 6.66217H52.7062C51.7182 7.54501 51.0832 8.73288 50.9115 10.0193C50.7398 11.3057 51.0422 12.6093 51.7662 13.7035C52.4902 14.7978 53.5901 15.6134 54.8745 16.0086C56.159 16.4039 57.5468 16.3538 58.7969 15.867C58.316 16.9797 57.5301 17.946 56.523 18.6628C55.5159 19.3797 54.3253 19.8201 53.0783 19.9372C51.8313 20.0543 50.5746 19.8437 49.4423 19.3278C48.31 18.8119 47.3446 18.0101 46.649 17.0079C45.9534 16.0057 45.5537 14.8407 45.4926 13.6372C45.4315 12.4336 45.7112 11.2367 46.302 10.1741C46.8928 9.11147 47.7724 8.223 48.847 7.60346C49.9217 6.98392 51.151 6.65654 52.404 6.65625V6.66217Z"
          stroke={isDark ? "#005558" : "#004f53"}
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        />
        <rect x="0.5" y="0.5" width="70" height="24.5156" rx="12.2578"
          stroke={isDark ? "#95fbff" : "#00696c"} strokeOpacity={isDark ? 1 : 0.65} />
      </svg>
    </button>
  );
}

function SketchUtilBtn({
  onClick, ariaLabel, label, icon, disabled,
}: {
  onClick: () => void;
  ariaLabel: string;
  label: string;
  icon: React.ReactNode;
  disabled?: boolean;
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const color      = isDark ? "#95fbff"               : "#00696c";
  const borderBase = isDark ? "rgba(149,251,255,0.30)" : "rgba(0,105,108,0.50)";
  const borderHov  = isDark ? "rgba(149,251,255,0.65)" : "rgba(0,105,108,0.75)";

  return (
    <button
      onClick={disabled ? undefined : onClick}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      style={{
        display: "inline-flex", alignItems: "center", gap: 4,
        height: 26, padding: "0 10px 0 8px", borderRadius: 13,
        border: `1px solid ${borderBase}`, background: "transparent",
        color, cursor: disabled ? "default" : "pointer",
        fontFamily: "var(--font-sans, 'Sora', sans-serif)",
        fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.07em",
        lineHeight: 1, textTransform: "uppercase",
        opacity: disabled ? 0.3 : 1, pointerEvents: disabled ? "none" : "auto",
        transition: "opacity 200ms ease, border-color 200ms ease",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => { if (!disabled) (e.currentTarget as HTMLElement).style.borderColor = borderHov; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = borderBase; }}
    >
      {icon}
      {label}
    </button>
  );
}

function SketchToggle() {
  const { sketchOn, toggleSketch } = useSketch();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [showTip, setShowTip] = useState(false);

  const activeBorder   = isDark ? "#95fbff"  : "#00696c";
  const inactiveBorder = isDark ? "#95fbff"  : "rgba(0,105,108,0.55)";
  const activeBg       = isDark ? "#95fbff"  : "#00696c";
  const activeColor    = isDark ? "#0D2A2B"  : "#ffffff";
  const inactiveColor  = isDark ? "#95fbff"  : "#00696c";

  return (
    <div style={{ position: "relative", flexShrink: 0 }}>
      <button
        onClick={toggleSketch}
        onMouseEnter={() => setShowTip(true)}
        onMouseLeave={() => setShowTip(false)}
        onFocus={() => setShowTip(true)}
        onBlur={() => setShowTip(false)}
        aria-label={sketchOn ? "Exit sketch mode" : "Enter sketch mode"}
        aria-pressed={sketchOn}
        style={{
          display: "inline-flex", alignItems: "center", gap: 5,
          height: 26, padding: "0 11px 0 9px", borderRadius: 13,
          border: `1px solid ${sketchOn ? activeBorder : inactiveBorder}`,
          background: sketchOn ? activeBg : "transparent",
          color: sketchOn ? activeColor : inactiveColor,
          cursor: "pointer",
          fontFamily: "var(--font-sans, 'Sora', sans-serif)",
          fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.07em",
          lineHeight: 1, textTransform: "uppercase",
          transition: "background 200ms ease, border-color 200ms ease, color 200ms ease",
          flexShrink: 0,
        }}
      >
        <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M12 2L14 4L5 13H3V11L12 2Z"
            stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 4L12 6"
            stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        Sketch
      </button>
      <div
        role="tooltip"
        aria-hidden={!showTip}
        style={{
          position: "absolute", top: "calc(100% + 8px)", left: "50%",
          transform: "translateX(-50%)", whiteSpace: "nowrap",
          padding: "6px 12px", borderRadius: 8,
          background: "var(--nav-bg)",
          border: "1px solid var(--card-border)",
          backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
          color: "var(--text-2)",
          fontFamily: "var(--font-sans, 'Sora', sans-serif)",
          fontSize: "0.66rem", letterSpacing: "0.015em",
          pointerEvents: "none", opacity: showTip ? 1 : 0,
          transition: "opacity 180ms ease", zIndex: 9999,
        }}
      >
        Sketch, annotate, or highlight while reading.
      </div>
    </div>
  );
}

const ClearIcon = () => (
  <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2 13h5M9.5 3L13 6.5 7 12.5H3.5l-.5-.5 6-9z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.5 8l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const UndoIcon = () => (
  <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8a5 5 0 1 1 1.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M3 4v4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const RedoIcon = () => (
  <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M13 8a5 5 0 1 0-1.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M13 4v4H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function SiteControls() {
  const { sketchOn, clearSketch, undoSketch, redoSketch, canUndo, canRedo } = useSketch();

  return (
    <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", justifyContent: "center", gap: 8 }}>
      <AnimatePresence>
        {sketchOn && (
          <motion.div
            key="sketch-utils"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex", alignItems: "center", gap: 8 }}
          >
            <SketchUtilBtn onClick={clearSketch} ariaLabel="Clear all sketches" label="Clear" icon={<ClearIcon />} />
            <SketchUtilBtn onClick={undoSketch}  ariaLabel="Undo last stroke"   label="Undo"  icon={<UndoIcon />}  disabled={!canUndo} />
            <SketchUtilBtn onClick={redoSketch}  ariaLabel="Redo last stroke"   label="Redo"  icon={<RedoIcon />}  disabled={!canRedo} />
          </motion.div>
        )}
      </AnimatePresence>
      <SketchToggle />
      <ThemeToggle />
    </div>
  );
}
