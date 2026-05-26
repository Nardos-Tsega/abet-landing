import { HeroMissionScroll } from "@/components/sections/HeroMissionScroll";
import { HomeOverview } from "@/components/sections/HomeOverview";

export default function Home() {
  return (
    <div id="main" className="flex min-h-svh w-full flex-1 flex-col bg-[var(--page-canvas)] font-sans">
      <HeroMissionScroll />
      <HomeOverview />
    </div>
  );
}
