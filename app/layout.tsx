import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NavigationScroll from "@/components/layout/NavigationScroll";

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
  metadataBase:new URL("https://www.autosalesai.co.uk"),
  title:"AutoSalesAI | AI Sales & Market Intelligence for UK Car Dealers",
  description:"AI sales assistance and used-car market intelligence for independent UK dealerships.",
  applicationName:"AutoSalesAI",
  openGraph:{title:"AutoSalesAI",description:"AI sales and market intelligence for independent UK car dealers.",siteName:"AutoSalesAI",locale:"en_GB",type:"website",images:[{url:"/images/home/home-hero-car.png",alt:"AutoSalesAI"}]},
  verification:{google:process.env.GOOGLE_SITE_VERIFICATION||undefined,other:process.env.BING_SITE_VERIFICATION?{"msvalidate.01":process.env.BING_SITE_VERIFICATION}:undefined}
};
const organization={"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://www.autosalesai.co.uk/#organization",name:"AutoSalesAI",legalName:"AutosalesAI Ltd",url:"https://www.autosalesai.co.uk",logo:"https://www.autosalesai.co.uk/images/autosalesai-logo.png",email:"contact@autosalesai.co.uk",telephone:"+447929023079",identifier:{"@type":"PropertyValue",propertyID:"UK company number",value:"17396040"},address:{"@type":"PostalAddress",streetAddress:"195 Bramble Road",addressLocality:"Benfleet",addressRegion:"Essex",postalCode:"SS7 2UU",addressCountry:"GB"}},{"@type":"WebSite","@id":"https://www.autosalesai.co.uk/#website",name:"AutoSalesAI",url:"https://www.autosalesai.co.uk",inLanguage:"en-GB",publisher:{"@id":"https://www.autosalesai.co.uk/#organization"}}]};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-body antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organization).replace(/</g,"\\u003c")}} />
        <NavigationScroll />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
