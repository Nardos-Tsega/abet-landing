import { HeroMissionScroll } from "@/components/sections/HeroMissionScroll";

export default function Home() {
  return (
    <div className="flex min-h-svh w-full flex-1 flex-col bg-[var(--page-canvas)] font-sans">
      <HeroMissionScroll />
    </div>
  );
}
