"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

// ─── Card data ────────────────────────────────────────────────────────────────
// Positions are expressed as CSS strings so they scale with the viewport.
// Fan container = CARD_W * 2.85 ≈ clamp(798px, 82.65vw, 1140px)
// card-to-card step = CARD_W * 0.925 ≈ clamp(259px, 26.825vw, 370px)
// Overlap per adjacent pair ≈ 7.5% of CARD_W ≈ 21–30px (barely touching).

const DOMAINS = [
  {
    key: "ai",
    badge: "FRONTIER AI",
    heading: "Frontier AI",
    body: "RAG pipelines, vector ETLs, LLM evaluation, training data infrastructure.",
    href: "/sovereign-execution",
    /** CSS left value relative to the fan container */
    cssLeft: "0px",
    zIndex: 1,
    scrollOffset: 0,
    peakRotation: -20,
    restingRotation: -13,
    accent: "#6366f1",
    Illustration: AIIllustration,
  },
  {
    key: "mobile",
    badge: "NATIVE MOBILE",
    heading: "Native Mobile",
    body: "High-performance iOS / Android in Swift, Kotlin, and React Native.",
    href: "/sovereign-execution",
    cssLeft: "clamp(259px, 26.825vw, 370px)",
    zIndex: 3,
    scrollOffset: 0.04,
    peakRotation: 7,
    restingRotation: 3,
    accent: "#22c55e",
    Illustration: MobileIllustration,
  },
  {
    key: "fintech",
    badge: "FINTECH & LEDGERS",
    heading: "FinTech & Ledgers",
    body: "Ledger integrity, payment rails, high-concurrency systems in Rust and Go.",
    href: "/sovereign-execution",
    cssLeft: "clamp(518px, 53.65vw, 740px)",
    zIndex: 2,
    scrollOffset: 0.08,
    peakRotation: 18,
    restingRotation: 11,
    accent: "#f59e0b",
    Illustration: FinTechIllustration,
  },
] as const;

// ─── SVG Illustrations ────────────────────────────────────────────────────────

function AIIllustration({ accent }: { accent: string }) {
  const nodes = {
    input:  [[18, 26], [18, 68], [18, 110]] as [number, number][],
    hidden: [[90, 18], [90, 68], [90, 118]] as [number, number][],
    output: [[162, 68]] as [number, number][],
  };
  const edges: [number, number, number, number][] = [
    ...nodes.input.flatMap(([ix, iy]) =>
      nodes.hidden.map(([hx, hy]) => [ix, iy, hx, hy] as [number, number, number, number]),
    ),
    ...nodes.hidden.map(([hx, hy]) => [hx, hy, 162, 68] as [number, number, number, number]),
  ];
  return (
    <svg viewBox="0 0 185 136" fill="none" aria-hidden className="h-full w-full">
      <ellipse cx="90" cy="68" rx="72" ry="54" fill={accent} opacity="0.08" />
      {edges.map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={accent} strokeWidth="0.8" strokeOpacity="0.30" />
      ))}
      {nodes.hidden.map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="10" fill={accent} opacity="0.12" />
          <circle cx={cx} cy={cy} r="5" fill={accent} opacity="0.75" />
        </g>
      ))}
      {nodes.input.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3.5" fill={accent} opacity="0.50" />
      ))}
      <circle cx="162" cy="68" r="13" fill={accent} opacity="0.12" />
      <circle cx="162" cy="68" r="6.5" fill={accent} opacity="0.95" />
      <circle cx="162" cy="68" r="3" fill="#fff" opacity="0.9" />
    </svg>
  );
}

