import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import BrandName from "@/components/ui/BrandName";

export default function AboutPage() {
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="About AutoSalesAI"
          title="Built For Independent Dealers."
          text={
            <>
              <BrandName /> was created to help independent dealerships access
              practical AI tools that improve sales, stock decisions and
              operational performance.
            </>
          }
        />
      </Section>

      <Section className="bg-brand-charcoal/30">
        <SectionHeader
          title="Our Mission"
          text="To provide independent dealerships with practical AI solutions that increase sales performance, improve efficiency and support better commercial decision-making."
        />
      </Section>

      <Section>
        <SectionHeader
          title="Platform Vision"
          text={
            <>
              <BrandName /> is being built as a long-term platform that combines
              customer intelligence, market intelligence and decision support
              into a single operating layer for independent automotive retailers.
            </>
          }
        />

        <div className="grid gap-5 md:grid-cols-4">
          {[
            "Customer Intelligence",
            "Market Intelligence",
            "Decision Intelligence",
            "Dealer Operating System"
          ].map((item) => (
            <Card key={item}>{item}</Card>
          ))}
        </div>
      </Section>
    </>
  );
}