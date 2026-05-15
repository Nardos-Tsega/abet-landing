"use client";

import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState, useSyncExternalStore } from "react";
import { Hero } from "@/components/hero/Hero";
import {
  MissionContent,
  MissionSection,
} from "@/components/sections/MissionSection";

/** More pinned scroll = smoother motion per pixel (desktop / wide viewports). */
const ALBUM_SCROLL_RATIO = 1.38;
/** scrollYProgress where the top sheet fully seats (p === 1). */
const ALBUM_PROGRESS_END = 0.64;

const NARROW_MQ = "(max-width: 767px)";

function subscribeNarrowViewport(cb: () => void) {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia(NARROW_MQ);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function getNarrowViewport() {
  if (typeof window === "undefined") return false;
  return window.matchMedia(NARROW_MQ).matches;
}

/** Phones only: stacked sections + window scroll. From `md` (768px) the scroll-driven album runs. */
function useNarrowStackedLayout() {
  return useSyncExternalStore(subscribeNarrowViewport, getNarrowViewport, () => false);
}

export function HeroMissionScroll() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const narrowStacked = useNarrowStackedLayout();

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
    axis: "y",
  });

  const p = useTransform(
    scrollYProgress,
    [0, ALBUM_PROGRESS_END],
    [0, 1],
    { clamp: true },
  );

  const heroScale = useTransform(
    p,
    [0, 0.22, 0.48, 0.72, 1],
    [1, 0.996, 0.988, 0.978, 0.968],
  );
  const heroY = useTransform(
    p,
    [0, 0.35, 0.65, 1],
    ["0%", "0.35%", "0.75%", "1.1%"],
  );

  const missionCardY = useTransform(
    p,
    [0, 0.07, 0.16, 0.28, 0.4, 0.52, 0.64, 0.74, 0.84, 0.92, 0.97, 1],
    [
      "100%",
      "86%",
      "70%",
      "54%",
      "40%",
      "27%",
      "17%",
      "10%",
      "5.5%",
      "2.5%",
      "0.8%",
      "0%",
    ],
  );
  const missionCardScale = useTransform(
    p,
    [0, 0.18, 0.38, 0.58, 0.76, 0.9, 1],
    [0.972, 0.982, 0.991, 0.996, 0.999, 1, 1],
  );
  const missionCardRotate = useTransform(
    p,
    [0, 0.35, 0.65, 1],
    [-0.35, -0.12, -0.03, 0],
  );

  const [heroInert, setHeroInert] = useState(false);
  const [missionInteractive, setMissionInteractive] = useState(false);

  useMotionValueEvent(p, "change", (v) => {
    setHeroInert(v > 0.24);
    setMissionInteractive(v > 0.2);
  });

  if (reducedMotion || narrowStacked) {
    return (
      <>
        <Hero />
        <MissionSection />
      </>
    );
  }

  return (
    <div
      ref={trackRef}
      className="album-scroll-track relative w-full shrink-0"
      style={{
        height: `${(1 + ALBUM_SCROLL_RATIO) * 100}svh`,
      }}
    >
      <div className="sticky top-0 h-svh min-h-0 w-full overflow-hidden bg-[var(--page-canvas)]">
        <motion.div
          className="album-hero-layer absolute inset-0 z-0 will-change-transform"
          style={{
            scale: heroScale,
            y: heroY,
            transformOrigin: "50% 50%",
          }}
          inert={heroInert ? true : undefined}
        >
          <Hero className="h-full min-h-0" />
        </motion.div>

        <motion.div
          className="pointer-events-none absolute inset-0 z-20 flex h-full min-h-0 flex-col bg-[var(--page-canvas)] will-change-transform"
          style={{
            y: missionCardY,
            scale: missionCardScale,
            rotate: missionCardRotate,
            transformOrigin: "50% 100%",
            pointerEvents: missionInteractive ? "auto" : "none",
          }}
          role="region"
          aria-label="Mission"
        >
          <div className="flex min-h-0 flex-1 flex-col justify-center overflow-y-auto px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
            <MissionContent />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
