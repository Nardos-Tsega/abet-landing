import Image from "next/image";
import Link from "next/link";
import {
  MarketingSection,
  SectionEyebrow,
  SectionLead,
  SectionTitle,
} from "@/components/layout/MarketingSection";
import { modelWedges } from "@/lib/home-marketing";

/** Scale-style dual column (Applications / Data) before the three-pillar deep dive. */
export function ModelWedgeSplit() {
  return (
    <MarketingSection
      id="stack-wedges"
      className="bg-white/40"
      aria-labelledby="wedges-heading"
    >
      <SectionEyebrow>The stack</SectionEyebrow>
      <SectionTitle id="wedges-heading" className="max-w-[28ch] text-3xl leading-[1.06] sm:text-4xl">
        Outcomes you can deploy. Infrastructure you can govern.
      </SectionTitle>
      <SectionLead>
        Two halves of the same subscription: live engineering in your environment, and the institutional
        rails that make it safe to turn on.
      </SectionLead>

      <div className="mt-12 grid gap-4 lg:grid-cols-2 lg:gap-6">
          {modelWedges.map((w) => (
            <Link
              key={w.key}
              href={w.href}
              className="group relative flex min-h-0 flex-col overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-white/90 shadow-sm transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-stone-300/80 hover:shadow-[0_24px_70px_-30px_rgba(0,6,38,0.16)]"
            >
              <div className="relative aspect-[2.1/1] w-full shrink-0 overflow-hidden">
                <Image
                  src={w.imageSrc}
                  alt={w.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/75 to-white/20" />
              </div>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 top-[30%] opacity-60"
                style={{ background: w.panelGradient }}
              />
              <div className="relative flex flex-1 flex-col p-8 sm:p-10">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500">
                  {w.eyebrow}
                </span>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-stone-950 sm:text-[1.65rem]">
                  {w.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-600 sm:text-[0.95rem]">
                  {w.body}
                </p>
                <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-stone-900">
                  {w.cta}
                  <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
    </MarketingSection>
  );
}
