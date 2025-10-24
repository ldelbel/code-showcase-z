import Crown from '/crown-chalk.png';
import { conceptModalTexts } from '@/content';
import SignComposition from '@/pages/MainLayout/pages/Dashboard/content/Concepts/tabContent/MyConceptsContent/components/Card/components/SignComposition';
import Button from '@/shared/Button';
import AstroLabels from '@/utils/AstroLabels';
import { lang } from '@/utils/lang';
import { DialogTitle } from '@radix-ui/react-dialog';
import { Concept } from '@zodic/shared/types';

const GenerateCrown = ({
  nextStep,
  conceptSlug,
}: {
  nextStep: () => void;
  conceptSlug: Concept;
}) => {
  return (
    <div className="m-4">
      <div className="flex flex-col gap-6 max-w-2xl items-center justify-center">
        <DialogTitle className="text-xl leading-6 font-bold flex flex-col items-center justify-center text-center">
          {lang === 'pt-br' ? 'Revele' : 'Unveil'}
          <div className="w-[130px] h-[1px] bg-white bg-golden-gradient"></div>
          <span className="bg-golden-gradient bg-clip-text text-transparent text-3xl">
            {AstroLabels[`${conceptSlug}`][lang]}
          </span>
        </DialogTitle>
        <div className="w-[120px] h-[150px] bg-golden-gradient rounded-md relative">
          <div className="w-[118px] h-[148px] rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-DarkGray">
            <div className="w-[116px] h-[146px] rounded-md bg-gray-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img src={Crown} alt="Crown" className="w-[115px] h-[145px]" />
            </div>
          </div>
        </div>
        <div className="text-whitesmoke text-sm text-center flex flex-col gap-8 items-center justify-center">
          <p className="font-medium text-sm">
            {conceptModalTexts[conceptSlug][lang].intro}
          </p>

          <SignComposition conceptSlug={conceptSlug} />
          <p className="text-oldgoldlight text-sm text-center text-shadow font-semibold">
            {conceptModalTexts[conceptSlug][lang].question}
          </p>

          <p
            className="text-base text-center font-semibold"
            style={{
              color: '#A47A1E',
              textShadow: `
                        3px 3px 5px #f5e9a6,
                        0px 0px 10px #d3b869,
                        0px 0px 1px #f5f3ebd5,
                        0px 0px 3px #FFD87C,
                        0px 0px 1px #f6dc15,
                        -1px -1px 0 #FFD87C,
                        1px -1px 0 #FFD87C,
                        -1px 1px 0 #FFD87C,
                        1px 1px 0 #FFD87C
                      `,
              fontWeight: 'bold',
            }}
          >
            {conceptModalTexts[conceptSlug][lang].cta}
          </p>
        </div>
        <div className="flex justify-center gap-4 relative">
          <div
            className="absolute -bottom-2 -right-2 pointer-events-none"
            style={{ transform: 'rotate(-17.18deg)', zIndex: 1 }}
          >
            <p
              className="text-LightGreen text-2xl font-semibold"
              style={{
                textShadow: '0px 1px 2px rgba(0, 0, 0, 0.75)',
                fontFamily: 'Rajdhani',
              }}
            >
              Free
            </p>
          </div>
          <Button
            variant="medium"
            text="GENERATE"
            base="golden"
            onClick={() => {
              nextStep();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default GenerateCrown;
