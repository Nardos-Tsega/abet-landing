"use client";

import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState, useSyncExternalStore } from "react";
import { SurfaceGrid } from "@/components/shared/SurfaceGrid";

/** Longer pinned chapter ≈ Scale-style “scroll to explore” pacing */
const POD_SCROLL_RATIO = 2.95;
const NARROW_MQ = "(max-width: 767px)";

function subscribeNarrowViewport(cb: () => void) {
  if (typeof window === "undefined") return () => { };
  const mq = window.matchMedia(NARROW_MQ);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function getNarrowViewport() {
  if (typeof window === "undefined") return false;
  return window.matchMedia(NARROW_MQ).matches;
}

function useNarrowStackedLayout() {
  return useSyncExternalStore(subscribeNarrowViewport, getNarrowViewport, () => false);
}

/** Shared motion keyframes so lines and nodes stay geometrically locked */
function usePodGeometry(p: MotionValue<number>) {
  const Lx = useTransform(p, [0, 0.22, 0.42, 0.62, 0.82, 1], [50, 50, 50, 50, 50, 50]);
  const Ly = useTransform(p, [0, 0.22, 0.42, 0.62, 0.82, 1], [24, 25, 30, 36, 39, 41]);
  const S1x = useTransform(p, [0, 0.22, 0.42, 0.62, 0.82, 1], [16, 20, 30, 37, 39, 40]);
  const S1y = useTransform(p, [0, 0.22, 0.42, 0.62, 0.82, 1], [72, 68, 60, 56, 55, 54]);
  const S2x = useTransform(p, [0, 0.22, 0.42, 0.62, 0.82, 1], [84, 80, 70, 63, 61, 60]);
  const S2y = useTransform(p, [0, 0.22, 0.42, 0.62, 0.82, 1], [72, 68, 60, 56, 55, 54]);

  const linkOpacity = useTransform(p, [0.06, 0.18, 0.38, 0.58, 0.72], [0, 0.75, 0.85, 0.45, 0.08]);
  const hullOpacity = useTransform(p, [0.28, 0.46, 0.66, 0.88], [0, 0.95, 0.75, 0.35]);
  const hullR = useTransform(p, [0.28, 0.5, 0.78, 1], [26, 22, 21, 20]);
  const beamOpacity = useTransform(p, [0.55, 0.7, 0.88, 1], [0, 0.55, 0.95, 1]);
  const stackOpacity = useTransform(p, [0.58, 0.74, 1], [0, 0.9, 1]);
  const stackX = useTransform(p, [0.58, 0.82, 1], [14, 4, 0]);
  const vignette = useTransform(p, [0, 0.5, 1], [0.45, 0.35, 0.55]);
  const gridDrift = useTransform(p, [0, 1], [0, -18]);

  return {
    Lx,
    Ly,
    S1x,
    S1y,
    S2x,
    S2y,
    linkOpacity,
    hullOpacity,
    hullR,
    beamOpacity,
    stackOpacity,
    stackX,
    vignette,
    gridDrift,
  };
}

function PodStoryBackground({ p }: { p: MotionValue<number> }) {
  const g = usePodGeometry(p);
  const gridY = useTransform(g.gridDrift, (v) => `${v}px`);
  const leadLeft = useTransform(g.Lx, (v) => `${v}%`);
  const leadTop = useTransform(g.Ly, (v) => `${v}%`);
  const s1Left = useTransform(g.S1x, (v) => `${v}%`);
  const s1Top = useTransform(g.S1y, (v) => `${v}%`);
  const s2Left = useTransform(g.S2x, (v) => `${v}%`);
  const s2Top = useTransform(g.S2y, (v) => `${v}%`);
  const stackTranslateX = useTransform(g.stackX, (v) => `${v}px`);
  const hullScale = useTransform(g.hullR, (r) => r / 22);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 90% 75% at 45% 38%, var(--accent-glow-soft), transparent 58%), var(--surface-dark-gradient)",
      }}
    >
      <SurfaceGrid driftY={gridY} insetClassName="inset-[-15%]" />
      <motion.div
        className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_100%)]"
        style={{ opacity: g.vignette }}
      />

      <svg
        className="absolute inset-0 z-[3] h-full w-full text-stone-500"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="podEdge" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(148,190,255,0.15)" />
            <stop offset="50%" stopColor="rgba(60,77,251,0.28)" />
            <stop offset="100%" stopColor="rgba(148,190,255,0.2)" />
          </linearGradient>
        </defs>

        <motion.g style={{ opacity: g.linkOpacity }}>
          <motion.line x1={g.Lx} y1={g.Ly} x2={g.S1x} y2={g.S1y} stroke="url(#podEdge)" strokeWidth={0.42} strokeLinecap="round" />
          <motion.line x1={g.Lx} y1={g.Ly} x2={g.S2x} y2={g.S2y} stroke="url(#podEdge)" strokeWidth={0.42} strokeLinecap="round" />
          <motion.line x1={g.S1x} y1={g.S1y} x2={g.S2x} y2={g.S2y} stroke="rgba(148,190,255,0.22)" strokeWidth={0.28} strokeLinecap="round" />
        </motion.g>

        <motion.circle
          cx={50}
          cy={48}
          r={22}
          fill="none"
          stroke="rgba(148,190,255,0.45)"
          strokeWidth={0.38}
          style={{
            opacity: g.hullOpacity,
            scale: hullScale,
            transformOrigin: "50px 48px",
          }}
        />

        <motion.g style={{ opacity: g.beamOpacity }}>
          <line x1="64" y1="40" x2="90" y2="32" stroke="rgba(60,77,251,0.65)" strokeWidth={0.4} strokeLinecap="round" />
          <line x1="66" y1="48" x2="92" y2="48" stroke="rgba(60,77,251,0.65)" strokeWidth={0.4} strokeLinecap="round" />
          <line x1="64" y1="56" x2="90" y2="66" stroke="rgba(60,77,251,0.65)" strokeWidth={0.4} strokeLinecap="round" />
        </motion.g>
      </svg>

      <motion.div
        className="absolute right-[5%] top-1/2 flex -translate-y-1/2 flex-col gap-3 sm:right-[7%] sm:gap-3.5"
        style={{ opacity: g.stackOpacity, x: stackTranslateX }}
      >
        {[
          { label: "Work", h: "h-16" },
          { label: "Chat", h: "h-16" },
          { label: "Repo", h: "h-16" },
        ].map((item) => (
          <div
            key={item.label}
            className={`flex ${item.h} w-11 flex-col justify-end rounded-xl border border-white/12 bg-gradient-to-b from-white/[0.07] to-white/[0.02] px-2 pb-2 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-[2px] sm:w-12`}
          >
            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-stone-500">
              {item.label}
            </span>
            <div
              className="mt-1.5 h-7 w-full rounded-md"
              style={{
                background:
                  "linear-gradient(to top, rgba(60, 77, 251, 0.32), rgba(91, 106, 232, 0.1), transparent)",
              }}
            />
          </div>
        ))}
      </motion.div>

      <motion.div
        className="absolute h-[3.25rem] w-[3.25rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-400/40 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.12),transparent_55%)] shadow-[0_0_48px_rgba(60,77,251,0.45)] sm:h-16 sm:w-16"
        style={{ left: leadLeft, top: leadTop }}
      />
      <motion.div
        className="absolute h-[2.85rem] w-[2.85rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/14 bg-[#0a1448]/95 shadow-[0_8px_28px_rgba(0,0,0,0.5)] sm:h-[3.1rem] sm:w-[3.1rem]"
        style={{ left: s1Left, top: s1Top }}
      />
      <motion.div
        className="absolute h-[2.85rem] w-[2.85rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/14 bg-[#0a1448]/95 shadow-[0_8px_28px_rgba(0,0,0,0.5)] sm:h-[3.1rem] sm:w-[3.1rem]"
        style={{ left: s2Left, top: s2Top }}
      />

      <div className="pointer-events-none absolute bottom-[10%] left-1/2 w-[min(92%,26rem)] -translate-x-1/2 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-stone-500 sm:bottom-[9%] sm:text-[11px]">
        Scroll · Pod as a Service
      </div>
    </div>
  );
}

