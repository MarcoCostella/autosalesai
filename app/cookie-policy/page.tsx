import type { Metadata } from "next";
import LegalPolicyPage from "@/components/legal/LegalPolicyPage";
import { cookiePolicy } from "@/lib/legal-policies";

export const metadata: Metadata = { title: "Cookie Policy | AutoSalesAI", robots: { index: false, follow: true } };

export default function Page() { return <LegalPolicyPage policy={cookiePolicy} path="/cookie-policy" />; }
