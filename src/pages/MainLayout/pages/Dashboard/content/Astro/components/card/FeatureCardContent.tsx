import { ReportWithTitle } from '@/context/ReportContext';
import { useReport } from '@/hooks/useReport';
import { AstroReport } from '@/utils/convertToHTML';
import { getReportModalFeatureTitles } from '@/utils/getReportModalTitles';
import {
  ElementsKVData,
  HemisphereKVData,
  ModesKVData,
  MoonPhaseKVData,
} from '@zodic/shared/types';
import CardContentBase from './CardContentBase';

type FeatureData =
  | ElementsKVData
  | ModesKVData
  | MoonPhaseKVData
  | HemisphereKVData;

interface FeatureCardContentProps<T extends FeatureData> {
  feature: T;
  lang?: 'en-us' | 'pt-br';
}

const FeatureCardContent = <T extends FeatureData>({
  feature,
  lang = 'en-us',
}: FeatureCardContentProps<T>) => {
  const { openReport } = useReport();
  const { description } = feature;

  const reports: ReportWithTitle[] = [];

  try {
    if ('moon_phase_id' in feature) {
      const moonPhase = feature as MoonPhaseKVData;
      if (moonPhase.report) {
        const parsedReport = JSON.parse(moonPhase.report) as AstroReport;
        const [title] = getReportModalFeatureTitles(lang, {
          type: 'moon_phase',
          name: moonPhase.name,
        });
        reports.push({ title, report: parsedReport });
      }
    } else if ('modes' in feature) {
      const modes = feature as ModesKVData;
      if (modes.report) {
        const parsedReport = JSON.parse(modes.report) as AstroReport;
        const dominantIndex = modes.dominant_mode_id - 1;
        const dominantMode =
          modes.modes[dominantIndex]?.name.toLowerCase() || 'unknown';
        const [title] = getReportModalFeatureTitles(lang, {
          type: 'modes',
          modeName: dominantMode,
        });
        reports.push({ title, report: parsedReport });
      }
    } else if ('elements' in feature) {
      const elements = feature as ElementsKVData;
      if (elements.report) {
        const parsedReport = JSON.parse(elements.report) as AstroReport;
        const titles = getReportModalFeatureTitles(lang, {
          type: 'elements',
          elements: elements.elements,
          dominant_element_id: elements.dominant_element_id,
        });
        titles.forEach((title) => {
          reports.push({ title, report: parsedReport });
        });
      }
    } else if ('east_west' in feature) {
      const hemisphere = feature as HemisphereKVData;

      if (hemisphere.north_south.report) {
        const parsedNorthReport = JSON.parse(
          hemisphere.north_south.report
        ) as AstroReport;
        const [northTitle] = getReportModalFeatureTitles(lang, {
          type: 'hemisphere',
          hemisphere: 'north_south',
          id: hemisphere.north_south.id === 1 ? 'north' : 'south',
        });
        reports.push({ title: northTitle, report: parsedNorthReport });
      }

      if (hemisphere.east_west.report) {
        const parsedEastReport = JSON.parse(
          hemisphere.east_west.report
        ) as AstroReport;
        const [eastTitle] = getReportModalFeatureTitles(lang, {
          type: 'hemisphere',
          hemisphere: 'east_west',
          id: hemisphere.east_west.id === 1 ? 'east' : 'west',
        });
        reports.push({ title: eastTitle, report: parsedEastReport });
      }
    }
  } catch (error) {
    console.error('Error parsing feature report:', error);
    return (
      <div className="text-whitesmoke text-base font-medium">
        Error Loading Report
      </div>
    );
  }

  if (reports.length === 0) {
    return (
      <div className="text-whitesmoke text-base font-medium">
        No Content Available
      </div>
    );
  }

  const handleOpenModal = () => {
    openReport(reports);
  };

  return (
    <CardContentBase
      isUnlocked={true}
      description={description || 'No description available'}
      onOpenModal={handleOpenModal}
    />
  );
};

export default FeatureCardContent;
