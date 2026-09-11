type MetricCardProps = {
  label: string;
  value: string;
  change?: string;
  positive?: boolean;
};

export default function MetricCard({
  label,
  value,
  change,
  positive = true
}: MetricCardProps) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-[#101b2e] p-5 shadow-[0_10px_35px_rgba(0,0,0,0.16)]">
      <p className="text-[11px] font-medium text-slate-400">
        {label}
      </p>

      <p className="mt-3 font-heading text-[26px] font-bold tracking-[-0.04em] text-white">
        {value}
      </p>

      {change && (
        <p
          className={`mt-2 text-[10px] font-semibold ${
            positive ? "text-green-400" : "text-red-400"
          }`}
        >
          {change}
          <span className="ml-1 text-slate-500">vs yesterday</span>
        </p>
      )}
    </div>
  );
}