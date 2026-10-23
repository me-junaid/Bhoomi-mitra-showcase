export interface RevenueStream {
  id: string;
  number: string;
  title: string;
  category: string;
  modelType: 'Transaction-Based' | 'Recurring / Subscription' | 'Project Contract' | 'Margin & Supply';
  description: string;
  revenueDrivers: string[];
  investorRationale: string;
}

export const REVENUE_MODEL_DATA = {
  eyebrow: 'BUSINESS MODEL',
  heading: 'Multiple Potential Revenue Streams. One Integrated Ecosystem.',
  description:
    'Bhoomi Mitra is engineered to capture value across the entire land lifecycle—from initial discovery and transaction coordination to recurring estate maintenance, specialized plantation execution, and retail products.',
  disclaimer:
    'Proposed Revenue Model — Conceptual Business Architecture. All revenue mechanisms, pricing tiers, and commercial terms represent proposed models subject to market validation, operational feasibility, and legal review. Financial projections and market size figures will be populated upon formal investment memorandum approval.',
  streams: [
    {
      id: 'marketplace',
      number: '01',
      title: 'Farmland Marketplace',
      category: 'Transactions & Discovery',
      modelType: 'Transaction-Based',
      description:
        'Monetizing property discovery through curated listing fees, qualified buyer lead introductions, and transaction success facilitation.',
      revenueDrivers: [
        'Curated listing and marketing packages for landholders',
        'Buyer lead generation and site-visit coordination fees',
        'Facilitation fees on verified agricultural parcel transfers',
      ],
      investorRationale:
        'High average transaction value in farmland real estate drives attractive unit economics per closed parcel.',
    },
    {
      id: 'subscriptions',
      number: '02',
      title: 'Platform Subscriptions',
      category: 'SaaS & Membership',
      modelType: 'Recurring / Subscription',
      description:
        'Tiered annual memberships for listing partners, agricultural contractors, nurseries, and active farmland investors.',
      revenueDrivers: [
        'Verified Partner subscription tier for regional brokers',
        'Landowner Digital Dashboard access (remote farm telemetry)',
        'Preferred vendor placement for equipment and nursery suppliers',
      ],
      investorRationale:
        'Creates predictable recurring revenue streams and deep network stickiness across ecosystem participants.',
    },
    {
      id: 'management',
      number: '03',
      title: 'Farmland Management Contracts',
      category: 'Estate Operations',
      modelType: 'Recurring / Subscription',
      description:
        'Turnkey estate administration charging initial setup fees alongside recurring monthly or seasonal maintenance retainers.',
      revenueDrivers: [
        'One-time onboarding audit & perimeter establishment fees',
        'Recurring monthly acre-based ground maintenance contracts',
        'Seasonal harvesting, soil remediation, and irrigation surcharges',
      ],
      investorRationale:
        'Generates stable, multi-year operating cash flows from absentee landowners seeking worry-free land custody.',
    },
    {
      id: 'plantation',
      number: '04',
      title: 'Plants & Plantation Solutions',
      category: 'Silviculture & Nursery',
      modelType: 'Margin & Supply',
      description:
        'Direct supply margins on certified sandalwood and timber saplings combined with turnkey block plantation management agreements.',
      revenueDrivers: [
        'Trading margins on certified nursery-raised planting stock',
        'Turnkey sandalwood orchard design and planting contracts',
        'Long-term multi-year silviculture monitoring agreements',
      ],
      investorRationale:
        'High gross margins on certified planting materials combined with long-tail service retention.',
    },
    {
      id: 'landscaping',
      number: '05',
      title: 'Landscaping & Agro-Tourism Design',
      category: 'Landscape Architecture',
      modelType: 'Project Contract',
      description:
        'End-to-end design and execution contracts for farm retreats, living fences, natural stone pathways, and rainwater retention swales.',
      revenueDrivers: [
        'Landscape master planning and design consultation fees',
        'Turnkey execution contracting (civil, earthwork, flora planting)',
        'Seasonal garden and swale maintenance retainers',
      ],
      investorRationale:
        'Expands revenue into higher-margin estate enhancement for lifestyle and second-home farmland buyers.',
    },
    {
      id: 'expert-services',
      number: '06',
      title: 'Expert Advisory & Content',
      category: 'Knowledge & Consultation',
      modelType: 'Transaction-Based',
      description:
        'Paid specialist consultations with senior agronomists, soil testing lab referrals, agricultural workshops, and future event sponsorships.',
      revenueDrivers: [
        'Paid 1-on-1 soil profiling and agronomy consults',
        'Commission on soil testing lab and hydrogeological referrals',
        'Agricultural investor bootcamps and field study workshops',
      ],
      investorRationale:
        'Positions Bhoomi Mitra as the intellectual authority in sustainable farmland, generating organic buyer acquisition.',
    },
  ] as RevenueStream[],
  financialProjectionsPlaceholder: {
    title: 'Financial Projections Placeholder',
    subtitle: 'Confidential Investor Model — To Be Supplied Upon NDA Approval',
    note:
      'Detailed multi-year financial forecasts, CAC/LTV models, unit economics, capital expenditure roadmaps, and EBITDA projections are maintained within the confidential investor data room. Contact our executive team to request access.',
  },
};
