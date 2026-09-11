import Link from "next/link";

import MarketAppShell from "@/components/market-intelligence/MarketAppShell";

const kpis = [
  {
    label: "Total Opportunities",
    value: "2,095",
    change: "+12%",
    icon: "inventory",
  },
  {
    label: "Total Available Profit",
    value: "\u00A3468,000",
    change: "+18%",
    icon: "profit",
  },
  {
    label: "Average ROI",
    value: "28%",
    change: "+4%",
    icon: "roi",
  },
  {
    label: "Fast Sellers (\u226430 days)",
    value: "96",
    change: "+8%",
    icon: "speed",
  },
  {
    label: "High Confidence Buys",
    value: "23",
    change: "+5%",
    icon: "confidence",
  },
];

const auctions = [
  {
    name: "BCA",
    opportunities: "312",
    estimatedProfit: "\u00A344,597",
    averageProfit: "\u00A310,540",
    logo: "/images/market-auctions/bca.jpg",
  },
  {
    name: "Manheim",
    opportunities: "428",
    estimatedProfit: "\u00A377,624",
    averageProfit: "\u00A39,381",
    logo: "/images/market-auctions/manheim.jpg",
  },
  {
    name: "Dealer Auction",
    opportunities: "1,355",
    estimatedProfit: "\u00A389,142",
    averageProfit: "\u00A37,744",
    logo: "/images/market-auctions/dealer-auction.png",
  },
];

const vehicles = [
  {
    id: "vw-golf-gtd-2019",
    vehicle: "VW Golf GTD",
    year: "2019",
    engine: "2.0 TDI Diesel",
    bid: "\u00A38,900",
    profit: "\u00A33,620",
    confidence: "98%",
    score: "97",
    image: "/images/market-vehicles/vw-golf-gtd.jpg",
  },
  {
    id: "ford-focus-st-2018",
    vehicle: "Ford Focus ST",
    year: "2018",
    engine: "2.3 Petrol",
    bid: "\u00A37,250",
    profit: "\u00A32,980",
    confidence: "95%",
    score: "95",
    image: "/images/market-vehicles/ford-focus-st.jpg",
  },
  {
    id: "audi-a3-s-line-2020",
    vehicle: "Audi A3 S Line",
    year: "2020",
    engine: "1.5 TFSI Petrol",
    bid: "\u00A39,800",
    profit: "\u00A33,410",
    confidence: "97%",
    score: "94",
    image: "/images/market-vehicles/audi-a3-s-line.jpg",
  },
  {
    id: "skoda-karoq-se-2019",
    vehicle: "Skoda Karoq SE",
    year: "2019",
    engine: "1.5 TSI",
    bid: "\u00A38,200",
    profit: "\u00A32,410",
    confidence: "92%",
    score: "92",
    image: "/images/market-vehicles/skoda-karoq-se.jpg",
  },
  {
    id: "seat-leon-fr-2018",
    vehicle: "Seat Leon FR",
    year: "2018",
    engine: "1.5 TSI",
    bid: "\u00A36,900",
    profit: "\u00A33,410",
    confidence: "93%",
    score: "92",
    image: "/images/market-vehicles/seat-leon-fr.jpg",
  },
];

function ChevronDown() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 11a8 8 0 0 0-15.5-2" />
      <path d="M4 4v5h5" />
      <path d="M4 13a8 8 0 0 0 15.5 2" />
      <path d="M20 20v-5h-5" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
    </svg>
  );
}

function KpiIcon({ type }: { type: string }) {
  if (type === "profit") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        aria-hidden="true"
      >
        <rect x="4" y="7" width="16" height="13" rx="2" />
        <path d="M8 7V5a4 4 0 0 1 8 0v2" />
        <path d="M9 13h6" />
        <path d="M12 10v7" />
      </svg>
    );
  }

  if (type === "roi") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 20h17" />
        <path d="M6 17v-4" />
        <path d="M11 17V9" />
        <path d="M16 17v-6" />
        <path d="M21 17V5" />
        <path d="m5 9 5-4 5 3 6-6" />
      </svg>
    );
  }

  if (type === "speed") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="9" cy="19" r="1.5" />
        <circle cx="18" cy="19" r="1.5" />
        <path d="M3 4h2l2.5 10h10L20 7H7" />
      </svg>
    );
  }

  if (type === "confidence") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3 20 6v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-3Z" />
        <path d="m9 12 2 2 4-5" />
      </svg>
    );
  }

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="5" y="5" width="14" height="16" rx="2" />
      <path d="M9 5V3h6v2" />
      <path d="M9 11h6" />
      <path d="M9 15h6" />
    </svg>
  );
}

