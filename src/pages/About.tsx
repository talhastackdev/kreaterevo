import { Link } from 'react-router-dom';
import { ArrowRight, Check, Shield, Lock, Eye, FileText } from 'lucide-react';
import SEO from '@/components/SEO';
import { ModuleCard } from '@/components/ModuleCard';
import { whyChooseUs, securityFeatures } from '@/data/content';

const values = [
  {
    title: 'Technical Excellence',
    description: 'We write clean, maintainable infrastructure code. Every line is reviewed, tested, and documented.'
  },
  {
    title: 'Operational Discipline',
    description: 'We follow proven practices: version control, automated testing, and continuous integration.'
  },
  {
    title: 'Knowledge Transfer',
    description: 'We do not create dependencies. Our goal is to make your team self-sufficient.'
  },
  {
    title: 'Transparent Communication',
    description: 'No jargon, no surprises. Regular updates and clear documentation keep everyone aligned.'
  }
];

const team = [
  {
    name: 'Alexander Weber',
    role: 'Founder & Lead Architect',
    bio: '15+ years in infrastructure and DevOps. Former platform lead at multiple scale-ups.'
  },
  {
    name: 'Maria Schmidt',
    role: 'Senior SRE',
    bio: 'Expert in observability and incident response. Kubernetes contributor.'
  },
  {
    name: 'Thomas Müller',
    role: 'Cloud Architect',
    bio: 'AWS and Azure certified. Specializes in cost optimization and security.'
  },
  {
    name: 'Sarah Klein',
    role: 'DevOps Engineer',
    bio: 'CI/CD pipeline specialist. Passionate about developer experience.'
  }
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about KreateRevo, our team, values, and approach to DevOps and cloud infrastructure."
        canonical="/about"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-label mb-4 block">About</span>
            <h1 className="font-display font-bold text-display-1 mb-6">
              Built by Engineers,<br />for Engineers
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground">
              We are a team of platform engineers, SREs, and cloud architects who have run production at scale. 
              We do not just advise—we build, migrate, and operate.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-32 bg-charcoal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-display-2 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  KreateRevo was founded in 2020 with a simple mission: help teams ship software faster and more reliably. 
                  We saw too many companies struggling with the same problems—slow deployments, frequent outages, and skyrocketing cloud bills.
                </p>
                <p>
                  Having worked at startups and enterprises across Europe, we knew there was a better way. 
                  We combined our experience running production systems at scale with a focus on automation, documentation, and knowledge transfer.
                </p>
                <p>
                  Today, we help companies across the EU modernize their infrastructure, implement DevOps best practices, 
                  and build systems that scale with their business.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ModuleCard className="aspect-square flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5" showPort={false}>
                <div className="text-center">
                  <div className="font-display font-bold text-4xl text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
              </ModuleCard>
              <ModuleCard className="aspect-square flex items-center justify-center bg-gradient-to-br from-secondary to-secondary/50" showPort={false}>
                <div className="text-center">
                  <div className="font-display font-bold text-4xl text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </ModuleCard>
              <ModuleCard className="aspect-square flex items-center justify-center bg-gradient-to-br from-secondary to-secondary/50" showPort={false}>
                <div className="text-center">
                  <div className="font-display font-bold text-4xl text-primary mb-2">EU</div>
                  <div className="text-sm text-muted-foreground">Based in Germany</div>
                </div>
              </ModuleCard>
              <ModuleCard className="aspect-square flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5" showPort={false}>
                <div className="text-center">
                  <div className="font-display font-bold text-4xl text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
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
            <span className="section-label mb-4 block">Values</span>
            <h2 className="font-display font-bold text-display-2 mb-4">
              How We Work
            </h2>
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
            <span className="section-label mb-4 block">Differentiators</span>
            <h2 className="font-display font-bold text-display-2 mb-4">
              Why KreateRevo
            </h2>
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
            <span className="section-label mb-4 block">Security</span>
            <h2 className="font-display font-bold text-display-2 mb-4">
              Security & Compliance
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Security is built into everything we do. From least-privilege access to encryption at rest and in transit.
            </p>
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
                <span 
                  key={cert}
                  className="px-4 py-2 rounded-full bg-card border border-border/30 text-sm font-medium"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-charcoal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label mb-4 block">Team</span>
            <h2 className="font-display font-bold text-display-2 mb-4">
              Meet the Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experienced engineers who have built and operated systems at scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <ModuleCard key={index} className="p-6 text-center" showPort={false}>
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-4">
                  <span className="font-display font-bold text-2xl text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </ModuleCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ModuleCard className="inline-block p-12 max-w-2xl" showPort={false}>
            <h2 className="font-display font-bold text-display-3 mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can help your team build, automate, and scale.
            </p>
            <Link to="/contact" className="btn-primary inline-flex">
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </ModuleCard>
        </div>
      </section>
    </>
  );
}
