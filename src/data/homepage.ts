export interface ProcessStep {
  step: string;
  name: string;
  title: string;
  description: string;
  tagline: string;
}

export interface TrustPrinciple {
  number: string;
  title: string;
  description: string;
  iconName: string;
  statusNote: string;
}

export interface ExpertiseFeature {
  title: string;
  category: string;
  description: string;
  points: string[];
}

export const HERO_CONTENT = {
  eyebrow: 'BHOOMI MITRA',
  badge: '',
  headline: 'Connecting Land, Expertise & Opportunity.',
  description:
    'Discover an integrated approach to farmland, land management, plantations, and agricultural expertise.',
  primaryCta: {
    label: 'Explore Our Ecosystem',
    href: '#pillars',
  },
  secondaryCta: {
    label: 'Partner With Us',
    href: '#contact',
  },
  scrollIndicatorText: 'Scroll to explore the ecosystem',
};

export const ABOUT_CONTENT = {
  label: 'WHO WE ARE',
  heading: 'A Connected Approach to Land and Agriculture.',
  leadText:
    'Bhoomi Mitra is conceptualized as an integrated corporate ecosystem bridging traditional land management with modern agronomic intelligence and structured farmland opportunities.',
  paragraphs: [
    'For generations, farmland ownership and agricultural management have operated in fragmented silos. Farmland buyers struggle with documentation clarity; landowners face operational hurdles in maintaining fertile acreage; and specialized agricultural practices lack structured advisory frameworks.',
    'We are building an ecosystem designed to connect land, capital, and agronomic science into a cohesive lifecycle. Our focus is on long-term stewardship, ecological integrity, and building trust through institutional transparency.',
  ],
  quote:
    'True value in farmland is not measured merely in acres, but in the vitality of its soil, the clarity of its title, and the consistency of its care.',
  quoteAuthor: 'Bhoomi Mitra Founding Philosophy',
  cta: {
    label: 'Learn About Our Approach',
    href: '#how-it-works',
  },
  image: '/images/about-farmland.jpg',
  imageAlt: 'Rich agricultural landscape showcasing sustainable farm rows with mature tree lines',
};

export const PROCESS_STAGES: ProcessStep[] = [
  {
    step: '01',
    name: 'Explore',
    title: 'Discovering Suitable Opportunities',
    description:
      'Review categorized farmland tracts or operational services aligned with your geography, soil preferences, and long-term land goals.',
    tagline: 'Transparent cataloguing of available tracts and service packages.',
  },
  {
    step: '02',
    name: 'Connect',
    title: 'Direct Strategic Dialogue',
    description:
      'Initiate an exploratory consultation with our dedicated land advisors to review specific requirements, terrain attributes, and service scopes.',
    tagline: 'Dedicated advisory interaction without high-pressure sales tactics.',
  },
  {
    step: '03',
    name: 'Evaluate',
    title: 'Verification & Due Diligence',
    description:
      'Examine preliminary legal title dossiers, encumbrance certificates, physical boundary markers, and groundwater survey indicators.',
    tagline: 'Rigorous due diligence protocols prior to any commitment.',
  },
  {
    step: '04',
    name: 'Plan',
    title: 'Customized Land Stewardship Roadmap',
    description:
      'Formulate tailored agronomic plans, fencing arrangements, irrigation systems, or agroforestry schedules suited to the acreage.',
    tagline: 'Holistic master-planning before ground operations commence.',
  },
  {
    step: '05',
    name: 'Progress',
    title: 'Operational Execution & Oversight',
    description:
      'Move forward with structured operational agreements, scheduled maintenance milestones, and periodic transparent status reporting.',
    tagline: 'Long-term value creation through systematic execution.',
  },
];

export const TRUST_PRINCIPLES: TrustPrinciple[] = [
  {
    number: '01',
    title: 'Transparent Communication',
    description:
      'Honest, documented disclosures regarding zoning classifications, agricultural access rights, water availability, and regulatory constraints.',
    iconName: 'ShieldCheck',
    statusNote: 'Core Operating Standard',
  },
  {
    number: '02',
    title: 'Thorough Verification Protocols',
    description:
      'Comprehensive verification procedures covering multi-decade title chain continuity, revenue records, and physical boundary demarcation.',
    iconName: 'FileCheck2',
    statusNote: 'Proposed Diligence Framework',
  },
  {
    number: '03',
    title: 'Independent Expert Involvement',
    description:
      'Engaging certified agronomists, soil testing laboratories, hydrogeologists, and legal counsels to provide objective assessments.',
    iconName: 'UsersRound',
    statusNote: 'Advisory Panel Model',
  },
  {
    number: '04',
    title: 'Responsible Land Stewardship',
    description:
      'Prioritizing soil regenerative practices, water recharge structures, and bio-diverse buffer zones over exploitative short-term gains.',
    iconName: 'Sprout',
    statusNote: 'Environmental Commitment',
  },
];

