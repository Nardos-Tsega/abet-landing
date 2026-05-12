/** Tablet: block under terminal (`mt-5` = `md:gap-5`). lg+: absolute overlap. */
export function OutcomeCard() {
  return (
    <div
      className="relative z-20 mx-auto mt-5 w-[min(calc(100%-1rem),20rem)] max-w-full rounded-2xl bg-[#3C4DFB] p-3 shadow-xl shadow-black/40 sm:p-3.5 lg:absolute lg:left-auto lg:right-[-30px] lg:top-[calc(100%-1rem)] lg:mx-0 lg:mt-0 lg:w-[20.5rem] lg:max-w-none lg:translate-x-0 lg:p-4 xl:right-[-40px]"
    >
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
