"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { BRAND_LOGO_SRC } from "@/lib/brand";

const navLinks = [
  { href: "/the-paas-model", label: "The PaaS Model" },
  { href: "/sovereign-execution", label: "Sovereign Execution" },
  { href: "/security-ip", label: "Security & IP" },
] as const;

export function Navbar() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`w-full shrink-0 border-b bg-[var(--page-canvas)] pt-[max(0.75rem,env(safe-area-inset-top,0px))] transition-[padding,box-shadow,border-color] ${
        compact
          ? "border-stone-200/90 py-2 shadow-[0_8px_30px_-12px_rgba(0,6,38,0.08)] sm:py-2.5 md:py-3"
          : "border-stone-300/40 py-3 sm:py-3.5 md:py-4"
      } px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16`}
    >
      <nav className="mx-auto flex w-full max-w-[min(100%,88rem)] flex-wrap items-center justify-between gap-x-2 gap-y-2.5 sm:gap-x-3 md:flex-nowrap md:items-center md:gap-x-4 md:gap-y-0">
        <Link href="/" className="flex items-center text-sm font-medium text-stone-900">
          <span
            className={`relative shrink-0 transition-[height,width] ${
              compact ? "h-7 w-[6.25rem] sm:h-8 sm:w-[7rem]" : "h-8 w-[7.25rem] sm:h-9 sm:w-[8rem]"
            }`}
          >
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
                  .
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
            href="/#protocol"
            className={`abet-accent-cta shrink-0 whitespace-nowrap rounded-full font-semibold transition-[padding,font-size] ${
              compact
                ? "px-3 py-1.5 text-[10px] sm:px-4 sm:py-2 sm:text-xs md:text-sm"
                : "px-3 py-2 text-[11px] sm:px-4 sm:text-xs md:px-5 md:py-2.5 md:text-sm"
            }`}
          >
            Initiate the 21-Day Protocol
          </Link>
        </div>
      </nav>
    </header>
  );
}
