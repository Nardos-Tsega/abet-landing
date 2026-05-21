"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const COLS = 5;
/** Cubic ease that matches the column-wipe feel from dumemearts. */
const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

/**
 * On every page load, N dark columns wipe upward in a staggered cascade,
 * revealing the page beneath. Once fully gone they are removed from the DOM.
 */
export function PageCurtain() {
  const reduced = useReducedMotion();
  const [done, setDone] = useState(false);

  if (reduced || done) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[200] flex" aria-hidden>
      {Array.from({ length: COLS }).map((_, i) => (
        <motion.div
          key={i}
          className="flex-1 bg-[var(--hero-surface)]"
          initial={{ y: "0%" }}
          animate={{ y: "-102%" }}
          transition={{
            duration: 0.72,
            delay: 0.06 * i,
            ease: EASE,
          }}
          onAnimationComplete={
            i === COLS - 1 ? () => setDone(true) : undefined
          }
        />
      ))}
    </div>
  );
}
