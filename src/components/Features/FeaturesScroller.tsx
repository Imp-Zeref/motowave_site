"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Interface Intuitiva",
    description:
      "Tenha tudo organizado: dashboard simples, visual limpo e navegação rápida.",
    image: "/screens/screen1.png",
  },
  {
    title: "Lembretes Inteligentes",
    description:
      "Receba notificações automáticas baseadas em quilometragem e tempo de uso real.",
    image: "/screens/screen2.png",
  },
  {
    title: "Checklist Personalizado",
    description:
      "Monte seus próprios checklists de manutenção, com itens específicos da sua moto.",
    image: "/screens/screen3.png",
  },
  {
    title: "Guias Passo a Passo",
    description:
      "Aprenda como cuidar da sua moto sozinho com tutoriais completos.",
    image: "/screens/screen4.png",
  },
  {
    title: "Histórico Completo",
    description:
      "Saiba tudo o que já foi feito na sua moto: peças trocadas, datas, custos e KM.",
    image: "/screens/screen5.png",
  },
  {
    title: "Oficinas Parceiras",
    description: "Agende serviços direto no app e veja oficinas próximas.",
    image: "/screens/screen6.png",
  },
];

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const componentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      features.forEach((_, index) => {
        ScrollTrigger.create({
          trigger: `#feature-item-${index}`,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        });
      });
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="features"
      className="text-center py-20 bg-black text-white"
      ref={componentRef}
    >
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-orange-500">
          Sua moto sempre pronta pra rodar
        </h1>
        <p className="text-gray-300 mt-3">
          Controle total de manutenção, alertas inteligentes e histórico completo.
        </p>
      </div>

      <div className="max-w-7xl mx-auto mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col relative">
          <div className="lg:h-screen" />
          {features.map((feature, index) => (
            <div
              key={index}
              id={`feature-item-${index}`}
              className={`flex flex-col justify-center text-left transition-all duration-500 ease-in-out ${
                activeIndex === index
                  ? "opacity-100 scale-100"
                  : "opacity-40 scale-95"
              }`}
              style={{ minHeight: "80vh" }}
            >
              <div
                className={`p-6 rounded-xl border-2 ${
                  activeIndex === index
                    ? "bg-primary/5 border-primary"
                    : "bg-gray-900/50 border-transparent"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-primary"
                        : "bg-gray-700 text-gray-400"
                    }`}
                  >
                    <Check
                      className={`w-5 h-5 ${
                        activeIndex === index
                          ? "text-background"
                          : "text-gray-400"
                      }`}
                    />
                  </div>
                  <h3
                    className={`text-2xl font-bold transition-colors duration-300 ${
                      activeIndex === index ? "text-primary" : "text-white"
                    }`}
                  >
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-400 mt-3 pl-12">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
          <div className="lg:h-screen" />
        </div>
        <div className="lg:sticky top-24 h-full">
          <PhoneMockup image={features[activeIndex].image} />
        </div>
      </div>
    </section>
  );
}