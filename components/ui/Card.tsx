export default function Card({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border border-brand-gold/20 bg-[#0b0b0b] p-7 transition hover:border-brand-gold/50 ${className}`}
    >
      {children}
    </div>
  );
}