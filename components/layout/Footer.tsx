
import BrandName from "@/components/ui/BrandName";

const platformLinks = [
  { label: "Platform Overview", href: "/" },
  { label: "AI Sales Assistant", href: "/ai-sales-assistant" },
  { label: "Lead Capture", href: "/ai-sales-assistant#demo" },
  { label: "Vehicle Recommendations", href: "/ai-sales-assistant#demo" },
  { label: "Part Exchange", href: "/ai-sales-assistant#demo" },
  { label: "Follow-Up", href: "/ai-sales-assistant#demo" },
];

const intelligenceLinks = [
  { label: "Market Intelligence", href: "/market-intelligence" },
  { label: "Auction Intelligence", href: "/market-intelligence#auction" },
  { label: "BCA Intelligence", href: "/market-intelligence/auctions" },
  { label: "Manheim Intelligence", href: "/market-intelligence/auctions" },
  { label: "Acquisition Intelligence", href: "/market-intelligence#worked-example" },
  { label: "Pricing Intelligence", href: "/market-intelligence#pricing" },
];

const resourceLinks = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "FAQs", href: "/#faq" },
  { label: "Market Analysis", href: "/market-intelligence/analytics" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Book a Demo", href: "/book-demo" },
  { label: "Contact", href: "/book-demo" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="inline-flex min-h-8 items-center rounded text-sm leading-6 text-brand-muted transition-colors duration-200 hover:text-brand-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold"
  >
    {children}
  </a>
);

const MobileFooterGroup = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) => (
  <details className="group border-b border-white/10">
    <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white [&::-webkit-details-marker]:hidden">
      <span>{title}</span>

      <span
        aria-hidden="true"
        className="text-lg font-light text-brand-gold transition-transform duration-200 group-open:rotate-45"
      >
        +
      </span>
    </summary>

    <ul className="space-y-3 pb-5">
      {links.map((item) => (
        <li key={item.label}>
          <FooterLink href={item.href}>{item.label}</FooterLink>
        </li>
      ))}
    </ul>
  </details>
);

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-brand-gold/20 bg-black">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent" />

      <div className="mx-auto max-w-[1360px] px-6 py-16 lg:px-8 lg:py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.7fr_0.95fr_1.15fr_0.8fr_0.75fr_0.85fr] lg:gap-8">

          <div className="max-w-sm">
            <p className="font-heading text-3xl font-bold">
              <BrandName />
            </p>

            <p className="mt-5 text-sm leading-7 text-brand-muted">
              AI-powered sales and acquisition intelligence built for
              independent automotive retailers.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em]">
              <span className="text-brand-gold">Sell Smarter.</span>
              <span className="h-3 w-px bg-white/20" />
              <span className="text-cyan-400">Buy Smarter.</span>
            </div>

            <p className="mt-6 max-w-xs text-xs leading-6 text-white/40">
              Helping independent dealers respond faster, understand their
              market and make more informed stock decisions.
            </p>

            <div className="mt-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
                Get in touch
              </p>

              <div className="mt-4 space-y-3">
                <a
                  href="tel:+447929023079"
                  className="group flex items-center gap-3 text-sm text-brand-muted transition-colors hover:text-brand-gold"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-gold/30 text-brand-gold transition group-hover:border-brand-gold/60"
                  >
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 4.5 8.2 4l2 4.6-1.7 1.2a14.2 14.2 0 0 0 5.7 5.7l1.2-1.7 4.6 2-.5 2.7a2 2 0 0 1-2 1.6C10 19.7 4.3 14 3.9 6.5a2 2 0 0 1 1.6-2Z" />
                    </svg>
                  </span>
                  <span>07929 023079</span>
                </a>

                <a
                  href="mailto:contact@autosalesai.co.uk"
                  className="group flex items-center gap-3 text-sm text-brand-muted transition-colors hover:text-brand-gold"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-gold/30 text-brand-gold transition group-hover:border-brand-gold/60"
                  >
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5v10.5H3.75V6.75Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 7.5 7.5 5.25 7.5-5.25" />
                    </svg>
                  </span>
                  <span>contact@autosalesai.co.uk</span>
                </a>
              </div>
            </div>
          </div>

          {/* MOBILE FOOTER NAVIGATION */}
          <div className="md:hidden">
            <MobileFooterGroup title="Platform" links={platformLinks} />
            <MobileFooterGroup title="Market Intelligence" links={intelligenceLinks} />
            <MobileFooterGroup title="Resources" links={resourceLinks} />
            <MobileFooterGroup title="Company" links={companyLinks} />
            <MobileFooterGroup title="Legal" links={legalLinks} />
          </div>

          <div className="hidden md:block">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Platform
            </h3>

            <ul className="mt-6 space-y-3">
              {platformLinks.map((item) => (
                <li key={item.label}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Market Intelligence
            </h3>

            <ul className="mt-6 space-y-3">
              {intelligenceLinks.map((item) => (
                <li key={item.label}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Resources
            </h3>

            <ul className="mt-6 space-y-3">
              {resourceLinks.map((item) => (
                <li key={item.label}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Company
            </h3>

            <ul className="mt-6 space-y-3">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Legal
            </h3>

            <ul className="mt-6 space-y-3">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-16 border-y border-white/10 py-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-gold">
                Built for independent automotive retailers
              </p>

              <p className="mt-2 text-sm text-white/60">
                One platform supporting both sides of the dealership.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-10 gap-y-4">
              <a
                href="/ai-sales-assistant"
                className="group"
              >
                <span className="block text-[10px] uppercase tracking-[0.2em] text-white/40">
                  Sell Smarter
                </span>
                <span className="mt-1 block text-sm font-semibold text-white transition group-hover:text-brand-gold">
                  AI Sales Assistant →
                </span>
              </a>

              <a
                href="/market-intelligence"
                className="group"
              >
                <span className="block text-[10px] uppercase tracking-[0.2em] text-white/40">
                  Buy Smarter
                </span>
                <span className="mt-1 block text-sm font-semibold text-white transition group-hover:text-cyan-400">
                  Market Intelligence →
                </span>
              </a>
            </div>

          </div>
        </div>

        <p className="mt-7 text-xs leading-6 text-white/45">
          AutoSalesAI is operated by AutosalesAI Ltd, registered in England and Wales under company number 17396040. Business address: 195 Bramble Road, Benfleet, Essex, SS7 2UU, United Kingdom.
        </p>
        <div className="flex flex-col gap-5 pt-7 md:flex-row md:items-center md:justify-between">

          <p className="text-[11px] uppercase tracking-[0.16em] text-white/40">
            © {new Date().getFullYear()} <BrandName />. All Rights Reserved.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs text-white/40 transition-colors hover:text-brand-gold"
              >
                {item.label}
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}








