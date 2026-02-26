import Link from 'next/link';
import { Linkedin, Github, Twitter } from 'lucide-react';
import type { Language, Dictionary } from '@/lib/dictionaries';

interface FooterProps {
  lang: Language;
  dict: Dictionary;
}

export default function Footer({ lang, dict }: FooterProps) {
  const footerLinks = {
    services: [
      { label: dict['services.cloud.title'], href: `/${lang}/services/cloud-devops` },
      { label: dict['services.onprem.title'], href: `/${lang}/services/on-prem-devops` },
      { label: dict['services.cicd.title'], href: `/${lang}/services/ci-cd-automation` },
      { label: dict['services.observability.title'], href: `/${lang}/services/observability-sre` },
    ],
    company: [
      { label: dict['nav.about'], href: `/${lang}/about` },
      { label: dict['nav.contact'], href: `/${lang}/contact` },
    ],
    legal: [
      { label: dict['seo.privacy.title'], href: `/${lang}/privacy` },
      { label: dict['seo.imprint.title'], href: `/${lang}/imprint` },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="bg-charcoal-50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href={`/${lang}`} className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">K</span>
              </div>
              <span className="font-display font-semibold text-xl tracking-tight">KreateRevo</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs mb-6">{dict['footer.description']}</p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">
              {dict['nav.services']}
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">
              {lang === 'de' ? 'Unternehmen' : 'Company'}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">
              {lang === 'de' ? 'Rechtliches' : 'Legal'}
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} KreateRevo. {dict['footer.copyright']}
          </p>
          <p className="text-sm text-muted-foreground">{dict['footer.location']}</p>
        </div>
      </div>
    </footer>
  );
}
