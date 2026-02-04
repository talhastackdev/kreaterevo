import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Wrench, Clock, AlertCircle } from 'lucide-react';
import SEO, { serviceSchema } from '@/components/SEO';
import { ModuleCard } from '@/components/ModuleCard';
import { services } from '@/data/content';

interface ServiceDetailProps {
  service?: string;
}

export default function ServiceDetail({ service: propService }: ServiceDetailProps) {
  const { service: paramService } = useParams();
  const serviceId = propService || paramService;
  
  const serviceData = services.find(s => s.id === serviceId || s.slug === serviceId);
  
  if (!serviceData) {
    return <Navigate to="/services" replace />;
  }

  const serviceSlugMap: Record<string, string> = {
    'cloud': 'cloud-devops',
    'onprem': 'on-prem-devops',
    'cicd': 'ci-cd-automation',
    'observability': 'observability-sre'
  };

  return (
    <>
      <SEO
        title={serviceData.title}
        description={serviceData.fullDescription}
        canonical={`/services/${serviceSlugMap[serviceData.id] || serviceData.slug}`}
        schema={serviceSchema({
          title: serviceData.title,
          description: serviceData.fullDescription,
          provider: 'KreateRevo'
        })}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          
          <div className="max-w-3xl">
            <span className="section-label mb-4 block">Service</span>
            <h1 className="font-display font-bold text-display-1 mb-6">
              {serviceData.title}
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground">
              {serviceData.fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 lg:py-32 bg-charcoal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-display font-semibold text-2xl">Who It's For</h2>
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
                <h2 className="font-display font-semibold text-2xl">Problems We Solve</h2>
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
              <span className="section-label">Deliverables</span>
            </div>
            <h2 className="font-display font-bold text-display-2">
              What You Get
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
            <h2 className="font-display font-bold text-display-3 mb-4">
              Technologies We Use
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are tool-agnostic and select the best technologies for your specific needs. No vendor lock-in.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {serviceData.tooling.map((tool) => (
              <span 
                key={tool}
                className="px-4 py-2 rounded-full bg-card border border-border/30 text-sm font-medium"
              >
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
              <span className="section-label">Timeline</span>
            </div>
            <h2 className="font-display font-bold text-display-2">
              Engagement Options
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ModuleCard className="p-8" showPort={false}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-mono font-bold text-primary">S</span>
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">Starter</h3>
                <p className="text-3xl font-display font-bold text-primary mb-2">
                  {serviceData.timeline.starter}
                </p>
                <p className="text-sm text-muted-foreground">
                  Focused assessment and quick wins
                </p>
              </div>
            </ModuleCard>

            <ModuleCard className="p-8 border-primary/50" showPort={false}>
              <div className="text-center">
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-1 text-xs font-medium uppercase tracking-wider rounded-t-2xl">
                  Most Popular
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 mt-4">
                  <span className="font-mono font-bold text-primary">G</span>
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">Growth</h3>
                <p className="text-3xl font-display font-bold text-primary mb-2">
                  {serviceData.timeline.growth}
                </p>
                <p className="text-sm text-muted-foreground">
                  Comprehensive implementation
                </p>
              </div>
            </ModuleCard>

            <ModuleCard className="p-8" showPort={false}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-mono font-bold text-primary">E</span>
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">Enterprise</h3>
                <p className="text-3xl font-display font-bold text-primary mb-2">
                  {serviceData.timeline.enterprise}
                </p>
                <p className="text-sm text-muted-foreground">
                  Full-scale transformation
                </p>
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
              <h2 className="font-display font-bold text-display-3 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground mb-8">
                Book a free consultation to discuss your {serviceData.title.toLowerCase()} needs and get a customized proposal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary inline-flex">
                  Book a Free Call
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link to="/case-studies" className="btn-secondary inline-flex">
                  View Case Studies
                </Link>
              </div>
            </ModuleCard>
          </div>
        </div>
      </section>
    </>
  );
}
