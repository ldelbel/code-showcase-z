import { useIosInstallPrompt } from '@/hooks/useIosInstallPrompt';
import ReturnButton from '@/shared/ReturnButton';
import Modal from './Modal';

const IosInstallModal = () => {
  const { isVisible, hidePrompt } = useIosInstallPrompt();

  if (!isVisible) return null;

  return (
    <Modal isOpen={true} onClose={hidePrompt} width={90}>
      <div className="flex flex-col max-h-[80vh] min-h-[60vh] w-[90%] mx-auto rounded-md">
        {/* Cabeçalho fixo */}
        <div className="text-white text-center space-y-2 pb-2">
          <h2 className="text-2xl font-bold bg-golden-gradient bg-clip-text text-transparent">
            Instalar Zodic no iOS
          </h2>
          <p className="text-sm text-slate-300 max-w-[90%] mx-auto">
            Para instalar o aplicativo no seu iPhone, siga estas etapas:
          </p>
        </div>

        {/* Conteúdo com scroll */}
        <div
          className="flex flex-col items-center gap-6 px-2 py-4 overflow-y-auto flex-1 rounded-xl"
          style={{
            backgroundColor: '#D9D9D91A',
            scrollbarWidth: 'thin',
            scrollbarColor: '#E6BE69 #171717',
          }}
        >
          <div className="flex flex-col items-center space-y-2">
            <p className="text-md text-center">
              <span className="font-bold">1. </span>Abra no Safari
            </p>
            <img
              src="/step1-safari.png"
              alt="Abrir no Safari"
              className="w-[40%] h-auto rounded-md"
            />
          </div>
          <div className="bg-golden-gradient w-full h-[1px] mt-2" />

          <div className="flex flex-col items-center space-y-2">
            <p className="text-md text-center">
              <span className="font-bold">2. </span>Toque no botão de
              compartilhar
            </p>
            <img
              src="/step2-share.png"
              alt="Botão compartilhar"
              className="w-[90%] h-auto rounded-md"
            />
          </div>
          <div className="bg-golden-gradient w-full h-[1px] mt-2" />
          <div className="flex flex-col items-center space-y-2">
            <p className="text-md text-center">
              <span className="font-bold">3. </span>Selecione "Adicionar à Tela
              de Início"
            </p>
            <img
              src="/step3-add.png"
              alt="Adicionar à tela inicial"
              className="w-[90%] h-auto rounded-md"
            />
          </div>
          <div className="bg-golden-gradient w-full h-[1px] mt-2" />
          <div className="flex flex-col items-center space-y-2">
            <h2 className="text-md text-center font-bold bg-golden-gradient bg-clip-text text-transparent">
              <span className="text-whitesmoke">E pronto!</span> Zodic já está instalado!
            </h2>
          </div>
        </div>

        {/* Botão fixo no final */}
        <div className="pt-4 flex justify-center">
          <ReturnButton onClick={hidePrompt} />
        </div>
      </div>
    </Modal>
  );
};

export default IosInstallModal;
