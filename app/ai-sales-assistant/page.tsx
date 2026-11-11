import HeroSection from "@/components/homepage/HeroSection";
import OutcomeBar from "@/components/homepage/OutcomeBar";
import BenefitsGrid from "@/components/homepage/BenefitsGrid";
import InteractiveDemo from "@/components/demo/InteractiveDemo";
import Section from "@/components/layout/Section";
import MarketPreview from "@/components/homepage/MarketPreview";
import CaseStudyPreview from "@/components/homepage/CaseStudyPreview";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OutcomeBar />
      <BenefitsGrid />
      <Section id="demo" className="scroll-mt-40 bg-[#020506]">
        <InteractiveDemo />
      </Section>
      <MarketPreview />
      <CaseStudyPreview />
    </>
  );
}