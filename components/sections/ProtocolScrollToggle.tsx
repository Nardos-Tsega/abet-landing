"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

const steps = [
  {
    step: "01",
    label: "Week 1",
    title: "Calibration",
    body: "Map your stack, match your Pod, run the final technical alignment session.",
  },
  {
    step: "02",
    label: "Week 2",
    title: "Security Provisioning",
    body: "Pod locked. Encrypted hardware provisioned. MDM integrated. Zero-trust environment established.",
  },
  {
    step: "03",
    label: "Week 3",
    title: "Sovereign Integration",
    body: "Pod is live in Jira and Slack, assumes sprint capacity, and pushes the first PR to your main branch.",
  },
] as const;

// ─── Shared card chrome ───────────────────────────────────────────────────────
// Used by both the mobile static layout and the desktop sticky layout.

const CARD_CLS =
  "w-full max-w-[min(100%,88rem)] mx-auto overflow-hidden rounded-3xl border border-[var(--border-on-dark)] abet-surface-dark shadow-[0_20px_64px_-12px_rgba(0,6,38,0.5)]";

// ─── Vertical stepper geometry ────────────────────────────────────────────────

const DOT_SIZE   = 12;  // px
const DOT_TOP    = 4;   // px — aligns dot with first line of label text
const STEP_H     = 88;  // px — fixed row height for non-last rows

const TRACK_TOP    = DOT_TOP + DOT_SIZE / 2;          // 10 px — start of track line
const TRACK_HEIGHT = (steps.length - 1) * STEP_H;    // 176 px

// ─── Mobile / reduced-motion: plain stacked cards ────────────────────────────

