"use client";

import { usePathname } from "next/navigation";

type IconProps = {
  className?: string;
};

function GridIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function SparkIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z" />
      <path d="m19 14 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z" />
    </svg>
  );
}

function AuctionIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m14 5 5 5" />
      <path d="m12 7 5 5" />
      <path d="m4 20 7-7" />
      <path d="m7 4 6 6-3 3-6-6 3-3Z" />
      <path d="M13 17h7" />
    </svg>
  );
}

function BriefcaseIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}

function HeartIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
    </svg>
  );
}

function ChartIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 20V10" />
      <path d="M9 20V4" />
      <path d="M14 20v-7" />
      <path d="M19 20V7" />
      <path d="M2 20h20" />
    </svg>
  );
}

function ReportIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 2h9l5 5v15H6z" />
      <path d="M14 2v6h6" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
    </svg>
  );
}

function SettingsIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21h-4v-.1A1.7 1.7 0 0 0 8.6 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H3v-4h.1A1.7 1.7 0 0 0 4.6 8.6a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1.1V3h4v.1A1.7 1.7 0 0 0 15.4 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.4 9c.4.3.75.65 1 1 .3.32.5.72.6 1.1h.1v4H21a1.7 1.7 0 0 0-1.6-.1Z" />
    </svg>
  );
}

const navigation = [
  {
    name: "Overview",
    href: "/market-intelligence/dashboard",
    Icon: GridIcon,
  },
  {
    name: "Opportunities",
    href: "/market-intelligence/opportunities",
    Icon: SparkIcon,
  },
  {
    name: "Auctions",
    href: "/market-intelligence/auctions",
    Icon: AuctionIcon,
  },
  {
    name: "Portfolio",
    href: "/market-intelligence/portfolio",
    Icon: BriefcaseIcon,
  },
  {
    name: "Watchlist",
    href: "/market-intelligence/watchlist",
    Icon: HeartIcon,
  },
  {
    name: "Analytics",
    href: "/market-intelligence/analytics",
    Icon: ChartIcon,
  },
  {
    name: "Reports",
    href: "/market-intelligence/reports",
    Icon: ReportIcon,
  },
  {
    name: "Settings",
    href: "/market-intelligence/settings",
    Icon: SettingsIcon,
  },
];

export default function MarketSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 flex h-screen w-[210px] shrink-0 flex-col border-r border-[#232323] bg-[#090b0c]">
      {/* Brand */}
      <div className="flex h-[72px] items-center border-b border-[#232323] px-5">
        <div>
          <div className="text-[20px] font-bold leading-none tracking-[-0.04em] text-white">
            AutoSales
            <span className="text-[#d4af37]">AI</span>
          </div>

          <div className="mt-1.5 text-[7px] font-medium tracking-[0.32em] text-[#797979]">
            MARKET INTELLIGENCE
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4">
        <div className="space-y-1">
          {navigation.map(({ name, href, Icon }) => {
            const active =
              pathname === href ||
              (href !== "/market-intelligence/dashboard" &&
                pathname.startsWith(href));

            return (
              <a
                key={name}
                href={href}
                className={[
                  "flex h-[45px] items-center gap-3 rounded-lg px-3 text-[12px] transition",
                  active
                    ? "border border-[#3d3316] bg-[#211c0d] font-semibold text-[#d4af37]"
                    : "border border-transparent text-[#b3b3b3] hover:bg-[#111315] hover:text-white",
                ].join(" ")}
              >
                <Icon
                  className={
                    active ? "text-[#d4af37]" : "text-[#7d7d7d]"
                  }
                />
                {name}
              </a>
            );
          })}
        </div>
      </nav>

      {/* AI Assistant */}
      <div className="p-3">
        <div className="rounded-xl border border-[#524516] bg-[#0e1011] p-4">
          <div className="text-[12px] font-semibold text-[#d4af37]">
            AI Assistant
          </div>

          <p className="mt-2 max-w-[130px] text-[10px] leading-[1.55] text-[#9b9b9b]">
            Ask anything about the market
          </p>

          <button
            type="button"
            className="mt-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#806a1f] bg-[#0a0b0c] text-[14px] font-semibold text-[#d4af37] transition hover:bg-[#171305]"
          >
            AI
          </button>
        </div>
      </div>
    </aside>
  );
}