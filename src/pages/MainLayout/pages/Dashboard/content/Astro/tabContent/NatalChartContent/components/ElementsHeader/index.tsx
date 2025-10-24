import { ElementsKVData } from '@zodic/shared/types';
import ElementItem from './ElementItem';

const ElementsHeader = ({ element }: { element: ElementsKVData }) => {
  const dominantIndex = element.dominant_element_id
    ? element.dominant_element_id - 1
    : 0;

  return (
    <div className="flex items-center justify-center gap-4">
      {element.elements.map((item, index) => (
        <ElementItem
          key={item.name}
          name={item.name}
          percentage={item.percentage}
          isDominant={index === dominantIndex}
        />
      ))}
    </div>
  );
};

export default ElementsHeader;
