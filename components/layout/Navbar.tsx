'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, ChevronDown } from 'lucide-react';
import type { Language, Dictionary } from '@/lib/dictionaries';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface NavbarProps {
  lang: Language;
  dict: Dictionary;
}

export default function Navbar({ lang, dict }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Extract current path without language prefix
  const pathWithoutLang = pathname.replace(/^\/(en|de)/, '') || '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    const fullPath = `/${lang}${path}`;
    if (path === '/services') {
      return pathname.startsWith(`/${lang}/services`);
    }
    return pathname === fullPath || (path === '/' && pathname === `/${lang}`);
  };

  const handleLanguageChange = (newLang: Language) => {
    router.push(`/${newLang}${pathWithoutLang}`);
  };

  const navLinks = [
    { label: dict['nav.home'], href: '/' },
    { label: dict['nav.services'], href: '/services' },
    { label: dict['nav.about'], href: '/about' },
    { label: dict['nav.contact'], href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">K</span>
            </div>
            <span className="font-display font-semibold text-xl tracking-tight">KreateRevo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${lang}${link.href}`}
                className={`nav-link ${isActive(link.href) ? 'nav-link-active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Select language"
                >
                  <span className="uppercase">{lang}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[80px]">
                <DropdownMenuItem
                  onClick={() => handleLanguageChange('en')}
                  className={lang === 'en' ? 'bg-primary/10 text-primary' : ''}
                >
                  <span className="uppercase font-medium">EN</span>
                  <span className="ml-2 text-muted-foreground">English</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleLanguageChange('de')}
                  className={lang === 'de' ? 'bg-primary/10 text-primary' : ''}
                >
                  <span className="uppercase font-medium">DE</span>
                  <span className="ml-2 text-muted-foreground">Deutsch</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Button - Desktop */}
            <Link href={`/${lang}/contact`} className="hidden lg:inline-flex btn-primary text-sm">
              {dict['nav.bookCall']}
            </Link>

            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <button className="p-2 text-foreground hover:bg-secondary rounded-lg transition-colors">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-card border-border">
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={`/${lang}${link.href}`}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium ${
                        isActive(link.href) ? 'text-primary' : 'text-foreground'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <hr className="border-border" />
                  <Link
                    href={`/${lang}/contact`}
                    onClick={() => setIsOpen(false)}
                    className="btn-primary"
                  >
                    {dict['nav.bookCall']}
                  </Link>

                  {/* Mobile Language Switcher */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-3">Language / Sprache</p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          handleLanguageChange('en');
                          setIsOpen(false);
                        }}
                        className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                          lang === 'en'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary text-foreground hover:bg-secondary/80'
                        }`}
                      >
                        EN
                      </button>
                      <button
                        onClick={() => {
                          handleLanguageChange('de');
                          setIsOpen(false);
                        }}
                        className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                          lang === 'de'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary text-foreground hover:bg-secondary/80'
                        }`}
                      >
                        DE
                      </button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
