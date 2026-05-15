import type { CSSProperties } from "react";

/** Shared square grid from the hero graphic panel (HeroGraphic). */

export const SURFACE_GRID_CELL_PX = 72;

export const SURFACE_GRID_LINE = "rgba(148, 190, 255, 0.15)";

/** Grid visible in the center, soft fade toward edges */
export const SURFACE_GRID_MASK =
  "radial-gradient(ellipse 76% 72% at 50% 48%, #fff 0%, rgba(255,255,255,0.58) 34%, rgba(255,255,255,0.26) 58%, transparent 78%)";

export function surfaceGridBackgroundStyle(): CSSProperties {
  return {
    backgroundImage: `
      linear-gradient(to right, ${SURFACE_GRID_LINE} 1px, transparent 1px),
      linear-gradient(to bottom, ${SURFACE_GRID_LINE} 1px, transparent 1px)
    `,
    backgroundSize: `${SURFACE_GRID_CELL_PX}px ${SURFACE_GRID_CELL_PX}px, ${SURFACE_GRID_CELL_PX}px ${SURFACE_GRID_CELL_PX}px`,
    backgroundRepeat: "repeat, repeat",
    WebkitMaskImage: SURFACE_GRID_MASK,
    maskImage: SURFACE_GRID_MASK,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskSize: "100% 100%",
    maskSize: "100% 100%",
  };
}
