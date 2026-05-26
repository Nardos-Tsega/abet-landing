import Link from "next/link";
import { CONTACT_HREF } from "@/lib/site-config";

const product = [
  { href: "/the-paas-model", label: "The PaaS model" },
  { href: "/sovereign-execution", label: "Sovereign execution" },
  { href: "/security-ip", label: "Security & IP" },
] as const;

const solutions = [
  { href: "/#protocol", label: "21-Day protocol" },
  { href: "/#pods", label: "How Pods deploy" },
  { href: "/#domains", label: "Deployment domains" },
  { href: "/security-ip", label: "Institutional security" },
] as const;

const resources = [
  { href: "/the-paas-model", label: "PaaS model deep dive" },
  { href: "/sovereign-execution", label: "Sovereign execution" },
  { href: "/security-ip", label: "Security brief" },
] as const;

export function SiteFooter() {
  return (
    <div className="relative z-10 flex w-full flex-col bg-[var(--page-canvas)] px-2 pb-[max(0.5rem,env(safe-area-inset-bottom,0px))] pt-2 pl-[max(0.5rem,env(safe-area-inset-left,0px))] pr-[max(0.5rem,env(safe-area-inset-right,0px))] sm:pb-3 lg:pb-5">
      <footer className="mx-auto w-full max-w-[min(100%,88rem)] relative overflow-hidden rounded-3xl shadow-[0_24px_80px_-12px_rgba(0,6,38,0.45)] abet-surface-dark border border-[var(--border-on-dark)]">
        <div className="mx-auto w-full px-5 lg:px-12">

        {/* Nav grid */}
        <div className="grid gap-10 border-b border-white/10 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:py-20">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500">Product</p>
            <ul className="mt-4 space-y-3 text-sm text-stone-300">
              {product.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500">Solutions</p>
            <ul className="mt-4 space-y-3 text-sm text-stone-300">
              {solutions.map((item) => (
                <li key={item.href + item.label}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500">Resources</p>
            <ul className="mt-4 space-y-3 text-sm text-stone-300">
              {resources.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500">Get started</p>
            <ul className="mt-4 space-y-3 text-sm text-stone-300">
              <li>
                <Link href={CONTACT_HREF} className="transition-colors hover:text-white">
                  Start the 21-Day Clock
                </Link>
              </li>
              <li>
                <Link href="/security-ip#legal" className="transition-colors hover:text-white">
                  UAE-governed contracts
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom: stop recruiting CTA + tagline */}
        <div className="py-12 lg:py-16">
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-white">
            Stop Recruiting. Start Provisioning.
          </h2>

          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-lg">
              <Link href="/" className="text-lg font-semibold tracking-tight text-white">
                Abet
              </Link>
              <p className="mt-3 text-lg leading-snug text-stone-400">
                To eliminate the latency between human ambition and technical execution.
              </p>
            </div>

            <div className="flex flex-col items-start gap-5 lg:items-end">
              <Link
                href={CONTACT_HREF}
                className="abet-accent-cta inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold"
              >
                Start the 21-Day Clock
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Abet. The Infrastructure for Global Execution.</p>
            <p className="text-stone-600">
              UAE-governed MSAs · Client IP assigned on creation ·{" "}
              <Link href="/security-ip#legal" className="underline hover:text-stone-400">
                Why UAE jurisdiction
              </Link>
            </p>
          </div>
        </div>
        </div>
      </footer>
    </div>
  );
}
