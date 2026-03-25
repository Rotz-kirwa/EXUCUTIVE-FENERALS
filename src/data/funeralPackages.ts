export interface FuneralPackage {
  slug: string;
  name: string;
  displayPrice: string;
  amountKes: number;
  paymentLabel?: string;
  desc: string;
  summary: string;
  features: string[];
  featured: boolean;
}

export const funeralPackages: FuneralPackage[] = [
  {
    slug: "essential-farewell",
    name: "Essential Farewell",
    displayPrice: "KSh 150,000",
    amountKes: 150000,
    desc: "A dignified, respectful service covering all essentials.",
    summary: "Essential booking with coordinated transport, floral tribute, burial logistics, and documentation handling.",
    features: [
      "Basic casket selection",
      "Standard hearse transport",
      "Church or home service coordination",
      "Floral tribute arrangement",
      "Burial coordination",
      "Documentation handling",
    ],
    featured: false,
  },
  {
    slug: "classic-tribute",
    name: "Classic Tribute",
    displayPrice: "KSh 350,000",
    amountKes: 350000,
    desc: "A comprehensive service with enhanced touches of elegance.",
    summary: "Balanced premium package with ceremony coordination, guest seating, florals, and tribute materials.",
    features: [
      "Premium casket selection",
      "Luxury hearse transport",
      "Full ceremony coordination",
      "Bespoke floral arrangements",
      "Tent & seating for 80 guests",
      "Memorial tribute program",
      "Professional photography",
      "Catering coordination",
    ],
    featured: false,
  },
  {
    slug: "executive-memorial",
    name: "Executive Memorial",
    displayPrice: "KSh 650,000",
    amountKes: 650000,
    desc: "Our signature package for a truly distinguished farewell.",
    summary: "Signature package with multi-vehicle fleet coverage, luxury florals, guest hospitality, media capture, and a dedicated liaison.",
    features: [
      "Executive casket collection",
      "Premium hearse fleet (3 vehicles)",
      "Full-service event coordination",
      "Luxury floral design",
      "Premium tent & seating (150 guests)",
      "Custom tribute program & video",
      "Live music coordination",
      "Professional photography & videography",
      "Catering for 150 guests",
      "Dedicated family liaison",
    ],
    featured: true,
  },
  {
    slug: "prestige-legacy",
    name: "Prestige Legacy",
    displayPrice: "Custom",
    amountKes: 1250000,
    paymentLabel: "Base booking amount",
    desc: "Bespoke, unlimited, world-class funeral experience.",
    summary: "Concierge-led premium arrangement with bespoke staging, multimedia production, repatriation coordination, and extended aftercare.",
    features: [
      "Bespoke casket of choice",
      "Unlimited premium fleet",
      "Personal event director",
      "Unlimited floral design",
      "Any venue, any scale",
      "Full multimedia production",
      "Regional and international repatriation support",
      "Legacy memorial website",
      "30-day family aftercare",
      "Concierge-level service",
    ],
    featured: false,
  },
];

export const getFuneralPackageBySlug = (slug: string | null | undefined) =>
  funeralPackages.find((item) => item.slug === slug);

export const formatKes = (amountKes: number) =>
  `KSh ${amountKes.toLocaleString("en-KE")}`;
