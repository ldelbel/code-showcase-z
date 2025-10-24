import { useState } from 'react';
import { ArchetypeData } from '../types';

const ArchetypeCarousel = ({
  archetypes,
  onArchetypeSelect,
}: {
  archetypes: ArchetypeData;
  onArchetypeSelect: (index: number) => void;
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    console.log('Selected', index);
    setSelectedIndex(index);
    onArchetypeSelect(index);
  };

  return (
    <div
      style={{
        backgroundColor: 'red',
        display: 'flex',
        overflowX: 'scroll',
        padding: '20px',
        gap: '20px',
        scrollbarWidth: 'none',
      }}
    >
      {archetypes.map((archetype, index) => (
        <div
          key={index}
          onClick={() => handleSelect(index)}
          style={{
            flex: '0 0 30%',
            cursor: 'pointer',
            transform: selectedIndex === index ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.3s ease',
            border:
              selectedIndex === index ? '3px solid blue' : '1px solid gray',
            borderRadius: '10px',
            boxShadow:
              selectedIndex === index
                ? '0 4px 8px rgba(0, 0, 0, 0.2)'
                : '0 2px 4px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'white',
            padding: '10px',
            minWidth: '200px',
          }}
        >
          <img
            src={archetype.images[0]?.url || ''}
            alt={archetype.name || 'Archetype'}
            style={{
              width: '100%',
              aspectRatio: '3 / 4',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
          <div style={{ marginTop: '10px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>
              {archetype.name || 'Unnamed Archetype'}
            </h3>
            <p style={{ fontSize: '14px', color: 'gray' }}>
              {archetype.description || 'No description available.'}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArchetypeCarousel;
