import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

const problems = [
  {
    title: "Missed Out-of-Hours Enquiries",
    text: "Customers browse vehicles when dealerships are closed. Many enquiries never receive an immediate response."
  },
  {
    title: "Slow Response Times",
    text: "Modern buyers expect answers instantly. Delayed engagement reduces conversion rates."
  },
  {
    title: "Finance Questions Go Unanswered",
    text: "Potential buyers often leave before speaking to a salesperson about finance options."
  },
  {
    title: "Part Exchange Opportunities Lost",
    text: "Incomplete information prevents dealerships from qualifying valuable part exchange opportunities."
  },
  {
    title: "Sales Teams Are Busy",
    text: "Staff cannot always respond immediately while managing customers, deliveries and administration."
  },
  {
    title: "Website Traffic Is Wasted",
    text: "Dealers invest heavily in stock, advertising and preparation, yet many website visitors never convert."
  }
];

export default function BenefitsGrid() {
  return (
    <Section>
      <SectionHeader
        eyebrow="The Problem"
        title="Most Dealership Websites Lose Potential Customers Every Day"
        text="Independent dealers invest heavily in stock, preparation, advertising and staff. Yet many potential customers leave without ever becoming a qualified sales opportunity."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {problems.map((problem) => (
          <Card key={problem.title} className="p-6">
            <h3 className="font-heading text-xl font-bold text-white">
              {problem.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-brand-muted">
              {problem.text}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}