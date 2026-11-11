import type { Metadata } from "next";
import LegalPolicyPage from "@/components/legal/LegalPolicyPage";
import { privacyPolicy } from "@/lib/legal-policies";

export const metadata: Metadata = { title: "Privacy Policy | AutoSalesAI", robots: { index: false, follow: true } };

export default function Page() { return <LegalPolicyPage policy={privacyPolicy} path="/privacy-policy" />; }
