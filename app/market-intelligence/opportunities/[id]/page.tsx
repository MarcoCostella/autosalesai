import { notFound } from "next/navigation";
import { getOpportunity } from "@/lib/market-intelligence/opportunities";
import { VehicleAssessment } from "@/components/market-intelligence/IntelligenceReports";
export default async function Page({params}:{params:Promise<{id:string}>}){const {id}=await params;const vehicle=getOpportunity(id);if(!vehicle)notFound();return <VehicleAssessment vehicle={vehicle}/>;}
