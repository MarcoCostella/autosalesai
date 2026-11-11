import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Check, ChartNoAxesCombined, Gavel, Gauge,
  CirclePoundSterling, ShieldCheck, MoveRight,
} from "lucide-react";

const container = "mx-auto max-w-[1280px] px-6 md:px-10";
const focus = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00BDF2]";

const capabilities = [
  {
    title: "Auction intelligence", question: "Which opportunities deserve a closer look?", icon: Gavel,
    image: "/images/how-it-works/feature-auction-intelligence.JPG",
    description: "Bring auction listings and vehicle information into a consistent assessment. Focus your research on stock that fits your buying criteria, rather than treating every listing as an equal opportunity.",
    detail: "Review the vehicle, auction context and your stock requirements.",
  },
  {
    title: "Retail pricing context", question: "Where could this car sit in the market?", icon: ChartNoAxesCombined,
    image: "/images/how-it-works/feature-price-confidence.JPG",
    description: "Consider comparable advertised vehicles, specification, mileage and market position. Use retail estimates as a starting point for an informed pricing decision, with condition and local competition in view.",
    detail: "Compare relevant stock and challenge the retail assumptions.",
  },
  {
    title: "Liquidity and demand", question: "How might this stock fit your forecourt?", icon: Gauge,
    image: "/images/how-it-works/feature-sell-faster.JPG",
    description: "Look beyond the headline margin. Demand signals, competition and expected selling time can help you consider how a vehicle might affect stock turn, forecourt space and cash tied up in inventory.",
    detail: "Balance potential margin with the time and capital involved.",
  },
  {
    title: "Margin and bid planning", question: "What room is there after the costs?", icon: CirclePoundSterling,
    image: "/images/how-it-works/feature-target-max-bid.JPG",
    description: "Work through purchase price, auction fees, transport, preparation and your profit target. Review how a change in costs or retail price affects the headroom for a target or maximum bid.",
    detail: "Examine the cost assumptions before setting a buying limit.",
  },
  {
    title: "Risk and decision support", question: "What needs checking before you commit?", icon: ShieldCheck,
    image: "/images/how-it-works/feature-reduce-risk.JPG",
    description: "Bring condition concerns, missing information and commercial risks into the discussion. Scores and recommendations can guide attention, while inspection, provenance checks and the final decision remain with you.",
    detail: "Use the assessment to decide what to verify next.",
  },
];

const workflow = [
  { number: "01", title: "Assess the opportunity", text: "Start with the vehicle, your buying criteria and the information available. Identify what is relevant and what is missing." },
  { number: "02", title: "Test the commercial case", text: "Compare market context, expected costs and the room for margin. Consider how different assumptions change the decision." },
  { number: "03", title: "Make your decision", text: "Check the facts, inspect where needed and set your limit. Your judgement turns the assessment into a buying decision." },
];

