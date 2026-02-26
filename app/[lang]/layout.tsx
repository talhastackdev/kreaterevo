import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { getDictionary, SUPPORTED_LANGUAGES, type Language } from '@/lib/dictionaries';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';

export function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!SUPPORTED_LANGUAGES.includes(lang as Language)) {
    notFound();
  }

  const validLang = lang as Language;
  const dict = getDictionary(validLang);

  return (
    <LanguageProvider lang={validLang}>
      <div className="min-h-screen bg-background text-foreground">
        <div className="grain-overlay" />
        <Navbar lang={validLang} dict={dict} />
        <main>{children}</main>
        <Footer lang={validLang} dict={dict} />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
}