function MobileIllustration({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 185 136" fill="none" aria-hidden className="h-full w-full">
      <ellipse cx="92" cy="68" rx="56" ry="54" fill={accent} opacity="0.08" />
      <rect x="56" y="8" width="74" height="120" rx="16" stroke={accent} strokeWidth="1.5" strokeOpacity="0.55" />
      <rect x="56" y="8" width="74" height="120" rx="16" fill={accent} fillOpacity="0.04" />
      <rect x="80" y="11" width="26" height="5" rx="2.5" fill={accent} fillOpacity="0.35" />
      <rect x="65" y="24" width="56" height="8" rx="4" fill={accent} fillOpacity="0.55" />
      <rect x="65" y="39" width="38" height="5" rx="2.5" fill="white" fillOpacity="0.12" />
      <rect x="65" y="51" width="56" height="30" rx="8" fill={accent} fillOpacity="0.10" stroke={accent} strokeWidth="0.8" strokeOpacity="0.3" />
      <rect x="72" y="58" width="30" height="4.5" rx="2" fill="white" fillOpacity="0.28" />
      <rect x="72" y="67" width="22" height="3.5" rx="1.5" fill="white" fillOpacity="0.16" />
      <rect x="65" y="88" width="24" height="24" rx="6" fill={accent} fillOpacity="0.18" />
      <rect x="97" y="88" width="24" height="24" rx="6" fill={accent} fillOpacity="0.18" />
      <rect x="83" y="120" width="20" height="3.5" rx="1.75" fill={accent} fillOpacity="0.45" />
    </svg>
  );
}

function FinTechIllustration({ accent }: { accent: string }) {
  const bars = [
    { x: 18, h: 28 }, { x: 46, h: 50 }, { x: 74, h: 36 },
    { x: 102, h: 74 }, { x: 130, h: 58 }, { x: 153, h: 96 },
  ];
  const baseline = 118;
  return (
    <svg viewBox="0 0 185 136" fill="none" aria-hidden className="h-full w-full">
      {[28, 52, 76, 100].map((y) => (
        <line key={y} x1="12" y1={y} x2="172" y2={y} stroke="white" strokeWidth="0.5" strokeOpacity="0.06" />
      ))}
      <ellipse cx="92" cy="104" rx="80" ry="30" fill={accent} opacity="0.07" />
      {bars.map(({ x, h }, i) => (
        <g key={i}>
          <rect x={x} y={baseline - h} width="22" height={h} rx="4" fill={accent} fillOpacity={0.14 + i * 0.055} />
          <rect x={x} y={baseline - h} width="22" height="4.5" rx="2" fill={accent} fillOpacity="0.85" />
        </g>
      ))}
      <polyline
        points={bars.map(({ x, h }) => `${x + 11},${baseline - h - 9}`).join(" ")}
        stroke={accent} strokeWidth="1.75" strokeOpacity="0.6"
        fill="none" strokeLinejoin="round" strokeLinecap="round"
      />
      <line x1="12" y1={baseline} x2="172" y2={baseline} stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
      {bars.map(({ x, h }, i) => (
        <circle key={i} cx={x + 11} cy={baseline - h - 9} r="3" fill={accent} fillOpacity="0.95" />
      ))}
    </svg>
  );
}

// ─── Single animated card ─────────────────────────────────────────────────────

type DomainItem = (typeof DOMAINS)[number];

function DomainSelectLink({ heading, href }: { heading: string; href: string }) {
  return (
    <Link
      href={href}
      className="abet-touch-target absolute bottom-6 left-1/2 z-20 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-white px-6 py-3 text-[11px] font-black uppercase tracking-widest text-stone-900 shadow-lg transition-transform duration-200 hover:scale-105"
    >
      Select
      <span className="sr-only"> the {heading} environment</span>
      <span aria-hidden className="font-normal text-base">→</span>
    </Link>
  );
}

