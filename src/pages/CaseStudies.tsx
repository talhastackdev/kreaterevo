import { Link } from 'react-router-dom';
import { TrendingUp, Clock, DollarSign, Shield } from 'lucide-react';
import SEO from '@/components/SEO';
import { ModuleCard } from '@/components/ModuleCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { caseStudies } from '@/data/content';

const iconMap: Record<string, React.ElementType> = {
  'Cost Reduction': DollarSign,
  'Uptime': Shield,
  'Deployment Time': Clock,
  'MTTR': Clock,
  'Alert Noise': Shield,
  'Incident Detection': Clock,
  'Deployment Frequency': TrendingUp,
  'Lead Time': Clock,
  'Change Failure Rate': Shield,
};

export default function CaseStudies() {
  const { language, t } = useLanguage();

  const metrics = [
    { value: '40%', label: t('cases.metrics.cost') as string, description: t('cases.metrics.costDesc') as string },
    { value: '10x', label: t('cases.metrics.deploy') as string, description: t('cases.metrics.deployDesc') as string },
    { value: '70%', label: t('cases.metrics.downtime') as string, description: t('cases.metrics.downtimeDesc') as string },
    { value: '99.99%', label: t('cases.metrics.uptime') as string, description: t('cases.metrics.uptimeDesc') as string },
  ];

  return (
    <>
      <SEO
        titleKey="seo.cases.title"
        descKey="seo.cases.desc"
        canonicalPath="/case-studies"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-label mb-4 block">{t('nav.caseStudies')}</span>
            <h1 className="font-display font-bold text-display-1 mb-6">
              {t('cases.hero.title')}
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground">
              {t('cases.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 lg:py-32 bg-charcoal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study) => (
              <article key={study.id}>
                <ModuleCard className="overflow-hidden" showPort={false}>
                  <div className="grid lg:grid-cols-2">
                    {/* Content */}
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider">
                          {study.industry}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {study.clientType}
                        </span>
                      </div>

                      <h2 className="font-display font-bold text-2xl lg:text-3xl mb-4">
                        {study.title}
                      </h2>

                      <div className="mb-8">
                        <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-2">
                          {language === 'de' ? 'Herausforderung' : 'Challenge'}
                        </h3>
                        <p className="text-muted-foreground">
                          {study.challenge}
                        </p>
                      </div>

                      <div className="mb-8">
                        <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-2">
                          {language === 'de' ? 'Ansatz' : 'Approach'}
                        </h3>
                        <ul className="space-y-2">
                          {study.approach.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-primary mt-1">•</span>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {study.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 rounded-full bg-secondary text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div className="p-8 lg:p-12 bg-charcoal-50/50 border-t lg:border-t-0 lg:border-l border-border">
                      <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-6">
                        {language === 'de' ? 'Ergebnisse' : 'Results'}
                      </h3>

                      <div className="space-y-6">
                        {study.results.map((result, idx) => {
                          const Icon = iconMap[result.metric] || TrendingUp;
                          return (
                            <div key={idx} className="flex items-start gap-4">
                              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <Icon className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                <div className="font-display font-bold text-2xl text-primary">
                                  {result.value}
                                </div>
                                <div className="font-medium text-sm">{result.metric}</div>
                                <div className="text-sm text-muted-foreground">
                                  {result.description}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </ModuleCard>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Summary */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-display-2 mb-4">
              {t('cases.metrics.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {metrics.map((stat) => (
              <ModuleCard key={stat.label} className="p-6 text-center" showPort={false}>
                <div className="font-display font-bold text-3xl text-primary mb-2">
                  {stat.value}
                </div>
                <div className="font-medium text-sm mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </ModuleCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-charcoal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ModuleCard className="inline-block p-12 max-w-2xl" showPort={false}>
            <h2 className="font-display font-bold text-display-3 mb-4">
              {language === 'de' ? 'Ähnliche Ergebnisse Erzielen?' : 'Want Similar Results?'}
            </h2>
            <p className="text-muted-foreground mb-8">
              {language === 'de' 
                ? 'Lassen Sie uns besprechen, wie wir Ihrem Team helfen können, ähnliche Ergebnisse zu erzielen.'
                : 'Let\'s discuss how we can help your team achieve similar outcomes.'
              }
            </p>
            <Link to={`/${language}/contact`} className="btn-primary inline-flex">
              {t('cases.cta.button')}
            </Link>
          </ModuleCard>
        </div>
      </section>
    </>
  );
}
