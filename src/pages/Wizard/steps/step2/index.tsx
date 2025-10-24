import Button from '@/shared/Button';
import { lang } from '@/utils/lang';
import { useState } from 'react';
import { Archetype } from '../../../../types';
import ArchetypeCarousel from './components/ArchetypeCarousel';

const translations = {
  'pt-br': {
    instruction: 'Selecione o arquétipo que mais ressoa com você',
    noArchetypesMessage: 'Nenhum arquétipo disponível para exibir.',
    selectedLabel: 'Selecionado:',
    prevButton: 'ANTERIOR',
    nextButton: 'PRÓXIMO',
    selectionAlert: 'Por favor, selecione um arquétipo para prosseguir.',
  },
  en: {
    instruction: 'Select the archetype that resonates most with you',
    noArchetypesMessage: 'No archetypes available to display.',
    selectedLabel: 'Selected:',
    prevButton: 'PREV',
    nextButton: 'NEXT',
    selectionAlert: 'Please select an archetype to proceed.',
  },
};

const t = translations[lang === 'pt-br' ? 'pt-br' : 'en'];

const Step2 = ({
  archetypeData,
  nextStep,
  prevStep,
  setSelectedArchetype,
}: {
  archetypeData: Archetype[];
  nextStep: () => void;
  prevStep: () => void;
  setSelectedArchetype: (archetype: Archetype, index: number) => void;
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (!archetypeData || archetypeData.length === 0) {
    return <p className="text-red-500">{t.noArchetypesMessage}</p>;
  }

  const handleArchetypeSelect = (index: number) => {
    setSelectedIndex(index);
    setSelectedArchetype(archetypeData[index], index);
  };

  const proceedToNextStep = () => {
    if (selectedIndex === null) {
      alert(t.selectionAlert);
      return;
    }

    nextStep();
  };

  const proceedToPrevStep = () => {
    prevStep();
  };

  return (
    <div className="w-full h-[55dvh] max-w-4xl mx-auto text-center flex flex-col items-center justify-between">
      <div className="w-[65vw] mt-1">
        <h2 className="text-lg font-semibold text-oldgoldlight text-shadow">
          {t.instruction}
        </h2>
      </div>
      <div className="w-[100vw] h-[255px] mt-1">
        <ArchetypeCarousel
          archetypes={archetypeData}
          onArchetypeSelect={handleArchetypeSelect}
        />
      </div>
      <div className="mb-2 mt-2 h-[27px]">
        {selectedIndex !== null && (
          <h3
            className="text-whitesmoke text-shadow"
            style={{ fontSize: '16px', fontWeight: '500' }}
          >
            {t.selectedLabel}{' '}
            <span
              className="text-oldgoldlight"
              style={{ fontSize: '16px', fontWeight: '600' }}
            >
              {archetypeData[selectedIndex].name}
            </span>
          </h3>
        )}
      </div>
      <div className="flex gap-5">
        <Button
          variant="silver-medium"
          base="silver"
          text={t.prevButton}
          type="submit"
          onClick={proceedToPrevStep}
        />
        <Button
          variant="medium"
          base="golden"
          text={t.nextButton}
          type="submit"
          disabled={selectedIndex === null}
          onClick={proceedToNextStep}
        />
      </div>
    </div>
  );
};

export default Step2;
