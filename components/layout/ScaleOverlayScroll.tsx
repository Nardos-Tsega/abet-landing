"use client";

import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState, useSyncExternalStore } from "react";

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

function useNarrowStackedLayout() {
  return useSyncExternalStore(subscribeNarrowViewport, getNarrowViewport, () => false);
}

interface ScaleOverlayScrollProps {
  background: React.ReactNode;
  foreground: React.ReactNode;
  scrollRatio?: number;
}

export function ScaleOverlayScroll({
  background,
  foreground,
  scrollRatio = 1.38,
}: ScaleOverlayScrollProps) {
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
    [0, 0.64], // End animation when track is 64% scrolled (like Hero)
    [0, 1],
    { clamp: true },
  );

  const bgScale = useTransform(
    p,
    [0, 0.22, 0.48, 0.72, 1],
    [1, 0.996, 0.988, 0.978, 0.968],
  );
  const bgY = useTransform(
    p,
    [0, 0.35, 0.65, 1],
    ["0%", "0.35%", "0.75%", "1.1%"],
  );

  const fgY = useTransform(
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

  const [bgInert, setBgInert] = useState(false);
  const [fgInteractive, setFgInteractive] = useState(false);

  useMotionValueEvent(p, "change", (v) => {
    setBgInert(v > 0.24);
    setFgInteractive(v > 0.2);
  });

  if (reducedMotion || narrowStacked) {
    return (
      <>
        {background}
        {foreground}
      </>
    );
  }

  return (
    <div
      ref={trackRef}
      className="relative w-full shrink-0"
      style={{
        height: `${(1 + scrollRatio) * 100}svh`,
      }}
    >
      <div className="sticky top-0 h-svh min-h-0 w-full overflow-hidden bg-[var(--page-canvas)]">
        <motion.div
          className="absolute inset-0 z-0 will-change-transform"
          style={{
            scale: bgScale,
            y: bgY,
            transformOrigin: "50% 50%",
          }}
          inert={bgInert ? true : undefined}
        >
          {background}
        </motion.div>

        <motion.div
          className="pointer-events-none absolute inset-0 z-20 flex h-full min-h-0 flex-col bg-[var(--page-canvas)] will-change-transform"
          style={{
            y: fgY,
            transformOrigin: "50% 100%",
            pointerEvents: fgInteractive ? "auto" : "none",
          }}
        >
          <div className="flex h-full min-h-0 w-full flex-col">
            {foreground}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
