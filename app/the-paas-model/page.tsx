import type { Metadata } from "next";
import Link from "next/link";
import { DocPage } from "@/components/document/DocPage";

export const metadata: Metadata = {
  title: "The PaaS Model — Abet",
  description:
    "Engineering capacity as a utility. Stop buying headcount—provision a standardized Sovereign Pod.",
};

export default function PaasModelPage() {
  return (
    <DocPage
      title="Engineering Capacity as a Utility."
      description="You provision AWS compute in seconds. Why is your engineering capacity a 90-day bottleneck?"
    >
      <section id="broken-model" aria-labelledby="broken-model-heading">
        <h2 id="broken-model-heading">The Architecture of Hiring is Fundamentally Flawed.</h2>
        <p>
          Every senior engineering hire carries a hidden structural tax that compounds before they write a
          single line of code.
        </p>
        <p>
          There&apos;s the 90-day wall, the average time to find, vet, and onboard senior talent in a
          saturated market. There&apos;s the equity dilution and the recruitment fee, typically 20% of
          first-year salary. There&apos;s the onboarding lag before they&apos;re operating at full velocity.
          And then there&apos;s the single point of failure: when that engineer leaves, and eventually they
          will, the institutional knowledge they&apos;ve accumulated walks out with them, and the 90-day
          clock restarts from zero.
        </p>
        <p>
          This is not a people problem. It is an architectural problem. You have engineered a static,
          fragile, expensive dependency into the most critical layer of your company.
        </p>
        <p className="font-medium text-stone-900">
          The question isn&apos;t whether you can afford to fix it. It&apos;s whether you can afford not to.
        </p>
      </section>

      <section id="shift" aria-labelledby="shift-heading">
        <h2 id="shift-heading">Stop Buying Headcount. Start Provisioning Capacity.</h2>
        <p>
          The infrastructure metaphor is deliberate. When your traffic spikes, you don&apos;t hire a new
          server—you provision compute. You scale the unit of output, not the unit of employment.
        </p>
        <p>Abet applies the same logic to engineering capacity.</p>
        <p>
          A Sovereign Pod is a standardized, pre-configured engineering unit that slots directly into your
          existing stack. It is not a staffing arrangement. It is not a freelancer marketplace. It is a
          fixed-cost, high-velocity execution engine, provisioned to your roadmap, not to the hiring market.
        </p>
        <p>
          The financial reframe is simple. Take the fully-loaded cost of a single senior local hire—base
          salary, recruitment fee, benefits, equity. That budget provisions an entire Sovereign Pod: one Lead
          Architect and two Senior Architects, operating as a cohesive unit inside your Jira, Slack, and
          GitHub from day 21.
        </p>
        <p className="font-medium text-stone-900">
          Same cost. Three times the execution surface. Zero single point of failure.
        </p>
      </section>

      <section id="atomic-unit" aria-labelledby="atomic-unit-heading">
        <h2 id="atomic-unit-heading">The Standardized Engineering Unit.</h2>
        <p>
          The Pod structure is not arbitrary. It is engineered around the smallest team size that
          eliminates the single-point-of-failure risk while maintaining the tight communication overhead of a
          high-performance unit.
        </p>
        <h3>The Lead Architect</h3>
        <p>
          Your technical bridge. The Lead owns the architecture decisions, manages sprint flow, unblocks
          execution, and is your direct line of communication into the Pod. They are accountable for output,
          not just effort.
        </p>
        <h3>The Senior Architects (×2)</h3>
        <p>
          Your execution engine. Two specialized builders focused entirely on pushing sovereign code. The
          two-senior structure means no sprint dies because one engineer is sick, context-switching, or
          handling an incident. Velocity is structurally protected.
        </p>
        <h3>The Integration Standard</h3>
        <p>
          Every Pod operates inside your toolchain from day one—your Jira board, your Slack workspace, your
          GitHub organization. There is no parallel system to manage, no separate communication channel to
          monitor. The Pod is invisible as an external unit and indistinguishable as internal capacity.
        </p>
      </section>

      <section id="elastic-scaling" aria-labelledby="elastic-heading">
        <h2 id="elastic-heading">Provision More. On Your Timeline.</h2>
        <p>
          As your roadmap scales, your engineering capacity scales with it. Adding a second Pod follows the
          same 21-Day Provisioning Protocol as the first—calibration, security provisioning, sovereign
          integration. No new vendor relationship to negotiate, no new legal framework to establish. The
          second Pod deploys against the same infrastructure and security standards already in place.
        </p>
        <p>
          This is the compounding advantage of the subscription model: each additional Pod inherits the
          institutional context of the engagement. Your second Pod doesn&apos;t start from zero. It starts
          from where your first Pod is now.
        </p>
      </section>

      <section id="protocol" aria-labelledby="protocol-heading">
        <h2 id="protocol-heading">From Contract Signature to Sovereign Code in Three Weeks.</h2>
        <h3>Week 1 — Calibration</h3>
        <p>
          We map your exact stack requirements and match your Pod. A final technical alignment session
          verifies the match before any hardware is provisioned.
        </p>
        <h3>Week 2 — Security Provisioning</h3>
        <p>
          The Pod composition is locked. We provision dedicated, high-spec hardware exclusive to your
          project. Your MDM software is enrolled, encryption standards are set to your policy, and the
          zero-trust operating environment is established under your identity provider.
        </p>
        <h3>Week 3 — Sovereign Integration</h3>
        <p>
          The fully assembled Pod integrates into your Jira and Slack, assumes sprint capacity, and pushes
          the first PR to your main branch. By day 21, you have three senior architects executing against
          your roadmap.
        </p>
      </section>

      <section id="cost-architecture" aria-labelledby="cost-heading">
        <h2 id="cost-heading">One Salary. One Pod. Zero Compromise.</h2>
        <p>
          <strong>Traditional Senior Hire</strong> → Time to first commit: 90+ days / Headcount: 1 /
          Recruitment fee: ~20% of salary / Equity dilution: Yes / Single point of failure: Yes / Scaling
          timeline: 90+ days per hire / Monthly cost: 1× senior salary + overhead
        </p>
        <p>
          <strong>Sovereign Pod</strong> → Time to first commit: 21 days / Headcount: 3 (1 Lead + 2 Senior)
          / Recruitment fee: None / Equity dilution: None / Single point of failure: No—hot-swap redundancy
          built in / Scaling timeline: 21 days per additional Pod / Monthly cost: Fixed subscription OpEx
        </p>
        <p className="font-medium text-stone-900">
          The model is not cheaper. It is structurally superior at the same cost.
        </p>
      </section>

      <section className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-section-muted)] p-6 sm:p-8">
        <h2 className="!mt-0 font-serif text-2xl font-semibold text-stone-900">Your Pod is 21 Days Out.</h2>
        <p className="!mt-3 text-stone-700">Your roadmap cannot wait 90 days.</p>
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
