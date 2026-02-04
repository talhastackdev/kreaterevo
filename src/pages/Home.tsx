import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Cloud, Server, GitBranch, Activity } from 'lucide-react';
import SEO, { organizationSchema, faqSchema } from '@/components/SEO';
import { ModuleCard, ServiceCard, StatCard, TestimonialCard, ProcessCard, PricingCard } from '@/components/ModuleCard';
import { services, caseStudies, testimonials, faqs, processSteps, pricingPlans, whyChooseUs } from '@/data/content';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple entrance animation
    const timer = setTimeout(() => {
      if (heroRef.current) {
        heroRef.current.classList.add('opacity-100');
        heroRef.current.classList.remove('opacity-0');
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEO
        title="DevOps & Cloud Infrastructure Services"
        description="KreateRevo provides enterprise DevOps services for Cloud and On-Prem environments. Build, automate, and scale your infrastructure with confidence."
        canonical="/"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            organizationSchema,
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
                Based in Germany • Serving EU Clients
              </div>
              
              <h1 className="font-display font-bold text-display-1 mb-6">
                <span className="block">Build.</span>
                <span className="block">Automate.</span>
                <span className="block text-gradient">Scale.</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-lg">
                DevOps and cloud infrastructure for teams that ship fast without breaking things.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link to="/contact" className="btn-primary">
                  Book a Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link to="/services" className="btn-secondary">
                  View Services
                </Link>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>99.99% Uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Full Automation</span>
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

      {/* Trust Strip */}
      <section className="py-12 border-y border-border/50 bg-charcoal-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground mb-6 uppercase tracking-wider">
            Trusted by teams across industries
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-50">
            {['Fintech', 'E-commerce', 'SaaS', 'Healthcare', 'Manufacturing'].map((industry) => (
              <span key={industry} className="font-display font-semibold text-lg text-muted-foreground">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">Services</span>
            <h2 className="font-display font-bold text-display-2 mb-4">
              What We Do
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              End-to-end DevOps services designed to accelerate your delivery and improve reliability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.shortDescription}
                href={`/services/${service.slug}`}
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
              <span className="section-label mb-4 block">Why KreateRevo</span>
              <h2 className="font-display font-bold text-display-2 mb-6">
                Built Different.<br />Built Better.
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We do not just implement tools—we transform how your team delivers software. Our approach combines technical excellence with operational discipline.
              </p>
              <Link to="/about" className="btn-secondary inline-flex">
                Learn About Us
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
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">Our Process</span>
            <h2 className="font-display font-bold text-display-2 mb-4">
              How We Work
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A clear plan, built around your risks and priorities. From discovery to operation, we ensure smooth delivery.
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

      {/* Stats Section */}
      <section className="py-20 lg:py-32 bg-charcoal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <StatCard value="99.99%" label="Uptime delivered across production environments" />
            <StatCard value="10x" label="Faster deployments after pipeline modernization" />
            <StatCard value="40%" label="Average cost reduction through optimization" />
          </div>
          
          <div className="mt-12 text-center">
            <ModuleCard className="inline-block p-8 max-w-3xl" showPort={false}>
              <p className="font-display font-semibold text-xl lg:text-2xl mb-4">
                We turn complex infrastructure into a competitive advantage.
              </p>
              <Link to="/case-studies" className="btn-secondary inline-flex">
                See How We Work
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </ModuleCard>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="section-label mb-4 block">Selected Work</span>
              <h2 className="font-display font-bold text-display-2">
                Case Studies
              </h2>
            </div>
            <Link to="/case-studies" className="btn-secondary inline-flex self-start">
              View All Cases
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.slice(0, 3).map((study) => (
              <Link key={study.id} to="/case-studies" className="group">
                <ModuleCard className="h-full p-6 hover:-translate-y-1 hover:shadow-card transition-all duration-300">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">
                      {study.challenge.slice(0, 120)}...
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {study.results.slice(0, 2).map((result, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded"
                        >
                          {result.value} {result.metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </ModuleCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-charcoal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">Testimonials</span>
            <h2 className="font-display font-bold text-display-2 mb-4">
              What Clients Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">Pricing</span>
            <h2 className="font-display font-bold text-display-2 mb-4">
              Flexible Engagement
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the engagement model that fits your needs. All plans include documentation and knowledge transfer.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.name}
                {...plan}
                onCtaClick={scrollToContact}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-charcoal-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label mb-4 block">FAQ</span>
            <h2 className="font-display font-bold text-display-2 mb-4">
              Common Questions
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
              <span className="section-label mb-4 block">Get in Touch</span>
              <h2 className="font-display font-bold text-display-2 mb-4">
                Let's Build Something Reliable
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Tell us what you are shipping. We will reply within one business day.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Free Initial Consultation</h3>
                    <p className="text-sm text-muted-foreground">30-minute call to discuss your challenges and goals.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Detailed Proposal</h3>
                    <p className="text-sm text-muted-foreground">Clear scope, timeline, and pricing within one week.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">No Long-term Contracts</h3>
                    <p className="text-sm text-muted-foreground">Flexible engagement with monthly reviews.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <ModuleCard className="p-8" showPort={false}>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button type="submit" className="w-full btn-primary">
                  Send Message
                </button>
                <p className="text-center text-sm text-muted-foreground">
                  Prefer to book directly?{' '}
                  <button 
                    type="button"
                    className="text-primary hover:underline"
                    onClick={() => alert('Calendly integration placeholder')}
                  >
                    Schedule a call
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
