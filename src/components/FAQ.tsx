"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "Para qual tipo de moto o MotoWave serve?",
    answer:
      "Para todas! De scooters a superbikes. O MotoWave é projetado para qualquer motociclista que queira manter sua moto em perfeito estado, seja ela de baixa ou alta cilindrada, carburada ou injetada.",
  },
  {
    question: "Como o app sabe a hora de fazer manutenção?",
    answer:
      "Você cadastra os intervalos recomendados (por quilometragem ou tempo) e registra suas viagens ou quilometragem. O app cruza esses dados e envia notificações inteligentes *antes* do vencimento.",
  },
  {
    question: "Eu mesmo faço minhas manutenções. O app serve pra mim?",
    answer:
      "Com certeza. O app é perfeito para quem é 'mão na graxa'. Você pode registrar todos os serviços que fez, usar nossos guias, montar checklists e ter todo o histórico documentado, valorizando sua moto.",
  },
  {
    question: "Quanto vai custar?",
    answer:
      "O MotoWave terá um plano básico gratuito com os recursos essenciais. Estamos buscando Testadores Beta (como você!) para nos ajudar a definir os recursos dos planos avançados. Quem testar terá condições especiais no lançamento.",
  },
];

function FAQItem({ item }: { item: (typeof faqData)[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-primary/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="text-lg font-semibold text-icon">
          {item.question}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-primary transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="pb-6 text-icon/70">{item.answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <motion.section
      id="faq"
      className="py-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary">
            Dúvidas Frequentes
          </h2>
          <p className="mt-4 text-lg text-icon/70">
            Tudo o que você precisa saber antes de começar.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {faqData.map((item, index) => (
            <FAQItem key={index} item={item} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}