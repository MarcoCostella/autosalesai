import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

const capabilities = [
  { title: "Vehicle enquiries", image: "/images/how-it-works/real-inventory.png", label: "The right vehicle. A useful answer.", text: "Conversations centred on the vehicles buyers are interested in, with inventory search a core part of the assistant’s brief." },
  { title: "Finance conversations", image: "/images/problem/problem-finance.jpg", label: "Understand the buyer’s requirements.", text: "An initial conversation about the buyer’s requirements, ready for the dealership to discuss suitable options." },
  { title: "Part-exchange qualification", image: "/images/problem/problem-part-exchange.jpg", label: "Bring the current car into the picture.", text: "Capture the information needed to start a part-exchange discussion and prepare for a dealer assessment." },
  { title: "Lead capture", image: "/images/human-handover.JPG", label: "Give the team a clearer starting point.", text: "Bring the customer’s enquiry and contact details together so the sales team has a useful starting point." },
  { title: "Out-of-hours engagement", image: "/images/problem/problem-after-hours.jpg", label: "Be helpful when buyers are browsing.", text: "Support conversations when customers are browsing outside the dealership’s opening hours." },
];
const stages = [
  { title: "Understand the dealership", image: "/images/how-it-works/feature-independents.JPG", label: "The business comes first", text: "Requirements gathering established the sales process, enquiry workflows and expectations for the customer experience." },
  { title: "Design the conversations", image: "/images/lead-response.JPG", label: "Shape the experience", text: "Conversation design and AI configuration shaped the assistant around automotive enquiries and the dealership’s priorities." },
  { title: "Test and refine", image: "/images/problem/problem-busy-team.jpg", label: "Put it through its paces", text: "Testing, refinement and user acceptance testing formed part of the implementation before launch." },
  { title: "Launch with support", image: "/images/how-it-works/convert.JPG", label: "From preparation to go-live", text: "Go-live support completed the five-day deployment without disrupting existing dealership operations." },
];
const eyebrow = "text-[10px] font-bold uppercase tracking-[0.22em] text-[#F5B800]";
const heading = "font-heading text-3xl font-bold leading-[1.12] tracking-[-0.035em] md:text-4xl";

