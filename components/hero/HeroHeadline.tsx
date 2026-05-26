"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Single accessible H1 — one string, CSS controls wrapping.
 * Subtle fade-in only; no per-word splitting that breaks screen readers.
 */
export function HeroHeadline() {
  const reduced = useReducedMotion();

  return (
    <motion.h1
      className="max-w-[18ch] font-serif text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[1.06] tracking-tight text-[#f2f0e8]"
      initial={reduced ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      Subscription Engineering Pods For Frontier Tech.
    </motion.h1>
  );
}
