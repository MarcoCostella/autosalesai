import { pageMetadata } from "@/lib/seo";
import MarketLanding from "@/components/market-intelligence/marketing/MarketLanding";



export const metadata = pageMetadata("Used Car Market & Acquisition Intelligence | AutoSalesAI","Explore used-car acquisition, retail pricing, preparation costs and buying limits for independent dealers. Try sample assessments and worked buying examples.","/market-intelligence");

export default function MarketIntelligencePage() { return <MarketLanding />; }
