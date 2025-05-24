import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { format } from "date-fns";
import { useMemo } from "react";

// Dados formatados
const rawMagaluData = [
  { date: "2021-01-29", value: 245.14 },
  { date: "2021-02-26", value: 234.57 },
  { date: "2021-03-31", value: 196.35 },
  { date: "2021-04-30", value: 194.31 },
  { date: "2021-05-31", value: 195.57 },
  { date: "2021-06-30", value: 205.17 },
  { date: "2021-07-30", value: 199.98 },
  { date: "2021-08-31", value: 177.07 },
  { date: "2021-09-30", value: 139.21 },
  { date: "2021-10-29", value: 104.94 },
  { date: "2021-11-30", value: 75.72 },
  { date: "2021-12-30", value: 70.09 },
  { date: "2022-01-31", value: 67.96 },
  { date: "2022-02-25", value: 58.34 },
  { date: "2022-03-31", value: 66.21 },
  { date: "2022-04-29", value: 47.37 },
  { date: "2022-05-31", value: 36.11 },
  { date: "2022-06-30", value: 22.72 },
  { date: "2022-07-29", value: 25.05 },
  { date: "2022-08-31", value: 41.45 },
  { date: "2022-09-30", value: 43.49 },
  { date: "2022-10-31", value: 43.39 },
  { date: "2022-11-30", value: 33.1 },
  { date: "2022-12-29", value: 26.6 },
  { date: "2023-01-31", value: 43.01 },
  { date: "2023-02-28", value: 34.85 },
  { date: "2023-03-31", value: 32.13 },
  { date: "2023-04-28", value: 32.42 },
  { date: "2023-05-31", value: 36.89 },
  { date: "2023-06-30", value: 32.72 },
  { date: "2023-07-31", value: 32.52 },
  { date: "2023-08-31", value: 26.79 },
  { date: "2023-09-29", value: 20.58 },
  { date: "2023-10-31", value: 12.91 },
  { date: "2023-11-30", value: 19.61 },
  { date: "2023-12-28", value: 20.97 },
  { date: "2024-01-31", value: 20.39 },
  { date: "2024-02-29", value: 20.68 },
  { date: "2024-03-28", value: 17.47 },
  { date: "2024-04-30", value: 13.2 },
  { date: "2024-05-31", value: 12.03 },
  { date: "2024-06-28", value: 11.7 },
  { date: "2024-07-31", value: 10.75 },
  { date: "2024-08-30", value: 11.8 },
  { date: "2024-09-30", value: 9.42 },
  { date: "2024-10-31", value: 9.18 },
  { date: "2024-11-29", value: 8.77 },
  { date: "2024-12-30", value: 6.31 },
  { date: "2025-01-31", value: 7.24 },
  { date: "2025-02-28", value: 6.94 },
  { date: "2025-03-31", value: 9.85 },
  { date: "2025-04-30", value: 9.32 },
  { date: "2025-05-15", value: 9.7 },
];

