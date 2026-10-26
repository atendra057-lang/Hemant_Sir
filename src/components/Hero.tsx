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
                <span>{lang === 'hi' ? 'दिल्ली विश्वविद्यालय' : 'UNIVERSITY OF DELHI'}</span>
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
                {lang === 'hi' ? 'मोतीलाल नेहरू कॉलेज · हिंदी विभाग' : 'MOTILAL NEHRU COLLEGE · DEPT. OF HINDI'}
              </span>
            </div>

            {/* Prominent Bilingual Academic Name */}
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
              className="hero-action-controls"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                marginTop: '0.75rem',
                alignItems: 'center',
              }}
            >
              <a href="#research" className="btn-academic-primary hero-action-btn">
                <BookOpen size={18} />
                <span>{lang === 'hi' ? 'शोध कार्य देखें' : 'Explore Research'}</span>
                <ArrowRight size={16} />
              </a>

              <a href="#about" className="btn-academic-secondary hero-action-btn">
                <FileText size={18} />
                <span>{lang === 'hi' ? 'अकादमिक परिचय' : 'Academic Profile'}</span>
              </a>

              <button
                type="button"
                onClick={onOpenLedger}
                className="hero-citation-btn"
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

                {/* Portrait or Archival Scholarly Seal */}
                <div
                  style={{
                    aspectRatio: '4 / 5',
                    backgroundColor: 'var(--color-forest)',
                    borderRadius: '4px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem 1.5rem',
                    textAlign: 'center',
                    border: '1px solid rgba(170, 146, 94, 0.4)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Subtle Background Radial & Watermark */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: 'radial-gradient(circle at center, rgba(170, 146, 94, 0.12) 0%, transparent 70%)',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Intertwined Monogram Crest */}
                  <div
                    style={{
                      width: '110px',
                      height: '110px',
                      borderRadius: '50%',
                      border: '2px solid var(--color-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      marginBottom: '1.25rem',
                      boxShadow: '0 0 20px rgba(170, 146, 94, 0.25)',
                      backgroundColor: 'var(--color-forest-dark)',
                    }}
                  >
                    {/* Inner gold ring */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: '4px',
                        borderRadius: '50%',
                        border: '1px dashed rgba(170, 146, 94, 0.6)',
                      }}
                    />
                    <span
                      style={{
                        fontFamily: 'var(--font-devanagari)',
                        fontSize: '3.2rem',
                        fontWeight: 700,
                        color: 'var(--color-gold-light)',
                        lineHeight: 1,
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                      }}
                    >
                      ह
                    </span>
                  </div>

                  {/* Scholarly Seal Inscription */}
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.18rem',
                      fontWeight: 600,
                      color: 'var(--color-ivory)',
                      letterSpacing: '0.04em',
                      marginBottom: '0.35rem',
                    }}
                  >
                    हेमंत कुमार सिंह
                  </div>

                  <div
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--color-gold-light)',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      marginBottom: '1rem',
                    }}
                  >
                    {lang === 'hi' ? 'सहायक प्राध्यापक · हिंदी' : 'Assistant Professor of Hindi'}
                  </div>

                  <div
                    style={{
                      width: '40px',
                      height: '1px',
                      backgroundColor: 'var(--color-gold)',
                      opacity: 0.6,
                      marginBottom: '1rem',
                    }}
                  />

                  <div
                    style={{
                      fontSize: '0.76rem',
                      color: 'rgba(246, 241, 231, 0.85)',
                      fontFamily: 'var(--font-sans)',
                      lineHeight: 1.5,
                      maxWidth: '220px',
                    }}
                  >
                    {lang === 'hi' 
                      ? 'मोतीलाल नेहरू कॉलेज\nदिल्ली विश्वविद्यालय'
                      : 'Motilal Nehru College\nUniversity of Delhi'}
                  </div>

                  {/* Archival Stamp Ribbon at Bottom of Card */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      backgroundColor: 'rgba(16, 39, 31, 0.95)',
                      borderTop: '1px solid rgba(170, 146, 94, 0.3)',
                      padding: '0.5rem 0.75rem',
                      fontSize: '0.7rem',
                      color: 'var(--color-gold-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    <ShieldCheck size={13} style={{ color: 'var(--color-gold)' }} />
                    <span>MNC/BJM/2023/814 · Verified Faculty</span>
                  </div>
                </div>

                {/* Caption below portrait card */}
                <div
                  style={{
                    marginTop: '0.85rem',
                    textAlign: 'center',
                    fontSize: '0.78rem',
                    color: 'var(--color-muted)',
                    fontFamily: 'var(--font-sans)',
                    fontStyle: 'italic',
                  }}
                >
                  {lang === 'hi'
                    ? 'अकादमिक मुद्रा · हिंदी विभाग, मोतीलाल नेहरू कॉलेज'
                    : 'Faculty Crest · Department of Hindi, Motilal Nehru College'}
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

        /* Phone view only: stack the three action buttons one below the other */
        @media (max-width: 640px) {
          .hero-action-controls {
            flex-direction: column !important;
            align-items: stretch !important;
            width: 100%;
            gap: 0.75rem !important;
          }
          .hero-action-controls .hero-action-btn {
            width: 100% !important;
            box-sizing: border-box !important;
            justify-content: center !important;
            text-align: center !important;
          }
          .hero-action-controls .hero-citation-btn {
            width: 100% !important;
            box-sizing: border-box !important;
            justify-content: center !important;
            text-align: center !important;
            margin-left: 0 !important;
            min-height: 44px !important;
            padding: 0.65rem 1rem !important;
            border: 1px solid var(--color-border) !important;
            border-radius: 3px !important;
            background-color: var(--color-parchment-light) !important;
            text-decoration: none !important;
            font-size: 0.92rem !important;
            color: var(--color-forest) !important;
          }
          .hero-action-controls .hero-citation-btn:hover {
            border-color: var(--color-gold) !important;
            background-color: rgba(170, 146, 94, 0.15) !important;
          }
        }
      `}</style>
    </section>
  );
};
