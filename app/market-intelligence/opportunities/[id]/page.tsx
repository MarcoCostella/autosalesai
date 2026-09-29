import Link from "next/link";
import { notFound } from "next/navigation";

import MarketAppShell from "@/components/market-intelligence/MarketAppShell";

import {
  formatMileage,
  formatMoney,
  getOpportunity,
} from "@/lib/market-intelligence/opportunities";

type OpportunityDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function OpportunityDetailPage({
  params,
}: OpportunityDetailPageProps) {
  const { id } = await params;
  const vehicle = getOpportunity(id);

  if (!vehicle) {
    notFound();
  }

  const decisionClass =
    vehicle.decision === "BUY"
      ? "border-[#315d20] bg-[#14220d] text-[#75d843]"
      : vehicle.decision === "REVIEW"
        ? "border-[#735e1d] bg-[#241d08] text-[#d4af37]"
        : "border-[#70322a] bg-[#25100e] text-[#ff725f]";

  const riskClass =
    vehicle.riskLevel === "Low"
      ? "text-[#75d843]"
      : vehicle.riskLevel === "Medium"
        ? "text-[#d4af37]"
        : "text-[#ff725f]";

  return (
    <MarketAppShell>
      <div className="mx-auto max-w-[1600px]">

        {/* TOP NAV */}
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/market-intelligence/opportunities"
            className="text-[9px] text-[#9d9d9d] transition hover:text-[#d4af37]"
          >
            ← Back to opportunities
          </Link>

          <button
            type="button"
            className="rounded-md border border-[#6f5d1f] px-3 py-2 text-[8px] font-semibold text-[#d4af37] transition hover:bg-[#211c08]"
          >
            Export Report
          </button>
        </div>

        {/* TABS */}
        <nav className="mt-5 flex gap-6 overflow-x-auto border-b border-[#302d24]">
          <span className="whitespace-nowrap border-b-2 border-[#d4af37] pb-3 text-[8px] font-semibold text-[#d4af37]">
            OVERVIEW
          </span>

          <Link
            href={`/market-intelligence/opportunities/${vehicle.id}/market-analysis`}
            className="whitespace-nowrap pb-3 text-[8px] text-[#8d8d8d] transition hover:text-white"
          >
            MARKET ANALYSIS
          </Link>

          <span className="whitespace-nowrap pb-3 text-[8px] text-[#555]">
            CONDITION
          </span>

          <span className="whitespace-nowrap pb-3 text-[8px] text-[#555]">
            FINANCIALS
          </span>

          <span className="whitespace-nowrap pb-3 text-[8px] text-[#555]">
            COMPARABLES
          </span>

          <span className="whitespace-nowrap pb-3 text-[8px] text-[#555]">
            HISTORY
          </span>
        </nav>

        {/* VEHICLE HEADER */}
        <section className="mt-5 rounded-xl border border-[#d4af37]/65 bg-[linear-gradient(145deg,#121415_0%,#0c0e0f_100%)] p-4 lg:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

            <div className="flex min-w-0 gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#68c72e] text-[12px] font-semibold text-[#80e044]">
                {vehicle.score}
              </div>

              <div className="min-w-0">
                <h1 className="text-[20px] font-semibold tracking-[-0.03em] text-white lg:text-[26px]">
                  {vehicle.vehicle}
                </h1>

                <div className="mt-1 text-[10px] text-[#888]">
                  {vehicle.derivative}
                </div>

                <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[8px] text-[#777]">
                  <span>{vehicle.year}</span>
                  <span>{formatMileage(vehicle.mileage)}</span>
                  <span>{vehicle.registration}</span>
                  <span>{vehicle.gearbox}</span>
                  <span>{vehicle.fuel}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 lg:justify-end">
              <img
                src={vehicle.auctionLogo}
                alt={`${vehicle.source} logo`}
                className="max-h-[34px] max-w-[90px] object-contain"
              />

              <div className="text-right text-[8px] text-[#777]">
                <div>{vehicle.auctionCentre}</div>
                <div className="mt-1">
                  {vehicle.saleDate} · {vehicle.saleTime}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-[#292929] pt-4">
            <span
              className={`inline-flex min-w-[64px] justify-center rounded-md border px-3 py-2 text-[9px] font-semibold ${decisionClass}`}
            >
              {vehicle.decision}
            </span>

            <span className="rounded-md border border-[#333] bg-[#111] px-3 py-2 text-[8px] text-[#888]">
              RISK{" "}
              <strong className={`ml-1 ${riskClass}`}>
                {vehicle.riskLevel.toUpperCase()}
              </strong>
            </span>

            <span className="rounded-md border border-[#333] bg-[#111] px-3 py-2 text-[8px] text-[#888]">
              {vehicle.inspection}
            </span>
          </div>
        </section>

        {/* CORE FINANCIALS */}
        <section className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {[
            ["CURRENT PRICE", formatMoney(vehicle.currentPrice), "text-white"],
            ["MAX BID", formatMoney(vehicle.recommendedMaxBid), "text-[#d4af37]"],
            ["AT RETAIL", formatMoney(vehicle.atRetail), "text-white"],
            ["EST. PROFIT", formatMoney(vehicle.potentialProfit), "text-[#3fe187]"],
          ].map(([label, value, valueClass]) => (
            <article
              key={label}
              className="rounded-xl border border-[#d4af37]/55 bg-[#101214] p-3 lg:p-5"
            >
              <div className="text-[7px] uppercase tracking-[0.12em] text-[#707070]">
                {label}
              </div>

              <div className={`mt-2 text-[16px] font-semibold lg:text-[20px] ${valueClass}`}>
                {value}
              </div>
            </article>
          ))}
        </section>

        {/* DECISION SUMMARY */}
        <section className="mt-4 grid gap-4 xl:grid-cols-[1.35fr_.65fr]">

          <article className="rounded-xl border border-[#d4af37]/55 bg-[#101214] p-4 lg:p-5">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-[12px] font-semibold text-white">
                Acquisition Decision
              </h2>

              <span className={`text-[10px] font-semibold ${riskClass}`}>
                {vehicle.decision}
              </span>
            </div>

            <p className="mt-4 text-[9px] leading-[1.7] text-[#aaa]">
              {vehicle.decisionReason}
            </p>

            <div className="mt-5 grid grid-cols-3 gap-3 border-t border-[#292929] pt-4">
              <div>
                <div className="text-[7px] uppercase tracking-[0.1em] text-[#666]">
                  ROI
                </div>
                <div className="mt-1 text-[14px] font-semibold text-[#71d63f]">
                  {vehicle.roi}%
                </div>
              </div>

              <div>
                <div className="text-[7px] uppercase tracking-[0.1em] text-[#666]">
                  Days to Sell
                </div>
                <div className="mt-1 text-[14px] font-semibold text-white">
                  {vehicle.daysToSell}
                </div>
              </div>

              <div>
                <div className="text-[7px] uppercase tracking-[0.1em] text-[#666]">
                  Confidence
                </div>
                <div className="mt-1 text-[14px] font-semibold text-white">
                  {vehicle.confidence}/100
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-xl border border-[#d4af37]/55 bg-[#101214] p-4 lg:p-5">
            <h2 className="text-[12px] font-semibold text-white">
              Intelligence Scores
            </h2>

            <div className="mt-4 space-y-4">
              {[
                ["Liquidity", vehicle.liquidityScore],
                ["Market", vehicle.marketScore],
                ["Confidence", vehicle.confidence],
              ].map(([label, score]) => (
                <div key={label}>
                  <div className="flex justify-between text-[8px]">
                    <span className="text-[#888]">{label}</span>
                    <span className="font-semibold text-white">{score}/100</span>
                  </div>

                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#262626]">
                    <div
                      className="h-full rounded-full bg-[#d4af37]"
                      style={{ width: `${score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>

        {/* COST / VEHICLE DETAILS */}
        <section className="mt-4 grid gap-4 xl:grid-cols-2">

          <article className="rounded-xl border border-[#d4af37]/55 bg-[#101214] p-4 lg:p-5">
            <h2 className="text-[12px] font-semibold text-white">
              Acquisition Costs
            </h2>

            <div className="mt-4 space-y-3 text-[9px]">
              {[
                ["Current Price", formatMoney(vehicle.currentPrice)],
                ["Buyer Fee", formatMoney(vehicle.buyerFee)],
                ["Preparation", formatMoney(vehicle.prepCost)],
                ["Transport", formatMoney(vehicle.transportCost)],
                ["Landed Cost", formatMoney(vehicle.landedCost)],
              ].map(([label, value], index) => (
                <div
                  key={label}
                  className={`flex items-center justify-between ${
                    index === 4
                      ? "border-t border-[#292929] pt-3 font-semibold"
                      : ""
                  }`}
                >
                  <span className="text-[#888]">{label}</span>
                  <span className={index === 4 ? "text-[#d4af37]" : "text-white"}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-xl border border-[#d4af37]/55 bg-[#101214] p-4 lg:p-5">
            <h2 className="text-[12px] font-semibold text-white">
              Vehicle & Market
            </h2>

            <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-4">
              {[
                ["CAP Clean", formatMoney(vehicle.capClean)],
                ["Competitors", String(vehicle.competitorCount)],
                ["Body Style", vehicle.bodyStyle],
                ["Inspection", vehicle.inspection],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="text-[7px] uppercase tracking-[0.1em] text-[#666]">
                    {label}
                  </div>
                  <div className="mt-1 text-[9px] font-medium text-white">
                    {value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 border-t border-[#292929] pt-4">
              <div className="text-[7px] uppercase tracking-[0.1em] text-[#666]">
                Price Position
              </div>
              <div className="mt-1 text-[10px] font-semibold text-[#71d63f]">
                {vehicle.pricePosition}
              </div>
            </div>
          </article>
        </section>

        {/* MARKET ANALYSIS CTA */}
        <Link
          href={`/market-intelligence/opportunities/${vehicle.id}/market-analysis`}
          className="mt-4 flex min-h-[44px] w-full items-center justify-center rounded-lg border border-[#d4af37] bg-[#171406] px-4 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#d4af37] transition hover:bg-[#211c08]"
        >
          Open Full Market Analysis →
        </Link>

      </div>
    </MarketAppShell>
  );
}
