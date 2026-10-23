export interface BusinessPillar {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
  image: string;
  imageAlt: string;
  ctaText: string;
  ctaHref: string;
}

export interface BusinessVertical {
  id: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  extendedDescription: string;
  keyFeatures: string[];
  image: string;
  imageAlt: string;
  stage: 'Proposed' | 'In Development' | 'Strategic Horizon';
}

export const BUSINESS_PILLARS: BusinessPillar[] = [
  {
    id: 'discover',
    number: '01',
    title: 'Discover Farmland',
    tagline: 'Curated agricultural land parcels with clear documentation frameworks.',
    description:
      'A structured marketplace framework designed to make farmland discovery transparent, accessible, and grounded in thorough title and boundary verification protocols.',
    details: [
      'Comprehensive property documentation reviews',
      'Geographical boundary and soil typology surveys',
      'Access to vetted rural and semi-rural agricultural zones',
    ],
    image: '/images/pillar-discover.jpg',
    imageAlt: 'Aerial panoramic view of curated agricultural parcels with clean field divisions',
    ctaText: 'Explore Farmland Opportunities',
    ctaHref: '#businesses',
  },
  {
    id: 'manage',
    number: '02',
    title: 'Manage Your Land',
    tagline: 'Professional ground stewardship and operational maintenance.',
    description:
      'Reliable farmland management services providing ongoing field supervision, perimeter security, water infrastructure, and sustainable land upkeep for absentee or busy landowners.',
    details: [
      'Dedicated on-site agricultural estate managers',
      'Micro-irrigation and groundwater management',
      'Perimeter fencing, security, and seasonal maintenance',
    ],
    image: '/images/pillar-manage.jpg',
    imageAlt: 'Well-maintained agricultural estate rows under scientific management',
    ctaText: 'Review Management Services',
    ctaHref: '#businesses',
  },
  {
    id: 'grow',
    number: '03',
    title: 'Grow With Expertise',
    tagline: 'Scientific agronomy, crop planning, and specialized plantations.',
    description:
      'Bridging agricultural science and field execution through expert agronomic guidance, sustainable multi-cropping methods, and long-horizon agroforestry models.',
    details: [
      'Agronomic soil health and nutrient profiling',
      'Sandalwood and high-value timber plantation stewardship',
      'Eco-sensitive landscape and biodiversity planning',
    ],
    image: '/images/pillar-grow.jpg',
    imageAlt: 'Agronomist hands nurturing a thriving young sapling in rich organic soil',
    ctaText: 'Discover Agronomic Solutions',
    ctaHref: '#businesses',
  },
];

export const BUSINESS_VERTICALS: BusinessVertical[] = [
  {
    id: 'marketplace',
    number: '01',
    title: 'Managed Farmland Marketplace',
    category: 'Property & Discovery',
    summary:
      'A curated portal for exploring verified agricultural land with transparent boundary mappings and regulatory clarity.',
    extendedDescription:
      'Envisioned as a primary discovery gateway that simplifies agricultural land acquisition by connecting prospective buyers with verified farmland tracts, supported by preliminary title checks and environmental assessments.',
    keyFeatures: [
      'Document & boundary verification processes',
      'Topographical and water feasibility analysis',
      'Transparent parcel zoning classification',
    ],
    image: '/images/vertical-marketplace.jpg',
    imageAlt: 'Farmland marketplace parcel survey showing green fields',
    stage: 'In Development',
  },
  {
    id: 'management',
    number: '02',
    title: 'Farmland Management Services',
    category: 'Operations & Maintenance',
    summary:
      'Turnkey land stewardship ensuring periodic maintenance, infrastructure upkeep, and seasonal cultivation.',
    extendedDescription:
      'Designed to solve the operational challenges of absentee land ownership through organized field care, water preservation, security protocols, and transparent activity reporting.',
    keyFeatures: [
      'Scheduled farm visits and maintenance logs',
      'Borewell, drip, and solar pump oversight',
      'Seasonal weeding, mulching, and soil conditioning',
    ],
    image: '/images/vertical-management.jpg',
    imageAlt: 'Agricultural machinery and organized rows on an active farm',
    stage: 'Proposed',
  },
  {
    id: 'sandalwood',
    number: '03',
    title: 'Sandalwood & Plantation Solutions',
    category: 'High-Value Agroforestry',
    summary:
      'Scientific plantation frameworks for sandalwood and valuable timber species adhering to regulatory standards.',
    extendedDescription:
      'Structured agroforestry initiatives designed in compliance with state forestry guidelines, featuring proper host-tree selection, disease prevention, and long-term arboriculture monitoring.',
    keyFeatures: [
      'Host-parasite tree ecosystem design',
      'Regulatory compliance and transit documentation guidance',
      'Micro-climate and soil compatibility evaluations',
    ],
    image: '/images/vertical-sandalwood.jpg',
    imageAlt: 'Sandalwood and timber trees growing in a structured agroforestry plantation',
    stage: 'Strategic Horizon',
  },
  {
    id: 'landscaping',
    number: '04',
    title: 'Landscaping Services',
    category: 'Aesthetic & Ecology',
    summary:
      'Harmonizing agricultural utility with natural beauty, biodiversity corridors, and eco-retreat design.',
    extendedDescription:
      'Customized landscape architecture tailored to agrarian properties, creating living fences, shaded avenues, native floral buffers, and water harvesting waterbodies.',
    keyFeatures: [
      'Native flora and permaculture zoning',
      'Natural swale and rainwater pond design',
      'Estate internal pathways and living boundaries',
    ],
    image: '/images/vertical-landscaping.jpg',
    imageAlt: 'Carefully designed landscape estate with stone paths and native greenery',
    stage: 'Proposed',
  },
  {
    id: 'agronomy',
    number: '05',
    title: 'Agriculture & Agronomy',
    category: 'Science & Advisory',
    summary:
      'Data-informed crop advisory, scientific soil enrichment, and sustainable agricultural techniques.',
    extendedDescription:
      'Professional consultation with certified agronomists to determine optimum crop selection, natural pest control systems, companion planting, and soil microbiology revitalization.',
    keyFeatures: [
      'Periodic soil testing and nutrient roadmaps',
      'Regenerative and low-chemical farming models',
      'Climate-adaptive crop cycle planning',
    ],
    image: '/images/vertical-agronomy.jpg',
    imageAlt: 'Scientific agronomic field inspection of healthy crops',
    stage: 'In Development',
  },
  {
    id: 'products',
    number: '06',
    title: 'Plantation Products',
    category: 'Value Addition',
    summary:
      'Ethically harvested farm produce, organic amendments, and plantation-origin botanical products.',
    extendedDescription:
      'A future commercial channel bridging farm harvests with conscious consumers, featuring traceable origins, zero adulteration, and support for sustainable grower practices.',
    keyFeatures: [
      'Farm-to-consumer traceability standards',
      'Cold-pressed oils, organic honey, and aromatic extracts',
      'Sustainable packaging and fair remuneration',
    ],
    image: '/images/vertical-products.jpg',
    imageAlt: 'Artisanal organic plantation goods in eco-friendly jars',
    stage: 'Strategic Horizon',
  },
];
