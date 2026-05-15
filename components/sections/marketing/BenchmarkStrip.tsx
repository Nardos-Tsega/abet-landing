import Image from "next/image";
import Link from "next/link";
import {
  MarketingSection,
  SectionEyebrow,
  SectionLead,
  SectionTitle,
} from "@/components/layout/MarketingSection";
import { benchmarkCards } from "@/lib/home-marketing";

/** Scale “Proven / three benchmarks” row with imagery and depth links. */
export function BenchmarkStrip() {
  return (
    <MarketingSection tone="dark" aria-labelledby="benchmark-heading">
      <SectionEyebrow onDark>Proven in production</SectionEyebrow>
      <SectionTitle
        id="benchmark-heading"
        onDark
        className="max-w-[26ch] text-3xl leading-[1.06] sm:text-4xl"
      >
        We set the bar for sovereign engineering capacity.
      </SectionTitle>
      <SectionLead onDark>
        Three decisions every CTO makes: how fast capacity arrives, how it scales, and how it stays inside
        your governance model.
      </SectionLead>

      <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-5">
        {benchmarkCards.map((card) => (
          <Link
            key={card.key}
            href={card.href}
            className="group relative flex min-h-[20rem] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-[border-color,transform] hover:-translate-y-0.5 hover:border-white/20"
          >
            <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden">
              <Image
                src={card.imageSrc}
                alt={card.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover opacity-90 transition-opacity group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-transparent" />
            </div>
            <div className="relative flex flex-1 flex-col p-6 sm:p-7">
              <h3 className="text-lg font-semibold leading-snug tracking-tight text-white sm:text-xl">
                {card.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-400">{card.body}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                {card.linkLabel}
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
