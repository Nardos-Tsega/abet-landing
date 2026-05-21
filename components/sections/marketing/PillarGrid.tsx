import Link from "next/link";
import {
  MarketingSection,
  SectionEyebrow,
  SectionLead,
  SectionTitle,
} from "@/components/layout/MarketingSection";
import { pillarCards } from "@/lib/home-marketing";

export function PillarGrid() {
  return (
    <MarketingSection id="pillars" tone="dark" aria-labelledby="pillars-heading">
      <SectionEyebrow onDark>What we offer</SectionEyebrow>
      <SectionTitle id="pillars-heading" className="max-w-[24ch] text-3xl leading-[1.08] sm:text-4xl" onDark>
        Three pillars. One operating system.
      </SectionTitle>
      <SectionLead onDark>
        Go deep on the model, the execution edge, or the security perimeter, each pillar maps to how Abet
        provisions Pods in production.
      </SectionLead>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {pillarCards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group relative flex min-h-[17rem] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[var(--hero-surface-elevated)]/80 p-8 transition-[border-color,transform] hover:-translate-y-0.5 hover:border-white/20 sm:min-h-[18rem] sm:p-9"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-80"
              style={{ background: card.panelGradient }}
            />
            <div className="relative flex flex-1 flex-col">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400">
                {card.eyebrow}
              </span>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-[1.35rem]">
                {card.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-400 sm:text-[0.95rem]">
                {card.description}
              </p>
              <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-white/90">
                Learn more
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
