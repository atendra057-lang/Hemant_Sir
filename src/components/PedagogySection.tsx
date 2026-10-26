import React from 'react';
import type { AcademicProfileData, Language } from '../types/academic';
import { BookOpen, Landmark, ShieldCheck } from 'lucide-react';

interface PedagogySectionProps {
  data: AcademicProfileData;
  lang: Language;
}

export const PedagogySection: React.FC<PedagogySectionProps> = ({ data, lang }) => {
  return (
    <section
      id="pedagogy"
      style={{
        paddingTop: 'clamp(3rem, 6vw, 5rem)',
        paddingBottom: 'clamp(3.5rem, 6vw, 5.5rem)',
        backgroundColor: 'var(--color-ivory)',
        borderBottom: '1px solid var(--color-border)',
      }}
      className="bg-parchment-texture"
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
              fontFamily: 'var(--font-sans)',
            }}
          >
            <span>04</span>
            <span>·</span>
            <span>{lang === 'hi' ? 'शिक्षण एवं संस्थागत सेवा' : 'Pedagogy & Institutional Service'}</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.9rem, 3.5vw, 2.7rem)',
              color: 'var(--color-forest-dark)',
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
            }}
          >
            {lang === 'hi' ? 'शिक्षण विषय एवं महाविद्यालयी दायित्व' : 'Teaching Areas & Committee Appointments'}
          </h2>

          <div
            style={{
              width: '60px',
              height: '2px',
              backgroundColor: 'var(--color-gold)',
              marginTop: '0.5rem',
            }}
          />
        </div>

        {/* Two Column Layout: Teaching Curriculum & Institutional Committees */}
        <div
          className="pedagogy-grid"
          style={{
            display: 'grid',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Teaching & Pedagogical Areas */}
          <div>
            <h3
              style={{
                fontSize: '1.35rem',
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                color: 'var(--color-forest-dark)',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <BookOpen size={20} style={{ color: 'var(--color-gold)' }} />
              <span>{lang === 'hi' ? 'अध्यापन एवं विमर्श क्षेत्र' : 'Curricular & Pedagogical Focus'}</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {data.teachingAreas.map((area) => (
                <div
                  key={area.id}
                  className="academic-card"
                  style={{
                    backgroundColor: 'var(--color-parchment-light)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '4px',
                    padding: '1.25rem 1.5rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <h4
                      style={{
                        fontSize: '1.12rem',
                        fontFamily: 'var(--font-devanagari)',
                        fontWeight: 700,
                        color: 'var(--color-forest-dark)',
                      }}
                    >
                      {area.title[lang]}
                    </h4>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--color-forest)',
                        backgroundColor: 'rgba(25, 55, 45, 0.08)',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '2px',
                        fontWeight: 600,
                      }}
                    >
                      {area.level[lang]}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: '0.94rem',
                      color: 'var(--color-ink-light)',
                      lineHeight: 1.65,
                    }}
                  >
                    {area.description[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Institutional Committee Service */}
          <div>
            <h3
              style={{
                fontSize: '1.35rem',
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                color: 'var(--color-forest-dark)',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <Landmark size={20} style={{ color: 'var(--color-gold)' }} />
              <span>{lang === 'hi' ? 'महाविद्यालय समितियां एवं सेवा' : 'Institutional Committee Service'}</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {data.committees.map((comm) => (
                <div
                  key={comm.id}
                  style={{
                    backgroundColor: 'var(--color-parchment-light)',
                    border: '1px solid var(--color-border)',
                    borderLeft: '3px solid var(--color-forest)',
                    borderRadius: '3px',
                    padding: '1.25rem 1.5rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        color: 'var(--color-ivory)',
                        backgroundColor: 'var(--color-forest)',
                        padding: '0.15rem 0.55rem',
                        borderRadius: '2px',
                        fontFamily: 'monospace',
                      }}
                    >
                      {comm.tenure}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>
                      {comm.institution[lang]}
                    </span>
                  </div>

                  <h4
                    style={{
                      fontSize: '1.08rem',
                      fontFamily: 'var(--font-serif)',
                      fontWeight: 700,
                      color: 'var(--color-forest-dark)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {comm.committeeName[lang]}
                  </h4>

                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-gold-dark)', marginBottom: '0.45rem' }}>
                    {comm.role[lang]}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.76rem', color: 'var(--color-muted)' }}>
                    <ShieldCheck size={13} style={{ color: 'var(--color-forest)' }} />
                    <span>{comm.sourceDocument[lang]}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Note on Departmental Academic Life */}
            <div
              style={{
                marginTop: '1.5rem',
                padding: '1rem 1.25rem',
                backgroundColor: 'var(--color-parchment)',
                border: '1px solid var(--color-border)',
                borderRadius: '3px',
                fontSize: '0.86rem',
                color: 'var(--color-ink-light)',
                lineHeight: 1.6,
              }}
            >
              <strong>{lang === 'hi' ? 'विभागीय सहयोग:' : 'Departmental Engagement:'}</strong>{' '}
              {lang === 'hi'
                ? 'हिंदी विभाग की साहित्यिक समिति "कृतिसंग" तथा बी.ए. प्रोग्राम समिति "रचनायन" के सहयोग से आयोजित संगोष्ठियों एवं पाठ्य सहगामी गतिविधियों में निरंतर सक्रिय।'
                : 'Regular academic participation and scholarly mentorship in activities organized by the Hindi Departmental Society "Kritisang" and B.A. Programme Society "Rachnayan".'}
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 960px) {
          .pedagogy-grid {
            grid-template-columns: 1.15fr 0.85fr;
          }
        }
      `}</style>
    </section>
  );
};
