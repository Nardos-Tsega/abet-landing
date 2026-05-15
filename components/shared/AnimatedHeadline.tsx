"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef, type ElementType, type ReactNode } from "react";

type AnimatedHeadlineProps = {
  children: string;
  as?: ElementType;
  className?: string;
  id?: string;
  /** Delay before the first word appears (seconds) */
  delay?: number;
};

const wordVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.04, delayChildren: delay },
  }),
};

/**
 * Scale.com-style word-by-word headline reveal.
 * Splits the string on spaces and animates each word independently.
 * Respects prefers-reduced-motion.
 */
export function AnimatedHeadline({
  children,
  as: Tag = "h2",
  className = "",
  id,
  delay = 0,
}: AnimatedHeadlineProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  const words = children.split(" ");

  if (reduced) {
    const Static = Tag as "h2";
    return (
      <Static id={id} className={className}>
        {children}
      </Static>
    );
  }

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      id={id}
      className={`flex flex-wrap gap-x-[0.28em] gap-y-0 leading-[inherit] ${className}`}
      variants={containerVariants}
      custom={delay}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      aria-label={children}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariants}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="inline-block"
          aria-hidden
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
