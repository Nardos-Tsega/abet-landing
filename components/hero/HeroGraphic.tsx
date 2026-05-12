import { OutcomeCard } from "./OutcomeCard";
import { PodInfraTiles } from "./PodInfraTiles";
import { ProvisionTerminal } from "./ProvisionTerminal";

/** Smaller cells = more grid lines across the same area */
const GRID_CELL = 72;

/** Brighter grid lines where the mask is strong (center); still 1px hairlines */
const GRID_LINE = "rgba(148, 190, 255, 0.15)";

/** Grid fades from center toward edges — slightly wider visible band, still soft at perimeter */
const GRID_MASK =
  "radial-gradient(ellipse 76% 72% at 50% 48%, #fff 0%, rgba(255,255,255,0.58) 34%, rgba(255,255,255,0.26) 58%, transparent 78%)";

export function HeroGraphic() {
  return (
    <div className="relative h-full min-h-0 w-full max-w-full overflow-x-hidden overflow-y-visible bg-transparent">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${GRID_LINE} 1px, transparent 1px),
            linear-gradient(to bottom, ${GRID_LINE} 1px, transparent 1px)
          `,
          backgroundSize: `${GRID_CELL}px ${GRID_CELL}px, ${GRID_CELL}px ${GRID_CELL}px`,
          backgroundRepeat: "repeat, repeat",
          WebkitMaskImage: GRID_MASK,
          maskImage: GRID_MASK,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
        }}
      />

      <div className="relative z-10 flex h-full min-h-0 w-full max-w-full items-center justify-center px-3 py-5 sm:px-6 sm:py-8 md:px-5 md:py-6 lg:px-12 lg:py-14">
        <div className="flex w-full max-w-full flex-col items-center justify-center gap-4 pb-6 md:flex-row md:items-center md:gap-5 md:pb-8 lg:items-start lg:justify-center lg:gap-6 lg:pb-24">
          <div className="hidden shrink-0 md:block md:pt-0">
            <PodInfraTiles layout="stack" />
          </div>

          <div className="relative z-10 mx-auto flex w-full min-w-0 max-w-[min(100%,24rem)] shrink-0 flex-col md:max-w-none md:flex-1">
            <ProvisionTerminal />
            <div className="hidden md:block">
              <OutcomeCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
