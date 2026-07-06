export interface CaseSummary {
  name: string;
  charge: string;
  status: string;
  riskLevel: string;
}

export interface TimelineEvent {
  label: string;
  text: string;
}

export interface GifEntry {
  title: string;
  url: string;
}

export interface RoastLevelEntry {
  level: number;
  label: string;
  line: string;
}

export interface PersonData {
  name: string;
  slug: "sammy" | "martin";
  pageTitle: string;
  heroSubtitle: string;
  heroBadgeText: string;
  caseSummary: CaseSummary;
  evidence: string[];
  awards: string[];
  timeline: TimelineEvent[];
  verdict: string;
  ctaText: string;
  hrWarnings: string[];
  roastLevels: RoastLevelEntry[];
  gifs: GifEntry[];
  images: string[];
}
