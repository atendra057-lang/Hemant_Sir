import React from 'react';
import type { AcademicProfileData, Language } from '../types/academic';
import { Landmark, FileCheck, BookOpen, Quote } from 'lucide-react';

interface AboutSectionProps {
  data: AcademicProfileData;
  lang: Language;
  onOpenLedger: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ data, lang, onOpenLedger }) => {
  return (
    <section
      id="about"
      style={{
        paddingTop: 'clamp(3rem, 6vw, 5rem)',
        paddingBottom: 'clamp(3.5rem, 6vw, 5.5rem)',
        backgroundColor: 'var(--color-parchment-light)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div className="container-academic">
        
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--color-gold-dark)',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.4rem',
              fontFamily: 'var(--font-sans)',
            }}
          >
            <span>01</span>
            <span>·</span>
            <span>{lang === 'hi' ? 'अकादमिक परिचय' : 'Scholarly Profile'}</span>
          </div>
          
          <h2
            style={{
              fontSize: 'clamp(1.9rem, 3.5vw, 2.7rem)',
              color: 'var(--color-forest-dark)',
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
            }}
          >
            {lang === 'hi' ? 'अकादमिक पृष्ठभूमि एवं विमर्श' : 'Academic Profile & Scholarly Trajectory'}
          </h2>

          <div
            style={{
              width: '60px',
              height: '2px',
              backgroundColor: 'var(--color-gold)',
              marginTop: '0.75rem',
            }}
          />
        </div>

        {/* Content Layout: Main Editorial Biography & Institutional Sidebar */}
        <div
          className="about-grid"
          style={{
            display: 'grid',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            alignItems: 'start',
          }}
        >
          {/* Main Editorial Text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {data.extendedBio.map((paragraph, index) => (
              <p
                key={index}
                className="prose-reading"
                style={{
                  fontSize: 'clamp(1.02rem, 1.25vw, 1.12rem)',
                  color: 'var(--color-ink)',
                  lineHeight: 1.8,
                }}
              >
                {paragraph[lang]}
              </p>
            ))}

            {/* Featured Scholarly Inscription / Quote */}
            <div
              style={{
                marginTop: '1rem',
                padding: '1.5rem 1.75rem',
                backgroundColor: 'var(--color-ivory)',
                borderLeft: '4px solid var(--color-gold)',
                borderTop: '1px solid var(--color-border)',
                borderRight: '1px solid var(--color-border)',
                borderBottom: '1px solid var(--color-border)',
                borderRadius: '0 4px 4px 0',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', gap: '0.85rem' }}>
                <Quote
                  size={28}
                  style={{
                    color: 'var(--color-gold)',
                    flexShrink: 0,
                    transform: 'rotate(180deg)',
                    opacity: 0.8,
                  }}
                />
                <div>
                  <blockquote
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.05rem, 1.3vw, 1.18rem)',
                      fontStyle: 'italic',
                      color: 'var(--color-forest-dark)',
                      lineHeight: 1.7,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {data.scholarlyApproach[lang]}
                  </blockquote>
                  <div
                    style={{
                      fontSize: '0.82rem',
                      color: 'var(--color-muted)',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                    }}
                  >
                    {lang === 'hi' 
                      ? '— अंतरराष्ट्रीय संगोष्ठी, मोतीलाल नेहरू कॉलेज (मार्च 2026)'
                      : '— International Seminar on Global Hindi Pedagogy, Motilal Nehru College (March 2026)'}
                  </div>
                </div>
              </div>
            </div>

            {/* Core Research Orientations */}
            <div style={{ marginTop: '1.25rem' }}>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 600,
                  color: 'var(--color-forest-dark)',
                  marginBottom: '1rem',
                }}
              >
                {lang === 'hi' ? 'प्रमुख अनुसंधान एवं वैचारिक क्षेत्र' : 'Core Research & Intellectual Areas'}
              </h3>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '0.85rem',
                }}
              >
                {data.coreResearchThemes.map((theme, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.65rem',
                      padding: '0.85rem 1rem',
                      backgroundColor: 'var(--color-ivory)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '3px',
                    }}
                  >
                    <BookOpen size={16} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '4px' }} />
                    <span style={{ fontSize: '0.94rem', fontWeight: 600, color: 'var(--color-ink)', lineHeight: 1.4 }}>
                      {theme[lang]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Institutional Credentials & Verified Appointment Box */}
          <div
            style={{
              backgroundColor: 'var(--color-forest)',
              color: 'var(--color-ivory)',
              borderRadius: '4px',
              padding: 'clamp(1.5rem, 3vw, 2rem)',
              border: '1px solid var(--color-forest-dark)',
              boxShadow: '0 8px 28px -6px rgba(16, 39, 31, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            {/* Header Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', borderBottom: '1px solid rgba(170, 146, 94, 0.3)', paddingBottom: '1rem' }}>
              <Landmark size={22} style={{ color: 'var(--color-gold-light)' }} />
              <div>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-gold-light)', fontWeight: 700 }}>
                  {lang === 'hi' ? 'संस्थागत अभिलेख' : 'INSTITUTIONAL RECORD'}
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 600 }}>
                  {lang === 'hi' ? 'दिल्ली विश्वविद्यालय' : 'University of Delhi'}
                </div>
              </div>
            </div>

            {/* Verified Details List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem', fontSize: '0.9rem' }}>
              <div>
                <div style={{ color: 'var(--color-gold-light)', fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {lang === 'hi' ? 'पदनाम एवं संवर्ग' : 'Designation & Cadre'}
                </div>
                <div style={{ fontWeight: 600, fontSize: '0.98rem', marginTop: '2px' }}>
                  {data.title[lang]}
                </div>
              </div>

              <div>
                <div style={{ color: 'var(--color-gold-light)', fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {lang === 'hi' ? 'महाविद्यालय' : 'Institution'}
                </div>
                <div style={{ fontWeight: 600, fontSize: '0.98rem', marginTop: '2px' }}>
                  {data.institution[lang]}
                </div>
                <div style={{ fontSize: '0.8rem', opacity: 0.8, marginTop: '2px' }}>
                  {lang === 'hi' ? 'बेनिटो हुआरेज़ मार्ग, साउथ कैंपस, नई दिल्ली' : 'Benito Juarez Marg, South Campus, New Delhi'}
                </div>
              </div>

              <div>
                <div style={{ color: 'var(--color-gold-light)', fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {lang === 'hi' ? 'नियुक्ति अधिसूचना एवं क्रमांक' : 'Appointment Notification'}
                </div>
                <div style={{ fontWeight: 600, fontSize: '0.92rem', marginTop: '2px', fontFamily: 'monospace' }}>
                  Ref. {data.appointmentNotification.refNo}
                </div>
                <div style={{ fontSize: '0.8rem', opacity: 0.85, marginTop: '2px' }}>
                  {data.appointmentNotification.date} · {data.appointmentNotification.status[lang]}
                </div>
              </div>

              <div>
                <div style={{ color: 'var(--color-gold-light)', fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {lang === 'hi' ? 'अकादमिक सेवा समिति' : 'Active Committee Roles'}
                </div>
                <div style={{ fontSize: '0.86rem', marginTop: '3px', lineHeight: 1.5 }}>
                  • {lang === 'hi' ? 'विवरणिका समिति (2025–26)' : 'Prospectus Committee (2025–26)'}<br />
                  • {lang === 'hi' ? 'राष्ट्रीय संगोष्ठी समिति (2025–26)' : 'National Seminar Committee (2025–26)'}<br />
                  • {lang === 'hi' ? 'पूर्व छात्र समिति (2024–25)' : 'Alumni Committee (2024–25)'}
                </div>
              </div>
            </div>

            {/* Verification Button in Box */}
            <div style={{ paddingTop: '0.75rem', borderTop: '1px solid rgba(170, 146, 94, 0.3)' }}>
              <button
                type="button"
                onClick={onOpenLedger}
                style={{
                  width: '100%',
                  background: 'rgba(170, 146, 94, 0.15)',
                  border: '1px solid var(--color-gold)',
                  borderRadius: '3px',
                  color: 'var(--color-ivory)',
                  padding: '0.65rem 1rem',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  transition: 'var(--transition-gentle)',
                }}
              >
                <FileCheck size={16} style={{ color: 'var(--color-gold-light)' }} />
                <span>{lang === 'hi' ? 'अभिलेख एवं अधिसूचना देखें' : 'View Verified Audit Trail'}</span>
              </button>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 960px) {
          .about-grid {
            grid-template-columns: 1.35fr 0.85fr;
          }
        }
      `}</style>
    </section>
  );
};
