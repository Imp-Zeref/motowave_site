import { Star } from 'lucide-react'

const testimonialsList = [
  { name: "Carlos Silva", bike: "Honda CB 600F", text: "Desde que uso o MotoWave, minha moto nunca mais me deixou na mão. Os lembretes são perfeitos!", rating: 5 },
  { name: "Ana Rodrigues", bike: "Yamaha MT-07", text: "App incrível! Me ajudou a economizar muito dinheiro em manutenções desnecessárias.", rating: 5 },
  { name: "Pedro Santos", bike: "Kawasaki Ninja 300", text: "Interface super fácil de usar. Recomendo para todos os motociclistas!", rating: 5 }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-primary">
            O que dizem nossos usuários
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsList.map((t, i) => (
            <div key={i} className="bg-secondary p-6 rounded-2xl border border-primary/30 backdrop-blur-sm">
              <div className="flex mb-4">{[...Array(t.rating)].map((_, i) => <Star key={i} className="h-5 w-5 text-primary fill-current" />)}</div>
              <p className="text-icon/70 mb-4 italic">"{t.text}"</p>
              <div>
                <div className="font-semibold text-icon">{t.name}</div>
                <div className="text-sm text-primary">{t.bike}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}