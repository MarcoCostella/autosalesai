import Image from "next/image";

const platforms = [
  {
    name: "AutoTrader",
    src: "/images/platform-ticker/autotrader.png",
    label: "RETAIL PRICING",
    logoWidth: 245,
    logoHeight: 66,
  },
  {
    name: "BCA",
    src: "/images/platform-ticker/bca.png",
    label: "AUCTION STOCK",
    logoWidth: 85,
    logoHeight: 36,
  },
  {
    name: "Manheim",
    src: "/images/platform-ticker/manheim.png",
    label: "AUCTION STOCK",
    logoWidth: 225,
    logoHeight: 72,
  },
  {
    name: "Cazoo",
    src: "/images/platform-ticker/cazoo.png",
    label: "MARKET TRENDS",
    logoWidth: 205,
    logoHeight: 66,
  },
  {
    name: "eBay",
    src: "/images/platform-ticker/ebay.png",
    label: "PRIVATE SALES",
    logoWidth: 155,
    logoHeight: 68,
  },
  {
    name: "Facebook",
    src: "/images/platform-ticker/facebook.png",
    label: "SOCIAL LISTINGS",
    logoWidth: 205,
    logoHeight: 66,
  },
  {
    name: "WhatsApp",
    src: "/images/platform-ticker/whatsapp.png",
    label: "LEAD CONVERSATIONS",
    logoWidth: 230,
    logoHeight: 72,
  },
  {
    name: "Instagram",
    src: "/images/platform-ticker/instagram.png",
    label: "SOCIAL LEADS",
    logoWidth: 58,
    logoHeight: 58,
  },
  {
    name: "TikTok",
    src: "/images/platform-ticker/tiktok.png",
    label: "SOCIAL DISCOVERY",
    logoWidth: 58,
    logoHeight: 58,
  },
];
function PlatformSet() {
  return (
    <div className="flex shrink-0">
      {platforms.map((platform) => (
        <div
          key={platform.name}
          className="
            flex h-[116px] w-[250px] shrink-0
            flex-col items-center justify-center
            border-r border-white/20
          "
        >
          <div className="flex h-[72px] w-full items-center justify-center px-3">
            {platform.name === "Instagram" || platform.name === "TikTok" ? (
              <Image
                src={platform.src}
                alt={platform.name}
                width={58}
                height={58}
                unoptimized
                className="h-[58px] w-[58px] object-contain"
              />
            ) : platform.name === "WhatsApp" ? (
              <div className="flex h-[72px] items-center justify-center gap-[8px]">

                <div className="relative h-[56px] w-[56px] shrink-0 overflow-hidden rounded-full">
                  <Image
                    src="/images/platform-ticker/whatsapp.png"
                    alt="WhatsApp"
                    width={180}
                    height={56}
                    sizes="180px"
                    unoptimized
                    className="absolute left-0 top-0 h-[56px] w-[180px] max-w-none object-contain object-left"
                  />
                </div>

                <span
                  className="whitespace-nowrap text-[29px] font-bold leading-none tracking-[-0.055em] text-white"
                  style={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    color: "#ffffff",
                  }}
                >
                  WhatsApp
                </span>

              </div>
            ) : platform.name === "Cazoo" ? (
              <div className="flex h-[72px] items-center justify-center">
                <span
                  className="whitespace-nowrap text-[34px] font-black leading-none tracking-[-0.045em]"
                  style={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    color: "#ff5a5f",
                  }}
                >
                  CAZOO
                </span>
              </div>
            ) : platform.name === "AutoTrader" ? (
              <div className="flex h-[72px] items-center justify-center gap-[8px]">

                <div className="flex shrink-0 items-center gap-[3px]">
                  <div
                    className="h-[10px] w-[24px] -skew-x-[24deg] rounded-[1px]"
                    style={{ backgroundColor: "#e32636" }}
                  />
                  <div
                    className="h-[10px] w-[24px] -skew-x-[24deg] rounded-[1px]"
                    style={{ backgroundColor: "#2874b9" }}
                  />
                </div>

                <span
                  className="whitespace-nowrap text-[28px] font-bold leading-none tracking-[-0.055em]"
                  style={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    color: "#ffffff",
                  }}
                >
                  AutoTrader
                </span>

              </div>
            ) : platform.name === "BCA" ? (
              <div className="flex h-[72px] items-center justify-center">
                <div
                  className="flex items-center justify-center rounded-[6px]"
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "3px 5px",
                    boxShadow: "0 0 5px rgba(255,255,255,0.35)",
                  }}
                >
                  <Image
                    src="/images/platform-ticker/bca.png"
                    alt="BCA"
                    width={95}
                    height={40}
                    unoptimized
                    style={{
                      width: "95px",
                      height: "auto",
                      maxWidth: "95px",
                      display: "block",
                    }}
                  />
                </div>
              </div>

            ) : platform.name === "eBay" ? (
              <div className="relative h-[72px] w-full">
                <Image
                  src="/images/platform-ticker/ebay.png"
                  alt="eBay"
                  width={120}
                  height={45}
                  unoptimized
                  className="absolute left-1/2"
                  style={{
                    width: "120px",
                    height: "auto",
                    maxWidth: "120px",
                    top: "10px",
                    transform: "translateX(-50%)",
                    display: "block",
                  }}
                />
              </div>
            ) : platform.name === "Facebook" ? (
              <div className="flex h-[72px] items-center justify-center">
                <span
                  className="whitespace-nowrap text-[35px] font-bold leading-none tracking-[-0.055em]"
                  style={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    color: "#1877F2",
                  }}
                >
                  facebook
                </span>
              </div>
            ) : (
              <Image
                src={platform.src}
                alt={`${platform.name} logo`}
                width={platform.logoWidth}
                height={platform.logoHeight}
                sizes={`${platform.logoWidth}px`}
                className="max-h-[72px] w-auto object-contain"
                unoptimized
              />
            )}
          </div>

          <div
            className="
              mt-[1px]
              text-center
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.32em]
              text-white/70
            "
          >
            {platform.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function PlatformTicker() {
  return (
    <section className="relative overflow-hidden bg-[#020405]">

      {/* TOP GOLD RAIL */}
      <div className="absolute inset-x-0 top-0 z-30 h-[2px] bg-[#f5c518]" />

      {/* TOP GOLD GLOW */}
      <div
        className="
          pointer-events-none
          absolute inset-x-0 top-0 z-20
          h-[16px]
          bg-gradient-to-b
          from-[#f5c518]/55
          via-[#f5c518]/15
          to-transparent
          blur-[4px]
        "
      />

      {/* HEADING */}
      <div className="relative z-20 flex min-h-[40px] items-center justify-center px-4 py-2 md:h-[40px] md:gap-5 md:px-5 md:py-0">
        <div
          className="
            hidden h-px w-[135px] md:block
            bg-gradient-to-r
            from-transparent
            to-[#d4af37]/90
          "
        />

        <p
          className="w-full text-center text-[9px] font-semibold uppercase leading-[1.5] tracking-[0.16em] text-white/85 md:w-auto md:whitespace-nowrap md:text-[10px] md:tracking-[0.40em]"
        >
          Built Around The Platforms That Drive UK Automotive Retail
        </p>

        <div
          className="
            hidden h-px w-[135px] md:block
            bg-gradient-to-l
            from-transparent
            to-[#d4af37]/90
          "
        />
      </div>

      {/* TICKER */}
      <div className="relative h-[116px] overflow-hidden">

        {/* VERY SMALL EDGE MASKS ONLY */}
        <div
          className="
            pointer-events-none
            absolute inset-y-0 left-0 z-30
            w-[55px]
            bg-gradient-to-r
            from-[#020405]
            to-transparent
          "
        />

        <div
          className="
            pointer-events-none
            absolute inset-y-0 right-0 z-30
            w-[55px]
            bg-gradient-to-l
            from-[#020405]
            to-transparent
          "
        />

        {/* CONTINUOUS TRACK */}
        <div className="platform-ticker-track flex w-max">
          <PlatformSet />
          <PlatformSet />
        </div>
      </div>

      {/* BOTTOM GOLD GLOW */}
      <div
        className="
          pointer-events-none
          absolute inset-x-0 bottom-0 z-20
          h-[16px]
          bg-gradient-to-t
          from-[#f5c518]/55
          via-[#f5c518]/15
          to-transparent
          blur-[4px]
        "
      />

      {/* BOTTOM GOLD RAIL */}
      <div className="absolute inset-x-0 bottom-0 z-30 h-[2px] bg-[#f5c518]" />

      <style>{`
        .platform-ticker-track {
          animation: platformTicker 38s linear infinite;
          will-change: transform;
        }

        .platform-ticker-track:hover {
          animation-play-state: paused;
        }

        @keyframes platformTicker {
          0% {
            transform: translate3d(0, 0, 0);
          }

          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .platform-ticker-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}



























