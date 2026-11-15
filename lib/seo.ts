import type { Metadata } from "next";
export const siteUrl="https://www.autosalesai.co.uk";
export function pageMetadata(title:string,description:string,path:string):Metadata {
 return {title,description,alternates:{canonical:path},openGraph:{title,description,url:path,siteName:"AutoSalesAI",locale:"en_GB",type:"website",images:[{url:"/images/home/home-hero-car.png",alt:"AutoSalesAI — AI sales and market intelligence for car dealers"}]},twitter:{card:"summary_large_image",title,description,images:["/images/home/home-hero-car.png"]}};
}
