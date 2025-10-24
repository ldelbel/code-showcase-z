import ReportModal from '@/shared/ConceptModal/ReportModal';
import { useUserStore } from '@/store/useStore';
import { addIdToFeatures } from '@/utils/addIdToFeatures';
import { getHouseTheme } from '@/utils/houseThemes';
import { lang } from '@/utils/lang';
import { getPlacementTheme } from '@/utils/placementThemes';
import planetImageMap from '@/utils/planetImageMap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TabsContainer from '../../components/TabsContainer';
import TabsNavigation from '../../components/TabsNavigation';
import AdvancedContent from './tabContent/AdvancedContent';
import AspectsContent from './tabContent/AspectsContent';
import HousesContent from './tabContent/HousesContent';
import NatalChartContent from './tabContent/NatalChartContent';
import PlanetsContent from './tabContent/PlanetsContent';

const translations = {
  'pt-br': {
    unlockPremiumContent: 'DESBLOQUEAR CONTEÚDO PREMIUM'
  },
  'en-us': {
    unlockPremiumContent: 'UNLOCK PREMIUM CONTENT'
  }
};

const t = translations[lang === 'pt-br' ? 'pt-br' : 'en-us'];

const AstroOverview = () => {
  const astrologyData = useUserStore((state) => state.astrologyData);

  const [activeTab, setActiveTab] = useState('natal_chart');
  const navigate = useNavigate();
  const { userProducts } = useUserStore()

  const premiumAstrologyReport = userProducts.find(up => up.productSlug === "premium-astrology-reports");
  const isUnlocked = premiumAstrologyReport?.status === 'unlocked';

  console.log('astrologyData', astrologyData);
  if (
    !astrologyData ||
    !astrologyData.natalChart ||
    !astrologyData.corePlanets ||
    !astrologyData.advancedPlacements ||
    !astrologyData.houses ||
    !astrologyData.aspects
  ) {
    navigate('/setup');
    return <div>Pending Setup</div>;
  }

  const natalChartData = astrologyData.natalChart;
  const natalChart = {
    ...natalChartData,
    features: addIdToFeatures(natalChartData.features),
  };

  console.log("NatalChart.features", natalChart.features)

  const planetsData = astrologyData.corePlanets;
  const planets = planetsData.map((planet) => ({
    ...planet,
    id: planet.name,
    title: getPlacementTheme(planet.name)[lang],
    image: planetImageMap[planet.name],
  }));

  const housesData = astrologyData?.houses;
  const houses = housesData.map((house) => ({
    ...house,
    id: house.house.toString(),
    title: getHouseTheme(house.house)[lang],
  }));

  const advancedData = astrologyData?.advancedPlacements;
  const advanced = advancedData.map((adPlanet) => ({
    ...adPlanet,
    id: adPlanet.name,
    title: getPlacementTheme(adPlanet.name)[lang],
  }));

  const aspectsData = astrologyData?.aspects;
  const aspects = aspectsData.map((aspect) => ({
    ...aspect,
    id: `${aspect.aspectingPlanet}-${aspect.type}-${aspect.aspectedPlanet}`,
  }));

  return (
    <div className="relative">
      <TabsContainer>
        <TabsNavigation
          tabs={['natal_chart', 'planets', 'advanced', 'houses', 'aspects']}
          activeTab={activeTab}
          onChangeTab={setActiveTab}
          isUnlocked={isUnlocked}
        />
      </TabsContainer>

      {activeTab === 'natal_chart' && (
        <NatalChartContent natalChart={natalChart} />
      )}
      {activeTab === 'planets' && <PlanetsContent planets={planets} />}
      {activeTab === 'advanced' && <AdvancedContent placements={advanced} isUnlocked={isUnlocked} buttonText={t.unlockPremiumContent} />}
      {activeTab === 'houses' && <HousesContent houses={houses} isUnlocked={isUnlocked} buttonText={t.unlockPremiumContent} />}
      {activeTab === 'aspects' && <AspectsContent aspects={aspects} isUnlocked={isUnlocked} buttonText={t.unlockPremiumContent} />}
      <ReportModal />
    </div>
  );
};

export default AstroOverview;
