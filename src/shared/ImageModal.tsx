import { DialogTitle } from '@radix-ui/react-dialog';
import Modal from './Modal';
import ProtectedImage from './ProtectedImage';
import ReturnButton from './ReturnButton';
import ProtectedImageSVG from './ProtectedImageSVG';

type Props = {
  imageData: { url: string; alt?: string; isSVG?: boolean } | null;
  onClose: () => void;
};

const ImageModal = ({ imageData, onClose }: Props) => {
  return (
    <Modal
      isOpen={!!imageData}
      onClose={onClose}
      width={100}
      hasCloseButton={false}
    >
      <div className="flex flex-col items-center gap-4 -m-6 w-[100vw]">
        <DialogTitle className="sr-only">Image Preview</DialogTitle>

        {imageData && !imageData.isSVG && (
          <div className="w-full max-w-[100vw]">
            <ProtectedImage
              imageUrl={imageData.url}
              alt={imageData.alt || 'Image'}
            />
          </div>
        )}

        {imageData && imageData.isSVG && (
          <div className="w-full max-w-[100vw]">
            <ProtectedImageSVG
              imageUrl={imageData.url}
              alt={imageData.alt || 'Image'}
            />
          </div>
        )}

        <div className="mb-6 mt-6">
          <ReturnButton onClick={onClose} />
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
