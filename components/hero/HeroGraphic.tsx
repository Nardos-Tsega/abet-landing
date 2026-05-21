import { SurfaceGrid } from "@/components/shared/SurfaceGrid";
import { OutcomeCard } from "./OutcomeCard";
import { PodInfraTiles } from "./PodInfraTiles";
import { ProvisionTerminal } from "./ProvisionTerminal";

export function HeroGraphic() {
  return (
    <div className="relative h-full min-h-0 w-full max-w-full overflow-x-hidden overflow-y-visible bg-transparent">
      <SurfaceGrid />

      <div className="relative z-10 flex h-full min-h-0 w-full max-w-full items-center justify-center px-3 py-5 sm:px-6 sm:py-8 md:px-5 md:py-6 lg:px-12 lg:py-14">
        <div className="flex w-full max-w-full flex-col items-center justify-center gap-4 pb-6 md:flex-row md:items-center md:gap-5 md:pb-8 lg:items-start lg:justify-center lg:gap-6 lg:pb-24">
          <div className="hidden shrink-0 md:block md:pt-0">
            <PodInfraTiles layout="stack" />
          </div>

          <div className="relative z-10 mx-auto flex w-full min-w-0 max-w-[min(100%,24rem)] shrink-0 flex-col md:max-w-none md:flex-1">
            <ProvisionTerminal />
            {/* <div className="hidden md:block">
              <OutcomeCard />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
