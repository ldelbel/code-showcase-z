import { placementIcons, signIcons } from '@/shared/Icons/maps';
import { PlacementObject } from '@zodic/shared/types';

const AstroGrid = ({
  columns,
  data,
}: {
  columns: string[];
  data: PlacementObject[];
}) => {
  return (
    <div className="input-field rounded-md pt-2 w-auto min-w-[175px] h-[157px] m-0">
      <div className="relative">
        <table className="w-full ">
          <thead>
            <tr>
              {columns.map((col) => (
                <th
                  key={col}
                  className={`text-oldgoldlight text-center text-xs pb-3`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="[&>tr]:mb-2">
            {data.slice(0, 4).map((row, idx) => (
              <tr key={idx} className="h-7">
                <td className="w-1/3">
                  <div className="flex items-center justify-center text-whitesmoke">
                    {(() => {
                      const PlanetIcon = placementIcons[row.name];
                      return PlanetIcon ? (
                        <PlanetIcon className="w-4 h-4" color="#FFF" />
                      ) : null;
                    })()}
                  </div>
                </td>
                <td className="w-1/3">
                  <div className="flex items-center justify-center">
                    {(() => {
                      const SignIcon = signIcons[row.sign];
                      return SignIcon ? (
                        <SignIcon className="w-4 h-4" color="#FFF" />
                      ) : null;
                    })()}
                  </div>
                </td>
                <td
                  className={`text-center w-1/3 ${
                    row.house === null
                      ? 'bg-golden-gradient bg-clip-text text-transparent text-bold text-lg'
                      : 'text-whitesmoke'
                  }`}
                >
                  {row.house}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          className="absolute -bottom-[6px] left-0 right-0 h-7 rounded-b-md"
          style={{
            background:
              'linear-gradient(180deg, rgba(36, 36, 36, 0) 0%, #212121 60.5%)',
          }}
        />
      </div>
    </div>
  );
};

export default AstroGrid;
