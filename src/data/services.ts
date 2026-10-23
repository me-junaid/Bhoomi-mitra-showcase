export interface PillarItem {
  id: string;
  number: string;
  title: string;
  summary: string;
  bulletPoints: string[];
  ctaLabel: string;
  ctaHref: string;
  image: string;
}

export interface ManagementStep {
  step: string;
  name: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface TrustModule {
  id: string;
  title: string;
  description: string;
  verificationLevel: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  category: string;
  description: string;
  sampleItems: string[];
  image: string;
}

export const ECOSYSTEM_PILLARS: PillarItem[] = [
  {
    id: 'discover',
    number: '01',
    title: 'Discover Farmland',
    summary:
      'Explore, list, compare, and enquire about agricultural properties through a structured, transparent marketplace framework.',
    bulletPoints: [
      'Verified agricultural parcel listings with GPS boundaries',
      'Location, acreage, water index, and soil type filtering',
      'Site-visit coordination and preliminary document packs',
    ],
    ctaLabel: 'Review Marketplace Vision',
    ctaHref: '#marketplace',
    image: '/images/pillar-discover.jpg',
  },
  {
    id: 'manage',
    number: '02',
    title: 'Manage Your Land',
    summary:
      'Access planned land assessment, cleaning, boundary fencing, infrastructure maintenance, and seasonal cultivation solutions.',
    bulletPoints: [
      'Turnkey management for resident and absentee landowners',
      'Borewell, solar pump, and micro-irrigation stewardship',
      'Scheduled farm visits with digital photo/video progress reporting',
    ],
    ctaLabel: 'Explore Land Management',
    ctaHref: '#management',
    image: '/images/pillar-manage.jpg',
  },
  {
    id: 'grow',
    number: '03',
    title: 'Grow with Expertise',
    summary:
      'Connect with agricultural specialists, sandalwood plantation guidance, eco-landscaping, and agronomy resources.',
    bulletPoints: [
      'Certified agronomist consultations and soil condition roadmaps',
      'High-value sandalwood silviculture & host-tree pairings',
      'Ecological landscape architecture and biodiversity planning',
    ],
    ctaLabel: 'Discover Agronomic Services',
    ctaHref: '#agronomy',
    image: '/images/pillar-grow.jpg',
  },
];

export const MARKETPLACE_DEMO_DATA = {
  eyebrow: 'PILLAR 01 — DISCOVER FARMLAND',
  heading: 'Making Farmland Discovery More Structured.',
  disclaimer:
    'Conceptual Platform Preview — Demonstration Data Only. Property listings shown below are fictional mockups illustrating proposed interface capabilities. They do not represent active or verified real-estate offerings. Property coordination does not replace independent legal due diligence.',
  filterPills: ['All Locations', 'Managed Farmlands', 'Water-Rich Parcels', 'Orchard Estates', 'Timber Zones'],
  mockListings: [
    {
      id: 'mock-1',
      title: 'Kaveri Basin Agricultural Tract',
      location: 'Mysuru District, Karnataka [Demonstration Mock]',
      acres: '4.5 Acres',
      soil: 'Red Loam Soil / pH 6.8',
      water: 'Active Borewell (3.5 Inch) + Canal Access',
      status: 'Conceptual Listing',
      features: ['Drip Irrigation Setup', 'Fenced Perimeter', 'All-Weather Road'],
      image: '/images/vertical-marketplace.jpg',
    },
    {
      id: 'mock-2',
      title: 'Deccan Agroforestry Holding',
      location: 'Chikkaballapur District, Karnataka [Demonstration Mock]',
      acres: '7.2 Acres',
      soil: 'Sandy Loam / Ideal for Sandalwood',
      water: '2 Solar-Powered Borewells',
      status: 'Conceptual Listing',
      features: ['Boundary Demarcated', 'Clear Title Chain', 'Host Vegetation Present'],
      image: '/images/about-farmland.jpg',
    },
    {
      id: 'mock-3',
      title: 'Western Foothill Organic Parcel',
      location: 'Hassan District, Karnataka [Demonstration Mock]',
      acres: '10.0 Acres',
      soil: 'Rich Organic Humus / pH 6.5',
      water: 'Natural Stream + Rainwater Swales',
      status: 'Conceptual Listing',
      features: ['Native Tree Buffer', 'Soil Test Completed', 'High Biomass Ratio'],
      image: '/images/pillar-manage.jpg',
    },
  ],
};

export const MANAGEMENT_LIFECYCLE: ManagementStep[] = [
  {
    step: '01',
    name: 'Assessment',
    title: 'Initial Land Assessment',
    description: 'Comprehensive physical and topological audit of the parcel, checking access roads, terrain contours, and baseline condition.',
    deliverable: 'Land Baseline Report & Aerial Survey',
  },
  {
    step: '02',
    name: 'Upkeep',
    title: 'Cleaning & Ground Upkeep',
    description: 'Removal of unwanted weeds, wild shrubs, and debris, preparing land for scientific layout and access paths.',
    deliverable: 'Cleared Terrain & Contour Alignment',
  },
  {
    step: '03',
    name: 'Demarcation',
    title: 'Boundary & Fencing Coordination',
    description: 'Verification of survey stones against revenue maps, followed by boundary fencing (chain link, barbed wire, or bio-fencing).',
    deliverable: 'Secure Demarcated Perimeter',
  },
  {
    step: '04',
    name: 'Resources',
    title: 'Soil & Water Resource Review',
    description: 'Scientific lab testing of topsoil microbiology, groundwater yield testing, and filtration assessment.',
    deliverable: 'Soil Chemistry Profile & Hydrology Map',
  },
  {
    step: '05',
    name: 'Masterplan',
    title: 'Plantation & Crop Planning',
    description: 'Bespoke agronomy masterplan selecting appropriate companion crops, timber saplings, or seasonal vegetables.',
    deliverable: 'Agronomy Calendar & Sowing Layout',
  },
  {
    step: '06',
    name: 'Operations',
    title: 'Scheduled Ground Maintenance',
    description: 'Ongoing routine care covering drip irrigation cycles, organic mulching, pest monitoring, and worker supervision.',
    deliverable: 'Scheduled Operational Activity Logs',
  },
  {
    step: '07',
    name: 'Reporting',
    title: 'Inspection & Progress Reporting',
    description: 'Transparent updates with photos, video logs, and agronomist inspection notes shared with the landowner.',
    deliverable: 'Monthly Digital Progress Dossier',
  },
];

export const SANDALWOOD_DATA = {
  eyebrow: 'SPECIALIZED PLANTATION SOLUTIONS',
  heading: 'Thoughtful Plantation Planning, From Sapling to Stewardship.',
  description:
    'Sandalwood (Santalum album) represents one of India’s most revered and economically valuable agroforestry species. Bhoomi Mitra proposes a legally compliant, scientific cultivation framework built around authentic sapling sourcing, proper host-plant biology, and disciplined long-horizon arboriculture.',
  disclaimer:
    'Important Informational Notice: Sandalwood cultivation is subject to site suitability, state forestry regulations, transit permits, initial capital expenditure, multi-year maintenance, and market uncertainty. Yields, timber weight, oil content, and commercial financial returns are never guaranteed.',
  offerings: [
    {
      title: 'Certified Sapling Sourcing',
      desc: 'Supplying disease-free, genetically robust Indian sandalwood seedlings sourced from recognized forestry nurseries.',
    },
    {
      title: 'Soil & Climatic Suitability Audit',
      desc: 'Evaluating soil electrical conductivity, drainage, and elevation to ensure optimal conditions for heartwood formation.',
    },
    {
      title: 'Host-Plant Pairing Matrices',
      desc: 'Sandalwood is a hemi-parasite requiring appropriate primary, secondary, and tertiary host trees (e.g., Cajanus cajan, Casuarina, Melia dubia).',
    },
    {
      title: 'Compliance & Registration Guidance',
      desc: 'Assisting landowners with state forest department registration, tree enumeration, and cutting transit permit protocols.',
    },
    {
      title: 'Pruning & Canopy Management',
      desc: 'Scheduled silviculture intervention to encourage straight bole growth and balanced light distribution.',
    },
    {
      title: 'Monitoring & Health Telemetry',
      desc: 'Periodic agronomy visits to detect spike disease, stem borers, and moisture stress before damage occurs.',
    },
  ],
  image: '/images/expertise-plantation.jpg',
  imageAlt: 'Sandalwood agroforestry canopy with sunlit trees',
};

export const LANDSCAPING_DATA = {
  eyebrow: 'LANDSCAPE SOLUTIONS',
  heading: 'Designing Outdoor Spaces With Purpose.',
  description:
    'Agricultural land possesses innate natural beauty. Our proposed landscape division blends agrarian utility with restorative ecological design—creating picturesque farm retreats, living biodiversity hedges, shaded stone pathways, and rainwater collection swales.',
  disclaimer:
    'Photographs in this gallery represent illustrative design concepts and nature references. They are not labeled as completed Bhoomi Mitra projects.',
  services: [
    { title: 'Landscape Master Planning', desc: 'Holistic zoning for living quarters, orchards, water bodies, and service pathways.' },
    { title: 'Native Flora & Sensory Gardens', desc: 'Planting drought-hardy flowering shrubs, fragrant herbs, and butterfly corridors.' },
    { title: 'Permaculture Pathways & Stone Terraces', desc: 'Natural stone paving, shaded wooden pergolas, and contoured walking trails.' },
    { title: 'Natural Swales & Water Features', desc: 'Rainwater retention ponds that recharge groundwater while elevating farm aesthetics.' },
    { title: 'Living Bio-Fences', desc: 'Perimeter borders utilizing flowering thorny shrubs that deter grazing animals and shelter birds.' },
    { title: 'Ongoing Landscape Upkeep', desc: 'Trimming, lawn aeration, organic fertilizing, and seasonal floral renewal.' },
  ],
  gallery: [
    { title: 'Agro-Retreat Pathway', image: '/images/landscaping-1.jpg', tag: 'Walkway Architecture' },
    { title: 'Terraced Farm Contours', image: '/images/landscaping-2.jpg', tag: 'Contour Landscaping' },
    { title: 'Natural Water Retention Basin', image: '/images/landscaping-3.jpg', tag: 'Eco-Hydrology' },
  ],
};

export const AGRONOMY_DATA = {
  eyebrow: 'AGRICULTURAL EXPERTISE',
  heading: 'Better Decisions Begin With Better Agricultural Knowledge.',
  description:
    'Modern land ownership requires more than good intentions—it requires scientific rigor. Bhoomi Mitra proposes connecting landowners with certified agronomists, soil microbiologists, and agroforestry consultants to ensure sustainable, high-integrity yields.',
  advisoryPillars: [
    { title: 'Soil Health Profiling', desc: 'Macro and micronutrient testing (N-P-K, OC, pH, EC) with organic amendment prescriptions.' },
    { title: 'Climate-Adaptive Crop Selection', desc: 'Selecting drought-resilient multi-crop calendars aligned with regional rainfall patterns.' },
    { title: 'Water Stewardship & Micro-Irrigation', desc: 'Design of high-efficiency drip networks, mulching schedules, and moisture sensors.' },
    { title: 'Organic Pest & Disease Management', desc: 'Biological controls, neem-based formulations, and beneficial insect conservation.' },
    { title: 'Agroforestry Integration', desc: 'Intercropping timber and fruit trees to diversify long-term land productivity.' },
    { title: 'Agricultural Knowledge Workshops', desc: 'Educational modules and field days for landowners desiring hands-on farming literacy.' },
  ],
  image: '/images/soil-inspection.jpg',
  imageAlt: 'Agronomist examining soil health in an active agricultural field',
};

export const PRODUCTS_CATALOGUE = {
  eyebrow: 'PLANTS & AGRICULTURAL PRODUCTS',
  heading: 'Supporting Plantation Needs With the Right Resources.',
  description:
    'A proposed curated catalogue connecting landowners with certified planting stock, soil conditioning amendments, and nursery-grade essentials. Designed as an illustrative future commercial division.',
  disclaimer:
    'Catalogue Showcase — Illustrative future business offering. No active shopping cart, inventory system, or transactions are live at this pre-launch stage.',
  categories: [
    {
      id: 'sandalwood-saplings',
      name: 'Indian Sandalwood Saplings',
      category: 'Specialized Planting Stock',
      description: 'Hardened, disease-free Santalum album seedlings raised with primary host companion roots.',
      sampleItems: ['6-Month Primary Host Seedlings', '12-Month Hardened Seedlings', 'Elite Genetic Stock'],
      image: '/images/vertical-sandalwood.jpg',
    },
    {
      id: 'high-value-timber',
      name: 'Valuable Agroforestry Saplings',
      category: 'Silviculture Species',
      description: 'Fast-growing, legally cultivable timber species designed for boundary and block plantations.',
      sampleItems: ['Malabar Neem (Melia dubia)', 'Red Sanders (Pterocarpus santalinus)', 'Teak & Mahogany'],
      image: '/images/expertise-plantation.jpg',
    },
    {
      id: 'horticultural-fruit',
      name: 'Grafted Fruit & Orchard Trees',
      category: 'Commercial Horticulture',
      description: 'High-yielding grafted fruit saplings suited for semi-arid and tropical farmland parcels.',
      sampleItems: ['Export-Grade Mango Hybrids', 'Taiwan Pink Guava', 'Amla & Pomegranate'],
      image: '/images/sapling-nursery.jpg',
    },
    {
      id: 'organic-inputs',
      name: 'Soil Amendments & Nursery Products',
      category: 'Regenerative Inputs',
      description: 'Enriched vermicompost, bio-fertilizers, mycorrhizae fungi, and eco-friendly seedling grow bags.',
      sampleItems: ['Microbial Soil Enricher', 'Cold-Pressed Neem Cake', 'VAM Inoculants'],
      image: '/images/vertical-products.jpg',
    },
  ],
};

export const TRUST_FRAMEWORK = {
  eyebrow: 'TRUST & TRANSPARENCY',
  heading: 'A Framework Built Around Informed Decisions.',
  description:
    'Farmland is a generational commitment. In an unregulated market plagued by boundary disputes and opaque title histories, Bhoomi Mitra is building its foundation upon institutional verification and radical transparency.',
  disclaimer:
    'Proposed Institutional Process: Bhoomi Mitra facilitates coordination with independent legal professionals, licensed land surveyors, and soil laboratories. The company does not unilaterally guarantee title or legal outcome, emphasizing thorough independent due diligence for every transaction.',
  pillars: [
    {
      number: '01',
      title: 'Identity & Partner Verification',
      desc: 'Screening listing partners and landowners with KYC validation and verified land ownership documentation.',
    },
    {
      number: '02',
      title: 'Multi-Decade Title Chain Review',
      desc: 'Coordinating retrieval of 30+ year ECs, mutation registers, RTC/Pahani records, and conversion certificates.',
    },
    {
      number: '03',
      title: 'Geo-Spatial & Boundary Demarcation',
      desc: 'Validating physical survey boundary stones against official revenue survey maps (Tippani/Akarbandh).',
    },
    {
      number: '04',
      title: 'Clear Listing & Zero Misrepresentation',
      desc: 'Transparent disclosure of zoning constraints, road access rights, right-of-way, and groundwater reality.',
    },
    {
      number: '05',
      title: 'Transparent Scopes & Itemized Fees',
      desc: 'Pre-defined contractual scopes for all management, planting, and maintenance packages without hidden markups.',
    },
    {
      number: '06',
      title: 'Objective Site Audits & Inspection Dossiers',
      desc: 'Regular documented condition audits with timestamped photography and geo-tagged inspection logs.',
    },
    {
      number: '07',
      title: 'Customer Data Privacy & Professional Ethics',
      desc: 'Strict confidentiality protocols protecting landowner registry data and prospective buyer inquiries.',
    },
  ],
};

export const EXPERT_NETWORK = {
  eyebrow: 'COLLABORATIVE ECOSYSTEM',
  heading: 'Connecting the Right People Around the Land.',
  description:
    'Bhoomi Mitra functions as the coordinating hub of a multi-disciplinary network. By linking specialized rural professionals with landholders, we bring professional standards to rural agricultural stewardship.',
  stakeholders: [
    { role: 'Farmland Owners', desc: 'Accessing professional maintenance, leasing options, or transparent listing services.' },
    { role: 'Prospective Buyers & Investors', desc: 'Discovering curated agricultural parcels backed by structured due diligence packs.' },
    { role: 'Listing Partners & Estate Agents', desc: 'Partnering on vetted listings adhering to verified documentation standards.' },
    { role: 'Certified Agronomists', desc: 'Providing soil profiling, crop selection, and seasonal pest management advice.' },
    { role: 'Silviculture & Plantation Specialists', desc: 'Designing sandalwood, teak, and agroforestry layouts with legal compliance.' },
    { role: 'Landscape Architects & Contractors', desc: 'Executing aesthetic retreats, natural swales, and eco-fencing.' },
    { role: 'Recognized Plant Nurseries', desc: 'Supplying disease-free saplings, fruit grafts, and organic soil inputs.' },
    { role: 'Independent Legal & Survey Professionals', desc: 'Conducting impartial title search reports and revenue boundary surveys.' },
  ],
};
