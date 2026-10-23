export interface NavItem {
  label: string;
  href: string;
}

export const SINGLE_PAGE_NAV: NavItem[] = [
  { label: 'Overview', href: '#overview' },
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Business Model', href: '#revenue-model' },
  { label: 'Technology', href: '#technology' },
  { label: 'Roadmap', href: '#roadmap' },
];

export const NAV_CTA = {
  label: 'Explore Ecosystem',
  href: '#ecosystem',
};

export const FOOTER_DATA = {
  brandName: 'Bhoomi Mitra',
  brandTagline: 'Discover Farmland. Manage Your Land. Grow with Expertise.',
  description:
    'An upcoming technology-enabled ecosystem bringing together farmland opportunities, professional land management, plantation solutions, and agricultural expertise.',
  disclaimer:
    'Pre-launch investor showcase. This website presents an upcoming company and business concept for presentation purposes. It does not constitute an offer of securities, collective investment scheme, or guaranteed agricultural returns. All proposed features, services, and timelines are conceptual and subject to operational finalization.',
  copyrightYear: new Date().getFullYear(),
};
