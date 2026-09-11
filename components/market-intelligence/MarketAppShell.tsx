"use client";

import type { ReactNode } from "react";
import MarketSidebar from "./MarketSidebar";

type MarketAppShellProps = {
  children: ReactNode;
};

function BellIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function MarketAppShell({
  children,
}: MarketAppShellProps) {
  return (
    <div className="min-h-screen bg-[#080a0c] text-white">
      <div className="flex min-h-screen">
        <MarketSidebar />

        <div className="min-w-0 flex-1">
          {/* Market application header */}
          <header className="sticky top-0 z-30 border-b border-[#242424] bg-[#080a0c]/95 backdrop-blur-xl">
            <div className="flex h-[72px] items-center justify-between px-6 lg:px-8 xl:px-10">
              <nav className="hidden items-center gap-9 lg:flex">
                <a
                  href="/market-intelligence/dashboard"
                  className="relative flex h-[72px] items-center text-[12px] font-semibold tracking-[0.06em] text-[#d4af37]"
                >
                  OVERVIEW
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#d4af37]" />
                </a>

                <a
                  href="/market-intelligence/opportunities"
                  className="text-[12px] font-medium tracking-[0.06em] text-[#a7a7a7] transition hover:text-white"
                >
                  OPPORTUNITIES
                </a>

                <a
                  href="/market-intelligence/auctions"
                  className="text-[12px] font-medium tracking-[0.06em] text-[#a7a7a7] transition hover:text-white"
                >
                  AUCTIONS
                </a>

                <a
                  href="/market-intelligence/portfolio"
                  className="text-[12px] font-medium tracking-[0.06em] text-[#a7a7a7] transition hover:text-white"
                >
                  PORTFOLIO
                </a>

                <a
                  href="/market-intelligence/reports"
                  className="text-[12px] font-medium tracking-[0.06em] text-[#a7a7a7] transition hover:text-white"
                >
                  REPORTS
                </a>
              </nav>

              <div className="ml-auto flex items-center gap-5">
                <button
                  type="button"
                  className="hidden items-center gap-2 text-[12px] font-semibold text-[#d4af37] transition hover:text-[#efd269] md:flex"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 11a8.1 8.1 0 0 0-15.5-2M4 4v5h5" />
                    <path d="M4 13a8.1 8.1 0 0 0 15.5 2M20 20v-5h-5" />
                  </svg>
                  Refresh
                </button>

                <button
                  type="button"
                  className="text-[#848484] transition hover:text-white"
                  aria-label="Notifications"
                >
                  <BellIcon />
                </button>

                <div className="h-7 w-px bg-[#272727]" />

                <button
                  type="button"
                  className="flex items-center gap-3"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#66551f] bg-[#141414] text-[11px] font-semibold text-white">
                    MC
                  </div>

                  <div className="hidden text-left md:block">
                    <div className="text-[12px] font-semibold text-white">
                      Marco Costella
                    </div>
                    <div className="mt-0.5 text-[10px] text-[#6f6f6f]">
                      Pro Plan
                    </div>
                  </div>

                  <span className="text-[#777]">
                    <ChevronDownIcon />
                  </span>
                </button>
              </div>
            </div>
          </header>

          <main className="px-5 py-6 lg:px-8 xl:px-10 xl:py-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}