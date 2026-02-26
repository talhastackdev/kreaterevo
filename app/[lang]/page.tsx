import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, Code, GitBranch, Cloud, Shield, Eye, FileCode, Users, Wrench, HeadphonesIcon, Building2 } from 'lucide-react';
import { getDictionary, SUPPORTED_LANGUAGES, type Language } from '@/lib/dictionaries';
import { ModuleCard, ProcessCard, ServiceCard } from '@/components/ModuleCard';
import HeroSection from '@/components/sections/HeroSection';
import FAQAccordion from '@/components/sections/FAQAccordion';
import ContactForm from '@/components/sections/ContactForm';
import { organizationSchema, faqSchema } from '@/lib/metadata';
import { services, whyChooseUs } from '@/data/content';

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
    title: dict['seo.home.title'],
    description: dict['seo.home.desc'],
    alternates: {
      canonical: `${siteUrl}/${lang}`,
      languages: {
        en: `${siteUrl}/en`,
        de: `${siteUrl}/de`,
        'x-default': `${siteUrl}/en`,
      },
    },
    openGraph: {
      type: 'website',
      locale: lang === 'de' ? 'de_DE' : 'en_US',
      url: `${siteUrl}/${lang}`,
      siteName: 'KreateRevo',
      title: `${dict['seo.home.title']} | KreateRevo`,
      description: dict['seo.home.desc'],
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang as Language);

  const processSteps = [
    { number: '01', title: dict['process.step1.title'], description: dict['process.step1.desc'] },
    { number: '02', title: dict['process.step2.title'], description: dict['process.step2.desc'] },
    { number: '03', title: dict['process.step3.title'], description: dict['process.step3.desc'] },
    { number: '04', title: dict['process.step4.title'], description: dict['process.step4.desc'] },
  ];

  const engagementModels = [
    {
      icon: Users,
      title: dict['engagement.model1.title'],
      whoFor: dict['engagement.model1.for'],
      problems: dict['engagement.model1.problems'] as unknown as string[],
      outcomes: dict['engagement.model1.outcomes'] as unknown as string[],
    },
    {
      icon: Wrench,
      title: dict['engagement.model2.title'],
      whoFor: dict['engagement.model2.for'],
      problems: dict['engagement.model2.problems'] as unknown as string[],
      outcomes: dict['engagement.model2.outcomes'] as unknown as string[],
    },
    {
      icon: HeadphonesIcon,
      title: dict['engagement.model3.title'],
      whoFor: dict['engagement.model3.for'],
      problems: dict['engagement.model3.problems'] as unknown as string[],
      outcomes: dict['engagement.model3.outcomes'] as unknown as string[],
    },
    {
      icon: Building2,
      title: dict['engagement.model4.title'],
      whoFor: dict['engagement.model4.for'],
      problems: dict['engagement.model4.problems'] as unknown as string[],
      outcomes: dict['engagement.model4.outcomes'] as unknown as string[],
    },
  ];

  const engineeringApproach = [
    { icon: Code, title: dict['experience.iac.title'], description: dict['experience.iac.desc'] },
    { icon: GitBranch, title: dict['experience.cicd.title'], description: dict['experience.cicd.desc'] },
    { icon: Cloud, title: dict['experience.k8s.title'], description: dict['experience.k8s.desc'] },
    { icon: Shield, title: dict['experience.security.title'], description: dict['experience.security.desc'] },
    { icon: Eye, title: dict['experience.observability.title'], description: dict['experience.observability.desc'] },
    { icon: FileCode, title: dict['experience.docs.title'], description: dict['experience.docs.desc'] },
  ];

  const faqs = [
    { question: dict['faq.q1'], answer: dict['faq.a1'] },
    { question: dict['faq.q2'], answer: dict['faq.a2'] },
    { question: dict['faq.q3'], answer: dict['faq.a3'] },
    { question: dict['faq.q4'], answer: dict['faq.a4'] },
    { question: dict['faq.q5'], answer: dict['faq.a5'] },
    { question: dict['faq.q6'], answer: dict['faq.a6'] },
  ];

  const orgSchema = organizationSchema(lang as Language);
  const faqSchemaData = faqSchema(faqs);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': [orgSchema, faqSchemaData] }),
        }}
      />

      {/* Hero Section (client — animation) */}
      <HeroSection lang={lang as Language} dict={dict} />

      {/* Services Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">{dict['services.label']}</span>
            <h2 className="font-display font-bold text-display-2 mb-4">{dict['services.title']}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{dict['services.subtitle']}</p>
          </div>
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

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-charcoal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <span className="section-label mb-4 block">{dict['why.label']}</span>
              <h2 className="font-display font-bold text-display-2 mb-6">{dict['why.title']}</h2>
              <p className="text-muted-foreground text-lg mb-8">{dict['why.subtitle']}</p>
              <Link href={`/${lang}/about`} className="btn-secondary inline-flex">
                {dict['why.cta']}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="space-y-6">
              {whyChooseUs.map((item, index) => (
                <ModuleCard key={index} className="p-6" showPort={false}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
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
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="section-label mb-4 block">{dict['process.label']}</span>
            <h2 className="font-display font-bold text-display-2 mb-4">{dict['process.title']}</h2>
            <p className="text-muted-foreground text-lg">{dict['process.subtitle']}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <ProcessCard
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Engineering Approach */}
      <section className="py-20 lg:py-32 bg-charcoal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="section-label mb-4 block">{dict['experience.label']}</span>
            <h2 className="font-display font-bold text-display-2 mb-4">{dict['experience.title']}</h2>
            <p className="text-muted-foreground text-lg">{dict['experience.subtitle']}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineeringApproach.map((item, index) => (
              <ModuleCard key={index} className="p-6" showPort={false}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </ModuleCard>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="section-label mb-4 block">{dict['engagement.label']}</span>
            <h2 className="font-display font-bold text-display-2 mb-4">{dict['engagement.title']}</h2>
            <p className="text-muted-foreground text-lg">{dict['engagement.subtitle']}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {engagementModels.map((model, index) => (
              <ModuleCard key={index} className="p-8 h-full" showPort={false}>
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <model.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-xl">{model.title}</h3>
                  </div>
                  <div className="space-y-4 flex-grow">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                        {lang === 'de' ? 'Für Wen' : "Who It's For"}
                      </h4>
                      <p className="text-sm text-foreground">{model.whoFor}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                        {lang === 'de' ? 'Gelöste Probleme' : 'Problems We Solve'}
                      </h4>
                      <ul className="space-y-1">
                        {model.problems.map((problem, idx) => (
                          <li key={idx} className="text-sm text-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            {problem}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                        {lang === 'de' ? 'Erwartete Ergebnisse' : 'Expected Outcomes'}
                      </h4>
                      <ul className="space-y-1">
                        {model.outcomes.map((outcome, idx) => (
                          <li key={idx} className="text-sm text-foreground flex items-start gap-2">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-border/30">
                    <Link href={`/${lang}/contact`} className="btn-primary w-full inline-flex justify-center">
                      {dict['engagement.cta']}
                    </Link>
                  </div>
                </div>
              </ModuleCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-charcoal-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label mb-4 block">{dict['faq.label']}</span>
            <h2 className="font-display font-bold text-display-2 mb-4">{dict['faq.title']}</h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="section-label mb-4 block">{dict['contact.label']}</span>
              <h2 className="font-display font-bold text-display-2 mb-4">{dict['contact.title']}</h2>
              <p className="text-muted-foreground text-lg mb-8">{dict['contact.subtitle']}</p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{dict['contact.benefit1.title']}</h3>
                    <p className="text-sm text-muted-foreground">{dict['contact.benefit1.desc']}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{dict['contact.benefit2.title']}</h3>
                    <p className="text-sm text-muted-foreground">{dict['contact.benefit2.desc']}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{dict['contact.benefit3.title']}</h3>
                    <p className="text-sm text-muted-foreground">{dict['contact.benefit3.desc']}</p>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm
              lang={lang as Language}
              labels={{
                name: dict['contact.form.name'],
                email: dict['contact.form.email'],
                company: dict['contact.form.company'],
                message: dict['contact.form.message'],
                submit: dict['contact.form.submit'],
                schedule: dict['contact.form.schedule'],
                scheduleLink: dict['contact.form.scheduleLink'],
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
