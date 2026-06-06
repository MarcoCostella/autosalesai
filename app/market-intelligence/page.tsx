import type { Metadata } from "next";
import ProductHero from "@/components/product/ProductHero";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import FinalCTA from "@/components/homepage/FinalCTA";
import BrandName from "@/components/ui/BrandName";

export const metadata: Metadata = {
  title: "Dealer Market Intelligence | AutoSalesAI",
  description:
    "AutoSalesAI Market is being built to help independent dealers make smarter acquisition, pricing and stock decisions."
};

const questions = [
  "What should I buy?",
  "What should I pay?",
  "What should I retail it for?",
  "How quickly should it sell?",
  "What margin exists?",
  "What risks should I avoid?"
];

const capabilities = [
  "Auction Intelligence",
  "Intelligent Retail Pricing",
  "Liquidity Analysis",
  "Margin Forecasting",
  "Risk Scoring",
  "Buy / Review / Avoid Recommendations"
];

export default function MarketIntelligencePage() {
  return (
    <>
      <ProductHero
        eyebrow="Market Intelligence • Pricing • Stock Decisions"
        title="Better Buying Decisions Start Before You Bid."
        text={
          <>
            <BrandName /> Market is being built to help independent dealers make
            smarter acquisition, pricing and margin decisions.
          </>
        }
        primaryCta="Join Early Access"
      />

      <Section>
        <SectionHeader
          title="Traditional Pricing Tools Only Tell Part Of The Story"
          text="Advertised prices do not always reflect margin, liquidity, condition, preparation costs or risk."
        />
      </Section>

      <Section className="bg-brand-charcoal/30">
        <SectionHeader
          eyebrow="Decision Support"
          title="What It Will Help Dealers Answer"
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {questions.map((q) => (
            <Card key={q}>{q}</Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Capabilities" title="Core Capabilities" />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <Card key={c}>{c}</Card>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-charcoal/30">
        <SectionHeader
          title="Intelligent Retail Pricing"
          text="Pricing recommendations will consider vehicle grade, mileage, specification, competitor activity, preparation costs, target margin and expected days to sell."
        />
      </Section>

      <FinalCTA
        title="Help Shape The Future Of Dealer Intelligence."
        text={
          <>
            Join the early access list for <BrandName /> Market.
          </>
        }
      />
    </>
  );
}