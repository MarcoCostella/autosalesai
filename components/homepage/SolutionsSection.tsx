import Section from "@/components/layout/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import BrandName from "@/components/ui/BrandName";

export default function SolutionsSection() {
  return (
    <Section id="solutions" className="bg-brand-charcoal/30">
      <SectionHeader
        align="center"
        eyebrow="Solutions"
        title="Two Solutions. One Platform."
        text="Start with lead conversion today. Build toward smarter market and stock decisions tomorrow."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
            Available Now
          </p>

          <h3 className="mt-4 font-heading text-3xl font-bold tracking-[-0.04em]">
            <BrandName /> Assist
          </h3>

          <p className="mt-4 text-brand-muted">
            AI Sales Assistant that converts website visitors into qualified
            dealership enquiries.
          </p>

          <Button href="/ai-sales-assistant" className="mt-8">
            Explore AI Sales Assistant
          </Button>
        </Card>

        <Card>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
            Coming Soon
          </p>

          <h3 className="mt-4 font-heading text-3xl font-bold tracking-[-0.04em]">
            <BrandName /> Market
          </h3>

          <p className="mt-4 text-brand-muted">
            Market intelligence to help dealers make smarter acquisition,
            pricing and stock decisions.
          </p>

          <Button href="/market-intelligence" variant="secondary" className="mt-8">
            Join Waitlist
          </Button>
        </Card>
      </div>
    </Section>
  );
}