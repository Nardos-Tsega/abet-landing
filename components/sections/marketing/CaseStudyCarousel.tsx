"use client";

import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import {
  MarketingSection,
  SectionEyebrow,
  SectionLead,
  SectionTitle,
} from "@/components/layout/MarketingSection";
import { caseStudies } from "@/lib/home-marketing";

const caseStudyLoop = [...caseStudies, ...caseStudies] as const;

function CaseCard({ c }: { c: (typeof caseStudies)[number] }) {
  return (
    <article className="flex w-[min(88vw,22rem)] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-white shadow-sm sm:w-[min(72vw,24rem)]">
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={c.imageSrc}
          alt={c.imageAlt}
          fill
          sizes="(max-width: 768px) 88vw, 24rem"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-stone-500">
          {c.kicker}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-stone-900 sm:text-xl">{c.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">{c.outcome}</p>
        <p
          className={`mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] ${
            c.status === "Operational" ? "text-emerald-700" : "text-stone-500"
          }`}
        >
          {c.status}
        </p>
        <Link
          href={c.href}
          className="mt-4 inline-flex text-sm font-semibold text-stone-900 after:ml-1 after:content-['→'] after:text-stone-400 hover:after:translate-x-0.5"
        >
          Learn more
        </Link>
      </div>
    </article>
  );
}

export function CaseStudyCarousel() {
  const reduced = useReducedMotion();

  return (
    <MarketingSection aria-labelledby="cases-heading" contentClassName="!pb-8 sm:!pb-10">
      <SectionEyebrow>Active Deployments</SectionEyebrow>
      <SectionTitle id="cases-heading" className="text-3xl sm:text-4xl">
        Deployed. Executing. Delivering.
      </SectionTitle>
      <SectionLead>
        Sovereign Pods actively embedded in mission-critical enterprise stacks. We prove velocity.
      </SectionLead>

      {reduced ? (
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {caseStudies.map((c) => (
            <article
              key={c.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-white shadow-sm"
            >
              <div className="relative aspect-[16/10] w-full">
                <Image src={c.imageSrc} alt={c.imageAlt} fill sizes="33vw" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-stone-500">
                  {c.kicker}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-stone-900">{c.title}</h3>
                <p className="mt-3 flex-1 text-sm text-stone-600">{c.outcome}</p>
                <Link href={c.href} className="mt-4 text-sm font-semibold text-stone-900 hover:underline">
                  Read the model
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div
          className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 pt-1 sm:-mx-8 sm:gap-5 sm:px-8 lg:-mx-12 lg:px-12 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-stone-300 [&::-webkit-scrollbar-track]:bg-stone-100"
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Case studies"
        >
          {caseStudyLoop.map((c, i) => (
            <CaseCard key={`${c.id}-${i}`} c={c} />
          ))}
        </div>
      )}
    </MarketingSection>
  );
}
