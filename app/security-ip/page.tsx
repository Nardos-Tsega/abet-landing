import type { Metadata } from "next";
import Link from "next/link";
import { DocPage } from "@/components/document/DocPage";

export const metadata: Metadata = {
  title: "Security & IP",
  description:
    "How Abet provisions into your security perimeter: dedicated hardware, MDM, zero-trust, and ironclad IP assignment under UAE-governed MSAs.",
};

export default function SecurityIpPage() {
  return (
    <DocPage
      title="Engineered for the Enterprise."
      description="High-stakes technical environments require an ironclad security perimeter. Here is exactly how Abet provides it."
    >
      <section id="objection-security" aria-labelledby="objection-security-heading">
        <h2 id="objection-security-heading">Your Security Team Will Have Questions. Here Are the Answers.</h2>
        <p>
          Embedding an external engineering Pod into a production codebase is a serious security decision. If
          your security posture involves enterprise MDM, a zero-trust access model, IP assignment, or strict
          data compartmentalization and it should, you need to know exactly how Abet operates before a
          contract is signed.
        </p>
        <p>
          This page is written for the CTO who needs to walk their security review without surprises. Every
          policy described below is operational, not aspirational.
        </p>
      </section>

      <section id="legal" aria-labelledby="legal-heading">
        <h2 id="legal-heading">Global Jurisdiction. Ironclad IP Assignment.</h2>
        <p>
          Abet operates under the legal framework of the United Arab Emirates, a global technology and commerce
          hub operating under common law standards on par with London and Singapore. This is a deliberate
          choice. UAE jurisdiction provides a neutral, internationally recognized legal base for global client
          engagements, without the complexity of jurisdiction-specific contract law for clients based in the
          US, UK, or EU.
        </p>
        <p>
          <strong>IP Assignment:</strong> All work product created by an Abet Pod is automatically and
          irrevocably assigned to the client upon creation. There is no ambiguity, no carve-out, no
          work-for-hire debate. Your codebase is yours, from the first commit.
        </p>
        <p>
          <strong>NDA Structure:</strong> NDAs are executed at the company level between Abet and the client.
          Confidentiality obligations are simultaneously incorporated into every individual engineer&apos;s
          contract, creating a dual-layer protection structure. Your proprietary data is bound at both the
          institutional and individual level.
        </p>
      </section>

      <section id="perimeter" aria-labelledby="perimeter-heading">
        <h2 id="perimeter-heading">We Don&apos;t Impose a Security Model. We Integrate Into Yours.</h2>
        <p>
          The most important thing to understand about Abet&apos;s security architecture is this: you remain
          in control of the perimeter. We do not ask you to adopt our security tooling. We provision into
          yours.
        </p>
        <h3>Dedicated Hardware Isolation</h3>
        <p>
          Each Pod operates on dedicated, high-specification hardware provisioned exclusively for your
          engagement. These machines are never shared between clients, never reused between engagements. When
          your contract ends, the hardware is decommissioned.
        </p>
        <h3>MDM Enrollment Under Your Policy</h3>
        <p>
          We enroll our dedicated hardware into your Mobile Device Management platform, Microsoft Intune, Jamf,
          Kandji, or your MDM of choice. You define the encryption standards. You hold the remote-wipe
          capability. If a machine is ever compromised, you execute the wipe from your own console. Abet
          engineers operate under your security policy, not a proxy of it.
        </p>
        <h3>Zero-Trust Access via Your Identity Provider</h3>
        <p>
          Our architects authenticate through your Identity Provider using company-issued credentials and your
          MFA protocols. They operate behind your IdP, not ours. There is no separate credential surface to
          manage or audit.
        </p>
        <h3>Remote-Access Execution (Maximum Security Option)</h3>
        <p>
          For engagements with the highest security requirements, Abet offers Remote-Access Node deployment.
          Our engineers use their dedicated hardware as a portal to access your environment via RDP, Azure
          Virtual Desktop, or VPN. In this configuration, your source code never technically leaves your secure
          servers. Our architects reach into your environment to build, your codebase does not travel outward.
        </p>
      </section>

      <section id="network" aria-labelledby="network-heading">
        <h2 id="network-heading">100% Uptime is an Engineering Problem. We Solved It.</h2>
        <p>
          Engineering velocity depends on connectivity. The Abet Hub in Addis Ababa is engineered as an
          industrial-grade always-on environment. Downtime is not a risk we manage, it is a failure mode we
          have architecturally eliminated.
        </p>
        <ul>
          <li>
            <strong>Primary Connectivity:</strong> Enterprise-grade fiber optic infrastructure.
          </li>
          <li>
            <strong>Starlink Priority Failover:</strong> In the event of local infrastructure disruption, our
            Pods automatically switch to Starlink satellite backhaul, low-latency, high-throughput, independent
            of terrestrial network conditions.
          </li>
          <li>
            <strong>Triple-Redundant Power:</strong> The facility runs on a tiered power architecture, National
            Grid primary, generator secondary, UPS battery arrays tertiary. A national power event does not
            stop your sprint.
          </li>
        </ul>
        <p>
          The result: your Pod ships on schedule regardless of what happens outside our facility walls.
        </p>
      </section>

      <section id="operational-integrity" aria-labelledby="operational-heading">
        <h2 id="operational-heading">The Protocols That Protect Your Production Environment.</h2>
        <h3>Secrets Management</h3>
        <p>
          Your Lead Architect manages all secrets and environment variables through your preferred vault
          solution: HashiCorp Vault, 1Password Teams, Azure Key Vault, or equivalent. No secrets are stored
          outside your approved toolchain.
        </p>
        <h3>The Warm Bench</h3>
        <p>
          Abet maintains an internal roster of pre-vetted senior architects briefed on active engagements. If
          a Pod member is unavailable for any reason, a briefed replacement is hot-swapped with zero loss of
          sprint velocity. Your roadmap does not pause for personnel events.
        </p>
        <h3>Compartmentalization Protocol</h3>
        <p>
          Each client environment is treated as a fully isolated security domain. No cross-client data, no
          shared tooling surfaces, no engineer visibility outside their assigned Pod. The separation is
          architectural, not policy-dependent.
        </p>
      </section>

      <section id="ip-summary" aria-labelledby="ip-summary-heading">
        <h2 id="ip-summary-heading">What You Own. Completely.</h2>
        <ul>
          <li>All code written by your Pod is your IP, automatically assigned upon creation</li>
          <li>UAE-governed MSA with international arbitration provisions</li>
          <li>Dual-layer NDA: company-level agreement + individual engineer contract terms</li>
          <li>No Abet retained license; no open-source obligations introduced without disclosure</li>
          <li>Dedicated hardware decommissioned at contract end</li>
          <li>Zero cross-client data exposure by architectural design</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-section-muted)] p-6 sm:p-8">
        <h2 className="!mt-0 font-serif text-2xl font-semibold text-stone-900">
          Every Security Question Has an Answer. Let&apos;s Walk Through Yours.
        </h2>
        <p className="!mt-3 text-stone-700">
          If your security review requires documentation beyond what&apos;s on this page, we provide it
          during the onboarding process. No surprises at the contract stage.
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
