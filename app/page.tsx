import Image from "next/image";
import Link from "next/link";
import SolutionsSection from "@/components/homepage/SolutionsSection";
import FAQSection from "@/components/homepage/FAQSection";
import PlatformTicker from "@/components/homepage/PlatformTicker";

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

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/65" />
          <div className="absolute inset-y-0 left-0 w-[42%] bg-black/35" />
        </div>

        <div className="relative mx-auto max-w-[1536px] px-8 pb-7 pt-7 xl:px-10">
          <div className="grid min-h-[390px] grid-cols-1 gap-4 lg:grid-cols-[560px_1fr]">

            {/* LEFT HERO */}
            <div className="relative z-20 pt-2">
              <p className="text-[13px] font-semibold uppercase tracking-[0.20em] text-white">
                Built For Used Car Dealers
              </p>

              <h1 className="mt-3 font-heading text-[40px] sm:text-[55px] font-bold leading-[0.96] tracking-[-0.045em] text-white">
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

              {/* HERO PHOTOGRAPHIC BENEFITS */}
              <div className="mt-6 grid grid-cols-2 gap-3 xl:grid-cols-5">
                <HeroPhotoBenefit
                  image="/images/how-it-works/feature-find-stock.JPG"
                  title="Find Better Stock"
                  text="Auction data, market insights and AI recommendations"
                />

                <HeroPhotoBenefit
                  image="/images/how-it-works/feature-price-confidence.JPG"
                  title="Price with Confidence"
                  text="Real market valuations, profit & ROI analysis"
                />

                <HeroPhotoBenefit
                  image="/images/how-it-works/feature-sell-faster.JPG"
                  title="Sell Faster"
                  text="AI-powered descriptions, buyer targeting and enquiry responses"
                />

                <HeroPhotoBenefit
                  image="/images/how-it-works/feature-reduce-risk.JPG"
                  title="Reduce Risk"
                  text="Condition alerts, market trends and demand forecasting"
                />

                <HeroPhotoBenefit
                  image="/images/how-it-works/feature-grow-business.JPG"
                  title="Grow Your Business"
                  text="Practical tools and insights designed for independent dealers"
                />
              </div>
            </div>

            {/* Keep the hero layout open to the car background. */}
            <div aria-hidden="true" className="relative min-h-[390px]" />
          </div>

          {/* =====================================================
              INTELLIGENCE CAPABILITY STRIP
          ===================================================== */}
          <div className="relative z-30 mt-4 grid grid-cols-2 gap-3 rounded-[16px] border border-[#A87700]/80 bg-[#03090b]/95 p-3 md:grid-cols-3 xl:grid-cols-6">

            <PhotoMetric
              image="/images/how-it-works/feature-auction-intelligence.JPG"
              title="BCA + Manheim"
              subtitle="Auction Intelligence"
            />

            <PhotoMetric
              image="/images/how-it-works/feature-24-7-support.JPG"
              title="24/7"
              subtitle="AI Enquiry Coverage"
            />

            <PhotoMetric
              image="/images/how-it-works/feature-vehicle-market-analysis.JPG"
              title="Multi-Source"
              subtitle="Vehicle & Market Analysis"
            />

            <PhotoMetric
              image="/images/how-it-works/feature-target-max-bid.JPG"
              title="Target + Max Bid"
              subtitle="Acquisition Discipline"
            />

            <PhotoMetric
              image="/images/how-it-works/feature-decision-support.JPG"
              title="Buy / Review / Avoid"
              subtitle="Decision Support"
            />

            <PhotoMetric
              image="/images/how-it-works/feature-independents.JPG"
              title="UK Dealers"
              subtitle="Purpose-Built Platform"
            />

                    </div>
        </div>
      </section>

      {/* =========================================================
          PLATFORM ECOSYSTEM TICKER
      ========================================================= */}
      <PlatformTicker />

      {/* =========================================================
          PRODUCT PANELS
      ========================================================= */}
      <section className="bg-[#020506]">
        <div className="mx-auto grid max-w-[1536px] grid-cols-1 gap-3 px-5 py-3 md:px-8 lg:grid-cols-2 xl:px-10">

          {/* SALES ASSISTANT */}
          <div className="relative min-h-[390px] overflow-hidden rounded-[12px] border border-[#987000] bg-[radial-gradient(circle_at_55%_50%,rgba(181,130,0,0.18),rgba(22,17,3,0.82)_42%,rgba(8,8,3,0.97)_100%)] p-5">

            <div className="grid h-full grid-cols-1 lg:grid-cols-[44%_30%_26%]">

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
                  <Check text="Instant digital enquiry responses" />
                  <Check text="Qualify buyers and understand their needs" />
                  <Check text="Book viewings and test drives" />
                  <Check text="Generate tailored vehicle descriptions" />
                  <Check text="Follow-up messages that convert" />
                  <Check text="Works alongside your website and existing sales process" />
                </div>

                <a
                  href="/ai-sales-assistant"
                  className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] text-[#f5b800] transition-all hover:gap-3 hover:text-[#ffd34d]"
                >
                  EXPLORE AI SALES ASSISTANT <span>→</span>
                </a>
              </div>

              {/* PHONE */}
              <div className="mt-7 flex items-center justify-center lg:mt-0">
                <div className="h-[320px] w-[160px] rounded-[24px] border border-white/30 bg-black p-[7px] shadow-2xl sm:h-[350px] sm:w-[175px] lg:h-[350px] lg:w-[175px]">
                  <div className="h-full overflow-hidden rounded-[19px] border border-white/10 bg-[#071011] px-3 py-3">

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

            <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[40%_60%]">

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
                  Access auction data, pricing intelligence and profit
                  analytics to help you buy the right cars at the right price —
                  before your competition.
                </p>

                <div className="mt-4 space-y-[8px]">
                  <BlueCheck text="Auction & stock intelligence (BCA, Manheim + more)" />
                  <BlueCheck text="Real market valuations and pricing trends" />
                  <BlueCheck text="Profit & ROI calculations" />
                  <BlueCheck text="Demand forecasting and market insights" />
                  <BlueCheck text="Risk and condition analysis" />
                  <BlueCheck text="Spot opportunities before others" />
                </div>

                <a
                  href="/market-intelligence"
                  className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] text-[#00c8ff] transition-all hover:gap-3 hover:text-[#66ddff]"
                >
                  EXPLORE MARKET INTELLIGENCE <span>→</span>
                </a>
              </div>

              {/* DASHBOARD MOCKUP */}
              <div className="flex items-center">
                <div className="w-full rounded-[9px] border border-[#008bb7] bg-[#040b0f] p-2">

                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-[10px] font-bold">
                      Market Overview
                    </p>

                    <div className="rounded bg-white/5 px-2 py-1 text-[7px] text-white/60">
                      Last 7 days ⌄
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

                  <div className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-[1.15fr_.85fr]">

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
          HOW AUTOSALESAI WORKS
      ========================================================= */}
      <section className="border-t border-white/10 bg-[#020506] py-6">
        <div className="mx-auto max-w-[1536px] px-6 md:px-8 xl:px-10">

          {/* TOP HERO */}
          <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-black">
            <Image
              src="/images/how-it-works/how-it-works-hero.JPG"
              alt="Premium used car dealership and vehicle"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/45" />

            <div className="relative grid min-h-[420px] gap-8 px-7 py-8 lg:grid-cols-[0.9fr_1.25fr_0.75fr] lg:px-10">

              <div className="relative z-20 flex flex-col justify-center">
                <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#F5B800]">
                  How AutoSalesAI Works
                </p>

                <h2 className="mt-4 max-w-[520px] font-heading text-[44px] font-bold leading-[0.98] tracking-[-0.04em] md:text-[58px]">
                  From acquisition
                  <br />
                  opportunity <span className="text-[#F5B800]">to</span>
                  <br />
                  <span className="text-[#F5B800]">retail sale.</span>
                </h2>

                <p className="mt-5 max-w-[500px] text-[15px] leading-6 text-white/80">
                  A complete, connected platform that helps independent dealers
                  find the right stock, make smarter buying decisions, engage every
                  customer and improve commercial performance.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/book-demo"
                    className="inline-flex items-center justify-center rounded-full bg-[#F5B800] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.12em] text-black transition hover:bg-[#ffd24d]"
                  >
                    Book A Demo
                    <span className="ml-3 text-lg">→</span>
                  </Link>

                  <Link
                    href="/ai-sales-assistant"
                    className="inline-flex items-center justify-center rounded-full border border-white/25 bg-black/40 px-6 py-3 text-[12px] font-bold uppercase tracking-[0.10em] text-white transition hover:border-[#F5B800]/70 hover:text-[#F5B800]"
                  >
                    Explore The Platform →
                  </Link>
                </div>
              </div>

              <div className="hidden lg:block" />

              <div className="relative z-20 flex flex-col justify-center gap-3">
                <HowBenefit
                  icon="chart"
                  title="Stronger Buying Discipline"
                  text="Better information before capital is committed."
                />

                <HowBenefit
                  icon="clock"
                  title="24/7 Customer Coverage"
                  text="Engage enquiries whenever customers are browsing."
                />

                <HowBenefit
                  icon="target"
                  title="Data-Driven Decisions"
                  text="Clearer evidence. More consistent decisions."
                />

                <HowBenefit
                  icon="users"
                  title="Built For UK Dealers"
                  text="Designed around independent used-car retail."
                />
              </div>
            </div>
          </div>

          {/* BUY SMARTER / SELL SMARTER JOURNEY */}
          <div className="mt-4 hidden grid-cols-7 gap-3 xl:grid">

            <div className="col-span-4 flex items-center rounded-[10px] border border-[#F5B800]/25 bg-[#F5B800]/[0.04] px-5 py-3">
              <div className="h-2 w-2 shrink-0 rounded-full bg-[#F5B800] shadow-[0_0_12px_rgba(245,184,0,0.65)]" />

              <div className="ml-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#F5B800]">
                  Buy Smarter
                </p>
                <p className="mt-0.5 text-[11px] text-white/50">
                  Acquisition Intelligence
                </p>
              </div>

              <div className="mx-5 h-px flex-1 bg-gradient-to-r from-[#F5B800]/45 to-transparent" />

              <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/35">
                Source → Analyse → Decide → Retail
              </p>
            </div>

            <div className="col-span-3 flex items-center rounded-[10px] border border-cyan-400/25 bg-cyan-400/[0.04] px-5 py-3">
              <div className="h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.65)]" />

              <div className="ml-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-400">
                  Sell Smarter
                </p>
                <p className="mt-0.5 text-[11px] text-white/50">
                  AI Sales Assistant
                </p>
              </div>

              <div className="mx-5 h-px flex-1 bg-gradient-to-r from-cyan-400/45 to-transparent" />

              <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/35">
                Engage → Convert → Learn
              </p>
            </div>

          </div>

          {/* WORKFLOW CARDS */}
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">

            <HowImageStep
              image="/images/how-it-works/source.JPG"
              title="Source"
              text="Auction data, dealer stock and market opportunities."
              footer="Auction Data"
            />

            <HowImageStep
              image="/images/how-it-works/analyse.JPG"
              title="Analyse"
              text="Market position, condition, preparation and profitability."
              footer="Market Insight"
            />

            <HowImageStep
              image="/images/how-it-works/decide.JPG"
              title="Decide"
              text="Target Bid, Maximum Bid and clear BUY / REVIEW / AVOID recommendations."
              footer="AI Recommendations"
            />

            <HowImageStep
              image="/images/how-it-works/retail.JPG"
              title="Retail"
              text="Bring the right vehicles to your forecourt with confidence."
              footer="Stock Performance"
            />

            <HowImageStep
              image="/images/how-it-works/engage.JPG"
              title="Engage"
              text="AI engages digital enquiries and helps customers find the right vehicle."
              footer="24/7 Response"
            />

            <HowImageStep
              image="/images/how-it-works/convert.JPG"
              title="Convert"
              text="Qualify buyers, capture part exchange details and book appointments."
              footer="More Sales"
            />

            <HowImageStep
              image="/images/how-it-works/learn.JPG"
              title="Learn"
              text="Real outcomes feed back into smarter buying and sales decisions."
              footer="Continuous Improvement"
            />
          </div>

          <div className="mt-5 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#8d6b17] to-[#8d6b17]" />

            <p className="text-center text-[10px] font-bold uppercase tracking-[0.36em] text-[#F5B800]">
              A Continuous Cycle Of Dealer Growth
            </p>

            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#8d6b17] to-[#8d6b17]" />
          </div>

          {/* PREMIUM TRUST / DEALER BENEFITS */}
          <div className="mt-7 grid gap-4 border-t border-white/10 pt-7 sm:grid-cols-2 xl:grid-cols-4">

            <HowTrustImageCard
              image="/images/how-it-works/feature-contracts.JPG"
              title="No Long-Term Contracts"
              text="Flexible terms built around your dealership."
            />

            <HowTrustImageCard
              image="/images/how-it-works/feature-uk-support.JPG"
              title="UK-Based Support"
              text="Practical support from people who understand automotive retail."
            />

            <HowTrustImageCard
              image="/images/how-it-works/feature-fast-setup.JPG"
              title="Fast Setup"
              text="Get AutoSalesAI working alongside your existing dealership operation quickly."
            />

            <HowTrustImageCard
              image="/images/how-it-works/feature-independents.JPG"
              title="Built For Independents"
              text="Purpose-built around the commercial realities of UK independent dealers."
            />

          </div>
        </div>
      </section>

      {/* =========================================================
          PRICING / PLATFORM OPTIONS — HERO + PRICING BLEND
      ========================================================= */}
      <section className="relative overflow-hidden border-t border-white/10 bg-[#020506] py-14">

        {/* CINEMATIC HERO BACKGROUND */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] overflow-hidden">

          {/* FULL-WIDTH AUTOMOTIVE IMAGE */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.72]"
            style={{
              backgroundImage: "url('/images/home/home-hero-car.png')",
              backgroundPosition: "center 38%",
            }}
          />

          {/* DARKEN LEFT / RIGHT EDGES */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-black/35" />

          {/* KEEP HEADING LEGIBLE */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/30 to-[#020506]" />

          {/* GOLD SUNSET GLOW */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 82% 18%, rgba(235,173,26,0.20), transparent 28%)",
            }}
          />

        </div>

        

        {/* FINAL BOTTOM FADE INTO CARDS */}
        <div className="pointer-events-none absolute inset-x-0 top-[285px] h-[170px] bg-gradient-to-b from-transparent to-[#020506]" />

        <div className="relative mx-auto max-w-[1460px] px-6 xl:px-8">

          {/* HEADING */}
          <div className="mx-auto max-w-[850px] text-center">

            <div className="flex items-center justify-center gap-5">
              <div className="h-px w-[105px] bg-gradient-to-r from-transparent to-[#D6A400]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#E0A800]">
                Flexible Dealer Solutions
              </p>

              <div className="h-px w-[105px] bg-gradient-to-l from-transparent to-[#D6A400]" />
            </div>

            <h2 className="mt-4 text-[38px] font-bold tracking-[-0.04em] text-white md:text-[50px]">
              Powerful tools.{" "}
              <span className="text-[#E5AD18]">
                Flexible pricing.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-[700px] text-[14px] leading-6 text-white/70">
              Whether you want to capture more sales, buy smarter, or do both,
              AutoSalesAI scales with your ambition.
            </p>

          </div>

          {/* THREE PRODUCT CARDS */}
          <div className="mt-10 grid gap-5 lg:grid-cols-3">

            {/* AI SALES ASSISTANT */}
            <div className="group relative flex min-h-[575px] flex-col overflow-hidden rounded-[18px] border border-cyan-400/45 bg-[#031016]/95 shadow-[0_18px_55px_rgba(0,0,0,0.48)]">

              <div className="relative h-[165px] overflow-hidden">
                <img
                  src="/images/how-it-works/how-it-works-hero.JPG"
                  alt="AI Sales Assistant"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031016] via-[#031016]/20 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col px-7 pb-7">

                <div className="relative z-10 -mt-5 flex items-center gap-4">

                  <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[12px] border border-cyan-400 bg-[#07191f] text-[17px] font-black text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.16)]">
                    AI
                  </div>

                  <div>
                    <h3 className="text-[23px] font-bold tracking-[-0.03em] text-white">
                      AI Sales Assistant
                    </h3>

                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.19em] text-cyan-400">
                      More enquiries. More sales.
                    </p>
                  </div>

                </div>

                <p className="mt-5 text-[13px] leading-6 text-white/70">
                  Convert more enquiries into qualified buyers, appointments
                  and sales with intelligent 24/7 automation.
                </p>

                <div className="my-5 h-px bg-white/15" />

                <div className="space-y-[12px] text-[13px] text-white/90">
                  <div className="flex gap-3"><span className="font-bold text-cyan-400">✓</span>24/7 lead handling</div>
                  <div className="flex gap-3"><span className="font-bold text-cyan-400">✓</span>Vehicle recommendations</div>
                  <div className="flex gap-3"><span className="font-bold text-cyan-400">✓</span>Buyer qualification</div>
                  <div className="flex gap-3"><span className="font-bold text-cyan-400">✓</span>Appointment booking</div>
                  <div className="flex gap-3"><span className="font-bold text-cyan-400">✓</span>Automated follow-up</div>
                </div>

                <div className="mt-auto pt-7">

                  <p className="text-[16px] font-bold text-white">
                    Pricing tailored to your dealership
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-white/55">
                    Configured around your requirements and dealership operation.
                  </p>

                  <a
                    href="/book-demo"
                    className="mt-5 flex h-[50px] items-center justify-center rounded-[9px] border border-cyan-400 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-300 transition hover:bg-cyan-400/10"
                  >
                    Discuss Pricing&nbsp;&nbsp; →
                  </a>

                </div>
              </div>
            </div>

            {/* MARKET INTELLIGENCE */}
            <div className="group relative flex min-h-[575px] flex-col overflow-hidden rounded-[18px] border border-cyan-400/45 bg-[#031016]/95 shadow-[0_18px_55px_rgba(0,0,0,0.48)]">

              <div className="relative h-[165px] overflow-hidden">
                <img
                  src="/images/how-it-works/feature-vehicle-market-analysis.JPG"
                  alt="Market Intelligence"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031016] via-[#031016]/20 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col px-7 pb-7">

                <div className="relative z-10 -mt-5 flex items-center gap-4">

                  <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[12px] border border-cyan-400 bg-[#07191f] text-[17px] font-black text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.16)]">
                    MI
                  </div>

                  <div>
                    <h3 className="text-[23px] font-bold tracking-[-0.03em] text-white">
                      Market Intelligence
                    </h3>

                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.19em] text-cyan-400">
                      Better data. Smarter decisions.
                    </p>
                  </div>

                </div>

                <p className="mt-5 text-[13px] leading-6 text-white/70">
                  Make stronger acquisition decisions using auction, valuation,
                  liquidity, preparation and market intelligence.
                </p>

                <div className="my-5 h-px bg-white/15" />

                <div className="space-y-[12px] text-[13px] text-white/90">
                  <div className="flex gap-3"><span className="font-bold text-cyan-400">✓</span>BCA &amp; Manheim analysis</div>
                  <div className="flex gap-3"><span className="font-bold text-cyan-400">✓</span>Market valuation</div>
                  <div className="flex gap-3"><span className="font-bold text-cyan-400">✓</span>Liquidity &amp; stock-turn analysis</div>
                  <div className="flex gap-3"><span className="font-bold text-cyan-400">✓</span>Target &amp; maximum bid</div>
                  <div className="flex gap-3"><span className="font-bold text-cyan-400">✓</span>Preparation &amp; risk assessment</div>
                </div>

                <div className="mt-auto pt-7">

                  <p className="text-[16px] font-bold text-white">
                    Pricing tailored to your dealership
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-white/55">
                    Configured around your stock profile and intelligence requirements.
                  </p>

                  <a
                    href="/book-demo"
                    className="mt-5 flex h-[50px] items-center justify-center rounded-[9px] border border-cyan-400 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-300 transition hover:bg-cyan-400/10"
                  >
                    Discuss Pricing&nbsp;&nbsp; →
                  </a>

                </div>
              </div>
            </div>

            {/* COMPLETE AUTOSALESAI */}
            <div className="group relative flex min-h-[575px] flex-col overflow-hidden rounded-[18px] border border-[#F2BC00] bg-[#100c02]/95 shadow-[0_0_34px_rgba(242,188,0,0.15),0_18px_55px_rgba(0,0,0,0.5)]">

              <div className="relative h-[165px] overflow-hidden">

                <img
                  src="/images/home/home-hero-car.png"
                  alt="Complete AutoSalesAI"
                  className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#100c02] via-[#100c02]/20 to-transparent" />

                <div className="absolute right-4 top-4 rounded-full bg-[#F2BC00] px-4 py-[7px] text-[9px] font-black uppercase tracking-[0.15em] text-black shadow-[0_0_18px_rgba(242,188,0,0.28)]">
                  Complete Platform
                </div>

              </div>

              <div className="flex flex-1 flex-col px-7 pb-7">

                <div className="relative z-10 -mt-5 flex items-center gap-4">

                  <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[12px] border border-[#F2BC00] bg-[#171104] text-[17px] font-black text-[#F2BC00] shadow-[0_0_20px_rgba(242,188,0,0.18)]">
                    AS
                  </div>

                  <div>
                    <h3 className="text-[23px] font-bold tracking-[-0.03em] text-white">
                      Complete AutoSalesAI
                    </h3>

                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.19em] text-[#F2BC00]">
                      The full advantage.
                    </p>
                  </div>

                </div>

                <p className="mt-5 text-[13px] leading-6 text-white/70">
                  Bring sales automation and acquisition intelligence together
                  in one purpose-built platform for independent dealers.
                </p>

                <div className="my-5 h-px bg-[#F2BC00]/25" />

                <div className="space-y-[12px] text-[13px] text-white/95">
                  <div className="flex gap-3"><span className="font-bold text-[#F2BC00]">✓</span>AI Sales Assistant</div>
                  <div className="flex gap-3"><span className="font-bold text-[#F2BC00]">✓</span>Market Intelligence</div>
                  <div className="flex gap-3"><span className="font-bold text-[#F2BC00]">✓</span>Unified dealer platform</div>
                  <div className="flex gap-3"><span className="font-bold text-[#F2BC00]">✓</span>Smarter buying &amp; selling</div>
                  <div className="flex gap-3"><span className="font-bold text-[#F2BC00]">✓</span>Maximum profitability</div>
                </div>

                <div className="mt-auto pt-7">

                  <p className="text-[16px] font-bold text-white">
                    Pricing tailored to your dealership
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-white/55">
                    Combine both AutoSalesAI platforms around your dealership.
                  </p>

                  <a
                    href="/book-demo"
                    className="mt-5 flex h-[50px] items-center justify-center rounded-[9px] bg-[#F2BC00] text-[11px] font-black uppercase tracking-[0.18em] text-black shadow-[0_0_24px_rgba(242,188,0,0.25)] transition hover:bg-[#ffd02a]"
                  >
                    Discuss Pricing&nbsp;&nbsp; →
                  </a>

                </div>
              </div>
            </div>

          </div>

          {/* BENEFIT STRIP — OPTION 2 PREMIUM IMAGE PANELS */}
          <div className="mt-7 grid overflow-hidden rounded-[18px] border border-white/30 bg-[#030708] shadow-[0_20px_55px_rgba(0,0,0,0.42)] sm:grid-cols-2 lg:grid-cols-4">

            {/* MORE LEADS */}
            <div className="group relative h-[195px] overflow-hidden border-b border-white/20 sm:border-r lg:border-b-0">

              <img
                src="/images/how-it-works/how-it-works-hero.JPG"
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center opacity-90 transition-transform duration-500 group-hover:scale-[1.035]"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/38 to-black/5" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

              <div className="relative z-10 flex h-full items-center gap-6 px-7">

                <div className="flex h-[86px] w-[86px] shrink-0 items-center justify-center rounded-[17px] border-2 border-[#F2BC00] bg-black/65 shadow-[0_0_30px_rgba(242,188,0,0.20)]">

                  <div className="flex items-end gap-[5px]">
                    <span className="h-[24px] w-[9px] rounded-[1px] bg-[#F2BC00]" />
                    <span className="h-[39px] w-[9px] rounded-[1px] bg-[#F2BC00]" />
                    <span className="h-[55px] w-[9px] rounded-[1px] bg-[#F2BC00]" />
                  </div>

                </div>

                <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  <p className="whitespace-nowrap text-[22px] font-bold tracking-[-0.025em] text-white">
                    More leads
                  </p>

                  <p className="mt-2 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.28em] text-white/75">
                    Increase sales
                  </p>
                </div>

              </div>
            </div>

            {/* SMARTER STOCK */}
            <div className="group relative h-[195px] overflow-hidden border-b border-white/20 lg:border-b-0 lg:border-r">

              <img
                src="/images/market-vehicles/audi-a3-s-line.JPG"
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center opacity-90 transition-transform duration-500 group-hover:scale-[1.035]"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#001018]/90 via-black/35 to-black/5" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

              <div className="relative z-10 flex h-full items-center gap-6 px-7">

                <div className="flex h-[86px] w-[86px] shrink-0 items-center justify-center rounded-[17px] border-2 border-cyan-400 bg-black/65 shadow-[0_0_30px_rgba(34,211,238,0.18)]">

                  <div className="relative h-[42px] w-[58px]">

                    <div className="absolute bottom-[5px] left-[6px] h-[24px] w-[46px] rounded-[8px] border-[4px] border-cyan-400" />

                    <div className="absolute left-[13px] top-[1px] h-[22px] w-[32px] rounded-t-[13px] border-x-[4px] border-t-[4px] border-cyan-400" />

                    <span className="absolute bottom-0 left-[10px] h-[9px] w-[9px] rounded-full bg-cyan-400" />

                    <span className="absolute bottom-0 right-[10px] h-[9px] w-[9px] rounded-full bg-cyan-400" />

                  </div>

                </div>

                <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  <p className="whitespace-nowrap text-[22px] font-bold tracking-[-0.025em] text-white">
                    Smarter stock
                  </p>

                  <p className="mt-2 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.28em] text-white/75">
                    Buy smarter
                  </p>
                </div>

              </div>
            </div>

            {/* HIGHER MARGINS */}
            <div className="group relative h-[195px] overflow-hidden border-r border-white/20">

              <img
                src="/images/pricing/higher-margins.png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center opacity-90 transition-transform duration-500 group-hover:scale-[1.035]"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/86 via-[#130d00]/38 to-black/5" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

              <div className="relative z-10 flex h-full items-center gap-6 px-7">

                <div className="flex h-[86px] w-[86px] shrink-0 items-center justify-center rounded-[17px] border-2 border-[#F2BC00] bg-black/65 shadow-[0_0_30px_rgba(242,188,0,0.20)]">

                  <div className="relative h-[52px] w-[52px]">

                    <div className="absolute left-[5px] top-[2px] h-[15px] w-[42px] rounded-[50%] border-[4px] border-[#F2BC00]" />

                    <div className="absolute left-[5px] top-[15px] h-[15px] w-[42px] rounded-[50%] border-[4px] border-[#F2BC00]" />

                    <div className="absolute left-[5px] top-[28px] h-[15px] w-[42px] rounded-[50%] border-[4px] border-[#F2BC00]" />

                  </div>

                </div>

                <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  <p className="whitespace-nowrap text-[22px] font-bold tracking-[-0.025em] text-white">
                    Higher margins
                  </p>

                  <p className="mt-2 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.28em] text-white/75">
                    Greater profitability
                  </p>
                </div>

              </div>
            </div>

            {/* REAL RESULTS */}
            <div className="group relative h-[195px] overflow-hidden">

              <img
                src="/images/home/home-hero-car.png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center opacity-88 transition-transform duration-500 group-hover:scale-[1.035]"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#001018]/90 via-black/35 to-black/5" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

              <div className="relative z-10 flex h-full items-center gap-6 px-7">

                <div className="flex h-[86px] w-[86px] shrink-0 items-center justify-center rounded-[17px] border-2 border-cyan-400 bg-black/65 shadow-[0_0_30px_rgba(34,211,238,0.18)]">

                  <div className="relative h-[52px] w-[55px]">

                    <div className="absolute left-[4px] top-[29px] h-[5px] w-[43px] -rotate-45 rounded-full bg-cyan-400" />

                    <div className="absolute right-[3px] top-[5px] h-[22px] w-[5px] rounded-full bg-cyan-400" />

                    <div className="absolute right-[3px] top-[5px] h-[5px] w-[22px] rounded-full bg-cyan-400" />

                  </div>

                </div>

                <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  <p className="whitespace-nowrap text-[22px] font-bold tracking-[-0.025em] text-white">
                    Real results
                  </p>

                  <p className="mt-2 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.28em] text-white/75">
                    A stronger business
                  </p>
                </div>

              </div>
            </div>

          </div>
          <p className="mx-auto mt-6 max-w-[900px] text-center text-[11px] leading-6 text-white/50">
            No off-the-shelf package. We configure AutoSalesAI around how your
            dealership operates, your stock profile and the capabilities you need.
          </p>

        </div>
      </section>
      <FAQSection />

      {/* =========================================================
          UK AUTOMOTIVE ECOSYSTEM — PREMIUM
      ========================================================= */}
      <section className="border-t border-white/[0.06] bg-[#020405]">
        <div className="mx-auto max-w-[1640px] px-8 pb-5 pt-5 xl:px-10">

          <div className="relative overflow-hidden border-y border-[#D49B00]/70 bg-[#020405]">

            {/* SUBTLE CENTRAL AMBIENT GLOW */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 50% 45%, rgba(212,155,0,0.055), transparent 43%)",
              }}
            />

            {/* TITLE */}
            <div className="relative flex items-center justify-center px-4 pt-5 md:gap-6 md:px-0">

              <div className="hidden h-px w-[190px] bg-gradient-to-r from-transparent via-[#C99300]/70 to-[#C99300] md:block" />

              <p className="w-full text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90 md:w-auto md:whitespace-nowrap md:text-[11px] md:tracking-[0.32em]">
                Part Of The UK Automotive Ecosystem
              </p>

              <div className="hidden h-px w-[190px] bg-gradient-to-l from-transparent via-[#C99300]/70 to-[#C99300] md:block" />

            </div>

            {/* PREMIUM LOGO ROW */}
            <div className="relative mt-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5">

              {/* AUTOTRADER */}
              <div className="relative flex min-h-[150px] flex-col items-center justify-center border-white/20 px-6 xl:border-r">

                <div className="pointer-events-none absolute left-1/2 top-[66px] h-[18px] w-[150px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[18px]" />

                <div className="relative z-10 flex items-center gap-[7px]">
  <div className="flex items-center gap-[3px]">
    <div
      className="h-[9px] w-[25px] -skew-x-[25deg] rounded-[1px]"
      style={{
        backgroundColor: "#e32636",
        boxShadow: "0 0 10px rgba(227,38,54,0.55)"
      }}
    />
    <div
      className="h-[9px] w-[25px] -skew-x-[25deg] rounded-[1px]"
      style={{
        backgroundColor: "#2874b9",
        boxShadow: "0 0 10px rgba(40,116,185,0.55)"
      }}
    />
  </div>

  <span className="text-[31px] font-bold leading-none tracking-[-0.055em] text-[#f3f3f3]">
    AutoTrader
  </span>
</div>

                <p className="relative z-10 mt-5 text-[9px] font-medium uppercase tracking-[0.34em] text-white/75">
                  Retail Pricing
                </p>

                <div className="relative z-10 mt-4 h-px w-[72px] bg-gradient-to-r from-transparent via-[#E2AA00] to-transparent shadow-[0_0_8px_rgba(226,170,0,0.8)]" />

              </div>

              {/* MOTORTRADER */}
              <div className="relative flex min-h-[150px] flex-col items-center justify-center border-white/20 px-6 xl:border-r">

                <div className="pointer-events-none absolute left-1/2 top-[66px] h-[18px] w-[150px] -translate-x-1/2 rounded-full bg-red-500/20 blur-[18px]" />

                <div className="relative z-10 whitespace-nowrap text-[29px] font-black leading-none tracking-[-0.045em]">
  <span className="text-[#eeeeee]">MOTOR</span>
  <span
    className="text-[#e32636]"
    style={{ textShadow: "0 0 12px rgba(227,38,54,0.40)" }}
  >
    TRADER
  </span>
</div>

                <p className="relative z-10 mt-5 text-[9px] font-medium uppercase tracking-[0.34em] text-white/75">
                  The Trade Experts
                </p>

                <div className="relative z-10 mt-4 h-px w-[72px] bg-gradient-to-r from-transparent via-[#E2AA00] to-transparent shadow-[0_0_8px_rgba(226,170,0,0.8)]" />

              </div>

              {/* CAR DEALER */}
              <div className="relative flex min-h-[150px] flex-col items-center justify-center border-white/20 px-6 xl:border-r">

                <div className="pointer-events-none absolute left-1/2 top-[66px] h-[18px] w-[150px] -translate-x-1/2 rounded-full bg-red-500/20 blur-[18px]" />

                <div className="relative z-10 whitespace-nowrap text-[32px] font-bold leading-none tracking-[-0.055em]">
  <span className="text-[#eeeeee]">Car</span>
  <span
    className="text-[#e32636]"
    style={{ textShadow: "0 0 12px rgba(227,38,54,0.45)" }}
  >
    Dealer
  </span>
</div>

                <p className="relative z-10 mt-5 text-[9px] font-medium uppercase tracking-[0.34em] text-white/75">
                  Driven By Dealers
                </p>

                <div className="relative z-10 mt-4 h-px w-[72px] bg-gradient-to-r from-transparent via-[#E2AA00] to-transparent shadow-[0_0_8px_rgba(226,170,0,0.8)]" />

              </div>

              {/* AM ONLINE */}
              <div className="relative flex min-h-[150px] flex-col items-center justify-center border-white/20 px-6 xl:border-r">

                <div className="pointer-events-none absolute left-1/2 top-[66px] h-[20px] w-[160px] -translate-x-1/2 rounded-full bg-amber-400/20 blur-[18px]" />

                <div className="relative z-10 flex items-end whitespace-nowrap">
  <span
    className="text-[42px] font-black italic leading-[0.8] tracking-[-0.09em] text-[#e89a22]"
    style={{ textShadow: "0 0 14px rgba(232,154,34,0.40)" }}
  >
    AM
  </span>

  <span className="ml-[8px] text-[25px] font-light italic leading-none tracking-[-0.06em] text-[#d7d7d7]">
    ONLINE
  </span>
</div>

                <p className="relative z-10 mt-5 text-[9px] font-medium uppercase tracking-[0.34em] text-white/75">
                  Automotive Insights
                </p>

                <div className="relative z-10 mt-4 h-px w-[72px] bg-gradient-to-r from-transparent via-[#E2AA00] to-transparent shadow-[0_0_8px_rgba(226,170,0,0.8)]" />

              </div>

              {/* BLACK HORSE */}
              <div className="relative flex min-h-[150px] flex-col items-center justify-center px-6">

                <div className="pointer-events-none absolute left-1/2 top-[66px] h-[18px] w-[150px] -translate-x-1/2 rounded-full bg-white/10 blur-[18px]" />

                <div className="relative z-10 flex items-center gap-[10px] whitespace-nowrap">
  <span
    className="text-[31px] font-semibold leading-none tracking-[-0.055em] text-[#eeeeee]"
    style={{ textShadow: "0 0 10px rgba(255,255,255,0.18)" }}
  >
    blackhorse
  </span>

  <span
    className="text-[32px] leading-none text-[#eeeeee]"
    style={{ textShadow: "0 0 10px rgba(255,255,255,0.25)" }}
  >
    ♞
  </span>
</div>

                <p className="relative z-10 mt-5 text-[9px] font-medium uppercase tracking-[0.34em] text-white/75">
                  Automotive Finance
                </p>

                <div className="relative z-10 mt-4 h-px w-[72px] bg-gradient-to-r from-transparent via-[#E2AA00] to-transparent shadow-[0_0_8px_rgba(226,170,0,0.8)]" />

              </div>

            </div>
          </div>
        </div>
      </section>
      <SolutionsSection />
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

function HeroPhotoBenefit({
  image,
  title,
  text,
}: {
  image: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group overflow-hidden rounded-[12px] border border-white/15 bg-black/65 transition duration-300 hover:-translate-y-1 hover:border-[#F5B800]/70">
      <div className="relative h-[92px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 50vw, 20vw"
          className="object-cover transition duration-500 group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
      </div>

      <div className="p-3">
        <div className="mb-2 h-[2px] w-7 bg-[#F5B800]" />
        <h3 className="text-[12px] font-bold leading-tight text-white">
          {title}
        </h3>
        <p className="mt-1.5 text-[9px] leading-[1.45] text-white/70">
          {text}
        </p>
      </div>
    </div>
  );
}

function PhotoMetric({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="group relative min-h-[145px] overflow-hidden rounded-[12px] border border-white/10 bg-black transition duration-300 hover:-translate-y-1 hover:border-[#F5B800]/70">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 50vw, 16vw"
        className="object-cover transition duration-500 group-hover:scale-[1.05]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/5" />

      <div className="absolute inset-x-0 bottom-0 p-3">
        <div className="mb-2 h-[2px] w-7 bg-[#F5B800]" />
        <p className="text-[14px] font-bold uppercase leading-[1.05] text-white">
          {title}
        </p>
        <p className="mt-1 text-[9px] text-white/70">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function HowBenefit({
  icon,
  title,
  text,
}: {
  icon: IconType;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-[12px] border border-[#8d6b17]/70 bg-black/65 px-4 py-4 backdrop-blur-sm">
      <div className="shrink-0 text-[#F5B800]">
        <Icon name={icon} size={30} />
      </div>

      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.05em] text-white">
          {title}
        </p>

        <p className="mt-1 text-[10px] leading-5 text-white/65">
          {text}
        </p>
      </div>
    </div>
  );
}

function HowImageStep({
  image,
  title,
  text,
  footer,
}: {
  image: string;
  title: string;
  text: string;
  footer: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-[14px] border border-white/15 bg-[#05090b] transition duration-300 hover:-translate-y-1 hover:border-[#F5B800]/70">

      <div className="relative h-[150px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/10" />
      </div>

      <div className="flex min-h-[190px] flex-col p-4">
        <h3 className="text-[18px] font-bold uppercase text-[#F5B800]">
          {title}
        </h3>

        <p className="mt-2 text-[12px] leading-[1.55] text-white/78">
          {text}
        </p>

        <div className="mt-auto pt-4">
          <div className="rounded-full border border-[#8d6b17] px-3 py-2 text-center text-[10px] font-semibold text-[#F5B800]">
            {footer}
          </div>
        </div>
      </div>
    </div>
  );
}

function HowTrustImageCard({
  image,
  title,
  text,
}: {
  image: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-[16px] border border-white/15 bg-[#050708] shadow-[0_14px_45px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:border-[#F5B800]/70">

      <div className="relative h-[175px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050708] via-transparent to-transparent" />
      </div>

      <div className="relative min-h-[130px] px-6 pb-6 pt-4">

        <div className="mb-4 h-[2px] w-12 bg-[#F5B800] transition-all duration-300 group-hover:w-20" />

        <h3 className="text-[20px] font-bold tracking-[-0.025em] text-white">
          {title}
        </h3>

        <p className="mt-3 max-w-[320px] text-[13px] leading-[1.6] text-white/68">
          {text}
        </p>

      </div>

    </div>
  );
}

function HowTrustItem({
  icon,
  title,
  text,
}: {
  icon: IconType;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-4 border-white/10 px-2 py-3 lg:border-r lg:last:border-r-0">
      <div className="shrink-0 text-[#F5B800]">
        <Icon name={icon} size={29} />
      </div>

      <div>
        <p className="text-[11px] font-bold text-white">
          {title}
        </p>

        <p className="mt-1 text-[9px] text-white/55">
          {text}
        </p>
      </div>
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

function EcosystemLogo({
  src,
  alt,
  last = false,
}: {
  src: string;
  alt: string;
  last?: boolean;
}) {
  return (
    <div
      className={`flex min-h-[76px] items-center justify-center px-8 ${
        last ? "" : "xl:border-r xl:border-white/25"
      }`}
    >
      <div className="relative h-[52px] w-full max-w-[235px]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="235px"
          className="object-contain"
        />
      </div>
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



























