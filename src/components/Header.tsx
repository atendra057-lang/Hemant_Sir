import React, { useState, useEffect } from 'react';
import type { Language } from '../types/academic';
import { Menu, X, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenLedger: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onLanguageChange,
  onOpenLedger,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle ESC key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#home', label: lang === 'hi' ? 'मुखपृष्ठ' : 'Home' },
    { href: '#about', label: lang === 'hi' ? 'परिचय' : 'About' },
    { href: '#research', label: lang === 'hi' ? 'शोध एवं प्रकाशन' : 'Research' },
    { href: '#engagements', label: lang === 'hi' ? 'संगोष्ठी एवं व्याख्यान' : 'Engagements' },
    { href: '#pedagogy', label: lang === 'hi' ? 'शिक्षण एवं दायित्व' : 'Teaching' },
    { href: '#contact', label: lang === 'hi' ? 'संपर्क' : 'Contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Academic Institutional Band */}
      <div 
        style={{
          backgroundColor: 'var(--color-forest-dark)',
          color: 'var(--color-parchment)',
          borderBottom: '1px solid rgba(170, 146, 94, 0.25)',
          padding: '0.35rem 0',
          fontFamily: 'var(--font-sans)',
        }}
      >
        <div 
          className="container-academic top-strip-container" 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            gap: '0.4rem',
          }}
        >
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 'clamp(0.2rem, 1vw, 0.45rem)', 
              whiteSpace: 'nowrap', 
              overflow: 'hidden',
              fontSize: 'clamp(0.64rem, 2.1vw, 0.78rem)',
              letterSpacing: '0.02em',
              minWidth: 0,
              flexShrink: 1,
            }}
          >
            <span style={{ color: 'var(--color-gold-light)', fontWeight: 600, whiteSpace: 'nowrap' }}>
              {lang === 'hi' ? 'मोतीलाल नेहरू कॉलेज (MNC)' : 'Motilal Nehru College (MNC)'}
            </span>
            <span style={{ opacity: 0.6, flexShrink: 0 }}>·</span>
            <span style={{ opacity: 0.9, whiteSpace: 'nowrap' }}>
              {lang === 'hi' ? 'दिल्ली विश्वविद्यालय (DU)' : 'University of Delhi (DU)'}
            </span>
          </div>

          <button
            id="header-ledger-btn"
            onClick={onOpenLedger}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-gold-light)',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontSize: 'clamp(0.65rem, 2vw, 0.76rem)',
              fontWeight: 500,
              padding: '2px 4px',
              borderRadius: '2px',
              transition: 'var(--transition-gentle)',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
            title={lang === 'hi' ? 'शोध एवं स्रोत प्रामाणिकता विवरण' : 'View Scholarly Source Verification Ledger'}
            aria-label={lang === 'hi' ? 'शोध एवं स्रोत प्रामाणिकता विवरण' : 'View Scholarly Source Verification Ledger'}
          >
            <ShieldCheck size={13} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
            <span style={{ whiteSpace: 'nowrap' }}>{lang === 'hi' ? 'सत्यापित स्रोत' : 'Verified Records'}</span>
          </button>
        </div>
      </div>

      {/* Main Masthead / Sticky Header */}
      <header
        id="main-header"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: scrolled ? 'rgba(246, 241, 231, 0.96)' : 'var(--color-ivory)',
          backdropFilter: 'blur(8px)',
          borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 20px -2px rgba(25, 55, 45, 0.06)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div className="container-academic main-header-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: 'var(--header-height)', gap: '0.5rem' }}>
          {/* Typographic Masthead Monogram & Name */}
          <a
            href="#home"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(0.5rem, 1.8vw, 0.85rem)',
              color: 'inherit',
              minWidth: 0,
              flexShrink: 1,
            }}
            aria-label="Hemant Kumar Singh Academic Portfolio"
          >
            <div
              style={{
                width: 'clamp(34px, 8.5vw, 42px)',
                height: 'clamp(34px, 8.5vw, 42px)',
                backgroundColor: 'var(--color-forest)',
                border: '1.5px solid var(--color-gold)',
                borderRadius: '3px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-ivory)',
                fontFamily: 'var(--font-devanagari)',
                fontWeight: 700,
                fontSize: 'clamp(1.05rem, 2.8vw, 1.25rem)',
                flexShrink: 0,
                boxShadow: '0 2px 8px rgba(25, 55, 45, 0.15)',
              }}
            >
              ह
            </div>
            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  fontFamily: 'var(--font-devanagari)',
                  fontWeight: 700,
                  fontSize: 'clamp(0.96rem, 3.1vw, 1.18rem)',
                  lineHeight: 1.2,
                  color: 'var(--color-forest-dark)',
                  letterSpacing: '0.01em',
                  whiteSpace: 'nowrap',
                }}
              >
                हेमंत कुमार सिंह
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(0.72rem, 2.3vw, 0.88rem)',
                  color: 'var(--color-muted)',
                  letterSpacing: '0.01em',
                  lineHeight: 1.2,
                  whiteSpace: 'nowrap',
                }}
              >
                Hemant Kumar Singh
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{ display: 'none' }}
            className="desktop-nav"
            aria-label="Main Navigation"
          >
            <ul style={{ display: 'flex', listStyle: 'none', alignItems: 'center', gap: '1.5rem', margin: 0, padding: 0 }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    style={{
                      textDecoration: 'none',
                      color: 'var(--color-ink)',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 500,
                      fontSize: '0.94rem',
                      padding: '0.4rem 0.2rem',
                      position: 'relative',
                      transition: 'var(--transition-gentle)',
                    }}
                    className="nav-link-hover"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Action: Language Switcher & Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.35rem, 1.4vw, 0.75rem)', flexShrink: 0 }}>
            {/* Language Switcher */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: 'var(--color-parchment)',
                border: '1px solid var(--color-border)',
                borderRadius: '3px',
                padding: '2px',
              }}
              role="group"
              aria-label="Language selection"
            >
              <button
                type="button"
                id="lang-btn-hi"
                onClick={() => onLanguageChange('hi')}
                style={{
                  background: lang === 'hi' ? 'var(--color-forest)' : 'transparent',
                  color: lang === 'hi' ? 'var(--color-ivory)' : 'var(--color-ink)',
                  border: 'none',
                  borderRadius: '2px',
                  padding: '3px clamp(5px, 1.5vw, 10px)',
                  fontSize: 'clamp(0.72rem, 1.8vw, 0.82rem)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'var(--transition-gentle)',
                  fontFamily: 'var(--font-devanagari)',
                  minHeight: '30px',
                }}
                aria-pressed={lang === 'hi'}
              >
                हिन्दी
              </button>
              <button
                type="button"
                id="lang-btn-en"
                onClick={() => onLanguageChange('en')}
                style={{
                  background: lang === 'en' ? 'var(--color-forest)' : 'transparent',
                  color: lang === 'en' ? 'var(--color-ivory)' : 'var(--color-ink)',
                  border: 'none',
                  borderRadius: '2px',
                  padding: '3px clamp(5px, 1.5vw, 10px)',
                  fontSize: 'clamp(0.72rem, 1.8vw, 0.82rem)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'var(--transition-gentle)',
                  fontFamily: 'var(--font-sans)',
                  minHeight: '30px',
                }}
                aria-pressed={lang === 'en'}
              >
                EN
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '38px',
                minHeight: '38px',
                width: '38px',
                height: '38px',
                background: 'transparent',
                border: '1px solid var(--color-border)',
                borderRadius: '3px',
                color: 'var(--color-forest)',
                cursor: 'pointer',
                transition: 'var(--transition-gentle)',
              }}
              className="mobile-toggle-btn"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer & Backdrop */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Backdrop */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(16, 39, 31, 0.65)',
              backdropFilter: 'blur(4px)',
            }}
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <div
            style={{
              position: 'relative',
              width: '85%',
              maxWidth: '340px',
              height: '100%',
              backgroundColor: 'var(--color-ivory)',
              borderRight: '1px solid var(--color-border)',
              display: 'flex',
              flexDirection: 'column',
              padding: '1.5rem',
              overflowY: 'auto',
              boxShadow: '4px 0 24px rgba(0,0,0,0.2)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-devanagari)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-forest-dark)' }}>
                  हेमंत कुमार सिंह
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>
                  सहायक प्राध्यापक, हिंदी विभाग
                </div>
              </div>
              <button
                type="button"
                id="close-mobile-menu-btn"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  minWidth: '44px',
                  minHeight: '44px',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--color-ink)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav aria-label="Mobile Navigation">
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', margin: 0, padding: 0 }}>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        minHeight: '46px',
                        padding: '0.6rem 0.85rem',
                        textDecoration: 'none',
                        color: 'var(--color-ink)',
                        fontSize: '1.05rem',
                        fontWeight: 500,
                        borderRadius: '3px',
                        transition: 'background-color 0.2s',
                        borderLeft: '3px solid transparent',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--color-parchment)';
                        e.currentTarget.style.borderLeftColor = 'var(--color-gold)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.borderLeftColor = 'transparent';
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLedger();
                }}
                className="btn-academic-secondary"
                style={{ width: '100%', marginBottom: '1rem', fontSize: '0.88rem' }}
              >
                <ShieldCheck size={16} />
                <span>{lang === 'hi' ? 'सत्यापित स्रोत एवं प्रमाण' : 'Source Verification Ledger'}</span>
              </button>

              <div style={{ fontSize: '0.75rem', color: 'var(--color-muted)', textAlign: 'center' }}>
                मोतीलाल नेहरू कॉलेज · दिल्ली विश्वविद्यालय
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Media query helper styles */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: block !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .container-academic.top-strip-container,
          .container-academic.main-header-container {
            padding-left: 0.75rem !important;
            padding-right: 0.75rem !important;
          }
        }
        .nav-link-hover::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0%;
          height: 2px;
          background-color: var(--color-gold);
          transition: width 0.25s ease;
        }
        .nav-link-hover:hover::after {
          width: 100%;
        }
      `}</style>
    </>
  );
};
