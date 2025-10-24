import Minititle from '@/shared/Minititle';
import getFormattedPlacementName from '@/utils/getFormattedPlacementName';
import getFormattedSignName from '@/utils/getFormattedSignName';
import { placementTitleMap } from '@/utils/titleMap';
import { Languages, PlacementObject } from '@zodic/shared/types';
import {
  PlacementSlug,
  ZodiacSignSlug,
} from '@zodic/shared/types/scopes/legacy';
import { FunctionComponent } from 'react';

type PlacementsTableSectionProps = {
  placements: PlacementObject[];
  placementIcons: Record<PlacementSlug, FunctionComponent>;
  signIcons: Record<ZodiacSignSlug, FunctionComponent>;
  lang: Languages;
};

const PlacementsTableSection = ({
  placements,
  placementIcons,
  signIcons,
  lang,
}: PlacementsTableSectionProps) => {
  return (
    <div>
      <Minititle title={placementTitleMap[placements[0].type][lang]} />
      <table className="w-full mt-6 mb-10 mx-1">
        <tbody className="[&>tr]:mb-2">
          {placements.map((row, idx) => (
            <tr key={idx} className="h-8">
              <td className="text-left w-[35%]">
                <div className="flex items-center gap-2">
                  <div className="w-6 flex justify-center">{placementIcons[row.name]({ size: 20 })}</div>

                  <span>{getFormattedPlacementName(lang, row.name)}</span>
                </div>
              </td>
              <td className="text-left w-[35%]">
                <div className="flex items-center gap-2 pl-4">
                  {signIcons[row.sign]({ size: 20 })}
                  <span>{getFormattedSignName(lang, row.sign)}</span>
                </div>
              </td>
              <td
                className={`text-center w-[20%] ${
                  row.house === null
                    ? 'bg-golden-gradient bg-clip-text text-transparent text-bold text-lg'
                    : 'text-whitesmoke'
                }`}
              >
                {row.house !== null && (
                  <span className="house-circle">{row.house}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlacementsTableSection;
