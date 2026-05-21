import { HeroGraphic } from "./HeroGraphic";
import { HeroText } from "./HeroText";
import { LogoCloud } from "./LogoCloud";

type HeroProps = {
  className?: string;
};

export function Hero({ className }: HeroProps) {
  return (
    <section
      className={`flex min-h-svh w-full flex-col bg-[var(--page-canvas)] ${className ?? ""}`}
    >
      {/* Spacer matching fixed navbar height so hero content isn't obscured */}
      <div className="h-14 shrink-0 sm:h-[3.75rem] md:h-16" aria-hidden />
      <div className="flex min-h-0 flex-1 flex-col px-2 pb-[max(0.5rem,env(safe-area-inset-bottom,0px))] pt-2 pl-[max(0.5rem,env(safe-area-inset-left,0px))] pr-[max(0.5rem,env(safe-area-inset-right,0px))] sm:pb-3 lg:pb-5">
        <div className="mx-auto flex min-h-0 w-full max-w-[min(100%,88rem)] flex-1 flex-col gap-3 sm:gap-4 lg:gap-5">
          <div
            className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-3xl shadow-[0_24px_80px_-12px_rgba(0,6,38,0.45)]"
            style={{
              backgroundColor: "var(--hero-surface)",
              backgroundImage: `
                radial-gradient(ellipse 95% 62% at 72% 10%, var(--accent-glow-soft), transparent 54%),
                linear-gradient(165deg, #020a38 0%, var(--hero-surface) 38%, #000318 72%, #00040f 100%)
              `,
            }}
          >
            <div className="grid min-h-0 flex-1 grid-cols-1 grid-rows-[auto_minmax(0,1fr)] bg-transparent md:grid-cols-2 md:grid-rows-1">
              <div className="flex min-h-0 items-center bg-transparent px-4 py-6 sm:px-8 sm:py-10 md:h-full md:min-h-0 md:py-8 lg:px-12 lg:py-14 xl:px-14">
                <HeroText />
              </div>
              <div className="relative flex h-full min-h-[13rem] flex-1 bg-transparent sm:min-h-[15rem] md:min-h-0">
                <HeroGraphic />
              </div>
            </div>
          </div>
          <div className="shrink-0">
            <LogoCloud />
          </div>
        </div>
      </div>
    </section>
  );
}
