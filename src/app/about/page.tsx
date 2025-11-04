"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Linkedin } from "lucide-react";

export default function SobrePage() {
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
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-primary">
              Sobre o MotoWave
            </h1>
            <p className="mt-4 text-lg text-icon/70">
              Nossa paixão por motos transformada em tecnologia.
            </p>
          </div>

          <div className="space-y-12 text-icon/90 text-lg leading-relaxed">
            <section className="p-8 bg-secondary rounded-2xl border border-primary/20">
              <h2 className="text-3xl font-bold text-icon mb-4">
                Nossa Missão
              </h2>
              <p className="mb-4">
                O MotoWave nasceu de um problema real: a dificuldade de
                acompanhar de forma simples e eficaz a manutenção de nossas
                próprias motocicletas. Planilhas se perdem, notas fiscais
                desaparecem e a "memória" falha na hora de lembrar a última
                troca de óleo.
              </p>
              <p>
                Nossa missão é dar a todos os motociclistas, dos iniciantes aos
                mais experientes, o poder de cuidar de suas motos com
                tecnologia. Queremos trocar a preocupação pela prevenção,
                garantindo que cada viagem seja segura e que cada moto tenha sua
                vida útil prolongada, mantendo seu valor.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-icon mb-4 text-center">
                O Criador por Trás do Código
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative flex-shrink-0">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4E03AQGvxVQWPAXjkw/profile-displayphoto-crop_800_800/B4EZmncJ9wIwAI-/0/1759450801750?e=1763596800&v=beta&t=sowy9VEISp2H9_2k2V-Mz8Jgj1oqJ3VFwXUb4I10Tvk"
                    alt="Foto de Gustavo"
                    className="w-48 h-48 rounded-full object-cover border-4 border-primary/50"
                  />
                  <a
                    href="https://www.linkedin.com/in/gustavofsdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-secondary
                               flex items-center justify-center text-primary 
                               border-2 border-primary/50 hover:bg-primary hover:text-background
                               transition-all duration-300 transform hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>

                <div className="flex-1">
                  <p className="mb-4">
                    Eu sou{" "}
                    <span className="font-bold text-primary">
                      Gustavo
                    </span>
                    , um desenvolvedor de software de 27 anos e o criador do
                    MotoWave.
                  </p>
                  <p className="mb-4">
                    Este aplicativo não é apenas um software; é a combinação de
                    duas das minhas maiores paixões: motociclismo e
                    desenvolvimento.
                  </p>
                  <p>
                    Como estudante de Análise e Desenvolvimento de Software, o
                    MotoWave também é o meu Trabalho de Conclusão de Curso
                    (TCC). Dediquei incontáveis horas para construir cada
                    funcionalidade, desde o design do banco de dados até a
                    interface que você vê, pensando em como eu mesmo gostaria
                    de usar um app assim.
                  </p>
                </div>
              </div>
            </section>

            <section className="text-center p-8 bg-secondary rounded-2xl border border-primary/20">
              <h2 className="text-3xl font-bold text-icon mb-4">
                Um Projeto Feito por e para Motociclistas
              </h2>
              <p className="mb-4">
                O MotoWave está em fase Beta porque acreditamos na construção
                comunidade. Estamos buscando motociclistas reais para testar o
                app e nos dizer o que funciona e o que podemos melhorar.
              </p>
              <p>
                Este é um projeto feito com paixão, focado em resolver
                problemas reais. Obrigado por fazer parte desta jornada.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}