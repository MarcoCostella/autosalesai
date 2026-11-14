export type AuctionSource = "BCA" | "Manheim" | "DealerAuction";

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

export const auctions: Auction[] = [
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

export const sourceName=(source:AuctionSource)=>source==="DealerAuction"?"Dealer Auction":source;
