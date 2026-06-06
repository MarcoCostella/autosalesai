"use client";

import { useState } from "react";
import { demoScenarios } from "@/lib/demo-data";
import ChatSimulation from "./ChatSimulation";
import LeadSummaryCard from "./LeadSummaryCard";
import SectionHeader from "@/components/ui/SectionHeader";
import BrandName from "@/components/ui/BrandName";

export default function InteractiveDemo() {
  const [activeId, setActiveId] = useState(demoScenarios[0].id);

  const activeScenario =
    demoScenarios.find((scenario) => scenario.id === activeId) ??
    demoScenarios[0];

  return (
    <div>
      <SectionHeader
        align="center"
        eyebrow="AI Sales Assistant • Inventory Search • Lead Qualification"
        title={
          <>
            See How <BrandName /> Works
          </>
        }
        text={
          <>
            Choose a scenario and see how <BrandName /> converts website
            conversations into structured sales opportunities.
          </>
        }
      />

      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {demoScenarios.map((scenario) => (
          <button
            key={scenario.id}
            onClick={() => setActiveId(scenario.id)}
            className={`border px-5 py-3 text-sm font-semibold transition ${
              activeId === scenario.id
                ? "border-brand-gold bg-brand-gold text-black"
                : "border-white/15 bg-white/5 text-white hover:border-brand-gold/60"
            }`}
          >
            {scenario.label}
          </button>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <ChatSimulation scenario={activeScenario} />
        <LeadSummaryCard summary={activeScenario.summary} />
      </div>
    </div>
  );
}
