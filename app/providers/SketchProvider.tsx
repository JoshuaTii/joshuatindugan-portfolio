"use client";
import { createContext, useCallback, useContext, useRef, useState } from "react";

const MAX_HISTORY = 20;

interface SketchCtx {
  sketchOn:      boolean;
  canUndo:       boolean;
  canRedo:       boolean;
  toggleSketch:  () => void;
  clearSketch:   () => void;
  pushHistory:   () => void;
  undoSketch:    () => void;
  redoSketch:    () => void;
  canvasRef:     React.MutableRefObject<HTMLCanvasElement | null>;
}

const Ctx = createContext<SketchCtx>({
  sketchOn:     false,
  canUndo:      false,
  canRedo:      false,
  toggleSketch: () => {},
  clearSketch:  () => {},
  pushHistory:  () => {},
  undoSketch:   () => {},
  redoSketch:   () => {},
  canvasRef:    { current: null },
});

export function SketchProvider({ children }: { children: React.ReactNode }) {
  const [sketchOn, setSketchOn] = useState(false);
  const [canUndo,  setCanUndo]  = useState(false);
  const [canRedo,  setCanRedo]  = useState(false);

  const canvasRef  = useRef<HTMLCanvasElement | null>(null);
  const historyRef = useRef<ImageData[]>([]);
  const redoRef    = useRef<ImageData[]>([]);

  const toggleSketch = () => setSketchOn((v) => !v);

  // Call before each stroke begins - saves current canvas state so it can be undone
  const pushHistory = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (historyRef.current.length >= MAX_HISTORY) historyRef.current.shift();
    historyRef.current.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    redoRef.current = [];
    setCanUndo(true);
    setCanRedo(false);
  }, []);

  const undoSketch = useCallback(() => {
    if (historyRef.current.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    redoRef.current.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    ctx.putImageData(historyRef.current.pop()!, 0, 0);
    setCanUndo(historyRef.current.length > 0);
    setCanRedo(true);
  }, []);

  const redoSketch = useCallback(() => {
    if (redoRef.current.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    historyRef.current.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    ctx.putImageData(redoRef.current.pop()!, 0, 0);
    setCanUndo(true);
    setCanRedo(redoRef.current.length > 0);
  }, []);

  // Saves current state before clearing so clear is itself undoable
  const clearSketch = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    pushHistory();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, [pushHistory]);

  return (
    <Ctx.Provider value={{ sketchOn, canUndo, canRedo, toggleSketch, clearSketch, pushHistory, undoSketch, redoSketch, canvasRef }}>
      {children}
    </Ctx.Provider>
  );
}

export const useSketch = () => useContext(Ctx);
