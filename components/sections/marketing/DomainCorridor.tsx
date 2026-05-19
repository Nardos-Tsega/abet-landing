"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionEyebrow, SectionLead, SectionTitle } from "@/components/layout/MarketingSection";
import { domainCorridorItems } from "@/lib/home-marketing";

const domainLoop = [...domainCorridorItems, ...domainCorridorItems];

export function DomainCorridor() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const glowOpacity = useTransform(scrollYProgress, [0.15, 0.45, 0.85], [0.25, 0.5, 0.25]);

  return (
    <div ref={ref} className="relative z-10 min-h-[110vh] w-full border-b border-[var(--border-on-dark)] abet-surface-dark-alt">
      <div className="abet-surface-dark-alt sticky top-0 flex min-h-svh w-full flex-col justify-center overflow-hidden">
        {!reduced && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{
              opacity: glowOpacity,
              background:
                "radial-gradient(ellipse 75% 55% at 28% 35%, var(--accent-glow-soft), transparent 65%)",
            }}
          />
        )}

        <div className="abet-section-content relative z-10 mx-auto w-full max-w-[min(100%,88rem)] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
          <SectionEyebrow onDark>Where we deploy</SectionEyebrow>
          <SectionTitle
            onDark
            className="max-w-[20ch] text-3xl leading-[1.06] sm:text-4xl lg:text-[2.5rem]"
          >
            Three Environments. One Standard.
          </SectionTitle>
          <SectionLead onDark className="max-w-xl">
            Select the environment that maps to your roadmap. Each is a dedicated talent architecture—not a generalist bench.
          </SectionLead>
          <p className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
            <span className="inline-block h-px w-8 bg-white/25" aria-hidden />
            Scroll to explore
          </p>

          <div
            className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:mt-12 sm:gap-5 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-track]:bg-white/5"
            tabIndex={0}
            role="region"
            aria-label="Deployment domains"
          >
            {domainLoop.map((d, i) => (
              <article
                key={`${d.key}-${i}`}
                className="group w-[min(88vw,19rem)] shrink-0 snap-center overflow-hidden rounded-2xl border border-white/10 bg-[var(--hero-surface-elevated)]/50 transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--hero-surface-elevated)]/80 sm:w-[min(72vw,20rem)]"
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden">
                  <Image
                    src={d.imageSrc}
                    alt={d.imageAlt}
                    fill
                    sizes="(max-width: 640px) 88vw, 20rem"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={i < 2}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[var(--hero-surface)] via-[var(--hero-surface)]/60 to-transparent"
                    aria-hidden
                  />
                  <h3 className="absolute inset-x-0 bottom-0 p-5 text-lg font-semibold tracking-tight text-white sm:text-xl">
                    {d.title}
                  </h3>
                </div>
                <div className="border-t border-white/10 p-5 sm:p-6">
                  <p className="text-sm leading-relaxed text-stone-400">{d.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
