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
    <header className="w-full shrink-0 border-b border-stone-300/40 bg-[var(--page-canvas)] px-3 py-3 pt-[max(0.75rem,env(safe-area-inset-top,0px))] sm:px-6 sm:py-3.5 md:px-8 md:py-4 lg:px-12 xl:px-16">
      <nav className="mx-auto flex w-full max-w-[min(100%,88rem)] flex-wrap items-center justify-between gap-x-2 gap-y-2.5 sm:gap-x-3 md:flex-nowrap md:items-center md:gap-x-4 md:gap-y-0">
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

        <ul className="order-3 flex w-full min-w-0 flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-[11px] font-medium leading-snug text-stone-600 sm:gap-x-2 sm:text-xs md:order-none md:flex md:w-auto md:max-w-none md:flex-nowrap md:justify-center md:gap-x-3 md:text-sm lg:gap-x-4">
          {navLinks.map((item, i) => (
            <Fragment key={item.href}>
              {i > 0 && (
                <li className="hidden px-1.5 text-stone-400 md:inline lg:px-2" aria-hidden>
                  |
                </li>
              )}
              <li>
                <Link
                  href={item.href}
                  className="inline-block whitespace-nowrap px-0.5 transition-colors hover:text-stone-900 sm:px-1 md:px-1.5"
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
            className="shrink-0 whitespace-nowrap rounded-full bg-[#3C4DFB] px-3 py-2 text-[11px] font-semibold leading-tight text-white transition-colors hover:bg-[#3039c4] sm:px-4 sm:text-xs md:px-5 md:py-2.5 md:text-sm"
          >
            Initiate the 21-Day Protocol
          </Link>
        </div>
      </nav>
    </header>
  );
}
