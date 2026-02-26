import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, Shield, Lock, Eye, FileText, Linkedin } from 'lucide-react';
import { getDictionary, SUPPORTED_LANGUAGES, type Language } from '@/lib/dictionaries';
import { ModuleCard } from '@/components/ModuleCard';
import { whyChooseUs, securityFeatures } from '@/data/content';

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
    title: dict['seo.about.title'],
    description: dict['seo.about.desc'],
    alternates: {
      canonical: `${siteUrl}/${lang}/about`,
      languages: {
        en: `${siteUrl}/en/about`,
        de: `${siteUrl}/de/about`,
        'x-default': `${siteUrl}/en/about`,
      },
    },
    openGraph: {
      type: 'website',
      locale: lang === 'de' ? 'de_DE' : 'en_US',
      url: `${siteUrl}/${lang}/about`,
      siteName: 'KreateRevo',
      title: `${dict['seo.about.title']} | KreateRevo`,
      description: dict['seo.about.desc'],
    },
  };
}

const values = [
  {
    title: 'Technical Excellence',
    description: 'We write clean, maintainable infrastructure code. Every line is reviewed, tested, and documented.',
  },
  {
    title: 'Operational Discipline',
    description: 'We follow proven practices: version control, automated testing, and continuous integration.',
  },
  {
    title: 'Knowledge Transfer',
    description: 'We do not create dependencies. Our goal is to make your team self-sufficient.',
  },
  {
    title: 'Transparent Communication',
    description: 'No jargon, no surprises. Regular updates and clear documentation keep everyone aligned.',
  },
];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang as Language);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-label mb-4 block">{dict['nav.about']}</span>
            <h1 className="font-display font-bold text-display-1 mb-6">{dict['about.hero.title']}</h1>
            <p className="text-lg lg:text-xl text-muted-foreground">{dict['about.hero.subtitle']}</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-32 bg-charcoal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-display-2 mb-6">{dict['about.story.title']}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>{dict['about.story.p1']}</p>
                <p>{dict['about.story.p2']}</p>
                <p>{dict['about.story.p3']}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ModuleCard className="aspect-square flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5" showPort={false}>
                <div className="text-center">
                  <div className="font-display font-bold text-4xl text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">{lang === 'de' ? 'Jahre Erfahrung' : 'Years Experience'}</div>
                </div>
              </ModuleCard>
              <ModuleCard className="aspect-square flex items-center justify-center bg-gradient-to-br from-secondary to-secondary/50" showPort={false}>
                <div className="text-center">
                  <div className="font-display font-bold text-4xl text-primary mb-2">EU</div>
                  <div className="text-sm text-muted-foreground">{lang === 'de' ? 'Ansässig in Deutschland' : 'Based in Germany'}</div>
                </div>
              </ModuleCard>
              <ModuleCard className="aspect-square flex items-center justify-center bg-gradient-to-br from-secondary to-secondary/50" showPort={false}>
                <div className="text-center">
                  <div className="font-display font-bold text-4xl text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">{lang === 'de' ? 'Support Verfügbar' : 'Support Available'}</div>
                </div>
              </ModuleCard>
              <ModuleCard className="aspect-square flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5" showPort={false}>
                <div className="text-center">
                  <div className="font-display font-bold text-4xl text-primary mb-2">IaC</div>
                  <div className="text-sm text-muted-foreground">Infrastructure as Code</div>
                </div>
              </ModuleCard>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label mb-4 block">{dict['nav.about']}</span>
            <h2 className="font-display font-bold text-display-2 mb-4">{dict['about.values.title']}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <ModuleCard key={index} className="p-8" showPort={false}>
                <h3 className="font-display font-semibold text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </ModuleCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-charcoal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label mb-4 block">{dict['why.label']}</span>
            <h2 className="font-display font-bold text-display-2 mb-4">{dict['about.differentiators.title']}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <ModuleCard key={index} className="p-6" showPort={false}>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </ModuleCard>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label mb-4 block">{dict['about.security.title']}</span>
            <h2 className="font-display font-bold text-display-2 mb-4">{dict['about.security.title']}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{dict['about.security.subtitle']}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {securityFeatures.map((feature, index) => (
              <ModuleCard key={index} className="p-6" showPort={false}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {index === 0 && <Shield className="w-5 h-5 text-primary" />}
                    {index === 1 && <Lock className="w-5 h-5 text-primary" />}
                    {index === 2 && <Eye className="w-5 h-5 text-primary" />}
                    {index === 3 && <FileText className="w-5 h-5 text-primary" />}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              </ModuleCard>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap justify-center gap-3">
              {['SOC 2', 'ISO 27001', 'GDPR', 'HIPAA', 'PCI DSS'].map((cert) => (
                <span key={cert} className="px-4 py-2 rounded-full bg-card border border-border/30 text-sm font-medium">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Managing Director Section */}
      <section className="py-20 lg:py-32 bg-charcoal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label mb-4 block">{dict['about.leadership.label']}</span>
            <h2 className="font-display font-bold text-display-2 mb-4">{dict['about.leadership.title']}</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <ModuleCard className="p-8 lg:p-12" showPort={false}>
              <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
                <div className="mx-auto md:mx-0">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="font-display font-bold text-5xl md:text-6xl text-primary">AR</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-2xl lg:text-3xl mb-1">
                    {dict['about.leadership.name']}
                  </h3>
                  <p className="text-primary font-medium mb-6">{dict['about.leadership.role']}</p>
                  <div className="space-y-4 text-muted-foreground">
                    <p>{dict['about.leadership.p1']}</p>
                    <p>{dict['about.leadership.p2']}</p>
                    <p>{dict['about.leadership.p3']}</p>
                  </div>
                  <div className="mt-8">
                    <a
                      href="https://www.linkedin.com/in/abdul-rahman-3a2a9b1b2/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 btn-secondary"
                    >
                      <Linkedin className="w-5 h-5" />
                      {dict['about.leadership.linkedin']}
                    </a>
                  </div>
                </div>
              </div>
            </ModuleCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ModuleCard className="inline-block p-12 max-w-2xl" showPort={false}>
            <h2 className="font-display font-bold text-display-3 mb-4">{dict['about.cta.title']}</h2>
            <p className="text-muted-foreground mb-8">{dict['about.cta.subtitle']}</p>
            <Link href={`/${lang}/contact`} className="btn-primary inline-flex">
              {dict['about.cta.button']}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </ModuleCard>
        </div>
      </section>
    </>
  );
}
