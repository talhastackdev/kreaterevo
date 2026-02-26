import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

interface ModuleCardProps {
  children: ReactNode;
  className?: string;
  showPort?: boolean;
  portClassName?: string;
}

export function ModuleCard({ children, className, showPort = true, portClassName }: ModuleCardProps) {
  return (
    <div
      className={cn(
        'relative rounded-2xl border-2 bg-card overflow-hidden transition-all duration-300',
        'border-border/30 hover:border-primary/40',
        className
      )}
    >
      {showPort && (
        <div
          className={cn(
            'absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full animate-pulse-port',
            'bg-primary/85',
            portClassName
          )}
        />
      )}
      <div className={showPort ? 'pl-12' : ''}>{children}</div>
    </div>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  className?: string;
}

export function ServiceCard({ title, description, href, className }: ServiceCardProps) {
  return (
    <Link href={href} className="group block">
      <ModuleCard
        className={cn(
          'h-full p-6 lg:p-8 hover:-translate-y-1 hover:shadow-card transition-all duration-300',
          className
        )}
      >
        <div className="flex flex-col h-full">
          <h3 className="font-display font-semibold text-xl lg:text-2xl mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm lg:text-base flex-grow">{description}</p>
          <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </ModuleCard>
    </Link>
  );
}

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <ModuleCard className={cn('p-6 lg:p-8', className)}>
      <div className="text-center">
        <div className="font-display font-bold text-4xl lg:text-5xl text-primary mb-2">{value}</div>
        <p className="text-muted-foreground text-sm lg:text-base">{label}</p>
      </div>
    </ModuleCard>
  );
}

interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}

export function ProcessCard({ number, title, description, className }: ProcessCardProps) {
  return (
    <ModuleCard showPort={false} className={cn('p-6 lg:p-8', className)}>
      <div className="flex flex-col items-start gap-4">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
            <span className="font-mono font-semibold text-primary text-sm">{number}</span>
          </div>
          <h3 className="font-display font-semibold text-lg">{title}</h3>
        </div>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </ModuleCard>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  className?: string;
}

export function TestimonialCard({ quote, author, role, company, className }: TestimonialCardProps) {
  return (
    <ModuleCard className={cn('p-6 lg:p-8', className)}>
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <svg className="w-8 h-8 text-primary/40" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <blockquote className="text-foreground text-base lg:text-lg mb-6 flex-grow">
          "{quote}"
        </blockquote>
        <div>
          <div className="font-medium text-foreground">{author}</div>
          <div className="text-sm text-muted-foreground">
            {role}, {company}
          </div>
        </div>
      </div>
    </ModuleCard>
  );
}

interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  recommended?: boolean;
  onCtaClick?: () => void;
}

export function PricingCard({
  name,
  description,
  price,
  period,
  features,
  cta,
  recommended,
  onCtaClick,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        'relative rounded-2xl border-2 bg-card overflow-hidden',
        recommended ? 'border-primary' : 'border-border/30'
      )}
    >
      {recommended && (
        <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-1.5 text-xs font-medium uppercase tracking-wider">
          Recommended
        </div>
      )}
      <div className={`p-6 lg:p-8 ${recommended ? 'pt-12' : ''}`}>
        <div className="mb-6">
          <h3 className="font-display font-semibold text-xl mb-1">{name}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
        <div className="mb-6">
          <span className="font-display font-bold text-3xl lg:text-4xl">{price}</span>
          <span className="text-muted-foreground text-sm ml-2">{period}</span>
        </div>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={onCtaClick}
          className={cn(
            'w-full py-3 px-4 rounded-xl font-medium transition-all duration-200',
            recommended ? 'btn-primary' : 'btn-secondary'
          )}
        >
          {cta}
        </button>
      </div>
    </div>
  );
}
