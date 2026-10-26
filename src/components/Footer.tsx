import React from 'react';
import type { AcademicProfileData, Language } from '../types/academic';
import { ShieldCheck, Landmark, ArrowUp } from 'lucide-react';

interface FooterProps {
  data: AcademicProfileData;
  lang: Language;
  onOpenLedger: () => void;
}

export const Footer: React.FC<FooterProps> = ({ data, lang, onOpenLedger }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-forest-dark)',
        color: 'var(--color-ivory)',
        borderTop: '2px solid var(--color-gold)',
        paddingTop: 'clamp(3rem, 5vw, 4.5rem)',
        paddingBottom: '2.5rem',
        fontSize: '0.9rem',
        position: 'relative',
      }}
    >
      <div className="container-academic">
        
        {/* Main Footer Content Grid */}
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gap: '2.5rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid rgba(170, 146, 94, 0.25)',
          }}
        >
          {/* Identity & Institution */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  backgroundColor: 'var(--color-forest)',
                  border: '1.5px solid var(--color-gold)',
                  borderRadius: '3px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-devanagari)',
                  fontWeight: 700,
                  fontSize: '1.15rem',
                  color: 'var(--color-gold-light)',
                }}
              >
                ह
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-devanagari)', fontWeight: 700, fontSize: '1.2rem', color: '#FFFFFF' }}>
                  {data.name.hi}
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '0.88rem', color: 'var(--color-gold-light)' }}>
                  {data.name.en}
                </div>
              </div>
            </div>

            <div style={{ fontSize: '0.86rem', color: 'rgba(246, 241, 231, 0.85)', lineHeight: 1.6, maxWidth: '340px' }}>
              {data.title[lang]}<br />
              {data.department[lang]}, {data.institution[lang]}<br />
              {data.university[lang]}, नई दिल्ली
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--color-gold-light)' }}>
              <ShieldCheck size={14} />
              <span>Ref. MNC/BJM/2023/814 · Faculty ID ADR6072675</span>
            </div>
          </div>

          {/* Quick Academic Navigation */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.1rem',
                color: 'var(--color-gold-light)',
                marginBottom: '1rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              {lang === 'hi' ? 'नेविगेशन' : 'Navigation'}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li>
                <a href="#home" style={{ color: 'var(--color-ivory)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  {lang === 'hi' ? 'मुखपृष्ठ (Home)' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#about" style={{ color: 'var(--color-ivory)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  {lang === 'hi' ? 'अकादमिक परिचय (About)' : 'Academic Profile'}
                </a>
              </li>
              <li>
                <a href="#research" style={{ color: 'var(--color-ivory)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  {lang === 'hi' ? 'शोध एवं प्रकाशन (Publications)' : 'Publications'}
                </a>
              </li>
              <li>
                <a href="#engagements" style={{ color: 'var(--color-ivory)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  {lang === 'hi' ? 'संगोष्ठी एवं व्याख्यान (Engagements)' : 'Seminars & Lectures'}
                </a>
              </li>
              <li>
                <a href="#pedagogy" style={{ color: 'var(--color-ivory)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  {lang === 'hi' ? 'शिक्षण एवं समितियां (Teaching)' : 'Teaching & Service'}
                </a>
              </li>
              <li>
                <a href="#contact" style={{ color: 'var(--color-ivory)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  {lang === 'hi' ? 'संस्थागत संपर्क (Contact)' : 'Contact'}
                </a>
              </li>
            </ul>
          </div>

          {/* Scholarly Transparency & External Institutional Records */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.1rem',
                color: 'var(--color-gold-light)',
                marginBottom: '1rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              {lang === 'hi' ? 'प्रमाणिकता एवं अभिलेख' : 'Scholarly Verification'}
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button
                type="button"
                onClick={onOpenLedger}
                style={{
                  background: 'rgba(170, 146, 94, 0.15)',
                  border: '1px solid var(--color-gold)',
                  borderRadius: '3px',
                  color: 'var(--color-ivory)',
                  padding: '0.6rem 0.85rem',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  textAlign: 'left',
                }}
              >
                <ShieldCheck size={16} style={{ color: 'var(--color-gold-light)', flexShrink: 0 }} />
                <span>{lang === 'hi' ? 'शोध सत्यापन बही देखें' : 'View Source Verification Ledger'}</span>
              </button>

              <a
                href="https://www.mlncdu.ac.in/Hindi.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'rgba(246, 241, 231, 0.85)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <Landmark size={14} style={{ color: 'var(--color-gold)' }} />
                <span>{lang === 'hi' ? 'मोतीलाल नेहरू कॉलेज आधिकारिक पोर्टल' : 'Motilal Nehru College Portal'}</span>
              </a>

              <a
                href="https://www.du.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'rgba(246, 241, 231, 0.85)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <Landmark size={14} style={{ color: 'var(--color-gold)' }} />
                <span>{lang === 'hi' ? 'दिल्ली विश्वविद्यालय आधिकारिक पोर्टल' : 'University of Delhi Portal'}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Colophon Row */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.82rem',
            color: 'rgba(246, 241, 231, 0.65)',
          }}
        >
          <div>
            © {new Date().getFullYear()} श्री हेमंत कुमार सिंह (Shri Hemant Kumar Singh). All Rights Reserved.
            <div style={{ fontSize: '0.75rem', marginTop: '3px' }}>
              {lang === 'hi'
                ? 'अकादमिक सत्यनिष्ठा और दिल्ली विश्वविद्यालय मानकों के अनुरूप निर्मित।'
                : 'Curated in accordance with scholarly integrity and University of Delhi standards.'}
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            style={{
              background: 'transparent',
              border: '1px solid rgba(170, 146, 94, 0.4)',
              color: 'var(--color-gold-light)',
              borderRadius: '3px',
              padding: '0.4rem 0.85rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.78rem',
              transition: 'var(--transition-gentle)',
            }}
            aria-label="Return to top of page"
          >
            <span>{lang === 'hi' ? 'शीर्ष पर जाएं' : 'Return to Top'}</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>

      <style>{`
        @media (min-width: 860px) {
          .footer-grid {
            grid-template-columns: 1.4fr 1fr 1.2fr;
          }
        }
      `}</style>
    </footer>
  );
};
