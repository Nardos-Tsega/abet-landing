"use client";

import { useState } from "react";
import { useReducedMotion } from "framer-motion";

const TAGS = [
  "FRONTIER AI",
  "NATIVE MOBILE",
  "FINTECH & LEDGERS",
] as const;

const CYCLES_PER_HALF = 10;

const halfRow = Array.from(
  { length: CYCLES_PER_HALF * TAGS.length },
  (_, i) => TAGS[i % TAGS.length],
);

export function LogoCloud() {
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);

  return (
    <div className="w-full py-4 sm:py-8">
      <div
        className={`relative w-full overflow-hidden ${paused ? "abet-marquee-paused" : ""}`}
        role="region"
        aria-label="Deployment environments"
      >
        <div
          className={`abet-marquee-track flex w-max items-center gap-6 sm:gap-14 md:gap-20 ${reduced ? "!transform-none" : ""}`}
        >
          {halfRow.map((label, i) => (
            <span
              key={`a-${i}-${label}`}
              className="shrink-0 select-none text-base font-semibold tracking-[0.2em] text-stone-400 sm:text-xl md:tracking-[0.24em]"
            >
              {label}
            </span>
          ))}
          {halfRow.map((label, i) => (
            <span
              key={`b-${i}-${label}`}
              className="shrink-0 select-none text-base font-semibold tracking-[0.2em] text-stone-400 sm:text-xl md:tracking-[0.24em]"
              aria-hidden
            >
              {label}
            </span>
          ))}
        </div>

        {!reduced && (
          <button
            type="button"
            onClick={() => setPaused((value) => !value)}
            className="abet-touch-target absolute right-0 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-stone-300 backdrop-blur-sm hover:text-white"
            aria-pressed={paused}
          >
            {paused ? "Play" : "Pause"}
          </button>
        )}
      </div>
    </div>
  );
}
