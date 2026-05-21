"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { SectionEyebrow } from "@/components/layout/MarketingSection";
import { AnimatedHeadline } from "@/components/shared/AnimatedHeadline";

const protocolSteps = [
  {
    step: "01",
    title: "Week 1 — Calibration",
    body: "Map your stack, match your Pod, run the final technical alignment session.",
  },
  {
    step: "02",
    title: "Week 2 — Security Provisioning",
    body: "Pod locked. Encrypted hardware provisioned. MDM integrated. Zero-trust environment established.",
  },
  {
    step: "03",
    title: "Week 3 — Sovereign Integration",
    body: "Pod is live in Jira and Slack, assumes sprint capacity, and pushes the first PR to your main branch.",
  },
] as const;

const stepVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stepsContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export function ProtocolSection() {
  const headRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLOListElement>(null);
  const reduced = useReducedMotion();
  const headInView = useInView(headRef, { once: true, margin: "-10% 0px" });
  const stepsInView = useInView(stepsRef, { once: true, margin: "-10% 0px" });

  return (
    <section className="abet-surface-dark border-b border-[var(--border-on-dark)]">
      <div className="abet-section-content mx-auto max-w-[min(100%,88rem)] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">

        <motion.div
          ref={headRef}
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionEyebrow onDark>The operation</SectionEyebrow>
        </motion.div>

        <AnimatedHeadline
          as="h2"
          delay={0.05}
          className="mt-5 text-[clamp(2.6rem,6vw,5rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-white"
        >
          Stop Recruiting. Start Provisioning.
        </AnimatedHeadline>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-lg text-stone-400 sm:text-xl"
        >
          From contract signature to sovereign code in three weeks.
        </motion.p>

        <motion.div
          ref={headRef}
          className="mt-10 flex flex-wrap gap-4"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
        >
          <motion.a
            href="/#protocol"
            className="abet-accent-cta inline-flex h-12 items-center rounded-full px-7 text-sm font-semibold"
            whileHover={reduced ? undefined : { scale: 1.03 }}
            whileTap={reduced ? undefined : { scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 22 }}
          >
            Initiate the 21-Day Protocol
          </motion.a>
          <motion.a
            href="/the-paas-model"
            className="inline-flex h-12 items-center rounded-full border border-white/20 px-7 text-sm font-semibold text-white"
            whileHover={reduced ? undefined : { borderColor: "rgba(255,255,255,0.4)", backgroundColor: "rgba(255,255,255,0.06)", scale: 1.02 }}
            whileTap={reduced ? undefined : { scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 22 }}
          >
            See the PaaS model
          </motion.a>
        </motion.div>

        <motion.ol
          ref={stepsRef}
          id="protocol"
          className="mt-20 grid gap-4 scroll-mt-20 lg:grid-cols-3"
          variants={stepsContainerVariants}
          initial={reduced ? false : "hidden"}
          animate={stepsInView ? "visible" : "hidden"}
        >
          {protocolSteps.map((item) => (
            <motion.li
              key={item.step}
              variants={stepVariants}
              className="flex flex-col rounded-2xl border border-white/10 bg-[var(--hero-surface-elevated)]/70 p-8 sm:p-9"
            >
              <span className="font-mono text-xs font-semibold text-stone-400">{item.step}</span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-stone-400">{item.body}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
