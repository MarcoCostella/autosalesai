import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import FinalCTA from "@/components/homepage/FinalCTA";
import BrandName from "@/components/ui/BrandName";

export default function TheDealershipCaseStudyPage() {
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Case Study • AI Sales Assistant • Independent Dealer"
          title="Replacing A Generic Chatbot With An AI Sales Assistant Built For Automotive Retail"
          text="The Dealership is an independent used car dealership stocking approximately 45–50 vehicles."
        />

        <Card>
          <div className="grid gap-4 md:grid-cols-5">
            {[
              "The Dealership",
              "45–50 Vehicles",
              "Website by 67 Degrees",
              "Previous: Visitor Chat",
              "Deployment: 5 Days"
            ].map((item) => (
              <p key={item} className="text-brand-muted">
                {item}
              </p>
            ))}
          </div>
        </Card>
      </Section>

      <Section className="bg-brand-charcoal/30">
        <SectionHeader
          title="The Challenge"
          text="Visitor Chat was not intuitive, did not search inventory effectively, provided stale responses and behaved like a traditional chatbot rather than a member of the sales team."
        />
      </Section>

      <Section>
        <SectionHeader
          title="The Solution"
          text={
            <>
              <BrandName /> deployed a TIDIO-powered AI Sales Assistant
              configured around dealership sales processes and customer enquiry
              workflows.
            </>
          }
        />

        <div className="grid gap-5 md:grid-cols-3">
          {[
            "Vehicle Enquiries",
            "Finance Conversations",
            "Part Exchange Qualification",
            "Lead Capture",
            "Out-Of-Hours Engagement"
          ].map((item) => (
            <Card key={item}>{item}</Card>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-charcoal/30">
        <SectionHeader
          title="Implementation"
          text="Requirements gathering, conversation design, AI configuration, testing, refinement, user acceptance testing and go-live support. Deployment was completed in just 5 days with no disruption to existing dealership operations."
        />
      </Section>

      <Section>
        <SectionHeader title="Dealer Feedback" />

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <blockquote className="font-heading text-2xl font-bold">
              “The AI assistant behaves much more like a member of the sales
              team than a traditional chatbot.”
            </blockquote>

            <p className="mt-5 text-brand-muted">
              Ray Bishop, Owner, The Dealership
            </p>
          </Card>

          <Card>
            <blockquote className="font-heading text-2xl font-bold">
              “The AI assistant provides a far more professional customer
              experience than our previous website chat solution.”
            </blockquote>

            <p className="mt-5 text-brand-muted">
              Ray Bishop, Owner, The Dealership
            </p>
          </Card>
        </div>
      </Section>

      <FinalCTA
        title="Want This For Your Dealership?"
        text={
          <>
            See how <BrandName /> can help your dealership capture more
            enquiries, qualify more buyers and deliver a more professional
            customer experience.
          </>
        }
      />
    </>
  );
}