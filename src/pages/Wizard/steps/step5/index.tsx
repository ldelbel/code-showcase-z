import { useGenerateCosmicMirror } from '@/api/hooks';
import { useImageModal } from '@/hooks/useImageModal';
import Button from '@/shared/Button';
import ProfileIcon from '@/shared/Icons/ProfileIcon';
import LoadingSpinner from '@/shared/LoadingSpinner';
import Modal from '@/shared/Modal';
import Checkbox from '@/shared/ui/checkbox';
import { useUserStore } from '@/store/useStore';
import { lang } from '@/utils/lang';
import { DialogTitle } from '@radix-ui/react-dialog';
import { useState } from 'react';
import { ImageProps } from '../..';

const translations = {
  'pt-br': {
    title: 'Toque Final: Revisar e Confirmar',
    errorMessage: 'Erro',
    userPhotoAlt: 'Foto do usuário',
    selectedImageAlt: 'Arquétipo selecionado',
    checkboxLabelBefore: 'Eu aceito os ',
    termsAndConditionsLink: 'Termos e Condições',
    checkboxLabelAfter: ' deste produto',
    prevButton: 'ANTERIOR',
    generateButton: 'GERAR',
    generationError: 'Falha ao iniciar o processo de geração.',
    modalTitle: 'Espelho Cósmico',
    modalSubtitle: 'Termos e Condições',
    term1Title: '1. Responsabilidade pela Foto:',
    term1Description:
      'Confirmo que a foto fornecida está de acordo com as diretrizes indicadas, e aceito que a qualidade do personagem gerado pode ser impactada se a foto não atender a esses padrões.',
    term2Title: '2. Resultados da Geração:',
    term2Description:
      'Entendo que, embora a IA busque resultados de alta qualidade, variações na semelhança e alinhamento visual podem ocorrer devido à natureza das imagens geradas por IA.',
    term3Title: '3. Isenção de Responsabilidade por Problemas com a Foto:',
    term3Description:
      'Reconheço que a empresa não é responsável por gerações de personagens de baixa qualidade ou baixa semelhança causadas por uma foto inadequada ou de baixa qualidade.',
    term4Title: '4. Processo Não Reembolsável:',
    term4Description:
      'Aceito que o processo de geração por IA é final e não reembolsável, pois é baseado nas minhas seleções confirmadas.',
    returnButton: 'VOLTAR',
    indexError: 'Erro: Nenhum arquétipo selecionado.',
  },
  en: {
    title: 'Final Touch: Review and Confirm',
    errorMessage: 'error',
    userPhotoAlt: 'User photo',
    selectedImageAlt: 'Selected archetype',
    checkboxLabelBefore: 'I accept the ',
    termsAndConditionsLink: 'Terms and Conditions',
    checkboxLabelAfter: ' for this product',
    prevButton: 'PREV',
    generateButton: 'GENERATE',
    indexError: 'Error: No archetype selected.',
    generationError: 'Failed to initiate generation process.',
    modalTitle: 'Cosmic Mirror',
    modalSubtitle: 'Terms and Conditions',
    term1Title: '1. Photo Responsibility:',
    term1Description:
      'I confirm that the photo I have provided complies with the stated guidelines, and I accept that the quality of the generated character may be impacted if the photo does not meet these standards.',
    term2Title: '2. Generation Results:',
    term2Description:
      'I understand that while the AI strives for high-quality results, variations in similarity and visual alignment may occur due to the nature of AI-generated imagery.',
    term3Title: '3. No Liability for Photo Issues:',
    term3Description:
      'I acknowledge that the company is not responsible for low-quality character generations or low resemblance caused by an unsuitable or poor-quality photo.',
    term4Title: '4. Non-Refundable Process:',
    term4Description:
      'I accept that the AI generation process is final and non-refundable, as it is based on my confirmed selections.',
    returnButton: 'RETURN',
  },
};

const t = translations[lang === 'pt-br' ? 'pt-br' : 'en'];