export default function MarketPreview() {
  return (
    <section id="market-intelligence" aria-labelledby="market-preview-heading" className="border-y border-white/10 bg-[#020506] text-white">
      <div className="relative isolate overflow-hidden">
        <Image src="/images/how-it-works/real-inventory.png" alt="" fill sizes="100vw" className="-z-20 object-cover object-[62%_center]" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,5,6,0.98)_0%,rgba(2,5,6,0.90)_38%,rgba(2,5,6,0.35)_78%,rgba(2,5,6,0.30)_100%)]" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-[#020506] via-transparent to-transparent" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/30 lg:hidden" />
        <div className={`${container} grid gap-10 py-14 md:py-16 lg:min-h-[500px] lg:grid-cols-[1.2fr_0.8fr] lg:items-end`}>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#00BDF2]">AutoSalesAI Market Intelligence</p>
            <h2 id="market-preview-heading" className="mt-5 max-w-[760px] font-heading text-4xl font-bold leading-[1.06] tracking-[-0.045em] md:text-5xl lg:text-[56px]">Before the sale,<br /><span className="text-[#00BDF2]">there’s the buying decision.</span></h2>
            <p className="mt-6 max-w-[650px] text-base leading-8 text-white/80">Strong customer conversations matter. So does choosing the stock those customers want to buy.</p>
            <p className="mt-4 max-w-[620px] text-sm leading-7 text-white/65">Market Intelligence brings acquisition, pricing, demand and risk into the assessment of a vehicle, helping independent dealers ask better questions before committing capital.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/market-intelligence" className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#00BDF2] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#63ddff] ${focus}`}>Explore Market Intelligence<ArrowRight aria-hidden="true" size={17} className="shrink-0" /></Link>
              <Link href="/book-demo" className={`inline-flex min-h-12 items-center justify-center rounded-lg border border-white/30 bg-black/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#00BDF2] ${focus}`}>Discuss your buying workflow</Link>
            </div>
          </div>
          <div className="rounded-2xl border border-white/20 bg-[#020506]/75 p-6 backdrop-blur-sm lg:mb-1 lg:ml-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00BDF2]">A more considered acquisition</p>
            <p className="mt-3 font-heading text-2xl font-bold leading-tight tracking-[-0.03em]">The opportunity.<br />The costs.<br /><span className="text-white/55">The questions still to ask.</span></p>
            <p className="mt-5 border-t border-white/15 pt-4 text-xs leading-6 text-white/60">A useful buying assessment makes its assumptions visible. It gives your experience something concrete to work with.</p>
          </div>
        </div>
      </div>

      <div className={`${container} pb-14 pt-5 md:pb-16`}>
        <div className="grid gap-6 border-b border-white/10 pb-8 lg:grid-cols-2 lg:items-end">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#00BDF2]">Five perspectives. One vehicle.</p><h3 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-[-0.035em] md:text-4xl">Look beyond the asking price.</h3></div>
          <p className="text-sm leading-8 text-white/65">A competitive retail price is only part of the picture. An acquisition also needs to make sense against your preparation costs, buying limits, demand and appetite for risk.</p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map(item => (
            <article key={item.title} className="overflow-hidden rounded-2xl border border-white/15 bg-[#080e11]">
              <div className="relative h-[170px]">
                <Image src={item.image} alt="" fill sizes="(min-width: 1280px) 390px, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#080e11] via-black/10 to-transparent" />
                <div aria-hidden="true" className="absolute bottom-4 left-6 flex h-10 w-10 items-center justify-center rounded-xl border border-[#00BDF2]/35 bg-[#020506]/80 text-[#00BDF2]"><item.icon size={22} /></div>
              </div>
              <div className="px-6 pb-6">
                <h4 className="text-xl font-bold tracking-[-0.025em]">{item.title}</h4>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#00BDF2]">{item.question}</p>
                <p className="mt-3 text-sm leading-7 text-white/65">{item.description}</p>
                <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-6 text-white/45">{item.detail}</p>
              </div>
            </article>
          ))}
          <article className="relative isolate flex min-h-[380px] flex-col justify-end overflow-hidden rounded-2xl border border-[#00BDF2]/30 p-6">
            <Image src="/images/how-it-works/real-inventory.png" alt="" fill sizes="(min-width: 1280px) 390px, (min-width: 768px) 50vw, 100vw" className="-z-20 object-cover object-[30%_center]" />
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-[#020506] via-[#020506]/80 to-[#020506]/20" />
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00BDF2]">Built around the dealer</p>
            <h4 className="mt-4 font-heading text-2xl font-bold leading-tight tracking-[-0.03em]">The right stock starts with the right questions.</h4>
            <p className="mt-4 text-sm leading-7 text-white/70">Explore the product and discuss the information, stock profile and commercial priorities that matter to your dealership.</p>
            <Link href="/market-intelligence" className={`mt-6 inline-flex min-h-11 items-center gap-2 self-start rounded text-sm font-bold text-[#00BDF2] ${focus}`}>See the platform overview<ArrowRight aria-hidden="true" size={17} /></Link>
          </article>
        </div>
      </div>

      <div className="relative isolate border-t border-white/10">
        <Image src="/images/how-it-works/how-it-works-hero.JPG" alt="" fill sizes="100vw" className="-z-20 object-cover" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#020506]/95" />
        <div className={`${container} py-12 md:py-14`}>
          <div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#00BDF2]">From information to action</p><h3 className="mt-4 font-heading text-2xl font-bold tracking-[-0.035em] md:text-3xl">A clearer route to your next decision.</h3></div><p className="max-w-[360px] text-xs leading-6 text-white/50">The assessment supports your judgement. It does not replace an inspection, a provenance check or your buying discipline.</p></div>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">{workflow.map((step,index) => <li key={step.number} className="rounded-2xl border border-white/15 bg-[#080e11]/90 p-6"><div className="flex items-center justify-between"><span className="text-xs font-bold text-[#00BDF2]">{step.number}</span>{index < workflow.length - 1 && <MoveRight aria-hidden="true" size={20} className="text-white/25" />}</div><h4 className="mt-5 text-lg font-bold">{step.title}</h4><p className="mt-3 text-sm leading-7 text-white/65">{step.text}</p></li>)}</ol>
          <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-[#00BDF2]/20 bg-[#00BDF2]/5 p-6 lg:flex-row lg:items-center lg:justify-between"><div className="flex items-start gap-3"><Check aria-hidden="true" size={21} className="mt-1 shrink-0 text-[#00BDF2]" /><p className="max-w-[750px] text-sm leading-7 text-white/70">Valuations, demand indicators, scores and margin projections are estimates. Check data coverage, condition, fees and assumptions before acting. Product scope and integrations are discussed for each deployment.</p></div><Link href="/market-intelligence" className={`inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg border border-[#00BDF2]/50 px-5 py-3 text-sm font-bold text-[#00BDF2] transition hover:bg-[#00BDF2]/10 ${focus}`}>Explore the product<ArrowRight aria-hidden="true" size={17}/></Link></div>
        </div>
      </div>
    </section>
  );
}
