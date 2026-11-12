"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  ["Home", "/"],
  ["AI Sales Assistant", "/ai-sales-assistant"],
  ["Market Intelligence", "/market-intelligence"],
  ["Case Studies", "/case-studies"],
  ["About", "/about"],
  ["Book Demo", "/book-demo"]
];

const marketNavigation = [
  ["Overview", "/market-intelligence/dashboard"],
  ["Opportunities", "/market-intelligence/opportunities"],
  ["Auctions", "/market-intelligence/auctions"],
  ["Portfolio", "/market-intelligence/portfolio"],
  ["Watchlist", "/market-intelligence/watchlist"],
  ["Analytics", "/market-intelligence/analytics"],
  ["Reports", "/market-intelligence/reports"],
  ["Settings", "/market-intelligence/settings"]
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const inMarketIntelligence = pathname.startsWith("/market-intelligence");

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur">
      <div className="mx-auto flex h-[92px] max-w-[1440px] items-center justify-between min-[700px]:justify-center min-[1200px]:justify-between gap-5 px-5 md:px-8 min-[1200px]:h-[106px] min-[1400px]:px-12">
        <Link href="/" className="relative flex shrink-0 items-center">
          <div className="absolute inset-0 rounded-full bg-brand-gold/10 blur-3xl" />

          <Image
            src="/images/autosalesai-logo-transparent.png"
            alt="AutoSalesAI"
            width={320}
            height={120}
            priority
            className="relative z-10 h-auto w-[190px] object-contain md:w-[250px] min-[1200px]:w-[230px] min-[1400px]:w-[280px]"
          />
        </Link>

        <nav className="hidden items-center gap-4 min-[1200px]:flex min-[1400px]:gap-6">
          {navigation.slice(0, 5).map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              className={`inline-flex min-h-11 items-center whitespace-nowrap text-[11px] min-[1400px]:text-[12px] font-bold uppercase tracking-[0.12em] transition ${
                pathname === href
                  ? "text-brand-gold"
                  : "text-white hover:text-brand-gold"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="/book-demo"
          className="hidden shrink-0 items-center whitespace-nowrap rounded-lg border border-brand-gold/80 px-5 py-4 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-gold transition hover:bg-brand-gold hover:text-black min-[1200px]:inline-flex min-[1400px]:px-7 min-[1400px]:text-[12px]"
        >
          Book A Demo
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex border border-brand-gold/70 px-4 py-3 text-[12px] font-bold uppercase tracking-[0.18em] text-brand-gold min-[700px]:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen} aria-controls="mobile-navigation"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      <nav aria-label="Tablet navigation" className="mx-auto hidden max-w-[1440px] flex-wrap items-center justify-center gap-x-5 border-t border-white/10 px-5 py-1 min-[700px]:flex min-[1200px]:hidden">
        {navigation.map(([label, href]) => (
          <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} className={`inline-flex min-h-11 items-center whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.10em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-gold ${pathname === href ? "text-brand-gold" : "text-white hover:text-brand-gold"}`}>
            {label === "Book Demo" ? "Book a Demo" : label}
          </Link>
        ))}
      </nav>

      {menuOpen && (
        <div id="mobile-navigation" className="phone-navigation max-h-[calc(100dvh-92px)] overflow-y-auto overscroll-contain border-t border-white/10 bg-black px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] min-[700px]:hidden">
          <nav className="flex flex-col gap-2">
            {navigation.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="border border-white/10 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition hover:border-brand-gold hover:text-brand-gold"
              >
                {label}
              </Link>
            ))}

            {inMarketIntelligence && (
              <div className="mt-2 border-t border-brand-gold/30 pt-5">
                <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-gold">
                  Market Intelligence
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {marketNavigation.map(([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className={`border px-3 py-3 text-[10px] font-bold uppercase tracking-[0.10em] transition ${
                        pathname === href
                          ? "border-brand-gold bg-brand-gold/10 text-brand-gold"
                          : "border-white/10 text-white hover:border-brand-gold hover:text-brand-gold"
                      }`}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

