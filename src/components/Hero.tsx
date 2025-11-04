import { ChevronDown } from "lucide-react"

interface HeroProps {
  scrollToSection: (id: string) => void
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/background/bikers_mountain.png')",
          opacity: 0.15,
          filter: "grayscale(100%)",
        }}
      />
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center px-6 sm:px-8 lg:px-10 max-w-5xl mx-auto">
        <div className="flex justify-center ">
          <img
            src='/logos/logo_biker_hand.png'
            width={250}
          ></img>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
          <span className="text-white">Moto</span>
          <span className="text-primary">Wave</span>
          <br />
          <span className="text-icon block mt-2 sm:mt-4 text-lg sm:text-2xl">
            Cada manutenção é uma viagem mais segura.
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-icon/70 mb-8 max-w-2xl mx-auto mt-4">
          Acompanhe a manutenção da sua motocicleta, previna problemas e economize tempo e dinheiro.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection("download")}
            className="bg-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full text-background font-semibold 
            hover:shadow-lg hover:shadow-primary/25 transition-transform duration-200 hover:scale-105 w-full sm:w-auto"
          >
            📱 Baixar Grátis
          </button>

          <button
            onClick={() => scrollToSection("features")}
            className="border-2 border-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full text-icon font-semibold 
            hover:bg-primary hover:text-background transition-transform duration-200 hover:scale-105 w-full sm:w-auto"
          >
            Ver Recursos
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  )
}
