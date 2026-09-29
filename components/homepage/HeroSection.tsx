import Image from "next/image";
import Button from "@/components/ui/Button";
import BrandName from "@/components/ui/BrandName";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-brand-gold/30 bg-black">
      <div
        className="absolute inset-0 bg-[length:1500px_auto] bg-[42%_center] bg-no-repeat opacity-95"
        style={{
          backgroundImage: "url('/images/hero-car-bg.png')"
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/86 via-black/44 to-black/28" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/58" />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(212,175,55,0.055)_1px,transparent_1px),linear-gradient(rgba(212,175,55,0.055)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35" />

      <div className="relative mx-auto max-w-[1440px] px-6 py-16 md:px-8 lg:px-12 xl:px-16">
        <div className="grid min-h-[700px] items-center gap-12 lg:grid-cols-[0.95fr_0.85fr]">
          <div className="max-w-[650px]">
            <div className="flex flex-wrap gap-3">
              {["Independent Dealers", "24/7 Lead Capture", "Appointment Conversion"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-brand-gold/60 bg-black/45 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold backdrop-blur-sm"
                  >
                    {item}
                  </span>
                )
              )}
            </div>

            <h1 className="mt-8 max-w-[660px] font-heading text-[48px] font-bold leading-[1.06] tracking-[-0.055em] text-white md:text-[66px]">
              Convert more used car enquiries into{" "}
              <span className="text-brand-gold">appointments.</span>
            </h1>

            <p className="mt-8 max-w-[580px] text-[19px] leading-[1.65] text-white/84">
              <BrandName /> responds instantly, qualifies buyers, captures part
              exchanges and helps independent dealers turn more website visitors
              into real sales opportunities.
            </p>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row">
              <Button href="/book-demo">Book A Demo</Button>
              <Button href="#demo" variant="secondary">
                See How It Works
              </Button>
            </div>

            <div className="mt-10 grid gap-4 text-sm text-white/72 sm:grid-cols-3">
              <div className="border-l border-brand-gold/60 pl-4">
                <p className="font-heading text-2xl font-bold text-brand-gold">
                  24/7
                </p>
                <p className="mt-1 leading-6">Always-on enquiry response</p>
              </div>

              <div className="border-l border-brand-gold/60 pl-4">
                <p className="font-heading text-2xl font-bold text-brand-gold">
                  100%
                </p>
                <p className="mt-1 leading-6">Every website lead engaged</p>
              </div>

              <div className="border-l border-brand-gold/60 pl-4">
                <p className="font-heading text-2xl font-bold text-brand-gold">
                  5 Days
                </p>
                <p className="mt-1 leading-6">Typical managed deployment</p>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[430px] justify-self-center rounded-[22px] border border-brand-gold/70 bg-black/66 p-4 sm:p-5 shadow-[0_0_80px_rgba(212,175,55,0.24)] backdrop-blur-md lg:ml-auto lg:mr-0 lg:justify-self-end">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-5">
              <div className="flex items-center gap-4">
                <div className="flex h-13 w-13 items-center justify-center rounded-full border border-brand-gold text-lg font-black text-brand-gold">
                  AI
                </div>

                <div>
                  <p className="text-[17px] font-bold text-white">
                    <BrandName /> Assist
                  </p>
                  <p className="text-sm text-emerald-400">● Online</p>
                </div>
              </div>

              <span className="text-white/50">•••</span>
            </div>

            <div className="space-y-3 text-[13px]">
              <div className="ml-auto max-w-[78%] rounded-lg border border-brand-gold/30 bg-brand-gold/10 px-4 py-3 text-white">
                Do you have any automatic SUVs under £15,000?
              </div>

              <div className="max-w-[84%] rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-white">
                Yes — I found two suitable automatic SUVs currently available.
              </div>

              <div className="rounded-lg border border-white/10 bg-black/55">
                <div className="grid grid-cols-[74px_1fr_auto] items-center gap-3 border-b border-white/10 p-3">
                  <div className="relative h-[52px] w-[74px] overflow-hidden rounded-md border border-white/10 bg-white/5">
                    <Image
                      src="/images/demo-qashqai.png"
                      alt="Nissan Qashqai"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <p className="font-bold text-brand-gold">Nissan Qashqai</p>
                    <p className="text-xs text-white/75">1.5 dCi Tekna Auto</p>
                    <p className="text-xs text-brand-muted">2019 • 56k miles</p>
                  </div>

                  <p className="font-bold text-white">£13,995</p>
                </div>

                <div className="grid grid-cols-[74px_1fr_auto] items-center gap-3 p-3">
                  <div className="relative h-[52px] w-[74px] overflow-hidden rounded-md border border-white/10 bg-white/5">
                    <Image
                      src="/images/demo-sportage.png"
                      alt="Kia Sportage"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <p className="font-bold text-brand-gold">Kia Sportage</p>
                    <p className="text-xs text-white/75">
                      1.6 CRDi GT-Line Auto
                    </p>
                    <p className="text-xs text-brand-muted">2018 • 62k miles</p>
                  </div>

                  <p className="font-bold text-white">£14,750</p>
                </div>
              </div>

              <div className="max-w-[84%] rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-white">
                Would you like more details, finance options or to arrange a
                viewing?
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2.5">
              {["Vehicle details", "Book viewing", "Finance options"].map(
                (item) => (
                  <button
                    key={item}
                    className="rounded-md border border-brand-gold/70 px-2 py-3 text-[11px] font-semibold text-brand-gold transition hover:bg-brand-gold hover:text-black"
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            <div className="mt-4 rounded-lg border border-white/10 bg-white/5 px-4 py-4 text-white/40">
              Type your message...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




