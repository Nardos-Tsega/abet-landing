import Link from "next/link";
import {
  MarketingSection,
  SectionEyebrow,
  SectionTitle,
} from "@/components/layout/MarketingSection";
import { trustTiles } from "@/lib/home-marketing";

function TileIcon({ variant }: { variant: 0 | 1 | 2 }) {
  const common =
    "h-11 w-11 shrink-0 rounded-xl border border-[var(--border-subtle)] bg-white p-2.5 text-[var(--accent)] shadow-sm";
  if (variant === 0) {
    return (
      <div className={common} aria-hidden>
        <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 7h16M4 12h10M4 17h14" strokeLinecap="round" />
          <circle cx="18" cy="7" r="2" fill="currentColor" stroke="none" className="opacity-40" />
        </svg>
      </div>
    );
  }
  if (variant === 1) {
    return (
      <div className={common} aria-hidden>
        <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V7l8-4z" strokeLinejoin="round" />
          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }
  return (
    <div className={common} aria-hidden>
      <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="10" width="14" height="10" rx="2" />
        <path d="M8 10V8a4 4 0 018 0v2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export function TrustTiles() {
  return (
    <MarketingSection aria-labelledby="trust-tiles-heading">
      <SectionEyebrow>Trust &amp; Security</SectionEyebrow>
      <SectionTitle id="trust-tiles-heading" className="max-w-[26ch] text-3xl sm:text-4xl">
        Zero Single Points of Failure.
      </SectionTitle>
      <p className="mt-4 max-w-2xl text-base text-stone-600 sm:text-lg">
        Engineered for institutional deployment.
      </p>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {trustTiles.map((tile, i) => (
          <div
            key={tile.title}
            className="flex flex-col rounded-2xl border border-[var(--border-subtle)] bg-white p-7 shadow-sm sm:p-8"
          >
            <TileIcon variant={i as 0 | 1 | 2} />
            <h3 className="mt-5 text-lg font-semibold tracking-tight text-stone-900">{tile.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">{tile.body}</p>
            <Link
              href={tile.href}
              className="mt-6 inline-flex text-sm font-semibold text-stone-900 underline decoration-stone-300 underline-offset-4 hover:decoration-stone-500"
            >
              {tile.linkLabel}
            </Link>
          </div>
        ))}
      </div>
    </MarketingSection>
  );
}
