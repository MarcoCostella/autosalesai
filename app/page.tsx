import Image from "next/image";
import Link from "next/link";

const GOLD = "#F5B800";
const CYAN = "#00BDF2";

export default function HomePage() {
  return (
    <main className="bg-[#020506] text-white">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-white/10">
        {/* CAR BACKGROUND */}
        <div className="absolute inset-0">
          <Image
            src="/images/home/home-hero-car.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[59%_48%]"
          />

          {/* darkening to reproduce concept */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/65" />

          {/* stronger left readability */}
          <div className="absolute inset-y-0 left-0 w-[42%] bg-black/35" />
        </div>

        <div className="relative mx-auto max-w-[1536px] px-8 pb-7 pt-7 xl:px-10">
          <div className="grid min-h-[390px] grid-cols-[560px_1fr] gap-4">

            {/* LEFT HERO */}
            <div className="relative z-20 pt-2">
              <p className="text-[13px] font-semibold uppercase tracking-[0.20em] text-white">
                Built For Used Car Dealers
              </p>

              <h1 className="mt-3 font-heading text-[55px] font-bold leading-[0.96] tracking-[-0.045em] text-white">
                Smarter Decisions.
                <span
                  className="mt-2 block"
                  style={{ color: GOLD }}
                >
                  Higher Profits.
                </span>
              </h1>

              <p className="mt-5 max-w-[520px] text-[16px] leading-[1.45] text-white/88">
                AutoSalesAI combines an AI Sales Assistant and powerful
                Market Intelligence to help used car dealers source the right
                cars, price with confidence, sell faster and grow their business.
              </p>

              {/* FOUR BENEFITS */}
              <div className="mt-6 grid grid-cols-4 gap-0">
                <Benefit
                  icon="car"
                  title="Find Better Stock"
                  text="Live auction data, market insights and AI recommendations"
                />

                <Benefit
                  icon="target"
                  title="Price with Confidence"
                  text="Real market valuations, profit & ROI analysis"
                />

                <Benefit
                  icon="chart"
                  title="Sell Faster"
                  text="AI-powered descriptions, buyer targeting and enquiry responses"
                />

                <Benefit
                  icon="shield"
                  title="Reduce Risk"
                  text="Condition alerts, market trends and demand forecasting"
                />
              </div>
            </div>

            {/* RIGHT HERO */}
            <div className="relative min-h-[390px]">

              {/* ACQUISITION CARD */}
              <div className="absolute bottom-[42px] right-[295px] z-30 w-[198px] rounded-[13px] border border-[#D89D00] bg-[#071014]/95 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.6)]">

                <div className="flex items-start justify-between gap-3">
                  <div className="relative h-[58px] w-[94px] overflow-hidden rounded-md">
                    <Image
                      src="/images/demo-qashqai.png"
                      alt="Audi A3"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="text-center">
                    <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full border-[3px] border-[#29e875] text-[20px] font-bold">
                      92
                    </div>
                    <p className="mt-1 text-[9px] text-white/70">
                      AI Score
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-[16px] font-bold">
                  Audi A3
                </p>

                <p className="text-[11px] text-white/75">
                  1.6 TDI S Line
                </p>

                <p className="text-[11px] text-white/65">
                  2019 · 62,000 miles
                </p>

                <div className="mt-3 space-y-[7px] border-t border-white/10 pt-3 text-[11px]">
                  <Metric label="Est. Retail" value="£14,100" />
                  <Metric label="Target Bid" value="£9,800" />
                  <Metric label="Max Bid" value="£10,600" />
                  <Metric label="Est. Profit" value="£3,410" green />
                  <Metric label="ROI" value="35%" green />
                </div>
              </div>

              {/* AI ASSISTANT PANEL */}
              <div className="absolute right-0 top-[-12px] z-30 w-[285px] rounded-[22px] border border-[#B88922] bg-[#05090b]/95 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.7)]">

                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-full border"
                      style={{
                        borderColor: GOLD,
                        color: GOLD
                      }}
                    >
                      <PersonIcon />
                    </div>

                    <div>
                      <p className="text-[11px] font-semibold">
                        AutoSalesAI Assistant
                      </p>
                      <p className="text-[9px] text-[#35e77a]">
                        ● Online
                      </p>
                    </div>
                  </div>

                  <span className="text-white/60">•••</span>
                </div>

                <div className="mt-3 space-y-2">

                  <div className="ml-auto max-w-[75%] rounded-[9px] border border-white/10 bg-white/10 px-3 py-2 text-[10px] leading-[1.35]">
                    Find me 3 profitable SUVs at BCA next week under £15,000
                  </div>

                  <div className="max-w-[84%] rounded-[9px] border border-white/10 bg-white/10 px-3 py-2 text-[10px] leading-[1.35]">
                    Here are 3 high-potential SUVs based on current market data,
                    profitability and demand.
                  </div>

                  <VehicleResult
                    image="/images/demo-qashqai.png"
                    name="Nissan Qashqai"
                    meta="2020 · 56k miles"
                    price="£13,995"
                    profit="Est. Profit: £4,200"
                  />

                  <VehicleResult
                    image="/images/demo-sportage.png"
                    name="Kia Sportage"
                    meta="2019 · 62k miles"
                    price="£14,750"
                    profit="Est. Profit: £3,850"
                  />

                  <VehicleResult
                    image="/images/demo-qashqai.png"
                    name="VW Tiguan"
                    meta="2020 · 48k miles"
                    price="£14,300"
                    profit="Est. Profit: £3,600"
                  />
                </div>

                <div className="mt-3 flex items-center justify-between rounded-[9px] border border-white/10 bg-white/[0.06] px-3 py-[10px]">
                  <span className="text-[9px] text-white/45">
                    Ask anything about stock, pricing or market trends...
                  </span>

                  <span className="text-[16px]">→</span>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              METRIC STRIP
          ===================================================== */}
          <div className="relative z-30 mt-0 grid grid-cols-6 rounded-[13px] border border-[#A87700] bg-[#03090b]/95 px-3 py-4">

            <Statistic
              icon="car"
              value="15,000+"
              label="Vehicles analysed daily"
            />

            <Statistic
              icon="hammer"
              value="50+"
              label="Auction sources"
            />

            <Statistic
              icon="users"
              value="250+"
              label="Dealers already using AutoSalesAI"
            />

            <Statistic
              icon="chart"
              value="+28%"
              label="Average increase in gross profit"
            />

            <Statistic
              icon="clock"
              value="24/7"
              label="AI working for you"
            />

            <Statistic
              icon="star"
              value="98%"
              label="Customer satisfaction"
              last
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          PRODUCT PANELS
      ========================================================= */}
      <section className="bg-[#020506]">
        <div className="mx-auto grid max-w-[1536px] grid-cols-2 gap-3 px-8 py-3 xl:px-10">

          {/* SALES ASSISTANT */}
          <div className="relative min-h-[352px] overflow-hidden rounded-[12px] border border-[#987000] bg-[radial-gradient(circle_at_55%_50%,rgba(181,130,0,0.18),rgba(22,17,3,0.82)_42%,rgba(8,8,3,0.97)_100%)] p-5">

            <div className="grid h-full grid-cols-[44%_30%_26%]">

              <div>
                <div
                  className="flex items-center gap-2 text-[13px] font-bold"
                  style={{ color: GOLD }}
                >
                  <ChatIcon />
                  AI SALES ASSISTANT
                </div>

                <h2 className="mt-3 text-[23px] font-bold">
                  Your 24/7 Virtual Sales Team
                </h2>

                <p className="mt-2 max-w-[330px] text-[12px] leading-[1.5] text-white/84">
                  Instantly handle enquiries, qualify buyers, book viewings
                  and follow up automatically. Save time, sell more cars and
                  never miss an opportunity.
                </p>

                <div className="mt-4 space-y-[8px]">
                  <Check text="Instant enquiry responses (web, phone, social)" />
                  <Check text="Qualify buyers and understand their needs" />
                  <Check text="Book viewings and test drives" />
                  <Check text="Generate tailored vehicle descriptions" />
                  <Check text="Follow-up messages that convert" />
                  <Check text="Works across your website, WhatsApp, email and more" />
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-center justify-center">
                <div className="h-[315px] w-[165px] rounded-[26px] border border-white/30 bg-black p-[7px] shadow-2xl">
                  <div className="h-full rounded-[19px] border border-white/10 bg-[#071011] px-3 py-3">

                    <div className="text-center text-[7px] text-white/50">
                      9:41
                    </div>

                    <div className="mt-2 flex items-center gap-2">
                      <div
                        className="flex h-7 w-7 items-center justify-center rounded-full border"
                        style={{
                          borderColor: GOLD,
                          color: GOLD
                        }}
                      >
                        AI
                      </div>

                      <div>
                        <p className="text-[8px] font-bold">
                          AutoSalesAI Assistant
                        </p>
                        <p className="text-[7px] text-green-400">
                          ● Online
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 rounded-lg bg-white/10 p-2 text-[8px]">
                      Hi, I'm AutoSalesAI. How can I help you today?
                    </div>

                    <div
                      className="ml-auto mt-2 max-w-[80%] rounded-lg px-2 py-2 text-[8px]"
                      style={{
                        backgroundColor: "rgba(245,184,0,.23)"
                      }}
                    >
                      I'm looking for an SUV under £15,000
                    </div>

                    <div className="mt-2 rounded-lg bg-white/10 p-2 text-[8px]">
                      Great! Here are 3 suitable options based on your preferences.
                    </div>

                    <MiniPhoneCar
                      image="/images/demo-qashqai.png"
                      name="Nissan Qashqai"
                      meta="2020 · 56k miles"
                      price="£13,995"
                    />

                    <MiniPhoneCar
                      image="/images/demo-sportage.png"
                      name="Kia Sportage"
                      meta="2019 · 62k miles"
                      price="£14,750"
                    />

                    <MiniPhoneCar
                      image="/images/demo-qashqai.png"
                      name="VW Tiguan"
                      meta="2020 · 48k miles"
                      price="£14,300"
                    />
                  </div>
                </div>
              </div>

              {/* FEATURE TILES */}
              <div className="flex flex-col justify-center gap-3 pl-1">
                <AssistantFeature
                  icon="chat"
                  text="Handles enquiries instantly"
                />
                <AssistantFeature
                  icon="users"
                  text="Qualifies genuine buyers"
                />
                <AssistantFeature
                  icon="calendar"
                  text="Books appointments automatically"
                />
                <AssistantFeature
                  icon="bell"
                  text="Follows up until the sale"
                />
              </div>
            </div>

            <Link
              href="/ai-sales-assistant"
              aria-label="Explore AI Sales Assistant"
              className="absolute inset-0 z-40"
            />
          </div>

          {/* MARKET INTELLIGENCE */}
          <div className="relative min-h-[352px] overflow-hidden rounded-[12px] border border-[#0096c9] bg-[radial-gradient(circle_at_70%_50%,rgba(0,116,171,0.20),rgba(2,15,21,0.9)_50%,rgba(1,8,11,1)_100%)] p-5">

            <div className="grid h-full grid-cols-[40%_60%] gap-4">

              <div>
                <div
                  className="flex items-center gap-2 text-[13px] font-bold"
                  style={{ color: CYAN }}
                >
                  <ChartIcon />
                  MARKET INTELLIGENCE
                </div>

                <h2 className="mt-3 text-[23px] font-bold">
                  Better Data. Better Buys.
                </h2>

                <p className="mt-2 text-[12px] leading-[1.5] text-white/84">
                  Access live auction data, pricing intelligence and profit
                  analytics to help you buy the right cars at the right price —
                  before your competition.
                </p>

                <div className="mt-4 space-y-[8px]">
                  <BlueCheck text="Live auction & stock data (BCA, Manheim + more)" />
                  <BlueCheck text="Real market valuations and pricing trends" />
                  <BlueCheck text="Profit & ROI calculations" />
                  <BlueCheck text="Demand forecasting and market insights" />
                  <BlueCheck text="Risk and condition analysis" />
                  <BlueCheck text="Spot opportunities before others" />
                </div>
              </div>

              {/* DASHBOARD MOCKUP */}
              <div className="flex items-center">
                <div className="w-full rounded-[9px] border border-[#008bb7] bg-[#040b0f] p-2">

                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-[10px] font-bold">
                      Market Overview
                    </p>

                    <div className="rounded bg-white/5 px-2 py-1 text-[7px] text-white/60">
                      Last 7 days⌄
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-1.5">
                    <DashMetric
                      label="Upcoming Auctions"
                      value="14"
                      change="+27%"
                    />
                    <DashMetric
                      label="Vehicles Analysed"
                      value="1,256"
                      change="+16%"
                    />
                    <DashMetric
                      label="Avg. Est. Profit"
                      value="£3,240"
                      change="+15%"
                    />
                    <DashMetric
                      label="Conversion Rate"
                      value="38%"
                      change="+5pp"
                    />
                  </div>

                  <div className="mt-2 grid grid-cols-[1.15fr_.85fr] gap-1.5">

                    <div className="rounded border border-white/10 bg-white/[0.035] p-2">
                      <p className="text-[8px] font-semibold">
                        Auction Volume (Next 7 Days)
                      </p>

                      <div className="mt-3 flex h-[65px] items-end justify-around gap-2">
                        {[32, 42, 48, 58, 66, 71, 80].map(
                          (height, i) => (
                            <div
                              key={i}
                              className="w-[13px] bg-gradient-to-t from-[#682be5] to-[#8068ff]"
                              style={{
                                height: `${height}%`
                              }}
                            />
                          )
                        )}
                      </div>

                      <div className="mt-1 flex justify-around text-[6px] text-white/50">
                        <span>21</span>
                        <span>22</span>
                        <span>23</span>
                        <span>24</span>
                        <span>25</span>
                        <span>26</span>
                        <span>27</span>
                      </div>
                    </div>

                    <div className="rounded border border-white/10 bg-white/[0.035] p-2">
                      <p className="text-[8px] font-semibold">
                        Source Breakdown
                      </p>

                      <div className="mt-2 flex items-center justify-center gap-3">

                        <div className="relative h-[72px] w-[72px] rounded-full bg-[conic-gradient(#2bbcff_0_50%,#e88965_50%_86%,#f3c24d_86%_100%)]">
                          <div className="absolute inset-[15px] flex items-center justify-center rounded-full bg-[#071014]">
                            <div className="text-center">
                              <p className="text-[13px] font-bold">
                                14
                              </p>
                              <p className="text-[6px]">
                                Total
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2 text-[6px]">
                          <p>
                            <span className="text-[#2bbcff]">●</span>{" "}
                            BCA 7 (50%)
                          </p>
                          <p>
                            <span className="text-[#e88965]">●</span>{" "}
                            Manheim 5 (36%)
                          </p>
                          <p>
                            <span className="text-[#f3c24d]">●</span>{" "}
                            Dealer Auction 2 (14%)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 rounded border border-white/10 bg-white/[0.035] p-2">
                    <p className="mb-2 text-[8px] font-semibold">
                      Top Opportunities
                    </p>

                    <div className="grid grid-cols-[1.7fr_.9fr_.9fr_.8fr_.8fr_.9fr_.6fr_.5fr] border-b border-white/10 pb-1 text-[6px] text-white/55">
                      <span>Vehicle</span>
                      <span>Auction</span>
                      <span>Est. Retail</span>
                      <span>Target Bid</span>
                      <span>Max Bid</span>
                      <span>Est. Profit</span>
                      <span>ROI</span>
                      <span>Score</span>
                    </div>

                    <OpportunityRow
                      vehicle="VW Golf GTD"
                      retail="£13,250"
                      target="£8,900"
                      max="£9,700"
                      profit="£3,620"
                      roi="40%"
                      score="97"
                    />

                    <OpportunityRow
                      vehicle="Audi A3"
                      retail="£14,100"
                      target="£9,800"
                      max="£10,600"
                      profit="£3,410"
                      roi="35%"
                      score="95"
                    />

                    <OpportunityRow
                      vehicle="Ford Focus ST"
                      retail="£10,230"
                      target="£7,250"
                      max="£7,900"
                      profit="£2,980"
                      roi="41%"
                      score="94"
                    />
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/market-intelligence"
              aria-label="Explore Market Intelligence"
              className="absolute inset-0 z-40"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          TRUST / CREDIBILITY STRIP
      ========================================================= */}
      <section className="border-t border-white/10 bg-[#010506]">
        <div className="mx-auto max-w-[1536px] px-8 py-3 xl:px-10">

          <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-white/80">
            Trusted By Independent Dealers Across The UK
          </p>

          <div className="mt-3 grid grid-cols-[1.6fr_.95fr] items-center">

            <div className="grid grid-cols-5 items-center gap-7 border-r border-white/10 pr-8 text-center">
              <BrandText name="AutoTrader" />
              <BrandText name="MOTORTRADER" />
              <BrandText name="CarDealer." />
              <BrandText name="AM UsedCar" />
              <BrandText name="blackhorse" />
            </div>

            <div className="grid grid-cols-3 gap-4 pl-7">
              <TrustItem
                icon="shield"
                title="No long-term contracts"
                text="Cancel anytime"
              />

              <TrustItem
                icon="headset"
                title="Dedicated support"
                text="From real automotive experts"
              />

              <TrustItem
                icon="chart"
                title="Proven results"
                text="More profit. Less risk."
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   COMPONENTS
========================================================= */

function Benefit({
  icon,
  title,
  text
}: {
  icon: IconType;
  title: string;
  text: string;
}) {
  return (
    <div className="min-h-[112px] border-r border-white/10 px-3 first:pl-0 last:border-r-0">
      <div
        className="mb-2 flex h-[39px] w-[39px] items-center justify-center rounded-[8px] border"
        style={{
          borderColor: GOLD,
          color: GOLD
        }}
      >
        <Icon name={icon} />
      </div>

      <p className="text-[12px] font-bold leading-tight">
        {title}
      </p>

      <p className="mt-[6px] text-[10px] leading-[1.45] text-white/75">
        {text}
      </p>
    </div>
  );
}

function Metric({
  label,
  value,
  green = false
}: {
  label: string;
  value: string;
  green?: boolean;
}) {
  return (
    <div className="flex justify-between">
      <span className="text-white/75">
        {label}
      </span>

      <span
        className={
          green
            ? "font-bold text-[#29e875]"
            : "font-bold text-white"
        }
      >
        {value}
      </span>
    </div>
  );
}

function VehicleResult({
  image,
  name,
  meta,
  price,
  profit
}: {
  image: string;
  name: string;
  meta: string;
  price: string;
  profit: string;
}) {
  return (
    <div className="grid grid-cols-[43px_1fr_auto] items-center gap-2 rounded-[8px] border border-white/10 bg-black/70 p-[6px]">

      <div className="relative h-[35px] w-[43px] overflow-hidden rounded">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div>
        <p
          className="text-[9px] font-bold"
          style={{ color: GOLD }}
        >
          {name}
        </p>

        <p className="text-[7px] text-white/55">
          {meta}
        </p>

        <p className="text-[8px] text-[#36d77c]">
          {profit}
        </p>
      </div>

      <p className="text-[10px] font-bold">
        {price}
      </p>
    </div>
  );
}

function Statistic({
  icon,
  value,
  label,
  last = false
}: {
  icon: IconType;
  value: string;
  label: string;
  last?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-4 px-4 ${
        last ? "" : "border-r border-[#694f13]"
      }`}
    >
      <div
        className="flex h-[44px] w-[44px] shrink-0 items-center justify-center"
        style={{ color: GOLD }}
      >
        <Icon name={icon} size={34} />
      </div>

      <div>
        <p
          className="text-[19px] font-bold leading-none"
          style={{ color: GOLD }}
        >
          {value}
        </p>

        <p className="mt-[6px] text-[9px] text-white/85">
          {label}
        </p>
      </div>
    </div>
  );
}

function Check({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-[11px]">
      <span
        className="flex h-[15px] w-[15px] items-center justify-center rounded-full text-[9px] font-black text-black"
        style={{ backgroundColor: GOLD }}
      >
        ✓
      </span>

      <span>{text}</span>
    </div>
  );
}

function BlueCheck({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-[11px]">
      <span
        className="flex h-[15px] w-[15px] items-center justify-center rounded-full text-[9px] font-black text-black"
        style={{ backgroundColor: CYAN }}
      >
        ✓
      </span>

      <span>{text}</span>
    </div>
  );
}

function MiniPhoneCar({
  image,
  name,
  meta,
  price
}: {
  image: string;
  name: string;
  meta: string;
  price: string;
}) {
  return (
    <div className="mt-[5px] grid grid-cols-[35px_1fr] gap-2">
      <div className="relative h-[28px] overflow-hidden rounded">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div>
        <p
          className="text-[7px] font-semibold"
          style={{ color: GOLD }}
        >
          {name}
        </p>

        <p className="text-[6px] text-white/55">
          {meta}
        </p>

        <p className="text-[7px] font-bold">
          {price}
        </p>
      </div>
    </div>
  );
}

function AssistantFeature({
  icon,
  text
}: {
  icon: IconType;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-[7px] border border-[#55400b] bg-black/30 px-3 py-3">
      <div style={{ color: GOLD }}>
        <Icon name={icon} size={24} />
      </div>

      <p className="text-[10px] leading-[1.35]">
        {text}
      </p>
    </div>
  );
}

function DashMetric({
  label,
  value,
  change
}: {
  label: string;
  value: string;
  change: string;
}) {
  return (
    <div className="rounded border border-white/10 bg-white/[0.035] p-2">
      <p className="text-[6px] text-white/60">
        {label}
      </p>

      <p className="mt-1 text-[14px] font-bold">
        {value}
      </p>

      <p className="text-[7px] text-[#40e77c]">
        {change}
      </p>
    </div>
  );
}

function OpportunityRow({
  vehicle,
  retail,
  target,
  max,
  profit,
  roi,
  score
}: {
  vehicle: string;
  retail: string;
  target: string;
  max: string;
  profit: string;
  roi: string;
  score: string;
}) {
  return (
    <div className="grid grid-cols-[1.7fr_.9fr_.9fr_.8fr_.8fr_.9fr_.6fr_.5fr] items-center border-b border-white/5 py-[4px] text-[6px]">

      <span className="font-semibold">{vehicle}</span>
      <span>BCA Leeds</span>
      <span>{retail}</span>
      <span>{target}</span>
      <span>{max}</span>

      <span
        className="font-semibold"
        style={{ color: GOLD }}
      >
        {profit}
      </span>

      <span className="font-bold text-[#42e478]">
        {roi}
      </span>

      <span className="font-bold text-[#42e478]">
        {score}
      </span>
    </div>
  );
}

function BrandText({ name }: { name: string }) {
  return (
    <div className="text-[17px] font-bold tracking-[-0.03em] text-white">
      {name}
    </div>
  );
}

function TrustItem({
  icon,
  title,
  text
}: {
  icon: IconType;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div style={{ color: GOLD }}>
        <Icon
          name={icon}
          size={29}
        />
      </div>

      <div>
        <p className="text-[8px] font-semibold">
          {title}
        </p>

        <p className="mt-1 text-[7px] text-white/65">
          {text}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   SIMPLE INLINE SVG ICONS
========================================================= */

type IconType =
  | "car"
  | "target"
  | "chart"
  | "shield"
  | "hammer"
  | "users"
  | "clock"
  | "star"
  | "chat"
  | "calendar"
  | "bell"
  | "headset";

function Icon({
  name,
  size = 22
}: {
  name: IconType;
  size?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const
  };

  if (name === "car") {
    return (
      <svg {...common}>
        <path d="M3 16V10l2-5h14l2 5v6" />
        <path d="M5 10h14" />
        <circle cx="7" cy="15" r="1.5" />
        <circle cx="17" cy="15" r="1.5" />
        <path d="M5 17v2M19 17v2" />
      </svg>
    );
  }

  if (name === "target") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    );
  }

  if (name === "chart") {
    return (
      <svg {...common}>
        <path d="M4 20V10h4v10" />
        <path d="M10 20V6h4v14" />
        <path d="M16 20V3h4v17" />
        <path d="M3 8l5-3 4 2 7-5" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg {...common}>
        <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z" />
        <path d="M9 12l2 2 4-5" />
      </svg>
    );
  }

  if (name === "hammer") {
    return (
      <svg {...common}>
        <path d="M14 4l6 6" />
        <path d="M5 19l7-7" />
        <path d="M12 3l9 9" />
        <path d="M10 5l4-4 3 3-4 4" />
        <path d="M3 21l4-4" />
      </svg>
    );
  }

  if (name === "users") {
    return (
      <svg {...common}>
        <circle cx="8" cy="8" r="3" />
        <circle cx="17" cy="8" r="3" />
        <path d="M2 20c0-4 2-6 6-6s6 2 6 6" />
        <path d="M13 15c1-.7 2.3-1 4-1 3.5 0 5 2 5 6" />
      </svg>
    );
  }

  if (name === "clock") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v6l4 2" />
      </svg>
    );
  }

  if (name === "star") {
    return (
      <svg {...common}>
        <path d="M12 2l3 6 7 .9-5 4.8 1.2 7-6.2-3.3-6.2 3.3 1.2-7-5-4.8L9 8z" />
      </svg>
    );
  }

  if (name === "chat") {
    return (
      <svg {...common}>
        <path d="M4 4h16v12H9l-5 4z" />
        <path d="M8 9h.01M12 9h.01M16 9h.01" />
      </svg>
    );
  }

  if (name === "calendar") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M7 3v4M17 3v4M3 10h18" />
      </svg>
    );
  }

  if (name === "bell") {
    return (
      <svg {...common}>
        <path d="M18 8a6 6 0 00-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 20h4" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M4 13v-2a8 8 0 0116 0v2" />
      <path d="M4 13h3v6H4zM17 13h3v6h-3z" />
      <path d="M17 19c0 2-2 2-4 2" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="7" r="4" />
      <path d="M5 21v-2c0-4 3-7 7-7s7 3 7 7v2" />
    </svg>
  );
}

function ChatIcon() {
  return <Icon name="chat" size={22} />;
}

function ChartIcon() {
  return <Icon name="chart" size={22} />;
}