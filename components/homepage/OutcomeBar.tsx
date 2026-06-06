const outcomes = [
  ["24/7", "Always-on lead capture"],
  ["100%", "Website enquiry coverage"],
  ["5 Days", "Typical deployment timeframe"],
  ["AI", "Sales assistant for dealers"]
];

export default function OutcomeBar() {
  return (
    <section className="border-b border-brand-gold/20 bg-black">
      <div className="mx-auto grid max-w-[1440px] gap-0 px-8 lg:grid-cols-4 lg:px-12 xl:px-16">
        {outcomes.map(([value, label]) => (
          <div
            key={label}
            className="border-x border-brand-gold/10 px-8 py-8 text-center"
          >
            <p className="font-heading text-4xl font-bold tracking-[-0.04em] text-brand-gold md:text-5xl">
              {value}
            </p>

            <p className="mt-3 text-[12px] font-bold uppercase tracking-[0.22em] text-white/70">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}