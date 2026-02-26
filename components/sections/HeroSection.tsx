'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Cloud, Server, GitBranch, Activity } from 'lucide-react';
import { ModuleCard } from '@/components/ModuleCard';
import type { Language, Dictionary } from '@/lib/dictionaries';

interface HeroSectionProps {
  lang: Language;
  dict: Dictionary;
}

export default function HeroSection({ lang, dict }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (heroRef.current) {
        heroRef.current.classList.add('opacity-100');
        heroRef.current.classList.remove('opacity-0');
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
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
              {dict['hero.badge']}
            </div>

            <h1 className="font-display font-bold text-display-1 mb-6">
              <span className="block">{dict['hero.title1']}</span>
              <span className="block">{dict['hero.title2']}</span>
              <span className="block text-gradient">{dict['hero.title3']}</span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-lg">
              {dict['hero.subtitle']}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href={`/${lang}/contact`} className="btn-primary">
                {dict['hero.cta.primary']}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href={`/${lang}/services`} className="btn-secondary">
                {dict['hero.cta.secondary']}
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>{dict['hero.trust.uptime']}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>{dict['hero.trust.security']}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>{dict['hero.trust.automation']}</span>
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
  );
}
