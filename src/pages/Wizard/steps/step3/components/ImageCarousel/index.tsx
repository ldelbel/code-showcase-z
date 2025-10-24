import { DialogTitle } from '@radix-ui/react-dialog';
import { useState } from 'react';
import Button from '../../../../../../shared/Button';
import Flag from '../../../../../../shared/Flag';
import Modal from '../../../../../../shared/Modal';
import { ArchetypeImage } from '../../../../../../types';
import ReturnButton from '@/shared/ReturnButton';

interface ImageCarouselProps {
  images: ArchetypeImage[];
  onImageSelect: (image: ArchetypeImage) => void;
  selectedImageId?: string | null;
}

const ImageCarousel = ({
  images,
  onImageSelect,
  selectedImageId,
}: ImageCarouselProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<ArchetypeImage | null>(null);

  const handleOpenModal = (image: ArchetypeImage) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  if (!images || images.length === 0) {
    return <p>No images available.</p>;
  }

  return (
    <>
      <div
        className=""
        style={{
          display: 'flex',
          overflowX: 'scroll',
          padding: '20px',
          gap: '20px',
          scrollbarWidth: 'none',
          boxShadow: `
            0px -4px 5px 2px rgba(0, 0, 0, 0.5) inset,
            0px 4px 5px 2px rgba(0, 0, 0, 0.5) inset
          `,
        }}
      >
        {images.map((image, index) => (
          <div className="relative" key={index}>
            {selectedImageId === image.leonardoId && (
              <div
                className="h-3 w-3 bg-CustomGreen absolute"
                style={{
                  top: '16px',
                  right: '-6px',
                  transform: 'rotate(19.87deg)',
                  zIndex: '0',
                }}
              />
            )}
            <div className="bg-golden-gradient min-w-[210px] h-[254px] relative rounded-lg z-0">
              <div
                onClick={() => onImageSelect(image)}
                style={{
                  position: 'absolute',
                  cursor: 'pointer',
                  borderRadius: '10px',
                  backgroundColor: '#171717',
                  width: '206px',
                  height: '250px',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <img
                  src={image.url}
                  alt="Archetype image"
                  className="w-full h-full object-cover rounded-lg pointer-events-none"
                />
                {selectedImageId === image.leonardoId && (
                  <div className="absolute top-4 -right-2.5">
                    <Flag />
                  </div>
                )}
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <Button
                  variant="small"
                  base="golden"
                  text="VIEW"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenModal(image);
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex flex-col items-center gap-4 -m-6">
          <DialogTitle className="sr-only">Image Preview</DialogTitle>
          <img
            src={modalImage?.url}
            alt="Archetype image"
            className="w-auto max-h-[600px] object-contain"
            style={{
              borderTopLeftRadius: '20px',
              borderTopRightRadius: '20px',
            }}
          />
          <div className="mb-6 mt-6">
            <ReturnButton onClick={() => setIsModalOpen(false)} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ImageCarousel;
