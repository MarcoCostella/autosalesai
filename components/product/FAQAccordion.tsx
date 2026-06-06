const faqs = [
  ["Does AutoSalesAI Assist replace my sales team?", "No. It supports your sales team by handling initial enquiries and collecting information before handover."],
  ["Does it work outside business hours?", "Yes. AutoSalesAI Assist is available 24 hours a day, 7 days a week."],
  ["Can it answer questions about my vehicles?", "Yes. It can be configured using your dealership information and stock data."],
  ["What happens when a customer wants to speak to someone?", "The enquiry can be escalated to your team for follow-up."],
  ["Is it difficult to implement?", "No. Most deployments can be completed quickly with minimal disruption."]
];

export default function FAQAccordion() {
  return (
    <div className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-brand-charcoal">
      {faqs.map(([q, a]) => (
        <details key={q} className="group p-6">
          <summary className="cursor-pointer list-none font-heading text-lg font-bold">{q}</summary>
          <p className="mt-3 text-brand-muted">{a}</p>
        </details>
      ))}
    </div>
  );
}
