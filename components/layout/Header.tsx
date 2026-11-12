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
      <div className="mx-auto flex h-[92px] max-w-[1440px] items-center justify-between px-5 md:h-[116px] md:px-8 lg:px-12 xl:px-16">
        <Link href="/" className="relative flex items-center">
          <div className="absolute inset-0 rounded-full bg-brand-gold/10 blur-3xl" />

          <Image
            src="/images/autosalesai-logo-transparent.png"
            alt="AutoSalesAI"
            width={320}
            height={120}
            priority
            className="relative z-10 h-auto w-[190px] object-contain md:w-[310px]"
          />
        </Link>

        <nav className="hidden items-center gap-6 min-[1400px]:flex">
          {navigation.slice(0, 5).map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`text-[13px] font-bold uppercase tracking-[0.18em] transition ${
                href === "/"
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
          className="hidden rounded-lg border border-brand-gold/80 px-8 py-4 text-[13px] font-bold uppercase tracking-[0.18em] text-brand-gold transition hover:bg-brand-gold hover:text-black min-[1400px]:inline-flex"
        >
          Book A Demo
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex border border-brand-gold/70 px-4 py-3 text-[12px] font-bold uppercase tracking-[0.18em] text-brand-gold min-[1400px]:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen} aria-controls="mobile-navigation"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-navigation" className="max-h-[calc(100dvh-92px)] overflow-y-auto overscroll-contain border-t border-white/10 bg-black px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:max-h-[calc(100dvh-116px)] min-[1400px]:hidden">
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

