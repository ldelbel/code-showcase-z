import { useUserStore } from '@/store/useStore';
import { Concept } from '@zodic/shared/types';
import PlanetIcon from './PlanetIcon';
import SignItem from './SignItem';

interface SignCompositionProps {
  conceptSlug: Concept;
}

const SignComposition = ({ conceptSlug }: SignCompositionProps) => {
  const { concepts } = useUserStore.getState();

  console.log('Concepts in SignComposition', concepts);

  const concept = concepts.find((c) => c.slug == conceptSlug);

  const [planet1, planet2, planet3] = concept!.composition;

  return (
    <div className="bg-golden-gradient h-24 rounded-md p-[1px] shadow-black-white">
      <div className="bg-DarkGray w-full h-full rounded-md flex flex-col">
        <div className="h-[35px] bg-golden-gradient rounded-t-md p-[1px]">
          <div className="bg-DarkGray h-full rounded-t-md flex items-center justify-around py-[5px]">
            <PlanetIcon planet={planet1.placement} />
            <PlanetIcon planet={planet2.placement} />
            <PlanetIcon planet={planet3.placement} />
          </div>
        </div>
        <div className="flex h-full items-center justify-around rounded-b-md bg-DarkGray">
          <SignItem sign={planet1.sign} />
          <SignItem sign={planet2.sign} />
          <SignItem sign={planet3.sign} />
        </div>
      </div>
    </div>
  );
};

export default SignComposition;
