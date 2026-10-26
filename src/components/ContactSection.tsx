import React from 'react';
import type { AcademicProfileData, Language } from '../types/academic';
import { MapPin, Landmark, ExternalLink, ShieldCheck, Clock } from 'lucide-react';

interface ContactSectionProps {
  data: AcademicProfileData;
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ data, lang }) => {
  return (
    <section
      id="contact"
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
            <span>05</span>
            <span>·</span>
            <span>{lang === 'hi' ? 'अकादमिक संपर्क' : 'Academic Correspondence'}</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.9rem, 3.5vw, 2.7rem)',
              color: 'var(--color-forest-dark)',
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
            }}
          >
            {lang === 'hi' ? 'संस्थागत संपर्क एवं परामर्श' : 'Institutional Address & Inquiries'}
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

        {/* Content Layout */}
        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Official Institutional Address & Directory */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p
              className="prose-reading"
              style={{
                fontSize: '1.05rem',
                color: 'var(--color-ink-light)',
                lineHeight: 1.75,
              }}
            >
              {lang === 'hi'
                ? 'शोध विमर्श, अकादमिक परिचर्चा तथा छात्र परामर्श हेतु मोतीलाल नेहरू कॉलेज के हिंदी विभाग में आधिकारिक संपर्क किया जा सकता है। संस्थागत शिष्टाचार के अंतर्गत व्यक्तिगत पत्राचार कॉलेज माध्यम से ही स्वीकार्य है।'
                : 'For scholarly dialogues, research queries, and student consultations, correspondence is welcomed at the Department of Hindi, Motilal Nehru College, University of Delhi. In accordance with university academic norms, communications are routed through institutional channels.'}
            </p>

            {/* Address Card */}
            <div
              className="academic-card"
              style={{
                backgroundColor: 'var(--color-ivory)',
                border: '1px solid var(--color-border)',
                borderLeft: '4px solid var(--color-gold)',
                borderRadius: '4px',
                padding: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <MapPin size={24} style={{ color: 'var(--color-gold-dark)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: 'var(--color-forest-dark)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {lang === 'hi' ? 'विभागीय कार्यालय' : 'Departmental Office'}
                  </h3>
                  <div style={{ fontSize: '0.94rem', color: 'var(--color-ink)', lineHeight: 1.6 }}>
                    <strong>{data.department[lang]}</strong><br />
                    {data.institution[lang]} ({data.university[lang]})<br />
                    {lang === 'hi'
                      ? 'बेनिटो हुआरेज़ मार्ग, साउथ कैंपस, नई दिल्ली 110021, भारत'
                      : 'Benito Juarez Marg, South Campus, New Delhi 110021, India'}
                  </div>
                </div>
              </div>
            </div>

            {/* Visiting & Consultation Hours Card */}
            <div
              className="academic-card"
              style={{
                backgroundColor: 'var(--color-ivory)',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                padding: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Clock size={24} style={{ color: 'var(--color-forest)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: 'var(--color-forest-dark)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {lang === 'hi' ? 'अकादमिक परामर्श समय' : 'Academic Consultation'}
                  </h3>
                  <div style={{ fontSize: '0.92rem', color: 'var(--color-ink-light)', lineHeight: 1.6 }}>
                    {lang === 'hi'
                      ? 'कॉलेज सत्र के दौरान कार्य दिवसों में पूर्व निर्धारित समय अनुसार हिंदी विभाग कक्ष में विद्यार्थियों एवं शोधार्थियों के लिए परामर्श उपलब्ध।'
                      : 'Consultations for undergraduate students and researchers are conducted during academic teaching terms on college working days at the Department of Hindi.'}
                  </div>
                </div>
              </div>
            </div>

            {/* Official Directory Link Button */}
            <div>
              <a
                href="https://www.mlncdu.ac.in/Hindi.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-academic-secondary"
                style={{ display: 'inline-flex', gap: '0.5rem', alignItems: 'center' }}
              >
                <Landmark size={18} />
                <span>{lang === 'hi' ? 'कॉलेज आधिकारिक संकाय सूची देखें' : 'View College Official Faculty Directory'}</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Right Column: Academic Correspondence Protocol */}
          <div
            style={{
              backgroundColor: 'var(--color-ivory)',
              border: '1px solid var(--color-border)',
              borderRadius: '4px',
              padding: 'clamp(1.5rem, 3vw, 2rem)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.75rem' }}>
              <ShieldCheck size={20} style={{ color: 'var(--color-gold-dark)' }} />
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.18rem',
                  fontWeight: 700,
                  color: 'var(--color-forest-dark)',
                }}
              >
                {lang === 'hi' ? 'पत्राचार एवं शिष्टाचार निर्देशिका' : 'Correspondence & Privacy Protocol'}
              </h3>
            </div>

            <div style={{ fontSize: '0.9rem', color: 'var(--color-ink-light)', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <p>
                {lang === 'hi'
                  ? 'अकादमिक सत्यनिष्ठा और गोपनीयता नियमों के अनुसार, इस आधिकारिक पृष्ठ पर निजी संपर्क विवरण (जैसे व्यक्तिगत फोन नंबर अथवा निजी ईमेल) प्रकाशित नहीं किए गए हैं।'
                  : 'In compliance with academic privacy norms and professional integrity, personal phone numbers and unverified private contact channels are intentionally omitted.'}
              </p>

              <p>
                {lang === 'hi'
                  ? 'संगोष्ठी आमंत्रण, शोध पत्र समीक्षा अथवा संस्थागत संवाद हेतु महाविद्यालय के आधिकारिक पत्राचार पते पर प्रेषित करें:'
                  : 'For seminar invitations, peer review requests, or institutional inquiries, correspondence should be addressed to:'}
              </p>

              <div
                style={{
                  backgroundColor: 'var(--color-parchment-light)',
                  padding: '1rem',
                  borderRadius: '3px',
                  border: '1px solid var(--color-border)',
                  fontSize: '0.85rem',
                  fontFamily: 'monospace',
                  color: 'var(--color-forest-dark)',
                }}
              >
                <strong>The Principal / Department of Hindi</strong><br />
                Motilal Nehru College, University of Delhi<br />
                Benito Juarez Marg, New Delhi 110021<br />
                Website: mlncdu.ac.in
              </div>

              <div style={{ fontSize: '0.82rem', color: 'var(--color-muted)', fontStyle: 'italic', marginTop: '0.25rem' }}>
                {lang === 'hi'
                  ? 'छात्र अपनी कक्षाओं एवं समय-सारणी संबंधी जानकारी हेतु सीधे विभागीय सूचना पट्ट का अवलोकन करें।'
                  : 'Students seeking timetable or tutorial schedules are advised to consult the Departmental Notice Board.'}
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 960px) {
          .contact-grid {
            grid-template-columns: 1.2fr 0.8fr;
          }
        }
      `}</style>
    </section>
  );
};
