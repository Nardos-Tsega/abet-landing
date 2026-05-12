import { BootSequenceIcon, PodUnitIcon, SovereignStackIcon } from "./icons";

const tiles = [
  {
    label: "3-Person Pod",
    sub: "Lead + 2 Seniors",
    Icon: PodUnitIcon,
  },
  {
    label: "Sovereign Stack",
    sub: "Your infra edge",
    Icon: SovereignStackIcon,
  },
  {
    label: "21-Day Boot",
    sub: "Handoff SLA",
    Icon: BootSequenceIcon,
  },
] as const;

type PodInfraTilesProps = {
  /** Default: horizontal on small screens, column on lg+. Use "stack" for overlap layout (always vertical). */
  layout?: "default" | "stack";
};

export function PodInfraTiles({ layout = "default" }: PodInfraTilesProps) {
  const direction =
    layout === "stack"
      ? "flex flex-col"
      : "flex flex-row lg:flex-col";

  return (
    <div className={`${direction} gap-2`}>
      {tiles.map(({ label, sub, Icon }) => (
        <div
          key={label}
          className="flex h-[4.5rem] w-[4.5rem] flex-col items-center justify-center gap-0.5 rounded-2xl border border-white/[0.08] bg-[var(--hero-surface-elevated)] text-[9px] font-medium text-stone-300 shadow-lg shadow-black/30 sm:h-[5rem] sm:w-[5rem] sm:text-[10px]"
        >
          <Icon className="shrink-0 text-amber-400/90" />
          <span className="px-1 text-center leading-tight text-stone-200">
            {label}
          </span>
          <span className="px-1 text-center text-[8px] font-normal leading-tight text-stone-500 sm:text-[9px]">
            {sub}
          </span>
        </div>
      ))}
    </div>
  );
}
