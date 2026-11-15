import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { dealerGuides } from "@/lib/dealer-guides";
export default function sitemap():MetadataRoute.Sitemap {
 return ["/","/ai-sales-assistant","/market-intelligence","/case-studies","/case-studies/the-dealership","/about","/book-demo","/guides",...dealerGuides.map(g=>`/guides/${g.slug}`)].map(path=>({url:`${siteUrl}${path==="/"?"":path}`}));
}