function ProtocolMobile() {
  return (
    <ol className="flex flex-col gap-3 sm:gap-4">
      {steps.map((s) => (
        <li
          key={s.step}
          className="flex flex-col rounded-2xl border border-white/10 bg-[var(--hero-surface-elevated)]/60 p-6 sm:p-7"
        >
          <span className="font-mono text-[10px] font-semibold tracking-widest text-stone-500">
            {s.step} / 03
          </span>
          <h3 className="mt-2.5 text-base font-semibold tracking-tight text-white sm:text-lg">
            {s.label} — {s.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-stone-400">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

// ─── IntersectionObserver trigger hook ───────────────────────────────────────

function useTriggerRefs(count: number, onActivate: (i: number) => void) {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    refs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) onActivate(i); },
        { rootMargin: "-40% 0px -40% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [onActivate]);

  return (i: number) => (el: HTMLDivElement | null) => { refs.current[i] = el; };
}

// ─── Desktop: vertical stepper + scroll capture ───────────────────────────────
//
// KEY STRUCTURAL RULE:
//   `position: sticky` is broken by any `overflow: hidden` ancestor.
//   Therefore the sticky wrapper here has NO overflow:hidden.
//   The dark card INSIDE the sticky wrapper can freely use overflow:hidden
//   because no sticky element lives inside it.

function ProtocolDesktop() {
  const [active, setActive] = useState(0);
  const handleActivate = useCallback((i: number) => setActive(i), []);
  const setRef = useTriggerRefs(steps.length, handleActivate);

  return (
    /*
     * Scroll track:  3 × 80 svh = 240 svh of scrollable space.
     * The sticky card pins for this entire distance, cycling weeks 1 → 2 → 3
     * as the invisible trigger divs (below) enter the viewport centre-band.
     * After the track ends, the page continues normally to the next section.
     */
    <div className="relative" style={{ height: `${steps.length * 80 + 80}svh` }}>

      {/* ── Sticky wrapper — NO overflow:hidden, fills viewport height ── */}
      <div className="sticky top-0 h-svh">

        {/* ── The dark card — overflow:hidden is safe here, flex-col to fill height ── */}
        <div className={`${CARD_CLS} h-full flex flex-col`}>

          {/* Compact header */}
          <div className="flex-none px-8 pt-9 sm:px-10 sm:pt-10 lg:px-12 lg:pt-20">
            <h2 className="text-[clamp(1.35rem,2.4vw,2rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-white">
              The 21-Day Provisioning Protocol.
            </h2>
            <p className="mt-2.5 text-sm text-stone-400 sm:text-base">
              From contract signature to sovereign code in three weeks.
            </p>
          </div>

          {/* Stepper + content — flex-1 takes all remaining vertical space */}
          <div className="grid flex-1 grid-cols-[5fr_7fr] gap-10 px-8 py-8 sm:px-10 sm:py-10 lg:gap-14 lg:px-12 lg:py-11 xl:gap-20">

            {/* LEFT — vertical stepper, centred in the available column height */}
            <div className="flex items-center justify-center">
              <div className="relative w-full">

                {/* Static track line */}
                <div
                  className="pointer-events-none absolute w-px bg-white/10"
                  style={{ left: DOT_SIZE / 2 - 0.5, top: TRACK_TOP, height: TRACK_HEIGHT }}
                >
                  {/* Animated fill */}
                  <motion.div
                    className="absolute inset-x-0 top-0 bg-white/40"
                    animate={{ height: active * STEP_H }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>

                {steps.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Go to ${s.label}`}
                    className="flex w-full items-start gap-5 text-left"
                    style={i < steps.length - 1 ? { height: STEP_H } : {}}
                  >
                    {/* Dot */}
                    <div
                      className="relative z-10 shrink-0 rounded-full"
                      style={{
                        marginTop: DOT_TOP,
                        width: DOT_SIZE,
                        height: DOT_SIZE,
                        transition: "background 0.35s, transform 0.35s, box-shadow 0.35s",
                        background: active === i ? "#fff" : active > i ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.11)",
                        transform: active === i ? "scale(1.35)" : "scale(1)",
                        boxShadow: active === i ? "0 0 10px 2px rgba(255,255,255,0.3)" : "none",
                      }}
                    />

                    {/* Label */}
                    <div className="pt-0.5">
                      <span
                        className="block font-mono text-[9px] font-semibold tracking-widest transition-colors duration-300"
                        style={{ color: active >= i ? "rgb(214,211,209)" : "rgb(87,83,78)" }}
                      >
                        {s.step} / 03
                      </span>
                      <span
                        className="mt-1 block text-sm font-semibold leading-snug tracking-tight transition-colors duration-300"
                        style={{ color: active === i ? "#fff" : active > i ? "rgb(168,162,158)" : "rgb(87,83,78)" }}
                      >
                        {s.label}
                      </span>
                      <span
                        className="block text-sm transition-colors duration-300"
                        style={{ color: active === i ? "rgba(214,211,209,0.7)" : "rgba(87,83,78,0.6)" }}
                      >
                        {s.title}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT — animated content */}
            <div className="relative flex items-center">
              {/* Watermark */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-end overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={active}
                    className="select-none text-[clamp(5rem,12vw,10rem)] font-semibold leading-none tracking-[-0.05em] text-white/[0.04]"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {steps[active].step}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Week content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <span className="font-mono text-[10px] font-semibold tracking-widest text-stone-500">
                    {steps[active].step} / 03
                  </span>
                  <h3 className="mt-3 text-[clamp(1.6rem,3vw,2.5rem)] font-semibold leading-[1.06] tracking-[-0.025em] text-white">
                    {steps[active].label} —{" "}
                    <span className="text-stone-300">{steps[active].title}</span>
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-stone-400 sm:text-base">
                    {steps[active].body}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Footer CTA — pinned to bottom of the full-height card */}
          <div className="flex-none border-t border-white/8 px-8 py-7 sm:px-10 sm:py-8 lg:px-12">
            <Link
              href="/the-paas-model"
              className="inline-flex items-center gap-2 text-sm font-semibold text-stone-300 underline decoration-stone-600 underline-offset-4 transition-colors hover:text-white hover:decoration-stone-400"
            >
              Read the full PaaS model
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>

      {/*
       * Invisible trigger divs.
       * They live in the same scroll container as the sticky card so they scroll
       * past while the card stays pinned. IntersectionObserver fires when each
       * trigger's midpoint crosses the viewport 40–60 % band.
       *
       * First trigger: marginTop -80svh pulls it back so it's already in range
       * when the sticky card first pins, activating Week 1 immediately.
       */}
      {steps.map((_, i) => (
        <div
          key={i}
          ref={setRef(i)}
          style={{ height: "80svh", marginTop: i === 0 ? "-80svh" : undefined }}
          aria-hidden
        />
      ))}
    </div>
  );
}

// ─── Public export ────────────────────────────────────────────────────────────

export function ProtocolScrollToggle() {
  const reduced = useReducedMotion();

  return (
    <div
      id="protocol"
      className="relative z-10 bg-[var(--page-canvas)] px-2 pb-[max(0.5rem,env(safe-area-inset-bottom,0px))] pt-2 pl-[max(0.5rem,env(safe-area-inset-left,0px))] pr-[max(0.5rem,env(safe-area-inset-right,0px))] sm:pb-3 lg:pb-5"
    >
      {/* ── Mobile + tablet: static card ── */}
      <div className={`lg:hidden ${CARD_CLS}`}>
        <div className="px-5 pt-8 sm:px-8 sm:pt-10">
          <h2 className="text-2xl font-semibold tracking-[-0.025em] text-white sm:text-3xl">
            The 21-Day Provisioning Protocol.
          </h2>
          <p className="mt-2.5 text-sm text-stone-400 sm:text-base">
            From contract signature to sovereign code in three weeks.
          </p>
        </div>
        <div className="px-5 py-6 sm:px-8 sm:py-8">
          <ProtocolMobile />
        </div>
        <div className="border-t border-white/8 px-5 py-6 sm:px-8 sm:py-7">
          <Link
            href="/the-paas-model"
            className="inline-flex items-center gap-2 text-sm font-semibold text-stone-300 underline decoration-stone-600 underline-offset-4 transition-colors hover:text-white"
          >
            Read the full PaaS model <span aria-hidden>→</span>
          </Link>
        </div>
      </div>

      {/* ── Desktop: scroll capture (animated) ── */}
      {!reduced && (
        <div className="hidden lg:block">
          <ProtocolDesktop />
        </div>
      )}

      {/* ── Desktop: reduced-motion static card ── */}
      {reduced && (
        <div className={`hidden lg:block ${CARD_CLS}`}>
          <div className="px-12 pt-11">
            <h2 className="text-[clamp(1.35rem,2.4vw,2rem)] font-semibold tracking-[-0.03em] text-white">
              The 21-Day Provisioning Protocol.
            </h2>
            <p className="mt-2.5 text-sm text-stone-400">
              From contract signature to sovereign code in three weeks.
            </p>
          </div>
          <div className="px-12 py-10">
            <ProtocolMobile />
          </div>
          <div className="border-t border-white/8 px-12 py-8">
            <Link href="/the-paas-model" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-300 underline decoration-stone-600 underline-offset-4">
              Read the full PaaS model <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
