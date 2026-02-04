import { Link } from 'react-router-dom';
import { ArrowRight, Check, Clock, Users, Building2 } from 'lucide-react';
import SEO, { faqSchema } from '@/components/SEO';
import { ModuleCard, ServiceCard } from '@/components/ModuleCard';
import { services, faqs } from '@/data/content';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Services() {
  return (
    <>
      <SEO
        title="DevOps Services"
        description="Explore our comprehensive DevOps services: Cloud DevOps, On-Prem DevOps, CI/CD Automation, and Observability & SRE."
        canonical="/services"
        schema={faqSchema(faqs.slice(0, 4))}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-label mb-4 block">Services</span>
            <h1 className="font-display font-bold text-display-1 mb-6">
              DevOps Services That Deliver
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground">
              From cloud migration to CI/CD automation, we provide end-to-end DevOps services 
              designed to accelerate delivery, improve reliability, and reduce costs.
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
                href={`/services/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How We Engage */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">Engagement</span>
            <h2 className="font-display font-bold text-display-2 mb-4">
              How We Work With You
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Flexible engagement models that adapt to your needs and scale with your growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ModuleCard className="p-8" showPort={false}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3">Project-Based</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Fixed-scope engagements for specific outcomes like migrations, pipeline setups, or infrastructure overhauls.
              </p>
              <ul className="space-y-2">
                {['Clear deliverables', 'Fixed timeline', 'Defined budget'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ModuleCard>

            <ModuleCard className="p-8" showPort={false}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3">Retainer</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Ongoing support with dedicated hours each month for continuous improvement and maintenance.
              </p>
              <ul className="space-y-2">
                {['Predictable costs', 'Priority support', 'Regular reviews'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ModuleCard>

            <ModuleCard className="p-8" showPort={false}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3">Embedded</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Dedicated team members working as part of your organization with full integration.
              </p>
              <ul className="space-y-2">
                {['Full integration', 'SLA guarantees', 'Knowledge transfer'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ModuleCard>
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="py-20 lg:py-32 bg-charcoal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">Comparison</span>
            <h2 className="font-display font-bold text-display-2 mb-4">
              Find the Right Service
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-display font-semibold">Service</th>
                  <th className="text-left py-4 px-4 font-display font-semibold">Best For</th>
                  <th className="text-left py-4 px-4 font-display font-semibold">Timeline</th>
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
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
                      >
                        Details
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
            <span className="section-label mb-4 block">FAQ</span>
            <h2 className="font-display font-bold text-display-2 mb-4">
              Service Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.slice(0, 4).map((faq, index) => (
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
              Not Sure What You Need?
            </h2>
            <p className="text-muted-foreground mb-8">
              Book a free consultation. We will help you identify the right approach for your specific challenges.
            </p>
            <Link to="/contact" className="btn-primary inline-flex">
              Book a Free Call
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </ModuleCard>
        </div>
      </section>
    </>
  );
}
