export default function BrandName({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span className={`font-heading font-bold tracking-[-0.04em] ${className}`}>
      <span className="text-white">AutoSales</span>
      <span className="text-brand-gold">AI</span>
    </span>
  );
}