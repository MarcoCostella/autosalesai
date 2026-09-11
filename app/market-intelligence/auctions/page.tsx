"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type AuctionSource = "BCA" | "Manheim" | "DealerAuction";

type FeaturedVehicle = {
  name: string;
  image: string;
};

type Auction = {
  id: number;
  date: string;
  time: string;
  source: AuctionSource;
  location: string;
  type: string;
  vehicles: number;
  featured: FeaturedVehicle[];
};

const FALLBACK_CAR_IMAGE =
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=480&h=300&q=85";

const auctions: Auction[] = [
  {
    id: 1,
    date: "24 Aug 2026",
    time: "10:00",
    source: "BCA",
    location: "BCA Leeds",
    type: "Weekly",
    vehicles: 286,
    featured: [
      {
        name: "VW Golf",
        image:
          "https://images.unsplash.com/photo-1611016186353-9af58c69a533?auto=format&fit=crop&w=480&h=300&q=85",
      },
      {
        name: "Audi A3",
        image:
          "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=480&h=300&q=85",
      },
      {
        name: "BMW 1 Series",
        image:
          "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=480&h=300&q=85",
      },
    ],
  },

  {
    id: 2,
    date: "24 Aug 2026",
    time: "11:00",
    source: "Manheim",
    location: "Manheim Colchester",
    type: "Weekly",
    vehicles: 198,
    featured: [
      {
        name: "Skoda Karoq",
        image:
          "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=480&h=300&q=85",
      },
      {
        name: "Ford Focus",
        image:
          "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&w=480&h=300&q=85",
      },
      {
        name: "Seat Leon",
        image:
          "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=480&h=300&q=85",
      },
    ],
  },

  {
    id: 3,
    date: "25 Aug 2026",
    time: "09:30",
    source: "DealerAuction",
    location: "Dealer Auction Online",
    type: "Timed",
    vehicles: 312,
    featured: [
      {
        name: "VW Tiguan",
        image:
          "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=480&h=300&q=85",
      },
      {
        name: "Nissan Qashqai",
        image:
          "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=480&h=300&q=85",
      },
      {
        name: "Peugeot 3008",
        image:
          "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=480&h=300&q=85",
      },
    ],
  },

  {
    id: 4,
    date: "26 Aug 2026",
    time: "10:00",
    source: "BCA",
    location: "BCA Birmingham",
    type: "Weekly",
    vehicles: 246,
    featured: [
      {
        name: "Audi A4",
        image:
          "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=480&h=300&q=85",
      },
      {
        name: "BMW 3 Series",
        image:
          "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&w=480&h=300&q=85",
      },
      {
        name: "Mercedes A Class",
        image:
          "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=480&h=300&q=85",
      },
    ],
  },

  {
    id: 5,
    date: "27 Aug 2026",
    time: "17:30",
    source: "Manheim",
    location: "Manheim Bristol",
    type: "Weekly",
    vehicles: 214,
    featured: [
      {
        name: "Renault Captur",
        image:
          "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=480&h=300&q=85",
      },
      {
        name: "Ford Puma",
        image:
          "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=480&h=300&q=85",
      },
      {
        name: "VW T-Roc",
        image:
          "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=480&h=300&q=85",
      },
    ],
  },
];

const volumeData = [
  { day: "21", month: "Aug", value: 238 },
  { day: "22", month: "Aug", value: 265 },
  { day: "23", month: "Aug", value: 218 },
  { day: "24", month: "Aug", value: 382 },
  { day: "25", month: "Aug", value: 284 },
  { day: "26", month: "Aug", value: 246 },
  { day: "27", month: "Aug", value: 234 },
];

const activity = [
  {
    label: "New Listings (24h)",
    value: "184",
    change: "↑ 22%",
    suffix: "vs yesterday",
    positive: true,
    points: [15, 28, 21, 35, 25, 39, 38, 51],
  },
  {
    label: "Price Reductions (24h)",
    value: "67",
    change: "↑ 18%",
    suffix: "vs yesterday",
    positive: true,
    points: [18, 11, 23, 17, 29, 20, 21, 38],
  },
  {
    label: "Avg. Mileage",
    value: "54,230",
    change: "↑ 1.2%",
    suffix: "vs yesterday",
    positive: true,
    points: [20, 23, 19, 28, 27, 34, 31, 42],
  },
  {
    label: "Avg. Age (Years)",
    value: "4.8",
    change: "↑ 0.3",
    suffix: "vs yesterday",
    positive: true,
    points: [10, 19, 15, 22, 17, 25, 21, 32],
  },
  {
    label: "Withdrawn (24h)",
    value: "23",
    change: "↓ 5%",
    suffix: "vs yesterday",
    positive: false,
    points: [31, 26, 27, 22, 29, 26, 34, 41],
  },
];

