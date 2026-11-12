export type OpportunityDecision = "BUY" | "REVIEW" | "AVOID";

export type OpportunityRisk = "Low" | "Medium" | "High";

export type OpportunitySource =
  | "BCA"
  | "Manheim"
  | "Dealer Auction";

export interface Opportunity {
  id: string;
  score: number;

  source: OpportunitySource;
  auctionLogo: string;
  auctionCentre: string;
  saleDate: string;
  saleTime: string;

  registration: string;
  vehicle: string;
  derivative: string;
  year: string;
  mileage: number;

  fuel: string;
  gearbox: string;
  bodyStyle: string;

  currentPrice: number;
  capClean: number;
  atRetail: number;

  buyerFee: number;
  prepCost: number;
  transportCost: number;
  landedCost: number;

  potentialProfit: number;
  roi: number;
  daysToSell: number;
  recommendedMaxBid: number;

  confidence: number;
  liquidityScore: number;
  marketScore: number;

  inspection: string;
  riskLevel: OpportunityRisk;
  decision: OpportunityDecision;
  decisionReason: string;

  competitorCount: number;
  pricePosition: string;

  image: string;
}

export const opportunities: Opportunity[] = [
  {
    id: "vw-golf-gtd-2019",
    score: 97,
    source: "BCA",
    auctionLogo: "/images/market-auctions/bca.jpg",
    auctionCentre: "BCA",
    saleDate: "23 May",
    saleTime: "09:30",
    registration: "MF19 XJD",
    vehicle: "VW Golf GTD",
    derivative: "2.0 TDI DSG",
    year: "2019 (19)",
    mileage: 62000,
    fuel: "Diesel",
    gearbox: "Automatic",
    bodyStyle: "Hatchback",
    currentPrice: 8900,
    capClean: 11900,
    atRetail: 13250,
    buyerFee: 198,
    prepCost: 850,
    transportCost: 250,
    landedCost: 10198,
    potentialProfit: 3620,
    roi: 40,
    daysToSell: 18,
    recommendedMaxBid: 9700,
    confidence: 92,
    liquidityScore: 85,
    marketScore: 85,
    inspection: "BCA Assured",
    riskLevel: "Low",
    decision: "BUY",
    decisionReason:
      "Strong retail demand, good profit margin, low days to sell and clean condition history make this a high-confidence acquisition.",
    competitorCount: 8,
    pricePosition: "\u00A31,250 below market",
    image: "/images/market-vehicles/vw-golf-gtd-hd.jpg",
  },
  {
    id: "audi-a3-s-line-2020",
    score: 95,
    source: "Manheim",
    auctionLogo: "/images/market-auctions/manheim.jpg",
    auctionCentre: "Colchester",
    saleDate: "23 May",
    saleTime: "10:00",
    registration: "KT20 ABC",
    vehicle: "Audi A3 S Line",
    derivative: "1.5 TFSI S Tronic",
    year: "2020 (20)",
    mileage: 48500,
    fuel: "Petrol",
    gearbox: "Automatic",
    bodyStyle: "Hatchback",
    currentPrice: 9800,
    capClean: 12500,
    atRetail: 14100,
    buyerFee: 225,
    prepCost: 665,
    transportCost: 250,
    landedCost: 10940,
    potentialProfit: 3410,
    roi: 35,
    daysToSell: 16,
    recommendedMaxBid: 10600,
    confidence: 94,
    liquidityScore: 88,
    marketScore: 87,
    inspection: "SureCheck",
    riskLevel: "Low",
    decision: "BUY",
    decisionReason:
      "High retail confidence, strong liquidity and sufficient margin after acquisition and preparation costs.",
    competitorCount: 7,
    pricePosition: "\u00A31,100 below market",
    image: "/images/market-vehicles/audi-a3-s-line-hd.jpg",
  },
  {
    id: "ford-focus-st-2018",
    score: 94,
    source: "BCA",
    auctionLogo: "/images/market-auctions/bca.jpg",
    auctionCentre: "BCA",
    saleDate: "23 May",
    saleTime: "11:15",
    registration: "FG68 STX",
    vehicle: "Ford Focus ST",
    derivative: "2.3 EcoBoost",
    year: "2018 (68)",
    mileage: 55000,
    fuel: "Petrol",
    gearbox: "Manual",
    bodyStyle: "Hatchback",
    currentPrice: 7250,
    capClean: 9400,
    atRetail: 10230,
    buyerFee: 185,
    prepCost: 620,
    transportCost: 250,
    landedCost: 8305,
    potentialProfit: 2980,
    roi: 41,
    daysToSell: 20,
    recommendedMaxBid: 7900,
    confidence: 91,
    liquidityScore: 82,
    marketScore: 84,
    inspection: "BCA Assured",
    riskLevel: "Low",
    decision: "BUY",
    decisionReason:
      "Strong projected ROI and good retail demand provide sufficient headroom at the recommended bid level.",
    competitorCount: 9,
    pricePosition: "\u00A3925 below market",
    image: "/images/market-vehicles/ford-focus-st-hd.jpg",
  },
  {
    id: "skoda-karoq-se-2019",
    score: 92,
    source: "Manheim",
    auctionLogo: "/images/market-auctions/manheim.jpg",
    auctionCentre: "Colchester",
    saleDate: "24 May",
    saleTime: "09:30",
    registration: "YM69 KXA",
    vehicle: "Skoda Karoq SE",
    derivative: "1.5 TSI ACT",
    year: "2019 (19)",
    mileage: 41000,
    fuel: "Petrol",
    gearbox: "Manual",
    bodyStyle: "SUV",
    currentPrice: 8200,
    capClean: 10100,
    atRetail: 11350,
    buyerFee: 210,
    prepCost: 780,
    transportCost: 250,
    landedCost: 9440,
    potentialProfit: 2410,
    roi: 29,
    daysToSell: 22,
    recommendedMaxBid: 8800,
    confidence: 88,
    liquidityScore: 79,
    marketScore: 80,
    inspection: "SureCheck",
    riskLevel: "Medium",
    decision: "REVIEW",
    decisionReason:
      "Commercially viable, but preparation allowance and narrower margin require bid discipline.",
    competitorCount: 12,
    pricePosition: "\u00A3700 below market",
    image: "/images/market-vehicles/skoda-karoq-se-hd.jpg",
  },
  {
    id: "seat-leon-fr-2018",
    score: 92,
    source: "Dealer Auction",
    auctionLogo: "/images/market-auctions/dealer-auction.png",
    auctionCentre: "Dealer Auction",
    saleDate: "24 May",
    saleTime: "10:30",
    registration: "YK68 LFR",
    vehicle: "Seat Leon FR",
    derivative: "1.5 TSI EVO",
    year: "2018 (18)",
    mileage: 70000,
    fuel: "Petrol",
    gearbox: "Manual",
    bodyStyle: "Hatchback",
    currentPrice: 6900,
    capClean: 8800,
    atRetail: 9800,
    buyerFee: 195,
    prepCost: 650,
    transportCost: 250,
    landedCost: 7995,
    potentialProfit: 2100,
    roi: 30,
    daysToSell: 23,
    recommendedMaxBid: 7400,
    confidence: 86,
    liquidityScore: 77,
    marketScore: 79,
    inspection: "Dealer Inspection",
    riskLevel: "Medium",
    decision: "REVIEW",
    decisionReason:
      "Acceptable margin and market position but mileage and preparation exposure reduce confidence.",
    competitorCount: 11,
    pricePosition: "\u00A3600 below market",
    image: "/images/market-vehicles/seat-leon-fr-hd.jpg",
  },
];

export function getOpportunity(
  id: string,
): Opportunity | undefined {
  return opportunities.find(
    (opportunity) => opportunity.id === id,
  );
}

export function formatMoney(value: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatMileage(value: number): string {
  return new Intl.NumberFormat("en-GB").format(value);
}