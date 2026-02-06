import { Link } from 'react-router-dom';
import { ArrowRight, Check, Clock, Users, Building2 } from 'lucide-react';
import SEO from '@/components/SEO';
import { ModuleCard, ServiceCard } from '@/components/ModuleCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { services } from '@/data/content';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Services() {
  const { language, t } = useLanguage();

  // Translated FAQs
  const translatedFaqs = [
    { question: t('faq.q1') as string, answer: t('faq.a1') as string },
    { question: t('faq.q2') as string, answer: t('faq.a2') as string },
    { question: t('faq.q3') as string, answer: t('faq.a3') as string },
    { question: t('faq.q4') as string, answer: t('faq.a4') as string },
  ];

  const engagementModels = [
    {
      icon: Clock,
      title: t('services.engagement.project.title') as string,
      description: t('services.engagement.project.desc') as string,
      features: t('services.engagement.project.features') as string[],
    },
    {
      icon: Users,
      title: t('services.engagement.retainer.title') as string,
      description: t('services.engagement.retainer.desc') as string,
      features: t('services.engagement.retainer.features') as string[],
    },
    {
      icon: Building2,
      title: t('services.engagement.embedded.title') as string,
      description: t('services.engagement.embedded.desc') as string,
      features: t('services.engagement.embedded.features') as string[],
    },
  ];

  return (
    <>
      <SEO
        titleKey="seo.services.title"
        descKey="seo.services.desc"
        canonicalPath="/services"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-label mb-4 block">{t('services.label')}</span>
            <h1 className="font-display font-bold text-display-1 mb-6">
              {t('services.hero.title')}
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground">
              {t('services.hero.subtitle')}
            </p>
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
                href={`/${language}/services/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How We Engage */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">{t('services.engagement.title')}</span>
            <h2 className="font-display font-bold text-display-2 mb-4">
              {t('services.engagement.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('services.engagement.subtitle')}
            </p>
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
            <span className="section-label mb-4 block">{t('services.comparison.title')}</span>
            <h2 className="font-display font-bold text-display-2 mb-4">
              {t('services.comparison.title')}
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-display font-semibold">{t('services.label')}</th>
                  <th className="text-left py-4 px-4 font-display font-semibold">{language === 'de' ? 'Beste Für' : 'Best For'}</th>
                  <th className="text-left py-4 px-4 font-display font-semibold">{language === 'de' ? 'Zeitrahmen' : 'Timeline'}</th>
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
                        to={`/${language}/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
                      >
                        {language === 'de' ? 'Details' : 'Details'}
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
            <span className="section-label mb-4 block">{t('faq.label')}</span>
            <h2 className="font-display font-bold text-display-2 mb-4">
              {t('services.faq.title')}
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {translatedFaqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/30 rounded-2xl px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-charcoal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ModuleCard className="inline-block p-12 max-w-2xl" showPort={false}>
            <h2 className="font-display font-bold text-display-3 mb-4">
              {t('services.cta.title')}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t('services.cta.subtitle')}
            </p>
            <Link to={`/${language}/contact`} className="btn-primary inline-flex">
              {t('services.cta.button')}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </ModuleCard>
        </div>
      </section>
    </>
  );
}
