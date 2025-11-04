import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

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
  );
}

const benefitsList = [
  {
    title: "Troque a surpresa pela previsão",
    description:
      "Nosso sistema avisa antes do problema acontecer, evitando gastos emergenciais.",
  },
  {
    title: "Alertas que trabalham por você",
    description:
      "Receba notificações push sobre trocas de óleo, freios e pneus, sem precisar abrir o app.",
  },
  {
    title: "Histórico completo na palma da mão",
    description:
      "Saiba exatamente o que foi feito e quando foi feito, valorizando sua moto na revenda.",
  },
  {
    title: "Pegue a estrada sem preocupações",
    description:
      "Chegue ao fim de semana com a moto 100% revisada para sua viagem.",
  },
  {
    title: "Performance e economia de combustível",
    description:
      "Manutenção em dia significa um motor rodando liso e gastando menos.",
  },
];

export default function Benefits() {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="benefits" className="py-16 sm:py-20 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <AppMockup />
          </motion.div>

          <div className="order-2 lg:order-1">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-10 text-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              Sua moto, <span className="text-icon">sempre nova.</span>
            </motion.h2>

            <motion.div
              className="space-y-8"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {benefitsList.map((benefit) => (
                <motion.div
                  key={benefit.title}
                  className="flex items-start space-x-4"
                  variants={itemVariants}
                >
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
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}