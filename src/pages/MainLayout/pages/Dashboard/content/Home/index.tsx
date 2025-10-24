import ArtifactsSection from './sections/Artifacts';
import AstroOverviewSection from './sections/AstroOverview';
import ConceptsSection from './sections/Concepts';

interface HomeProps {
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

const Home = ({ setActiveSection }: HomeProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 pt-14 pb-24">
      <AstroOverviewSection setActiveSection={setActiveSection} />
      <ConceptsSection setActiveSection={setActiveSection} />
      <ArtifactsSection setActiveSection={setActiveSection} />
    </div>
  );
};

export default Home;
