import React from 'react';
import type { AcademicProfileData, Language } from '../types/academic';
import { BookOpen, FileText, Calendar, ArrowRight, ShieldCheck, Landmark } from 'lucide-react';

interface HeroProps {
  data: AcademicProfileData;
  lang: Language;
  onOpenLedger: () => void;
}

export const Hero: React.FC<HeroProps> = ({ data, lang, onOpenLedger }) => {

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-ivory)',
        borderBottom: '1px solid var(--color-border)',
        paddingTop: 'clamp(2.5rem, 5vw, 4.5rem)',
        paddingBottom: 'clamp(3rem, 6vw, 5rem)',
        overflow: 'hidden',
      }}
      className="bg-parchment-texture"
    >
      {/* Subtle corner manuscript flourish */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '240px',
          height: '240px',
          opacity: 0.04,
          pointerEvents: 'none',
          backgroundImage: `radial-gradient(circle at top right, var(--color-forest) 0%, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      <div className="container-academic">
        <div className="hero-grid" style={{ display: 'grid', gap: 'clamp(2rem, 4vw, 4rem)', alignItems: 'center' }}>
          
          {/* Left Column: Text & Editorial Presentation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            {/* Institutional Eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  backgroundColor: 'var(--color-forest)',
                  color: 'var(--color-ivory)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  padding: '0.3rem 0.65rem',
                  borderRadius: '2px',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                <Landmark size={12} style={{ color: 'var(--color-gold)' }} />
                <span>{lang === 'hi' ? 'दिल्ली विश्वविद्यालय (DU)' : 'UNIVERSITY OF DELHI (DU)'}</span>
              </span>

              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--color-gold-dark)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {lang === 'hi' ? 'मोतीलाल नेहरू कॉलेज (MNC) · हिंदी विभाग' : 'MOTILAL NEHRU COLLEGE (MNC) · DEPT. OF HINDI'}
              </span>
            </div>

            {/* Prominent Bilingual Academic Name & Disambiguation */}
            <div>
              <h1
                style={{
                  fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)',
                  fontFamily: 'var(--font-devanagari)',
                  fontWeight: 700,
                  color: 'var(--color-forest-dark)',
                  lineHeight: 1.15,
                  marginBottom: '0.25rem',
                  letterSpacing: '-0.01em',
                }}
              >
                {data.name.hi}
              </h1>
              <div
                style={{
                  fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)',
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  color: 'var(--color-muted)',
                  lineHeight: 1.25,
                }}
              >
                {data.name.en}
              </div>
              <div
                style={{
                  fontSize: '0.84rem',
                  color: 'var(--color-gold-dark)',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  letterSpacing: '0.03em',
                  marginTop: '0.2rem',
                }}
              >
                {lang === 'hi' ? 'हेमंत सिंह (डीयू) · मोतीलाल नेहरू कॉलेज' : 'Hemant Singh DU · Motilal Nehru College'}
              </div>
            </div>

            {/* Designation & Appointment Record */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '0.75rem',
                paddingTop: '0.25rem',
              }}
            >
              <div
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: 'var(--color-forest)',
                  fontFamily: 'var(--font-serif)',
                }}
              >
                {data.title[lang]}
              </div>

              <span style={{ color: 'var(--color-gold)', display: 'inline-block' }}>•</span>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.85rem',
                  color: 'var(--color-muted)',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                <Calendar size={14} style={{ color: 'var(--color-gold-dark)' }} />
                <span>
                  {lang === 'hi' 
                    ? `स्थाई नियुक्ति: 28 अक्टूबर 2023` 
                    : `Permanent Appt: 28 Oct 2023`}
                </span>
              </div>
            </div>

            {/* Concise Verified Scholarly Introduction */}
            <p
              className="prose-reading"
              style={{
                fontSize: 'clamp(1rem, 1.3vw, 1.12rem)',
                color: 'var(--color-ink-light)',
                lineHeight: 1.7,
                margin: '0.5rem 0',
              }}
            >
              {data.shortIntro[lang]}
            </p>

            {/* Primary Action Controls */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                marginTop: '0.75rem',
                alignItems: 'center',
              }}
            >
              <a href="#research" className="btn-academic-primary">
                <BookOpen size={18} />
                <span>{lang === 'hi' ? 'शोध कार्य देखें' : 'Explore Research'}</span>
                <ArrowRight size={16} />
              </a>

              <a href="#about" className="btn-academic-secondary">
                <FileText size={18} />
                <span>{lang === 'hi' ? 'अकादमिक परिचय' : 'Academic Profile'}</span>
              </a>

              <button
                type="button"
                onClick={onOpenLedger}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-forest)',
                  textDecoration: 'underline',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.5rem',
                  marginLeft: '0.25rem',
                }}
              >
                <ShieldCheck size={16} style={{ color: 'var(--color-gold-dark)' }} />
                <span>{lang === 'hi' ? 'प्रमाणित स्रोत' : 'Source Citations'}</span>
              </button>
            </div>

            {/* Verified Quick Highlights Ribbon */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                gap: '1rem',
                marginTop: '1.25rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--color-border)',
              }}
            >
              <div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-muted)', fontWeight: 600 }}>
                  {lang === 'hi' ? 'प्रमुख शोध पत्रिकाएं' : 'Key Research Journals'}
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-forest-dark)', marginTop: '2px' }}>
                  {lang === 'hi' ? 'शोध ऋतु · वाक सुधा' : 'Shodh Ritu · Vak Sudha'}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-muted)', fontWeight: 600 }}>
                  {lang === 'hi' ? 'शोध एवं संगोष्ठी केंद्र' : 'Scholarly Focus'}
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-forest-dark)', marginTop: '2px' }}>
                  {lang === 'hi' ? 'सिनेमा विमर्श एवं काव्य पर्यावरण' : 'Cinema Studies & Ecocriticism'}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-muted)', fontWeight: 600 }}>
                  {lang === 'hi' ? 'संस्थागत दायित्व' : 'Institutional Service'}
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-forest-dark)', marginTop: '2px' }}>
                  {lang === 'hi' ? 'विवरणिका समिति सदस्य (25-26)' : 'Prospectus Committee (25-26)'}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Distinguished Archival Monogram Crest / Portrait */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '380px',
              }}
            >
              {/* Outer Classical Double Border Frame */}
              <div
                style={{
                  backgroundColor: 'var(--color-parchment-light)',
                  border: '1.5px solid var(--color-border)',
                  borderRadius: '6px',
                  padding: '1.5rem',
                  boxShadow: '0 12px 36px -8px rgba(25, 55, 45, 0.12)',
                  position: 'relative',
                }}
              >
                {/* Corner Decorative Brass Ornaments */}
                <div style={{ position: 'absolute', top: '8px', left: '8px', width: '12px', height: '12px', borderTop: '2px solid var(--color-gold)', borderLeft: '2px solid var(--color-gold)' }} />
                <div style={{ position: 'absolute', top: '8px', right: '8px', width: '12px', height: '12px', borderTop: '2px solid var(--color-gold)', borderRight: '2px solid var(--color-gold)' }} />
                <div style={{ position: 'absolute', bottom: '8px', left: '8px', width: '12px', height: '12px', borderBottom: '2px solid var(--color-gold)', borderLeft: '2px solid var(--color-gold)' }} />
                <div style={{ position: 'absolute', bottom: '8px', right: '8px', width: '12px', height: '12px', borderBottom: '2px solid var(--color-gold)', borderRight: '2px solid var(--color-gold)' }} />

                {/* Academic Photographic Portrait */}
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '4 / 5',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    border: '1px solid rgba(170, 146, 94, 0.4)',
                    boxShadow: '0 8px 24px rgba(16, 39, 31, 0.18)',
                    backgroundColor: 'var(--color-forest)',
                  }}
                >
                  <img
                    src={data.portraitUrl || '/portrait.jpg'}
                    alt={lang === 'hi' ? 'हेमंत सिंह (हेमंत कुमार सिंह) — सहायक प्राध्यापक, हिंदी विभाग, मोतीलाल नेहरू कॉलेज, दिल्ली विश्वविद्यालय (DU)' : 'Hemant Singh DU — Assistant Professor of Hindi, Motilal Nehru College, University of Delhi'}
                    title="Hemant Singh — Motilal Nehru College, University of Delhi (DU)"
                    loading="eager"
                    fetchPriority="high"
                    width={400}
                    height={500}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 0%',
                      display: 'block',
                    }}
                  />

                  {/* Elegant Archival Inner Vignette Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      boxShadow: 'inset 0 0 28px rgba(16, 39, 31, 0.3)',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Archival Stamp Ribbon at Bottom of Card */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      backgroundColor: 'rgba(16, 39, 31, 0.92)',
                      backdropFilter: 'blur(6px)',
                      borderTop: '1px solid rgba(170, 146, 94, 0.4)',
                      padding: '0.48rem 0.75rem',
                      fontSize: '0.72rem',
                      color: 'var(--color-gold-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      fontFamily: 'var(--font-sans)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    <ShieldCheck size={14} style={{ color: 'var(--color-gold)' }} />
                    <span>MNC/BJM/2023/814 · Verified Faculty</span>
                  </div>
                </div>

                {/* Caption below portrait card */}
                <div
                  style={{
                    marginTop: '0.85rem',
                    textAlign: 'center',
                    fontSize: '0.82rem',
                    color: 'var(--color-forest-dark)',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                  }}
                >
                  {lang === 'hi'
                    ? 'हेमंत कुमार सिंह · सहायक प्राध्यापक'
                    : 'Hemant Kumar Singh · Assistant Professor'}
                  <div
                    style={{
                      fontSize: '0.74rem',
                      color: 'var(--color-muted)',
                      fontWeight: 400,
                      marginTop: '2px',
                    }}
                  >
                    {lang === 'hi'
                      ? 'मोतीलाल नेहरू कॉलेज · दिल्ली विश्वविद्यालय'
                      : 'Motilal Nehru College · University of Delhi'}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.25fr 0.85fr;
          }
        }
      `}</style>
    </section>
  );
};
