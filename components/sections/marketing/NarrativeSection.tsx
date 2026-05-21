"use client";

import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { AnimatedHeadline } from "@/components/shared/AnimatedHeadline";
import { narrativeSections } from "@/lib/home-marketing";

type NarrativeItem = (typeof narrativeSections)[number];

function NarrativeSectionItem({ item }: { item: NarrativeItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });

  const isDark = item.tone === "dark";

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const content = (
    <>
      {/* Left: headline */}
      <div>
          <AnimatedHeadline
            as="h2"
            delay={0.05}
            className={`mt-5 text-[clamp(2.4rem,5.5vw,4.5rem)] font-semibold leading-[1.04] tracking-[-0.03em] ${
              isDark ? "text-white" : "text-stone-950"
            }`}
          >
            {item.headline}
          </AnimatedHeadline>

          {/* Stat bubble */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
            className={`mt-10 inline-flex items-baseline gap-2 rounded-full border px-5 py-2.5 ${
              isDark
                ? "border-white/12 bg-white/[0.05] text-white"
                : "border-[var(--border-subtle)] bg-white/60 text-stone-900"
            }`}
          >
            <span className="text-2xl font-semibold tabular-nums sm:text-3xl">
              {item.stat.value}
            </span>
            <span
              className={`text-sm font-medium ${isDark ? "text-stone-300" : "text-stone-600"}`}
            >
              {item.stat.unit} {item.stat.label}
            </span>
          </motion.div>
        </div>

        {/* Right: sublines + body + CTA */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-3"
          >
            {item.sublines.map((line, i) => (
              <p
                key={i}
                className={`text-lg font-medium leading-snug sm:text-xl ${
                  isDark ? "text-stone-200" : "text-stone-800"
                }`}
              >
                {line}
              </p>
            ))}
          </motion.div>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className={`text-base leading-relaxed sm:text-lg ${
              isDark ? "text-stone-400" : "text-stone-600"
            }`}
          >
            {item.body}
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          >
            <Link
              href={item.cta.href}
              className={`inline-flex items-center gap-2 text-sm font-semibold after:content-['→'] after:transition-transform hover:after:translate-x-0.5 ${
                isDark ? "text-white" : "text-stone-900"
              }`}
            >
              {item.cta.label}
            </Link>
          </motion.div>
      </div>
    </>
  );

  if (!isDark) {
    return (
      <section
        className="relative z-10 bg-[var(--page-canvas)]"
        aria-label={item.headline}
      >
        <div
          ref={ref}
          className="abet-section-content mx-auto grid max-w-[min(100%,88rem)] gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:items-end lg:gap-20 lg:px-12 lg:py-36"
        >
          {content}
        </div>
      </section>
    );
  }

  return (
    <div className="sticky top-0 z-10 flex min-h-[100svh] w-full flex-col bg-[var(--page-canvas)] px-2 pb-[max(0.5rem,env(safe-area-inset-bottom,0px))] pt-2 pl-[max(0.5rem,env(safe-area-inset-left,0px))] pr-[max(0.5rem,env(safe-area-inset-right,0px))] sm:pb-3 lg:pb-5">
      <section
        className="mx-auto w-full max-w-[min(100%,88rem)] relative overflow-hidden rounded-3xl shadow-[0_24px_80px_-12px_rgba(0,6,38,0.45)] abet-surface-dark border border-[var(--border-on-dark)]"
        aria-label={item.headline}
      >
        <div
          ref={ref}
          className="abet-section-content mx-auto grid w-full gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:items-end lg:gap-20 lg:px-12 lg:py-36"
        >
          {content}
        </div>
      </section>
    </div>
  );
}

/** Renders a slice of narrative sections. Defaults to all. */
export function NarrativeSections({ from = 0, to }: { from?: number; to?: number }) {
  const items = narrativeSections.slice(from, to);
  return (
    <>
      {items.map((item) => (
        <NarrativeSectionItem key={item.key} item={item} />
      ))}
    </>
  );
}
