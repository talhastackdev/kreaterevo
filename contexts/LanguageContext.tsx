'use client';

import { createContext, useContext, type ReactNode } from 'react';
import type { Language } from '@/lib/dictionaries';

interface LanguageContextType {
  lang: Language;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  lang,
  children,
}: {
  lang: Language;
  children: ReactNode;
}) {
  return (
    <LanguageContext.Provider value={{ lang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
