import Link from "next/link";
import Button from "@/components/ui/Button";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-brand-black px-6 py-24 text-white">
      <section className="mx-auto max-w-4xl border border-brand-gold/20 bg-[#0b0b0b] p-8 md:p-14">
        <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-brand-gold">
          Demo Request Received
        </p>

        <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-[-0.04em] text-white md:text-6xl">
          Thank you. We’ll be in touch shortly.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-muted">
          Your request has been received by{" "}
          <span className="font-semibold text-white">
            AutoSales<span className="text-brand-gold">AI</span>
          </span>
          . We’ll review your dealership details and contact you to arrange a
          personalised demonstration.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="/">
            <Button>Return Home</Button>
          </Link>

          <Link
            href="/ai-sales-assistant"
            className="inline-flex items-center justify-center border border-white/15 px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:border-brand-gold hover:text-brand-gold"
          >
            View AutoSalesAI Assist
          </Link>
        </div>
      </section>
    </main>
  );
}