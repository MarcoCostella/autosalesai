import Section from "@/components/layout/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";

export default function CaseStudyPreview() {
  return (
    <Section className="bg-brand-charcoal/30">
      <SectionHeader
        eyebrow="Case Study"
        title="Trusted By Forward-Thinking Dealerships"
      />

      <Card>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
          The Dealership
        </p>

        <blockquote className="mt-5 font-heading text-2xl font-bold leading-snug md:text-4xl">
          “The AI assistant behaves much more like a member of the sales team
          than a traditional chatbot.”
        </blockquote>

        <p className="mt-5 text-brand-muted">
          Ray Bishop, Owner, The Dealership
        </p>

        <p className="mt-5 text-brand-muted">
          “The AI assistant provides a far more professional customer experience
          than our previous website chat solution.”
        </p>

        <Button href="/case-studies/the-dealership" className="mt-8">
          Read Case Study
        </Button>
      </Card>
    </Section>
  );
}