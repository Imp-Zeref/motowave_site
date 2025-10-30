"use client";
import { useState, useEffect, useRef } from "react";
import PhoneMockup from "./Features/PhoneMockup";
import { Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const features = [
  {
    title: "Lembretes Inteligentes",
    description:
      "Monitore trocas de óleo, filtros e velas. Nosso app avisa antes que o problema apareça.",
    image: "/screens/screen2.png",
    hotspotPosition: "top-1/2 left-[45%]",
  },
  {
    title: "Histórico de Peças",
    description:
      "Saiba exatamente quando trocou os pneus, pastilhas de freio e a relação. Valorize sua moto na revenda.",
    image: "/screens/screen5.png",
    hotspotPosition: "bottom-[20%] left-[30%]",
  },
  {
    title: "Checklist de Viagem",
    description:
      "Monte seu checklist personalizado para garantir que o guidão, luzes e calibragem estão 100% para a estrada.",
    image: "/screens/screen3.png",
    hotspotPosition: "top-[35%] left-[55%]",
  },
  {
    title: "Guias e Tutoriais",
    description:
      "Aprenda a fazer manutenções básicas você mesmo com nossos guias passo a passo.",
    image: "/screens/screen4.png",
    hotspotPosition: "top-1/2 right-[20%]",
  },
];

export default function InteractiveFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const componentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      features.forEach((_, index) => {
        ScrollTrigger.create({
          trigger: `#feature-text-${index}`,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        });
      });
    }, componentRef);

    return () => ctx.revert();
  }, []);

  const handleFeatureSelect = (index: number) => {
    setActiveIndex(index);
    gsap.to(window, {
      scrollTo: {
        y: `#feature-text-${index}`,
        offsetY: window.innerHeight / 3,
        autoKill: false,
      },
      duration: 0.8,
      ease: "power2.inOut",
    });
  };

  return (
    <section
      id="features"
      className="py-20 bg-black text-white"
      ref={componentRef}
    >
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-500">
          Sua moto, 100% no controle
        </h1>
        <p className="text-gray-300 mt-3">
          Role a tela ou clique nos pontos para descobrir como o MotoWave
          cuida de cada detalhe.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        <div className="flex flex-col space-y-16 lg:space-y-0">
          {features.map((feature, index) => (
            <div
              key={index}
              id={`feature-text-${index}`}
              className="flex flex-col justify-center transition-opacity duration-500"
              style={{
                minHeight: "70vh",
                opacity: activeIndex === index ? 1 : 0.4,
              }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-primary">
                  <Check className="w-6 h-6 text-background" />
                </div>
                <h3 className="text-3xl font-bold text-primary">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-300 text-lg mb-8">
                {feature.description}
              </p>
              
              <div className="lg:hidden">
                <PhoneMockup image={feature.image} />
              </div>
            </div>
          ))}
        </div>
        
        <div className="hidden lg:block lg:sticky top-24 h-[calc(100vh-100px)]">
          <div className="relative w-full h-full">
            <img
              src="/background/bmw_biker.png"
              alt="Motocicleta"
              className="w-full h-full object-contain scale-x-[-1]"
            />
            
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => handleFeatureSelect(index)}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${feature.hotspotPosition}`}
                aria-label={feature.title}
              >
                <span className="relative flex h-5 w-5">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${activeIndex === index ? 'bg-primary' : 'bg-white/50'} opacity-75`}></span>
                  <span className={`relative inline-flex rounded-full h-5 w-5 ${activeIndex === index ? 'bg-primary' : 'bg-white'} border-2 border-background`}></span>
                </span>
              </button>
            ))}
            
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[300px]">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="absolute w-full transition-opacity duration-500"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    pointerEvents: activeIndex === index ? "auto" : "none",
                  }}
                >
                  <PhoneMockup image={feature.image} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}