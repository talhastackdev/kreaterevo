import { Link } from 'react-router-dom';
import { Linkedin, Github, Twitter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { language, t } = useLanguage();

  const footerLinks = {
    services: [
      { label: t('services.cloud.title') || 'Cloud DevOps', href: `/${language}/services/cloud-devops` },
      { label: t('services.onprem.title') || 'On-Prem DevOps', href: `/${language}/services/on-prem-devops` },
      { label: t('services.cicd.title') || 'CI/CD Automation', href: `/${language}/services/ci-cd-automation` },
      { label: t('services.observability.title') || 'Observability & SRE', href: `/${language}/services/observability-sre` },
    ],
    company: [
      { label: t('nav.about') as string, href: `/${language}/about` },
      { label: t('nav.contact') as string, href: `/${language}/contact` },
    ],
    legal: [
      { label: t('seo.privacy.title') as string, href: `/${language}/privacy` },
      { label: t('seo.imprint.title') as string, href: `/${language}/imprint` },
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
            <Link to={`/${language}`} className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">K</span>
              </div>
              <span className="font-display font-semibold text-xl tracking-tight">
                KreateRevo
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs mb-6">
              {t('footer.description')}
            </p>
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
              {t('nav.services')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
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
              {language === 'de' ? 'Unternehmen' : 'Company'}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
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
              {language === 'de' ? 'Rechtliches' : 'Legal'}
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
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
            &copy; {new Date().getFullYear()} KreateRevo. {t('footer.copyright')}
          </p>
          <p className="text-sm text-muted-foreground">
            {t('footer.location')}
          </p>
        </div>
      </div>
    </footer>
  );
}
