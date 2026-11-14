"use client";
import { useState } from "react";
import type { Opportunity } from "@/lib/market-intelligence/opportunities";
import { money, acquisitionCost, headroom } from "@/lib/market-intelligence/assessment";
import { preparationBudgets, preparationForGrade, preparationTotal, type ConditionGrade } from "@/lib/market-intelligence/cost-assumptions";
export default function PreparationBreakdown({vehicle:v}:{vehicle:Opportunity}) {
 const [grade,setGrade]=useState<ConditionGrade>(v.conditionGrade);
 const p=preparationForGrade(v.conditionGrade);
 const scenarioPrep=preparationTotal(grade);
 const scenarioHeadroom=v.atRetail-v.currentPrice-v.buyerFee-v.transportCost-scenarioPrep;
 return <div className="mt-7 space-y-6">
  <div className="rounded-xl border border-[#49d7ff]/30 bg-[#49d7ff]/5 p-5"><h3 className="text-lg font-semibold">Mechanical issues to be assessed</h3><p className="mt-3 text-sm leading-7 text-white/60">The grade allowance covers preparation only. Mechanical faults, servicing, tyres and unexpected repairs require a separate assessment and quote. These additional costs are excluded from the displayed headroom; deduct them before setting a buying limit.</p></div>
  <div className="rounded-xl border border-white/10 p-5"><h3 className="text-lg font-semibold">Preparation based on assumed grade {v.conditionGrade} / 5</h3><p className="mt-3 text-sm leading-7 text-white/60">{p.label}: {money(v.prepCost)}. This is a budgeting assumption, not a verified auction grade. Grade 5 carries the highest allowance. Mechanical issues must be assessed separately and are not included in this allowance.</p>
   <div className="mt-5 grid gap-2 sm:grid-cols-5">{preparationBudgets.map(b=><div key={b.grade} className={`rounded-xl border p-3 ${b.grade===v.conditionGrade?"border-[#49d7ff]/60 bg-[#49d7ff]/10":"border-white/10 bg-black/20"}`}><p className="text-xs font-semibold">Grade {b.grade}</p><p className="mt-2 text-lg font-bold text-[#49d7ff]">{money(preparationTotal(b.grade))}</p><p className="mt-2 text-xs leading-5 text-white/50">{b.label}</p></div>)}</div>
  </div>
  <div className="grid gap-5 rounded-xl border border-[#49d7ff]/30 bg-[#49d7ff]/5 p-5 lg:grid-cols-2"><div><h3 className="text-lg font-semibold">What if the condition changes?</h3><p className="mt-3 text-sm leading-7 text-white/60">Test a different assumed grade. This scenario changes preparation and headroom here only; saved reports and headline figures retain the base grade {v.conditionGrade} assumption.</p><label className="mt-4 block text-sm text-white/70">Scenario condition grade<select value={grade} onChange={e=>setGrade(Number(e.target.value) as ConditionGrade)} className="mt-2 block min-h-11 w-full rounded-lg border border-white/25 bg-[#080f14] px-3 text-base text-white">{preparationBudgets.map(b=><option key={b.grade} value={b.grade}>Grade {b.grade} — {b.label}</option>)}</select></label></div><div aria-live="polite" className="rounded-xl bg-black/25 p-5"><p className="text-xs uppercase tracking-wider text-white/55">Scenario gross headroom</p><p className="mt-3 text-3xl font-bold text-[#49d7ff]">{money(scenarioHeadroom)}</p><p className="mt-3 text-sm leading-7 text-white/65">{money(v.atRetail)} retail − {money(v.currentPrice)} purchase − {money(v.buyerFee)} fee − {money(scenarioPrep)} preparation − {money(v.transportCost)} transport.</p><p className="mt-3 text-xs leading-6 text-white/50">Base: {money(headroom(v))} headroom on {money(acquisitionCost(v))} acquisition cost. Scenario difference: {money(scenarioHeadroom-headroom(v))}.</p></div></div>
 </div>;
}
