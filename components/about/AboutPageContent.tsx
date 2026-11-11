import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Check, ChartNoAxesCombined,
  MessageSquare, ShieldCheck, Users, Settings2, Workflow,
} from "lucide-react";
import type { ReactNode } from "react";

const container = "mx-auto max-w-[1280px] px-6 md:px-10";
const heading = "font-heading text-3xl font-bold leading-[1.12] tracking-[-0.04em] md:text-4xl lg:text-[44px]";
const paragraph = "text-[15px] leading-8 text-white/65";
const focus = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B800]";

function Eyebrow({ children, cyan = false }: { children: ReactNode; cyan?: boolean }) {
  return <p className={`text-[10px] font-bold uppercase tracking-[0.22em] ${cyan ? "text-[#00BDF2]" : "text-[#F5B800]"}`}>{children}</p>;
}

function ActionLink({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) {
  return <Link href={href} className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-lg px-6 py-3 text-sm font-bold transition ${focus} ${secondary ? "border border-white/30 bg-black/25 text-white hover:border-[#F5B800]/70" : "border border-[#F5B800] bg-[#F5B800] text-black hover:bg-[#ffd24d]"}`}>{children}<ArrowRight aria-hidden="true" size={17} className="shrink-0" /></Link>;
}

const principles = [
  { title: "UK market context", image: "/images/how-it-works/uk-market-intelligence.png", text: "Auction opportunities, pricing and demand need to make sense in the market you trade in. Our focus is the practical reality of UK used-car retail." },
  { title: "Your dealership’s knowledge", image: "/images/how-it-works/feature-independents.JPG", text: "The right customer conversation reflects your policies, services and sales process. Configuration starts with how your business actually operates." },
  { title: "Real inventory", image: "/images/how-it-works/real-inventory.png", text: "Useful recommendations start with the vehicles you have to sell. Stock information and availability need to be relevant, maintained and checked." },
  { title: "Decisions you control", image: "/images/how-it-works/feature-auction-intelligence.JPG", text: "An estimate or AI score should help you ask better questions. Vehicle checks, commercial judgement and the final buying decision stay with you." },
];

const vision = [
  { number: "01", title: "Customer intelligence", icon: MessageSquare, description: "Understand what buyers are looking for, the questions they ask and the next step they want to take.", example: "Buyer requirements → a more useful sales conversation" },
  { number: "02", title: "Market intelligence", icon: ChartNoAxesCombined, description: "Bring valuation, competition, demand and acquisition information into the assessment of a vehicle.", example: "Market context → a clearer view of the opportunity" },
  { number: "03", title: "Decision support", icon: ShieldCheck, description: "Make assumptions, costs and risks easier to examine before committing capital or positioning stock for sale.", example: "Evidence and judgement → a more considered decision" },
  { number: "04", title: "A connected dealership", icon: Workflow, description: "Our long-term direction is to bring these insights closer together, so buying and selling inform one another.", example: "Customer demand → better questions about future stock" },
];

const rollout = [
  { title: "Understand", text: "We start with your stock profile, enquiry channels, current systems and the tasks taking time away from your team." },
  { title: "Configure", text: "We agree the scope and shape the relevant knowledge, conversation journeys and decision-support requirements." },
  { title: "Validate", text: "Test realistic scenarios, review responses and handover points, and refine the experience before launch." },
  { title: "Review", text: "Use feedback from your team to identify what needs improving as your stock, processes and priorities change." },
];

export default function AboutPageContent() {
  return (
    <div className="overflow-hidden bg-[#020506] text-white">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <Image src="/images/how-it-works/how-it-works-hero.JPG" alt="" fill priority sizes="100vw" className="-z-20 object-cover object-[65%_center]" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,5,6,0.98)_0%,rgba(2,5,6,0.87)_35%,rgba(2,5,6,0.30)_78%,rgba(2,5,6,0.25)_100%)]" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-[#020506] via-transparent to-black/10" />
        <div className={`${container} grid min-h-[590px] items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.3fr_0.7fr]`}>
          <div>
            <Eyebrow>About AutoSalesAI</Eyebrow>
            <h1 className="mt-5 max-w-[760px] font-heading text-[42px] font-bold leading-[1.04] tracking-[-0.045em] sm:text-5xl lg:text-[64px]">Independent in spirit.<span className="mt-2 block text-[#F5B800]">Intelligent by design.</span></h1>
            <p className="mt-6 max-w-[620px] text-base leading-8 text-white/80 md:text-lg">Practical AI for the decisions, conversations and everyday demands of independent used-car retail.</p>
            <p className="mt-4 max-w-[580px] text-sm leading-7 text-white/60">AutoSalesAI brings sales assistance and market intelligence into one dealer-focused offering, with a clear purpose: help you spend less time chasing information and more time moving your business forward.</p>
            <div className="mt-8 flex flex-wrap gap-3"><ActionLink href="/book-demo">Talk about your dealership</ActionLink><ActionLink href="/about#our-purpose" secondary>Discover our approach</ActionLink></div>
          </div>
          <div className="self-end rounded-2xl border border-white/20 bg-[#020506]/70 p-6 backdrop-blur-sm lg:mb-3 lg:ml-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/50">Our focus</p>
            <p className="mt-3 font-heading text-2xl font-bold leading-tight tracking-[-0.03em]">The dealer behind<br />every decision.</p>
            <div className="mt-5 flex items-center gap-3 border-t border-white/15 pt-4 text-sm"><span className="font-bold text-[#F5B800]">Sell smarter.</span><span className="h-4 w-px bg-white/20" /><span className="font-bold text-[#00BDF2]">Buy smarter.</span></div>
          </div>
        </div>
      </section>

      <section aria-label="Our approach at a glance" className="border-b border-white/10 bg-[#080e11]">
        <div className={`${container} grid gap-6 py-7 sm:grid-cols-3`}>
          {[{ icon: Users, title: "Built for independent dealers", text: "Your business is the starting point." }, { icon: Settings2, title: "Configured around your work", text: "Stock, conversations and commercial priorities." }, { icon: ShieldCheck, title: "Human judgement stays central", text: "AI supports. Your team decides." }].map(item => <div key={item.title} className="flex items-start gap-3"><item.icon size={22} aria-hidden="true" className="mt-1 shrink-0 text-[#F5B800]" /><div><h2 className="text-sm font-bold">{item.title}</h2><p className="mt-1 text-xs leading-6 text-white/50">{item.text}</p></div></div>)}
        </div>
      </section>

      <section id="our-purpose" className="scroll-mt-40 py-16 md:py-20">
        <div className={`${container} grid items-center gap-10 lg:grid-cols-2 lg:gap-16`}>
          <div className="relative min-h-[370px] overflow-hidden rounded-3xl border border-white/15 md:min-h-[480px]">
            <Image src="/images/how-it-works/real-inventory.png" alt="Used vehicles arranged in a warmly lit showroom" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-[40%_center]" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 md:p-9"><Eyebrow>The reality of independent retail</Eyebrow><p className="mt-3 max-w-[370px] font-heading text-2xl font-bold leading-snug tracking-[-0.03em] md:text-3xl">Every car is capital.<br />Every conversation matters.</p></div>
          </div>
          <div>
            <Eyebrow>Why we exist</Eyebrow>
            <h2 className={`${heading} mt-4`}>Your time should go further.<br /><span className="text-white/50">So should your information.</span></h2>
            <p className={`${paragraph} mt-6`}>Independent dealers balance buying, preparation, pricing, advertising, customer enquiries and handovers. A decision about one vehicle can affect cash flow, forecourt space and the next buying opportunity.</p>
            <p className={`${paragraph} mt-4`}>At the same time, buyers expect useful answers when they are ready to ask. Information spread across systems and conversations can make it harder to see what needs attention.</p>
            <p className={`${paragraph} mt-4`}>AutoSalesAI exists to make AI useful in that working day: helping a team handle a vehicle enquiry, giving context to a buying opportunity and making the next action clearer.</p>
          </div>
        </div>
      </section>

      <section className="relative isolate border-y border-white/10">
        <Image src="/images/how-it-works/source.JPG" alt="" fill sizes="100vw" className="-z-20 object-cover object-center" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,5,6,0.94),rgba(2,5,6,0.85)_50%,rgba(2,5,6,0.60))]" />
        <div className={`${container} grid gap-10 py-14 md:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center`}>
          <div><Eyebrow>Our mission</Eyebrow><h2 className={`${heading} mt-4 max-w-[680px]`}>Make practical intelligence part of the everyday dealership.</h2><p className="mt-6 max-w-[650px] text-base leading-8 text-white/75">Give independent retailers access to useful AI tools that support stronger customer engagement, more informed stock decisions and a more manageable working day.</p></div>
          <div className="space-y-4">{[{title:"More useful conversations",text:"Help buyers progress from a question to a clear next step."},{title:"More considered decisions",text:"Bring context, assumptions and risks into view before committing."},{title:"More space for your team",text:"Support routine work so people can focus where their judgement matters."}].map(item=><div key={item.title} className="flex gap-4 rounded-xl border border-white/15 bg-black/35 p-5 backdrop-blur-sm"><Check size={20} aria-hidden="true" className="mt-1 shrink-0 text-[#F5B800]"/><div><h3 className="text-base font-bold">{item.title}</h3><p className="mt-2 text-sm leading-7 text-white/65">{item.text}</p></div></div>)}</div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className={container}>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end"><div><Eyebrow>What shapes the product</Eyebrow><h2 className={`${heading} mt-4`}>Grounded in your world.</h2></div><p className={paragraph}>Useful AI needs the right context. These four principles guide how we think about the product and the experience we configure with a dealership.</p></div>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{principles.map((item,index)=><article key={item.title} className="overflow-hidden rounded-2xl border border-white/10 bg-[#080e11]"><div className="relative aspect-[4/3]"><Image src={item.image} alt="" fill sizes="(min-width: 1280px) 280px, (min-width: 640px) 50vw, 100vw" className="object-cover"/><div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#080e11]/70 to-transparent"/><span className="absolute bottom-4 left-5 text-xs font-bold text-[#F5B800]">0{index+1}</span></div><div className="p-5"><h3 className="text-lg font-bold tracking-[-0.02em]">{item.title}</h3><p className="mt-3 text-sm leading-7 text-white/60">{item.text}</p></div></article>)}</div>
        </div>
      </section>

      <section id="our-platform" className="scroll-mt-40 border-y border-white/10 bg-[#060b0e] py-16 md:py-20">
        <div className={container}>
          <div className="mx-auto max-w-[750px] text-center"><Eyebrow>Two sides of the same business</Eyebrow><h2 className={`${heading} mt-4`}>Support the buyer.<br />Understand the opportunity.</h2><p className={`${paragraph} mt-5`}>The stock you buy and the customers you serve are closely connected. Our two product areas focus on those everyday commercial priorities.</p></div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {[{name:"AI Sales Assistant",eyebrow:"Customer engagement",image:"/images/how-it-works/engage.JPG",icon:MessageSquare,cyan:false,text:"Help website visitors find useful answers and give your sales team a clearer understanding of the enquiry. Configure the experience around your vehicles, policies and preferred handover process.",items:["Vehicle questions and stock recommendations","Buyer requirements and part-exchange details","Viewing requests, contact preferences and follow-up"],href:"/ai-sales-assistant",link:"Explore AI Sales Assistant"},{name:"Market Intelligence",eyebrow:"Acquisition and pricing",image:"/images/how-it-works/analyse.JPG",icon:ChartNoAxesCombined,cyan:true,text:"Bring relevant information into the assessment of a vehicle. Review the opportunity, examine the assumptions and use your commercial judgement to decide what merits a closer look.",items:["Auction opportunities and market context","Retail estimates, costs and demand signals","Target bids, projected margin and risk factors"],href:"/market-intelligence",link:"Explore Market Intelligence"}].map(item=><article key={item.name} className="flex flex-col overflow-hidden rounded-3xl border border-white/15 bg-[#080e11]"><div className="relative h-[230px] md:h-[260px]"><Image src={item.image} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-center"/><div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#080e11] via-black/20 to-black/10"/><div className="absolute inset-x-0 bottom-0 px-7 pb-5"><Eyebrow cyan={item.cyan}>{item.eyebrow}</Eyebrow><h3 className="mt-3 font-heading text-2xl font-bold tracking-[-0.03em] md:text-3xl">{item.name}</h3></div></div><div className="flex flex-1 flex-col px-7 pb-7"><p className="text-sm leading-7 text-white/65">{item.text}</p><ul className="mb-6 mt-5 space-y-3">{item.items.map(benefit=><li key={benefit} className="flex gap-3 text-sm leading-6 text-white/80"><Check aria-hidden="true" size={17} className={`mt-1 shrink-0 ${item.cyan ? "text-[#00BDF2]" : "text-[#F5B800]"}`}/>{benefit}</li>)}</ul><Link href={item.href} className={`mt-auto inline-flex min-h-11 items-center gap-2 self-start rounded text-sm font-bold ${focus} ${item.cyan ? "text-[#00BDF2]" : "text-[#F5B800]"}`}>{item.link}<ArrowRight size={17} aria-hidden="true"/></Link></div></article>)}
          </div>
        </div>
      </section>

      <section id="platform-vision" className="relative isolate scroll-mt-40 py-16 md:py-20">
        <Image src="/images/how-it-works/real-inventory.png" alt="" fill sizes="100vw" className="-z-20 object-cover object-center" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#020506]/95" />
        <div className={container}>
          <div className="grid gap-7 lg:grid-cols-2"><div><Eyebrow>Our platform vision</Eyebrow><h2 className={`${heading} mt-4`}>A clearer picture.<br /><span className="text-[#00BDF2]">Across the dealership.</span></h2></div><div><p className={paragraph}>Our long-term vision is to bring customer intelligence, market context and decision support closer together. The ambition is a more connected view of the dealership, from the stock you consider buying to the questions customers ask about it.</p><p className="mt-4 text-sm leading-7 text-white/45">This is our direction of development. Features, integrations and availability are agreed against the scope of each deployment.</p></div></div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{vision.map(item=><article key={item.title} className="relative flex flex-col rounded-2xl border border-white/10 bg-[#080e11] p-6"><div className="flex items-center justify-between"><item.icon aria-hidden="true" size={25} className="text-[#00BDF2]"/><span className="text-xs font-semibold text-white/30">{item.number}</span></div><h3 className="mt-6 text-lg font-bold leading-snug">{item.title}</h3><p className="mb-6 mt-3 text-sm leading-7 text-white/60">{item.description}</p><p className="mt-auto border-t border-white/10 pt-4 text-xs leading-6 text-[#00BDF2]/80">{item.example}</p></article>)}</div>
          <div className="mt-6 flex items-start gap-4 rounded-2xl border border-[#F5B800]/20 bg-[#F5B800]/5 p-6"><ShieldCheck aria-hidden="true" size={25} className="mt-1 shrink-0 text-[#F5B800]"/><div><h3 className="text-base font-bold">Your judgement is part of the system.</h3><p className="mt-2 text-sm leading-7 text-white/65">AI can help organise information and highlight an opportunity. It cannot inspect a vehicle for you or guarantee a sale. Your team checks the facts, challenges the assumptions and owns the final decision.</p></div></div>
        </div>
      </section>

      <section className="relative isolate border-y border-white/10">
        <Image src="/images/how-it-works/feature-independents.JPG" alt="" fill sizes="100vw" className="-z-20 object-cover"/>
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#020506]/90"/>
        <div className={`${container} py-16 md:py-20`}>
          <div className="grid gap-6 lg:grid-cols-2"><div><Eyebrow>How we work with you</Eyebrow><h2 className={`${heading} mt-4`}>Start with the dealership.<br />Build around the work.</h2></div><p className={paragraph}>A useful implementation starts with understanding the business. We work through the requirements, the knowledge and the real scenarios together, with a clear scope and opportunities for your team to review the experience.</p></div>
          <ol className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{rollout.map((item,index)=><li key={item.title} className="rounded-2xl border border-white/15 bg-[#080e11]/85 p-6"><span className="text-xs font-bold text-[#F5B800]">0{index+1}</span><h3 className="mt-4 text-xl font-bold">{item.title}</h3><p className="mt-3 text-sm leading-7 text-white/65">{item.text}</p></li>)}</ol>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className={`${container} grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14`}>
          <div><Eyebrow>A dealer’s perspective</Eyebrow><h2 className={`${heading} mt-4`}>The experience matters<br />as much as the technology.</h2><p className={`${paragraph} mt-5`}>The Dealership’s implementation focused on a more intuitive, automotive-specific customer conversation. Read what the work involved and how owner Ray Bishop described the assistant.</p><Link href="/case-studies/the-dealership" className={`mt-6 inline-flex min-h-11 items-center gap-2 rounded text-sm font-bold text-[#F5B800] ${focus}`}>Read The Dealership’s story<ArrowUpRight aria-hidden="true" size={18}/></Link></div>
          <figure className="rounded-3xl border border-[#F5B800]/25 bg-[radial-gradient(ellipse_at_top_right,rgba(245,184,0,0.09),transparent_75%)] p-7 md:p-10"><MessageSquare aria-hidden="true" size={30} className="text-[#F5B800]/70"/><blockquote className="mt-6 font-heading text-2xl font-semibold leading-relaxed tracking-[-0.025em] md:text-3xl">“The AI assistant behaves much more like a member of the sales team than a traditional chatbot.”</blockquote><figcaption className="mt-7 border-t border-white/10 pt-5"><span className="block text-sm font-bold">Ray Bishop</span><span className="mt-1 block text-xs text-white/50">Owner, The Dealership</span></figcaption></figure>
        </div>
      </section>

      <section className="relative isolate border-t border-white/10">
        <Image src="/images/how-it-works/retail.JPG" alt="" fill sizes="100vw" className="-z-20 object-cover"/>
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-[#020506]/95 via-[#020506]/85 to-[#020506]/40"/>
        <div className={`${container} py-16 md:py-20`}><Eyebrow>The next step starts with your business</Eyebrow><h2 className={`${heading} mt-4 max-w-[760px]`}>Tell us where your dealership<br /><span className="text-[#F5B800]">wants to go next.</span></h2><p className="mt-6 max-w-[650px] text-base leading-8 text-white/75">Better enquiry handling? More context before a bid? A clearer picture of your stock? Let’s explore where AutoSalesAI could make a useful difference.</p><div className="mt-8 flex flex-wrap gap-3"><ActionLink href="/book-demo">Book a personalised demo</ActionLink><ActionLink href="/ai-sales-assistant#demo" secondary>Try the guided example</ActionLink></div><p className="mt-7 text-xs leading-6 text-white/45">AutoSalesAI is operated by AutosalesAI Ltd, a UK company.<br/>Prefer to talk first? <a href="mailto:contact@autosalesai.co.uk" className="text-white/70 underline underline-offset-4">contact@autosalesai.co.uk</a> · <a href="tel:+447929023079" className="text-white/70 underline underline-offset-4">07929 023079</a></p></div>
      </section>
    </div>
  );
}