function PodStoryNarrative({ p }: { p: MotionValue<number> }) {
  const o1 = useTransform(p, [0, 0.14, 0.36, 0.48], [1, 1, 0.65, 0]);
  const y1 = useTransform(p, [0, 0.36, 0.48], ["0%", "1%", "4%"]);

  const o2 = useTransform(p, [0.28, 0.42, 0.64, 0.78], [0, 1, 1, 0]);
  const y2 = useTransform(p, [0.28, 0.42, 0.64, 0.78], ["10%", "0%", "0%", "5%"]);

  const o3 = useTransform(p, [0.58, 0.74, 1], [0, 1, 1]);
  const y3 = useTransform(p, [0.58, 0.74], ["12%", "0%"]);
  const statBarOpacity = useTransform(p, [0.68, 0.82, 1], [0, 1, 1]);

  const [phase, setPhase] = useState(0);
  useMotionValueEvent(p, "change", (v) => {
    const next = v < 0.38 ? 0 : v < 0.68 ? 1 : 2;
    setPhase((prev) => (prev === next ? prev : next));
  });

  const phaseLabel = phase === 0 ? "Roles" : phase === 1 ? "Pod unit" : "Integration";

  return (
    <div className="relative z-10 flex h-full min-h-0 w-full flex-col justify-end px-5 pb-8 pt-16 sm:px-10 sm:pb-12 sm:pt-20 lg:max-w-[min(100%,38rem)] lg:pb-16 lg:pr-12">
      <p className="sr-only" aria-live="polite">
        Story phase: {phaseLabel}
      </p>
      <div className="relative min-h-[15.5rem] sm:min-h-[17rem]">
        <motion.div
          className="absolute inset-x-0 top-0 max-w-xl space-y-3 sm:space-y-4"
          style={{ opacity: o1, y: y1 }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-400">01 · Roles</p>
          <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-[#f2f0e8] sm:text-4xl lg:text-[2.35rem]">
            One Lead. Two Senior Architects.
          </h2>
          <p className="max-w-lg text-sm leading-relaxed text-stone-400 sm:text-[0.95rem]">
            Architecture and sprint ownership on one side. Two execution engines on the other—redundancy
            without noise.
          </p>
        </motion.div>

        <motion.div
          className="absolute inset-x-0 top-0 max-w-xl space-y-3 sm:space-y-4"
          style={{ opacity: o2, y: y2 }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-400">02 · Unit</p>
          <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-[#f2f0e8] sm:text-4xl lg:text-[2.35rem]">
            A standardized Pod—not loose freelancers.
          </h2>
          <p className="max-w-lg text-sm leading-relaxed text-stone-400 sm:text-[0.95rem]">
            Fixed monthly OpEx for a three-person execution surface. Same fully-loaded senior budget—more
            throughput, no single point of failure.
          </p>
        </motion.div>

        <motion.div
          className="absolute inset-x-0 top-0 max-w-xl space-y-4 sm:space-y-5"
          style={{ opacity: o3, y: y3 }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-400">03 · Deploy</p>
          <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-[#f2f0e8] sm:text-4xl lg:text-[2.35rem]">
            Live in your toolchain—first commit in 21 days.
          </h2>
          <p className="max-w-lg text-sm leading-relaxed text-stone-400 sm:text-[0.95rem]">
            Work tracking, chat, and source control stay yours. The Pod ships inside the systems your team
            already trusts.
          </p>
          <Link
            href="/#protocol"
            className="inline-flex w-fit items-center rounded-full border border-white/20 bg-white/[0.06] px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/35 hover:bg-white/[0.1]"
          >
            View the 21-Day protocol
          </Link>
        </motion.div>
      </div>
      <motion.div
        style={{ opacity: statBarOpacity }}
        className="pointer-events-none mt-6 flex max-w-xl flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-stone-500 sm:text-[11px]"
        aria-hidden
      >
        <span>21-day first commit</span>
        <span>3-person Pod</span>
        <span>50%+ US overlap</span>
      </motion.div>
    </div>
  );
}

function PodParallaxChapterPinned() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
    axis: "y",
  });

  return (
    <div
      ref={trackRef}
      id="pods"
      className="pod-scroll-track relative w-full shrink-0 scroll-mt-0"
      style={{ height: `${(1 + POD_SCROLL_RATIO) * 100}svh` }}
    >
      <div className="sticky top-0 h-svh min-h-0 w-full overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-5 z-30 -translate-x-1/2 sm:top-7">
          <p className="rounded-full border border-white/10 bg-black/30 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-stone-400 backdrop-blur-sm sm:text-[11px]">
            Scroll to explore
          </p>
        </div>
        <PodStoryBackground p={scrollYProgress} />
        <div className="relative z-10 mx-auto flex h-full min-h-0 w-full max-w-[96rem]">
          <PodStoryNarrative p={scrollYProgress} />
        </div>
      </div>
    </div>
  );
}

function PodParallaxChapterStatic() {
  const p = useMotionValue(0.78);

  return (
    <section
      id="pods"
      className="abet-surface-dark relative scroll-mt-0 border-t border-[var(--border-on-dark)]"
    >
      <div className="pointer-events-none absolute left-1/2 top-4 z-10 -translate-x-1/2 sm:top-6">
        <p className="rounded-full border border-white/10 bg-black/30 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-stone-400 backdrop-blur-sm sm:text-[11px]">
          Scroll to explore
        </p>
      </div>
      <div className="relative min-h-[24rem] overflow-hidden sm:min-h-[28rem]">
        <PodStoryBackground p={p} />
      </div>
      <div className="relative z-10 mx-auto max-w-[40rem] space-y-12 px-5 py-14 sm:px-8 sm:py-16">
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-400">01 · Roles</p>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#f2f0e8] sm:text-4xl">
            One Lead. Two Senior Architects.
          </h2>
          <p className="text-sm leading-relaxed text-stone-400 sm:text-base">
            Architecture and sprint ownership on one side. Two execution engines on the other—redundancy
            without noise.
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-400">02 · Unit</p>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#f2f0e8] sm:text-4xl">
            A standardized Pod—not loose freelancers.
          </h2>
          <p className="text-sm leading-relaxed text-stone-400 sm:text-base">
            Fixed monthly OpEx for a three-person execution surface. Same fully-loaded senior budget—more
            throughput, no single point of failure.
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-400">03 · Deploy</p>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#f2f0e8] sm:text-4xl">
            Live in your toolchain—first commit in 21 days.
          </h2>
          <p className="text-sm leading-relaxed text-stone-400 sm:text-base">
            Work tracking, chat, and source control stay yours. The Pod ships inside the systems your team
            already trusts.
          </p>
          <Link
            href="/#protocol"
            className="inline-flex w-fit rounded-full border border-white/20 bg-white/[0.06] px-5 py-2.5 text-sm font-semibold text-white"
          >
            View the 21-Day protocol
          </Link>
        </div>
        <div
          className="flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-stone-500 sm:text-[11px]"
          aria-hidden
        >
          <span>21-day first commit</span>
          <span>3-person Pod</span>
          <span>50%+ US overlap</span>
        </div>
      </div>
    </section>
  );
}

export function PodParallaxChapter() {
  const reducedMotion = useReducedMotion();
  const narrowStacked = useNarrowStackedLayout();

  if (reducedMotion || narrowStacked) {
    return <PodParallaxChapterStatic />;
  }

  return <PodParallaxChapterPinned />;
}