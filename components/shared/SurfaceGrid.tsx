"use client";

import { motion, type MotionValue } from "framer-motion";
import { surfaceGridBackgroundStyle } from "@/lib/surface-grid";

type SurfaceGridProps = {
  className?: string;
  /** Override default inset-0 (e.g. inset-[-15%] for parallax bleed) */
  insetClassName?: string;
  /** Optional scroll-linked vertical drift (pod parallax) */
  driftY?: MotionValue<string>;
};

/** Hero-style square grid overlay — 72px cells, masked vignette. */
export function SurfaceGrid({
  className = "",
  insetClassName = "inset-0",
  driftY,
}: SurfaceGridProps) {
  const gridStyle = surfaceGridBackgroundStyle();
  const base = `pointer-events-none absolute z-[1] ${insetClassName} ${className}`.trim();

  if (driftY) {
    return (
      <motion.div
        aria-hidden
        className={base}
        style={{ ...gridStyle, y: driftY }}
      />
    );
  }

  return (
    <div
      aria-hidden
      className={base}
      style={gridStyle}
    />
  );
}
