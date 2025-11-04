"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacidadePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const scrollToSection = (id: string) => {
    router.push(`/#${id}`);
  };

  return (
    <div className="min-h-screen">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />
      <main className="py-24 pt-40 bg-background text-icon">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-primary mb-6">
            POLÍTICA DE PRIVACIDADE – MOTOWAVE
          </h1>
          <p className="text-sm text-icon/70 mb-2">Versão: 1.0</p>
          <p className="text-sm text-icon/70 mb-8">
            Vigência a partir de: 01/11/2025
          </p>

          <div className="space-y-8 text-icon/90">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-icon">
                1. Quem somos e o que este documento regula
              </h2>
              <p>
                Esta Política de Privacidade descreve como o MotoWave realiza o
                tratamento de dados pessoais dos usuários. Para fins deste
                documento, considera-se MotoWave o desenvolvedor e gestor da
                plataforma móvel e web destinada ao gerenciamento de manutenção
                preventiva de motocicletas. Esta política se aplica ao
                aplicativo móvel. Ao criar uma conta ou utilizar os
                serviços, o usuário declara que leu, compreendeu e concorda com
                os termos abaixo.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-icon">
                2. Definições importantes
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>a) Dados Pessoais:</strong> qualquer informação que
                  identifique ou possa identificar uma pessoa natural.
                </li>
                <li>
                  <strong>b) Tratamento:</strong> qualquer operação envolvendo
                  dados, como coleta, armazenamento, uso, compartilhamento ou
                  eliminação.
                </li>
                <li>
                  <strong>c) Controlador:</strong> responsável por tomar
                  decisões sobre o tratamento dos dados pessoais, sendo o
                  MotoWave.
                </li>
                <li>
                  <strong>d) Titular:</strong> pessoa natural usuária do
                  MotoWave.
                </li>
                <li>
                  <strong>e) Operadores/Suboperadores:</strong> serviços ou
                  empresas que tratam dados pessoais em nome do MotoWave.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-icon">
                3. Quais dados coletamos
              </h2>

              <h3 className="text-xl font-semibold text-icon/80 pt-2">
                3.1 Dados fornecidos pelo usuário
              </h3>
              <p>
                Nome completo, e-mail, senha criptografada, data de nascimento,
                telefone e CPF quando necessário para confirmação de
                identidade e prevenção a fraudes. Também são coletados dados das
                motocicletas cadastradas, como marca, modelo, ano e
                quilometragem.
              </p>

              <h3 className="text-xl font-semibold text-icon/80 pt-2">
                3.2 Dados gerados durante o uso do aplicativo
              </h3>
              <p>
                São coletados registros de manutenção (datas, quilometragem,
                peças, observações e custos), histórico de quilometragem e
                preferências de lembretes. Caso o usuário inicie transferência
                de motocicleta para outra pessoa, coletamos o e-mail indicado
                com a finalidade exclusiva de processar esta função.
              </p>

              <h3 className="text-xl font-semibold text-icon/80 pt-2">
                3.3 Dados coletados automaticamente
              </h3>
              <p>
                Endereço IP, sistema operacional, modelo do dispositivo, versão
                do aplicativo, desempenho, erros, travamentos e token para envio
                de notificações. Tais informações são necessárias para
                segurança, funcionamento, suporte e melhoria da plataforma.
              </p>

              <h3 className="text-xl font-semibold text-icon/80 pt-2">
                3.4 Localização
              </h3>
              <p>
                Se o usuário autorizar, coletamos dados de localização
                aproximada ou exata para exibir oficinas e serviços automotivos
                próximos. O usuário pode negar ou desativar essa permissão a
                qualquer momento, porém essa funcionalidade ficará limitada.
              </p>

              <h3 className="text-xl font-semibold text-icon/80 pt-2">
                3.5 Cookies e tecnologias semelhantes
              </h3>
              <p>
                O aplicativo móvel não utiliza cookies. Caso o usuário acesse o
                site institucional, poderão ser utilizados cookies essenciais ao
                funcionamento da plataforma e, mediante consentimento, cookies de
                análise.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-icon">
                4. Finalidades do uso dos dados
              </h2>
              <p>
                Os dados coletados são utilizados para fornecer e aprimorar os
                serviços oferecidos, o que inclui:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>a) criação e autenticação de conta;</li>
                <li>
                  b) operação do aplicativo e de suas funcionalidades, como
                  registro de manutenções, histórico e notificações;
                </li>
                <li>c) localização de oficinas;</li>
                <li>
                  d) processamento de transferência de motocicletas entre
                  usuários;
                </li>
                <li>
                  e) telemetria, performance, segurança e prevenção a fraudes;
                </li>
                <li>f) atendimento ao usuário.</li>
              </ul>
              <p>
                Não vendemos, alugamos ou comercializamos dados pessoais.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-icon">
                5. Bases legais aplicáveis
              </h2>
              <p>
                O tratamento de dados ocorre com fundamento nas hipóteses
                autorizadas pela legislação brasileira, especialmente a Lei Geral
                de Proteção de Dados (Lei nº 13.709/2018), com base em:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  a) execução de contrato, para fornecimento das funcionalidades
                  essenciais do MotoWave;
                </li>
                <li>
                  b) consentimento do titular, em casos específicos como acesso
                  à localização;
                </li>
                <li>
                  c) legítimo interesse do controlador, quando necessário para
                  segurança, prevenção a fraudes, melhoria da plataforma e
                  funcionamento técnico;
                </li>
                <li>d) cumprimento de obrigações legais e regulatórias.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-icon">
                6. Compartilhamento de dados
              </h2>
              <p>
                Os dados poderão ser compartilhados com serviços técnicos
                essenciais, como provedores de servidor, hospedagem, banco de
                dados, mensageria de notificações e serviços de mapa e
                geolocalização. Tais parceiros atuam como operadores/suboperadores
                e tratam os dados apenas conforme instruções do MotoWave. Em caso
                de ordem judicial ou legalmente exigido por autoridades públicas,
                os dados poderão ser fornecidos conforme obrigação legal.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-icon">
                7. Transferências internacionais
              </h2>
              <p>
                Caso servidores ou serviços técnicos estejam localizados fora do
                Brasil, asseguramos que o tratamento respeitará salvaguardas
                adequadas, como cláusulas contratuais padrão e exigências de
                segurança compatíveis com a LGPD.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-icon">
                8. Segurança da informação
              </h2>
              <p>
                O MotoWave utiliza medidas técnicas e administrativas adequadas
                para proteção dos dados pessoais, incluindo criptografia em
                trânsito, armazenamento de senhas com hash, mecanismos de
                controle de acesso, auditoria e backups. Embora nos empenhemos
                para impedir incidentes, nenhum sistema é capaz de garantir
                segurança absoluta. Em eventual incidente que represente risco aos
                titulares, o MotoWave realizará comunicação apropriada, conforme
                determina a lei.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-icon">
                9. Retenção e eliminação de dados
              </h2>
              <p>
                Os dados permanecem armazenados enquanto a conta estiver ativa.
                Caso o usuário solicite a exclusão, os dados serão eliminados de
                forma segura, exceto quando houver obrigação legal de retenção
                por período específico. Dados de telemetria e registros técnicos
                poderão ser mantidos por prazo limitado para suporte e segurança,
                sendo posteriormente anonimizados ou eliminados.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-icon">
                10. Transferência de motocicletas entre usuários
              </h2>
              <p>
                Para efetivar a transferência, o atual proprietário informa o
                e-mail do destinatário. O histórico da motocicleta será acessível
                ao novo proprietário somente após confirmação de ambos os lados.
                Informações como CPF, senha e dados pessoais sensíveis do
                proprietário anterior não são exibidos. Caso o convite de
                transferência não seja aceito dentro de prazo razoável, o contato
                é excluído.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-icon">
                11. Direitos do usuário
              </h2>
              <p>
                O usuário pode exercer, a qualquer momento e mediante requisição,
                os direitos previstos na LGPD, incluindo:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>a) confirmação da existência de tratamento;</li>
                <li>b) acesso aos dados;</li>
                <li>
                  c) correção de dados incompletos, inexatos ou desatualizados;
                </li>
                <li>
                  d) anonimização, bloqueio ou eliminação de dados
                  desnecessários;
                </li>
                <li>e) portabilidade dos dados, quando aplicável;</li>
                <li>f) eliminação de dados tratados com consentimento;</li>
                <li>g) informações sobre uso compartilhado;</li>
                <li>h) revogação de consentimento.</li>
              </ul>
              <p>
                As solicitações serão respondidas dentro de prazo razoável,
                compatível com as exigências legais.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-icon">
                12. Menores de idade
              </h2>
              <p>
                O MotoWave não é destinado a menores de 13 anos. Caso seja
                identificado o uso por menor sem autorização legal, a conta
                poderá ser removida e os dados eliminados.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-icon">
                13. Contato
              </h2>
              <p>
                Para solicitações, reclamações ou exercício de direitos
                relacionados a esta Política de Privacidade, o usuário poderá
                entrar em contato pelo e-mail: motowave.suport@gmail.com.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-icon">
                14. Atualizações desta Política
              </h2>
              <p>
                Esta Política pode ser alterada a qualquer momento, por motivos
                legais, técnicos ou em decorrência da evolução do MotoWave.
                Alterações significativas serão comunicadas por meio do
                aplicativo ou do site. O uso contínuo após a atualização implica
                concordância com os novos termos.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}