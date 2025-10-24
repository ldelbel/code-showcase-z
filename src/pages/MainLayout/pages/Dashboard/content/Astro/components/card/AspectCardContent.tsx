import { ReportWithTitle } from '@/context/ReportContext';
import { useReport } from '@/hooks/useReport';
import { AstroReport } from '@/utils/convertToHTML';
import { getReportModalAspectTitle } from '@/utils/getReportModalTitles';
import { AspectKVData } from '@zodic/shared/types';
import CardContentBase from './CardContentBase';

interface AspectCardContentProps {
  aspect: AspectKVData;
  lang?: 'en-us' | 'pt-br';
  isUnlocked: boolean;
}

const AspectCardContent = ({
  aspect,
  isUnlocked,
  lang = 'en-us',
}: AspectCardContentProps) => {
  const { openReport } = useReport();
  const { aspectingPlanet, aspectedPlanet, type, report } = aspect;

  if (!report) {
    return (
      <div className="text-whitesmoke text-base font-medium">
        No Content Available
      </div>
    );
  }

  let parsedReport: AstroReport;

  try {
    parsedReport = JSON.parse(report) as AstroReport;
  } catch (error) {
    console.error('Error parsing aspectReport:', error);
    return (
      <div className="text-whitesmoke text-base font-medium">
        Error Loading Report
      </div>
    );
  }

  const title = getReportModalAspectTitle(lang, {
    aspectingPlanet,
    aspectedPlanet,
    type,
  });

  const reports: ReportWithTitle[] = [
    {
      title: title,
      report: parsedReport,
    },
  ];

  const handleOpenModal = () => {
    if (reports.length === 0) {
      console.warn('No valid reports available for this aspect');
      return;
    }
    openReport(reports);
  };

  return (
    <CardContentBase
      description={''}
      onOpenModal={handleOpenModal}
      isUnlocked={isUnlocked}
    />
  );
};

export default AspectCardContent;
