"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef, type ElementType } from "react";

type AnimatedHeadlineProps = {
  children: string;
  as?: ElementType;
  className?: string;
  id?: string;
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
 * Word-by-word headline reveal using a real heading element.
 * Preserves spaces between words for screen readers and copy-paste.
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

  const MotionTag = motion.h2;

  return (
    <MotionTag
      ref={ref as React.RefObject<HTMLHeadingElement>}
      id={id}
      className={className}
      variants={containerVariants}
      custom={delay}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={wordVariants}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="inline-block"
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </MotionTag>
  );
}
