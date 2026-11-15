import { pageMetadata } from "@/lib/seo";
import DealerStory from "@/components/case-studies/DealerStory";



export const metadata = pageMetadata("The Dealership AI Sales Assistant Case Study | AutoSalesAI","Read how The Dealership introduced an automotive-focused AI Sales Assistant in five days, with implementation details and owner Ray Bishop’s feedback.","/case-studies/the-dealership");

export default function TheDealershipCaseStudyPage() {
  return <DealerStory />;
}
