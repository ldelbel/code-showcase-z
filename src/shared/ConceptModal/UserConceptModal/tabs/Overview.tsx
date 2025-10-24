import { useImageModal } from '@/hooks/useImageModal';
import { placementIcons, signIcons } from '@/shared/Icons/maps';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/TabsShadCN';
import { useUserStore } from '@/store/useStore';
import { lang } from '@/utils/lang';
import { UserConceptData } from '@zodic/shared/types';
import {
  PlacementSlug,
  ZodiacSignSlug,
} from '@zodic/shared/types/scopes/legacy';
import { motion } from 'framer-motion';
import { useRef } from 'react';

interface OverviewProps {
  userConcept: UserConceptData;
  isShortName?: boolean;
}

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2, ease: 'easeInOut' },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: 'easeInOut' },
  },
};

const Overview = ({ userConcept, isShortName }: OverviewProps) => {
  const { showImage } = useImageModal();
  const descRef = useRef(null);
  const poemRef = useRef(null);
  const { concepts } = useUserStore();

  const concept = concepts.find((c) => c.slug == userConcept.conceptSlug);

  console.log('concept:', concept);

  const imageUrl =
    userConcept.images.post[userConcept.imageIdx].url || 'default-image.png';

  const composition = userConcept.combinationString.split('-') || [];
  console.log('composition', composition);

  return (
    <div className="flex flex-col justify-center items-center space-y-6 tall:space-y-7">
      <div
        className="w-[200px] h-[250px] bg-golden-gradient rounded-md relative golden-glow"
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
          <div className="bg-DarkGray w-full h-full rounded-md p-[2px] ">
            <div className="flex gap-5 items-center justify-center px-1.5 py-1">
              {concept!.placements.map((placement, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  {placementIcons[placement as PlacementSlug]({ size: 8 })}
                  <div className="mt-1.5">
                    {signIcons[composition[index] as ZodiacSignSlug]({
                      size: 14,
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Tabs
        defaultValue="description"
        className="w-fit flex flex-col items-center mt-4"
      >
        <TabsList className="w-fit gap-3 bg-CustomBlack shadow-button-inset tall:mb-2">
          <TabsTrigger
            value="description"
            className="w-[120px] h-[100%]"
            ref={descRef}
          >
            {lang === 'pt-br' ? 'DESCRIÇÃO' : 'DESCRIPTION'}
          </TabsTrigger>
          <TabsTrigger
            value="poem"
            className="w-[120px] h-[100%]"
            ref={poemRef}
          >
            {lang === 'pt-br' ? 'POEMA' : 'POEM'}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="description">
          <motion.div
            className={`w-[90%] mx-auto p-4  ${
              isShortName
                ? 'h-[24dvh] md:h-[30dvh] tall:h-[35dvh]'
                : 'h-[22dvh] md2:h-[28dvh] tall:h-[32dvh]'
            }  bg-[#171717] rounded-lg shadow-inner scrollbar-thin scrollbar-thumb-oldgoldlight scrollbar-track-[#171717] scrollbar-thumb-rounded-full flex flex-col items-center py-4 text-center`}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={contentVariants}
            style={{
              boxShadow: `
                  0px -4px 5px 2px rgba(0, 0, 0, 0.5) inset,
                  0px 4px 5px 2px rgba(0, 0, 0, 0.5) inset
                `,
              overflowY: 'auto',
              overflowX: 'hidden',
            }}
          >
            {userConcept.description}
          </motion.div>
        </TabsContent>
        <TabsContent value="poem" className="w-full">
          <div
            className={`w-[320px]  ${
              isShortName
                ? 'h-[24dvh] md:h-[30dvh] tall:h-[35dvh]'
                : 'h-[22dvh] md2:h-[28dvh] tall:h-[32dvh]'
            } p-[1px] bg-golden-gradient rounded-2xl flex justify-center items-center cursor-pointer `}
            style={{ boxShadow: '0px 4px 4px 0px #000000' }}
          >
            <div className="w-full h-full flex flex-col justify-around items-center rounded-2xl gap-2 p-3 py-5 overflow-y-auto bg-DarkGray shadow-custom-inset">
              {userConcept.poem.map((verse) => (
                <p className="text-xl font-rajdhani font-normal bg-golden-gradient-4 bg-clip-text text-transparent text-left drop-shadow-tight mt-3">
                  {verse}
                </p>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Overview;
