import Image from "next/image";

type TrustItem = {
  label: string;
  sublabel: string;
  src: string;
};

type CapabilityCard = {
  title: string;
  body: string;
  tag: string;
  image: string;
  icon: string;
};

const trustItems: TrustItem[] = [
  { label: "DealerKit", sublabel: "Compatible", src: "/images/dealerkit_logo.jpg" },
  { label: "AutoTrader", sublabel: "Friendly", src: "/images/Autotrader.jpg" },
  { label: "WhatsApp", sublabel: "Business", src: "/images/Whatsapp.JPG" },
  { label: "HubSpot", sublabel: "Ready", src: "/images/hubspot.JPG" },
  { label: "UK Based", sublabel: "Support", src: "/images/UK%20based%20support.JPG" },
  { label: "GDPR", sublabel: "Compliant", src: "/images/gdpr.JPG" }
];

const cards: CapabilityCard[] = [
  {
    title: "Instant Lead Response",
    body: "Engage every enquiry the moment it hits your website, day or night.",
    tag: "Never Miss An Opportunity",
    image: "/images/lead-response.JPG",
    icon: "ϟ"
  },
  {
    title: "Dealer-Specific Qualification",
    body: "Qualifies buyers by budget, vehicle interest, finance needs and part exchange.",
    tag: "Better Leads, Higher Close Rate",
    image: "/images/Dealer-qualification.JPG",
    icon: "◎"
  },
  {
    title: "Appointment Intent",
    body: "Guides serious buyers to book viewings, callbacks and next steps.",
    tag: "More Appointments Booked",
    image: "/images/appointment-intent.JPG",
    icon: "▣"
  },
  {
    title: "Human Handover",
    body: "Seamlessly passes qualified leads to your team with full conversation context.",
    tag: "Controlled & Seamless",
    image: "/images/human-handover.JPG",
    icon: "🤝"
  }
];

export default function OutcomeBar() {
  return (
    <section className="relative overflow-hidden border-b border-brand-gold/20 bg-black">
      <div className="mx-auto max-w-[1536px] px-6 py-14 md:px-10 xl:px-12">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="mx-auto w-full max-w-[980px] overflow-hidden rounded-[26px] border border-brand-gold/30 bg-black">
            <div className="grid grid-cols-2 divide-x divide-y divide-brand-gold/25 sm:grid-cols-3 lg:grid-cols-6 lg:divide-y-0">
              {trustItems.map((item) => (
                <div
                  key={item.label}
                  className="flex h-[130px] flex-col items-center justify-center px-4 text-center"
                >
                  <div className="relative mb-3 h-12 w-24">
                    <Image
                      src={item.src}
                      alt={item.label}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <p className="text-sm font-black uppercase tracking-[0.08em] text-white">
                    {item.label}
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.08em] text-white/80">
                    {item.sublabel}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="max-w-[560px] pt-6 text-lg leading-8 text-white/75 lg:justify-self-end">
            AutoSalesAI is purpose-built for independent used car dealers.{" "}
            <span className="font-bold text-brand-gold">More conversations.</span>{" "}
            More appointments.{" "}
            <span className="font-bold text-brand-gold">More sales.</span>
          </p>
        </div>

        <div className="mb-9">
          <p className="text-[14px] font-black uppercase tracking-[0.28em] text-brand-gold">
            Built For Independent Dealers
          </p>

          <h2 className="mt-5 max-w-[760px] font-heading text-[42px] font-bold leading-[1.08] tracking-[-0.055em] text-white md:text-[56px]">
            We help you respond faster, qualify better and close more deals.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-4">
          {cards.map((card) => (
            <article
              key={card.title}
              className="overflow-hidden rounded-[22px] border border-brand-gold/35 bg-black"
            >
              <div className="relative h-[330px] border-b border-brand-gold/30">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-7 py-7">
                <div className="mb-5 flex items-center gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-brand-gold text-3xl text-brand-gold">
                    {card.icon}
                  </div>

                  <h3 className="font-heading text-[24px] font-bold uppercase leading-tight tracking-[-0.03em] text-white">
                    {card.title}
                  </h3>
                </div>

                <p className="min-h-[105px] text-[18px] leading-8 text-white/80">
                  {card.body}
                </p>

                <div className="mt-8 rounded-full border border-brand-gold/25 bg-brand-gold/5 px-4 py-3 text-center text-[14px] font-black uppercase tracking-[0.16em] text-brand-gold">
                  {card.tag}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}