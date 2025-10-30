import { CheckCircle } from 'lucide-react'

function AppMockup() {
  return (
    <div className="relative w-full max-w-[220px] sm:max-w-[290px] mx-auto lg:max-w-none lg:mx-0">
      <div className="absolute -inset-4 rounded-3xl bg-primary/20 blur-xl opacity-40" />
      <div className="relative bg-secondary border-4 border-icon/10 rounded-[32px] overflow-hidden shadow-2xl">
        <img
          src="screens/hand.png"
          alt="Tela principal do aplicativo MotoWave"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  )
}

const benefitsList = [
  {
    title: "Troque a surpresa pela previsão",
    description: "Nosso sistema avisa antes do problema acontecer, evitando gastos emergenciais."
  },
  {
    title: "Alertas que trabalham por você",
    description: "Receba notificações push sobre trocas de óleo, freios e pneus, sem precisar abrir o app."
  },
  {
    title: "Histórico completo na palma da mão",
    description: "Saiba exatamente o que foi feito e quando foi feito, valorizando sua moto na revenda."
  },
  {
    title: "Pegue a estrada sem preocupações",
    description: "Chegue ao fim de semana com a moto 100% revisada para sua viagem."
  },
  {
    title: "Performance e economia de combustível",
    description: "Manutenção em dia significa um motor rodando liso e gastando menos."
  }
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 sm:py-20 relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
          <div className="order-1 lg:order-2">
            <AppMockup />
          </div>

          <div className="order-2 lg:order-1">
            <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-primary">
              Sua moto, <span className="text-icon">sempre nova.</span>
            </h2>
            
            <div className="space-y-8">
              {benefitsList.map((benefit) => (
                <div key={benefit.title} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-icon">
                      {benefit.title}
                    </h3>
                    <p className="text-icon/70 mt-1">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}