import { HemisphereKVData } from '@zodic/shared/types';
import EastWestItem from './EastWestItem';
import NorthSouthItem from './NorthSouthItem';

const HemisphereHeader = ({ hemisphere }: { hemisphere: HemisphereKVData }) => {
  const northEmphasized = hemisphere.north_south.id === 1;
  const eastEmphasized = hemisphere.east_west.id === 1;

  return (
    <div>
      <div className="flex items-center justify-center gap-12">
        <NorthSouthItem northEmphasized={northEmphasized} />
        <EastWestItem eastEmphasized={eastEmphasized} />
      </div>
    </div>
  );
};

export default HemisphereHeader;
