"use client";

import { featuresList } from "@/data/features";
import { motion } from "framer-motion";

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="features" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-orange-500">
            Tudo que um motociclista precisa
          </h2>
          <p className="text-gray-300 mt-4 text-lg">
            Da garagem à estrada, o MotoWave cuida de cada detalhe para você
            rodar sem preocupações.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featuresList.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-secondary p-6 rounded-2xl border border-primary/20 flex flex-col items-start
                         transition-all duration-300 ease-in-out
                         hover:scale-105 hover:border-primary hover:shadow-lg hover:shadow-primary/20"
              variants={itemVariants}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 mb-5">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-2xl font-bold text-icon mb-3">
                {feature.title}
              </h3>
              <p className="text-icon/70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}