function SourceBadge({ source }: { source: AuctionSource }) {
  if (source === "BCA") {
    return (
      <div className="inline-flex min-w-[72px] items-center justify-center rounded border border-white/10 bg-white px-2 py-1">
        <span className="font-black italic tracking-tight text-blue-700">
          BCA
        </span>
        <span className="ml-1 h-4 w-1 skew-x-[-15deg] bg-red-600" />
      </div>
    );
  }

  if (source === "Manheim") {
    return (
      <div className="inline-flex min-w-[84px] items-center gap-2 rounded border border-[#b58a16]/30 bg-[#111317] px-2 py-1">
        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#d7ad25] text-[9px] font-bold text-[#d7ad25]">
          M
        </span>

        <span className="text-[10px] font-semibold text-white/80">
          Manheim
        </span>
      </div>
    );
  }

  return (
    <div className="inline-flex min-w-[104px] items-center justify-center rounded border border-white/10 bg-white px-2 py-1">
      <span className="text-[10px] font-bold text-[#252525]">
        dealer
        <span className="text-[#9cbd37]">auction</span>
      </span>
    </div>
  );
}

function MiniSparkline({
  points,
  negative = false,
}: {
  points: number[];
  negative?: boolean;
}) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const width = 112;
  const height = 32;

  const coords = points
    .map((point, index) => {
      const x = (index / (points.length - 1)) * width;

      const y =
        height -
        ((point - min) / Math.max(max - min, 1)) * (height - 6) -
        3;

      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="h-8 w-28 overflow-visible"
    >
      <polyline
        points={coords}
        fill="none"
        stroke={negative ? "#ef4444" : "#d7ad25"}
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function Icon({
  name,
  className = "",
}: {
  name:
    | "overview"
    | "opportunities"
    | "auctions"
    | "portfolio"
    | "watchlist"
    | "analytics"
    | "reports"
    | "settings";

  className?: string;
}) {
  const common = `h-4 w-4 ${className}`;

  switch (name) {
    case "overview":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" />
          <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" />
          <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" />
          <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" />
        </svg>
      );

    case "opportunities":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z"
            stroke="currentColor"
          />

          <path
            d="M18 16l.8 2.2L21 19l-2.2.8L18 22l-.8-2.2L15 19l2.2-.8L18 16Z"
            stroke="currentColor"
          />
        </svg>
      );

    case "auctions":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M9 5l6 6M6 8l6 6M14 4l3 3-8 8-3-3 8-8Z"
            stroke="currentColor"
          />

          <path
            d="M11 14l6 6M14 17l3-3 4 4-3 3-4-4Z"
            stroke="currentColor"
          />
        </svg>
      );

    case "portfolio":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <rect
            x="3"
            y="7"
            width="18"
            height="13"
            rx="2"
            stroke="currentColor"
          />

          <path
            d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"
            stroke="currentColor"
          />
        </svg>
      );

    case "watchlist":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8Z"
            stroke="currentColor"
          />
        </svg>
      );

    case "analytics":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M4 20V10M10 20V4M16 20v-7M22 20V7"
            stroke="currentColor"
          />
        </svg>
      );

    case "reports":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path d="M6 3h9l3 3v15H6V3Z" stroke="currentColor" />
          <path d="M9 11h6M9 15h6" stroke="currentColor" />
        </svg>
      );

    default:
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3" stroke="currentColor" />

          <path
            d="M19.4 15a1.7 1.7 0 00.3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 00-1.9-.3 1.7 1.7 0 00-1 1.6V21h-4v-.1a1.7 1.7 0 00-1-1.6 1.7 1.7 0 00-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 00.3-1.9 1.7 1.7 0 00-1.6-1H3v-4h.1a1.7 1.7 0 001.6-1 1.7 1.7 0 00-.3-1.9L4.3 7 7 4.2l.1.1a1.7 1.7 0 001.9.3 1.7 1.7 0 001-1.6V3h4v.1a1.7 1.7 0 001 1.6 1.7 1.7 0 001.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 00-.3 1.9 1.7 1.7 0 001.6 1h.1v4H21a1.7 1.7 0 00-1.6 1Z"
            stroke="currentColor"
          />
        </svg>
      );
  }
}

