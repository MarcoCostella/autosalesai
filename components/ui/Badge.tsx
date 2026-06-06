export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex border border-brand-gold/60 px-5 py-3 text-[12px] font-bold uppercase tracking-[0.35em] text-brand-gold">
      {children}
    </span>
  );
}