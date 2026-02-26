export const organizationSchema = (lang: 'en' | 'de') => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KreateRevo',
  url: 'https://kreaterevo.com',
  logo: 'https://kreaterevo.com/logo.png',
  description:
    lang === 'de'
      ? 'DevOps und Cloud-Infrastruktur Beratung mit Sitz in Deutschland, EU-weite Kunden.'
      : 'DevOps and cloud infrastructure consultancy based in Germany, serving EU clients.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Residenzstraße 133A',
    postalCode: '13409',
    addressLocality: 'Berlin',
    addressCountry: 'DE',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+49-1590-6702779',
    contactType: 'customer service',
    availableLanguage: ['English', 'German'],
  },
  sameAs: ['https://linkedin.com/company/kreaterevo'],
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const serviceSchema = (service: {
  title: string;
  description: string;
  provider: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.title,
  description: service.description,
  provider: {
    '@type': 'Organization',
    name: service.provider,
  },
});
