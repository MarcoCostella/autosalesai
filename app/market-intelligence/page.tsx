import type { Metadata } from "next";
import MarketLanding from "@/components/market-intelligence/marketing/MarketLanding";

export const metadata: Metadata = {
  title: "Market Intelligence for Used Car Dealers | AutoSalesAI",
  description: "Explore automotive acquisition, retail pricing, demand, costs and risk. Try a worked buying example and discover AutoSalesAI Market Intelligence for independent dealers.",
};

export default function MarketIntelligencePage() { return <MarketLanding />; }
