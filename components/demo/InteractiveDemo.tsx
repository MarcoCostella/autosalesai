"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowRight, RotateCcw, CheckCircle2 } from "lucide-react";
import { demoScenarios, type DemoChoice, type LeadFields } from "@/lib/demo-data";
import ChatSimulation, { type ChatMessage } from "./ChatSimulation";
import LeadSummaryCard from "./LeadSummaryCard";

function initialMessages(index: number): ChatMessage[] {
  const scenario = demoScenarios[index];
  return [{ role: "customer", text: scenario.introduction }, { role: "assistant", text: scenario.steps[0].prompt, showVehicles: scenario.steps[0].showVehicles }];
}

export default function InteractiveDemo() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [messages, setMessages] = useState<ChatMessage[]>(() => initialMessages(0));
  const [summary, setSummary] = useState<LeadFields>(demoScenarios[0].initial);
  const [announcement, setAnnouncement] = useState("");
  const actionRef = useRef<HTMLDivElement>(null);
  const scenarioButtonsRef = useRef<HTMLDivElement>(null);
  const transitionLock = useRef(false);
  const scenario = demoScenarios[scenarioIndex];
  const complete = stepIndex === scenario.steps.length;
  const currentStep = scenario.steps[stepIndex];

  function reset(index: number) {
    setScenarioIndex(index);
    setStepIndex(0);
    setMessages(initialMessages(index));
    setSummary(demoScenarios[index].initial);
    setAnnouncement(`${demoScenarios[index].label} example started. Choose a reply below the conversation.`);
  }

  function choose(choice: DemoChoice) {
    if (transitionLock.current || complete) return;
    transitionLock.current = true;
    const nextIndex = stepIndex + 1;
    const nextStep = scenario.steps[nextIndex];
    const newMessages: ChatMessage[] = [{ role: "customer", text: choice.reply }, { role: "assistant", text: choice.response }];
    if (nextStep) newMessages.push({ role: "assistant", text: nextStep.prompt, showVehicles: nextStep.showVehicles });
    setMessages((previous) => [...previous, ...newMessages]);
    setSummary((previous) => ({ ...previous, ...choice.capture }));
    setStepIndex(nextIndex);
    setAnnouncement(`${choice.response} ${nextStep ? nextStep.prompt : "Example complete. Dealer summary ready."}`);
    requestAnimationFrame(() => {
      actionRef.current?.focus({ preventScroll: true });
      transitionLock.current = false;
    });
  }

  return (
    <div aria-labelledby="demo-heading">
      <div className="mx-auto max-w-[760px] text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F5B800]">From first question to next step</p>
        <h2 id="demo-heading" className="mt-4 font-heading text-3xl font-bold tracking-[-0.04em] text-white md:text-5xl">See how AutoSalesAI works</h2>
        <p className="mt-5 text-base leading-7 text-white/65">Be the buyer. Choose an enquiry, follow the conversation and watch a useful sales opportunity take shape for your team.</p>
        <p className="mt-4 inline-block rounded-full border border-[#F5B800]/25 bg-[#F5B800]/5 px-4 py-2 text-xs text-[#F5B800]">Interactive demonstration · sample stock · no real bookings</p>
      </div>
      <div ref={scenarioButtonsRef} role="group" aria-label="Choose an enquiry scenario" className="my-8 flex flex-wrap justify-center gap-3">
        {demoScenarios.map((item, index) => <button key={item.id} type="button" aria-pressed={scenarioIndex === index} aria-controls="guided-demo-content" onClick={() => reset(index)} className={`min-h-11 rounded-lg border px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B800] ${scenarioIndex === index ? "border-[#F5B800] bg-[#F5B800] text-black" : "border-white/20 bg-white/5 text-white hover:border-[#F5B800]/60"}`}>{index + 1}. {item.label}</button>)}
      </div>
      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">{announcement}</p>
      <div id="guided-demo-content" className="grid items-start gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="overflow-hidden rounded-2xl border border-[#F5B800]/30 bg-[#080e11]">
          <ChatSimulation messages={messages} />
          <div ref={actionRef} tabIndex={-1} className="border-t border-white/10 bg-black/20 p-4 outline-none md:p-5">
            {!complete ? <>
              <div className="mb-3 flex items-center justify-between gap-3 text-xs"><p className="font-semibold text-[#F5B800]">Your next reply</p><span className="text-white/45">Step {stepIndex + 1} of {scenario.steps.length}</span></div>
              <p className="mb-3 text-sm leading-6 text-white/75">{currentStep.prompt}</p>
              <div key={`${scenario.id}-${stepIndex}`} className="flex flex-wrap gap-2">{currentStep.choices.map((choice) => <button key={choice.label} type="button" onClick={() => choose(choice)} className="min-h-11 rounded-lg border border-[#F5B800]/50 px-4 py-3 text-left text-sm font-semibold text-[#F5B800] transition hover:bg-[#F5B800]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5B800]">{choice.label}</button>)}</div>
            </> : <div className="flex gap-3"><CheckCircle2 aria-hidden="true" className="mt-1 shrink-0 text-emerald-400" size={22} /><div><h3 className="text-base font-bold text-white">{scenario.outcome}</h3><p className="mt-2 text-sm leading-6 text-white/60">In this example, the team has the buyer’s requirements, contact preference and requested next step. A real viewing would still need dealership confirmation.</p></div></div>}
            <button type="button" onClick={() => { reset(scenarioIndex); }} className="mt-5 inline-flex min-h-11 items-center gap-2 rounded text-xs text-white/55 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5B800]"><RotateCcw aria-hidden="true" size={14} />Restart this example</button>
          </div>
        </div>
        <LeadSummaryCard summary={summary} complete={complete} />
      </div>
      {complete && <div className="mt-8 rounded-2xl border border-[#F5B800]/25 bg-[#F5B800]/5 p-6 text-center md:p-8"><h3 className="text-2xl font-bold text-white">Imagine this working with your stock.</h3><p className="mx-auto mt-3 max-w-[600px] text-sm leading-7 text-white/65">See how the assistant could fit your dealership’s vehicles, enquiry process and sales team.</p><div className="mt-5 flex flex-wrap justify-center gap-3"><button type="button" onClick={() => { reset((scenarioIndex + 1) % demoScenarios.length); scenarioButtonsRef.current?.querySelectorAll("button")[(scenarioIndex + 1) % demoScenarios.length]?.focus(); }} className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:border-[#F5B800]">Try another scenario</button><Link href="/book-demo" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#F5B800] px-5 py-3 text-sm font-bold text-black hover:bg-[#ffd24d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B800]">Book a demo for your dealership<ArrowRight aria-hidden="true" size={17} /></Link></div></div>}
    </div>
  );
}
