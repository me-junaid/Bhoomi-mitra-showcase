export interface TeamPlaceholder {
  id: string;
  role: string;
  category: 'Executive' | 'Operations' | 'Specialist Advisory';
  status: 'Pending Confirmation' | 'Proposed Role';
  namePlaceholder: string;
  backgroundPlaceholder: string;
  experiencePlaceholder: string;
  motivationPlaceholder: string;
}

export const HERO_DATA = {
  eyebrow: 'BHOOMI MITRA',
  badge: 'Investor Showcase & Company Concept',
  headlineP1: 'Discover Farmland.',
  headlineP2: 'Manage Your Land.',
  headlineP3: 'Grow with Expertise.',
  description:
    'An upcoming technology-enabled ecosystem bringing together farmland opportunities, professional land management, plantation solutions, and agricultural expertise.',
  primaryCta: {
    label: 'Explore Our Vision',
    href: '#overview',
  },
  secondaryCta: {
    label: 'Explore Ecosystem',
    href: '#ecosystem',
  },
  scrollText: 'Scroll to explore the investor presentation',
  bgImage: '/images/hero-farmland.jpg',
};

export const COMPANY_OVERVIEW_DATA = {
  eyebrow: 'WHO WE ARE',
  heading: 'Connecting Land, People & Agricultural Expertise.',
  leadStatement:
    'Bhoomi Mitra is conceived as an integrated ecosystem that addresses the fragmented lifecycle of farmland ownership, operational upkeep, and sustainable agricultural cultivation.',
  paragraphs: [
    'Farmland in India has historically operated in disconnected silos. Buyers struggle to discover verified agricultural properties with transparent boundaries; absentee landowners lack professional on-ground management; and high-value plantations often miss structured agronomic guidance.',
    'Bhoomi Mitra proposes a single, unified digital and operational platform connecting land opportunities, professional stewardship, qualified agronomists, and value-added plantation services into one continuous lifecycle.',
  ],
  quoteBanner: 'One ecosystem. Multiple land and agriculture solutions.',
  pillarsPreview: [
    { title: 'Farmland Discovery', desc: 'Structured marketplace connecting buyers and verified agricultural land.' },
    { title: 'Landowner Support', desc: 'Professional ground-level supervision, fencing, and maintenance.' },
    { title: 'Plantation Solutions', desc: 'Sandalwood and high-value agroforestry cultivation frameworks.' },
    { title: 'Agronomic Guidance', desc: 'Scientific soil conditioning, crop scheduling, and sustainable yields.' },
  ],
  image: '/images/about-farmland.jpg',
  imageAlt: 'Agricultural landscape with sustainable farm rows and mature tree lines',
};

export const VISION_MISSION_DATA = {
  eyebrow: 'PURPOSE & DIRECTION',
  heading: 'Our Purpose. Our Direction.',
  disclaimer: 'Draft strategic statements pending formal board and corporate approval.',
  vision: {
    title: 'Our Vision',
    tagline: 'Accessible, Productive & Sustainable Farmland',
    description:
      'To build India’s most trusted, technology-enabled farmland ecosystem—making agricultural land ownership transparent, land management effortless, and specialized plantation cultivation scientifically grounded.',
  },
  mission: {
    title: 'Our Mission',
    tagline: 'Bridging Landowners, Capital & Agronomy',
    description:
      'Connecting landowners, investors, qualified agronomists, and specialized rural service contractors through transparent processes, robust verification standards, and modern technology.',
  },
  values: [
    {
      title: 'Trust',
      desc: 'Building institutional confidence through objective due diligence and transparent documentation.',
    },
    {
      title: 'Transparency',
      desc: 'Clear disclosure of land parameters, title histories, service boundaries, and fee structures.',
    },
    {
      title: 'Expertise',
      desc: 'Grounding every operational decision in accredited agronomy, silviculture, and soil science.',
    },
    {
      title: 'Responsible Land Use',
      desc: 'Prioritizing regenerative soil practices, groundwater recharge, and native biodiversity.',
    },
    {
      title: 'Customer Service',
      desc: 'Providing responsive, professional care for landowners, buyers, and rural partners alike.',
    },
  ],
};

export const LEADERSHIP_PLACEHOLDERS: TeamPlaceholder[] = [
  {
    id: 'founder',
    role: 'Founder & Managing Director',
    category: 'Executive',
    status: 'Proposed Role',
    namePlaceholder: '[Founder Name — Candidate in Confirmation]',
    backgroundPlaceholder: 'Agritech & Real Estate Development Leadership',
    experiencePlaceholder: '15+ years spanning agribusiness, property acquisition, and corporate operations.',
    motivationPlaceholder: 'Passionate about democratizing farmland ownership and reviving fallow agricultural tracts.',
  },
  {
    id: 'cofounder',
    role: 'Co-Founder & Head of Operations',
    category: 'Executive',
    status: 'Proposed Role',
    namePlaceholder: '[Co-Founder Name — Candidate in Confirmation]',
    backgroundPlaceholder: 'Rural Infrastructure & Agronomy Execution',
    experiencePlaceholder: '12+ years directing on-ground agricultural estate management and farmer collectives.',
    motivationPlaceholder: 'Dedicated to bringing institutional operational standards to absentee farmland stewardship.',
  },
  {
    id: 'chief-agronomist',
    role: 'Chief Agronomist & Silviculture Advisor',
    category: 'Specialist Advisory',
    status: 'Pending Confirmation',
    namePlaceholder: '[Senior Scientist — Advisory Panel]',
    backgroundPlaceholder: 'Forestry Research & Soil Microbiology',
    experiencePlaceholder: '20+ years in sandalwood silviculture, host-tree dynamics, and drought-resilient crops.',
    motivationPlaceholder: 'Committed to scientifically backed agroforestry and soil regeneration at commercial scale.',
  },
  {
    id: 'head-technology',
    role: 'Head of Digital Products & Spatial Tech',
    category: 'Operations',
    status: 'Proposed Role',
    namePlaceholder: '[Product Leader — Candidate in Confirmation]',
    backgroundPlaceholder: 'GIS Mapping & Mobile Platforms',
    experiencePlaceholder: '10+ years engineering spatial intelligence, remote sensing, and marketplace products.',
    motivationPlaceholder: 'Building intuitive digital tools that bring remote farmland tracking directly to the landowner.',
  },
];

export const CONTACT_DATA = {
  eyebrow: 'CONNECT WITH BHOOMI MITRA',
  heading: 'Explore the Opportunity. Start a Conversation.',
  description:
    'We welcome dialogues with prospective institutional investors, strategic agribusiness partners, farmland holding families, and qualified agronomy specialists.',
  primaryCtaText: 'Discuss Partnership Opportunities',
  secondaryCtaText: 'Request Company Profile',
  placeholders: {
    notice: 'Official contact desk to be formally activated upon regulatory incorporation clearance.',
    email: 'partnerships@bhoomimitra.placeholder',
    phone: '+91 (0) 80 XXXX XXXX',
    address: 'Corporate Secretariat — Bengaluru, Karnataka, India (Pending Final Lease Approval)',
    domain: 'bhoomimitra.com',
  },
};
