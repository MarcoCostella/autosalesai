import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Section from "@/components/layout/Section";

export default function ProductHero({
  eyebrow,
  title,
  text,
  primaryCta = "Book A Demo",
  secondaryCta
}: {
  eyebrow: string;
  title: React.ReactNode;
  text: React.ReactNode;
  primaryCta?: string;
  secondaryCta?: string;
}) {
  return (
    <Section className="border-b border-brand-gold/30 bg-brand-black">
      <div className="mx-auto max-w-[1100px] py-16">
        <Badge>{eyebrow}</Badge>

        <h1 className="mt-10 max-w-4xl font-heading text-[48px] font-bold leading-[1.05] tracking-[-0.055em] text-white md:text-[64px]">
          {title}
        </h1>

        <div className="mt-9 border-l border-brand-gold pl-6">
          <p className="max-w-[720px] text-[24px] font-normal leading-[1.45] tracking-[-0.035em] text-brand-muted">
            {text}
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-5 sm:flex-row">
          <Button href="/book-demo">{primaryCta}</Button>

          {secondaryCta && (
            <Button href="#demo" variant="secondary">
              {secondaryCta}
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}