import Image from "next/image";
import Link from "next/link";
import { BRAND_LOGO_SRC } from "@/lib/brand";

const metrics = [
  "Near Zero Churn",
  "US-Governed Contracts",
  "Fixed Monthly OpEx",
] as const;

export function HeroText() {
  return (
    <div className="flex flex-col justify-center gap-8 font-sans">
      <div className="flex flex-wrap items-center gap-2 text-sm text-stone-400">
        <span className="relative h-8 w-[5.5rem] shrink-0 sm:w-24">
          <Image
            src={BRAND_LOGO_SRC}
            alt="Abet"
            fill
            className="object-contain object-left opacity-95"
            sizes="96px"
          />
        </span>
        <span className="font-medium text-stone-200">21-Day Protocol</span>
        <span className="text-stone-600">·</span>
        <Link
          href="#pods"
          className="font-medium text-stone-200 underline decoration-stone-500 underline-offset-4 transition-colors hover:text-white hover:decoration-stone-300"
        >
          How Pods deploy
        </Link>
      </div>

      <div className="space-y-5">
        <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-[#f2f0e8] sm:text-5xl lg:text-[2.75rem] xl:text-6xl">
          <span className="block">Subscription Engineering Pods.</span>
          <span className="mt-1 block text-stone-300">For Frontier Tech.</span>
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-stone-400 sm:text-lg">
          The 90-day hiring wall is your competitor&apos;s advantage. We
          provision a fully sovereign, 3-person engineering Pod into your stack
          in 21 days. Same cost as one local senior hire.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <Link
          href="#protocol"
          className="inline-flex h-14 w-fit items-center justify-center rounded-full bg-[#3C4DFB] px-8 text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#3039c4]"
        >
          Initiate the 21-Day Protocol
        </Link>

        <div
          className="flex max-w-xl flex-wrap items-center gap-x-2 gap-y-2 border-t border-white/10 pt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500 sm:gap-x-3 sm:text-xs sm:tracking-[0.2em]"
          aria-label="Key metrics"
        >
          {metrics.map((label, i) => (
            <span key={label} className="inline-flex items-center gap-x-2 sm:gap-x-3">
              {i > 0 && (
                <span className="text-stone-600" aria-hidden>
                  |
                </span>
              )}
              <span className="text-stone-400">{label}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
