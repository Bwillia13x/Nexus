const brandName = process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Prairie Signal';
const defaultSEO = {
  titleTemplate: `%s | ${brandName}`,
  defaultTitle: `${brandName} — Calgary AI Consulting for small businesses`,
  description:
    'Solo AI-integration consultancy helping Calgary small businesses automate workflows, deploy AI assistants, and unlock insights.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    site_name: brandName,
  },
};

export default defaultSEO;
