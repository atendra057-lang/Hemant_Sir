import React, { useState } from 'react';
import type { AcademicProfileData, Language, PublicationItem } from '../types/academic';
import { Copy, Check, ShieldCheck, Bookmark } from 'lucide-react';

interface PublicationsSectionProps {
  data: AcademicProfileData;
  lang: Language;
  onOpenLedger: () => void;
}

export const PublicationsSection: React.FC<PublicationsSectionProps> = ({
  data,
  lang,
  onOpenLedger,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [citationFormat, setCitationFormat] = useState<'apa' | 'mla' | 'chicago'>('apa');

  const handleCopyCitation = (pub: PublicationItem) => {
    const textToCopy = pub.citationFormats[citationFormat];
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section
      id="research"
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '2.5rem' }}>
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
            <span>02</span>
            <span>·</span>
            <span>{lang === 'hi' ? 'शोध एवं साहित्य' : 'Research & Scholarship'}</span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1rem' }}>
            <div>
              <h2
                style={{
                  fontSize: 'clamp(1.9rem, 3.5vw, 2.7rem)',
                  color: 'var(--color-forest-dark)',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 700,
                }}
              >
                {lang === 'hi' ? 'शोध पत्र एवं प्रकाशन' : 'Scholarly Publications & Research'}
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

            {/* Citation Format Switcher */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: 'var(--color-parchment)',
                border: '1px solid var(--color-border)',
                borderRadius: '3px',
                padding: '2px',
                fontSize: '0.8rem',
              }}
            >
              <span style={{ padding: '0 8px', color: 'var(--color-muted)', fontWeight: 600 }}>
                {lang === 'hi' ? 'उद्धरण प्रारूप:' : 'Citation:'}
              </span>
              {(['apa', 'mla', 'chicago'] as const).map((fmt) => (
                <button
                  key={fmt}
                  type="button"
                  onClick={() => setCitationFormat(fmt)}
                  style={{
                    background: citationFormat === fmt ? 'var(--color-forest)' : 'transparent',
                    color: citationFormat === fmt ? 'var(--color-ivory)' : 'var(--color-ink)',
                    border: 'none',
                    borderRadius: '2px',
                    padding: '3px 8px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    minHeight: '30px',
                  }}
                >
                  {fmt}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Verification Note Banner */}
        <div
          style={{
            backgroundColor: 'var(--color-parchment-light)',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-forest)',
            borderRadius: '3px',
            padding: '1rem 1.25rem',
            marginBottom: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <ShieldCheck size={20} style={{ color: 'var(--color-forest)', flexShrink: 0 }} />
            <div style={{ fontSize: '0.88rem', color: 'var(--color-ink-light)' }}>
              {lang === 'hi'
                ? 'सभी प्रकाशन विवरण मोतीलाल नेहरू कॉलेज के आधिकारिक वार्षिक प्रतिवेदन एवं संस्थागत अभिलेखों के आधार पर सत्यापित हैं।'
                : 'All bibliographic entries are documented through official college annual reports and institutional faculty records.'}
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenLedger}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-forest)',
              fontWeight: 600,
              fontSize: '0.82rem',
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
          >
            {lang === 'hi' ? 'सत्यापन स्रोत देखें' : 'Inspect Bibliographic Sources'}
          </button>
        </div>

        {/* Publication Cards List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {data.publications.map((pub) => (
            <article
              key={pub.id}
              className="academic-card"
              style={{
                backgroundColor: 'var(--color-parchment-light)',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                
                {/* Top Metadata Row: Year, Journal, Peer-reviewed tag */}
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.6rem' }}>
                    <span
                      style={{
                        backgroundColor: 'var(--color-forest)',
                        color: 'var(--color-ivory)',
                        fontWeight: 700,
                        fontSize: '0.82rem',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '2px',
                        fontFamily: 'var(--font-sans)',
                      }}
                    >
                      {pub.year}
                    </span>

                    <span
                      style={{
                        fontSize: '0.92rem',
                        fontWeight: 600,
                        color: 'var(--color-forest-dark)',
                        fontFamily: 'var(--font-serif)',
                      }}
                    >
                      {lang === 'hi' ? pub.journalHindi : pub.journal}
                    </span>

                    {pub.issn && (
                      <span
                        style={{
                          fontSize: '0.78rem',
                          color: 'var(--color-muted)',
                          fontFamily: 'monospace',
                          backgroundColor: 'var(--color-parchment)',
                          padding: '0.15rem 0.45rem',
                          borderRadius: '2px',
                        }}
                      >
                        ISSN: {pub.issn}
                      </span>
                    )}

                    {pub.pages && (
                      <span style={{ fontSize: '0.82rem', color: 'var(--color-muted)' }}>
                        {lang === 'hi' ? `पृष्ठ: ${pub.pages}` : `pp. ${pub.pages}`}
                      </span>
                    )}
                  </div>

                  {pub.peerReviewed && (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontSize: '0.75rem',
                        color: 'var(--color-forest)',
                        fontWeight: 600,
                        backgroundColor: 'rgba(25, 55, 45, 0.08)',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '2px',
                      }}
                    >
                      <Bookmark size={12} style={{ color: 'var(--color-gold-dark)' }} />
                      <span>{lang === 'hi' ? 'सहकर्मी-समीक्षित' : 'Peer-Reviewed'}</span>
                    </span>
                  )}
                </div>

                {/* Main Titles */}
                <div>
                  <h3
                    style={{
                      fontSize: 'clamp(1.25rem, 2.2vw, 1.65rem)',
                      fontFamily: 'var(--font-devanagari)',
                      fontWeight: 700,
                      color: 'var(--color-forest-dark)',
                      lineHeight: 1.35,
                      marginBottom: '0.25rem',
                    }}
                  >
                    {pub.title.hi}
                  </h3>

                  <div
                    style={{
                      fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                      fontFamily: 'var(--font-serif)',
                      fontStyle: 'italic',
                      color: 'var(--color-muted)',
                      lineHeight: 1.4,
                    }}
                  >
                    {pub.title.en}
                  </div>
                </div>

                {/* Analytical Abstract Summary */}
                <p
                  className="prose-reading"
                  style={{
                    fontSize: '0.98rem',
                    color: 'var(--color-ink-light)',
                    lineHeight: 1.7,
                    marginTop: '0.25rem',
                  }}
                >
                  {pub.abstractSummary[lang]}
                </p>

                {/* Thematic Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: '0.25rem' }}>
                  {pub.themes.map((theme, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.75rem',
                        backgroundColor: 'var(--color-ivory)',
                        border: '1px solid var(--color-border)',
                        color: 'var(--color-ink)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '2px',
                        fontFamily: 'var(--font-sans)',
                      }}
                    >
                      {theme[lang]}
                    </span>
                  ))}
                </div>

                {/* Bottom Source & Citation Row */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    paddingTop: '1.25rem',
                    marginTop: '0.5rem',
                    borderTop: '1px solid var(--color-border)',
                  }}
                >
                  {/* Verified Source Reference */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.8rem', color: 'var(--color-muted)' }}>
                    <ShieldCheck size={14} style={{ color: 'var(--color-gold-dark)' }} />
                    <span>
                      <strong>{lang === 'hi' ? 'स्रोत:' : 'Source:'}</strong> {pub.sourceRecord[lang]}
                    </span>
                  </div>

                  {/* Copy Citation Button */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <button
                      type="button"
                      onClick={() => handleCopyCitation(pub)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        backgroundColor: copiedId === pub.id ? 'var(--color-forest)' : 'transparent',
                        color: copiedId === pub.id ? 'var(--color-ivory)' : 'var(--color-forest)',
                        border: '1px solid var(--color-gold)',
                        padding: '0.4rem 0.85rem',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        borderRadius: '2px',
                        transition: 'var(--transition-gentle)',
                        minHeight: '38px',
                      }}
                      title="Copy formatted citation"
                    >
                      {copiedId === pub.id ? <Check size={14} /> : <Copy size={14} />}
                      <span>
                        {copiedId === pub.id
                          ? (lang === 'hi' ? 'उद्धरण कॉपी हुआ' : 'Citation Copied!')
                          : (lang === 'hi' ? `उद्धरण कॉपी करें (${citationFormat.toUpperCase()})` : `Copy ${citationFormat.toUpperCase()} Citation`)}
                      </span>
                    </button>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