const rawMarcopoloData = [
  { date: "2021-01-29", value: 1.88 },
  { date: "2021-02-26", value: 1.62 },
  { date: "2021-03-31", value: 1.81 },
  { date: "2021-04-30", value: 1.68 },
  { date: "2021-05-31", value: 1.73 },
  { date: "2021-06-30", value: 2.19 },
  { date: "2021-07-30", value: 1.98 },
  { date: "2021-08-31", value: 1.83 },
  { date: "2021-09-30", value: 1.92 },
  { date: "2021-10-29", value: 1.7 },
  { date: "2021-11-30", value: 1.69 },
  { date: "2021-12-30", value: 2.03 },
  { date: "2022-01-31", value: 2.28 },
  { date: "2022-02-25", value: 1.93 },
  { date: "2022-03-31", value: 1.78 },
  { date: "2022-04-29", value: 1.78 },
  { date: "2022-05-31", value: 1.91 },
  { date: "2022-06-30", value: 1.65 },
  { date: "2022-07-29", value: 1.65 },
  { date: "2022-08-31", value: 1.75 },
  { date: "2022-09-30", value: 1.93 },
  { date: "2022-10-31", value: 1.92 },
  { date: "2022-11-30", value: 1.64 },
  { date: "2022-12-29", value: 1.99 },
  { date: "2023-01-31", value: 2.12 },
  { date: "2023-02-28", value: 2.22 },
  { date: "2023-03-31", value: 2.3 },
  { date: "2023-04-28", value: 2.6 },
  { date: "2023-05-31", value: 3.34 },
  { date: "2023-06-30", value: 3.77 },
  { date: "2023-07-31", value: 3.84 },
  { date: "2023-08-31", value: 4.44 },
  { date: "2023-09-29", value: 4.27 },
  { date: "2023-10-31", value: 3.89 },
  { date: "2023-11-30", value: 4.43 },
  { date: "2023-12-28", value: 5.28 },
  { date: "2024-01-31", value: 5.99 },
  { date: "2024-02-29", value: 6.58 },
  { date: "2024-03-28", value: 6.96 },
  { date: "2024-04-30", value: 6.08 },
  { date: "2024-05-31", value: 6.05 },
  { date: "2024-06-28", value: 5.89 },
  { date: "2024-07-31", value: 5.63 },
  { date: "2024-08-30", value: 6.94 },
  { date: "2024-09-30", value: 7.51 },
  { date: "2024-10-31", value: 7.99 },
  { date: "2024-11-29", value: 8.23 },
  { date: "2024-12-30", value: 7.07 },
  { date: "2025-01-31", value: 7.98 },
  { date: "2025-02-28", value: 7.26 },
  { date: "2025-03-31", value: 6.05 },
  { date: "2025-04-30", value: 6.96 },
  { date: "2025-05-15", value: 7.18 },
];

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { value: number }[];
  label: string;
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 p-4 border border-gray-700 rounded-lg shadow-lg">
        <p className="font-bold">{format(new Date(label), "dd/MM/yyyy")}</p>
        <p className="text-emerald-400">
          Valor: <span className="text-white">{payload[0].value.toFixed(2)}</span>
        </p>
      </div>
    );
  }
  return null;
};

