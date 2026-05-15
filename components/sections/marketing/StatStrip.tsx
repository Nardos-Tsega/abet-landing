import { MarketingSection, SectionEyebrow } from "@/components/layout/MarketingSection";
import { statStrip } from "@/lib/home-marketing";

export function StatStrip() {
  return (
    <MarketingSection tone="dark" contentClassName="!py-12 sm:!py-14" aria-label="Key provisioning facts">
      <div className="grid gap-10 sm:grid-cols-3 sm:gap-0">
        {statStrip.map((item, i) => (
          <div
            key={item.label}
            className={`text-center sm:px-6 sm:text-left ${i > 0 ? "sm:border-l sm:border-white/10" : ""}`}
          >
            <SectionEyebrow onDark>{item.label}</SectionEyebrow>
            <p className="mt-3 flex flex-wrap items-baseline justify-center gap-1 sm:justify-start">
              <span className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                {item.value}
              </span>
              <span className="text-lg font-medium text-stone-400">{item.unit}</span>
            </p>
            <p className="mt-2 text-sm text-stone-500">{item.note}</p>
          </div>
        ))}
      </div>
    </MarketingSection>
  );
}
