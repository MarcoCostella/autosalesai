import Image from "next/image";

const problems = [
  {
    title: "Missed Out-of-Hours Enquiries",
    text:
      "Your customers don’t just browse 9–5. Evenings, weekends and bank holidays are when high-intent buyers have time to search and enquire. If nobody responds immediately, that opportunity disappears before your team even sees it.",
    consequence: "High-intent buyers move elsewhere.",
    image: "/images/problem/problem-after-hours.jpg"
  },
  {
    title: "Slow Response Times",
    text:
      "Today’s buyers expect instant answers. The longer it takes to respond, the less likely they are to wait. Delays reduce trust, create friction and give competing dealers time to engage the customer first and win the deal.",
    consequence: "Every delay reduces conversion potential.",
    image: "/images/problem/problem-response-times.jpg"
  },
  {
    title: "Finance Questions Go Unanswered",
    text:
      "Affordability drives decisions. Questions about monthly payments, deposits, PCP, HP and eligibility often arise early in the buying journey. When these questions go unanswered, buyers lose confidence or stall their decision completely.",
    consequence: "Finance uncertainty stops buyers progressing.",
    image: "/images/problem/problem-finance.jpg"
  },
  {
    title: "Part Exchange Opportunities Lost",
    text:
      "Incomplete or inconsistent part exchange information makes it impossible for your team to accurately value vehicles or understand the customer’s situation. Missing key details like registration, mileage and condition leads to weaker appraisals and lost trust.",
    consequence: "Incomplete data creates weaker sales opportunities.",
    image: "/images/problem/problem-part-exchange.jpg"
  },
  {
    title: "Sales Teams Are Already Busy",
    text:
      "Your sales team are juggling showroom customers, test drives, handovers, deliveries and administration. When routine enquiries take up their time, valuable leads can be missed or responded to too late.",
    consequence:
      "Good leads can be missed simply because staff are occupied.",
    image: "/images/problem/problem-busy-team.jpg"
  },
  {
    title: "Paid Website Traffic Is Wasted",
    text:
      "Dealers spend heavily on AutoTrader, Google, social media and SEO to drive traffic. But if visitors arrive, get no immediate engagement and leave, that marketing spend produces no measurable return.",
    consequence:
      "Marketing spend is lost when visitors leave unidentified.",
    image: "/images/problem/problem-paid-traffic.jpg"
  }
];

export default function BenefitsGrid() {
  return (
    <section className="relative overflow-hidden bg-black py-20 lg:py-24">
      {/* Subtle premium background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.07),transparent_42%)]" />

      <div className="relative mx-auto w-full max-w-[1440px] px-8 lg:px-12 xl:px-16">
        {/* Heading */}
        <div className="mx-auto max-w-[1180px] text-center">
          <p className="text-[13px] font-black uppercase tracking-[0.32em] text-brand-gold">
            The Problem
          </p>

          <h2 className="mt-5 font-heading text-[40px] font-bold leading-[1.04] tracking-[-0.05em] text-white sm:text-[48px] lg:text-[58px]">
            Most Dealership Websites Lose
            <br />
            <span className="text-brand-gold">
              High-Intent Buyers Every Day
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[900px] text-[16px] leading-7 text-white/70 lg:text-[17px]">
            Independent dealers invest heavily in stock, preparation,
            advertising and staff.
            <br className="hidden md:block" />
            Yet many potential customers leave without ever becoming a
            qualified sales opportunity.
          </p>
        </div>

        {/* Problem cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {problems.map((problem) => (
            <article
              key={problem.title}
              className="group flex min-h-[520px] flex-col overflow-hidden rounded-[22px] border border-brand-gold/40 bg-[#080808] transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/75 hover:shadow-[0_18px_60px_rgba(212,175,55,0.12)]"
            >
              {/* Image */}
              <div className="relative h-[205px] shrink-0 overflow-hidden">
                <Image
                  src={problem.image}
                  alt={problem.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />

                {/* Fade image into body */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/5 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col px-6 pb-6 pt-3">
                <h3 className="font-heading text-[21px] font-bold leading-[1.18] tracking-[-0.025em] text-white lg:text-[22px]">
                  {problem.title}
                </h3>

                <p className="mt-3 text-[14px] leading-[1.6] text-white/75 lg:text-[15px]">
                  {problem.text}
                </p>

                {/* Commercial consequence */}
                <div className="mt-auto pt-5">
                  <div className="h-px w-full bg-brand-gold/30" />

                  <p className="pt-4 text-[11px] font-black uppercase leading-[1.6] tracking-[0.13em] text-brand-gold">
                    {problem.consequence}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}