const Step5 = ({
  nextStep,
  prevStep,
  selectedImage,
  userPhotoUrl,
  selectedArchetypeDataId,
}: {
  nextStep: () => void;
  prevStep: () => void;
  selectedImage: ImageProps;
  userPhotoUrl: string;
  selectedArchetypeDataId: string | null;
}) => {
  const { mutate: generateCosmicMirror, isPending: isLoading } =
    useGenerateCosmicMirror();
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addOrUpdateArtifact } = useUserStore();
  const { showImage } = useImageModal();
  const isSelectedImageNull = Object.values(selectedImage).some(
    (value) => value === null
  );

  if (isSelectedImageNull) {
    return <div>{t.errorMessage}</div>;
  }

  const handleGenerate = () => {
    if (!selectedArchetypeDataId) {
      alert(t.indexError || 'Erro: Nenhum arquétipo selecionado.');
      return;
    }

    generateCosmicMirror(
      {
        generatedImageId: selectedImage.id || '',
        size: 'post',
        archetypeDataId: selectedArchetypeDataId,
      },
      {
        onSuccess: () => {
          addOrUpdateArtifact({
            artifactName: 'cosmic-mirror',
            status: 'pending',
          });
          nextStep();
        },
        onError: (err) => {
          console.error('Error generating Cosmic Mirror:', err);
          alert(err.message || t.generationError);
        },
      }
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto text-center flex flex-col items-center justify-center gap-4">
      <h2 className="text-lg font-bold text-oldgoldlight mt-6 text-shadow">
        {t.title}
      </h2>
      <div className="flex justify-center gap-6">
        <div className="bg-golden-gradient rounded-md w-[35vw] h-[45vw] p-[2px]">
          {!userPhotoUrl ? (
            <div className="w-full h-full flex flex-col items-center justify-center rounded-md">
              <ProfileIcon size={155} />
            </div>
          ) : (
            <div
              className="w-full h-full flex flex-col items-center rounded-md"
              style={{
                backgroundImage: `url(${userPhotoUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          )}
        </div>
        <div
          className="bg-golden-gradient rounded-md w-[35vw] h-[45vw] p-[2px]"
          onClick={() => showImage({ url: selectedImage.url || '' })}
        >
          <div className="w-full h-full flex flex-col items-center rounded-md">
            <img
              src={selectedImage.url || ''}
              alt={t.selectedImageAlt}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="w-[90vw] h-[67px] rounded-md input-field flex items-center gap-4 py-4 px-4 mt-6 border border-oldgoldlight">
        <Checkbox checked={isChecked} onChange={setIsChecked} />
        <label className="font-medium text-left">
          {t.checkboxLabelBefore}
          <a
            className="text-oldgoldlight font-medium underline hover:text-oldgold cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            {t.termsAndConditionsLink}
          </a>
          {t.checkboxLabelAfter}
        </label>
      </div>
      <div className="w-full flex gap-6 mt-6 justify-center">
        {isLoading ? (
          <LoadingSpinner size={16} />
        ) : (
          <>
            <Button
              variant="silver-medium"
              base="silver"
              text={t.prevButton}
              type="submit"
              onClick={prevStep}
            />
            <Button
              variant="medium"
              base="golden"
              text={t.generateButton}
              type="submit"
              onClick={handleGenerate}
              disabled={!isChecked}
            />
          </>
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex flex-col gap-6">
          <DialogTitle className="text-2xl font-bold bg-golden-gradient-2 bg-clip-text text-transparent text-center flex flex-col items-center">
            {t.modalTitle}{' '}
            <span className="text-whitesmoke">{t.modalSubtitle}</span>
          </DialogTitle>
          <div
            className="text-whitesmoke overflow-y-auto max-h-[60vh] pr-4 scrollbar-thumb-rounded-full space-y-2"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#E6BE69 #171717',
            }}
          >
            <p className="text-left text-sm font-semibold">
              <span className="font-bold text-oldgold text-base">
                {t.term1Title}{' '}
              </span>
              {t.term1Description}
            </p>
            <p className="text-left text-sm font-semibold">
              <span className="font-bold text-oldgold text-base">
                {t.term2Title}{' '}
              </span>
              {t.term2Description}
            </p>
            <p className="text-left text-sm font-semibold">
              <span className="font-bold text-oldgold text-base">
                {t.term3Title}{' '}
              </span>
              {t.term3Description}
            </p>
            <p className="text-left text-sm font-semibold">
              <span className="font-bold text-oldgold text-base">
                {t.term4Title}{' '}
              </span>
              {t.term4Description}
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <Button
              variant="silver-medium"
              text={t.returnButton}
              base="silver"
              onClick={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Step5;
