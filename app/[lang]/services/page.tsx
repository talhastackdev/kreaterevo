import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, Clock, Users, Building2 } from 'lucide-react';
import { getDictionary, SUPPORTED_LANGUAGES, type Language } from '@/lib/dictionaries';
import { ModuleCard, ServiceCard } from '@/components/ModuleCard';
import FAQAccordion from '@/components/sections/FAQAccordion';
import { services } from '@/data/content';

export function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang as Language);
  const siteUrl = 'https://kreaterevo.com';

  return {
    title: dict['seo.services.title'],
    description: dict['seo.services.desc'],
    alternates: {
      canonical: `${siteUrl}/${lang}/services`,
      languages: {
        en: `${siteUrl}/en/services`,
        de: `${siteUrl}/de/services`,
        'x-default': `${siteUrl}/en/services`,
      },
    },
    openGraph: {
      type: 'website',
      locale: lang === 'de' ? 'de_DE' : 'en_US',
      url: `${siteUrl}/${lang}/services`,
      siteName: 'KreateRevo',
      title: `${dict['seo.services.title']} | KreateRevo`,
      description: dict['seo.services.desc'],
    },
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang as Language);

  const translatedFaqs = [
    { question: dict['faq.q1'], answer: dict['faq.a1'] },
    { question: dict['faq.q2'], answer: dict['faq.a2'] },
    { question: dict['faq.q3'], answer: dict['faq.a3'] },
    { question: dict['faq.q4'], answer: dict['faq.a4'] },
  ];

  const engagementModels = [
    {
      icon: Clock,
      title: dict['services.engagement.project.title'],
      description: dict['services.engagement.project.desc'],
      features: dict['services.engagement.project.features'] as unknown as string[],
    },
    {
      icon: Users,
      title: dict['services.engagement.retainer.title'],
      description: dict['services.engagement.retainer.desc'],
      features: dict['services.engagement.retainer.features'] as unknown as string[],
    },
    {
      icon: Building2,
      title: dict['services.engagement.embedded.title'],
      description: dict['services.engagement.embedded.desc'],
      features: dict['services.engagement.embedded.features'] as unknown as string[],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-label mb-4 block">{dict['services.label']}</span>
            <h1 className="font-display font-bold text-display-1 mb-6">{dict['services.hero.title']}</h1>
            <p className="text-lg lg:text-xl text-muted-foreground">{dict['services.hero.subtitle']}</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32 bg-charcoal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.shortDescription}
                href={`/${lang}/services/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How We Engage */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">{dict['services.engagement.title']}</span>
            <h2 className="font-display font-bold text-display-2 mb-4">{dict['services.engagement.title']}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{dict['services.engagement.subtitle']}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {engagementModels.map((model, index) => (
              <ModuleCard key={index} className="p-8" showPort={false}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <model.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-3">{model.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{model.description}</p>
                <ul className="space-y-2">
                  {model.features.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </ModuleCard>
            ))}
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="py-20 lg:py-32 bg-charcoal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">{dict['services.comparison.title']}</span>
            <h2 className="font-display font-bold text-display-2 mb-4">{dict['services.comparison.title']}</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-display font-semibold">{dict['services.label']}</th>
                  <th className="text-left py-4 px-4 font-display font-semibold">
                    {lang === 'de' ? 'Beste Für' : 'Best For'}
                  </th>
                  <th className="text-left py-4 px-4 font-display font-semibold">
                    {lang === 'de' ? 'Zeitrahmen' : 'Timeline'}
                  </th>
                  <th className="text-left py-4 px-4 font-display font-semibold"></th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.id} className="border-b border-border/50 hover:bg-card/50 transition-colors">
                    <td className="py-6 px-4">
                      <div className="font-medium">{service.title}</div>
                      <div className="text-sm text-muted-foreground">{service.shortDescription}</div>
                    </td>
                    <td className="py-6 px-4">
                      <ul className="space-y-1">
                        {service.whoItsFor.slice(0, 2).map((item, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">{item}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="py-6 px-4">
                      <span className="text-sm">{service.timeline.growth}</span>
                    </td>
                    <td className="py-6 px-4">
                      <Link
                        href={`/${lang}/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
                      >
                        {lang === 'de' ? 'Details' : 'Details'}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label mb-4 block">{dict['faq.label']}</span>
            <h2 className="font-display font-bold text-display-2 mb-4">{dict['services.faq.title']}</h2>
          </div>
          <FAQAccordion faqs={translatedFaqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-charcoal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ModuleCard className="inline-block p-12 max-w-2xl" showPort={false}>
            <h2 className="font-display font-bold text-display-3 mb-4">{dict['services.cta.title']}</h2>
            <p className="text-muted-foreground mb-8">{dict['services.cta.subtitle']}</p>
            <Link href={`/${lang}/contact`} className="btn-primary inline-flex">
              {dict['services.cta.button']}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </ModuleCard>
        </div>
      </section>
    </>
  );
}
