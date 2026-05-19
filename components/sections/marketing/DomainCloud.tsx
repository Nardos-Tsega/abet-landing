"use client";

import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { domainCorridorItems } from "@/lib/home-marketing";
import { SectionEyebrow } from "@/components/layout/MarketingSection";

/**
 * Scale.com industry keyword cloud — typography-only, no images.
 * Large display keywords in a flowing flex-wrap layout.
 * Light background; each keyword links down to the corridor.
 */
export function DomainCloud() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section
      className="relative z-10 bg-[var(--page-canvas)]"
      aria-labelledby="domain-cloud-heading"
    >
      <div className="abet-section-content mx-auto max-w-[min(100%,88rem)] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <SectionEyebrow>Where we deploy</SectionEyebrow>
        <p
          id="domain-cloud-heading"
          className="mt-4 max-w-[22ch] text-3xl font-semibold tracking-[-0.03em] text-stone-950 sm:text-4xl"
        >
          Three Environments. One Standard.
        </p>

        {/* Keyword grid */}
        <div
          ref={ref}
          className="mt-14 flex flex-wrap items-baseline gap-x-[0.55em] gap-y-3"
        >
          {domainCorridorItems.map((domain, i) => (
            <motion.div
              key={domain.key}
              initial={reduced ? false : { opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                ease: "easeOut",
                delay: i * 0.06,
              }}
            >
              <Link
                href="#domains"
                className="group inline-flex items-baseline gap-3"
                aria-label={domain.title}
              >
                <span
                  className="text-[clamp(1.8rem,4.5vw,3.5rem)] font-semibold leading-none tracking-[-0.025em] text-stone-950 transition-colors duration-200 group-hover:text-[var(--accent)]"
                >
                  {domain.title}
                </span>
                {/* Subtle dot separator — hidden on last item */}
                {i < domainCorridorItems.length - 1 && (
                  <span
                    className="text-[clamp(0.9rem,2vw,1.5rem)] text-stone-300 select-none"
                    aria-hidden
                  >
                    ·
                  </span>
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Sub-tagline */}
        <p className="mt-12 max-w-2xl text-base text-stone-500 sm:text-lg">
          We don&apos;t build generic apps. We don&apos;t do basic QA. Each environment is a dedicated talent
          architecture—not a generalist bench.
        </p>
        <Link
          href="#domains"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-stone-900 after:content-['↓'] after:text-stone-400"
        >
          Explore deployments
        </Link>
      </div>
    </section>
  );
}
