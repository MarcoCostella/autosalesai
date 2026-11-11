import type { LeadFields } from "@/lib/demo-data";

const fields = ["Customer", "Preferred contact", "Vehicle of interest", "Requirements", "Budget", "Buying timeframe", "Part exchange", "Reported condition", "Requested day", "Visit purpose", "Requested viewing", "Dealer note", "Next action"];

export default function LeadSummaryCard({ summary, complete }: { summary: LeadFields; complete: boolean }) {
  const conversationSummary = [summary["Vehicle of interest"], summary["Buying timeframe"], summary["Requested viewing"], summary["Part exchange"]].filter(Boolean).join(". ");
  return (
    <aside aria-labelledby="lead-summary-heading" className="rounded-2xl border border-white/15 bg-[#080e11] p-5 md:p-6">
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5B800]">What your dealership receives</p>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
        <h3 id="lead-summary-heading" className="text-xl font-bold text-white">Dealer lead summary</h3>
        <span className={`rounded-full px-3 py-1 text-[10px] font-semibold ${complete ? "bg-emerald-400/10 text-emerald-300" : "bg-[#F5B800]/10 text-[#F5B800]"}`}>{complete ? "Example ready" : "Building enquiry"}</span>
      </div>
      <dl className="divide-y divide-white/10">
        {fields.filter((field) => summary[field] || ["Customer", "Preferred contact", "Vehicle of interest", "Buying timeframe", "Requested viewing"].includes(field)).map((field) => (
          <div key={field} className="py-3"><dt className="text-[10px] uppercase tracking-[0.12em] text-white/45">{field}</dt><dd className={`mt-1 text-sm leading-6 ${summary[field] ? "text-white/90" : "italic text-white/35"}`}>{summary[field] || "Not captured yet"}</dd></div>
        ))}
      </dl>
      {complete && <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4"><h4 className="text-xs font-bold text-emerald-300">Conversation summary</h4><p className="mt-2 text-sm leading-6 text-white/75">{`${conversationSummary}.`}</p></div>}
      <p className="mt-5 text-xs leading-5 text-white/45">Demonstration only. No enquiry is sent, no appointment is booked and no customer data is collected.</p>
    </aside>
  );
}
