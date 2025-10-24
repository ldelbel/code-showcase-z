import Banner from '@/shared/Banner';
import Button from '@/shared/Button';
import GradientText from '@/shared/GradientText';
import LockIconButton from '@/shared/Icons/LockIconButton';
import { useUserStore } from '@/store/useStore';
import { DialogTitle } from '@radix-ui/react-dialog';
import { useNavigate } from 'react-router-dom';

const ArtifactIntro = () => {
  const navigate = useNavigate();
  const { userProducts } = useUserStore();

  const userCosmicMirror = userProducts.find(
    (up) => up.productSlug === 'cosmic-mirror'
  );

  const isUnlocked = userCosmicMirror
    ? userCosmicMirror.status === 'unlocked'
    : false;

  const handleClick = () => {
    if (isUnlocked) {
      navigate('/wizard');
    } else {
      navigate('/main/payment');
    }
  };

  return (
    <div className="h-full mx-1 relative flex flex-col items-center">
      <div className="flex flex-col max-w-2xl items-center space-y-5">
        <DialogTitle className="text-2xl leading-6 font-bold flex flex-col items-center justify-center text-center">
          <span>Bem-vindo ao</span>
          <GradientText text="Espelho Cósmico" fontSize={'30px'} />
        </DialogTitle>
      </div>
      <div className="w-full mt-4">
        <Banner />
      </div>
      <div
        className={`text-slate-200 overflow-y-auto flex-1 flex flex-col gap-6 px-4 py-4 relative mt-4 mb-20`}
        style={{
          backgroundColor: '#D9D9D91A',
          scrollbarWidth: 'thin',
          scrollbarColor: '#E6BE69 #171717',
          boxShadow: 'inset 0px -4px 10px rgba(0, 0, 0, 0.5)',
        }}
      >
        <div className="flex flex-col gap-3">
          <h3 className="bg-golden-gradient text-transparent bg-clip-text font-bold text-xl text-center drop-shadow-tight">
            Descubra seu Arquétipo Pessoal e desbloqueie seu Potencial Cósmico
          </h3>
          <div className="flex flex-col gap-3 font-roboto">
            <p className="text-left" style={{ fontSize: '14px' }}>
              O Espelho Cósmico é sua porta de entrada para a autodescoberta,
              combinando a antiga sabedoria da astrologia com o poder da
              criatividade moderna. Usando seu mapa astral, descobrimos sua
              <span className="bg-golden-gradient text-transparent bg-clip-text font-bold">
                {' '}
                Coroa{' '}
              </span>
              - os três elementos celestiais que moldam a essência de quem você
              é:
            </p>

            <p className="text-left text-oldgold font-bold text-base">
              • Sol:
              <span
                className="text-white font-medium"
                style={{ fontSize: '14px' }}
              >
                {' '}
                Sua identidade central e força vital
              </span>
            </p>

            <p className="text-left text-oldgold font-bold text-base">
              • Ascendente:
              <span
                className="text-white font-medium"
                style={{ fontSize: '14px' }}
              >
                {' '}
                A lente pela qual o mundo vê você.
              </span>
            </p>

            <p className="text-left text-oldgold font-bold text-base">
              • Lua:
              <span
                className="text-white font-medium"
                style={{ fontSize: '14px' }}
              >
                {' '}
                O coração de suas emoções e mundo interior.
              </span>
            </p>

            <p>
              A partir dessas três influências poderosas, criamos uma seleção de
              arquétipos que refletem sua combinação exclusiva de energia
              cósmica. Cada arquétipo é uma representação vívida de sua
              personalidade, pontos fortes e potenciais ocultos.
            </p>

            <p className="text-center font-extrabold my-2">
              Descubra. <span className="text-oldgold"> Crie. </span>{' '}
              <span className="bg-golden-gradient text-transparent bg-clip-text">
                {' '}
                Explore.{' '}
              </span>
            </p>

            <p className="text-left text-oldgold font-black ">
              1. Descubra seus Arquétipos:
              <span
                className="text-white font-medium "
                style={{ fontSize: '14px' }}
              >
                {' '}
                Escolha o arquétipo que melhor ressoe com sua essência.
              </span>
            </p>

            <p className="text-left text-oldgold font-black ">
              2. Visualize sua Persona:{' '}
              <span
                className="text-white font-medium "
                style={{ fontSize: '14px' }}
              >
                {' '}
                Assista enquanto nós transformamos seus arquétipos escolhidos em
                uma representação visual impressionante, trazendo seu Eu Cósmico
                {' à'} vida.
              </span>
            </p>

            <p className="text-left text-oldgold font-black ">
              3. Mergulhe em seu Estudo:{' '}
              <span
                className="text-white font-medium "
                style={{ fontSize: '14px' }}
              >
                {' '}
                Receba uma profundo leitura sobre o significado e inspiração por
                trás de seu arquétipo, oferecendo insights sobre sua
                personalidade e propósito.
              </span>
            </p>

            <h3 className="text-oldgold font-semibold text-lg text-center font-inter my-1">
              Por que Espelho Cósmico?
            </h3>

            <p className="font-medium">
              Seu arquétipo é mais que um reflexo - é a expressão criativa da
              jornada de sua alma. Caso você esteja procurando clareza,
              inspiração, ou simplesmente tem curiosidade sobre sua
              personalidade cósmica, o Espelho Cósmico proporciona uma
              experiência única que é tão perspicaz quanto inspiradora.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="w-full mt-8 relative">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 font-roboto items-center">
            <p className="text-white text-base font-semibold">
              Créditos necessários:
            </p>
            <span className="text-oldgold font-extrabold text-xl line-through">
              {oldPrice}
            </span>
            <div className="absolute -top-5 left-[214px]">
              <span className="bg-golden-gradient text-transparent bg-clip-text font-extrabold text-3xl">
                {price}
              </span>
            </div>
          </div>

          <div className="flex gap-2 font-roboto items-center">
            <p className="text-white text-xl font-semibold">Seu saldo:</p>
            <span
              className={`font-extrabold text-xl ${
                balance < price ? 'text-red-400' : 'text-LightGreen'
              }`}
            >
              {balance}
            </span>
          </div>
          <div className="w-[100px] h-[45px] bg-golden-gradient p-[1px] -rotate-[10deg] absolute top-5 right-2">
            <div className="w-full h-full bg-CustomBlack text-center flex items-center justify-center">
              <p className="text-oldgolddark text-base font-extrabold">
                Oferta Limitada
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="absolute bottom-2">
        <div className="flex justify-center gap-4 relative">
          <Button
            variant="main"
            text="GERAR"
            base="golden"
            onClick={handleClick}
            icon={isUnlocked ? '' : <LockIconButton />}
            iconPosition="left"
          />
        </div>
      </div>
    </div>
  );
};

export default ArtifactIntro;
