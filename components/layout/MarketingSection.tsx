import type { ReactNode } from "react";

type MarketingSectionProps = {
  id?: string;
  tone?: "light" | "dark" | "dark-alt";
  className?: string;
  contentClassName?: string;
  children: ReactNode;
  "aria-labelledby"?: string;
  "aria-label"?: string;
};

const toneClasses = {
  light: "border-b border-[var(--border-subtle)] bg-[var(--page-canvas)] text-[var(--foreground)]",
  dark: "abet-surface-dark border-b border-[var(--border-on-dark)]",
  "dark-alt": "abet-surface-dark-alt border-b border-[var(--border-on-dark)]",
} as const;

export function MarketingSection({
  id,
  tone = "light",
  className = "",
  contentClassName = "",
  children,
  ...aria
}: MarketingSectionProps) {
  return (
    <section id={id} className={`${toneClasses[tone]} ${className}`.trim()} {...aria}>
      <div
        className={`abet-section-content mx-auto max-w-[min(100%,88rem)] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 ${contentClassName}`.trim()}
      >
        {children}
      </div>
    </section>
  );
}

export function SectionEyebrow({
  children,
  onDark = false,
}: {
  children: ReactNode;
  onDark?: boolean;
}) {
  return (
    <p
      className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${
        onDark ? "text-stone-400" : "text-stone-500"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionTitle({
  id,
  children,
  className = "",
  onDark = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  onDark?: boolean;
}) {
  return (
    <h2
      id={id}
      className={`mt-4 font-semibold tracking-[-0.03em] ${onDark ? "text-white" : "text-stone-950"} ${className}`.trim()}
    >
      {children}
    </h2>
  );
}

export function SectionLead({
  children,
  className = "",
  onDark = false,
}: {
  children: ReactNode;
  className?: string;
  onDark?: boolean;
}) {
  return (
    <p
      className={`mt-5 max-w-2xl text-base sm:text-lg ${
        onDark ? "text-stone-400" : "text-stone-600"
      } ${className}`.trim()}
    >
      {children}
    </p>
  );
}
