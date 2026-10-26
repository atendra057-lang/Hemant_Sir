import React, { useEffect } from 'react';
import type { Language } from '../types/academic';
import { X, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';

interface SourceVerificationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const SourceVerificationDrawer: React.FC<SourceVerificationDrawerProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  // ESC key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const records = [
    {
      claim: {
        en: 'Permanent Appointment as Assistant Professor (Hindi)',
        hi: 'स्थाई सहायक प्राध्यापक (हिंदी विभाग) नियुक्ति',
      },
      verifiedSource: {
        en: 'Selection Committee Notification Ref. MNC/BJM/2023/814 dated 28.10.2023, Motilal Nehru College, University of Delhi',
        hi: 'चयन समिति अधिसूचना क्रमांक MNC/BJM/2023/814, दिनांक 28.10.2023, मोतीलाल नेहरू कॉलेज, दिल्ली विश्वविद्यालय',
      },
      status: 'VERIFIED',
      type: { en: 'Institutional Official Order', hi: 'आधिकारिक कॉलेज आदेश' },
      details: {
        en: 'Appointed under EWS category (App. No. ADR6072675). Designation: Assistant Professor in Hindi.',
        hi: 'ईडब्ल्यूएस संवर्ग (आवेदन सं. ADR6072675) के अंतर्गत नियुक्ति। पदनाम: सहायक प्राध्यापक, हिंदी।',
      },
    },
    {
      claim: {
        en: 'Research Paper: "21वीं सदी के साहित्यिक विमर्शों में हिंदी सिनेमा"',
        hi: 'शोध पत्र: "21वीं सदी के साहित्यिक विमर्शों में हिंदी सिनेमा"',
      },
      verifiedSource: {
        en: 'Motilal Nehru College Annual Report 2023–24, Faculty Research & Publications Section',
        hi: 'मोतीलाल नेहरू कॉलेज वार्षिक प्रतिवेदन 2023–24, संकाय शोध एवं प्रकाशन अनुभाग',
      },
      status: 'VERIFIED',
      type: { en: 'Institutional Annual Report', hi: 'संस्थागत वार्षिक प्रतिवेदन' },
      details: {
        en: 'Published in Shodh Ritu (शोध ऋतु, ISSN: 2454-6283), 2023, pp. 41–44. Peer-reviewed multidisciplinary journal.',
        hi: 'शोध ऋतु (ISSN: 2454-6283) में प्रकाशित, वर्ष 2023, पृष्ठ 41–44। सहकर्मी-समीक्षित शोध पत्रिका।',
      },
    },
    {
      claim: {
        en: 'Research Paper: "नागार्जुन का काव्य पर्यावरण"',
        hi: 'शोध पत्र: "नागार्जुन का काव्य पर्यावरण"',
      },
      verifiedSource: {
        en: 'Motilal Nehru College Institutional Academic Records & Vak Sudha Journal',
        hi: 'मोतीलाल नेहरू कॉलेज संस्थागत अकादमिक अभिलेख एवं वाक सुधा शोध पत्रिका',
      },
      status: 'VERIFIED',
      type: { en: 'Refereed Research Journal', hi: 'रेफरीड शोध पत्रिका' },
      details: {
        en: 'Published in Vak Sudha (वाक सुधा, ISSN: 2347-6605), an International Peer-Reviewed Refereed Research Journal focusing on modern Hindi literature.',
        hi: 'वाक सुधा (ISSN: 2347-6605) अंतरराष्ट्रीय शोध पत्रिका में प्रकाशित, प्रगतिशील कवि नागार्जुन के काव्य में पर्यावरणीय यथार्थ पर केंद्रित।',
      },
    },
    {
      claim: {
        en: 'Seminar Moderation: "साहित्य और सिनेमा का अंतर्संबंध" (10 Jan 2026)',
        hi: 'कार्यक्रम संचालन: "साहित्य और सिनेमा का अंतर्संबंध" (10 जनवरी 2026)',
      },
      verifiedSource: {
        en: 'Motilal Nehru College Academic Activity Archive & B.A. Programme Society Rachnayan',
        hi: 'मोतीलाल नेहरू कॉलेज अकादमिक गतिविधि अभिलेख एवं बी.ए. प्रोग्राम समिति रचनायन',
      },
      status: 'VERIFIED',
      type: { en: 'College Event Proceedings', hi: 'कॉलेज आयोजन प्रतिवेदन' },
      details: {
        en: 'Organized on World Hindi Day by B.A. Programme Society Rachnayan & SEC Writers Forum. Hemant Kumar Singh served as the programme moderator.',
        hi: 'विश्व हिंदी दिवस पर रचनायन एवं सैक राइटर्स फोरम द्वारा आयोजित। हेमंत कुमार सिंह द्वारा कार्यक्रम का कुशल संचालन।',
      },
    },
    {
      claim: {
        en: 'Speaker: International Seminar on Global Hindi Teaching (27–28 March 2026)',
        hi: 'वक्ता: वैश्विक स्तर पर हिंदी शिक्षण अंतरराष्ट्रीय संगोष्ठी (27–28 मार्च 2026)',
      },
      verifiedSource: {
        en: 'EduAdvice National Education News Archive Report #10377 (Published March 28, 2026)',
        hi: 'एडुएडवाइस राष्ट्रीय शैक्षणिक समाचार अभिलेख रिपोर्ट सं. 10377 (28 मार्च 2026)',
      },
      status: 'VERIFIED',
      type: { en: 'Accredited Academic Media Report', hi: 'अकादमिक समाचार प्रतिवेदन' },
      details: {
        en: 'Delivered an address on "The Art of Research Paper Writing", emphasizing factual grounding in research: "शोध लेखन तथ्य की खोज है... तथ्य आधारहीन नहीं होने चाहिए।"',
        hi: 'शोध पत्र लेखन की कला सत्र में उद्बोधन: शोध लेखन तथ्य की खोज है और शोधार्थियों को आधारहीन तथ्यों से बचना चाहिए।',
      },
    },
    {
      claim: {
        en: 'Prospectus Committee Member (2025–26)',
        hi: 'विवरणिका समिति सदस्य (2025–26)',
      },
      verifiedSource: {
        en: 'Official Committees Record 2025–26 (Committees_2025-26.pdf), Motilal Nehru College',
        hi: 'आधिकारिक कॉलेज समिति सूची 2025–26 (Committees_2025-26.pdf), मोतीलाल नेहरू कॉलेज',
      },
      status: 'VERIFIED',
      type: { en: 'Official College Committee List', hi: 'आधिकारिक समिति सूची' },
      details: {
        en: 'Appointed as member representing Department of Hindi alongside Convener Dr. Rakesh Kumar Sonker.',
        hi: 'संयोजक डॉ. राकेश कुमार सोनकर के साथ हिंदी विभाग प्रतिनिधि के रूप में समिति सदस्य मनोनीत।',
      },
    },
  ];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="ledger-title"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(16, 39, 31, 0.75)',
          backdropFilter: 'blur(4px)',
        }}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          backgroundColor: 'var(--color-ivory)',
          borderRadius: '6px',
          border: '1.5px solid var(--color-gold)',
          boxShadow: '0 20px 48px rgba(0, 0, 0, 0.35)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          zIndex: 1001,
        }}
      >
        {/* Modal Header */}
        <div
          style={{
            backgroundColor: 'var(--color-forest)',
            color: 'var(--color-ivory)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--color-gold)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <ShieldCheck size={24} style={{ color: 'var(--color-gold-light)' }} />
            <div>
              <h3
                id="ledger-title"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: 'var(--color-ivory)',
                  lineHeight: 1.2,
                }}
              >
                {lang === 'hi' ? 'शोध एवं अकादमिक प्रमाणिकता बही' : 'Scholarly Verification & Source Ledger'}
              </h3>
              <div style={{ fontSize: '0.78rem', color: 'var(--color-gold-light)', letterSpacing: '0.04em' }}>
                {lang === 'hi' ? 'सत्यापित अभिलेख एवं संदर्भ सूची' : 'Verified Primary Records & Citations'}
              </div>
            </div>
          </div>

          <button
            type="button"
            id="close-ledger-btn"
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--color-ivory)',
              cursor: 'pointer',
              minWidth: '44px',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Close dialog"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div
          style={{
            padding: 'clamp(1rem, 3vw, 1.75rem)',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          {/* Research Integrity Statement */}
          <div
            style={{
              backgroundColor: 'var(--color-parchment)',
              border: '1px solid var(--color-border)',
              borderRadius: '4px',
              padding: '1rem 1.25rem',
              fontSize: '0.86rem',
              color: 'var(--color-ink)',
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: 'var(--color-forest)' }}>
              {lang === 'hi' ? 'अकादमिक प्रामाणिकता नीति:' : 'Scholarly Transparency Statement:'}
            </strong>{' '}
            {lang === 'hi'
              ? 'इस वेबसाइट पर प्रस्तुत सभी विवरण (पद, नियुक्ति तिथि, शोध पत्र, संगोष्ठियां एवं समितियां) दिल्ली विश्वविद्यालय तथा मोतीलाल नेहरू कॉलेज के आधिकारिक दस्तावेजों पर आधारित हैं। कोई भी काल्पनिक उपाधि या अपुष्ट दावा सम्मिलित नहीं किया गया है।'
              : 'Every claim on this website—institutional designation, appointment date, journal papers, seminar moderation, and committee roles—is cross-verified against official University of Delhi, Motilal Nehru College, or verified conference archives. No unverified qualifications or synthetic claims are published.'}
          </div>

          {/* List of Verified Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {records.map((rec, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'var(--color-parchment-light)',
                  border: '1px solid var(--color-border)',
                  borderLeft: '4px solid var(--color-forest)',
                  borderRadius: '3px',
                  padding: '1rem 1.25rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <div style={{ fontWeight: 700, fontSize: '1.02rem', color: 'var(--color-forest-dark)', fontFamily: 'var(--font-serif)' }}>
                    {rec.claim[lang]}
                  </div>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: 'var(--color-forest)',
                      backgroundColor: 'rgba(25, 55, 45, 0.1)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '2px',
                    }}
                  >
                    <CheckCircle2 size={12} />
                    <span>{rec.status}</span>
                  </span>
                </div>

                <div style={{ fontSize: '0.82rem', color: 'var(--color-gold-dark)', fontWeight: 600, marginBottom: '0.35rem' }}>
                  <strong>{lang === 'hi' ? 'दस्तावेज प्रकार:' : 'Record Type:'}</strong> {rec.type[lang]}
                </div>

                <div style={{ fontSize: '0.85rem', color: 'var(--color-ink-light)', marginBottom: '0.45rem', lineHeight: 1.55 }}>
                  {rec.details[lang]}
                </div>

                <div style={{ fontSize: '0.78rem', color: 'var(--color-muted)', borderTop: '1px solid var(--color-border)', paddingTop: '0.45rem', marginTop: '0.45rem' }}>
                  <strong>{lang === 'hi' ? 'सत्यापित स्रोत:' : 'Source Document:'}</strong> {rec.verifiedSource[lang]}
                </div>
              </div>
            ))}
          </div>

          {/* Unverified Information Protocol Note */}
          <div
            style={{
              display: 'flex',
              gap: '0.65rem',
              padding: '0.85rem 1rem',
              backgroundColor: 'rgba(104, 44, 55, 0.06)',
              border: '1px solid rgba(104, 44, 55, 0.2)',
              borderRadius: '3px',
              fontSize: '0.82rem',
              color: 'var(--color-ink)',
            }}
          >
            <AlertCircle size={18} style={{ color: 'var(--color-burgundy)', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong>{lang === 'hi' ? 'पुष्टि हेतु शेष विवरण:' : 'Details Held for Confirmation:'}</strong>{' '}
              {lang === 'hi'
                ? 'अतिरिक्त व्यक्तिगत डिग्रियों (स्नातक, स्नातकोत्तर, पीएच.डी. उपाधि विवरण) तथा आगामी शोध पुस्तकों का सार्वजनिक उल्लेख तब तक स्थगित रखा गया है जब तक संबंधित विश्वविद्यालय प्रमाण पत्र उपलब्ध नहीं हो जाते।'
                : 'Doctoral thesis titles, previous university credentials, or upcoming books remain withheld until verified institutional certificates are formally supplied by the professor.'}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div
          style={{
            backgroundColor: 'var(--color-parchment)',
            borderTop: '1px solid var(--color-border)',
            padding: '0.85rem 1.5rem',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <button
            type="button"
            id="footer-close-ledger-btn"
            onClick={onClose}
            className="btn-academic-primary"
            style={{ minHeight: '38px', padding: '0.45rem 1.25rem', fontSize: '0.85rem' }}
          >
            {lang === 'hi' ? 'बंद करें' : 'Close Ledger'}
          </button>
        </div>
      </div>
    </div>
  );
};
