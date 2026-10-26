import React, { useState, useEffect } from 'react';
import type { Language } from './types/academic';
import { academicData } from './data/academicData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PublicationsSection } from './components/PublicationsSection';
import { EngagementsSection } from './components/EngagementsSection';
import { PedagogySection } from './components/PedagogySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SourceVerificationDrawer } from './components/SourceVerificationDrawer';

export const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang');
      return urlLang === 'en' ? 'en' : 'hi';
    } catch {
      return 'hi';
    }
  });
  const [isLedgerOpen, setIsLedgerOpen] = useState(false);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', newLang);
      window.history.replaceState({}, '', url.toString());
    } catch {
      // ignore
    }
  };

  // Sync html lang attribute and dynamic search-optimized document title
  useEffect(() => {
    document.documentElement.lang = lang;
    if (lang === 'hi') {
      document.title = 'Hemant Singh DU | Motilal Nehru College — हेमंत कुमार सिंह | Hemant Kumar Singh, सहायक प्राध्यापक (हिंदी), दिल्ली विश्वविद्यालय';
    } else {
      document.title = 'Hemant Singh DU | Motilal Nehru College — Hemant Kumar Singh, Assistant Professor of Hindi, University of Delhi';
    }
  }, [lang]);

  return (
    <div className="academic-portfolio-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Skip to Main Content Link for WCAG Accessibility */}
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          top: '-100px',
          left: '1rem',
          backgroundColor: 'var(--color-forest)',
          color: 'var(--color-ivory)',
          padding: '0.65rem 1.25rem',
          zIndex: 9999,
          borderRadius: '3px',
          fontWeight: 700,
          textDecoration: 'none',
          transition: 'top 0.2s ease',
        }}
        onFocus={(e) => {
          e.currentTarget.style.top = '1rem';
        }}
        onBlur={(e) => {
          e.currentTarget.style.top = '-100px';
        }}
      >
        {lang === 'hi' ? 'मुख्य सामग्री पर जाएं (Skip to content)' : 'Skip to main content'}
      </a>

      {/* Masthead Header */}
      <Header
        lang={lang}
        onLanguageChange={handleLanguageChange}
        onOpenLedger={() => setIsLedgerOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content" style={{ flex: 1 }}>
        <Hero
          data={academicData}
          lang={lang}
          onOpenLedger={() => setIsLedgerOpen(true)}
        />

        <AboutSection
          data={academicData}
          lang={lang}
          onOpenLedger={() => setIsLedgerOpen(true)}
        />

        <PublicationsSection
          data={academicData}
          lang={lang}
          onOpenLedger={() => setIsLedgerOpen(true)}
        />

        <EngagementsSection
          data={academicData}
          lang={lang}
          onOpenLedger={() => setIsLedgerOpen(true)}
        />

        <PedagogySection
          data={academicData}
          lang={lang}
        />

        <ContactSection
          data={academicData}
          lang={lang}
        />
      </main>

      {/* Footer */}
      <Footer
        data={academicData}
        lang={lang}
        onOpenLedger={() => setIsLedgerOpen(true)}
      />

      {/* Scholarly Source Verification Ledger Modal */}
      <SourceVerificationDrawer
        isOpen={isLedgerOpen}
        onClose={() => setIsLedgerOpen(false)}
        lang={lang}
      />
    </div>
  );
};

export default App;
