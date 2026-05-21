"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Splits the two headline lines into individual words and staggers them in on
 * mount — mirrors the "word fall-out" entrance pattern from dumemearts.
 * Each word clips upward into view so the overall h1 shape is preserved.
 */
export function HeroHeadline() {
  const reduced = useReducedMotion();

  const lineA = "Subscription Engineering Pods.".split(" ");
  const lineB = "For Frontier Tech.".split(" ");

  const word = (text: string, i: number) => (
    <span
      key={text + i}
      className="inline-block overflow-hidden align-bottom"
    >
      <motion.span
        className="inline-block"
        initial={reduced ? false : { y: "105%" }}
        animate={{ y: "0%" }}
        transition={{
          duration: 0.62,
          delay: 0.04 + i * 0.07,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {text}
      </motion.span>
    </span>
  );

  return (
    <h1 className="font-serif text-[clamp(1.45rem,4.5vw+0.5rem,2rem)] font-semibold leading-[1.06] tracking-tight text-[#f2f0e8] sm:text-3xl sm:leading-[1.08] md:text-4xl md:leading-[1.06] lg:text-5xl xl:text-6xl">
      <span className="flex flex-wrap gap-x-[0.28em]">
        {lineA.map((w, i) => word(w, i))}
      </span>
      <span className="mt-1 flex flex-wrap gap-x-[0.28em] text-stone-300">
        {lineB.map((w, i) => word(w, lineA.length + i))}
      </span>
    </h1>
  );
}
