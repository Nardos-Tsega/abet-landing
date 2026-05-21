import { SiteFooter } from "@/components/layout/SiteFooter";
import { NarrativeSections } from "@/components/sections/marketing/NarrativeSection";
import { StatCallout } from "@/components/sections/marketing/StatCallout";
import { CaseStudyCarousel } from "@/components/sections/marketing/CaseStudyCarousel";
import { DomainStackedCards } from "@/components/sections/marketing/DomainStackedCards";
import { TrustTiles } from "@/components/sections/marketing/TrustTiles";
import { ProtocolScrollToggle } from "@/components/sections/ProtocolScrollToggle";

export function HomeOverview() {
  return (
    <div className="w-full bg-[var(--page-canvas)] text-[var(--foreground)]">

      {/* 3. The Friction + 5. The Product */}
      <NarrativeSections to={2} />

      {/* 6. Active Deployments */}
      <CaseStudyCarousel />


      {/* 7. The Domains */}
      <DomainStackedCards />

      {/* 8. The Edge */}
      <NarrativeSections from={2} />

      {/* 9. The 21-Day Provisioning Protocol — stat intro + scroll toggle */}
      <StatCallout />
      <ProtocolScrollToggle />

      {/* 10. Trust & Security */}
      <TrustTiles />

      {/* 11. Footer */}
      <SiteFooter />
    </div>
  );
}
