import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import DemoForm from "@/components/forms/DemoForm";
import ProcessSteps from "@/components/product/ProcessSteps";
import BrandName from "@/components/ui/BrandName";

export default function BookDemoPage() {
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Book Demo"
          title={
            <>
              Book A Personalised <BrandName /> Demo
            </>
          }
          text={
            <>
              See how <BrandName /> can help your dealership capture more
              leads, qualify buyers and prepare for smarter stock decisions.
            </>
          }
        />

        <DemoForm />
      </Section>

      <Section className="bg-brand-charcoal/30">
        <SectionHeader title="What Happens Next" />

        <ProcessSteps
          steps={[
            "We review your dealership website",
            "We understand your current enquiry process",
            "We demonstrate a tailored AutoSalesAI deployment",,
            "You receive an implementation plan"
          ]}
        />
      </Section>
    </>
  );
}