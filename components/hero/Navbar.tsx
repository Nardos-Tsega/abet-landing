import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { BRAND_LOGO_SRC } from "@/lib/brand";

const navLinks = [
  { href: "#paas-model", label: "The PaaS Model" },
  { href: "#sovereign-execution", label: "Sovereign Execution" },
  { href: "#security-ip", label: "Security & IP" },
] as const;

export function Navbar() {
  return (
    <header className="w-full shrink-0 border-b border-stone-300/40 bg-[var(--page-canvas)] px-5 py-4 sm:px-8 lg:px-12 xl:px-16">
      <nav className="mx-auto flex w-full max-w-[min(100%,88rem)] flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center text-sm font-medium text-stone-900"
        >
          <span className="relative h-8 w-[7.25rem] shrink-0 sm:h-9 sm:w-[8rem]">
            <Image
              src={BRAND_LOGO_SRC}
              alt="Abet"
              fill
              className="object-contain object-left"
              priority
              sizes="(max-width: 640px) 116px, 128px"
            />
          </span>
        </Link>

        <ul className="order-3 flex w-full flex-wrap items-center justify-center gap-x-1 text-sm font-medium text-stone-600 md:order-none md:w-auto md:gap-x-0">
          {navLinks.map((item, i) => (
            <Fragment key={item.href}>
              {i > 0 && (
                <li className="hidden px-2 text-stone-400 md:inline" aria-hidden>
                  |
                </li>
              )}
              <li>
                <Link
                  href={item.href}
                  className="inline-block px-1 transition-colors hover:text-stone-900 md:px-0"
                >
                  {item.label}
                </Link>
              </li>
            </Fragment>
          ))}
        </ul>

        <div className="flex items-center">
          <Link
            href="#protocol"
            className="rounded-full bg-[#3C4DFB] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3039c4] sm:px-5"
          >
            Initiate the 21-Day Protocol
          </Link>
        </div>
      </nav>
    </header>
  );
}
