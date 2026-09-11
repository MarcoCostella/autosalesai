import Link from "next/link";

import MarketAppShell from "@/components/market-intelligence/MarketAppShell";

import {
  formatMileage,
  formatMoney,
  opportunities,
  type OpportunityDecision,
} from "@/lib/market-intelligence/opportunities";

function DecisionBadge({
  decision,
}: {
  decision: OpportunityDecision;
}) {
  const base =
    "inline-flex min-w-[58px] justify-center rounded-md border px-2.5 py-1.5 text-[9px] font-semibold";

  if (decision === "BUY") {
    return (
      <span
        className={`${base} border-[#315d20] bg-[#14220d] text-[#75d843]`}
      >
        BUY
      </span>
    );
  }

  if (decision === "REVIEW") {
    return (
      <span
        className={`${base} border-[#735e1d] bg-[#241d08] text-[#d4af37]`}
      >
        REVIEW
      </span>
    );
  }

  return (
    <span
      className={`${base} border-[#70322a] bg-[#25100e] text-[#ff725f]`}
    >
      AVOID
    </span>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      width="11"
      height="11"
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

function SearchIcon() {
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
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

const filters = [
  "All Auctions",
  "All Makes",
  "Price: All",
  "Profit: All",
  "ROI: All",
  "Risk: All",
  "Decision: All",
];

const headings = [
  "Score",
  "Vehicle",
  "Auction",
  "Sale",
  "Mileage",
  "Current Price",
  "AT Retail",
  "Profit",
  "ROI",
  "Days to Sell",
  "Max Bid",
  "Decision",
  "Action",
];

export default function OpportunitiesPage() {
  return (
    <MarketAppShell>
      <div className="mx-auto max-w-[1600px]">
        {/* PAGE HEADER */}
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
          <div>
            <h1 className="text-[26px] font-semibold tracking-[-0.035em] text-white">
              Opportunities
            </h1>

            <p className="mt-1 text-[11px] text-[#7d7d7d]">
              Live and upcoming vehicle opportunities across all auctions
            </p>
          </div>

          <button
            type="button"
            className="rounded-md border border-[#d4af37] bg-[#d4af37] px-5 py-2.5 text-[10px] font-semibold text-black transition hover:brightness-110"
          >
            Save View
          </button>
        </div>

        {/* FILTER BAR */}
        <div className="mt-7 flex flex-wrap items-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className="flex h-9 items-center gap-3 rounded-md border border-[#42391a] bg-[#0e1011] px-3 text-[9px] text-[#bcbcbc] transition hover:border-[#d4af37]"
            >
              <span>{filter}</span>
              <ChevronDownIcon />
            </button>
          ))}

          <div className="flex h-9 min-w-[220px] flex-1 items-center rounded-md border border-[#353535] bg-[#0e1011] px-3 text-[#777] lg:ml-auto lg:max-w-[260px]">
            <SearchIcon />

            <input
              type="text"
              placeholder="Search vehicles..."
              className="ml-2 w-full bg-transparent text-[9px] text-white outline-none placeholder:text-[#666]"
            />
          </div>
        </div>

        <div className="mt-4 text-[9px] text-[#777]">
          {opportunities.length} opportunities shown
        </div>

        {/* TABLE */}
        <section className="mt-3 overflow-hidden rounded-xl border border-[#d4af37]/65 bg-[#0d0f10]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1280px] border-collapse">
              <thead>
                <tr className="border-b border-[#33301f] bg-[#101213]">
                  {headings.map((heading) => (
                    <th
                      key={heading}
                      scope="col"
                      className="whitespace-nowrap px-3 py-3 text-left text-[8px] font-medium uppercase tracking-[0.06em] text-[#818181]"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {opportunities.map((opportunity) => (
                  <tr
                    key={opportunity.id}
                    className="border-b border-[#242424] transition last:border-b-0 hover:bg-[#131513]"
                  >
                    <td className="px-3 py-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#68c72e] text-[10px] font-semibold text-[#80e044]">
                        {opportunity.score}
                      </div>
                    </td>

                    <td className="px-3 py-3">
                      <div className="whitespace-nowrap text-[10px] font-semibold text-white">
                        {opportunity.vehicle}
                      </div>

                      <div className="mt-1 whitespace-nowrap text-[8px] text-[#777]">
                        {opportunity.derivative}
                      </div>
                    </td>

                    <td className="px-3 py-3">
                      <div className="flex h-[30px] w-[80px] items-center">
                        <img
                          src={opportunity.auctionLogo}
                          alt={`${opportunity.source} logo`}
                          className="max-h-[27px] max-w-[78px] object-contain object-left"
                        />
                      </div>
                    </td>

                    <td className="whitespace-nowrap px-3 py-3 text-[9px] text-[#bbb]">
                      {opportunity.saleDate}{" "}
                      {opportunity.saleTime}
                    </td>

                    <td className="whitespace-nowrap px-3 py-3 text-[9px] text-[#bbb]">
                      {formatMileage(opportunity.mileage)}
                    </td>

                    <td className="whitespace-nowrap px-3 py-3 text-[10px] font-medium text-white">
                      {formatMoney(opportunity.currentPrice)}
                    </td>

                    <td className="whitespace-nowrap px-3 py-3 text-[10px] text-white">
                      {formatMoney(opportunity.atRetail)}
                    </td>

                    <td className="whitespace-nowrap px-3 py-3 text-[10px] font-semibold text-[#3fe187]">
                      {formatMoney(opportunity.potentialProfit)}
                    </td>

                    <td className="whitespace-nowrap px-3 py-3 text-[10px] font-semibold text-[#71d63f]">
                      {opportunity.roi}%
                    </td>

                    <td className="px-3 py-3 text-center text-[9px] text-[#bbb]">
                      {opportunity.daysToSell}
                    </td>

                    <td className="whitespace-nowrap px-3 py-3 text-[10px] text-white">
                      {formatMoney(
                        opportunity.recommendedMaxBid,
                      )}
                    </td>

                    <td className="px-3 py-3">
                      <DecisionBadge
                        decision={opportunity.decision}
                      />
                    </td>

                    <td className="px-3 py-3">
                      <Link
                        href={`/market-intelligence/opportunities/${opportunity.id}`}
                        aria-label={`View ${opportunity.vehicle}`}
                        title={`View ${opportunity.vehicle}`}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[#66571d] text-[#d4af37] transition hover:border-[#d4af37] hover:bg-[#211c08]"
                      >
                        <EyeIcon />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PAGINATION */}
          <div className="flex flex-col gap-4 border-t border-[#292929] px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-[8px] text-[#777]">
              Showing 1 to {opportunities.length} of{" "}
              {opportunities.length} results
            </span>

            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((pageNumber) => (
                <button
                  key={pageNumber}
                  type="button"
                  className={
                    pageNumber === 1
                      ? "flex h-8 w-8 items-center justify-center rounded-md bg-[#d4af37] text-[9px] font-semibold text-black"
                      : "flex h-8 w-8 items-center justify-center rounded-md border border-[#333] text-[9px] text-[#aaa] transition hover:border-[#d4af37]"
                  }
                >
                  {pageNumber}
                </button>
              ))}

              <span className="px-2 text-[9px] text-[#777]">
                ...
              </span>

              <button
                type="button"
                className="flex h-8 min-w-[36px] items-center justify-center rounded-md border border-[#333] px-2 text-[9px] text-[#aaa]"
              >
                63
              </button>
            </div>
          </div>
        </section>
      </div>
    </MarketAppShell>
  );
}