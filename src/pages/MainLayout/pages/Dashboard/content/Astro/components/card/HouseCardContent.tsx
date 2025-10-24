import { ReportWithTitle } from '@/context/ReportContext';
import { useReport } from '@/hooks/useReport';
import { AstroReport } from '@/utils/convertToHTML';
import { getReportModalHouseTitle } from '@/utils/getReportModalTitles';
import { HouseKVData } from '@zodic/shared/types';
import CardContentBase from './CardContentBase';

interface HouseCardContentProps {
  house: HouseKVData;
  lang?: 'en-us' | 'pt-br';
  isUnlocked: boolean;
}

const HouseCardContent = ({
  house,
  lang = 'en-us',
  isUnlocked,
}: HouseCardContentProps) => {
  const { openReport } = useReport();
  const { house: houseNumber, report, description, sign } = house;

  console.log('HouseCardContent ->', house);

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
    console.error('Error parsing report for house:', error);
    return (
      <div className="text-whitesmoke text-base font-medium">
        Error Loading Report
      </div>
    );
  }

  const title = getReportModalHouseTitle(lang, { house: houseNumber, sign });

  const reports: ReportWithTitle[] = [
    {
      title,
      report: parsedReport,
    },
  ];

  const handleOpenModal = () => {
    if (reports.length === 0) {
      console.warn('No valid reports available for this house');
      return;
    }
    openReport(reports);
  };

  return (
    <CardContentBase
      description={description || 'No description available'}
      onOpenModal={handleOpenModal}
      isUnlocked={isUnlocked}
    />
  );
};

export default HouseCardContent;
