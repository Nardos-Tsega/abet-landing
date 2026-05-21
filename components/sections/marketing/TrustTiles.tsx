"use client";

import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import {
  MarketingSection,
  SectionTitle,
} from "@/components/layout/MarketingSection";
import { trustTiles } from "@/lib/home-marketing";

// ─── Per-card accent colours (match CaseStudyCarousel palette style) ──────────
const CARD_ACCENT = ["#1e3a8a", "#065f46", "#4c1d95"] as const;

// ─── Icons ────────────────────────────────────────────────────────────────────

function IPIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 7h16M4 12h10M4 17h14" strokeLinecap="round" />
      <circle cx="18" cy="7" r="2" fill="currentColor" stroke="none" className="opacity-40" />
    </svg>
  );
}

function SecurityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V7l8-4z" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HotSwapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="1.5">
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V8a4 4 0 018 0v2" strokeLinecap="round" />
    </svg>
  );
}

const ICONS = [IPIcon, SecurityIcon, HotSwapIcon] as const;

// ─── Fly-up tilts (preserved from original) ───────────────────────────────────
const TILTS = [1.8, -1.4, 1.2] as const;

// ─── Public export ────────────────────────────────────────────────────────────

export function TrustTiles() {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  return (
    <MarketingSection aria-labelledby="trust-tiles-heading">
      <SectionTitle id="trust-tiles-heading" className="max-w-[26ch] text-3xl sm:text-4xl">
        Zero Single Points of Failure.
      </SectionTitle>
      <p className="mt-4 max-w-2xl text-base text-stone-600 sm:text-lg">
        Engineered for institutional deployment.
      </p>

      <div ref={containerRef} className="mt-12 grid gap-4 md:grid-cols-3">
        {trustTiles.map((tile, i) => {
          const Icon = ICONS[i];
          const accent = CARD_ACCENT[i];

          return (
            <motion.div
              key={tile.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-[var(--border-subtle)] bg-white shadow-sm"
              initial={reduced ? false : { opacity: 0, y: 52, rotate: TILTS[i] }}
              animate={
                inView
                  ? { opacity: 1, y: 0, rotate: 0 }
                  : { opacity: 0, y: 52, rotate: TILTS[i] }
              }
              transition={{
                duration: 0.72,
                delay: i * 0.11,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Rising colour fill */}
              {!reduced && (
                <div
                  className="pointer-events-none absolute inset-0 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
                  style={{ backgroundColor: accent }}
                  aria-hidden
                />
              )}

              {/* Content */}
              <div className="relative z-10 flex min-h-[18rem] flex-1 flex-col p-7 sm:p-8">
                {/* Icon box */}
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-stone-100 p-2.5 text-stone-600 transition-all duration-500 group-hover:bg-white/20 group-hover:text-white">
                  <Icon />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-lg font-semibold tracking-tight text-stone-900 transition-colors duration-300 group-hover:text-white">
                  {tile.title}
                </h3>

                {/* Body */}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600 transition-colors duration-300 group-hover:text-white/80">
                  {tile.body}
                </p>

                {/* CTA */}
                <Link
                  href={tile.href}
                  className="mt-6 inline-flex shrink-0 items-center gap-1 self-start rounded-full bg-stone-100 px-4 py-2 text-[11px] font-semibold text-stone-800 transition-all duration-300 group-hover:bg-white/20 group-hover:text-white"
                >
                  {tile.linkLabel} <span aria-hidden>→</span>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </MarketingSection>
  );
}
