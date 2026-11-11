import Link from "next/link";
import { ArrowRight, ChartNoAxesCombined, MessageSquare, Check } from "lucide-react";

const solutions = [
  {
    name: "Market Intelligence",
    eyebrow: "Buy and price with confidence",
    description: "Understand the opportunity before you commit. Bring auction, valuation and profitability insights into your buying decisions.",
    benefits: ["Assess auction stock and acquisition opportunities", "Compare retail valuations and market position", "Plan target bids, profit and risk"],
    href: "/market-intelligence",
    action: "Explore Market Intelligence",
    icon: ChartNoAxesCombined,
    color: "#00BDF2",
  },
  {
    name: "AI Sales Assistant",
    eyebrow: "Turn interest into appointments",
    description: "Keep the conversation moving when buyers are ready. Support enquiries, qualify interest and help your team arrange the next step.",
    benefits: ["Respond to vehicle enquiries around the clock", "Understand buyer needs and recommend stock", "Arrange viewings and support follow-up"],
    href: "/ai-sales-assistant",
    action: "Explore AI Sales Assistant",
    icon: MessageSquare,
    color: "#F5B800",
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" aria-labelledby="solutions-heading" className="relative overflow-hidden border-t border-white/10 bg-[#020506] py-16 md:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,184,0,0.07),transparent_65%)]" />
      <div className="relative mx-auto max-w-[1280px] px-6 md:px-8 xl:px-10">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#F5B800]">The connected dealership</p>
          <h2 id="solutions-heading" className="mt-4 font-heading text-4xl font-bold leading-tight tracking-[-0.04em] text-white md:text-5xl">Two Solutions. One Platform.</h2>
          <p className="mt-5 text-base leading-7 text-white/70">Make stronger decisions before a vehicle reaches your forecourt. Keep buyers engaged once it does. AutoSalesAI supports both sides of your dealership.</p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {solutions.map((solution) => {
            const SolutionIcon = solution.icon;
            return (
              <article key={solution.name} className="flex flex-col rounded-2xl border border-white/15 bg-[#080e11] p-6 md:p-8">
                <div className="flex items-center gap-3" style={{ color: solution.color }}>
                  <SolutionIcon aria-hidden="true" size={26} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em]">{solution.eyebrow}</p>
                </div>
                <h3 className="mt-5 font-heading text-2xl font-bold tracking-[-0.03em] text-white md:text-3xl">{solution.name}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">{solution.description}</p>
                <ul className="mb-7 mt-6 space-y-3">
                  {solution.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-sm leading-6 text-white/85">
                      <Check aria-hidden="true" size={18} className="mt-1 shrink-0" style={{ color: solution.color }} />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link href={solution.href} className="mt-auto inline-flex min-h-11 items-center gap-2 self-start rounded-lg text-sm font-semibold underline-offset-4 transition hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4" style={{ color: solution.color }}>
                  {solution.action}<ArrowRight aria-hidden="true" size={17} className="shrink-0" />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.025] px-6 py-7 md:px-8">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.22em] text-white/50">One connected workflow</p>
          <ol className="mt-5 grid gap-4 text-center sm:grid-cols-3">
            {["Buy the right stock", "Price with confidence", "Convert more enquiries"].map((step, index) => (
              <li key={step} className="flex items-center justify-center gap-3 text-sm font-semibold text-white">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#F5B800]/40 text-xs text-[#F5B800]">{index + 1}</span>{step}
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 text-center">
          <h3 className="font-heading text-2xl font-bold tracking-[-0.03em] text-white md:text-3xl">See how AutoSalesAI fits your dealership.</h3>
          <p className="mx-auto mt-3 max-w-[580px] text-sm leading-7 text-white/65">Talk us through your stock, your sales process and your priorities. We’ll show you the capabilities that fit.</p>
          <Link href="/book-demo" className="mt-6 inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#F5B800] px-7 py-3 text-sm font-bold text-black transition hover:bg-[#ffd24d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B800]">Book a Demo<ArrowRight aria-hidden="true" size={18} /></Link>
        </div>
      </div>
    </section>
  );
}
