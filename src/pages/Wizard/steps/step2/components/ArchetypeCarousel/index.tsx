import ReturnButton from '@/shared/ReturnButton';
import { DialogTitle } from '@radix-ui/react-dialog';
import { useState } from 'react';
import Button from '../../../../../../shared/Button';
import Flag from '../../../../../../shared/Flag';
import Modal from '../../../../../../shared/Modal';
import Tag from '../../../../../../shared/Tag';
import { ArchetypeData } from '../../../../../../types';
import { useImageModal } from '@/hooks/useImageModal';
const ArchetypeCarousel = ({
  archetypes,
  onArchetypeSelect,
}: {
  archetypes: ArchetypeData;
  onArchetypeSelect: (index: number) => void;
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalArchetype, setModalArchetype] = useState<number>(0);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  const { showImage } = useImageModal();
  const handleSelect = (index: number) => {
    console.log('Selected', index);
    setSelectedIndex(index);
    onArchetypeSelect(index);
  };

  const handleOpenModal = (index: number) => {
    setModalArchetype(index);
    setIsModalOpen(true);
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const bottom =
      Math.abs(
        e.currentTarget.scrollHeight -
          e.currentTarget.scrollTop -
          e.currentTarget.clientHeight
      ) < 1;
    setIsScrolledToBottom(bottom);
  };

  if (!archetypes || archetypes.length === 0) {
    return <p>No archetypes available to display.</p>;
  }

  return (
    <div
      className="flex gap-[20px] px-5 py-5"
      style={{
        overflowX: 'scroll',
        scrollbarWidth: 'none',
        boxShadow: `
          0px -4px 5px 2px rgba(0, 0, 0, 0.5) inset,
          0px 4px 5px 2px rgba(0, 0, 0, 0.5) inset
        `,
      }}
    >
      {archetypes.map((archetype, index) => (
        <div className="relative" key={index}>
          {selectedIndex === index && (
            <div
              className="h-3 w-3 bg-CustomGreen absolute"
              style={{
                bottom: '36.5px',
                right: '-6px',
                transform: 'rotate(19.87deg)',
                zIndex: '1',
              }}
            />
          )}
          <div className="bg-golden-gradient min-w-[210px] h-[224px] relative rounded-lg z-10">
            <div
              key={index}
              onClick={() => handleSelect(index)}
              style={{
                position: 'absolute',
                flex: '0 0 30%',
                cursor: 'pointer',
                borderRadius: '10px',
                boxShadow:
                  selectedIndex === index
                    ? '0 4px 8px rgba(0, 0, 0, 0.2)'
                    : '0 2px 4px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#171717',
                padding: '10px',
                width: '206px',
                height: '220px',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              {selectedIndex === index && (
                <div className="absolute bottom-6 -right-2.5">
                  <Flag />
                </div>
              )}

              <div style={{ marginTop: '2px', textAlign: 'center' }}>
                <h3
                  className="bg-golden-gradient bg-clip-text text-transparent mb-1 text-shadow"
                  style={{ fontSize: '15px', fontWeight: '600' }}
                >
                  {archetype.name || 'Unnamed Archetype'}
                </h3>
                <p
                  className="text-whitesmoke text-left overflow-hidden text-shadow"
                  style={{
                    fontSize: '12px',
                    display: '-webkit-box',
                    WebkitLineClamp: '6',
                    WebkitBoxOrient: 'vertical',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {archetype.description || 'No description available.'}
                </p>
              </div>
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <Button
                variant="small"
                base="golden"
                text="DETAILS"
                onClick={() => handleOpenModal(index)}
              />
            </div>
          </div>
        </div>
      ))}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="space-y-3 -m-3 z-50">
          <DialogTitle className="text-2xl font-bold mb-2 bg-golden-gradient-2 bg-clip-text text-transparent text-center py-1">
            {archetypes[modalArchetype].name}
          </DialogTitle>
          <div
            style={{
              padding: '10px',
              width: '100%',
              height: '255px',
              backgroundColor: '#171717',
              boxShadow: `
                0px -4px 5px 2px rgba(0, 0, 0, 0.5) inset,
                0px 4px 5px 2px rgba(0, 0, 0, 0.5) inset
              `,
              overflowY: 'auto',
              scrollbarWidth: 'thin',
              scrollbarColor: '#E6BE69 #171717',
              maskImage: isScrolledToBottom
                ? 'linear-gradient(to bottom, transparent 0%, black 15%)'
                : 'linear-gradient(to bottom, black 85%, transparent 100%)',
              WebkitMaskImage: isScrolledToBottom
                ? 'linear-gradient(to bottom, transparent 0%, black 15%)'
                : 'linear-gradient(to bottom, black 85%, transparent 100%)',
            }}
            className="scrollbar-thin scrollbar-thumb-oldgoldlight scrollbar-track-[#171717] scrollbar-thumb-rounded-full"
            onScroll={handleScroll}
          >
            <p
              className="text-whitesmoke text-justify"
              style={{ fontWeight: '500' }}
            >
              {archetypes[modalArchetype].description}
            </p>
          </div>
          <div className="flex justify-center gap-2 flex-wrap">
            {archetypes[modalArchetype].virtues.map((virtue, index) => (
              <Tag key={index} text={virtue} />
            ))}
          </div>
          <div className="relative w-[160px] h-[200px] mx-auto bg-golden-gradient rounded-lg" onClick={() => showImage({ url: archetypes[modalArchetype].images[0]?.url || '' })}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[156px] h-[196px] bg-CustomBlack rounded-lg">
              <img
                src={archetypes[modalArchetype].images[0]?.url || ''}
                alt={archetypes[modalArchetype].name || 'Archetype'}
                style={{
                  width: '100%',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <ReturnButton onClick={() => setIsModalOpen(false)} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ArchetypeCarousel;
