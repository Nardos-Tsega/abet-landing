import Link from "next/link";

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

const company = [
  { href: "#", label: "About" },
  { href: "#", label: "Careers" },
  { href: "#", label: "Contact" },
] as const;

const resources = [
  { href: "/the-paas-model", label: "PaaS model deep dive" },
  { href: "/sovereign-execution", label: "Sovereign execution" },
  { href: "/security-ip", label: "Security brief" },
] as const;

const legal = [
  { href: "#", label: "Terms of use" },
  { href: "#", label: "Privacy policy" },
  { href: "#", label: "UAE-governed MSAs" },
] as const;

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.857L1.254 2.25H8.08l4.254 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="abet-surface-dark border-t border-[var(--border-on-dark)]">
      <div className="mx-auto max-w-[min(100%,88rem)] px-5 lg:px-12">

        {/* Five-column nav grid */}
        <div className="grid gap-10 border-b border-white/10 py-16 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8 lg:py-20">
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500">Company</p>
            <ul className="mt-4 space-y-3 text-sm text-stone-300">
              {company.map((item) => (
                <li key={item.label}>
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500">Legal</p>
            <ul className="mt-4 space-y-3 text-sm text-stone-300">
              {legal.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom: tagline + CTA row */}
        <div className="py-12 lg:py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            {/* Tagline */}
            <div className="max-w-lg">
              <Link href="/" className="text-lg font-semibold tracking-tight text-white">
                Abet
              </Link>
              <h2 className="mt-3 text-2xl font-semibold leading-snug tracking-[-0.025em] text-white sm:text-3xl">
                To eliminate the latency between human ambition and technical execution.
              </h2>
            </div>

            {/* CTA + social */}
            <div className="flex flex-col items-start gap-5 lg:items-end">
              <Link
                href="/#protocol"
                className="abet-accent-cta inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold"
              >
                Initiate the 21-Day Protocol
              </Link>
              <div className="flex items-center gap-4">
                <span className="text-xs text-stone-500">Follow Abet</span>
                <Link
                  href="#"
                  aria-label="Abet on LinkedIn"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-stone-400 transition-colors hover:border-white/25 hover:text-white"
                >
                  <LinkedInIcon />
                </Link>
                <Link
                  href="#"
                  aria-label="Abet on X"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-stone-400 transition-colors hover:border-white/25 hover:text-white"
                >
                  <XIcon />
                </Link>
              </div>
            </div>
          </div>

          {/* Legal bottom bar */}
          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Abet. The Infrastructure for Global Execution.</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <span className="text-stone-600">UAE-governed MSAs · Client IP assigned on creation</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
