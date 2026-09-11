import Link from "next/link";

export default function MarketIntelligencePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 lg:px-16">
        <div className="max-w-[900px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
            AutoSalesAI Market Intelligence
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Smarter vehicle acquisition.
            <span className="block text-[#d4af37]">
              Better buying decisions.
            </span>
          </h1>

          <p className="mt-6 max-w-[760px] text-base leading-7 text-[#9a9a9a]">
            Identify stronger used-car acquisition opportunities using auction,
            market, condition, liquidity and profitability intelligence in one
            AutoSalesAI platform.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/market-intelligence/dashboard"
              className="rounded-lg bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
            >
              Open Dashboard
            </Link>

            <Link
              href="/market-intelligence/opportunities"
              className="rounded-lg border border-[#d4af37]/70 px-6 py-3 text-sm font-semibold text-[#d4af37] transition hover:bg-[#1d1909]"
            >
              View Opportunities
            </Link>
          </div>
        </div>

        <section className="mt-16 grid gap-5 md:grid-cols-3">
          <article className="rounded-xl border border-[#d4af37]/45 bg-[#101214] p-6">
            <h2 className="text-sm font-semibold text-white">
              Auction Intelligence
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#8d8d8d]">
              Consolidate BCA, Manheim and Dealer Auction opportunities into a
              consistent acquisition view.
            </p>
          </article>

          <article className="rounded-xl border border-[#d4af37]/45 bg-[#101214] p-6">
            <h2 className="text-sm font-semibold text-white">
              Market &amp; Liquidity
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#8d8d8d]">
              Assess retail valuation, competition, expected days to sell and
              market price position.
            </p>
          </article>

          <article className="rounded-xl border border-[#d4af37]/45 bg-[#101214] p-6">
            <h2 className="text-sm font-semibold text-white">
              Acquisition Decision
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#8d8d8d]">
              Surface maximum bid, projected profit, ROI, risk and BUY, REVIEW
              or AVOID recommendations.
            </p>
          </article>
        </section>
      </section>
    </main>
  );
}