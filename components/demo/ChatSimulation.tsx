"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { sampleVehicles } from "@/lib/demo-data";

export type ChatMessage = { role: "customer" | "assistant"; text: string; showVehicles?: boolean };

export default function ChatSimulation({ messages }: { messages: ChatMessage[] }) {
  const transcriptRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const panel = transcriptRef.current;
    if (panel) panel.scrollTop = panel.scrollHeight;
  }, [messages]);

  return (
    <>
      <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
        <div aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F5B800]/70 text-sm font-bold text-[#F5B800]">AI</div>
        <div><h3 className="font-semibold text-white">The customer conversation</h3><p className="mt-1 text-xs text-white/50">AutoSalesAI Assist · guided example</p></div>
      </div>
      <div ref={transcriptRef} role="region" aria-label="Example conversation history" tabIndex={0} className="max-h-[460px] min-h-[320px] space-y-4 overflow-y-auto overscroll-contain p-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5B800] md:p-5">
        {messages.map((message, index) => (
          <div key={index}>
            <div className={`flex ${message.role === "customer" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[92%] rounded-2xl px-4 py-3 text-sm leading-6 ${message.role === "customer" ? "rounded-br-sm border border-[#F5B800]/30 bg-[#F5B800]/10 text-white" : "rounded-bl-sm bg-white/[0.07] text-white/90"}`}>
                <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-white/45">{message.role === "customer" ? "Sample buyer" : "Assistant"}</span>
                {message.text}
              </div>
            </div>
            {message.showVehicles && (
              <div className="mt-3 space-y-2">
                {sampleVehicles.map((vehicle) => (
                  <div key={vehicle.name} className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 p-3">
                    <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg"><Image src={vehicle.image} alt={vehicle.name} fill sizes="80px" className="object-cover" /></div>
                    <div className="min-w-0"><p className="text-sm font-bold text-[#F5B800]">{vehicle.name}</p><p className="mt-1 text-xs leading-5 text-white/60">{vehicle.details}</p><p className="mt-1 text-sm font-bold text-white">{vehicle.price} <span className="text-[10px] font-normal text-white/40">· sample stock</span></p></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
