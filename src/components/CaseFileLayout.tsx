import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import type { PersonData } from "../data/types";
import RoastHero from "./RoastHero";
import CaseSummaryCard from "./CaseSummaryCard";
import EvidenceBoard from "./EvidenceBoard";
import AwardCards from "./AwardCards";
import Timeline from "./Timeline";
import VerdictCard from "./VerdictCard";
import PhotoGallery from "./PhotoGallery";
import GifWall from "./GifWall";
import HRWarningGenerator from "./HRWarningGenerator";
import RoastLevelSlider from "./RoastLevelSlider";
import PrintCertificateButton from "./PrintCertificateButton";
import BirthdayWishes from "./BirthdayWishes";
import ConfettiButton from "./ConfettiButton";
import OfficeBackdrop from "./OfficeBackdrop";

interface CaseFileLayoutProps {
  data: PersonData;
}

export default function CaseFileLayout({ data }: CaseFileLayoutProps) {
  return (
    <div className="relative min-h-screen px-4 py-10 sm:py-14">
      <OfficeBackdrop />
      <div className="relative z-10 max-w-4xl mx-auto">
        <Link
          to="/"
          className="focus-ring inline-flex items-center gap-2 text-office-cream/70 hover:text-gold mb-6 text-sm"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to the Department
        </Link>

        <RoastHero
          name={data.name}
          title={data.pageTitle}
          subtitle={data.heroSubtitle}
          imagePath={data.images[0]}
          badgeText={data.heroBadgeText}
        />

        <CaseSummaryCard
          name={data.caseSummary.name}
          charge={data.caseSummary.charge}
          status={data.caseSummary.status}
          riskLevel={data.caseSummary.riskLevel}
        />

        <EvidenceBoard evidenceItems={data.evidence} />
        <AwardCards awards={data.awards} />
        <Timeline events={data.timeline} />
        <VerdictCard verdict={data.verdict} />
        <PhotoGallery
          images={data.images}
          fallbackText="Photo evidence pending upload. The investigation continues."
        />
        <GifWall gifs={data.gifs} />
        <HRWarningGenerator warnings={data.hrWarnings} />
        <RoastLevelSlider levels={data.roastLevels} />
        <PrintCertificateButton name={data.name} />
        <BirthdayWishes person={data.slug} personName={data.name} />

        <div className="flex justify-center mb-16">
          <ConfettiButton label={data.ctaText} />
        </div>

        <p className="text-center text-xs text-office-cream/40 max-w-lg mx-auto pb-6">
          This page was created with more effort than most quarterly reports. Please do not use this
          evidence in an actual performance review.
        </p>
      </div>
    </div>
  );
}
