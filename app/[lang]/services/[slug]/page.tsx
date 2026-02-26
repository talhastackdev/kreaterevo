import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check, Wrench, Clock, AlertCircle } from 'lucide-react';
import { getDictionary, SUPPORTED_LANGUAGES, type Language } from '@/lib/dictionaries';
import { ModuleCard } from '@/components/ModuleCard';
import { services } from '@/data/content';
import { serviceSchema } from '@/lib/metadata';

export function generateStaticParams() {
  return SUPPORTED_LANGUAGES.flatMap((lang) =>
    services.map((s) => ({ lang, slug: s.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const dict = getDictionary(lang as Language);
  const serviceData = services.find((s) => s.id === slug || s.slug === slug);
  const siteUrl = 'https://kreaterevo.com';

  if (!serviceData) {
    return { title: 'Service Not Found' };
  }

  return {
    title: serviceData.title,
    description: serviceData.shortDescription,
    alternates: {
      canonical: `${siteUrl}/${lang}/services/${serviceData.slug}`,
      languages: {
        en: `${siteUrl}/en/services/${serviceData.slug}`,
        de: `${siteUrl}/de/services/${serviceData.slug}`,
        'x-default': `${siteUrl}/en/services/${serviceData.slug}`,
      },
    },
    openGraph: {
      type: 'website',
      locale: lang === 'de' ? 'de_DE' : 'en_US',
      url: `${siteUrl}/${lang}/services/${serviceData.slug}`,
      siteName: 'KreateRevo',
      title: `${serviceData.title} | KreateRevo`,
      description: serviceData.shortDescription,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const dict = getDictionary(lang as Language);

  const serviceData = services.find((s) => s.id === slug || s.slug === slug);

  if (!serviceData) {
    notFound();
  }

  const schema = serviceSchema({
    title: serviceData.title,
    description: serviceData.fullDescription,
    provider: 'KreateRevo',
  });

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/${lang}/services`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === 'de' ? 'Zurück zu Leistungen' : 'Back to Services'}
          </Link>
          <div className="max-w-3xl">
            <span className="section-label mb-4 block">{dict['services.label']}</span>
            <h1 className="font-display font-bold text-display-1 mb-6">{serviceData.title}</h1>
            <p className="text-lg lg:text-xl text-muted-foreground">{serviceData.fullDescription}</p>
          </div>
        </div>
      </section>

      {/* Who It's For + Problems */}
      <section className="py-20 lg:py-32 bg-charcoal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-display font-semibold text-2xl">{dict['service.whoFor']}</h2>
              </div>
              <ul className="space-y-4">
                {serviceData.whoItsFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-display font-semibold text-2xl">{dict['service.problems']}</h2>
              </div>
              <ul className="space-y-4">
                {serviceData.problems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-primary" />
              </div>
              <span className="section-label">{dict['service.deliverables']}</span>
            </div>
            <h2 className="font-display font-bold text-display-2">
              {lang === 'de' ? 'Was Sie Erhalten' : 'What You Get'}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceData.deliverables.map((item, index) => (
              <ModuleCard key={index} className="p-6" showPort={false}>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              </ModuleCard>
            ))}
          </div>
        </div>
      </section>

      {/* Tooling */}
      <section className="py-20 lg:py-32 bg-charcoal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-display-3 mb-4">{dict['service.tools']}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{dict['service.tools.subtitle']}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceData.tooling.map((tool) => (
              <span key={tool} className="px-4 py-2 rounded-full bg-card border border-border/30 text-sm font-medium">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Options */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <span className="section-label">{dict['service.timeline.title']}</span>
            </div>
            <h2 className="font-display font-bold text-display-2">{dict['service.timeline.title']}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <ModuleCard className="p-8" showPort={false}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-mono font-bold text-primary">S</span>
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">{dict['service.timeline.starter']}</h3>
                <p className="text-3xl font-display font-bold text-primary mb-2">{serviceData.timeline.starter}</p>
                <p className="text-sm text-muted-foreground">{dict['service.timeline.starter.desc']}</p>
              </div>
            </ModuleCard>
            <ModuleCard className="p-8 border-primary/50" showPort={false}>
              <div className="text-center">
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-1 text-xs font-medium uppercase tracking-wider rounded-t-2xl">
                  {lang === 'de' ? 'Beliebt' : 'Popular'}
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 mt-4">
                  <span className="font-mono font-bold text-primary">G</span>
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">{dict['service.timeline.growth']}</h3>
                <p className="text-3xl font-display font-bold text-primary mb-2">{serviceData.timeline.growth}</p>
                <p className="text-sm text-muted-foreground">{dict['service.timeline.growth.desc']}</p>
              </div>
            </ModuleCard>
            <ModuleCard className="p-8" showPort={false}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-mono font-bold text-primary">E</span>
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">{dict['service.timeline.enterprise']}</h3>
                <p className="text-3xl font-display font-bold text-primary mb-2">{serviceData.timeline.enterprise}</p>
                <p className="text-sm text-muted-foreground">{dict['service.timeline.enterprise.desc']}</p>
              </div>
            </ModuleCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-charcoal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ModuleCard className="inline-block p-12 max-w-2xl" showPort={false}>
              <h2 className="font-display font-bold text-display-3 mb-4">{dict['service.cta.title']}</h2>
              <p className="text-muted-foreground mb-8">
                {lang === 'de'
                  ? `Buchen Sie eine kostenlose Beratung, um Ihre ${serviceData.title.toLowerCase()}-Bedürfnisse zu besprechen und einen maßgeschneiderten Vorschlag zu erhalten.`
                  : `Book a free consultation to discuss your ${serviceData.title.toLowerCase()} needs and get a customized proposal.`}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/${lang}/contact`} className="btn-primary inline-flex">
                  {dict['service.cta.primary']}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </ModuleCard>
          </div>
        </div>
      </section>
    </>
  );
}
