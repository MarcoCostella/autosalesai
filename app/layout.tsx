import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap"
});

export const metadata: Metadata = {
  title: "AutoSalesAI | AI Sales Assistant for Independent Car Dealers",
  description:
    "AutoSalesAI helps independent dealerships capture more leads, qualify more buyers and make better stock decisions using AI-powered sales and market intelligence.",
  openGraph: {
    title: "AutoSalesAI",
    description:
      "AI sales and market intelligence for independent car dealers.",
    url: "https://autosalesai.co.uk",
    siteName: "AutoSalesAI",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
