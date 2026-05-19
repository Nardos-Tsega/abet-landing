"use client";

import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

/**
 * Scale.com "90% of the world's…" full-bleed pull-quote.
 * Dark surface, centred single hero stat with descriptor lines.
 */
export function StatCallout() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  function anim(delay: number) {
    return {
      initial: reduced ? false : { opacity: 0, y: 24 },
      animate: inView ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.7, delay },
    } as const;
  }

  return (
    <div className="sticky top-0 z-10 flex w-full flex-col bg-[var(--page-canvas)] px-3 pb-[max(0.5rem,env(safe-area-inset-bottom,0px))] pt-2 pl-[max(0.75rem,env(safe-area-inset-left,0px))] pr-[max(0.75rem,env(safe-area-inset-right,0px))] sm:px-5 sm:pb-5 sm:pt-4 sm:pl-5 sm:pr-5 md:px-7 lg:px-10 lg:pb-6">
      <section className="mx-auto w-full max-w-[min(100%,88rem)] relative overflow-hidden rounded-xl shadow-[0_24px_80px_-12px_rgba(0,6,38,0.45)] sm:rounded-[2rem] md:rounded-[2.75rem] lg:rounded-[3rem] abet-surface-dark border border-[var(--border-on-dark)]">
        <div
          ref={ref}
          className="abet-section-content mx-auto flex w-full max-w-[72rem] flex-col items-center px-5 py-24 text-center sm:px-8 sm:py-32 lg:px-12 lg:py-40"
        >
        <motion.p
          {...anim(0)}
          className="text-[11px] font-semibold uppercase tracking-[0.26em] text-stone-400"
        >
          The 21-Day Provisioning Protocol
        </motion.p>

        {/* Giant stat */}
        <motion.div
          {...anim(0.1)}
          className="mt-6 flex items-start justify-center"
        >
          <span className="text-[clamp(5rem,18vw,11rem)] font-semibold leading-none tabular-nums tracking-[-0.04em] text-white">
            21
          </span>
          <span className="ml-2 mt-[0.12em] text-[clamp(1.4rem,4vw,2.6rem)] font-semibold text-[var(--accent-mid)]">
            days
          </span>
        </motion.div>

        {/* Descriptor — Scale "90% of the world's…" style */}
        <motion.p
          {...anim(0.22)}
          className="mt-6 max-w-[30ch] text-[clamp(1.25rem,3.2vw,2rem)] font-medium leading-[1.2] tracking-tight text-stone-200"
        >
          from contract signature to sovereign code in three weeks.
        </motion.p>

        <motion.p
          {...anim(0.32)}
          className="mt-6 max-w-xl text-base text-stone-400 sm:text-lg"
        >
          The 90-day hiring wall is your competitor&apos;s advantage. Abet&apos;s provisioning
          protocol—calibration, security provisioning, sovereign integration—runs on a clock you
          can plan around, not a hiring funnel.
        </motion.p>

        <motion.div
          {...anim(0.42)}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/#protocol"
            className="abet-accent-cta inline-flex h-11 items-center rounded-full px-6 text-sm font-semibold"
          >
            View the 21-Day Protocol
          </Link>
          <Link
            href="/the-paas-model"
            className="inline-flex h-11 items-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/[0.06]"
          >
            See the PaaS model
          </Link>
        </motion.div>

        {/* Supporting micro-stats */}
        <motion.div
          {...anim(0.5)}
          className="mt-14 flex flex-wrap justify-center gap-x-10 gap-y-4 border-t border-white/10 pt-10"
        >
          {[
            { value: "3", label: "engineers per Pod" },
            { value: "50%+", label: "US hours overlap" },
            { value: "UAE", label: "governed MSAs" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-semibold text-white sm:text-3xl">{s.value}</span>
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-stone-500">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
        </div>
      </section>
    </div>
  );
}
