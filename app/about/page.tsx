import type { Metadata } from "next";
import AboutPageContent from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "About AutoSalesAI | Built for Independent Dealers",
  description: "Discover the purpose, principles and platform vision behind AutoSalesAI: practical AI sales assistance and market intelligence for independent UK used-car dealers.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
