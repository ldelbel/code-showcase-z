import GradientText from '@/shared/GradientText';
import ArrowInBoxIcon from '@/shared/Icons/ArrowInBox';
import { useNavigate } from 'react-router-dom';

export const TermsAndConditions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto bg-white text-gray-800 max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">
          Termos e Condições de Uso
        </h1>

        <Section title="1. Aceitação dos Termos">
          Ao acessar ou utilizar o aplicativo Zodic (o “Aplicativo”), você
          concorda com estes Termos e Condições de Uso (“Termos”), incluindo
          nossas políticas de privacidade e demais diretrizes disponibilizadas.
          Se você não concordar com os Termos, não deverá utilizar o Aplicativo.
        </Section>

        <Section title="2. Descrição do Serviço">
          Zodic é um aplicativo de astrologia que oferece interpretações
          personalizadas com base em dados astrológicos fornecidos pelo usuário.
          O conteúdo gerado inclui textos, imagens e conceitos simbólicos,
          criados por inteligência artificial e regras astrológicas
          pré-definidas.
        </Section>

        <Section title="3. Cadastro e Responsabilidades do Usuário">
          <ul className="list-disc list-inside space-y-1">
            <li>
              Para utilizar o Aplicativo, o usuário deve fornecer informações
              verdadeiras, precisas e atualizadas, incluindo dados de
              nascimento.
            </li>
            <li>
              O usuário é responsável por manter a confidencialidade de suas
              credenciais de acesso e por todas as atividades realizadas com sua
              conta.
            </li>
            <li>
              O uso do Aplicativo é permitido apenas para maiores de 13 anos.
              Menores de idade devem ter autorização de um responsável legal.
            </li>
          </ul>
        </Section>

        <Section title="4. Conteúdo Gerado e Limitações">
          <p>
            Os conteúdos fornecidos (interpretações, imagens, relatórios etc.)
            são gerados com base em algoritmos e não devem ser considerados
            aconselhamento profissional, médico, psicológico, jurídico ou
            financeiro.
          </p>
          <p>
            O conteúdo é de natureza simbólica, artística e reflexiva. Sua
            interpretação é subjetiva e de responsabilidade do usuário.
          </p>
        </Section>

        <Section title="5. Direitos Autorais e Propriedade Intelectual">
          <p>
            Todo o conteúdo exibido no Aplicativo, incluindo textos, imagens,
            gráficos, marcas e algoritmos, é de propriedade da Zodic ou
            licenciado para uso, e protegido pelas leis de propriedade
            intelectual.
          </p>
          <p>
            O usuário recebe uma licença limitada, não exclusiva e
            intransferível para uso pessoal do conteúdo. É proibido copiar,
            redistribuir, modificar ou usar comercialmente sem autorização
            expressa por escrito.
          </p>
        </Section>

        <Section title="6. Pagamentos e Assinaturas">
          <p>
            Alguns recursos do Aplicativo são pagos. Os valores, formas de
            pagamento, renovação automática e cancelamento estão descritos na
            seção de Pagamentos.
          </p>
          <p>
            Ao contratar um plano ou pacote, o usuário concorda com os termos de
            cobrança aplicáveis.
          </p>
          <p>
            Nenhuma garantia de resultado é oferecida sobre os conteúdos
            adquiridos.
          </p>
        </Section>

        <Section title="7. Cancelamento e Reembolsos">
          <p>
            O usuário pode cancelar a assinatura a qualquer momento pela
            plataforma utilizada para compra (App Store, Google Play, ou site
            próprio).
          </p>
          <p>
            Reembolsos seguirão as políticas da plataforma de pagamento
            utilizada. Zodic se reserva o direito de avaliar casos excepcionais.
          </p>
        </Section>

        <Section title="8. Privacidade e Dados Pessoais">
          <p>
            O uso do Aplicativo está sujeito à nossa Política de Privacidade,
            que descreve como coletamos, usamos e protegemos os dados dos
            usuários.
          </p>
          <p>
            Dados sensíveis, como data, hora e local de nascimento, são
            utilizados apenas para geração dos conteúdos astrológicos.
          </p>
        </Section>

        <Section title="9. Modificações no Aplicativo ou nos Termos">
          <p>
            Zodic pode modificar o Aplicativo ou estes Termos a qualquer
            momento. Alterações entrarão em vigor assim que publicadas.
          </p>
          <p>
            O uso contínuo do Aplicativo após alterações será considerado como
            concordância com os novos termos.
          </p>
        </Section>

        <Section title="10. Limitação de Responsabilidade">
          <p>
            Zodic não se responsabiliza por decisões pessoais ou profissionais
            tomadas com base nos conteúdos fornecidos.
          </p>
          <p>
            O serviço é fornecido “como está”, sem garantias de funcionamento
            ininterrupto, exatidão ou adequação a fins específicos.
          </p>
        </Section>

        <Section title="11. Lei Aplicável e Foro">
          <p>
            Estes Termos são regidos pelas leis da República Federativa do
            Brasil.
          </p>
          <p>
            Fica eleito o foro da comarca de São Paulo/SP para dirimir eventuais
            controvérsias.
          </p>
        </Section>

        <Section title="12. Uso de Dados para Fins Estatísticos e Pesquisa">
          <p>
            Ao utilizar o Aplicativo, o usuário concorda que os dados
            fornecidos, incluindo informações astrológicas (como data, hora e
            local de nascimento) e dados de localização, poderão ser utilizados
            de forma <strong>anônima e agregada</strong> para fins de:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Análise de padrões comportamentais e simbólicos com base nos dados
              astrológicos;
            </li>
            <li>
              Pesquisas internas e mercadológicas, visando o aprimoramento de
              funcionalidades, desenvolvimento de novos produtos e entendimento
              do perfil dos usuários;
            </li>
            <li>
              Estudos estatísticos e relatórios analíticos, sem identificação
              pessoal dos indivíduos.
            </li>
          </ul>
          <p className="mt-2">
            Nenhuma informação será utilizada de forma que identifique
            diretamente o usuário, e todos os dados utilizados para esses fins
            serão tratados conforme as diretrizes da{' '}
            <strong>Lei Geral de Proteção de Dados (Lei nº 13.709/18)</strong> e
            demais normas aplicáveis.
          </p>
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
