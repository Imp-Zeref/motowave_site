import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonialsList = [
  {
    name: "Carlos Silva",
    bike: "Honda CB 600F",
    text: "Desde que uso o MotoWave, minha moto nunca mais me deixou na mão. Os lembretes são perfeitos!",
    rating: 5,
  },
  {
    name: "Ana Rodrigues",
    bike: "Yamaha MT-07",
    text: "App incrível! Me ajudou a economizar muito dinheiro em manutenções desnecessárias.",
    rating: 5,
  },
  {
    name: "Pedro Santos",
    bike: "Kawasaki Ninja 300",
    text: "Interface super fácil de usar. Recomendo para todos os motociclistas!",
    rating: 5,
  },
];

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-primary">
            O que dizem nossos usuários
          </h2>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonialsList.map((t, i) => (
            <motion.div
              key={i}
              className="bg-secondary p-6 rounded-2xl border border-primary/30 backdrop-blur-sm"
              variants={itemVariants}
            >
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-primary fill-current" />
                ))}
              </div>
              <p className="text-icon/70 mb-4 italic">"{t.text}"</p>
              <div>
                <div className="font-semibold text-icon">{t.name}</div>
                <div className="text-sm text-primary">{t.bike}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}