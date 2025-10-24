import {
  useRevealArtifact,
  useSelectArtifactImage,
} from '@/api/hooks/artifacts';
import Modal from '@/shared/Modal';
import { useUserStore } from '@/store/useStore';
import { UserArtifact } from '@/types';
import { useEffect, useState } from 'react';
import ArtifactLoading from './ArtifactLoading';
import RevealedArtifact from './RevealedArtifact';
import SelectArtifactImageStep from './SelectArtifactImageStep';
import UnrevealedArtifact from './UnrevealedArtifact';

interface UserArtifactModalProps {
  isOpen: boolean;
  onClose: () => void;
  artifactName: string;
}

type ModalState = 'unrevealed' | 'loading' | 'select-image' | 'revealed';

const UserArtifactModal = ({
  isOpen,
  onClose,
  artifactName,
}: UserArtifactModalProps) => {
  const { userArtifacts } = useUserStore();
  const [modalState, setModalState] = useState<ModalState>('unrevealed');
  const [hasGlow, setHasGlow] = useState(false);
  const [userArtifact, setUserArtifact] = useState<UserArtifact | null>(null);
  const [startGlow, setStartGlow] = useState(false);
  const [fadeOutGlow, setFadeOutGlow] = useState(false);
  const [fadeOutLoading, setFadeOutLoading] = useState(false);

  const { mutate: revealArtifact, isPending: isRevealing } =
    useRevealArtifact(artifactName);
  const { mutate: selectImage } = useSelectArtifactImage(artifactName);

  useEffect(() => {
    if (!isOpen) {
      setModalState('unrevealed');
      setHasGlow(false);
      setUserArtifact(null);
      setStartGlow(false);
      setFadeOutGlow(false);
      setFadeOutLoading(false);
      return;
    }

    const existingArtifact = userArtifacts?.find(
      (artifact) => artifact.artifactName === artifactName
    );

    if (existingArtifact) {
      setUserArtifact(existingArtifact);
      setHasGlow(true);

      if (existingArtifact.status === 'completed') {
        setModalState('unrevealed');
      } else if (existingArtifact.status === 'revealed') {
        setModalState(
          existingArtifact.chosenImageUrl ? 'revealed' : 'select-image'
        );
      }
    }
  }, [isOpen, artifactName, userArtifacts]);

  const handleReveal = () => {
    setModalState('loading');
    setStartGlow(true);

    revealArtifact(undefined, {
      onSuccess: (updatedArtifact) => {
        setUserArtifact(updatedArtifact);
        setTimeout(() => {
          handleRevealComplete();
        }, 3000);
      },
      onError: () => {
        setModalState('unrevealed');
        setHasGlow(false);
        setStartGlow(false);
      },
    });
  };

  const handleRevealComplete = () => {
    setModalState('select-image');
    console.log('revealed artifact');

    setFadeOutGlow(true);

    setTimeout(() => {
      setStartGlow(false);
      setFadeOutGlow(false);
    }, 1000);
  };

  const handleImageSelect = (imageUrl: string) => {
    selectImage(imageUrl, {
      onSuccess: (updatedArtifact) => {
        setUserArtifact(updatedArtifact);
        setModalState('revealed');
      },
    });
  };

  const handleClose = () => {
    if (modalState === 'loading' || isRevealing) {
      return;
    }
    onClose();
  };

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
            <UnrevealedArtifact
              artifactName={artifactName}
              onReveal={handleReveal}
            />
          )}
          {modalState === 'loading' && (
            <ArtifactLoading fadeOut={fadeOutLoading} />
          )}
          {modalState === 'select-image' && userArtifact && (
            <SelectArtifactImageStep
              userArtifact={userArtifact}
              onSelect={handleImageSelect}
            />
          )}
          {modalState === 'revealed' && userArtifact && (
            <RevealedArtifact
              userArtifact={userArtifact}
              onClose={handleClose}
            />
          )}
        </div>
      </div>
    </Modal>
  );
};

export default UserArtifactModal;
