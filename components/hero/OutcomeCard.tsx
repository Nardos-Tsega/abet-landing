/**
 * Overlaps bottom-right of the terminal (reference-style floating metrics card).
 */
export function OutcomeCard() {
  return (
    <div className="absolute top-[calc(100%-0.75rem)] right-[-22px] z-20 w-[min(100%,18rem)] rounded-2xl bg-[#3C4DFB] p-3.5 shadow-xl shadow-black/40 sm:top-[calc(100%-1rem)] sm:right-[-30px] sm:w-[19.5rem] sm:p-4 md:right-[-40px] md:w-[20.5rem]">
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/90 sm:text-xs sm:tracking-wide">
        Protocol SLA
      </p>
      <div
        className="mt-2 rounded-xl border border-[#3C4DFB]/15 px-4 py-3.5 sm:px-5 sm:py-4"
        style={{
          backgroundColor: "color-mix(in srgb, #3C4DFB 5.5%, #ffffff 94.5%)",
        }}
      >
        <p className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          21
        </p>
        <p className="mt-0.5 text-[11px] font-medium leading-snug text-stone-600 sm:text-sm">
          Days to sovereign Pod in your stack
        </p>
        <p className="mt-2 border-t border-[#3C4DFB]/18 pt-2 text-[10px] font-semibold uppercase tracking-wider text-stone-500">
          US-Governed · Fixed OpEx
        </p>
      </div>
    </div>
  );
}
