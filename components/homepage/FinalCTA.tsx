import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import BrandName from "@/components/ui/BrandName";

export default function FinalCTA({
  title,
  text
}: {
  title?: React.ReactNode;
  text?: React.ReactNode;
}) {
  const defaultTitle = (
    <>
      Ready To See <BrandName /> In Action?
    </>
  );

  const defaultText = (
    <>
      Book a personalised demonstration and see how <BrandName /> can help your
      dealership capture more qualified enquiries.
    </>
  );

  return (
    <Section>
      <div className="border border-brand-gold/20 bg-gradient-to-br from-brand-gold/15 to-white/[0.03] p-10 text-center md:p-16">
        <h2 className="font-heading text-4xl font-bold leading-[1.08] tracking-[-0.05em] md:text-6xl">
          {title ?? defaultTitle}
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-brand-muted">
          {text ?? defaultText}
        </p>

        <Button href="/book-demo" className="mt-10">
          Book A Demo
        </Button>
      </div>
    </Section>
  );
}