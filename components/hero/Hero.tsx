import { HeroGraphic } from "./HeroGraphic";
import { HeroText } from "./HeroText";
import { LogoCloud } from "./LogoCloud";
import { Navbar } from "./Navbar";

type HeroProps = {
  className?: string;
};

export function Hero({ className }: HeroProps) {
  return (
    <section
      className={`flex min-h-svh w-full flex-col bg-[var(--page-canvas)] ${className ?? ""}`}
    >
      <Navbar />
      <div className="flex min-h-0 flex-1 flex-col px-3 pb-[max(0.5rem,env(safe-area-inset-bottom,0px))] pt-2 pl-[max(0.75rem,env(safe-area-inset-left,0px))] pr-[max(0.75rem,env(safe-area-inset-right,0px))] sm:px-5 sm:pb-5 sm:pt-4 sm:pl-5 sm:pr-5 md:px-7 lg:px-10 lg:pb-6">
        <div className="mx-auto flex min-h-0 w-full max-w-[min(100%,88rem)] flex-1 flex-col gap-3 sm:gap-4 lg:gap-5">
          <div
            className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl shadow-[0_24px_80px_-12px_rgba(0,6,38,0.45)] sm:rounded-[2rem] md:rounded-[2.75rem] lg:rounded-[3rem]"
            style={{
              backgroundColor: "#000626",
              backgroundImage: `
                radial-gradient(ellipse 95% 62% at 72% 10%, rgba(60, 77, 251, 0.14), transparent 54%),
                linear-gradient(165deg, #020a38 0%, #000626 38%, #000318 72%, #00040f 100%)
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
