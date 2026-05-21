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
  // true = at page top over the dark hero
  // false = scrolled → floating glass pill
  const [atHero, setAtHero] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtHero(window.scrollY < 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    /*
     * Outer wrapper: always fixed, full-width.
     * In hero mode → px-0  (nav stretches edge-to-edge)
     * In glass mode → px-3…px-8 (creates the floating-pill gap from viewport edges)
     */
    <div
      className={[
        "fixed left-0 right-0 z-[9999]",
        "pt-[max(0.5rem,env(safe-area-inset-top,0px))]",
        "transition-[padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        atHero ? "px-0" : "px-3 sm:px-5 lg:px-8",
      ].join(" ")}
    >
      <header
        className={[
          "mx-auto w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",

          atHero
            ? [
                // ── Hero mode: full-width transparent bar, white text ──
                "max-w-full rounded-none",
                "bg-transparent",
                "border-b border-white/[0.07]",
              ].join(" ")
            : [
                // ── Glass mode: floating pill, always-readable dark text ──
                // bg-white/60 + blur + saturate guarantees the pill is always
                // light enough for stone-900 text, regardless of the section behind it.
                "max-w-[min(100%,72rem)] rounded-3xl",
                "bg-white/[0.62] backdrop-blur-2xl backdrop-saturate-[180%]",
                "ring-1 ring-white/50",
                "shadow-[0_8px_32px_-4px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.7)]",
              ].join(" "),
        ].join(" ")}
      >
        <nav
          className={[
            "flex flex-wrap items-center justify-between gap-x-3 gap-y-2 px-5 py-3",
            "sm:gap-x-4 sm:px-6 sm:py-3 md:flex-nowrap md:gap-y-0 lg:px-8 lg:py-3.5",
          ].join(" ")}
        >
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center">
            <span className="relative h-7 w-[6.5rem] sm:h-8 sm:w-[7.25rem]">
              <Image
                src={BRAND_LOGO_SRC}
                alt="Abet"
                fill
                className="object-contain object-left"
                priority
                sizes="(max-width: 640px) 104px, 116px"
              />
            </span>
          </Link>

          {/* Nav links */}
          <ul
            className={[
              "order-3 hidden items-center gap-x-1 text-xs font-medium",
              "md:order-none md:flex md:gap-x-2 lg:gap-x-3 lg:text-sm",
              "text-stone-700 [&_a:hover]:text-stone-950",
            ].join(" ")}
          >
            {navLinks.map((item, i) => (
              <Fragment key={item.href}>
                {i > 0 && (
                  <li
                    className="select-none px-1 text-stone-400"
                    aria-hidden
                  >
                    ·
                  </li>
                )}
                <li>
                  <Link
                    href={item.href}
                    className="whitespace-nowrap px-1 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              </Fragment>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="/#protocol"
            className={[
              "abet-accent-cta shrink-0 whitespace-nowrap rounded-full font-semibold",
              "px-4 py-2 text-xs lg:px-5 lg:py-2.5 lg:text-sm",
              "transition-all duration-300",
            ].join(" ")}
          >
            Initiate the 21-Day Protocol
          </Link>
        </nav>
      </header>
    </div>
  );
}
