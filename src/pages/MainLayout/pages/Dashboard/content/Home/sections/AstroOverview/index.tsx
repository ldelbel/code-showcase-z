import Chart from '@/shared/Chart';
import { useUserStore } from '@/store/useStore';
import AstroLabels from '@/utils/AstroLabels';
import { lang } from '@/utils/lang';
import HomeSection from '../../components/HomeSection';
import AstroIcon from '../../icons/AstroIcon';
import '../index.css';
import AstroGrid from './components/AstroGrid';

interface AstroOverviewSectionProps {
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

const AstroOverviewSection = ({
  setActiveSection,
}: AstroOverviewSectionProps) => {
  const { astrologyData } = useUserStore();

  return (
    <HomeSection
      icon={<AstroIcon />}
      title={AstroLabels['natal_chart'][lang]}
      link="/astro-overview"
      setActiveSection={setActiveSection}
      section="astro"
    >
      <div className="astro-container">
        <Chart wheel={astrologyData?.natalChart.wheelUrl || ''} />
        <AstroGrid
          columns={['Planet', 'Sign', 'House']}
          data={astrologyData?.natalChart.placements || []}
        />
      </div>
    </HomeSection>
  );
};

export default AstroOverviewSection;
