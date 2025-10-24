import GradientText from '@/shared/GradientText';
import ArrowInBoxIcon from '@/shared/Icons/ArrowInBox';
import { useNavigate } from 'react-router-dom';

export const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto bg-white text-gray-800 max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">
          Política de Privacidade — Zodic
        </h1>

        <p className="mb-8 text-gray-600">
          Última atualização: 29 de maio de 2025
        </p>

        <p className="mb-8">
          Esta Política de Privacidade descreve como a Zodic (“nós”, “nosso” ou
          “Aplicativo”) coleta, utiliza, armazena e compartilha suas informações
          quando você utiliza nossos serviços. Ao utilizar o Aplicativo, você
          concorda com esta política.
        </p>

        <div className="border-t border-gray-300 my-4" />

        <Section title="1. Informações Coletadas">
          <p>Coletamos os seguintes tipos de informações:</p>

          <h3 className="text-lg font-semibold mt-4 mb-2">
            1.1 Dados Pessoais
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Nome, e-mail e informações de login (especialmente via
              autenticação social como Google ou Facebook).
            </li>
            <li>
              Dados demográficos opcionais (como gênero ou idioma preferido).
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">
            1.2 Dados Astrológicos
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Data, hora e local de nascimento.</li>
            <li>
              Dados derivados desses, como posicionamentos planetários, casas e
              aspectos.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">
            1.3 Dados Técnicos
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Endereço IP, tipo de dispositivo, sistema operacional e
              informações do navegador.
            </li>
            <li>
              Dados de uso do aplicativo, interações com funcionalidades e
              cliques.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">
            1.4 Dados de Localização
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Informações geográficas aproximadas, obtidas através de APIs de
              localização, quando fornecidas pelo usuário.
            </li>
          </ul>
        </Section>

        <div className="border-t border-gray-300 my-4" />

        <Section title="2. Finalidade do Uso dos Dados">
          <p>Usamos os dados coletados para os seguintes fins:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Gerar conteúdos astrológicos personalizados com base no mapa
              astral.
            </li>
            <li>Criar imagens simbólicas com IA a partir de seus dados.</li>
            <li>Enviar comunicações relevantes sobre o uso do app.</li>
            <li>
              Melhorar a experiência do usuário e realizar manutenção técnica.
            </li>
            <li>
              Realizar análises estatísticas, de uso e perfil, com dados
              anonimizados.
            </li>
            <li>Desenvolver novas funcionalidades e ofertas personalizadas.</li>
          </ul>
        </Section>

        <div className="border-t border-gray-300 my-4" />

        <Section title="3. Compartilhamento com Terceiros">
          <p>Podemos compartilhar dados com:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Serviços de autenticação (como Google e Meta) apenas para login.
            </li>
            <li>
              APIs de localização para conversão de cidade em coordenadas
              geográficas.
            </li>
            <li>
              Serviços de IA como Leonardo.ai para gerar imagens astrológicas
              personalizadas.
            </li>
            <li>
              Plataformas de análise (ex: Google Analytics) para fins de
              métricas.
            </li>
            <li>
              Prestadores de serviço de pagamento, no caso de funcionalidades
              pagas.
            </li>
          </ul>
          <p className="mt-2">
            Todos os dados compartilhados seguem práticas de segurança e
            privacidade compatíveis com a LGPD e outras legislações aplicáveis.
          </p>
        </Section>

        <div className="border-t border-gray-300 my-4" />

        <Section title="4. Armazenamento e Segurança">
          <p>
            Seus dados são armazenados de forma segura em servidores protegidos
            e sob criptografia em trânsito e, quando aplicável, em repouso.
            Aplicamos boas práticas de segurança para proteger suas informações
            contra acesso não autorizado, uso indevido ou perda.
          </p>
        </Section>

        <div className="border-t border-gray-300 my-4" />

        <Section title="5. Inteligência Artificial e Dados Sensíveis">
          <p>
            O Aplicativo utiliza sistemas de inteligência artificial para gerar
            textos e imagens simbólicas baseadas em astrologia. Estes sistemas
            não tomam decisões automatizadas com efeitos legais sobre o usuário.
            O tratamento é exclusivamente para fins artísticos, reflexivos e
            simbólicos.
          </p>
        </Section>

        <div className="border-t border-gray-300 my-4" />

        <Section title="6. Uso de Dados para Estatísticas e Pesquisa">
          <p>
            Dados astrológicos e de localização poderão ser utilizados de forma
            anonimizada e agregada para:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Estudos de comportamento simbólico.</li>
            <li>Análises mercadológicas internas.</li>
            <li>Desenvolvimento de produtos.</li>
          </ul>
          <p className="mt-2">
            Nenhuma informação pessoal identificável será incluída nesses
            estudos.
          </p>
        </Section>

        <div className="border-t border-gray-300 my-4" />

        <Section title="7. Direitos do Usuário (LGPD)">
          <p>Você possui os seguintes direitos garantidos pela LGPD:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Acessar os dados que temos sobre você.</li>
            <li>Corrigir dados incorretos.</li>
            <li>Solicitar a exclusão ou anonimização dos dados.</li>
            <li>Revogar consentimentos previamente dados.</li>
            <li>Solicitar portabilidade dos dados.</li>
          </ul>
          <p className="mt-2">
            Para exercer seus direitos, envie um e-mail para:
            privacidade@zodic.me
          </p>
        </Section>

        <div className="border-t border-gray-300 my-4" />

        <Section title="8. Cookies e Tecnologias de Rastreamento">
          <p>
            Podemos utilizar cookies e ferramentas similares para melhorar sua
            experiência no aplicativo, analisar métricas de navegação e
            personalizar conteúdo. Você pode configurar seu navegador para
            recusar cookies.
          </p>
        </Section>

        <div className="border-t border-gray-300 my-4" />

        <Section title="9. Alterações nesta Política">
          <p>
            Esta Política poderá ser atualizada periodicamente. Recomendamos que
            você a consulte regularmente. Alterações importantes serão
            comunicadas dentro do aplicativo.
          </p>
        </Section>

        <div className="border-t border-gray-300 my-4" />

        <Section title="10. Contato">
          <p>
            Se você tiver qualquer dúvida sobre esta Política de Privacidade ou
            sobre o tratamento dos seus dados, entre em contato:
          </p>
          <p className="mt-2">📧 privacidade@zodic.me</p>
        </Section>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-DarkGray2 text-white p-4 flex justify-start">
        <div
          className="flex items-center gap-1"
          onClick={() => navigate('/main')}
        >
          <ArrowInBoxIcon
            className="drop-shadow-sm cursor-pointer rotate-180"
            size={30}
          />
          <GradientText
            text={'Voltar'}
            fontSize="18px"
            lineHeight="20px"
            small
          />
        </div>
      </div>
    </div>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section className="mb-6">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    {children}
  </section>
);