const sideNav = [
  {
    label: "Overview",
    href: "/market-intelligence/dashboard",
    icon: "overview" as const,
  },
  {
    label: "Opportunities",
    href: "/market-intelligence/opportunities",
    icon: "opportunities" as const,
  },
  {
    label: "Auctions",
    href: "/market-intelligence/auctions",
    icon: "auctions" as const,
  },
  {
    label: "Portfolio",
    href: "/market-intelligence/portfolio",
    icon: "portfolio" as const,
  },
  {
    label: "Watchlist",
    href: "/market-intelligence/watchlist",
    icon: "watchlist" as const,
  },
  {
    label: "Analytics",
    href: "/market-intelligence/analytics",
    icon: "analytics" as const,
  },
  {
    label: "Reports",
    href: "/market-intelligence/reports",
    icon: "reports" as const,
  },
  {
    label: "Settings",
    href: "/market-intelligence/settings",
    icon: "settings" as const,
  },
];

export default function AuctionsPage() {
  const [viewMode, setViewMode] =
    useState<"table" | "calendar">("table");

  const [auctionHouse, setAuctionHouse] =
    useState("All Auction Houses");

  const [location, setLocation] =
    useState("All Locations");

  const [auctionType, setAuctionType] =
    useState("All Types");

  const [search, setSearch] =
    useState("");

  const filteredAuctions = useMemo(() => {
    return auctions.filter((auction) => {
      const auctionMatches =
        auctionHouse === "All Auction Houses" ||
        auction.source === auctionHouse;

      const locationMatches =
        location === "All Locations" ||
        auction.location
          .toLowerCase()
          .includes(location.toLowerCase());

      const typeMatches =
        auctionType === "All Types" ||
        auction.type === auctionType;

      const featuredSearchText = auction.featured
        .map((vehicle) => vehicle.name)
        .join(" ");

      const searchMatches =
        !search ||
        `${auction.source} ${auction.location} ${featuredSearchText}`
          .toLowerCase()
          .includes(search.toLowerCase());

      return (
        auctionMatches &&
        locationMatches &&
        typeMatches &&
        searchMatches
      );
    });
  }, [auctionHouse, location, auctionType, search]);

  const maxVolume = Math.max(
    ...volumeData.map((item) => item.value)
  );

  return (
    <main className="min-h-screen bg-[#050607] text-white">
      {/* GLOBAL HEADER */}

      <header className="border-b border-white/10 bg-[#030303]">
        <div className="mx-auto flex h-[100px] max-w-[1500px] items-center px-7">
          <Link href="/" className="mr-16 shrink-0">
            <div className="text-[29px] font-semibold leading-none tracking-tight">
              AutoSales
              <span className="text-[#d7ad25]">
                AI
              </span>
            </div>

            <div className="mt-2 text-[8px] uppercase tracking-[0.36em] text-white/45">
              Market Intelligence
            </div>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-12 xl:flex">
            <Link
              href="/"
              className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/90 hover:text-[#d7ad25]"
            >
              Home
            </Link>

            <Link
              href="/ai-sales-assistant"
              className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/90 hover:text-[#d7ad25]"
            >
              AI Sales Assistant
            </Link>

            <Link
              href="/market-intelligence"
              className="relative text-[12px] font-semibold uppercase tracking-[0.14em] text-[#d7ad25]"
            >
              Market Intelligence

              <span className="absolute -bottom-[26px] left-0 h-[2px] w-full bg-[#d7ad25]" />
            </Link>

            <Link
              href="/case-studies"
              className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/90 hover:text-[#d7ad25]"
            >
              Case Studies
            </Link>

            <Link
              href="/about"
              className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/90 hover:text-[#d7ad25]"
            >
              About
            </Link>
          </nav>

          <div className="ml-auto flex items-center gap-7">
            <Link
              href="/book-demo"
              className="hidden rounded-lg border border-[#a57e12] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#dfb82b] transition hover:bg-[#d7ad25] hover:text-black lg:block"
            >
              Book A Demo
            </Link>

            <button className="hidden items-center gap-2 text-sm font-semibold text-[#d7ad25] 2xl:flex">
              <span className="text-lg">
                ↻
              </span>

              Refresh
            </button>

            <div className="hidden h-8 w-px bg-white/10 2xl:block" />

            <div className="hidden items-center gap-3 2xl:flex">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8f6d13] bg-[#121416] text-xs font-bold">
                MC
              </div>

              <div>
                <div className="text-sm font-semibold">
                  Marco Costella
                </div>

                <div className="text-xs text-white/40">
                  Pro Plan
                </div>
              </div>

              <span className="ml-3 text-white/50">
                ⌄
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-100px)]">
        {/* SIDE NAVIGATION */}

        <aside className="hidden w-[225px] shrink-0 border-r border-white/10 bg-[#080a0b] lg:flex lg:flex-col">
          <div className="px-6 pb-5 pt-7 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/55">
            Market Intelligence
          </div>

          <nav className="space-y-2 px-3">
            {sideNav.map((item) => {
              const active =
                item.label === "Auctions";

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-4 rounded-lg px-4 py-3.5 text-[13px] transition ${
                    active
                      ? "border border-[#705710]/50 bg-[#30260d] text-[#e5b82d]"
                      : "text-white/70 hover:bg-white/[0.035] hover:text-white"
                  }`}
                >
                  <Icon
                    name={item.icon}
                    className={
                      active
                        ? "text-[#e5b82d]"
                        : "text-white/55"
                    }
                  />

                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto p-3">
            <div className="rounded-xl border border-[#735a14]/65 bg-[#0d0f10] p-5">
              <div className="text-sm font-semibold text-[#e1b629]">
                AI Assistant
              </div>

              <div className="mt-2 max-w-[120px] text-[11px] leading-relaxed text-white/45">
                Ask anything about the auctions
              </div>

              <button className="mt-4 text-xs text-white/60">
                ◉
              </button>
            </div>
          </div>
        </aside>

        {/* CONTENT */}

        <section className="min-w-0 flex-1 bg-[radial-gradient(circle_at_55%_0%,rgba(215,173,37,0.025),transparent_28%)]">
          <div className="mx-auto max-w-[1500px] px-6 py-8 xl:px-9">
            {/* PAGE TITLE */}

            <div>
              <h1 className="text-[32px] font-semibold tracking-tight">
                Auctions
              </h1>

              <p className="mt-1 text-[13px] text-white/45">
                Live and upcoming auction events from BCA, Manheim and Dealer Auction
              </p>
            </div>

            {/* KPI CARDS */}

            <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              <KpiCard
                title="Upcoming Auctions"
                value="14"
                description="Next 7 days"
                change="↑ 27% vs last 7 days"
                icon="calendar"
              />

              <KpiCard
                title="Vehicles Listed"
                value="1,256"
                description="Across all auctions"
                change="↑ 16% vs last 7 days"
                icon="car"
              />

              <KpiCard
                title="Avg. Est. Profit"
                value="£3,240"
                description="Per opportunity"
                change="↑ 15% vs last 7 days"
                icon="chart"
              />

              <KpiCard
                title="Total Est. Profit"
                value="£4.07M"
                description="Across all opportunities"
                change="↑ 20% vs last 7 days"
                icon="money"
              />

              <KpiCard
                title="Conversion Rate"
                value="38%"
                description="Won vs offered"
                change="↑ 5pp vs last 7 days"
                icon="target"
              />
            </div>

            {/* MAIN GRID */}

            <div className="mt-4 grid gap-4 2xl:grid-cols-[minmax(0,2.05fr)_minmax(360px,1fr)]">
              {/* UPCOMING AUCTIONS */}

              <div className="overflow-hidden rounded-xl border border-[#765b12]/60 bg-[#0a0c0d]">
                <div className="flex min-h-[62px] items-center justify-between border-b border-white/10 px-5">
                  <h2 className="text-[17px] font-semibold">
                    Upcoming Auctions
                  </h2>

                  <div className="flex rounded-lg border border-white/10 bg-[#070809] p-1">
                    <button
                      onClick={() =>
                        setViewMode("table")
                      }
                      className={`rounded-md px-4 py-2 text-xs ${
                        viewMode === "table"
                          ? "border border-[#80620f] bg-[#2b230d] text-[#dcb326]"
                          : "text-white/50"
                      }`}
                    >
                      ☷ &nbsp; Table
                    </button>

                    <button
                      onClick={() =>
                        setViewMode("calendar")
                      }
                      className={`rounded-md px-4 py-2 text-xs ${
                        viewMode === "calendar"
                          ? "border border-[#80620f] bg-[#2b230d] text-[#dcb326]"
                          : "text-white/50"
                      }`}
                    >
                      □ &nbsp; Calendar
                    </button>
                  </div>
                </div>

                {viewMode === "table" ? (
                  <>
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[940px]">
                        <thead>
                          <tr className="border-b border-white/10 bg-[#0d0f10] text-left text-[9px] uppercase tracking-[0.06em] text-white/45">
                            <th className="px-5 py-4 font-medium">
                              Date & Time
                            </th>

                            <th className="px-4 py-4 font-medium">
                              Auction
                            </th>

                            <th className="px-4 py-4 font-medium">
                              Location
                            </th>

                            <th className="px-4 py-4 font-medium">
                              Type
                            </th>

                            <th className="px-4 py-4 font-medium">
                              Vehicles
                            </th>

                            <th className="px-4 py-4 font-medium">
                              Featured Stock
                            </th>

                            <th className="px-4 py-4 font-medium">
                              Action
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {filteredAuctions.map(
                            (auction) => (
                              <tr
                                key={auction.id}
                                className="border-b border-white/[0.07] text-[11px] transition hover:bg-white/[0.025]"
                              >
                                <td className="whitespace-nowrap px-5 py-4 font-medium text-white/90">
                                  {auction.date}{" "}
                                  {auction.time}
                                </td>

                                <td className="px-4 py-4">
                                  <SourceBadge
                                    source={
                                      auction.source
                                    }
                                  />
                                </td>

                                <td className="px-4 py-4 text-white/80">
                                  {auction.location}
                                </td>

                                <td className="px-4 py-4 text-white/65">
                                  {auction.type}
                                </td>

                                <td className="px-4 py-4 font-semibold">
                                  {auction.vehicles}
                                </td>

                                {/* FEATURED STOCK */}

                                <td className="px-4 py-3">
                                  <div className="flex gap-2">
                                    {auction.featured.map(
                                      (vehicle) => (
                                        <div
                                          key={vehicle.name}
                                          title={vehicle.name}
                                          className="group relative h-[52px] w-[86px] shrink-0 overflow-hidden rounded-md border border-[#7e641c]/55 bg-[#111315] shadow-[0_0_0_1px_rgba(0,0,0,0.35)]"
                                        >
                                          <img
                                            src={vehicle.image}
                                            alt={vehicle.name}
                                            loading="lazy"
                                            onError={(event) => {
                                              const image =
                                                event.currentTarget;

                                              if (
                                                image.src !==
                                                FALLBACK_CAR_IMAGE
                                              ) {
                                                image.src =
                                                  FALLBACK_CAR_IMAGE;
                                              }
                                            }}
                                            className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
                                          />

                                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                                          <div className="pointer-events-none absolute bottom-0 left-0 right-0 truncate px-1.5 pb-1 text-[6px] font-semibold text-white/90 opacity-0 transition duration-200 group-hover:opacity-100">
                                            {vehicle.name}
                                          </div>
                                        </div>
                                      )
                                    )}
                                  </div>
                                </td>

                                <td className="px-4 py-4">
                                  <Link
                                    href={`/market-intelligence/auctions/${auction.id}`}
                                    className="inline-flex items-center gap-2 rounded-md border border-[#8b6913] px-4 py-2 text-[10px] font-semibold text-[#e0b72a] transition hover:bg-[#d7ad25] hover:text-black"
                                  >
                                    ◉
                                    <span>
                                      View
                                    </span>
                                  </Link>
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>

                    <Link
                      href="/market-intelligence/auctions/all"
                      className="flex h-[55px] items-center justify-center gap-3 text-xs font-semibold text-[#d7ad25] hover:text-[#f0ca4c]"
                    >
                      View all auctions
                      <span>→</span>
                    </Link>
                  </>
                ) : (
                  <div className="grid min-h-[365px] grid-cols-5 gap-px bg-white/10 p-px">
                    {auctions.map(
                      (auction) => (
                        <div
                          key={auction.id}
                          className="bg-[#090b0c] p-4"
                        >
                          <div className="text-[10px] uppercase tracking-wider text-white/35">
                            {auction.date}
                          </div>

                          <div className="mt-3">
                            <SourceBadge
                              source={
                                auction.source
                              }
                            />
                          </div>

                          <div className="mt-4 text-lg font-semibold">
                            {auction.time}
                          </div>

                          <div className="mt-2 text-xs text-white/60">
                            {auction.location}
                          </div>

                          <div className="mt-5 text-xs text-[#d7ad25]">
                            {auction.vehicles} vehicles
                          </div>
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>

              {/* RIGHT ANALYTICS */}

              <div className="grid gap-4">
                <div className="rounded-xl border border-[#765b12]/60 bg-[#0a0c0d] p-5">
                  <h2 className="text-[16px] font-semibold">
                    Auction Source Breakdown
                  </h2>

                  <div className="mt-4 flex items-center justify-between gap-7">
                    <div className="relative h-[140px] w-[140px] shrink-0 rounded-full bg-[conic-gradient(#4169b2_0_50%,#d6a83a_50%_86%,#875a9d_86%_100%)]">
                      <div className="absolute inset-[27px] flex flex-col items-center justify-center rounded-full bg-[#0a0c0d]">
                        <div className="text-[26px] font-bold">
                          14
                        </div>

                        <div className="text-[10px] text-white/45">
                          Total
                        </div>
                      </div>
                    </div>

                    <div className="min-w-[180px] space-y-4 text-xs">
                      <Legend
                        colour="#4169b2"
                        label="BCA"
                        value="7 (50%)"
                      />

                      <Legend
                        colour="#d6a83a"
                        label="Manheim"
                        value="5 (36%)"
                      />

                      <Legend
                        colour="#875a9d"
                        label="Dealer Auction"
                        value="2 (14%)"
                      />
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-[#765b12]/60 bg-[#0a0c0d] p-5">
                  <h2 className="text-[16px] font-semibold">
                    Auction Volume (Next 7 Days)
                  </h2>

                  <div className="mt-7 flex h-[170px] items-end gap-4 border-b border-white/10 px-2">
                    {volumeData.map(
                      (item, index) => {
                        const height =
                          Math.max(
                            22,
                            (item.value /
                              maxVolume) *
                              135
                          );

                        return (
                          <div
                            key={`${item.day}-${item.month}`}
                            className="flex flex-1 flex-col items-center justify-end"
                          >
                            <div
                              className={`w-full max-w-[34px] rounded-t-sm ${
                                index < 3
                                  ? "bg-gradient-to-t from-[#6a427b] to-[#9f6aaa]"
                                  : "bg-gradient-to-t from-[#263f78] to-[#4d74bd]"
                              }`}
                              style={{
                                height,
                              }}
                            />

                            <div className="mt-2 text-[9px] text-white/65">
                              {item.day}
                            </div>

                            <div className="text-[8px] text-white/35">
                              {item.month}
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* MARKET ACTIVITY */}

            <div className="mt-4 rounded-xl border border-[#765b12]/60 bg-[#0a0c0d] p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-[17px] font-semibold">
                  Market Activity Overview
                </h2>

                <Link
                  href="/market-intelligence/analytics"
                  className="rounded-md border border-[#7f6112] px-4 py-2 text-[10px] font-semibold text-[#d9af24] hover:bg-[#d7ad25] hover:text-black"
                >
                  View full analytics →
                </Link>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
                {activity.map(
                  (item) => (
                    <div
                      key={item.label}
                      className="rounded-lg border border-white/[0.08] bg-[#0c0e0f] p-4"
                    >
                      <div className="text-[10px] text-white/50">
                        {item.label}
                      </div>

                      <div className="mt-3 flex items-end justify-between gap-4">
                        <div>
                          <div className="text-[23px] font-semibold tracking-tight">
                            {item.value}
                          </div>

                          <div className="mt-1 text-[9px]">
                            <span
                              className={
                                item.positive
                                  ? "text-[#55d163]"
                                  : "text-red-500"
                              }
                            >
                              {item.change}
                            </span>{" "}

                            <span className="text-white/35">
                              {item.suffix}
                            </span>
                          </div>
                        </div>

                        <MiniSparkline
                          points={
                            item.points
                          }
                          negative={
                            !item.positive
                          }
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* FILTER BAR */}

            <div className="mt-4 flex flex-wrap items-center gap-3 rounded-xl border border-white/[0.06] bg-[#080a0b] p-3">
              <SelectFilter
                value={auctionHouse}
                onChange={setAuctionHouse}
                options={[
                  "All Auction Houses",
                  "BCA",
                  "Manheim",
                  "DealerAuction",
                ]}
              />

              <SelectFilter
                value={location}
                onChange={setLocation}
                options={[
                  "All Locations",
                  "Leeds",
                  "Colchester",
                  "Birmingham",
                  "Bristol",
                ]}
              />

              <SelectFilter
                value={auctionType}
                onChange={setAuctionType}
                options={[
                  "All Types",
                  "Weekly",
                  "Timed",
                ]}
              />

              <select className="h-11 rounded-lg border border-white/10 bg-[#0d0f10] px-4 text-xs text-white/70 outline-none">
                <option>
                  All Vehicle Types
                </option>
                <option>
                  Car
                </option>
                <option>
                  LCV
                </option>
              </select>

              <select className="h-11 rounded-lg border border-white/10 bg-[#0d0f10] px-4 text-xs text-white/70 outline-none">
                <option>
                  Max Age
                </option>
                <option>
                  3 years
                </option>
                <option>
                  5 years
                </option>
                <option>
                  7 years
                </option>
                <option>
                  10 years
                </option>
              </select>

              <select className="h-11 rounded-lg border border-white/10 bg-[#0d0f10] px-4 text-xs text-white/70 outline-none">
                <option>
                  Max Mileage
                </option>
                <option>
                  30,000
                </option>
                <option>
                  50,000
                </option>
                <option>
                  75,000
                </option>
                <option>
                  100,000
                </option>
              </select>

              <button className="h-11 rounded-lg border border-white/10 bg-[#0d0f10] px-4 text-xs text-white/70">
                More Filters⌄
              </button>

              <div className="ml-auto flex h-11 min-w-[280px] items-center rounded-lg border border-white/10 bg-[#0d0f10] px-4">
                <span className="mr-3 text-white/30">
                  ⌕
                </span>

                <input
                  value={search}
                  onChange={(event) =>
                    setSearch(
                      event.target.value
                    )
                  }
                  placeholder="Search reg, make, model..."
                  className="w-full bg-transparent text-xs text-white outline-none placeholder:text-white/30"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function KpiCard({
  title,
  value,
  description,
  change,
  icon,
}: {
  title: string;
  value: string;
  description: string;
  change: string;

  icon:
    | "calendar"
    | "car"
    | "chart"
    | "money"
    | "target";
}) {
  return (
    <div className="relative min-h-[145px] rounded-xl border border-[#735a14]/60 bg-gradient-to-br from-[#0d0f10] to-[#090a0b] p-5">
      <div className="text-[11px] font-semibold text-white/75">
        {title}
      </div>

      <div className="mt-3 text-[29px] font-semibold leading-none tracking-tight">
        {value}
      </div>

      <div className="mt-3 text-[11px] text-white/45">
        {description}
      </div>

      <div className="mt-2 text-[10px] text-[#55d163]">
        {change}
      </div>

      <div className="absolute right-5 top-12 flex h-12 w-12 items-center justify-center rounded-lg border border-[#8d6b13] bg-[#211b0a] text-xl text-[#dab126]">
        {icon === "calendar" && "□"}
        {icon === "car" && "▱"}
        {icon === "chart" && "↗"}
        {icon === "money" && "◎"}
        {icon === "target" && "⊙"}
      </div>
    </div>
  );
}

function Legend({
  colour,
  label,
  value,
}: {
  colour: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center">
      <span
        className="mr-3 h-3 w-3 rounded-full"
        style={{
          backgroundColor:
            colour,
        }}
      />

      <span className="text-white/75">
        {label}
      </span>

      <span className="ml-auto font-semibold text-white/80">
        {value}
      </span>
    </div>
  );
}

function SelectFilter({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <select
      value={value}
      onChange={(event) =>
        onChange(
          event.target.value
        )
      }
      className="h-11 rounded-lg border border-white/10 bg-[#0d0f10] px-4 text-xs text-white/70 outline-none transition focus:border-[#8f6e18]"
    >
      {options.map(
        (option) => (
          <option
            key={
              option
            }
          >
            {
              option
            }
          </option>
        )
      )}
    </select>
  );
}