const InvestmentPerformance = () => {
  const formattedMarcopolo = useMemo(() => {
    return rawMarcopoloData.map((d) => ({
      ...d,
      date: new Date(d.date),
    }));
  }, []);

  const formattedMagalu = useMemo(() => {
    return rawMagaluData.map((d) => ({
      ...d,
      date: new Date(d.date),
    }));
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-emerald-900 to-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-300 to-white bg-clip-text text-transparent mb-6">
            Investir em Ações Exige Estratégia e Conhecimento
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto">
            A escolha criteriosa das ações é fundamental para o sucesso nos investimentos em renda
            variável. Para ilustrar essa importância, veja o desempenho das ações da Marcopolo
            (POMO4) e Magazine Luiza (MGLU3) ao longo dos anos.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16">
          {/* Gráfico Marcopolo */}
          <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
            <h4 className="text-xl font-semibold text-emerald-300 mb-4 text-center">
              Marcopolo (POMO4)
            </h4>
            <div className="h-[350px]">
              <ResponsiveContainer
                width="100%"
                height="100%"
              >
                <LineChart
                  data={formattedMarcopolo}
                  margin={{ top: 5, right: 20, bottom: 40, left: 20 }}
                >
                  <XAxis
                    dataKey="date"
                    tickFormatter={(d) => format(d, "MM/yy")}
                    tick={{ fill: "#cbd5e1", fontSize: 10 }}
                    interval={Math.floor(formattedMarcopolo.length / 6)}
                    height={40}
                  />
                  <YAxis
                    tick={{ fill: "#cbd5e1", fontSize: 12 }}
                    width={60}
                    domain={["auto", "auto"]}
                    tickFormatter={(value) => value.toFixed(2)}
                  />
                  <Tooltip content={<CustomTooltip label="date" />} />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#10b981"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 6, strokeWidth: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Gráfico Magazine Luiza */}
          <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
            <h4 className="text-xl font-semibold text-rose-300 mb-4 text-center">
              Magazine Luiza (MGLU3)
            </h4>
            <div className="h-[350px]">
              <ResponsiveContainer
                width="100%"
                height="100%"
              >
                <LineChart
                  data={formattedMagalu}
                  margin={{ top: 5, right: 20, bottom: 40, left: 20 }}
                >
                  <XAxis
                    dataKey="date"
                    tickFormatter={(d) => format(d, "MM/yy")}
                    tick={{ fill: "#cbd5e1", fontSize: 10 }}
                    interval={Math.floor(formattedMagalu.length / 6)}
                    height={40}
                  />
                  <YAxis
                    tick={{ fill: "#cbd5e1", fontSize: 12 }}
                    width={60}
                    domain={["auto", "auto"]}
                    tickFormatter={(value) => value.toFixed(2)}
                  />
                  <Tooltip content={<CustomTooltip label="date" />} />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#f43f5e"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 6, strokeWidth: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Comparação */}
        <div className="flex w-full flex-col md:flex-row items-center justify-center gap-2  ">
          <div className="w-full bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-trending-up h-6 w-6 text-green-700"
                  aria-hidden="true"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-green-900">Marcopolo (2021-2025)</h4>
            </div>
            <p className="text-gray-700 pl-12">
              Retorno de aproximadamente <span className="font-bold text-green-700">300%</span> para
              quem comprou em 2021 ou 2022 e manteve até 2025.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 w-full to-red-100 p-6 rounded-xl border border-red-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-red-100 p-2 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-shield h-6 w-6 text-red-700"
                  aria-hidden="true"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-red-900">Magazine Luiza (2021-2025)</h4>
            </div>
            <p className="text-gray-700 pl-12">
              Quem comprou no mesmo período perdeu cerca de{" "}
              <span className="font-bold text-red-700">95%</span> do valor investido.
            </p>
          </div>
        </div>

        {/* Nova seção: Riscos do Investimento */}
        <div className="my-4 bg-gray-800/70 p-6 sm:p-8 rounded-xl border border-gray-700 mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-rose-400 mb-6">
            Os Riscos do Investimento em Ações
          </h3>

          <p className="text-gray-300 mb-6">
            Muitas pessoas analisam gráficos depois que tudo já aconteceu e acham que investir é
            fácil. Mas a realidade do mercado é desafiadora, e os investidores inexperientes podem
            cometer erros graves.
          </p>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-emerald-300 mb-3">
              No curto prazo, os preços das ações podem ser impactados por:
            </h4>

            <div className="mb-4">
              <h5 className="text-lg font-medium text-white mb-2">1. Cenário econômico</h5>
              <p className="text-gray-300 pl-4">
                Refere-se ao desempenho geral da economia, incluindo indicadores como PIB, inflação
                e juros. Quando a economia vai bem, aumenta a confiança dos investidores e a
                expectativa de lucro das empresas, o que tende a valorizar as ações. Já sinais de
                recessão ou alta dos juros podem causar queda nos preços.
              </p>
            </div>

            <div className="mb-4">
              <h5 className="text-lg font-medium text-white mb-2">2. Fluxo de capitais</h5>
              <p className="text-gray-300 pl-4">
                Representa a movimentação de dinheiro no mercado. Quando há entrada de capital,
                especialmente de investidores estrangeiros, há maior demanda por ações, elevando os
                preços. Saídas de capital, por outro lado, provocam vendas e pressão de baixa.
              </p>
            </div>

            <div className="mb-4">
              <h5 className="text-lg font-medium text-white mb-2">2. Fluxo de capitais</h5>
              <p className="text-gray-300 pl-4">
                Envolvem decisões governamentais, eleições, crises institucionais ou mudanças
                regulatórias. Boas notícias (como reformas ou estabilidade) aumentam o otimismo. Já
                incertezas políticas ou conflitos reduzem a confiança e provocam volatilidade no
                mercado.
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white rounded-xl text-center shadow-lg">
            <p className="text-lg sm:text-xl font-bold">
              No longo prazo, o que realmente importa é a qualidade da empresa e seu valor
              intrínseco.
            </p>
          </div>

          <div className="mt-12 p-6 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white rounded-xl text-center shadow-lg">
            <p className="text-lg sm:text-xl font-bold">
              A solução? Ter acompanhamento profissional para separar as boas e as más
              oportunidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPerformance;