export const EXPERTISE_CONTENT = {
  label: 'BEYOND FARMLAND',
  heading: 'Supporting the Land Through Expertise.',
  subheading:
    'Land stewardship extends far beyond property transactions. Bhoomi Mitra brings structured science, silviculture knowledge, and agronomic management directly to fertile land.',
  image: '/images/expertise-plantation.jpg',
  imageAlt: 'High-value agroforestry canopy with structured tree rows and sunlit forest floor',
  services: [
    {
      title: 'High-Value Silviculture & Sandalwood',
      category: 'Agroforestry',
      description:
        'Structured cultivation frameworks for Indian sandalwood (Santalum album) and indigenous hardwoods, adhering to state forestry regulations and biosecurity best practices.',
      points: [
        'Host-tree pairing matrices for optimal parasite-host nutrient exchange',
        'State forest department registration protocol guidance',
        'Long-horizon health assessments and micro-climate management',
      ],
    },
    {
      title: 'Ecological Landscape Design',
      category: 'Landscape Architecture',
      description:
        'Transforming rural land into balanced ecological retreats with living windbreaks, natural swales, and native pollinator corridors.',
      points: [
        'Rainwater percolation channels and contour bunding',
        'Perimeter bio-fencing utilizing thorny native shrubs',
        'Scenic farm road layouts and shaded stone pergolas',
      ],
    },
    {
      title: 'Regenerative Agriculture & Agronomy',
      category: 'Agronomy',
      description:
        'Deploying certified agronomists to optimize multi-tier cropping, cover cropping, organic soil amendments, and biological pest deterrence.',
      points: [
        'Macro- and micronutrient soil profiling and microbial restore',
        'Integrated multi-crop companion strategies',
        'Precision drip and moisture monitoring recommendations',
      ],
    },
    {
      title: 'Plantation Harvest & Origin Products',
      category: 'Produce & Botanicals',
      description:
        'Developing traceable supply channels for high-grade honey, cold-pressed oils, medicinal botanicals, and farm-origin goods.',
      points: [
        'Direct provenance tracking from certified orchards',
        'Sustainable and ethical harvesting methods',
        'Zero artificial additives or chemical residues',
      ],
    },
  ],
  cta: {
    label: 'Explore Our Services',
    href: '#businesses',
  },
};

export const TECH_VISION = {
  label: 'LOOKING AHEAD',
  heading: 'Building a More Connected Land Ecosystem.',
  description:
    'Our vision includes developing a dedicated digital ecosystem platform and mobile applications to seamlessly unite landowners, agricultural managers, field agronomists, and service providers into one transparent operating system.',
  roadmapNotes: [
    {
      phase: 'Phase 1 (Current)',
      title: 'Corporate Foundation & Curated Advisory',
      status: 'Active Pre-Launch',
      description:
        'Establishing verified land pipelines, standardized diligence guidelines, and corporate advisory operations.',
    },
    {
      phase: 'Phase 2 (Proposed)',
      title: 'Digital Discovery Portal',
      status: 'Under Conceptual Design',
      description:
        'Centralized web portal for exploring farmland dossiers, satellite boundary maps, and agronomy advisories.',
    },
    {
      phase: 'Phase 3 (Horizon)',
      title: 'Bhoomi Mitra Mobile Application',
      status: 'Planned Future Architecture',
      description:
        'Native iOS and Android client applications enabling landowners to track estate visits, view soil analytics, and coordinate maintenance remotely.',
    },
  ],
  cta: {
    label: 'Explore Our Vision',
    href: '#contact',
  },
};

export const PARTNERSHIP_CONTENT = {
  label: 'PARTNERSHIPS & OPPORTUNITIES',
  heading: "Let's Build the Future of Land & Agriculture Together.",
  description:
    'Connect with Bhoomi Mitra to explore the company’s vision, business ecosystem, and strategic collaboration opportunities across farmland management, agronomic technologies, and institutional land stewardship.',
  disclaimer:
    'Note: Bhoomi Mitra is currently engaging prospective strategic partners, landholding families, and institutional advisors. No securities or guaranteed investment products are offered through this website.',
  primaryCta: {
    label: 'Explore Investor Information',
    href: '#contact',
  },
  secondaryCta: {
    label: 'Contact Our Team',
    href: '#contact',
  },
};

export const CAREERS_CONTENT = {
  label: 'CAREERS & TALENT',
  heading: 'Grow With Bhoomi Mitra.',
  description:
    'We are assembling a team of passionate professionals who believe in the future of Indian agriculture, rural revitalization, and ethical land stewardship. Explore upcoming opportunities to contribute to our mission.',
  disciplines: [
    'Agronomy & Soil Science',
    'Agroforestry & Plantation Management',
    'Rural Property Verification & Surveying',
    'Digital Product & Spatial Mapping',
    'Client Relations & Landowner Support',
  ],
  cta: {
    label: 'Explore Careers',
    href: '#contact',
  },
};
