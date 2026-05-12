const TAGS = [
  "FRONTIER AI",
  "NATIVE MOBILE",
  "FINTECH & LEDGERS",
] as const;

/** Long half-row so ultra-wide viewports stay covered; second half is identical for a seamless -50% loop */
const CYCLES_PER_HALF = 10;

const halfRow = Array.from(
  { length: CYCLES_PER_HALF * TAGS.length },
  (_, i) => TAGS[i % TAGS.length],
);

export function LogoCloud() {
  return (
    <div className="w-full py-4 sm:py-8">
      <div className="relative w-full overflow-hidden">
        <div className="abet-marquee-track flex w-max items-center gap-6 sm:gap-14 md:gap-20">
          {halfRow.map((label, i) => (
            <span
              key={`a-${i}-${label}`}
              className="shrink-0 select-none text-base font-semibold tracking-[0.2em] text-stone-500 sm:text-xl md:tracking-[0.24em]"
            >
              {label}
            </span>
          ))}
          {halfRow.map((label, i) => (
            <span
              key={`b-${i}-${label}`}
              className="shrink-0 select-none text-base font-semibold tracking-[0.2em] text-stone-500 sm:text-xl md:tracking-[0.24em]"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
