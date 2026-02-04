import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
  schema?: Record<string, unknown>;
}

export default function SEO({
  title,
  description,
  canonical,
  ogImage = 'https://kreaterevo.com/og-image.jpg',
  noindex = false,
  schema,
}: SEOProps) {
  const fullTitle = `${title} | KreateRevo`;
  const siteUrl = 'https://kreaterevo.com';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      
      {/* Canonical */}
      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="KreateRevo" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {canonical && <meta property="og:url" content={`${siteUrl}${canonical}`} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="author" content="KreateRevo" />
      <meta name="geo.region" content="DE" />
      <meta name="geo.placename" content="Germany" />
      
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
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KreateRevo',
  url: 'https://kreaterevo.com',
  logo: 'https://kreaterevo.com/logo.png',
  description: 'DevOps and cloud infrastructure consultancy based in Germany, serving EU clients.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'DE',
  },
  sameAs: [
    'https://linkedin.com/company/kreaterevo',
    'https://github.com/kreaterevo',
  ],
};

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