export default function DealerStorySections({ feedback }: { feedback: ReactNode }) {
  return <>
    <section id="challenge" className="scroll-mt-40 py-14 md:py-16">
      <div className="overflow-hidden rounded-3xl border border-white/15 bg-[#080e11] lg:grid lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative isolate flex min-h-[350px] flex-col justify-end p-7 md:p-9">
          <Image src="/images/how-it-works/real-inventory.png" alt="" fill sizes="(min-width:1024px) 50vw, 100vw" className="-z-20 object-cover object-[30%_center]"/>
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-[#020506] via-[#020506]/55 to-black/10"/>
          <p className={eyebrow}>01 / The challenge</p>
          <h2 className={`${heading} mt-4 max-w-[440px]`}>The website needed to feel more like the showroom.</h2>
        </div>
        <div className="p-7 md:p-9 lg:p-10">
          <p className="text-base leading-8 text-white/75">The Dealership’s existing website chat experience was described as unintuitive, with ineffective inventory search and stale responses. The business wanted an assistant that could better reflect how a dealership talks to its customers.</p>
          <h3 className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-[#F5B800]">The brief</h3>
          <ol className="mt-3 divide-y divide-white/10">{["Make vehicle enquiries easier to navigate.","Shape conversations around automotive sales workflows.","Give the sales team a more useful starting point for follow-up."].map((text,index)=><li key={text} className="flex items-start gap-4 py-4"><span className="text-xs font-bold leading-7 text-[#F5B800]/70">0{index+1}</span><p className="text-sm leading-7 text-white/75">{text}</p></li>)}</ol>
        </div>
      </div>
    </section>

    <section id="solution" className="scroll-mt-40 border-t border-white/10 py-14 md:py-16">
      <div className="grid gap-6 lg:grid-cols-2 lg:items-end"><div><p className={eyebrow}>02 / The solution</p><h2 className={`${heading} mt-4 max-w-[570px]`}>An assistant shaped around the sales conversation.</h2></div><p className="text-base leading-8 text-white/65">AutoSalesAI configured the assistant around the dealership’s sales processes and customer enquiry workflows. The implementation covered five core areas, from the first vehicle question through to lead capture.</p></div>
      <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {capabilities.map((item,index)=><article key={item.title} className="group flex flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#080e11] shadow-[0_12px_35px_rgba(0,0,0,0.18)] transition-colors hover:border-[#F5B800]/45">
          <div className="relative h-[210px] overflow-hidden"><Image src={item.image} alt="" fill sizes="(min-width:1280px) 390px, (min-width:768px) 50vw, 100vw" className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-105"/><div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#080e11] via-black/5 to-transparent"/><span className="absolute bottom-4 left-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5B800]">0{index+1} / Customer journey</span></div>
          <div className="flex flex-1 flex-col px-6 pb-7"><h3 className="text-xl font-bold tracking-[-0.025em]">{item.title}</h3><p className="mt-3 text-sm font-semibold leading-6 text-[#F5B800]/90">{item.label}</p><p className="mt-3 text-sm leading-7 text-white/65">{item.text}</p></div>
        </article>)}
        <article className="relative isolate flex min-h-[390px] flex-col justify-end overflow-hidden rounded-2xl border border-[#F5B800]/35 p-7"><Image src="/images/case-studies/the-dealership-assistant-mockup.png" alt="" fill sizes="(min-width:1280px) 390px, (min-width:768px) 50vw, 100vw" className="-z-20 object-cover object-right opacity-45"/><div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-[#020506] via-[#020506]/70 to-[#020506]/15"/><p className={eyebrow}>From enquiry to next step</p><h3 className="mt-4 font-heading text-2xl font-bold leading-tight tracking-[-0.03em]">See the conversation<br/>take shape.</h3><p className="mt-4 text-sm leading-7 text-white/70">Explore an illustrative conversation and watch the dealer lead summary build.</p><Link href="/ai-sales-assistant#demo" className="mt-6 inline-flex min-h-12 items-center justify-center gap-3 self-start rounded-lg bg-[#F5B800] px-5 py-3 text-sm font-bold text-black hover:bg-[#ffd24d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B800]">Try the guided demo<ArrowRight aria-hidden="true" size={17}/></Link></article>
      </div>
      <p className="mt-4 text-[10px] text-white/35">Automotive imagery illustrates the enquiry journeys.</p>
    </section>

    <section id="implementation" className="relative isolate scroll-mt-40 border-t border-white/10 py-14 md:py-16">
      <div aria-hidden="true" className="pointer-events-none absolute -inset-x-6 inset-y-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(245,184,0,0.08),transparent_70%)]"/>
      <div className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"><div><p className={eyebrow}>03 / Implementation</p><h2 className={`${heading} mt-4`}>A considered rollout.<br/><span className="text-[#F5B800]">Five days to go-live.</span></h2></div><p className="text-base leading-8 text-white/65">The five-day deployment brought together requirements, conversation design, configuration, testing and launch support, without disrupting existing dealership operations.</p></div>
      <div className="relative mt-10"><div aria-hidden="true" className="absolute left-8 right-8 top-[27px] hidden h-px bg-gradient-to-r from-[#F5B800]/15 via-[#F5B800]/65 to-[#F5B800]/15 lg:block"/>
        <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">{stages.map((stage,index)=><li key={stage.title} className="group"><div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#F5B800]/60 bg-[#080e11] font-heading text-lg font-bold text-[#F5B800] shadow-[0_0_24px_rgba(245,184,0,0.08)]">0{index+1}</div><div className="overflow-hidden rounded-2xl border border-white/15 bg-[#080e11]"><div className="relative h-[150px] overflow-hidden"><Image src={stage.image} alt="" fill sizes="(min-width:1024px) 280px, (min-width:768px) 50vw, 100vw" className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-105"/><div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#080e11] to-transparent"/></div><div className="px-5 pb-6"><p className="text-[9px] font-bold uppercase leading-5 tracking-[0.16em] text-[#F5B800]/70">{stage.label}</p><h3 className="mt-2 text-base font-bold leading-6">{stage.title}</h3><p className="mt-3 text-sm leading-7 text-white/60">{stage.text}</p></div></div></li>)}</ol>
      </div><p className="mt-5 text-xs leading-6 text-white/40">Implementation time relates to this customer’s deployment. Scope and timing for another dealership would be agreed individually.</p>
    </section>

    <section id="feedback" className="scroll-mt-40 border-t border-white/10 py-14 md:py-16"><div className="grid gap-5 lg:grid-cols-2 lg:items-end"><div><p className={eyebrow}>04 / In the owner’s words</p><h2 className={`${heading} mt-4`}>The difference<br/><span className="text-[#F5B800]">the dealer noticed.</span></h2></div><p className="max-w-[500px] text-base leading-8 text-white/65">The owner’s feedback focused on the quality of the conversation and the impression it gave customers.</p></div><div className="mt-8 grid gap-5 lg:grid-cols-2">{feedback}</div><p className="mt-5 max-w-[850px] text-xs leading-6 text-white/45">This story reflects the implementation details and qualitative feedback provided by the dealership. Enquiry uplift, appointment conversion and sales ROI have not been quantified here.</p></section>

    <section className="relative isolate mb-16 overflow-hidden rounded-3xl border border-white/15"><Image src="/images/how-it-works/real-inventory.png" alt="" fill sizes="(min-width:1280px) 1200px, 100vw" className="-z-20 object-cover"/><div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-[#020506]/95 via-[#020506]/90 to-[#020506]/60"/><div className="grid gap-8 p-7 md:p-10 lg:grid-cols-2 lg:items-center"><div><p className={eyebrow}>What this means for your business</p><h2 className={`${heading} mt-4`}>Start with your dealership’s everyday questions.</h2></div><div className="space-y-4 text-sm leading-8 text-white/75"><p>Where do customers get stuck? Which enquiries take your team away from the showroom? What information would make the next conversation easier?</p><p>Those are the questions to bring to your demo. We can explore the stock, enquiry journeys and handover points that matter to your business.</p><Link href="/book-demo" className="inline-flex min-h-12 items-center gap-3 rounded-lg bg-[#F5B800] px-5 py-3 text-sm font-bold text-black hover:bg-[#ffd24d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B800]">Discuss your dealership<ArrowRight aria-hidden="true" size={17}/></Link></div></div></section>
  </>;
}
