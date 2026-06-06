import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function CaseStudiesPage() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Case Studies"
        title="Real Dealerships. Real Implementations."
        text="See how AutoSalesAI is helping independent dealerships improve customer engagement and lead capture."
      />
      <Card>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">Featured Case Study</p>
        <h2 className="mt-4 font-heading text-3xl font-bold">The Dealership</h2>
        <div className="mt-6 grid gap-4 text-brand-muted md:grid-cols-4">
          <p>Independent used car dealership</p>
          <p>45–50 vehicles</p>
          <p>Previous solution: Visitor Chat</p>
          <p>Deployment time: 5 days</p>
        </div>
        <Button href="/case-studies/the-dealership" className="mt-8">Read Case Study</Button>
      </Card>
    </Section>
  );
}
