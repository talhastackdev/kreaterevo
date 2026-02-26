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
