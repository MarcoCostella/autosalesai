import { pageMetadata } from "@/lib/seo";
import HeroSection from "@/components/homepage/HeroSection";
import OutcomeBar from "@/components/homepage/OutcomeBar";
import BenefitsGrid from "@/components/homepage/BenefitsGrid";
import InteractiveDemo from "@/components/demo/InteractiveDemo";
import Section from "@/components/layout/Section";
import MarketPreview from "@/components/homepage/MarketPreview";
import CaseStudyPreview from "@/components/homepage/CaseStudyPreview";

export const metadata = pageMetadata("AI Sales Assistant for Car Dealers | AutoSalesAI","Explore an AI sales assistant for UK car dealerships: vehicle enquiries, buyer qualification, part exchange and viewing requests. Try the guided demonstration.","/ai-sales-assistant");

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