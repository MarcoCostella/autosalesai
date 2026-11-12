"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "What exactly does AutoSalesAI do?",
    answer:
      "AutoSalesAI combines an AI Sales Assistant with Market Intelligence. It helps independent used car dealers respond to enquiries, qualify buyers, capture part exchanges, source stock, analyse auction opportunities, assess pricing and make more disciplined buying decisions.",
  },
  {
    question: "Does AutoSalesAI replace my sales team?",
    answer:
      "No. AutoSalesAI is designed to support your dealership team by handling repetitive and time-sensitive tasks such as first-response enquiries, qualification and follow-up, while passing serious sales opportunities to your staff.",
  },
  {
    question: "Can AutoSalesAI work with my existing website and systems?",
    answer:
      "Yes. AutoSalesAI is designed to sit alongside your existing dealer website, stock feeds and operational systems. The exact integration approach depends on the platforms and data sources your dealership currently uses.",
  },
  {
    question:
      "How does the AI Sales Assistant know what vehicles I have in stock?",
    answer:
      "Vehicle data can be supplied from your dealership's stock feed or inventory system, allowing the assistant to recommend relevant vehicles based on budget, body style, gearbox, fuel type and other customer requirements.",
  },
  {
    question: "Can the assistant capture part-exchange enquiries?",
    answer:
      "Yes. It can collect key part-exchange information such as registration, mileage, service history, condition and customer expectations before passing a structured lead to your dealership.",
  },
  {
    question: "Can AutoSalesAI book appointments and test drives?",
    answer:
      "Yes. The AI Sales Assistant can guide high-intent customers towards a viewing, callback or test-drive request and pass the relevant details to your dealership team.",
  },
  {
    question: "What does Market Intelligence analyse?",
    answer:
      "Market Intelligence can bring together auction data, retail pricing, vehicle condition information, preparation risk, market supply, liquidity, estimated resale value and projected margin to support acquisition decisions.",
  },
  {
    question: "What do Target Bid and Maximum Bid mean?",
    answer:
      "Target Bid is the preferred acquisition level intended to protect the required commercial margin. Maximum Bid is the upper limit that should generally not be exceeded once expected retail value, preparation cost and required return are taken into account.",
  },
  {
    question: "What does BUY / REVIEW / AVOID mean?",
    answer:
      "AutoSalesAI classifies opportunities using available vehicle and market data. BUY indicates a strong acquisition case, REVIEW means further dealer judgement is required, and AVOID indicates the vehicle does not currently meet the required commercial criteria.",
  },
  {
    question: "Does AutoSalesAI guarantee profit on a vehicle?",
    answer:
      "No. AutoSalesAI provides decision support based on available data and assumptions. Auction prices, preparation requirements and retail market conditions can change, so the final purchasing decision remains with the dealer.",
  },
  {
    question: "Can dealer buying criteria be customised?",
    answer:
      "Yes. Dealer-specific acquisition rules can include factors such as mileage, age, purchase price, make, model, margin, ROI, liquidity and preparation risk so that opportunities are assessed against the needs of the individual dealership.",
  },
  {
    question: "Does AutoSalesAI work with BCA and Manheim?",
    answer:
      "The Market Intelligence workflow supports analysis around major UK auction sources including BCA and Manheim, with the platform architecture designed to support multiple acquisition channels.",
  },
  {
    question: "How quickly can AutoSalesAI be deployed?",
    answer:
      "Deployment depends on your website, stock feed and integration requirements. The aim is to keep setup lightweight and managed, with implementation tailored to the dealership's existing systems.",
  },
  {
    question: "Do I need to change my current DMS or website?",
    answer:
      "Not necessarily. AutoSalesAI is intended to work alongside existing dealership technology rather than forcing a complete replacement of your current systems.",
  },
  {
    question: "Is my dealership data secure?",
    answer:
      "AutoSalesAI is being designed around controlled access, appropriate data handling and UK GDPR-aligned processes. Specific technical controls and integration requirements are confirmed as part of deployment.",
  },
  {
    question: "Is there a long-term contract?",
    answer:
      "The commercial model is intended to remain flexible. Contract terms are confirmed during dealer onboarding based on the products and level of service required.",
  },
  {
    question: "How much does AutoSalesAI cost?",
    answer:
      "Pricing depends on dealership size, stock volume, integration requirements and whether you use the AI Sales Assistant, Market Intelligence or both. Dealer-specific pricing is provided following an initial discussion.",
  },
  {
    question:
      "Can I use just the AI Sales Assistant or just Market Intelligence?",
    answer:
      "Yes. AutoSalesAI is structured around separate product capabilities, so dealers can use individual modules or combine them into a broader platform.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section id="faq" className="scroll-mt-40 relative min-h-[820px] overflow-hidden border-t border-white/10 bg-[#020506]">

      {/* FULL CINEMATIC BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <Image
          src="/images/home/faq-car-background.png"
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Keep left side readable but leave car/showroom bright */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,5,8,0.54)_0%,rgba(1,5,8,0.28)_20%,rgba(1,5,8,0.08)_47%,rgba(1,5,8,0)_72%)]" />

        {/* Slight top shading behind heading */}
        <div className="absolute inset-x-0 top-0 h-[270px] bg-gradient-to-b from-black/30 via-black/10 to-transparent" />

        {/* Warm premium glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_77%_48%,rgba(245,184,0,0.07),transparent_27%)]" />
      </div>

      <div className="relative mx-auto max-w-[1536px] px-6 pb-16 pt-12 md:px-8 md:pt-14 xl:px-10">

        {/* HEADER */}
        <div className="mx-auto max-w-[900px] text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#F5B800] md:text-[11px]">
            Frequently Asked Questions
          </p>

          <h2 className="mt-3 font-heading text-[36px] font-bold leading-[1.02] tracking-[-0.045em] text-white md:text-[48px] xl:text-[52px]">
            Clear answers for{" "}
            <span className="text-[#F5B800]">
              independent dealers.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[720px] text-[14px] leading-6 text-white/85 md:text-[15px]">
            Find quick answers to the most common questions about AutoSalesAI,
            from features and integrations to pricing and support.
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="relative mt-7">

          {/* LEFT STATEMENT */}
          <div className="absolute left-0 top-[135px] hidden w-[145px] xl:block">
            <p className="text-[20px] italic leading-[1.52] text-white">
              Built for
              <br />
              dealers, by
              <br />
              people who
              <br />
              understand
              <br />
              <span className="font-bold not-italic text-[#F5B800]">
                the trade.
              </span>
            </p>

            <div className="mt-5 h-[3px] w-[48px] bg-[#F5B800]" />
          </div>

          {/* FAQ CONTAINER */}
          <div className="mx-auto max-w-[1030px] rounded-[16px] border border-[#F5B800]/85 bg-[#02070a]/[0.82] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.40)] backdrop-blur-[3px] md:p-5">

            {/* QUESTIONS */}
            <div className="grid items-start gap-x-5 gap-y-[7px] lg:grid-cols-2">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className={`overflow-hidden rounded-[8px] border transition-all duration-300 ${
                      isOpen
                        ? "border-[#F5B800]/75 bg-[#071015]/95 shadow-[0_0_22px_rgba(245,184,0,0.07)]"
                        : "border-white/[0.15] bg-[#030a0e]/90 hover:border-[#F5B800]/45"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      className="flex min-h-[43px] w-full items-center justify-between gap-4 px-[14px] py-[9px] text-left"
                    >
                      <span className="text-[12px] font-semibold leading-[1.35] text-white md:text-[13px]">
                        {faq.question}
                      </span>

                      <span
                        className={`flex h-[23px] w-[23px] shrink-0 items-center justify-center rounded-full border text-[15px] font-light leading-none transition-all duration-300 ${
                          isOpen
                            ? "border-[#F5B800] bg-[#F5B800] text-black"
                            : "border-[#F5B800] text-[#F5B800]"
                        }`}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="border-t border-[#F5B800]/20 px-[14px] pb-3 pt-2.5">
                        <p className="text-[12px] leading-[1.55] text-white/75">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CONTACT BAR */}
            <div className="mt-4 flex flex-col gap-4 rounded-[10px] border border-[#F5B800]/80 bg-[linear-gradient(90deg,rgba(5,11,13,0.96),rgba(23,20,8,0.88))] px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-4">

                <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full border border-[#F5B800] text-[#F5B800]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-[21px] w-[21px]"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path
                      d="M21 12a8 8 0 0 1-8 8H7l-4 2 1.3-4.4A8.5 8.5 0 1 1 21 12Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 12h.01M12 12h.01M16 12h.01"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-[16px] font-bold text-white md:text-[17px]">
                    Still have a question?
                  </p>

                  <p className="mt-[2px] text-[12px] text-white/75 md:text-[13px]">
                    Get in touch and we'll be happy to help.
                  </p>
                </div>
              </div>

              <Link
                href="/book-demo"
                className="inline-flex min-h-[46px] min-w-[178px] shrink-0 items-center justify-center rounded-full bg-[#F5B800] px-7 text-[11px] font-extrabold uppercase tracking-[0.12em] text-black shadow-[0_0_30px_rgba(245,184,0,0.18)] transition-all duration-300 hover:bg-[#ffd24d] hover:shadow-[0_0_38px_rgba(245,184,0,0.30)]"
              >
                Contact Us
                <span className="ml-3 text-[17px]">→</span>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
