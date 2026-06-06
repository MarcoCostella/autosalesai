import Card from "@/components/ui/Card";

export default function LeadSummaryCard({
  summary
}: {
  summary: { label: string; value: string }[];
}) {
  return (
    <Card className="h-full">
      <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
        <h3 className="font-heading text-2xl font-bold text-white">
          Qualified Lead
        </h3>

        <span className="border border-brand-gold bg-brand-gold/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-gold">
          Captured
        </span>
      </div>

      <div className="space-y-5">
        {summary.map((item) => (
          <div
            key={item.label}
            className="border-b border-white/10 pb-4 last:border-0"
          >
            <p className="text-[11px] uppercase tracking-[0.20em] text-brand-muted">
              {item.label}
            </p>

            <p className="mt-2 text-base font-semibold text-white">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}