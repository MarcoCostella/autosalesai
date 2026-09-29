import Link from "next/link";
import { notFound } from "next/navigation";

import MarketAppShell from "@/components/market-intelligence/MarketAppShell";

import {
  formatMoney,
  getOpportunity,
} from "@/lib/market-intelligence/opportunities";

type MarketAnalysisPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function MarketAnalysisPage({
  params,
}: MarketAnalysisPageProps) {
  const { id } = await params;

  const vehicle = getOpportunity(id);

  if (!vehicle) {
    notFound();
  }

  const belowMarket = vehicle.atRetail - vehicle.recommendedMaxBid;


  const belowMarketPct =
    vehicle.atRetail > 0
      ? Math.round((belowMarket / vehicle.atRetail) * 100)
      : 0;

  return (
    <MarketAppShell>
      <div className="mx-auto max-w-[1600px]">
        {/* TOP NAV */}
        <div className="flex items-center justify-between">
          <Link
            href={`/market-intelligence/opportunities/${vehicle.id}`}
            className="text-[10px] text-[#9d9d9d] transition hover:text-[#d4af37]"
          >
            ← Back to vehicle
          </Link>

          <button
            type="button"
            className="rounded-md border border-[#6f5d1f] px-4 py-2 text-[9px] font-semibold text-[#d4af37] transition hover:bg-[#211c08]"
          >
            Export Report
          </button>
        </div>

        {/* TABS */}
        <nav className="mt-5 flex gap-8 overflow-x-auto border-b border-[#302d24]">
          <Link
            href={`/market-intelligence/opportunities/${vehicle.id}`}
            className="whitespace-nowrap pb-4 text-[9px] text-[#8d8d8d] transition hover:text-white"
          >
            OVERVIEW
          </Link>

          <span className="whitespace-nowrap border-b-2 border-[#d4af37] pb-4 text-[9px] font-semibold text-[#d4af37]">
            MARKET ANALYSIS
          </span>

          <span className="whitespace-nowrap pb-4 text-[9px] text-[#555]">
            CONDITION
          </span>

          <span className="whitespace-nowrap pb-4 text-[9px] text-[#555]">
            FINANCIALS
          </span>

          <span className="whitespace-nowrap pb-4 text-[9px] text-[#555]">
            COMPARABLES
          </span>

          <span className="whitespace-nowrap pb-4 text-[9px] text-[#555]">
            HISTORY
          </span>
        </nav>

        <div className="mt-6 flex items-end justify-between">
          <div>
            <h1 className="text-[24px] font-semibold tracking-[-0.03em] text-white">
              Market Analysis
            </h1>

            <p className="mt-1 text-[10px] text-[#777]">
              {vehicle.vehicle} · {vehicle.derivative}
            </p>
          </div>

          <img
            src={vehicle.auctionLogo}
            alt={`${vehicle.source} logo`}
            className="max-h-[38px] max-w-[105px] object-contain"
          />
        </div>

        {/* KPI CARDS */}
        <section className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-xl border border-[#d4af37]/65 bg-[#101214] p-3 xl:p-5">
            <div className="text-[8px] text-[#777]">
              AT Retail
            </div>

            <div className="mt-2 text-[20px] font-semibold text-white">
              {formatMoney(vehicle.atRetail)}
            </div>

            <div className="mt-1 text-[8px] text-[#777]">
              Retail valuation
            </div>
          </article>

          <article className="rounded-xl border border-[#d4af37]/65 bg-[#101214] p-3 xl:p-5">
            <div className="text-[8px] text-[#777]">
              Days to Sell
            </div>

            <div className="mt-2 text-[20px] font-semibold text-white">
              {vehicle.daysToSell}
            </div>

            <div className="mt-1 text-[8px] text-[#777]">
              Expected average
            </div>
          </article>

          <article className="rounded-xl border border-[#d4af37]/65 bg-[#101214] p-3 xl:p-5">
            <div className="text-[8px] text-[#777]">
              Market Score
            </div>

            <div className="mt-2 text-[20px] font-semibold text-white">
              {vehicle.marketScore}/100
            </div>

            <div className="mt-1 text-[8px] text-[#71dc3a]">
              Strong
            </div>
          </article>

          <article className="rounded-xl border border-[#d4af37]/65 bg-[#101214] p-3 xl:p-5">
            <div className="text-[8px] text-[#777]">
              Price Position
            </div>

            <div className="mt-2 text-[20px] font-semibold text-[#71dc3a]">
              Good
            </div>

            <div className="mt-1 text-[8px] text-[#777]">
              {vehicle.pricePosition}
            </div>
          </article>
        </section>

        {/* ANALYSIS GRID */}
        <section className="mt-4 grid gap-4 xl:grid-cols-[1.05fr_1.05fr_1fr_1fr]">
          {/* PRICE POSITION */}
          <article className="rounded-xl border border-[#d4af37]/65 bg-[#101214] p-5">
            <h2 className="text-[12px] font-semibold text-white">
              Price Position
            </h2>

            <div className="mt-5 text-[9px] text-[#71dc3a]">
              Below Market
            </div>

            <div className="mt-1 text-[17px] font-semibold text-[#71dc3a]">
              {formatMoney(belowMarket)}
            </div>

            <div className="mt-1 text-[8px] text-[#777]">
              {belowMarketPct}% below AT retail
            </div>

            <div className="mt-8">
              <div className="relative h-3 rounded-full bg-[#252525]">
                <div className="absolute left-[5%] top-0 h-3 w-[52%] rounded-l-full bg-[#3d7fd4]" />

                <div className="absolute left-[57%] top-0 h-3 w-[25%] rounded-r-full bg-[#d4af37]" />

                <div className="absolute left-[57%] top-[-5px] h-6 w-px bg-white" />
              </div>

              <div className="mt-3 flex justify-between text-[7px] text-[#777]">
                <span>£8k</span>
                <span>£10k</span>
                <span>£12k</span>
                <span>£14k</span>
                <span>£16k</span>
              </div>
            </div>

            <div className="mt-8 space-y-3 text-[9px]">
              <div className="flex justify-between">
                <span className="text-[#888]">
                  Target Bid
                </span>

                <span className="font-medium text-white">
                  {formatMoney(vehicle.recommendedMaxBid)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#888]">
                  AT Retail
                </span>

                <span className="font-medium text-white">
                  {formatMoney(vehicle.atRetail)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#888]">
                  CAP Clean
                </span>

                <span className="font-medium text-white">
                  {formatMoney(vehicle.capClean)}
                </span>
              </div>
            </div>
          </article>

          {/* DAYS TO SELL */}
          <article className="rounded-xl border border-[#d4af37]/65 bg-[#101214] p-5">
            <h2 className="text-[12px] font-semibold text-white">
              Days to Sell Analysis
            </h2>

            <div className="mt-5 flex justify-end gap-4 text-[8px]">
              <span className="text-[#71dc3a]">
                ● This Vehicle
              </span>

              <span className="text-[#d4af37]">
                ● Market Average
              </span>
            </div>

            <div className="relative mt-4 h-[160px] sm:h-[210px]">
              <div className="absolute inset-0 flex flex-col justify-between">
                {[40, 30, 20, 10, 0].map((value) => (
                  <div
                    key={value}
                    className="border-t border-[#242424]"
                  >
                    <span className="text-[7px] text-[#666]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <svg
                viewBox="0 0 500 200"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <polyline
                  points="25,70 130,98 235,128 340,142 470,158"
                  fill="none"
                  stroke="#71dc3a"
                  strokeWidth="3"
                />

                <polyline
                  points="25,38 130,65 235,88 340,92 470,122"
                  fill="none"
                  stroke="#d4af37"
                  strokeWidth="3"
                />

                {[25, 130, 235, 340, 470].map(
                  (x, index) => {
                    const yGreen = [70, 98, 128, 142, 158][
                      index
                    ];

                    const yGold = [38, 65, 88, 92, 122][
                      index
                    ];

                    return (
                      <g key={x}>
                        <circle
                          cx={x}
                          cy={yGreen}
                          r="4"
                          fill="#71dc3a"
                        />

                        <circle
                          cx={x}
                          cy={yGold}
                          r="4"
                          fill="#d4af37"
                        />
                      </g>
                    );
                  },
                )}
              </svg>
            </div>

            <div className="mt-2 flex justify-between text-[7px] text-[#777]">
              <span>£5k</span>
              <span>£10k</span>
              <span>£15k</span>
              <span>£20k</span>
              <span>£25k+</span>
            </div>
          </article>

          {/* COMPARABLES */}
          <article className="rounded-xl border border-[#d4af37]/65 bg-[#101214] p-5">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-[12px] font-semibold text-white">
                  Similar Vehicles for Sale
                </h2>

                <div className="mt-1 text-[8px] text-[#777]">
                  {vehicle.competitorCount} vehicles
                </div>
              </div>

              <span className="text-[8px] text-[#d4af37]">
                View all →
              </span>
            </div>

            <div className="mt-5 space-y-4">
              {[
                {
                  price: 13490,
                  days: 19,
                },
                {
                  price: 12995,
                  days: 17,
                },
                {
                  price: 13750,
                  days: 21,
                },
              ].map((item) => (
                <div
                  key={`${item.price}-${item.days}`}
                  className="grid grid-cols-[62px_1fr_auto] items-center gap-3 border-b border-[#292929] pb-4 last:border-b-0"
                >
                  <img
                    src={vehicle.image}
                    alt=""
                    className="h-[42px] w-[62px] rounded object-cover"
                  />

                  <div>
                    <div className="text-[9px] font-medium text-white">
                      {vehicle.vehicle}
                    </div>

                    <div className="mt-1 text-[7px] text-[#777]">
                      {item.days} days advertised
                    </div>
                  </div>

                  <div className="text-[9px] font-semibold text-white">
                    {formatMoney(item.price)}
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* MARKET INSIGHTS */}
          <article className="rounded-xl border border-[#d4af37]/65 bg-[#101214] p-5">
            <h2 className="text-[12px] font-semibold text-white">
              Market Insights
            </h2>

            <div className="mt-6 space-y-5">
              <div className="flex gap-3">
                <span className="text-[#71dc3a]">
                  ✓
                </span>

                <span className="text-[9px] leading-[1.5] text-[#aaa]">
                  Strong retail demand for this model
                </span>
              </div>

              <div className="flex gap-3">
                <span className="text-[#71dc3a]">
                  ✓
                </span>

                <span className="text-[9px] leading-[1.5] text-[#aaa]">
                  Low days to sell indicates good liquidity
                </span>
              </div>

              <div className="flex gap-3">
                <span className="text-[#71dc3a]">
                  ✓
                </span>

                <span className="text-[9px] leading-[1.5] text-[#aaa]">
                  Target bid provides strong headroom against expected retail value
                </span>
              </div>

              <div className="flex gap-3">
                <span className="text-[#71dc3a]">
                  ✓
                </span>

                <span className="text-[9px] leading-[1.5] text-[#aaa]">
                  Expected margin remains attractive after preparation
                </span>
              </div>

              <div className="mt-6 border-t border-[#292929] pt-5">
                <div className="text-[8px] text-[#777]">
                  Recommended View
                </div>

                <div className="mt-2 text-[13px] font-semibold text-[#71dc3a]">
                  Strong Acquisition
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </MarketAppShell>
  );
}


