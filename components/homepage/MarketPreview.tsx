import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import BrandName from "@/components/ui/BrandName";

const features = [
  "Auction Intelligence",
  "Intelligent Retail Pricing",
  "Liquidity Analysis",
  "Margin Forecasting",
  "Risk Scoring"
];

export default function MarketPreview() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Coming Soon"
        title="Market Intelligence For Independent Dealers"
        text={
          <>
            Most pricing tools tell you what vehicles are advertised for.{" "}
            <BrandName /> Market is being built to help dealers understand what
            to buy, what to pay, what to retail it for and what risk exists.
          </>
        }
      />

      <div className="grid gap-4 md:grid-cols-5">
        {features.map((feature) => (
          <Card key={feature} className="p-5">
            <p className="font-semibold">{feature}</p>
          </Card>
        ))}
      </div>

      <Button href="/market-intelligence" className="mt-8">
        Join Early Access
      </Button>
    </Section>
  );
}
