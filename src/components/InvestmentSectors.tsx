import React from "react";
import { TrendingUp, DollarSign, House } from "lucide-react";

const sectors = [
  "Energia",
  "Financeiro",
  "Exploração, refino e distribuição",
  "Materiais básicos",
  "Bens Industriais",
  "Saúde",
  "Consumo cíclico e não cíclico",
];

const returns = [
  {
    icon: TrendingUp,
    title: "Apreciação do capital",
    description: "Valorização do preço da ação.",
  },
  {
    icon: DollarSign,
    title: "Proventos",
    description: "Dividendos e juros sobre capital próprio.",
  },
  {
    icon: House,
    title: "Aluguel de ações",
    description:
      "Sim, é possível alugar suas ações para outros investidores e ser remunerado por isso!",
  },
];

const InvestmentSectors = () => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 to-white py-16 px-6 md:px-12 overflow-hidden">
      {/* SVG Decorativo - topo esquerdo */}
      <svg
        className="absolute top-0 left-0 w-64 opacity-10"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M10,90 L30,60 L50,70 L70,40 L90,50"
          stroke="green"
          strokeWidth="2"
          fill="none"
        />
        {[10, 30, 50, 70, 90].map((cx, i) => (
          <circle
            key={i}
            cx={cx}
            cy={[90, 60, 70, 40, 50][i]}
            r="2"
            fill="green"
          />
        ))}
      </svg>

      {/* SVG Decorativo - canto inferior direito */}
      <svg
        className="absolute bottom-0 right-0 w-64 opacity-10"
        viewBox="0 0 100 100"
        fill="none"
      >
        {[60, 40, 20, 50].map((y, i) => (
          <rect
            key={i}
            x={10 + i * 20}
            y={y}
            width="10"
            height={80 - y}
            fill="green"
          />
        ))}
      </svg>

      {/* Conteúdo */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6">
          O que você precisa saber antes de investir em ações?
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
          Ao comprar ações, você se torna sócio de empresas e pode investir em diversos setores:
        </p>

        {/* Setores */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {sectors.map((sector) => (
            <div
              key={sector}
              className="bg-white rounded-2xl shadow-lg p-4 flex items-center justify-center text-emerald-700 font-semibold text-lg hover:scale-105 transition-transform duration-300"
            >
              {sector}
            </div>
          ))}
        </div>

        {/* Como obter retorno */}
        <div className="bg-emerald-100 p-8 rounded-3xl shadow-inner">
          <h3 className="text-2xl md:text-3xl font-semibold text-emerald-800 mb-8 text-center">
            Como obter retorno?
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {returns.map(({ icon: Icon, title, description }, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-10 h-10 text-emerald-700" />
                </div>
                <h4 className="text-xl font-semibold text-emerald-800 mb-2">{title}</h4>
                <p className="text-gray-700 text-base">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSectors;
