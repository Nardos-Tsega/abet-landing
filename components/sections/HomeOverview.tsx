import Link from "next/link";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SectionEyebrow } from "@/components/layout/MarketingSection";
import { AnimatedHeadline } from "@/components/shared/AnimatedHeadline";
import { NarrativeSections } from "@/components/sections/marketing/NarrativeSection";
import { StatCallout } from "@/components/sections/marketing/StatCallout";
import { DomainCloud } from "@/components/sections/marketing/DomainCloud";
import { CaseStudyCarousel } from "@/components/sections/marketing/CaseStudyCarousel";
import { BenchmarkStrip } from "@/components/sections/marketing/BenchmarkStrip";
import { EditorialHighlights } from "@/components/sections/marketing/EditorialHighlights";
import { DomainCorridor } from "@/components/sections/marketing/DomainCorridor";
import { TrustTiles } from "@/components/sections/marketing/TrustTiles";

const protocolSteps = [
  {
    step: "01",
    title: "Week 1 — Calibration",
    body: "Map your stack, match your Pod, run the final technical alignment session.",
  },
  {
    step: "02",
    title: "Week 2 — Security Provisioning",
    body: "Pod locked. Encrypted hardware provisioned. MDM integrated. Zero-trust environment established.",
  },
  {
    step: "03",
    title: "Week 3 — Sovereign Integration",
    body: "Pod is live in Jira and Slack, assumes sprint capacity, and pushes the first PR to your main branch.",
  },
] as const;

export function HomeOverview() {
  return (
    <div className="w-full bg-[var(--page-canvas)] text-[var(--foreground)]">

      {/* ── Section 3: The Friction + Section 5: Product + Section 8: The Edge ── */}
      <NarrativeSections />

            {/* ── Section 11: Footer CTA — "Stop Recruiting. Start Provisioning." ── */}
            <section className="abet-surface-dark border-b border-[var(--border-on-dark)]">
        <div className="abet-section-content mx-auto max-w-[min(100%,88rem)] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">

          <SectionEyebrow onDark>The operation</SectionEyebrow>
          <AnimatedHeadline
            as="h2"
            delay={0.05}
            className="mt-5 text-[clamp(2.6rem,6vw,5rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-white"
          >
            Stop Recruiting. Start Provisioning.
          </AnimatedHeadline>
          <p className="mt-6 max-w-2xl text-lg text-stone-400 sm:text-xl">
            From contract signature to sovereign code in three weeks.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/#protocol"
              className="abet-accent-cta inline-flex h-12 items-center rounded-full px-7 text-sm font-semibold"
            >
              Initiate the 21-Day Protocol
            </Link>
            <Link
              href="/the-paas-model"
              className="inline-flex h-12 items-center rounded-full border border-white/20 px-7 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/[0.06]"
            >
              See the PaaS model
            </Link>
          </div>

          {/* Section 9: The 21-Day Protocol — three week steps */}
          <ol id="protocol" className="mt-20 grid gap-4 scroll-mt-20 lg:grid-cols-3">
            {protocolSteps.map((item) => (
              <li
                key={item.step}
                className="flex flex-col rounded-2xl border border-white/10 bg-[var(--hero-surface-elevated)]/70 p-8 sm:p-9"
              >
                <span className="font-mono text-xs font-semibold text-stone-400">{item.step}</span>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-stone-400">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      
    

      {/* ── Section 6: Active Deployments ── */}
      {/*<CaseStudyCarousel />*/}

      {/* ── Section 7: The Three Environments ── */}
      <DomainCloud />
      {/*<div id="domains">
        <DomainCorridor />
      </div> */}
      {/* ── Section 9 lead-in: 21-day stat pull-quote ── */}
      <StatCallout />

      {/* ── Section 10: Trust & Security ── */}
      <TrustTiles />
      <BenchmarkStrip />

      {/* ── Secondary page depth links ── */}
      <EditorialHighlights />


      <SiteFooter />
    </div>
  );
}
