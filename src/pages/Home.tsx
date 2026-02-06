import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Cloud, Server, GitBranch, Activity, Users, Wrench, HeadphonesIcon, Building2, Code, Shield, Eye, FileCode } from 'lucide-react';
import SEO, { organizationSchema, faqSchema } from '@/components/SEO';
import { ModuleCard, ServiceCard, ProcessCard } from '@/components/ModuleCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { services, whyChooseUs } from '@/data/content';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { language, t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (heroRef.current) {
        heroRef.current.classList.add('opacity-100');
        heroRef.current.classList.remove('opacity-0');
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Process steps with translations
  const processSteps = [
    { number: '01', title: t('process.step1.title') as string, description: t('process.step1.desc') as string },
    { number: '02', title: t('process.step2.title') as string, description: t('process.step2.desc') as string },
    { number: '03', title: t('process.step3.title') as string, description: t('process.step3.desc') as string },
    { number: '04', title: t('process.step4.title') as string, description: t('process.step4.desc') as string },
  ];

  // Engagement models with translations
  const engagementModels = [
    {
      icon: Users,
      title: t('engagement.model1.title') as string,
      whoFor: t('engagement.model1.for') as string,
      problems: t('engagement.model1.problems') as string[],
      outcomes: t('engagement.model1.outcomes') as string[],
    },
    {
      icon: Wrench,
      title: t('engagement.model2.title') as string,
      whoFor: t('engagement.model2.for') as string,
      problems: t('engagement.model2.problems') as string[],
      outcomes: t('engagement.model2.outcomes') as string[],
    },
    {
      icon: HeadphonesIcon,
      title: t('engagement.model3.title') as string,
      whoFor: t('engagement.model3.for') as string,
      problems: t('engagement.model3.problems') as string[],
      outcomes: t('engagement.model3.outcomes') as string[],
    },
    {
      icon: Building2,
      title: t('engagement.model4.title') as string,
      whoFor: t('engagement.model4.for') as string,
      problems: t('engagement.model4.problems') as string[],
      outcomes: t('engagement.model4.outcomes') as string[],
    },
  ];

  // Engineering approach items
  const engineeringApproach = [
    {
      icon: Code,
      title: language === 'de' ? 'Infrastructure as Code' : 'Infrastructure as Code',
      description: language === 'de' 
        ? 'Wiederholbare, versionierte Infrastrukturdefinition mit Terraform und Pulumi. Jede Änderung wird getestet und dokumentiert.'
        : 'Repeatable, versioned infrastructure definition with Terraform and Pulumi. Every change is tested and documented.',
    },
    {
      icon: GitBranch,
      title: language === 'de' ? 'CI/CD-Automatisierung' : 'CI/CD Automation',
      description: language === 'de'
        ? 'Kontinuierliche Integration und Bereitstellung mit automatisierten Tests, Code-Reviews und Deployment-Pipelines.'
        : 'Continuous integration and delivery with automated testing, code reviews, and deployment pipelines.',
    },
    {
      icon: Cloud,
      title: language === 'de' ? 'Kubernetes & Plattform-Engineering' : 'Kubernetes & Platform Engineering',
      description: language === 'de'
        ? 'Container-Orchestrierung, Service-Mesh, und interne Entwicklerplattformen für skalierbare Systeme.'
        : 'Container orchestration, service mesh, and internal developer platforms for scalable systems.',
    },
    {
      icon: Shield,
      title: language === 'de' ? 'Sicherheit & Least Privilege' : 'Security & Least Privilege',
      description: language === 'de'
        ? 'Rolle-basierte Zugriffskontrolle, Audit-Logging, und Verschlüsselung als Standard in jeder Umgebung.'
        : 'Role-based access control, audit logging, and encryption as standard in every environment.',
    },
    {
      icon: Eye,
      title: language === 'de' ? 'Observability & Monitoring' : 'Observability & Monitoring',
      description: language === 'de'
        ? 'Zentralisierte Logs, Metriken und Tracing für vollständige Systemübersicht und schnelle Fehleranalyse.'
        : 'Centralized logs, metrics, and tracing for complete system visibility and rapid issue analysis.',
    },
    {
      icon: FileCode,
      title: language === 'de' ? 'Dokumentation & Runbooks' : 'Documentation & Runbooks',
      description: language === 'de'
        ? 'Jede Architekturentscheidung und jeder Prozess wird dokumentiert. Wissenstransfer ist integraler Bestandteil.'
        : 'Every architectural decision and process is documented. Knowledge transfer is an integral part.',
    },
  ];

  // FAQs with translations
  const faqs = [
    { question: t('faq.q1') as string, answer: t('faq.a1') as string },
    { question: t('faq.q2') as string, answer: t('faq.a2') as string },
    { question: t('faq.q3') as string, answer: t('faq.a3') as string },
    { question: t('faq.q4') as string, answer: t('faq.a4') as string },
    { question: t('faq.q5') as string, answer: t('faq.a5') as string },
    { question: t('faq.q6') as string, answer: t('faq.a6') as string },
  ];

  return (
    <>
      <SEO
        titleKey="seo.home.title"
        descKey="seo.home.desc"
        canonicalPath="/"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            organizationSchema(language),
            faqSchema(faqs),
          ],
        }}
      />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="min-h-screen pt-20 lg:pt-24 pb-16 relative opacity-0 transition-opacity duration-700"
      >
        <div className="absolute inset-0 dot-grid opacity-25" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
            {/* Left column - Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {t('hero.badge')}
              </div>
              
              <h1 className="font-display font-bold text-display-1 mb-6">
                <span className="block">{t('hero.title1')}</span>
                <span className="block">{t('hero.title2')}</span>
                <span className="block text-gradient">{t('hero.title3')}</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-lg">
                {t('hero.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link to={`/${language}/contact`} className="btn-primary">
                  {t('hero.cta.primary')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link to={`/${language}/services`} className="btn-secondary">
                  {t('hero.cta.secondary')}
                </Link>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>{t('hero.trust.uptime')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>{t('hero.trust.security')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>{t('hero.trust.automation')}</span>
                </div>
              </div>
            </div>
            
            {/* Right column - Visual */}
            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4">
                <ModuleCard className="aspect-square flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                  <Cloud className="w-16 h-16 text-primary/60" />
                </ModuleCard>
                <ModuleCard className="aspect-square flex items-center justify-center bg-gradient-to-br from-secondary to-secondary/50">
                  <Server className="w-16 h-16 text-muted-foreground/60" />
                </ModuleCard>
                <ModuleCard className="aspect-square flex items-center justify-center bg-gradient-to-br from-secondary to-secondary/50">
                  <GitBranch className="w-16 h-16 text-muted-foreground/60" />
                </ModuleCard>
                <ModuleCard className="aspect-square flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                  <Activity className="w-16 h-16 text-primary/60" />
                </ModuleCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">{t('services.label')}</span>
            <h2 className="font-display font-bold text-display-2 mb-4">
              {t('services.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
          
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

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-charcoal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <span className="section-label mb-4 block">{t('why.label')}</span>
              <h2 className="font-display font-bold text-display-2 mb-6">
                {t('why.title')}
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                {t('why.subtitle')}
              </p>
              <Link to={`/${language}/about`} className="btn-secondary inline-flex">
                {t('why.cta')}
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
            <span className="section-label mb-4 block">{t('process.label')}</span>
            <h2 className="font-display font-bold text-display-2 mb-4">
              {t('process.title')}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t('process.subtitle')}
            </p>
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

      {/* Experience & Engineering Approach Section */}
      <section className="py-20 lg:py-32 bg-charcoal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="section-label mb-4 block">
              {language === 'de' ? 'Erfahrung' : 'Experience'}
            </span>
            <h2 className="font-display font-bold text-display-2 mb-4">
              {language === 'de' ? 'Erfahrung & Engineering-Ansatz' : 'Experience & Engineering Approach'}
            </h2>
            <p className="text-muted-foreground text-lg">
              {language === 'de' 
                ? 'Unser Ansatz basiert auf bewährten Engineering-Prinzipien und modernen DevOps-Praktiken.'
                : 'Our approach is based on proven engineering principles and modern DevOps practices.'}
            </p>
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
            <span className="section-label mb-4 block">{t('engagement.label')}</span>
            <h2 className="font-display font-bold text-display-2 mb-4">
              {t('engagement.title')}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t('engagement.subtitle')}
            </p>
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
                        {language === 'de' ? 'Für Wen' : "Who It's For"}
                      </h4>
                      <p className="text-sm text-foreground">{model.whoFor}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                        {language === 'de' ? 'Gelöste Probleme' : 'Problems We Solve'}
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
                        {language === 'de' ? 'Erwartete Ergebnisse' : 'Expected Outcomes'}
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
                    <Link to={`/${language}/contact`} className="btn-primary w-full inline-flex justify-center">
                      {t('engagement.cta')}
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
            <span className="section-label mb-4 block">{t('faq.label')}</span>
            <h2 className="font-display font-bold text-display-2 mb-4">
              {t('faq.title')}
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
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

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="section-label mb-4 block">{t('contact.label')}</span>
              <h2 className="font-display font-bold text-display-2 mb-4">
                {t('contact.title')}
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                {t('contact.subtitle')}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{t('contact.benefit1.title')}</h3>
                    <p className="text-sm text-muted-foreground">{t('contact.benefit1.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{t('contact.benefit2.title')}</h3>
                    <p className="text-sm text-muted-foreground">{t('contact.benefit2.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{t('contact.benefit3.title')}</h3>
                    <p className="text-sm text-muted-foreground">{t('contact.benefit3.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <ModuleCard className="p-8" showPort={false}>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contact.form.name')}</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      placeholder={language === 'de' ? 'Ihr Name' : 'Your name'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contact.form.email')}</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t('contact.form.company')}</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder={language === 'de' ? 'Ihr Unternehmen' : 'Your company'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t('contact.form.message')}</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                    placeholder={language === 'de' ? 'Erzählen Sie uns von Ihrem Projekt...' : 'Tell us about your project...'}
                  />
                </div>
                <button type="submit" className="w-full btn-primary">
                  {t('contact.form.submit')}
                </button>
                <p className="text-center text-sm text-muted-foreground">
                  {t('contact.form.schedule')}{' '}
                  <button 
                    type="button"
                    className="text-primary hover:underline"
                    onClick={() => alert('Calendly integration placeholder')}
                  >
                    {t('contact.form.scheduleLink')}
                  </button>
                </p>
              </form>
            </ModuleCard>
          </div>
        </div>
      </section>
    </>
  );
}
