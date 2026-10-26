export type Language = 'en' | 'hi';

export interface BilingualText {
  en: string;
  hi: string;
}

export interface PublicationItem {
  id: string;
  title: BilingualText;
  journal: string;
  journalHindi: string;
  issn?: string;
  year: number;
  pages?: string;
  volume?: string;
  issue?: string;
  peerReviewed: boolean;
  abstractSummary: BilingualText;
  themes: BilingualText[];
  sourceRecord: BilingualText;
  sourceUrl?: string;
  citationFormats: {
    apa: string;
    mla: string;
    chicago: string;
  };
}

export interface AcademicEngagement {
  id: string;
  date: string;
  dateFormatted: BilingualText;
  title: BilingualText;
  eventType: BilingualText;
  role: BilingualText;
  organizer: BilingualText;
  institution: BilingualText;
  keySummary: BilingualText;
  distinguishedParticipants?: string[];
  sourceDocument: BilingualText;
  sourceUrl?: string;
}

export interface CommitteeService {
  id: string;
  committeeName: BilingualText;
  role: BilingualText;
  tenure: string;
  institution: BilingualText;
  sourceDocument: BilingualText;
}

export interface TeachingArea {
  id: string;
  title: BilingualText;
  level: BilingualText;
  description: BilingualText;
}

export interface AcademicProfileData {
  name: BilingualText;
  title: BilingualText;
  department: BilingualText;
  institution: BilingualText;
  university: BilingualText;
  appointmentNotification: {
    refNo: string;
    date: string;
    status: BilingualText;
    category: string;
    verifiedSource: BilingualText;
  };
  officeAddress: BilingualText;
  shortIntro: BilingualText;
  extendedBio: BilingualText[];
  scholarlyApproach: BilingualText;
  publications: PublicationItem[];
  engagements: AcademicEngagement[];
  committees: CommitteeService[];
  teachingAreas: TeachingArea[];
  coreResearchThemes: BilingualText[];
}
