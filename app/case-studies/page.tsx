import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FeaturedStudy, StudyCTA } from "@/components/case-studies/DealerStory";

export const metadata: Metadata = { title: "Customer Stories | AutoSalesAI", description: "Explore The Dealership’s five-day AutoSalesAI implementation, the sales workflows it covered and the owner’s feedback." };

export default function CaseStudiesPage() {
  return <div className="bg-[#020506] text-white">
    <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(ellipse_at_top_right,rgba(245,184,0,0.09),transparent_60%)]"><div className="mx-auto grid max-w-[1280px] gap-8 px-6 py-14 md:px-10 md:py-20 lg:grid-cols-[1.4fr_0.6fr] lg:items-end"><div><p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#F5B800]">Customer stories</p><h1 className="mt-5 max-w-[850px] font-heading text-4xl font-bold leading-[1.08] tracking-[-0.045em] md:text-6xl">Built around the dealer.<span className="mt-2 block text-[#F5B800]">Experienced by the customer.</span></h1><p className="mt-6 max-w-[710px] text-base leading-8 text-white/65 md:text-lg">Go beyond the product features. Explore how AutoSalesAI was introduced at an independent dealership, what the implementation involved and how the owner described the experience.</p></div><div className="border-l border-[#F5B800]/40 pl-6"><p className="text-sm font-semibold text-white">A closer look at the work.</p><p className="mt-3 text-sm leading-7 text-white/55">The brief. The configuration. The rollout. The dealer’s own words.</p><a href="#featured-story" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#F5B800]">Explore the story<ArrowRight size={16} aria-hidden="true"/></a></div></div></section>
    <section id="featured-story" aria-label="Featured customer story" className="mx-auto max-w-[1280px] scroll-mt-40 px-6 py-12 md:px-10 md:py-16"><FeaturedStudy/></section>
    <section id="inside-the-case-study" aria-labelledby="inside-case-study-heading" className="relative isolate border-t border-white/10">
      <Image src="/images/how-it-works/real-inventory.png" alt="" fill sizes="100vw" className="-z-20 object-cover" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#020506]/95" />
      <div className="mx-auto max-w-[1280px] px-6 py-14 md:px-10 md:py-16">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F5B800]">Inside the case study</p><h2 id="inside-case-study-heading" className="mt-4 font-heading text-3xl font-bold leading-tight tracking-[-0.035em] md:text-4xl">The detail behind<br /><span className="text-[#F5B800]">the experience.</span></h2></div>
          <p className="max-w-[560px] text-base leading-8 text-white/65">From the first brief to the owner’s feedback, explore what a dealership-focused implementation involved. Start with the part of the story that matters most to your business.</p>
        </div>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {[
            { number: "01", title: "A clearer brief", image: "/images/how-it-works/real-inventory.png", text: "The dealership wanted vehicle enquiries to feel more intuitive and more relevant to automotive retail. Explore the customer experience behind the brief.", href: "/case-studies/the-dealership#challenge", action: "Explore the challenge" },
            { number: "02", title: "A managed rollout", image: "/images/problem/problem-busy-team.jpg", text: "Requirements, conversation design, configuration and testing came together in a five-day implementation. Follow the stages from preparation to go-live.", href: "/case-studies/the-dealership#implementation", action: "Follow the rollout" },
            { number: "03", title: "First-hand feedback", image: "/images/how-it-works/convert.JPG", text: "Read owner Ray Bishop’s comments on the assistant’s approach and the impression it gave customers, in his own words.", href: "/case-studies/the-dealership#feedback", action: "Read the dealer’s feedback" },
          ].map(item => <article key={item.title} className="group flex flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#080e11] shadow-[0_14px_40px_rgba(0,0,0,0.2)] transition-colors hover:border-[#F5B800]/45">
            <Link href={item.href} aria-label={item.action} tabIndex={-1} className="relative block h-[210px] overflow-hidden"><Image src={item.image} alt="" fill sizes="(min-width:1280px) 390px, (min-width:768px) 33vw, 100vw" className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-105"/><div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#080e11] via-black/10 to-transparent"/><span className="absolute bottom-4 left-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5B800]">{item.number} / The Dealership</span></Link>
            <div className="flex flex-1 flex-col px-6 pb-7"><h3 className="text-xl font-bold tracking-[-0.025em]">{item.title}</h3><p className="mb-6 mt-3 text-sm leading-7 text-white/65">{item.text}</p><Link href={item.href} className="mt-auto inline-flex min-h-11 items-center gap-2 self-start rounded text-sm font-bold text-[#F5B800] transition hover:text-[#ffd24d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B800]">{item.action}<ArrowRight aria-hidden="true" size={17} className="shrink-0"/></Link></div>
          </article>)}
        </div>
      </div>
    </section>
    <section className="border-y border-white/10 bg-white/[0.02]"><div className="mx-auto flex max-w-[1280px] flex-col gap-5 px-6 py-9 md:flex-row md:items-center md:justify-between md:px-10"><div><h2 className="text-xl font-bold">Want to experience the conversation first?</h2><p className="mt-2 text-sm leading-7 text-white/60">Try sample enquiries and see the information your sales team could receive.</p></div><Link href="/ai-sales-assistant#demo" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-lg border border-[#F5B800]/50 px-5 py-3 text-sm font-bold text-[#F5B800] hover:bg-[#F5B800]/5">Try the guided demo<ArrowRight aria-hidden="true" size={17}/></Link></div></section>
    <StudyCTA/>
  </div>;
}
