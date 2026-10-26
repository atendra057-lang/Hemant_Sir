import React from 'react';
import type { AcademicProfileData, Language } from '../types/academic';
import { Calendar, Users, MapPin, ExternalLink, ShieldCheck, Award } from 'lucide-react';

interface EngagementsSectionProps {
  data: AcademicProfileData;
  lang: Language;
  onOpenLedger?: () => void;
}

export const EngagementsSection: React.FC<EngagementsSectionProps> = ({
  data,
  lang,
}) => {
  return (
    <section
      id="engagements"
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
              fontFamily: 'var(--font-sans)',
            }}
          >
            <span>03</span>
            <span>·</span>
            <span>{lang === 'hi' ? 'अकादमिक संगोष्ठी एवं संवाद' : 'Academic Engagements & Seminars'}</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.9rem, 3.5vw, 2.7rem)',
              color: 'var(--color-forest-dark)',
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
            }}
          >
            {lang === 'hi' ? 'संगोष्ठी, व्याख्यान एवं अकादमिक भागीदारी' : 'Seminars, Addresses & Academic Moderation'}
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

        {/* Timeline Container */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem',
          }}
        >
          {/* Vertical Academic Timeline Guide Line */}
          <div
            style={{
              position: 'absolute',
              top: '10px',
              bottom: '10px',
              left: '20px',
              width: '2px',
              backgroundColor: 'var(--color-border)',
              display: 'none',
            }}
            className="timeline-guide"
            aria-hidden="true"
          />

          {data.engagements.map((item) => (
            <article
              key={item.id}
              className="academic-card"
              style={{
                backgroundColor: 'var(--color-ivory)',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                
                {/* Event Type & Date */}
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.6rem' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        backgroundColor: 'var(--color-forest)',
                        color: 'var(--color-ivory)',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        padding: '0.25rem 0.65rem',
                        borderRadius: '2px',
                        fontFamily: 'var(--font-sans)',
                      }}
                    >
                      <Calendar size={13} style={{ color: 'var(--color-gold)' }} />
                      <span>{item.dateFormatted[lang]}</span>
                    </span>

                    <span
                      style={{
                        fontSize: '0.82rem',
                        color: 'var(--color-gold-dark)',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {item.eventType[lang]}
                    </span>
                  </div>

                  {/* Academic Role Badge */}
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: 'var(--color-forest-dark)',
                      backgroundColor: 'rgba(170, 146, 94, 0.14)',
                      border: '1px solid rgba(170, 146, 94, 0.4)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '2px',
                    }}
                  >
                    <Award size={14} style={{ color: 'var(--color-gold-dark)' }} />
                    <span>{item.role[lang]}</span>
                  </span>
                </div>

                {/* Event Title */}
                <div>
                  <h3
                    style={{
                      fontSize: 'clamp(1.25rem, 2.2vw, 1.6rem)',
                      fontFamily: 'var(--font-devanagari)',
                      fontWeight: 700,
                      color: 'var(--color-forest-dark)',
                      lineHeight: 1.35,
                    }}
                  >
                    {item.title[lang]}
                  </h3>
                </div>

                {/* Institution & Organizers */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.88rem', color: 'var(--color-muted)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <MapPin size={15} style={{ color: 'var(--color-gold-dark)' }} />
                    <span>{item.institution[lang]}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Users size={15} style={{ color: 'var(--color-gold-dark)' }} />
                    <span><strong>{lang === 'hi' ? 'आयोजक:' : 'Organizers:'}</strong> {item.organizer[lang]}</span>
                  </div>
                </div>

                {/* Analytical Description & Contribution */}
                <p
                  className="prose-reading"
                  style={{
                    fontSize: '0.98rem',
                    color: 'var(--color-ink)',
                    lineHeight: 1.75,
                  }}
                >
                  {item.keySummary[lang]}
                </p>

                {/* Distinguished Participants / Dignitaries */}
                {item.distinguishedParticipants && (
                  <div
                    style={{
                      backgroundColor: 'var(--color-parchment)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '3px',
                      padding: '0.85rem 1.15rem',
                      fontSize: '0.85rem',
                      marginTop: '0.25rem',
                    }}
                  >
                    <div style={{ fontWeight: 700, color: 'var(--color-forest-dark)', marginBottom: '0.35rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {lang === 'hi' ? 'सत्र सह-प्रतिभागी एवं गणमान्य अतिथिगण:' : 'Key Session Dignitaries & Co-Panelists:'}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {item.distinguishedParticipants.map((part, pIdx) => (
                        <span
                          key={pIdx}
                          style={{
                            backgroundColor: 'var(--color-ivory)',
                            padding: '0.2rem 0.55rem',
                            borderRadius: '2px',
                            border: '1px solid var(--color-border)',
                            color: 'var(--color-ink)',
                            fontSize: '0.82rem',
                          }}
                        >
                          {part}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Verification Source Link */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                    paddingTop: '1rem',
                    marginTop: '0.5rem',
                    borderTop: '1px solid var(--color-border)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--color-muted)' }}>
                    <ShieldCheck size={14} style={{ color: 'var(--color-forest)' }} />
                    <span>
                      <strong>{lang === 'hi' ? 'अभिलेख स्रोत:' : 'Source:'}</strong> {item.sourceDocument[lang]}
                    </span>
                  </div>

                  {item.sourceUrl && (
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.82rem',
                        color: 'var(--color-forest)',
                        fontWeight: 600,
                        textDecoration: 'none',
                      }}
                    >
                      <span>{lang === 'hi' ? 'रिपोर्ट देखें' : 'View Report'}</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>

      <style>{`
        @media (min-width: 768px) {
          .timeline-guide {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
};
