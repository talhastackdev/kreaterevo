import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOProps {
  titleKey: string;
  descKey: string;
  canonicalPath?: string;
  ogImage?: string;
  noindex?: boolean;
  schema?: Record<string, unknown>;
}

export default function SEO({
  titleKey,
  descKey,
  canonicalPath,
  ogImage = 'https://kreaterevo.com/og-image.jpg',
  noindex = false,
  schema,
}: SEOProps) {
  const { language, t } = useLanguage();
  const siteUrl = 'https://kreaterevo.com';
  
  const title = t(titleKey) as string;
  const description = t(descKey) as string;
  const fullTitle = `${title} | KreateRevo`;
  
  const canonical = canonicalPath 
    ? `${siteUrl}/${language}${canonicalPath}` 
    : `${siteUrl}/${language}`;

  // Alternate language URLs
  const alternateEn = canonicalPath 
    ? `${siteUrl}/en${canonicalPath}` 
    : `${siteUrl}/en`;
  const alternateDe = canonicalPath 
    ? `${siteUrl}/de${canonicalPath}` 
    : `${siteUrl}/de`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={language} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      
      {/* Canonical */}
      <link rel="canonical" href={canonical} />
      
      {/* Hreflang tags */}
      <link rel="alternate" hrefLang="en" href={alternateEn} />
      <link rel="alternate" hrefLang="de" href={alternateDe} />
      <link rel="alternate" hrefLang="x-default" href={alternateEn} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="KreateRevo" />
      <meta property="og:locale" content={language === 'de' ? 'de_DE' : 'en_US'} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="author" content="KreateRevo" />
      <meta name="geo.region" content="DE" />
      <meta name="geo.placename" content="Berlin" />
      
      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}

// Pre-defined schemas
export const organizationSchema = (lang: 'en' | 'de') => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KreateRevo',
  url: 'https://kreaterevo.com',
  logo: 'https://kreaterevo.com/logo.png',
  description: lang === 'de' 
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
  sameAs: [
    'https://linkedin.com/company/kreaterevo',
  ],
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