export default function MarketDashboardPage() {
  return (
    <MarketAppShell>
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-6 flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
          <div>
            <h1 className="text-[24px] font-semibold tracking-[-0.035em] text-white">
              Dashboard Overview
            </h1>

            <p className="mt-1 text-[12px] text-[#777777]">
              Welcome back, Marco
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex h-10 min-w-[120px] items-center justify-between rounded-md border border-[#38342b] bg-[#101214] px-4 text-[11px] text-[#c5c5c5]"
            >
              Today
              <ChevronDown />
            </button>

            <button
              type="button"
              className="flex h-10 min-w-[145px] items-center justify-between rounded-md border border-[#38342b] bg-[#101214] px-4 text-[11px] text-[#c5c5c5]"
            >
              All Auctions
              <ChevronDown />
            </button>

            <button
              type="button"
              className="flex h-10 items-center gap-2 rounded-md border border-[#d4af37] bg-[#d4af37] px-5 text-[11px] font-semibold text-black shadow-[0_4px_18px_rgba(212,175,55,0.16)] transition hover:brightness-110"
            >
              <RefreshIcon />
              Refresh
            </button>
          </div>
        </div>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {kpis.map((item) => (
            <article
              key={item.label}
              className="rounded-xl border border-[#d4af37]/70 bg-[linear-gradient(145deg,#141617_0%,#0e1011_100%)] px-5 py-5 shadow-[0_8px_30px_rgba(0,0,0,0.22)] transition duration-200 hover:border-[#d4af37]"
            >
              <div className="flex items-center gap-3">
                <div className="text-[#d4af37]">
                  <KpiIcon type={item.icon} />
                </div>

                <span className="text-[11px] font-medium text-[#aaaaaa]">
                  {item.label}
                </span>
              </div>

              <div className="mt-5 text-[28px] font-semibold tracking-[-0.035em] text-white">
                {item.value}
              </div>

              <div className="mt-2 flex items-center gap-2">
                <span className="text-[10px] font-semibold text-[#6bd635]">
                  {item.change}
                </span>

                <span className="text-[9px] text-[#6e6e6e]">
                  vs yesterday
                </span>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-4 rounded-xl border border-[#d4af37]/70 bg-[linear-gradient(145deg,#121415_0%,#0c0e0f_100%)] p-4 shadow-[0_10px_35px_rgba(0,0,0,0.18)]">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-[13px] font-semibold text-white">
              Opportunities by Auction
            </h2>

            <span className="text-[10px] text-[#747474]">
              Total Available Profit
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1fr_1fr_1fr_1.55fr]">
            {auctions.map((auction) => (
              <article
                key={auction.name}
                className="rounded-lg border border-[#d4af37]/65 bg-[#101214] p-5 transition duration-200 hover:border-[#d4af37]"
              >
                <div className="flex h-[50px] items-center">
                  <img
                    src={auction.logo}
                    alt={`${auction.name} logo`}
                    className="max-h-[48px] max-w-[150px] object-contain object-left"
                  />
                </div>

                <div className="mt-5 text-[28px] font-semibold tracking-[-0.035em] text-white">
                  {auction.opportunities}
                </div>

                <div className="mt-1 text-[9px] text-[#6f6f6f]">
                  opportunities
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[12px] font-semibold text-[#3fe187]">
                      {auction.estimatedProfit}
                    </div>

                    <div className="mt-1 text-[8px] text-[#777777]">
                      Est. Profit
                    </div>
                  </div>

                  <div>
                    <div className="text-[12px] font-semibold text-[#3fe187]">
                      {auction.averageProfit}
                    </div>

                    <div className="mt-1 text-[8px] text-[#777777]">
                      Avg Profit
                    </div>
                  </div>
                </div>
              </article>
            ))}

            <div className="flex min-h-[205px] items-center justify-center gap-8 rounded-lg border border-[#d4af37]/65 bg-[#101214] p-5 transition duration-200 hover:border-[#d4af37]">
              <div
                className="relative flex h-[142px] w-[142px] shrink-0 items-center justify-center rounded-full"
                style={{
                  background:
                    "conic-gradient(#3b82f6 0deg 133deg,#7557d8 133deg 237deg,#d4af37 237deg 360deg)",
                }}
              >
                <div className="flex h-[92px] w-[92px] flex-col items-center justify-center rounded-full bg-[#0c0e0f]">
                  <span className="text-[20px] font-semibold text-white">
                    {"\u00A3"}468k
                  </span>

                  <span className="mt-1 text-[9px] text-[#737373]">
                    Total Profit
                  </span>
                </div>
              </div>

              <div className="min-w-[200px] space-y-4">
                <div className="grid grid-cols-[10px_1fr_35px_50px] items-center gap-2 text-[9px]">
                  <span className="h-2 w-2 rounded-sm bg-[#3b82f6]" />
                  <span className="text-[#c7c7c7]">BCA</span>
                  <span className="text-right text-[#bbbbbb]">37%</span>
                  <span className="text-right text-[#747474]">
                    {"\u00A3"}174k
                  </span>
                </div>

                <div className="grid grid-cols-[10px_1fr_35px_50px] items-center gap-2 text-[9px]">
                  <span className="h-2 w-2 rounded-sm bg-[#7557d8]" />
                  <span className="text-[#c7c7c7]">Manheim</span>
                  <span className="text-right text-[#bbbbbb]">29%</span>
                  <span className="text-right text-[#747474]">
                    {"\u00A3"}136k
                  </span>
                </div>

                <div className="grid grid-cols-[10px_1fr_35px_50px] items-center gap-2 text-[9px]">
                  <span className="h-2 w-2 rounded-sm bg-[#d4af37]" />
                  <span className="text-[#c7c7c7]">Dealer Auction</span>
                  <span className="text-right text-[#bbbbbb]">34%</span>
                  <span className="text-right text-[#747474]">
                    {"\u00A3"}158k
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-4 rounded-xl border border-[#d4af37]/70 bg-[linear-gradient(145deg,#121415_0%,#0c0e0f_100%)] p-4 shadow-[0_10px_35px_rgba(0,0,0,0.18)] transition duration-200 hover:border-[#d4af37]">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-[13px] font-semibold text-white">
              Top 5 Opportunities
            </h2>

            <Link
              href="/market-intelligence/opportunities"
              className="rounded-md border border-[#78651d] px-4 py-2 text-[9px] font-semibold text-[#d4af37] transition hover:bg-[#1d1909]"
            >
              View all opportunities
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
            {vehicles.map((vehicle) => (
              <article
                key={vehicle.id}
                className="overflow-hidden rounded-lg border border-[#d4af37]/65 bg-[#101214] transition duration-200 hover:-translate-y-0.5 hover:border-[#d4af37]"
              >
                <div className="relative h-[150px] overflow-hidden bg-[#171717]">
                  <Link
                    href={`/market-intelligence/opportunities/${vehicle.id}`}
                    className="absolute inset-0 z-[1]"
                    aria-label={`View analysis for ${vehicle.vehicle}`}
                  />

                  <img
                    src={vehicle.image}
                    alt={vehicle.vehicle}
                    className="h-full w-full object-cover"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101214] via-transparent to-black/10" />

                  <div className="pointer-events-none absolute left-3 top-3 z-[2] flex h-8 w-8 items-center justify-center rounded-full border border-[#279b56] bg-[#07140c]/90 text-[10px] font-semibold text-[#55e28e]">
                    {vehicle.score}
                  </div>

                  <button
                    type="button"
                    aria-label={`Add ${vehicle.vehicle} to watchlist`}
                    className="absolute right-3 top-3 z-[3] flex h-8 w-8 items-center justify-center rounded-full border border-[#66551d] bg-black/70 text-[#d4af37]"
                  >
                    <HeartIcon />
                  </button>
                </div>

                <div className="p-4">
                  <Link
                    href={`/market-intelligence/opportunities/${vehicle.id}`}
                    className="text-[12px] font-semibold text-white transition hover:text-[#d4af37]"
                  >
                    {vehicle.vehicle}
                  </Link>

                  <p className="mt-1 text-[9px] text-[#8a8a8a]">
                    {vehicle.year} - {vehicle.engine}
                  </p>

                  <div className="mt-4 flex items-end justify-between gap-3">
                    <div>
                      <div className="text-[15px] font-semibold text-white">
                        {vehicle.bid}
                      </div>

                      <div className="mt-1 text-[8px] text-[#737373]">
                        Target Bid
                      </div>
                    </div>

                    <Link
                      href={`/market-intelligence/opportunities/${vehicle.id}`}
                      className="rounded-md border border-[#d4af37]/65 px-3 py-2 text-[9px] font-semibold text-[#d4af37] transition hover:border-[#d4af37] hover:bg-[#211c08]"
                    >
                      View Analysis
                    </Link>
                  </div>

                  <div className="mt-4 border-t border-[#282828] pt-3">
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-[13px] font-semibold text-[#3fe187]">
                          {vehicle.profit}
                        </div>

                        <div className="mt-1 text-[8px] text-[#707070]">
                          Potential Profit
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-[13px] font-semibold text-white">
                          {vehicle.confidence}
                        </div>

                        <div className="mt-1 text-[8px] text-[#707070]">
                          Confidence
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </MarketAppShell>
  );
}