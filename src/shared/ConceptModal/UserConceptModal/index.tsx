import { generateUserConcept, GenerateUserConceptResponse } from '@/api';
import { ApiClientResponse } from '@/api/client';
import {
  useGenerateUserConcept,
  useUpdateUserConceptImageIdx,
} from '@/api/hooks';
import Modal from '@/shared/Modal';
import { useUserStore } from '@/store/useStore';
import { Concept, UserConceptData } from '@zodic/shared/types';
import { useEffect, useRef, useState } from 'react';
import ConceptLoading from './ConceptLoading';
import RevealedConcept from './RevealedConcept';
import SelectImageStep from './SelectImageStep';
import UnrevealedConcept from './UnrevealedConcept';

interface UserConceptModalProps {
  isOpen: boolean;
  onClose: () => void;
  conceptSlug: Concept;
}

type ModalState = 'unrevealed' | 'loading' | 'select-image' | 'revealed';

const UserConceptModal = ({
  isOpen,
  onClose,
  conceptSlug,
}: UserConceptModalProps) => {
  const { userConcepts, setUserConcepts } = useUserStore();
  const [modalState, setModalState] = useState<ModalState>('unrevealed');
  const [hasGlow, setHasGlow] = useState(false);
  const [userConcept, setUserConcept] = useState<UserConceptData | null>(null);

  const [responseStatus, setResponseStatus] = useState<number | undefined>(
    undefined
  );
  const [pendingConcept, setPendingConcept] = useState<UserConceptData | null>(
    null
  );
  const [startGlow, setStartGlow] = useState(false);
  const [fadeOutGlow, setFadeOutGlow] = useState(false);
  const [fadeOutLoading, setFadeOutLoading] = useState(false);

  const { mutate: generateConcept, isPending: isGenerating } =
    useGenerateUserConcept(conceptSlug);

  const { mutate: updateImageIdx, isPending: isUpdatingImage } =
    useUpdateUserConceptImageIdx(
      conceptSlug,
      setUserConcept,
      setUserConcepts,
      userConcepts
    );

  const isPollingRef = useRef(true);

  useEffect(() => {
    isPollingRef.current = true;
    return () => {
      isPollingRef.current = false;
    };
  }, []);

  const pollConceptGeneration = async (): Promise<UserConceptData> => {
    const POLL_INTERVAL = 4000;
    const MAX_ATTEMPTS = 10;

    let attempts = 0;

    while (attempts < MAX_ATTEMPTS && isPollingRef.current) {
      console.log(
        `📡 Polling concept generation (attempt ${
          attempts + 1
        }/${MAX_ATTEMPTS}) for conceptSlug: ${conceptSlug}`
      );
      try {
        const response = await generateUserConcept(conceptSlug);
        console.log(`🌐 [pollConceptGeneration] Response:`, response);

        if (response.status === 201 && response.data?.newConcept) {
          console.log(
            '✅ [pollConceptGeneration] Polling complete: Concept generated successfully',
            response.data
          );
          return response.data.newConcept as UserConceptData;
        }

        if (response.status !== 202) {
          console.error(
            `❌ [pollConceptGeneration] Polling failed with status ${response.status}`
          );
          throw new Error(`Polling failed with status ${response.status}`);
        }

        await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL));
        attempts++;
      } catch (error) {
        console.error(
          `❌ [pollConceptGeneration] Error:`,
          (error as Error).message
        );
        throw error;
      }
    }

    if (!isPollingRef.current) {
      console.log(
        '🛑 [pollConceptGeneration] Polling stopped due to component unmount or modal close'
      );
      throw new Error('Polling stopped');
    }

    console.error(
      '⏰ [pollConceptGeneration] Polling timed out after max attempts'
    );
    throw new Error('Polling timed out after max attempts');
  };

  useEffect(() => {
    console.log(
      `🔔 Modal isOpen changed: ${isOpen}, conceptSlug: ${conceptSlug}`
    );
    if (!isOpen) {
      console.log('🛑 Modal is closing, resetting state');
      setModalState('unrevealed');
      setHasGlow(false);
      setUserConcept(null);

      setPendingConcept(null);
      setFadeOutLoading(false);
      return;
    }

    console.log('🔍 Checking for existing userConcept in store:', userConcepts);
    const existingConcept = userConcepts.find(
      (concept) => concept.conceptSlug === conceptSlug
    );

    if (existingConcept) {
      console.log(
        `✅ Found existing concept for ${conceptSlug}:`,
        existingConcept
      );
      setUserConcept(existingConcept);
      setHasGlow(true);
      setModalState('revealed');
    } else {
      console.log(`❌ No existing concept found for ${conceptSlug}`);
      setModalState('unrevealed');
      setHasGlow(false);
      setUserConcept(null);
    }
  }, [isOpen, conceptSlug]);

  useEffect(() => {
    if (!isOpen || modalState === 'loading' || modalState === 'select-image')
      return;

    const existingConcept = userConcepts.find(
      (concept) => concept.conceptSlug === conceptSlug
    );

    if (existingConcept && modalState !== 'revealed') {
      console.log(
        `🔄 [userConcepts Updated] Found new concept for ${conceptSlug}:`,
        existingConcept
      );
      setUserConcept(existingConcept);
      setHasGlow(true);
      setModalState('revealed');
    }
  }, [userConcepts, conceptSlug, isOpen, modalState]);

  const handleLoadingTransition = () => {
    console.log('🔄 [handleLoadingTransition] Loading animation reached 100%');

    setTimeout(() => {
      setFadeOutLoading(true);

      setStartGlow(true);
      setTimeout(() => {
        handleLoadingComplete();
      }, 3000);
    }, 2000);
  };

  const handleLoadingComplete = () => {
    if (pendingConcept) {
      console.log(
        '✅ Loading animation complete, applying concept:',
        pendingConcept
      );
      setUserConcepts([...userConcepts, pendingConcept]);
      setUserConcept(pendingConcept);
      setHasGlow(true);
      setModalState('select-image');
      setPendingConcept(null);

      setFadeOutGlow(true);

      setTimeout(() => {
        setStartGlow(false);
        setFadeOutGlow(false);
      }, 1000);
    }
  };

  const handleGenerate = () => {
    console.log(`🚀 Generating new concept for ${conceptSlug}`);

    setModalState('loading');
    generateConcept(undefined, {
      onSuccess: async (
        response: ApiClientResponse<GenerateUserConceptResponse>
      ) => {
        console.log('📥 Generate concept response:', response);
        setResponseStatus(response.status);

        if (response.status === 201 && response.data?.newConcept) {
          console.log(
            '✅ Successfully generated concept:',
            response.data.newConcept
          );
          setPendingConcept(response.data.newConcept);
        } else if (response.status === 202) {
          console.log('⏳ Concept generation accepted, starting polling...');
          try {
            const finalConcept = await pollConceptGeneration();
            if (isPollingRef.current) {
              console.log(
                '✅ Polling complete, concept received:',
                finalConcept
              );
              setPendingConcept(finalConcept);
            }
          } catch (error) {
            if (isPollingRef.current) {
              console.error('❌ Polling error:', error);
              setModalState('unrevealed');
            }
          }
        } else {
          console.error(`❌ Unexpected status ${response.status}`);
          setModalState('unrevealed');
        }
      },
      onError: (error) => {
        console.error('❌ Error generating user concept:', error);
        setModalState('unrevealed');
      },
    });
  };

  const handleImageSelect = (imageIdx: number) => {
    console.log(
      `🖼️ User selected imageIdx: ${imageIdx} for conceptSlug: ${conceptSlug}`
    );
    updateImageIdx(imageIdx, {
      onSuccess: () => {
        console.log('✅ Image index updated, transitioning to revealed state');
        setModalState('revealed');
      },
      onError: (error) => {
        console.error('❌ Failed to update image index:', error);
        setModalState('revealed');
      },
    });
  };

  const handleClose = () => {
    if (
      modalState === 'loading' ||
      isGenerating ||
      modalState === 'select-image'
    ) {
      console.log('⏳ Cannot close modal while generating or selecting image');
      return;
    }
    console.log('🔒 Closing modal');
    onClose();
  };

  console.log(
    `🎨 Rendering modal - modalState: ${modalState}, userConcept:`,
    userConcept,
    `isGenerating: ${isGenerating}, isUpdatingImage: ${isUpdatingImage}`
  );

  return (
    <Modal
      isOpen={isOpen}
      hasGlow={hasGlow}
      onClose={handleClose}
      startGlow={startGlow}
      fadeOutGlow={fadeOutGlow}
    >
      <div className="h-[calc(100dvh-40px)] -m-4 relative overflow-hidden">
        <div className="h-full w-full md:pt-3">
          {modalState === 'unrevealed' && (
            <UnrevealedConcept
              conceptSlug={conceptSlug}
              nextStep={handleGenerate}
              onClose={handleClose}
            />
          )}
          {modalState === 'loading' && (
            <ConceptLoading
              responseStatus={responseStatus}
              onComplete={handleLoadingTransition}
              fadeOut={fadeOutLoading}
            />
          )}
          {modalState === 'select-image' && userConcept && (
            <SelectImageStep
              userConcept={userConcept}
              onSelect={handleImageSelect}
            />
          )}
          {modalState === 'revealed' && userConcept && (
            <RevealedConcept userConcept={userConcept} onClose={handleClose} />
          )}
        </div>
      </div>
    </Modal>
  );
};

export default UserConceptModal;
