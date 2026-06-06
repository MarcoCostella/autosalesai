import Image from "next/image";
import Button from "@/components/ui/Button";
import BrandName from "@/components/ui/BrandName";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-brand-gold/30 bg-black">
      {/* Background image — reduced scale and shifted left for better balance */}
      <div
        className="absolute inset-0 bg-[length:1500px_auto] bg-[42%_center] bg-no-repeat opacity-95"
        style={{
          backgroundImage: "url('/images/hero-car-bg.png')"
        }}
      />

      {/* Readability overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/38 to-black/26" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/8 via-transparent to-black/52" />

      {/* Subtle premium grid */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(212,175,55,0.055)_1px,transparent_1px),linear-gradient(rgba(212,175,55,0.055)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35" />

      {/* Hero container */}
      <div className="relative mx-auto max-w-[1440px] px-8 py-20 lg:px-12 xl:px-16">
        <div className="grid min-h-[720px] items-center gap-10 lg:grid-cols-[0.95fr_0.85fr]">
          {/* Left content */}
          <div className="max-w-[640px]">
            <div className="inline-flex rounded-[18px] border border-brand-gold/70 bg-black/35 px-5 py-3 backdrop-blur-sm">
              <p className="text-[12px] font-bold uppercase tracking-[0.26em] text-brand-gold">
                AI Sales • Lead Conversion • Market Intelligence
              </p>
            </div>

            <h1 className="mt-8 max-w-[620px] font-heading text-[50px] font-bold leading-[1.08] tracking-[-0.055em] text-white md:text-[64px]">
              Sell more cars
              <br />
              without missing
              <br />
              another <span className="text-brand-gold">enquiry.</span>
            </h1>

            <p className="mt-8 max-w-[560px] text-[19px] leading-[1.65] text-white/84">
              <BrandName /> is an AI Sales Assistant built for independent car
              dealers. It captures, qualifies and converts enquiries 24/7 so you
              never miss another lead.
            </p>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row">
              <Button href="/book-demo">Book A Demo</Button>
              <Button href="#demo" variant="secondary">
                See How It Works
              </Button>
            </div>
          </div>

          {/* Right assistant widget — reduced and pulled left */}
          <div className="ml-auto mr-12 w-full max-w-[410px] rounded-[22px] border border-brand-gold/70 bg-black/62 p-5 shadow-[0_0_80px_rgba(212,175,55,0.24)] backdrop-blur-md">
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
              <div className="ml-auto max-w-[78%] rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-white">
                Do you have any automatic SUVs under £15,000?
              </div>

              <div className="max-w-[82%] rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-white">
                Yes, we currently have 2 automatic SUVs that match your budget:
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

              <div className="max-w-[82%] rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-white">
                Would you like vehicle details or to arrange a viewing?
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2.5">
              {["View details", "Arrange viewing", "More options"].map(
                (item) => (
                  <button
                    key={item}
                    className="rounded-md border border-brand-gold/70 px-2 py-3 text-[11px] font-semibold text-brand-gold"
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