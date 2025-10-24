import Modal from '../../Modal';
import ArtifactIntro from './ArtifactIntro';

interface CommercialArtifactModalProps {
  isOpen: boolean;
  hasGlow: boolean;
  handleClose: () => void;
  startGlow?: () => void;
  fadeOutGlow?: () => void;
}

const CommercialArtifactModal = ({
  isOpen,
  hasGlow,
  handleClose,
}: CommercialArtifactModalProps) => {
  return (
    <Modal isOpen={isOpen} hasGlow={hasGlow} onClose={handleClose}>
      <div className="h-[calc(100dvh-40px)] -m-4 relative overflow-hidden">
        <div className="h-full w-full pt-3">
          <ArtifactIntro />
        </div>
      </div>
    </Modal>
  );
};

export default CommercialArtifactModal;
