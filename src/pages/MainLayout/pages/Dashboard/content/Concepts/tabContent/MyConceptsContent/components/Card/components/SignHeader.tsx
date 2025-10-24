import { placementIcons } from '@/shared/Icons/maps';
import { useUserStore } from '@/store/useStore';
import AstroLabels from '@/utils/AstroLabels';
import { lang } from '@/utils/lang';
import { Concept } from '@zodic/shared/types';
import { PlacementSlug } from '@zodic/shared/types/scopes/legacy';

interface SignHeaderProps {
  conceptSlug: Concept;
}

const SignHeader = ({ conceptSlug }: SignHeaderProps) => {
  const { concepts } = useUserStore();

  const concept = concepts.find((c) => c.slug == conceptSlug);

  console.log('concept:',concept)

  return (
    <div className="bg-golden-gradient rounded-md p-[1px] mt-3 shadow-black-white">
      <div className="bg-DarkGray w-full h-full rounded-md p-[2px] ">
        <div className="flex gap-3 items-center justify-center p-1.5">
          {concept!.placements.map((placement, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              {placementIcons[placement as PlacementSlug]({ size: 20 })}

              <div className="mt-2">
                <p className="text-whitesmoke text-base font-medium font-rajdhani leading-3">
                  {AstroLabels[placement as PlacementSlug][lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignHeader;
