"use client";

import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import {
  MarketingSection,
  SectionLead,
  SectionTitle,
} from "@/components/layout/MarketingSection";
import { caseStudies } from "@/lib/home-marketing";

// ─── Per-card accent colours (rise-fill on hover) ────────────────────────────
const CARD_ACCENT = ["#6b48a0", "#8a6a3a"] as const;

// ─── Icons ────────────────────────────────────────────────────────────────────

function TrendIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M2 14l5-5 3 3 6-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 5h3v3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExpandIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <rect x="2" y="10" width="4" height="8" rx="1" fill="currentColor" opacity="0.4" />
      <rect x="8" y="6" width="4" height="12" rx="1" fill="currentColor" opacity="0.7" />
      <rect x="14" y="2" width="4" height="16" rx="1" fill="currentColor" />
    </svg>
  );
}

const ICONS = [TrendIcon, ExpandIcon] as const;

// ─── Single card ──────────────────────────────────────────────────────────────

type CaseItem = (typeof caseStudies)[number];

function CaseCard({
  c,
  color,
  Icon,
  reduced,
}: {
  c: CaseItem;
  color: string;
  Icon: () => React.JSX.Element;
  reduced: boolean | null;
}) {
  return (
    <article className="group relative flex w-[min(88vw,22rem)] shrink-0 flex-col overflow-hidden rounded-3xl border border-[var(--border-subtle)] bg-white shadow-sm">
      {/* ── Rising colour fill (disabled for reduced-motion) ── */}
      {!reduced && (
        <div
          className="pointer-events-none absolute inset-0 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
          style={{ backgroundColor: color }}
          aria-hidden
        />
      )}

      {/* ── Content ── */}
      <div className="relative z-10 flex min-h-[22rem] flex-1 flex-col p-7 sm:p-8">
        {/* Icon box */}
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-stone-100 text-stone-600 transition-all duration-500 group-hover:bg-white/20 group-hover:text-white">
          <Icon />
        </div>

        {/* Kicker */}
        <p className="mt-8 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-stone-500 transition-colors duration-300 group-hover:text-white/60">
          {c.kicker}
        </p>

        {/* Title */}
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-stone-900 transition-colors duration-300 group-hover:text-white sm:text-2xl">
          {c.title}
        </h3>

        {/* Outcome */}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600 transition-colors duration-300 group-hover:text-white/80">
          {c.outcome}
        </p>

        {/* Status + CTA */}
        <div className="mt-6 flex items-center justify-between gap-3">
          <p
            className={`text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 group-hover:text-white/80 ${
              c.status === "Operational" ? "text-emerald-700" : "text-stone-500"
            }`}
          >
            ● {c.status}
          </p>
          <Link
            href={c.href}
            className="abet-touch-target inline-flex shrink-0 items-center gap-1 rounded-full bg-stone-100 px-4 py-3 text-[11px] font-semibold text-stone-800 transition-all duration-300 group-hover:bg-white/20 group-hover:text-white"
          >
            Learn more
            <span className="sr-only"> about {c.title}</span>
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

// ─── Public export ────────────────────────────────────────────────────────────

export function CaseStudyCarousel() {
  const reduced = useReducedMotion();

  return (
    <MarketingSection aria-labelledby="cases-heading" contentClassName="!pb-8 sm:!pb-10">
      <SectionTitle id="cases-heading" className="text-3xl sm:text-4xl">
        Deployed. Executing. Delivering.
      </SectionTitle>
      <SectionLead>
        Sovereign Pods actively embedded in mission-critical enterprise stacks. We prove velocity.
      </SectionLead>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5 lg:gap-6">
        {caseStudies.map((c, i) => (
          <CaseCard
            key={c.id}
            c={c}
            color={CARD_ACCENT[i]}
            Icon={ICONS[i]}
            reduced={reduced}
          />
        ))}
      </div>
    </MarketingSection>
  );
}
