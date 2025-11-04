"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermosPage() {
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
            TERMOS DE USO – MOTOWAVE
          </h1>
          <p className="text-sm text-icon/70 mb-2">Versão: 1.0</p>
          <p className="text-sm text-icon/70 mb-8">
            Vigência a partir de: 01/11/2025
          </p>

          <div className="space-y-8 text-icon/90">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-icon">
                1. Objeto e aceitação
              </h2>
              <p>
                Os presentes Termos de Uso regulam o acesso e a utilização do
                MotoWave, aplicativo destinado ao gerenciamento de manutenção
                preventiva de motocicletas, permitindo ao usuário cadastrar
                motos, registrar manutenções, consultar históricos, receber
                notificações, localizar oficinas e transferir o histórico da
                motocicleta para outro usuário.
              </p>
              <p>
                Ao criar uma conta, acessar ou utilizar o MotoWave, o usuário
                declara ter lido, compreendido e concordado integralmente com
                estes Termos de Uso e com a Política de Privacidade
                correspondente. Caso discorde, recomenda-se que o usuário não
                utilize o aplicativo.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-icon">
                2. Cadastro e conta do usuário
              </h2>
              <ul className="list-decimal pl-6 space-y-2">
                <li>
                  Para utilizar o MotoWave é necessário criar uma conta,
                  fornecendo dados corretos e atualizados.
                </li>
                <li>
                  O usuário é responsável pela veracidade das informações
                  fornecidas e por manter sua senha em sigilo.
                </li>
                <li>
                  O usuário se compromete a não compartilhar sua conta com
                  terceiros. Toda atividade realizada por meio da conta será
                  atribuída ao titular da conta.
                </li>
                <li>
                  Em caso de suspeita de uso indevido, violação de segurança ou
                  acesso não autorizado, o usuário deverá comunicar imediatamente
                  via canal de suporte informado ao final deste documento.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-icon">
                3. Uso permitido do aplicativo
              </h2>
              <ul className="list-decimal pl-6 space-y-2">
                <li>
                  O usuário concorda em utilizar o MotoWave apenas para fins
                  legítimos, respeitando a legislação brasileira, os presentes
                  Termos e os direitos de outros usuários.
                </li>
                <li>
                  É estritamente proibido:
                  <ul className="list-[lower-alpha] pl-6 space-y-1 mt-2">
                    <li>
                      alterar, copiar, clonar, vender, redistribuir ou explorar
                      comercialmente o aplicativo ou seu código;
                    </li>
                    <li>
                      tentar burlar, violar ou acessar partes do sistema não
                      autorizadas;
                    </li>
                    <li>
                      inserir informações falsas, ofensivas, ilícitas ou que
                      causem prejuízo a terceiros;
                    </li>
                    <li>
                      utilizar o MotoWave com finalidade de fraude ou qualquer
                      atividade ilegal.
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-icon">
                4. Responsabilidades do usuário
              </h2>
              <ul className="list-decimal pl-6 space-y-2">
                <li>
                  Todas as informações, registros e dados inseridos pelo usuário
                  (como quilometragem, datas, peças trocadas e observações) são
                  de sua responsabilidade.
                </li>
                <li>
                  O usuário concorda que o MotoWave é um organizador e
                  facilitador de registros, não substituindo oficinas,
                  diagnósticos profissionais ou manuais de fabricante.
                </li>
                <li>
                  O usuário assume qualquer risco decorrente da interpretação de
                  informações ou decisões tomadas a partir do uso do aplicativo.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-icon">
                5. Limitações de responsabilidade do MotoWave
              </h2>
              <ul className="list-decimal pl-6 space-y-2">
                <li>O MotoWave NÃO realiza serviços mecânicos.</li>
                <li>
                  O MotoWave NÃO garante que o uso da plataforma impedirá
                  falhas, acidentes, defeitos mecânicos, multas, danos
                  materiais ou prejuízos financeiros.
                </li>
                <li>
                  Os resultados e alertas gerados pelo aplicativo são estimativas
                  baseadas em dados fornecidos pelo próprio usuário, e podem
                  variar de acordo com condições reais da motocicleta, desgaste
                  de peças, forma de pilotagem, clima e manutenção realizada
                  fora do sistema.
                </li>
                <li>
                  O MotoWave não se responsabiliza por:
                  <ul className="list-[lower-alpha] pl-6 space-y-1 mt-2">
                    <li>decisões de troca, manutenção ou uso do veículo;</li>
                    <li>informações inseridas incorretamente pelo usuário;</li>
                    <li>
                      serviços realizados em oficinas cadastradas ou
                      consultadas;
                    </li>
                    <li>
                      danos diretos ou indiretos decorrentes do uso do
                      aplicativo.
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-icon">
                6. Disponibilidade e funcionamento
              </h2>
              <ul className="list-decimal pl-6 space-y-2">
                <li>
                  O MotoWave poderá passar por manutenções, atualizações e
                  melhorias, podendo ficar temporariamente indisponível.
                </li>
                <li>
                  Não há garantia de funcionamento ininterrupto ou livre de
                  erros, embora sejam empregadas práticas técnicas para manter o
                  melhor desempenho possível.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-icon">
                7. Permissões e funcionalidades adicionais
              </h2>
              <ul className="list-decimal pl-6 space-y-2">
                <li>
                  <strong>Localização:</strong> mediante autorização do usuário,
                  o aplicativo pode acessar a localização aproximada ou exata
                  para exibir oficinas próximas. O usuário pode revogar a
                  permissão a qualquer momento, sem impedir o uso geral do
