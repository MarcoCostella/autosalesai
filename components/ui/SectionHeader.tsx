import Badge from "./Badge";

export default function SectionHeader({
  eyebrow,
  title,
  text,
  align = "left"
}: {
  eyebrow?: string;
  title: React.ReactNode;
  text?: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`mb-12 max-w-[900px] ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow && <Badge>{eyebrow}</Badge>}

      <h2 className="mt-8 font-heading text-[36px] font-bold leading-[1.08] tracking-[-0.05em] text-white md:text-[52px]">
        {title}
      </h2>

      {text && (
        <p className="mt-6 max-w-[760px] text-[19px] leading-[1.65] tracking-[-0.025em] text-brand-muted">
          {text}
        </p>
      )}
    </div>
  );
}