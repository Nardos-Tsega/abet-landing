import type { ReactNode } from "react";

type MarketingSectionProps = {
  id?: string;
  tone?: "light" | "dark" | "dark-alt";
  className?: string;
  contentClassName?: string;
  children: ReactNode;
  "aria-labelledby"?: string;
  "aria-label"?: string;
  disableSticky?: boolean;
};

const toneClasses = {
  light: "bg-[var(--page-canvas)] text-[var(--foreground)]",
  dark: "abet-surface-dark border border-[var(--border-on-dark)]",
  "dark-alt": "abet-surface-dark-alt border border-[var(--border-on-dark)]",
} as const;

export function MarketingSection({
  id,
  tone = "light",
  className = "",
  contentClassName = "",
  disableSticky = false,
  children,
  ...aria
}: MarketingSectionProps) {
  const isDark = tone === "dark" || tone === "dark-alt";

  if (!isDark) {
    return (
      <section id={id} className={`relative z-10 ${toneClasses[tone]} ${className}`.trim()} {...aria}>
        <div
          className={`abet-section-content mx-auto max-w-[min(100%,88rem)] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 ${contentClassName}`.trim()}
        >
          {children}
        </div>
      </section>
    );
  }

  if (disableSticky) {
    return (
      <div className="flex w-full flex-col px-3 pb-[max(0.5rem,env(safe-area-inset-bottom,0px))] pt-2 pl-[max(0.75rem,env(safe-area-inset-left,0px))] pr-[max(0.75rem,env(safe-area-inset-right,0px))] sm:px-5 sm:pb-5 sm:pt-4 sm:pl-5 sm:pr-5 md:px-7 lg:px-10 lg:pb-6">
        <section id={id} className={`mx-auto w-full max-w-[min(100%,88rem)] relative overflow-hidden rounded-xl shadow-[0_24px_80px_-12px_rgba(0,6,38,0.45)] sm:rounded-[2rem] md:rounded-[2.75rem] lg:rounded-[3rem] ${toneClasses[tone]} ${className}`.trim()} {...aria}>
          <div
            className={`abet-section-content w-full px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 ${contentClassName}`.trim()}
          >
            {children}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="sticky top-0 z-10 flex min-h-[100svh] w-full flex-col bg-[var(--page-canvas)] px-3 pb-[max(0.5rem,env(safe-area-inset-bottom,0px))] pt-2 pl-[max(0.75rem,env(safe-area-inset-left,0px))] pr-[max(0.75rem,env(safe-area-inset-right,0px))] sm:px-5 sm:pb-5 sm:pt-4 sm:pl-5 sm:pr-5 md:px-7 lg:px-10 lg:pb-6">
      <section id={id} className={`mx-auto w-full max-w-[min(100%,88rem)] relative overflow-hidden rounded-xl shadow-[0_24px_80px_-12px_rgba(0,6,38,0.45)] sm:rounded-[2rem] md:rounded-[2.75rem] lg:rounded-[3rem] ${toneClasses[tone]} ${className}`.trim()} {...aria}>
        <div
          className={`abet-section-content w-full px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 ${contentClassName}`.trim()}
        >
          {children}
        </div>
      </section>
    </div>
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
