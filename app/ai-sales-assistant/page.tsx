import type { Metadata } from "next";
import ProductHero from "@/components/product/ProductHero";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import ProcessSteps from "@/components/product/ProcessSteps";
import InteractiveDemo from "@/components/demo/InteractiveDemo";
import FAQAccordion from "@/components/product/FAQAccordion";
import FinalCTA from "@/components/homepage/FinalCTA";
import BrandName from "@/components/ui/BrandName";

export const metadata: Metadata = {
  title: "AI Sales Assistant for Car Dealers | AutoSalesAI",
  description:
    "Capture more dealership leads, qualify buyers and handle finance and part exchange enquiries with AutoSalesAI Assist."
};

const capabilities = [
  "Vehicle Enquiries",
  "Finance Qualification",
  "Part Exchange Capture",
  "Appointment Requests",
  "Lead Qualification",
  "Human Escalation"
];

const benefits = [
  "Capture More Leads",
  "Improve Lead Quality",
  "Increase Finance Opportunities",
  "Capture More Part Exchanges",
  "Reduce Admin",
  "Never Close"
];

export default function AISalesAssistantPage() {
  return (
    <>
      <ProductHero
        eyebrow="AI Sales Assistant • Lead Capture • Buyer Qualification"
        title="Never Miss Another Lead."
        text={
          <>
            <BrandName /> Assist engages website visitors instantly, answers
            common sales enquiries, qualifies buyers and captures valuable
            opportunities 24 hours a day, 7 days a week.
          </>
        }
        secondaryCta="See It In Action"
      />

      <Section>
        <SectionHeader
          eyebrow="The Problem"
          title="Most Dealership Websites Lose Potential Customers Every Day"
          text="Dealers invest heavily in traffic, advertising, preparation and staff, but still lose enquiries when customers get slow, incomplete or generic responses."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Nobody responds immediately",
            "Customers visit outside business hours",
            "Finance questions go unanswered",
            "Part exchange information is incomplete",
            "Sales teams are busy",
            "Every missed enquiry is a potential lost sale"
          ].map((item) => (
            <Card key={item}>{item}</Card>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-charcoal/30">
        <SectionHeader
          eyebrow="The Solution"
          title={
            <>
              Meet <BrandName /> Assist
            </>
          }
          text="A digital member of your sales team, configured specifically for dealership sales processes. It understands vehicle enquiries, finance, part exchanges, viewings and callbacks."
        />
      </Section>

      <Section>
        <SectionHeader
          eyebrow="How It Works"
          title="Simple For Customers. Powerful For Dealerships."
        />

        <ProcessSteps
          steps={[
            "Visitor arrives on your website",
            "AutoSalesAI engages instantly",
            "The enquiry is qualified",
            "A structured lead is delivered",
            "Your team follows up"
          ]}
        />
      </Section>

      <Section className="bg-brand-charcoal/30">
        <SectionHeader
          eyebrow="Capabilities"
          title={
            <>
              What <BrandName /> Assist Can Do
            </>
          }
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <Card key={item}>
              <h3 className="font-heading text-xl font-bold">{item}</h3>
              <p className="mt-3 text-sm leading-7 text-brand-muted">
                Configured around dealership workflows to capture better sales
                opportunities.
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <section id="demo">
  <Section>
    <InteractiveDemo />
  </Section>
</section>

      <Section className="bg-brand-charcoal/30">
        <SectionHeader
          eyebrow="Qualified Leads"
          title="What A Qualified Lead Looks Like"
        />

        <Card>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["Customer", "John Smith"],
              ["Vehicle", "Audi A4 S Line"],
              ["Contact Number", "07400 123456"],
              ["Finance Interest", "Yes"],
              ["Monthly Budget", "£350/month"],
              ["Requested Action", "Arrange callback"]
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-xs uppercase tracking-widest text-brand-muted">
                  {label}
                </p>
                <p className="mt-1 font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      <Section>
        <SectionHeader eyebrow="Benefits" title="Business Benefits" />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <Card key={benefit}>{benefit}</Card>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-charcoal/30">
        <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" />
        <FAQAccordion />
      </Section>

      <FinalCTA
        title="Stop Losing Website Enquiries."
        text={
          <>
            See how <BrandName /> Assist can help your dealership capture,
            qualify and convert more sales opportunities.
          </>
        }
      />
    </>
  );
}