function DomainCard({
  domain,
  smoothP,
}: {
  domain: DomainItem;
  smoothP: MotionValue<number>;
}) {
  const s = domain.scrollOffset;
  const kf = (o: number) => Math.min(1, Math.max(0, s + o));

      // Cards start/end 1 500 px off-screen (clipped by overflow:hidden on sticky wrapper)
      const y = useTransform(
        smoothP,
        [kf(0), kf(0.15), kf(0.55), kf(0.90)],
        [1500, 0, 0, -1500],
      );
      // Overshoot on entry → settle into persistent resting tilt → straighten on exit
      const rotate = useTransform(
        smoothP,
        [kf(0), kf(0.10), kf(0.20), kf(0.55), kf(0.90)],
        [0, domain.peakRotation, domain.restingRotation, domain.restingRotation, 0],
      );

  return (
    <motion.div
      style={{
        position: "absolute",
        left: domain.cssLeft,
        top: 0,
        // Card width scales with viewport: 28 vw, clamped 280–400 px
        width: "clamp(280px, 28vw, 400px)",
        // Height keeps 295:496 aspect ratio (~1.68)
        height: "clamp(472px, 47.2vw, 674px)",
        zIndex: domain.zIndex,
        y,
        rotate,
        transformOrigin: "50% 85%",
      }}
      className="overflow-hidden rounded-[2rem] border border-white/[0.07] bg-[#0b0b0b] shadow-[0_40px_80px_-16px_rgba(0,0,0,0.9)]"
    >
      {/* ── Top: text ── */}
      <div className="flex flex-col items-center px-7 pt-9 pb-6 text-center" style={{ height: "54%" }}>
        <span className="inline-block rounded-full border border-white/20 px-4 py-1.5 font-mono text-[10px] font-semibold tracking-widest text-stone-400">
          {domain.badge}
        </span>
        <h3 className="mt-5 text-[clamp(1.7rem,2.3vw,2.3rem)] font-extrabold leading-[1.05] tracking-tight text-white">
          {domain.heading}
        </h3>
        <p className="mt-4 text-[0.8rem] leading-relaxed text-stone-500">{domain.body}</p>
      </div>

      {/* ── Bottom: illustration + CTA ── */}
      <div className="relative flex items-center justify-center overflow-hidden" style={{ height: "46%" }}>
        {/* Gradient bleed from top */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-10"
          style={{ background: "linear-gradient(to bottom,#0b0b0b,transparent)" }}
          aria-hidden
        />
        {/* SVG illustration */}
        <div className="absolute inset-0 flex items-end justify-center pb-16 px-6">
          <domain.Illustration accent={domain.accent} />
        </div>
        {/* CTA */}
        <DomainSelectLink heading={domain.heading} href={domain.href} />
      </div>
    </motion.div>
  );
}

// ─── Mobile horizontal carousel ───────────────────────────────────────────────

function MobileCards() {
  return (
    <div
      className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [&::-webkit-scrollbar]:h-[3px] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-stone-400 [&::-webkit-scrollbar-track]:bg-transparent"
      role="region"
      aria-label="Deployment environments"
    >
      {DOMAINS.map((d) => (
        <article
          key={d.key}
          className="flex w-[min(82vw,300px)] shrink-0 snap-center flex-col overflow-hidden rounded-[2rem] border border-white/[0.07] bg-[#0b0b0b] shadow-lg"
                      style={{ height: 496 }}
        >
          <div className="flex flex-col items-center px-7 pt-9 pb-5 text-center" style={{ height: "54%" }}>
            <span className="inline-block rounded-full border border-white/20 px-4 py-1.5 font-mono text-[10px] font-semibold tracking-widest text-stone-400">
              {d.badge}
            </span>
            <h3 className="mt-5 text-[1.75rem] font-extrabold leading-[1.05] tracking-tight text-white">{d.heading}</h3>
            <p className="mt-4 text-[0.8rem] leading-relaxed text-stone-500">{d.body}</p>
          </div>
          <div className="relative flex flex-1 items-end justify-center overflow-hidden pb-16 px-6">
            <d.Illustration accent={d.accent} />
            <DomainSelectLink heading={d.heading} href={d.href} />
          </div>
        </article>
      ))}
    </div>
  );
}

// ─── Desktop scroll-driven fan (useScroll only mounts with its target ref) ───

function DomainStackedCardsScroll() {
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const smoothP = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 18,
    mass: 0.5,
  });

  return (
    <div ref={trackRef} className="relative" style={{ height: "360svh" }}>
      <div className="sticky top-0 flex h-svh flex-col overflow-hidden">
        <div className="flex-none px-8 pb-6 pt-24 lg:px-12 lg:pt-28">
          <h2
            id="domains-heading"
            className="text-3xl font-semibold tracking-[-0.03em] text-stone-950 sm:text-4xl"
          >
            Three Environments. One Standard.
          </h2>
          <p className="mt-3 max-w-2xl text-base text-stone-500 sm:text-lg">
            We don&apos;t build generic apps. We don&apos;t do basic QA. Select the environment
            that maps to your roadmap.
          </p>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div
            className="relative"
            style={{
              width: "clamp(798px, 82.65vw, 1140px)",
              height: "clamp(472px, 47.2vw, 674px)",
            }}
          >
            {DOMAINS.map((domain) => (
              <DomainCard key={domain.key} domain={domain} smoothP={smoothP} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DomainStackedCardsStaticDesktop() {
  return (
    <>
      <div className="px-8 pb-8 pt-24 lg:px-12 lg:pt-28">
        <h2
          id="domains-heading"
          className="text-3xl font-semibold tracking-[-0.03em] text-stone-950 sm:text-4xl"
        >
          Three Environments. One Standard.
        </h2>
        <p className="mt-3 max-w-2xl text-base text-stone-500 sm:text-lg">
          We don&apos;t build generic apps. We don&apos;t do basic QA. Select the environment
          that maps to your roadmap.
        </p>
      </div>
      <div className="flex justify-center pb-24">
        <div
          className="relative"
          style={{
            width: "clamp(798px, 82.65vw, 1140px)",
            height: "clamp(472px, 47.2vw, 674px)",
          }}
        >
          {DOMAINS.map((d) => (
            <div
              key={d.key}
              className="absolute overflow-hidden rounded-[2rem] border border-white/[0.07] bg-[#0b0b0b] shadow-xl"
              style={{
                left: d.cssLeft,
                top: 0,
                width: "clamp(280px, 28vw, 400px)",
                height: "clamp(472px, 47.2vw, 674px)",
                zIndex: d.zIndex,
              }}
            >
              <div className="flex flex-col items-center px-7 pt-9 pb-6 text-center" style={{ height: "54%" }}>
                <span className="inline-block rounded-full border border-white/20 px-4 py-1.5 font-mono text-[10px] font-semibold tracking-widest text-stone-400">
                  {d.badge}
                </span>
                <h3 className="mt-5 text-[clamp(1.7rem,2.3vw,2.3rem)] font-extrabold leading-[1.05] tracking-tight text-white">
                  {d.heading}
                </h3>
                <p className="mt-4 text-[0.8rem] leading-relaxed text-stone-500">{d.body}</p>
              </div>
              <div className="relative flex flex-1 items-end justify-center overflow-hidden pb-16 px-6">
                <d.Illustration accent={d.accent} />
                <DomainSelectLink heading={d.heading} href={d.href} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// ─── Public export ────────────────────────────────────────────────────────────

export function DomainStackedCards() {
  const reduced = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const showAnimatedDesktop = isDesktop && !reduced;
  const showStaticDesktop = isDesktop && reduced;

  return (
    <section
      id="domains"
      className="relative z-10 scroll-mt-28 bg-[var(--page-canvas)]"
      aria-labelledby="domains-heading"
    >
      {showAnimatedDesktop ? (
        <DomainStackedCardsScroll />
      ) : showStaticDesktop ? (
        <DomainStackedCardsStaticDesktop />
      ) : (
        <>
          <div className="px-5 pb-8 pt-20 sm:px-8 sm:pt-24">
            <h2
              id="domains-heading"
              className="text-3xl font-semibold tracking-[-0.03em] text-stone-950 sm:text-4xl"
            >
              Three Environments. One Standard.
            </h2>
            <p className="mt-4 max-w-2xl text-base text-stone-500 sm:text-lg">
              We don&apos;t build generic apps. We don&apos;t do basic QA. Select the environment
              that maps to your roadmap.
            </p>
          </div>
          <div className="px-5 pb-24 sm:px-8">
            <MobileCards />
          </div>
        </>
      )}
    </section>
  );
}
