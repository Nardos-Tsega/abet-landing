import type { Metadata } from "next";
import Link from "next/link";
import { DocPage } from "@/components/document/DocPage";

export const metadata: Metadata = {
  title: "Sovereign Execution",
  description:
    "The Build-First Economy. Near-zero churn. Pods forged on national-scale infrastructure.",
};

export default function SovereignExecutionPage() {
  return (
    <DocPage
      title="The Build-First Economy."
      description="We didn&apos;t build our talent in maintenance shops. We built it in the trenches of national-scale infrastructure."
    >
      <section id="objection" aria-labelledby="objection-heading">
        <h2 id="objection-heading">You&apos;ve Heard &ldquo;World-Class Offshore Engineers&rdquo; Before.</h2>
        <p>
          We know what you&apos;re thinking. You&apos;ve seen this claim. You&apos;ve tried an offshore
          engagement that delivered ticket-closers when you needed architects. Engineers who could execute a
          spec but couldn&apos;t own a system. Talent that looked right on paper and created rework in
          production.
        </p>
        <p>That experience was real. And it was a product of where that talent was built.</p>
        <p>
          Abet is not sourced from the same markets. The engineers we deploy come from a fundamentally
          different formation environment, one that produces a specific kind of builder that saturated offshore
          markets cannot replicate.
        </p>
      </section>

      <section id="formation" aria-labelledby="formation-heading">
        <h2 id="formation-heading">What 10M+ Concurrent Users Does to an Engineer.</h2>
        <p>
          The Addis Ababa engineering ecosystem was not built on enterprise maintenance contracts and ticket
          queues. It was built on necessity.
        </p>
        <p>
          The engineers in Abet&apos;s network have worked on the infrastructure that an entire nation runs
          on, national payment platforms processing millions of transactions daily, aviation reservation and
          operations systems, ride-hailing platforms scaled to the density of a major African city, fintech
          infrastructure serving populations that had no prior banking access.
        </p>
        <p>
          These are not CRUD applications. These are systems where a failed deployment doesn&apos;t mean a
          degraded user experience, it means a payment rail goes down, a flight doesn&apos;t board, a city
          stops moving. Engineers forged in that environment develop a systems-level instinct that you
          cannot teach and cannot replicate by assigning tickets.
        </p>
        <p className="font-medium text-stone-900">
          This is Builder DNA. It is not a marketing term. It is a formation outcome.
        </p>
      </section>

      <section id="churn" aria-labelledby="churn-heading">
        <h2 id="churn-heading">The Engineer Who Stays.</h2>
        <p>
          Saturated offshore markets—Eastern Europe, South and Southeast Asia—are bleeding from wage inflation
          and 12-month job-hopping cycles. The pattern is well documented: an engineer joins a foreign
          engagement for the salary premium, spends 6–12 months building context in your codebase, and then
          exits for the next premium. You absorb the institutional memory loss and restart the hiring clock.
        </p>
        <p>
          Abet operates in a different incentive environment. The Build-First Economy of Addis Ababa is not
          yet saturated. The engineers in Abet&apos;s network are not here for a short-term arbitrage, they
          are building careers in a frontier ecosystem that rewards longevity and depth of craft.
        </p>
        <p>
          The result: zero churn across our deployed Pod engagements to date. Not low churn. Not managed
          churn. Zero.
        </p>
        <p>
          When your Pod is live, it stays live. The architect who pushes your first PR on day 21 is the same
          architect who knows your codebase inside out six months later.
        </p>
      </section>

      <section id="environments" aria-labelledby="environments-heading">
        <h2 id="environments-heading">Specialized by Design. Not Generalist by Default.</h2>
        <p>
          Abet Pods are deployed exclusively into three high-complexity environments. This is not a
          positioning choice, it is a talent architecture choice. Generalist capacity is a commodity. The
          environments below are not.
        </p>
        <h3>Frontier AI</h3>
        <p>
          RAG pipelines, vector ETLs, LLM evaluation frameworks, and training data infrastructure. For teams
          building at the frontier of applied AI who need architects that understand the full stack from
          embedding layer to inference.
        </p>
        <h3>Native Mobile</h3>
        <p>
          High-performance iOS and Android in Swift, Kotlin, and React Native. For products where
          performance, battery efficiency, and platform-native behavior are not negotiable.
        </p>
        <h3>FinTech &amp; Ledgers</h3>
        <p>
          Ledger integrity, payment rails, and high-concurrency systems in Rust and Go. For teams where
          correctness is not a quality metric, it is a legal and operational requirement.
        </p>
      </section>

      <section id="us-hours" aria-labelledby="us-hours-heading">
        <h2 id="us-hours-heading">Your Core Sprint Window. Fully Covered.</h2>
        <p>
          Abet guarantees a minimum 50% overlap with US working hours. Your Pod is live, responsive, and
          shipping during your core sprint window, standup, code review, unblocking, the moments where async
          falls apart and you need a human on the other end.
        </p>
        <p>
          UTC+3 also delivers 100% overlap with UK and EU sprint cycles for teams running cross-Atlantic
          operations, a structural advantage, not an afterthought.
        </p>
      </section>

      <section className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-section-muted)] p-6 sm:p-8">
        <h2 className="!mt-0 font-serif text-2xl font-semibold text-stone-900">
          The Build-First Economy is Your Competitive Advantage.
        </h2>
        <p className="!mt-3 text-stone-700">
          Stop paying the talent scarcity tax of saturated markets. Your Pod is 21 days out.
        </p>
        <Link
          href="/#protocol"
          className="abet-accent-cta mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
        >
          Initiate the 21-Day Protocol
        </Link>
      </section>
    </DocPage>
  );
}
