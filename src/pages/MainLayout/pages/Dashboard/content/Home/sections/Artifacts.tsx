import ArtifactBox from '@/shared/ArtifactBox';
import AstroLabels from '@/utils/AstroLabels';
import { lang } from '@/utils/lang';
import HomeSection from '../components/HomeSection';
import ArtifactsIcon from '../icons/ArtifactsIcon';
interface ArtifactsSectionProps {
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

const ArtifactsSection = ({ setActiveSection }: ArtifactsSectionProps) => {
  const artifactList = ['cosmic-mirror'];
  return (
    <HomeSection
      icon={<ArtifactsIcon />}
      title={AstroLabels['artifacts'][lang]}
      link="/artifacts"
      isCarousel
      total={2}
      setActiveSection={setActiveSection}
      section="artifacts"
    >
      {artifactList.map((item, index) => (
        <div
          key={`artifact-${item}-${index}`}
          className="relative px-2.5 pb-3 pt-4 flex flex-col items-center gap-1"
        >
          <ArtifactBox artifactName={item} />
        </div>
      ))}
    </HomeSection>
  );
};

export default ArtifactsSection;
