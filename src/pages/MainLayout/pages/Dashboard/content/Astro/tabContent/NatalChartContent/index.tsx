import Box from '@/shared/Box';
import Chart from '@/shared/Chart';
import Title from '@/shared/Title';
import AstroLabels from '@/utils/AstroLabels';
import { lang } from '@/utils/lang';
import { useState } from 'react';
import { NatalChartData } from '../../../types';
import AstroDataGrid from '../../components/AstroDataGrid';
import Card from '../../components/Card';
import FeatureCardContent from '../../components/card/FeatureCardContent';
import ElementsHeader from './components/ElementsHeader';
import HemisphereHeader from './components/HemispheresHeader';
import ModesHeader from './components/ModesHeader';
import MoonPhaseHeader from './components/MoonPhasesHeader';

interface NatalChartContentProps {
  natalChart: NatalChartData;
}

const NatalChartContent = ({ natalChart }: NatalChartContentProps) => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const handleExpand = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const elementData = natalChart.features.elements;
  const modeData = natalChart.features.modes;
  const moonphaseData = natalChart.features.moon_phase;
  const hemisphereData = natalChart.features.hemisphere;

  console.log('Natal Chart WheelUrl: ', natalChart.wheelUrl);

  return (
    <div className="birth-chart-section mt-10 pb-40">
      <Title title={AstroLabels['natal_chart'][lang]} />
      <div className="mt-5 flex w-full justify-center">
        <Chart wheel={natalChart.wheelUrl} />
      </div>
      <Box classNameInner="w-[90vw] p-1" className="mt-10">
        <AstroDataGrid
          planets={natalChart.placements.filter(
            (item) => item.type === 'planet'
          )}
          keyPoints={natalChart.placements.filter(
            (item) => item.type === 'key_point'
          )}
          karmicPoints={natalChart.placements.filter(
            (item) => item.type === 'karmic_point'
          )}
          arabicParts={natalChart.placements.filter(
            (item) => item.type === 'arabic_part'
          )}
        />
      </Box>
      <div className="mt-16">
        <Card
          data={elementData}
          isExpanded={expandedCard === elementData.id}
          onExpand={handleExpand}
          renderHeader={() => <ElementsHeader element={elementData} />}
          renderDetails={() => (
            <FeatureCardContent feature={elementData} lang={lang} />
          )}
          title={AstroLabels[elementData.id][lang]}
        />
      </div>
      <div className="mt-16">
        <Card
          data={modeData}
          isExpanded={expandedCard === modeData.id}
          onExpand={handleExpand}
          renderHeader={() => <ModesHeader mode={modeData} />}
          renderDetails={() => (
            <FeatureCardContent feature={modeData} lang={lang} />
          )}
          title={AstroLabels[modeData.id][lang]}
        />
      </div>
      <div className="mt-16">
        <Card
          data={moonphaseData}
          isExpanded={expandedCard === moonphaseData.id}
          onExpand={handleExpand}
          renderHeader={() => <MoonPhaseHeader moonPhase={moonphaseData} />}
          renderDetails={() => (
            <FeatureCardContent feature={moonphaseData} lang={lang} />
          )}
          title={AstroLabels[moonphaseData.id][lang]}
        />
      </div>
      <div className="mt-16">
        <Card
          data={hemisphereData}
          isExpanded={expandedCard === hemisphereData.id}
          onExpand={handleExpand}
          renderHeader={() => <HemisphereHeader hemisphere={hemisphereData} />}
          renderDetails={() => (
            <FeatureCardContent feature={hemisphereData} lang={lang} />
          )}
          title={AstroLabels[hemisphereData.id][lang]}
        />
      </div>
    </div>
  );
};

export default NatalChartContent;
