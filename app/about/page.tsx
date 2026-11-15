import { pageMetadata } from "@/lib/seo";
import AboutPageContent from "@/components/about/AboutPageContent";



export const metadata = pageMetadata("About AutoSalesAI | AI for Independent UK Dealers","Learn why AutoSalesAI is building practical AI sales assistance and market intelligence for independent UK used-car dealerships.","/about");

export default function AboutPage() {
  return <AboutPageContent />;
}
