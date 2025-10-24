
import { ReportWithTitle } from '@/context/ReportContext'; 
import { useReport } from '@/hooks/useReport'; 
import { AstroReport } from '@/utils/convertToHTML'; 
import { AdvancedPlacementKVData, CorePlanetKVData } from '@zodic/shared/types';
import CardContentBase from './CardContentBase'; 
import { getReportModalPlacementTitles } from '@/utils/getReportModalTitles';

interface PlacementCardContentProps {
  placement: CorePlanetKVData | AdvancedPlacementKVData; 
  lang?: 'en-us' | 'pt-br'; 
  isUnlocked?: boolean;
}

const PlacementCardContent = ({
  placement,
  lang = 'en-us',
  isUnlocked,
}: PlacementCardContentProps) => {
  const { openReport } = useReport();
  const { name, sign, house, signReport, houseReport, description } = placement;

  
  if (!signReport) {
    return (
      <div className="text-whitesmoke text-base font-medium">
        No Content Available
      </div>
    );
  }

  
  let parsedSignReport: AstroReport;
  let parsedHouseReport: AstroReport | null = null;

  try {
    parsedSignReport = JSON.parse(signReport) as AstroReport;
  } catch (error) {
    console.error('Error parsing signReport:', error);
    return (
      <div className="text-whitesmoke text-base font-medium">
        Error Loading Report
      </div>
    );
  }

  if (houseReport) {
    try {
      parsedHouseReport = JSON.parse(houseReport) as AstroReport;
    } catch (error) {
      console.error('Error parsing houseReport:', error);
      
    }
  }

  
  const titles = getReportModalPlacementTitles(lang, { name, sign, house });

  
  const reports: ReportWithTitle[] = [
    {
      title: titles[0],
      report: parsedSignReport,
    },
  ];

  if (parsedHouseReport && Object.keys(parsedHouseReport).length > 0) {
    reports.push({
      title: titles[1],
      report: parsedHouseReport,
    });
  }

  const handleOpenModal = () => {
    if (reports.length === 0) {
      console.warn('No valid reports available for this placement');
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

export default PlacementCardContent;
