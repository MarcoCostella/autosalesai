import type { Metadata } from "next";
import LegalPolicyPage from "@/components/legal/LegalPolicyPage";
import { termsOfUse } from "@/lib/legal-policies";

export const metadata: Metadata = { title: "Terms of Use | AutoSalesAI", robots: { index: false, follow: true } };

export default function Page() { return <LegalPolicyPage policy={termsOfUse} path="/terms-of-use" />; }
