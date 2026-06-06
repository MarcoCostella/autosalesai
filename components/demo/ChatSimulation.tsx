import type { DemoScenario } from "@/lib/demo-data";
import BrandName from "@/components/ui/BrandName";

export default function ChatSimulation({
  scenario
}: {
  scenario: DemoScenario;
}) {
  return (
    <div className="border border-brand-gold/20 bg-[#0b0b0b] p-6 shadow-gold">
      <div className="mb-6 flex items-center gap-4 border-b border-white/10 pb-5">
        <div className="flex h-12 w-12 items-center justify-center border border-brand-gold bg-brand-gold text-sm font-black text-black">
          AI
        </div>

        <div>
          <p className="font-heading text-lg font-bold text-white">
            <BrandName /> Assist
          </p>

          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-emerald-400">
            Online
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {scenario.messages.map((message, index) => {
          const isAssistant = message.role === "assistant";

          return (
            <div
              key={index}
              className={`flex ${
                isAssistant ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`max-w-[85%] px-4 py-3 text-sm leading-6 ${
                  isAssistant
                    ? "bg-white/10 text-white"
                    : "border border-brand-gold/40 bg-brand-gold/10 text-white"
                }`}
              >
                {message.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
