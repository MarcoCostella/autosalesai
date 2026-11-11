import type { Metadata } from "next";
import DealerStory from "@/components/case-studies/DealerStory";

export const metadata: Metadata = { title: "The Dealership Customer Story | AutoSalesAI", description: "How The Dealership introduced an automotive-focused AI Sales Assistant in five days, with feedback from owner Ray Bishop." };

export default function TheDealershipCaseStudyPage() {
  return <DealerStory />;
}