_ aplicativo.
                </li>
                <li>
                  <strong>Notificações:</strong> o usuário poderá receber
                  alertas de manutenção e avisos do sistema. A qualquer momento
                  é possível desativar notificações pelo aparelho ou pelo
_ aplicativo.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-icon">
                8. Transferência de motocicletas entre usuários
              </h2>
              <ul className="list-decimal pl-6 space-y-2">
                <li>
                  O aplicativo permite a transferência do histórico de manutenção
                  de uma motocicleta para outro usuário. Para isso, o atual
                  proprietário informa o e-mail do novo proprietário.
                </li>
                <li>
                  Uma transferência só é concluída após aceitação do
_ destinatário.
                </li>
                <li>
                  O histórico da motocicleta passa a ser exibido ao novo
                  proprietário apenas após confirmação.
                </li>
                <li>
                  Informações pessoais sensíveis do proprietário anterior não
                  são exibidas ao novo proprietário.
                </li>
                <li>
                  Caso o convite de transferência não seja aceito dentro de
                  prazo razoável, o contato do destinatário pode ser excluído.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-icon">
                9. Planos pagos, anúncios e assinaturas (se aplicável)
              </h2>
              <ul className="list-decimal pl-6 space-y-2">
                <li>
                  Recursos gratuitos e pagos podem coexistir na mesma versão do
                  aplicativo. Caso sejam disponibilizados planos pagos, os
                  valores serão informados dentro do aplicativo ou loja oficial.
                </li>
                <li>
                  Em caso de assinatura, a cobrança poderá ser realizada pela
                  loja oficial (Google Play ou App Store) seguindo suas regras de
                  cancelamento e reembolso.
                </li>
                <li>
                  O usuário é responsável por cancelar sua assinatura caso não
                  deseje renovação automática.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-icon">
                10. Propriedade intelectual
              </h2>
              <ul className="list-decimal pl-6 space-y-2">
                <li>
                  O MotoWave, seu código, banco de dados, layout, interface,
                  marcas, textos e conteúdos pertencem exclusivamente ao
                  desenvolvedor e/ou licenciante.
                </li>
                <li>
                  É vedada qualquer utilização não autorizada, incluindo
                  engenharia reversa, reprodução total ou parcial, modificação,
                  comercialização, sublicenciamento ou distribuição sem
                  permissão expressa.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-icon">
                11. Suspensão e encerramento
              </h2>
              <ul className="list-decimal pl-6 space-y-2">
                <li>
                  O MotoWave pode suspender ou encerrar o acesso de usuários que
                  violem estes Termos ou realizem atividades fraudulentas,
                  ilícitas ou que representem risco para a plataforma.
                </li>
                <li>
                  O usuário pode excluir sua conta a qualquer momento. Após
                  exclusão, dados pessoais poderão ser eliminados ou
                  anonimizados conforme a legislação aplicável e a Política de Privacidade.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-icon">12. Suporte</h2>
              <p>
                Para atendimento, solicitações ou dúvidas, o usuário poderá
                entrar em contato pelo e-mail de suporte: motowave.suport@gmail.com.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-icon">
                13. Política de Privacidade
              </h2>
              <p>
                A Política de Privacidade é parte integrante destes Termos de Uso
                e regula o tratamento de dados pessoais. Ao aceitar estes Termos,
                o usuário declara ter lido e compreendido a Política de Privacidade.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-icon">
                14. Alterações nos Termos
              </h2>
              <p>
                Os Termos podem ser atualizados periodicamente por motivos
                legais, técnicos ou operacionais. Alterações relevantes poderão
                ser comunicadas no aplicativo. O uso continuado após a
                atualização significa concordância com os novos termos.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-icon">
                15. Foro e legislação
              </h2>
              <p>
                Estes Termos são regidos pelas leis da República Federativa do
                Brasil. Em caso de controvérsia, as partes elegem o foro da
                comarca de Camaquã/RS do responsável pelo app, salvo
                disposição legal em contrário.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}