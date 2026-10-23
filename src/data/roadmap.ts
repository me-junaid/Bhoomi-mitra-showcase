export interface OperatingStep {
  step: string;
  name: string;
  title: string;
  description: string;
  stakeholderInvolved: string;
}

export interface RoadmapPhase {
  phase: string;
  name: string;
  horizon: string;
  focus: string;
  milestones: string[];
  status: 'In Progress' | 'Conceptual Target' | 'Long-Term Horizon';
}

export const TECH_PLATFORM_DATA = {
  eyebrow: 'TECHNOLOGY VISION',
  heading: 'A Digital Foundation for a Connected Farmland Ecosystem.',
  description:
    'While land is physical, managing it at scale demands digital intelligence. Bhoomi Mitra envisions a proprietary mobile and web application architecture connecting landowners, field executives, agronomists, and buyers into one synchronized operational loop.',
  disclaimer:
    'Proposed Application Concept — Not Yet Launched. All mobile application screens and mockups shown below represent conceptual UI prototypes intended to illustrate the planned user experience. No mobile applications are currently published on app stores.',
  plannedModules: [
    { title: 'Interactive Farmland Mapping', desc: 'Satellite boundary overlays with cadastral survey maps and elevation profiles.' },
    { title: 'Remote Estate Telemetry', desc: 'Weekly photo logs, borewell water levels, and perimeter check-in timestamps.' },
    { title: 'Agronomy Consultation Desk', desc: 'Direct in-app communication with assigned soil scientists and crop experts.' },
    { title: 'Digital Due Diligence Vault', desc: 'Secure cloud storage for Encumbrance Certificates, revenue maps, and legal opinions.' },
    { title: 'Plantation Growth Log', desc: 'Tree enumeration registers tracking sandalwood growth metrics and silviculture cycles.' },
    { title: 'Service Dispatch & Billing', desc: 'Transparent one-click approval for seasonal fencing, weeding, or tractor services.' },
  ],
};

export const OPERATING_PROCESS_DATA = {
  eyebrow: 'HOW THE MODEL WORKS',
  heading: 'From Initial Enquiry to Coordinated Execution.',
  description:
    'Our proposed operational methodology bridges high-level client expectations with meticulous ground execution. Every interaction follows a structured seven-stage pathway.',
  stages: [
    {
      step: '01',
      name: 'Enquiry',
      title: 'Customer Onboarding & Intake',
      description: 'Initial intake of client requirements—identifying whether the need is parcel acquisition, absentee management, or plantation advisory.',
      stakeholderInvolved: 'Client + Bhoomi Mitra Advisory Desk',
    },
    {
      step: '02',
      name: 'Assessment',
      title: 'Preliminary Requirement Scoping',
      description: 'Reviewing budget, preferred micro-location, topography, water table expectations, or existing parcel condition.',
      stakeholderInvolved: 'Regional Land Scout / Estate Manager',
    },
    {
      step: '03',
      name: 'Evaluation',
      title: 'Site Visit & Technical Evaluation',
      description: 'Conducting ground-level inspections, soil chemistry samples, boundary checks, and preliminary document reviews.',
      stakeholderInvolved: 'Field Executive + Independent Surveyor',
    },
    {
      step: '04',
      name: 'Coordination',
      title: 'Expert & Legal Professional Alignment',
      description: 'Coordinating formal legal scrutiny with independent advocates and tailored agronomy roadmaps with soil specialists.',
      stakeholderInvolved: 'Independent Legal Counsel + Agronomist',
    },
    {
      step: '05',
      name: 'Proposal',
      title: 'Transparent Strategy & Agreement',
      description: 'Delivering an itemized scope of work, clear milestone pricing, transparent contracts, and scheduled deliverables.',
      stakeholderInvolved: 'Client + Bhoomi Mitra Secretariat',
    },
    {
      step: '06',
      name: 'Execution',
      title: 'Turnkey Ground Facilitation',
      description: 'Carrying out transaction coordination, fencing installation, sapling planting, or irrigation layout with professional oversight.',
      stakeholderInvolved: 'Ground Crew + Project Supervisor',
    },
    {
      step: '07',
      name: 'Continuity',
      title: 'Periodic Reporting & Long-Term Follow-up',
      description: 'Delivering scheduled digital progress dossiers, photo logs, seasonal maintenance, and dedicated relationship support.',
      stakeholderInvolved: 'Dedicated Relationship Manager',
    },
  ] as OperatingStep[],
  scenarios: [
    {
      badge: 'Illustrative Scenario A',
      title: 'The Absentee Farmland Owner',
      persona: 'Bangalore-based technology executive who owns 6 acres in Mandya District but visits only once every 3 months.',
      problem: 'Uncontrolled weed growth, broken perimeter fencing, and unmonitored borewell water infrastructure.',
      workflow: [
        'Client submits land survey number and parcel coordinates through the Bhoomi Mitra portal.',
        'Local Bhoomi Mitra estate manager conducts a 48-hour baseline audit with drone photography and soil sample.',
        'Bhoomi Mitra provides an itemized Annual Land Care Plan: perimeter bio-fencing, weed clearing, and drip system installation.',
        'Work is executed under Bhoomi Mitra supervision with monthly photo/video verification reports sent to the client.',
      ],
      outcome: 'Land is secure, soil is actively conditioned, and the owner enjoys remote transparency without operational stress.',
      note: 'Illustrative workflow — not an actual client case study.',
    },
    {
      badge: 'Illustrative Scenario B',
      title: 'The Prospective Farmland Buyer',
      persona: 'First-time agricultural land buyer seeking 4 acres for sustainable organic farming and sandalwood agroforestry.',
      problem: 'Fear of legal disputes, unclear boundary demarcation, unknown water availability, and complex land revenue laws.',
      workflow: [
        'Buyer browses curated listings on the conceptual Bhoomi Mitra portal filtered by water availability and clear documentation.',
        'Buyer schedules a guided weekend site visit accompanied by a Bhoomi Mitra land specialist.',
        'Bhoomi Mitra coordinates an independent legal title pack (30-year EC, mutation register, survey verification).',
        'Upon purchase, Bhoomi Mitra connects the buyer with an agronomist to establish an organic companion crop and sandalwood layout.',
      ],
      outcome: 'Buyer transitions smoothly into agricultural ownership backed by verified diligence and scientific guidance.',
      note: 'Illustrative workflow — not an actual client case study.',
    },
  ],
};

