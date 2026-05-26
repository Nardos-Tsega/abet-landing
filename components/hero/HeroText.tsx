import Link from "next/link";
import { HeroHeadline } from "./HeroHeadline";
import { CONTACT_HREF } from "@/lib/site-config";

const metrics = [
  "Near Zero Churn",
  "Fixed Monthly OpEx",
] as const;

export function HeroText() {
  return (
    <div className="flex flex-col justify-center gap-5 font-sans sm:gap-8">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs text-stone-400 sm:gap-2 sm:text-sm">
        <span className="font-medium text-stone-200">Subscription Engineering Pods · Frontier Tech</span>
        <span className="text-stone-600">·</span>
        <Link
          href="#pods"
          className="font-medium text-stone-200 underline decoration-stone-500 underline-offset-4 transition-colors hover:text-white hover:decoration-stone-300"
        >
          How Pods deploy
        </Link>
      </div>

      <div className="space-y-4 sm:space-y-5">
        <HeroHeadline />
        <p className="max-w-xl text-sm leading-relaxed text-stone-400 sm:text-base sm:leading-relaxed lg:text-lg">
          The 90-day hiring wall is your competitor&apos;s advantage. We
          provision a fully sovereign, 3-person engineering Pod into your stack
          in 21 days. Same cost as one local senior hire.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:gap-5">
        <Link
          href={CONTACT_HREF}
          className="abet-accent-cta inline-flex h-12 w-full max-w-md items-center justify-center rounded-full px-5 text-sm font-semibold sm:h-14 sm:w-fit sm:px-8 sm:text-base"
        >
          <span className="sm:hidden">Get a Pod</span>
          <span className="hidden sm:inline">Start the 21-Day Clock</span>
        </Link>

        <p className="max-w-xl text-xs leading-relaxed text-stone-500 sm:text-sm">
          UAE-governed contracts with US-standard IP assignment.{" "}
          <Link href="/security-ip#legal" className="font-medium text-stone-300 underline underline-offset-4 hover:text-white">
            Why this protects you →
          </Link>
        </p>

        <div
          className="flex max-w-xl flex-wrap items-center gap-x-1 gap-y-1.5 border-t border-white/10 pt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-500 sm:gap-x-0.5 sm:gap-y-2 sm:pt-5 sm:text-xs sm:tracking-[0.2em]"
          aria-label="Key metrics"
        >
          {metrics.map((label, i) => (
            <span key={label} className="inline-flex items-center gap-x-1.5 sm:gap-x-1">
              {i > 0 && (
                <span className="text-stone-600" aria-hidden>
                  .
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
