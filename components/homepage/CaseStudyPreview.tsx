import { FeaturedStudy } from "@/components/case-studies/DealerStory";

export default function CaseStudyPreview() {
  return <section className="border-t border-white/10 bg-[#020506] py-16 md:py-20"><div className="mx-auto max-w-[1280px] px-6 md:px-10"><div className="mb-8 max-w-[700px]"><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F5B800]">A dealership’s perspective</p><h2 className="mt-4 font-heading text-3xl font-bold tracking-[-0.035em] text-white md:text-4xl">See the implementation behind the experience.</h2><p className="mt-4 text-sm leading-7 text-white/65">Explore the brief, the five-day rollout and feedback from the owner of The Dealership.</p></div><FeaturedStudy/></div></section>;
}
