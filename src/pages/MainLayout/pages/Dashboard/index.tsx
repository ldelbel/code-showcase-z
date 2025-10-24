import {
  useFetchAstrologyData,
  useFetchConcepts,
  useFetchUserConcepts,
  useProducts,
  useUserProducts,
} from '@/api/hooks';
import { useFetchCosmicMirror } from '@/api/hooks/artifacts';
import { ModalProvider } from '@/context/ModalContext';
import { useModal } from '@/hooks/useModal';
import { mockConceptsWithComposition } from '@/pages/mock';
import CommercialArtifactModal from '@/shared/ArtifactModal/CommercialArtifactModal';
import UserArtifactModal from '@/shared/ArtifactModal/UserArtifactModal';
import LoadingSpinner from '@/shared/LoadingSpinner';
import { useUserStore } from '@/store/useStore';
import { useEffect, useState } from 'react';
import DashboardHeader from './components/DashboardHeader';
import Artifacts from './content/Artifacts';
import AstroOverview from './content/Astro';
import Concepts from './content/Concepts';
import Home from './content/Home';
import { CompositionItem } from './content/types';
import { astrologyDataMock } from './mock';

const DashboardContent = () => {
  const { astrologyData, concepts, userArtifacts, setConcepts } =
    useUserStore();
  const { refetch: refetchAstrology, isLoading: isLoadingAstro } =
    useFetchAstrologyData();
  const { refetch: refetchUserConcepts, isLoading: isLoadingUserConcepts } =
    useFetchUserConcepts();
  const { refetch: refetchConcepts, isLoading: isLoadingConcepts } =
    useFetchConcepts();
  const { refetch: refetchCosmicMirror, isLoading: isLoadingCosmicMirror } =
    useFetchCosmicMirror();
  useProducts();
  const { refetch: refetchUserProducts } = useUserProducts();
  const [activeSection, setActiveSection] = useState('home');
  const [hasLoadedAstro, setHasLoadedAstro] = useState(false);
  const [hasLoadedUserConcepts, setHasLoadedUserConcepts] = useState(false);
  const [hasLoadedConcepts, setHasLoadedConcepts] = useState(false);
  const [hasLoadedCosmicMirror, setHasLoadedCosmicMirror] = useState(false);
  const [hasLoadedUserProducts, setHasLoadedUserProducts] = useState(false);

  const { modalState, closeUserArtifactModal, closeCommercialArtifactModal } =
    useModal();

  console.log('useUserStore dashboard', useUserStore);

  useEffect(() => {
    const loadAstroData = async () => {
      if (hasLoadedAstro) return;
      try {
        await refetchAstrology().catch((error) => {
          console.error('Error fetching Astrology Data:', error);
          useUserStore.getState().setAstrologyData(astrologyDataMock);
        });
        setHasLoadedAstro(true);
      } catch (error) {
        console.error('Error in loadAstroData:', error);
        setHasLoadedAstro(true);
      }
    };
    loadAstroData();
  }, [refetchAstrology, hasLoadedAstro]);

  useEffect(() => {
    const loadUserConcepts = async () => {
      if (hasLoadedUserConcepts) return;
      try {
        await refetchUserConcepts().catch((error) => {
          console.error('Error fetching User Concepts:', error);
        });
        setHasLoadedUserConcepts(true);
      } catch (error) {
        console.error('Error in loadUserConcepts:', error);
        setHasLoadedUserConcepts(true);
      }
    };
    loadUserConcepts();
  }, [refetchUserConcepts, hasLoadedUserConcepts]);

  useEffect(() => {
    const loadConcepts = async () => {
      if (hasLoadedConcepts) return;
      if (concepts.length === 0) {
        try {
          await refetchConcepts().catch((error) => {
            console.error('Error fetching Concepts:', error);
            setConcepts(mockConceptsWithComposition);
          });
        } catch (error) {
          console.error('Error in loadConcepts:', error);
        }
      }
      setHasLoadedConcepts(true);
    };
    loadConcepts();
  }, [refetchConcepts, concepts.length, hasLoadedConcepts, setConcepts]);

  useEffect(() => {
    const loadCosmicMirror = async () => {
      if (hasLoadedCosmicMirror) return;
      try {
        await refetchCosmicMirror().catch((error) => {
          console.error('Error fetching Cosmic Mirror:', error);
        });
        setHasLoadedCosmicMirror(true);
      } catch (error) {
        console.error('Error in loadCosmicMirror:', error);
        setHasLoadedCosmicMirror(true);
      }
    };
    loadCosmicMirror();
  }, [refetchCosmicMirror, hasLoadedCosmicMirror]);

  useEffect(() => {
    const loadUserProducts = async () => {
      if (hasLoadedUserProducts) return;
      try {
        await refetchUserProducts().catch((error) => {
          console.error('Error fetching User Products:', error);
        });
        setHasLoadedUserProducts(true);
      } catch (error) {
        console.error('Error in loadUserProducts:', error);
        setHasLoadedUserProducts(true);
      }
    };
    loadUserProducts();
  }, [refetchUserProducts, hasLoadedUserProducts]);

  useEffect(() => {
    if (
      hasLoadedAstro &&
      hasLoadedConcepts &&
      concepts.length > 0 &&
      astrologyData?.natalChart?.placements
    ) {
      const updatedConcepts = concepts.map((concept) => {
        const composition = concept.placements.map((planet) => {
          const placement = astrologyData.natalChart.placements.find(
            (p) => p.name === planet
          );
          return {
            placement: planet,
            sign: placement?.sign || 'unknown',
          } as CompositionItem;
        });
        return { ...concept, composition };
      });

      const hasCompositionChanged = concepts.some((concept, index) => {
        const newComposition = updatedConcepts[index].composition;
        const oldComposition = concept.composition || [];
        return (
          JSON.stringify(newComposition) !== JSON.stringify(oldComposition)
        );
      });

      if (hasCompositionChanged && updatedConcepts.length > 0) {
        setConcepts(updatedConcepts);
      }
    }
  }, [hasLoadedAstro, hasLoadedConcepts, astrologyData, setConcepts]);

  const renderSection = () => {
    switch (activeSection) {
      case 'astro':
        return <AstroOverview />;
      case 'concepts':
        return <Concepts />;
      case 'artifacts':
        return <Artifacts />;
      case 'home':
      default:
        return <Home setActiveSection={setActiveSection} />;
    }
  };

  const isDataLoaded =
    hasLoadedAstro &&
    hasLoadedUserConcepts &&
    hasLoadedConcepts &&
    hasLoadedCosmicMirror &&
    concepts.length > 0 &&
    astrologyData &&
    userArtifacts !== null;

  return (
    <div className="flex flex-col h-full">
      <DashboardHeader active={activeSection} setActive={setActiveSection} />
      <div
        className="flex-1 overflow-y-auto"
        style={{
          boxShadow: `
            inset 0px 5px 10px 0px #00000080,
            0px 4px 4px 0px #00000040,
            0px 4px 4px 0px #00000040
          `,
        }}
      >
        {isLoadingAstro ||
        isLoadingUserConcepts ||
        isLoadingConcepts ||
        isLoadingCosmicMirror ||
        !isDataLoaded ? (
          <div className="h-[calc(100vh-80px)] flex items-center justify-center">
            <LoadingSpinner />
          </div>
        ) : (
          renderSection()
        )}
      </div>

      <UserArtifactModal
        isOpen={modalState.userArtifactModal.isOpen}
        onClose={closeUserArtifactModal}
        artifactName={
          modalState.userArtifactModal.artifactName || 'cosmic-mirror'
        }
      />
      <CommercialArtifactModal
        isOpen={modalState.commercialArtifactModal.isOpen}
        hasGlow={modalState.commercialArtifactModal.hasGlow}
        handleClose={closeCommercialArtifactModal}
      />
    </div>
  );
};

const Dashboard = () => {
  return (
    <ModalProvider>
      <DashboardContent />
    </ModalProvider>
  );
};

export default Dashboard;
