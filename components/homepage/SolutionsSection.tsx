import Link from "next/link";
import Image from "next/image";
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

        <section aria-labelledby="connected-workflow-heading" className="mt-8 overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-[#0d1a20] via-[#080e11] to-[#171507] p-5 md:mt-10 md:p-8">
          <div className="grid gap-4 lg:grid-cols-[1fr_0.8fr] lg:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#49d7ff]">One connected workflow</p><h3 id="connected-workflow-heading" className="mt-3 max-w-[600px] font-heading text-3xl font-bold leading-tight tracking-[-0.04em] text-white md:text-4xl">From the right stock<br/><span className="text-[#F5B800]">to the next conversation.</span></h3></div><p className="max-w-[460px] text-sm leading-7 text-white/60">Bring the buying decision, retail position and customer enquiry into one clearer journey. Each stage gives your team a stronger starting point for the next.</p></div>
          <ol className="mt-7 grid list-none gap-5 md:grid-cols-3">{[
            {title:"Buy the right stock",eyebrow:"A considered acquisition",image:"/images/how-it-works/feature-auction-intelligence.JPG",text:"Assess the vehicle, market context and costs before committing capital. Focus on stock that fits your forecourt and buying criteria.",output:"A clearer shortlist and buying limit",href:"/market-intelligence#auction",action:"Explore the buying picture",colour:"#49d7ff"},
            {title:"Price with confidence",eyebrow:"A stronger retail position",image:"/images/how-it-works/feature-price-confidence.JPG",text:"Review comparable stock, preparation allowances and the room for margin. Challenge the assumptions behind your intended retail price.",output:"An informed price and commercial plan",href:"/market-intelligence#pricing",action:"See the pricing context",colour:"#49d7ff"},
            {title:"Convert more enquiries",eyebrow:"A useful next conversation",image:"/images/human-handover.JPG",text:"Engage interested buyers, understand their requirements and capture the details your team needs to arrange a relevant next step.",output:"A qualified enquiry for your sales team",href:"/ai-sales-assistant#demo",action:"Experience the conversation",colour:"#F5B800"},
          ].map((step,index)=><li key={step.title} className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#080e11] transition-colors hover:border-white/25"><div className="relative aspect-[16/10] overflow-hidden"><Image src={step.image} alt="" fill sizes="(min-width:768px) 33vw,100vw" className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-105"/><div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#080e11] via-black/10 to-transparent"/><span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/70 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.1em] text-white">{index<2?"Buy smarter":"Sell smarter"}</span>{index<2&&<span aria-hidden="true" className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#080e11]/80 text-[#49d7ff]"><ArrowRight size={16}/></span>}</div><div className="flex flex-1 flex-col px-5 pb-5 pt-1"><p className="text-[9px] font-bold uppercase leading-5 tracking-[0.13em]" style={{color:step.colour}}>{step.eyebrow}</p><h4 className="mt-2 text-xl font-bold tracking-tight text-white">{step.title}</h4><p className="mt-3 text-xs leading-6 text-white/60">{step.text}</p><div className="mb-3 mt-5 flex gap-2 border-t border-white/10 pt-4"><Check size={14} className="mt-1 shrink-0" style={{color:step.colour}} aria-hidden="true"/><p className="text-[11px] font-semibold leading-6 text-white/80">{step.output}</p></div><Link href={step.href} className="mt-auto inline-flex min-h-11 items-center gap-2 self-start rounded text-[11px] font-semibold transition hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4" style={{color:step.colour}}>{step.action}<ArrowRight size={14} aria-hidden="true"/></Link></div></li>)}</ol>
        </section>
        <div className="mt-12 text-center">
          <h3 className="font-heading text-2xl font-bold tracking-[-0.03em] text-white md:text-3xl">See how AutoSalesAI fits your dealership.</h3>
          <p className="mx-auto mt-3 max-w-[580px] text-sm leading-7 text-white/65">Talk us through your stock, your sales process and your priorities. We’ll show you the capabilities that fit.</p>
          <Link href="/book-demo" className="mt-6 inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#F5B800] px-7 py-3 text-sm font-bold text-black transition hover:bg-[#ffd24d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B800]">Book a Demo<ArrowRight aria-hidden="true" size={18} /></Link>
        </div>
      </div>
    </section>
  );
}
