import Link from "next/link";
import MarketAppShell from "@/components/market-intelligence/MarketAppShell";
import AuctionDirectory from "@/components/market-intelligence/AuctionDirectory";
export const metadata={title:"All Auction Events | AutoSalesAI"};
export default function AllAuctionsPage() {
 return <MarketAppShell><Link href="/market-intelligence/auctions" className="inline-flex min-h-11 items-center text-sm text-[#49d7ff]">← Auction overview</Link><p className="mt-4 text-xs font-bold uppercase tracking-widest text-[#49d7ff]">Explore the auction schedule</p><h1 className="mt-3 text-3xl font-bold sm:text-4xl">All auction events</h1><p className="mt-4 max-w-3xl text-sm leading-7 text-white/65">Compare the five available sample events by source, location and featured vehicle. Open an event to review its details and plan your next checks.</p><p className="mt-4 rounded-xl border border-[#d4af37]/25 bg-[#d4af37]/5 p-4 text-xs leading-6 text-white/60">Illustrative historical schedule, not a live auction feed. Dates, vehicle counts and featured models are sample records; availability and sale terms must be confirmed with the auction house.</p><AuctionDirectory/></MarketAppShell>;
}
