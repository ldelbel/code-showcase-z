import { useImageModal } from '@/hooks/useImageModal';
import { placementIcons, signIcons } from '@/shared/Icons/maps';
import Tag from '@/shared/Tag';
import { UserArtifact } from '@/types';
import {
  PlacementSlug,
  ZodiacSignSlug,
} from '@zodic/shared/types/scopes/legacy';

interface OverviewProps {
  userArtifact: UserArtifact;
}

const Overview = ({ userArtifact }: OverviewProps) => {
  const { showImage } = useImageModal();

  const imageUrl =
    userArtifact.chosenImageUrl ||
    userArtifact?.images?.[0]?.url ||
    'default-image.png';

  const icons = ['sun', 'ascendant', 'moon'] as PlacementSlug[];
  const composition = userArtifact.archetypeData?.combination.split('-') || [];

  return (
    <div className="flex flex-col justify-center items-center flex-1 min-h-0 space-y-2 md:space-y-3 tall:space-y-5">
      <div
        className="w-[200px] h-[250px] bg-golden-gradient rounded-md relative golden-glow mb-4"
        onClick={() => showImage({ url: imageUrl })}
      >
        <div className="w-[198px] h-[248px] bg-DarkGray rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div
            className="w-[196px] h-[246px] bg-cover bg-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              backgroundImage: `url(${imageUrl})`,
              aspectRatio: '4/5',
            }}
          />
        </div>
        <div className="bg-golden-gradient rounded-md p-[1px] mt-3 shadow-black-white absolute -bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-DarkGray w-full h-full rounded-md p-[2px]">
            <div className="flex gap-5 items-center justify-center px-1.5 py-1">
              {icons.map((icon, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  {placementIcons[icon]({ size: 8 })}
                  <div className="mt-1.5">
                    {signIcons[composition[index] as ZodiacSignSlug]?.({
                      size: 14,
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="text-center font-roboto italic text-whitesmoke text-shadow-md text-md">
        {userArtifact.archetypeData?.essenceLine}
      </p>

      {/* Descrição ocupa o espaço restante */}
      <div className="w-full bg-DarkGray2 rounded-md px-3 py-4 relative overflow-y-auto flex-1 min-h-0">
        <p className="text-sm tall:text-base text-whitesmoke text-justify">
          {userArtifact.archetypeData?.description}
        </p>
      </div>
      <div className="flex justify-center gap-1.5 flex-wrap">
        {userArtifact?.archetypeData?.virtues.map((virtue, index) => (
          <Tag key={index} text={virtue} />
        ))}
      </div>
    </div>
  );
};

export default Overview;