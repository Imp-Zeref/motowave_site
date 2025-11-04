import {
  ClipboardList,
  BellRing,
  Wrench,
  MapPin,
  Send,
  PieChart,
  type LucideIcon,
} from "lucide-react";

export type FeatureData = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const featuresList: FeatureData[] = [
  {
    icon: ClipboardList,
    title: "Controle Total",
    description:
      "Registre cada serviço, troca de peça e custo. Tenha o controle total da sua moto em um dashboard simples.",
  },
  {
    icon: BellRing,
    title: "Previsão Inteligente",
    description:
      "Não seja pego de surpresa. O app avisa *antes* da hora de trocar o óleo, freios e pneus, baseado no seu uso.",
  },
  {
    icon: PieChart,
    title: "Relatórios de Gastos",
    description:
      "Saiba exatamente quanto você gasta por mês ou por ano. Exporte relatórios em PDF para seu controle financeiro.",
  },
  {
    icon: Wrench,
    title: "Dicas e Guias",
    description:
      "Aprenda a fazer manutenções básicas ou entenda mais sobre sua moto com nossos tutoriais passo a passo.",
  },
  {
    icon: MapPin,
    title: "Oficinas Próximas",
    description:
      "Encontre as melhores oficinas e mecânicos perto de você, avaliados pela comunidade e parceiros MotoWave.",
  },
  {
    icon: Send,
    title: "Histórico Portátil",
    description:
      "Vendeu a moto? Transfira todo o histórico de manutenção para o novo dono com um clique e valorize sua venda.",
  },
];