export const GROWTH_ROADMAP_DATA = {
  eyebrow: 'THE ROAD AHEAD',
  heading: 'Building for Long-Term, Responsible Growth.',
  description:
    'Our growth strategy prioritizes institutional integrity and operational excellence over unchecked expansion. We envision a phased milestone trajectory.',
  disclaimer:
    'Illustrative Proposed Roadmap — Subject to Board Approval. Milestones and timeframes represent strategic planning objectives and do not constitute guaranteed corporate deadlines or commercial commitments.',
  phases: [
    {
      phase: 'Phase 01',
      name: 'Foundation & Operational Governance',
      horizon: 'Current Milestone',
      focus: 'Institutional Setup & Framework Standardisation',
      milestones: [
        'Corporate structuring and core executive team assembly',
        'Standardization of the 3-pillar due diligence protocols',
        'Establishment of initial partner network (legal counsels, surveyors, agronomists)',
        'Investor presentation and strategic partnership initiation',
      ],
      status: 'In Progress',
    },
    {
      phase: 'Phase 02',
      name: 'Platform & Experience Prototyping',
      horizon: 'Near-Term Horizon',
      focus: 'Digital Architecture & Pilot Registry',
      milestones: [
        'Architecture design for the web and mobile platform',
        'Integration of GIS cadastral mapping prototypes',
        'Curation of initial verified farmland parcel pipeline in Karnataka',
        'Standardized service contract templates for estate management',
      ],
      status: 'Conceptual Target',
    },
    {
      phase: 'Phase 03',
      name: 'Initial Operations & Pilot Hub',
      horizon: 'Medium-Term Target',
      focus: 'Controlled Execution & Quality Validation',
      milestones: [
        'Launch of managed farmland pilot service in designated agricultural corridors',
        'Rollout of sandalwood silviculture advisory and nursery supply',
        'Onboarding of initial landowner cohort and feedback calibration',
        'Validation of unit economics across estate management contracts',
      ],
      status: 'Conceptual Target',
    },
    {
      phase: 'Phase 04',
      name: 'Ecosystem & Geographic Expansion',
      horizon: 'Expansion Horizon',
      focus: 'Multi-Region Scaling & Service Maturation',
      milestones: [
        'Geographic expansion into adjacent states (Tamil Nadu, Telangana, Andhra Pradesh)',
        'Release of native mobile apps for remote estate management telemetry',
        'Launch of specialized landscaping and farm-retreat design division',
        'Institutional capital partnerships for farmland aggregations',
      ],
      status: 'Long-Term Horizon',
    },
    {
      phase: 'Phase 05',
      name: 'Matured Platform & Value-Add Retailing',
      horizon: 'Long-Term Vision',
      focus: 'Integrated Value-Chain & Sustainable Leadership',
      milestones: [
        'Establishment of farm-to-consumer traceable plantation product lines',
        'Commercial harvesting and legal transit facilitation of matured timber stands',
        'Autonomous IoT soil-moisture and perimeter monitoring rollouts',
        'Continuous research partnerships with premier agricultural universities',
      ],
      status: 'Long-Term Horizon',
    },
  ] as RoadmapPhase[],
  sustainability: {
    heading: 'Rooted in Long-Term Ecological Stewardship',
    description:
      'We believe land value is inseparable from soil health and environmental responsibility. Our planned practices embed ecological sustainability into every service engagement.',
    tenets: [
      {
        title: 'Responsible Land Use',
        desc: 'Discouraging irreversible concrete encroachments on fertile soils; promoting harmonious rural agrarian architecture.',
      },
      {
        title: 'Soil Health Revitalization',
        desc: 'Prioritizing organic matter buildup, vermicomposting, and beneficial mycorrhizae over chemical inputs.',
      },
      {
        title: 'Aquifer & Water Conservation',
        desc: 'Mandating drip irrigation, contoured percolation trenches, and rainwater retention swales across managed parcels.',
      },
      {
        title: 'Biodiversity Corridors',
        desc: 'Incorporating native flora and pollinator-friendly hedgerows to support avian and insect ecosystems.',
      },
      {
        title: 'Generational Stewardship',
        desc: 'Treating farmland not as a short-term speculative commodity, but as a productive multi-generational legacy.',
      },
    ],
    disclaimer:
      'Note: Environmental principles reflect our planned operating philosophy. Bhoomi Mitra does not claim verified carbon offsets or measured ecological credits at this pre-launch stage.',
  },
};
