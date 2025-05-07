"use client";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  Cell,
} from "recharts";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  ArrowRight,
  DollarSign,
  Shield,
  BookOpen,
  Users,
  Calendar,
  TrendingUp,
  Check,
  PieChart,
  Briefcase,
  Award,
  ChevronDown,
  ArrowUpRight,
  Lightbulb,
} from "lucide-react";

import memberImage from "../../public/jorge-ferreira.png";
import logo from "../../public/logo.png";

const performanceData = [
  { year: "2021", Marcopolo: 3.07, MagazineLuiza: 25.0 },
  { year: "2022", Marcopolo: 3.34, MagazineLuiza: 18.0 },
  { year: "2023", Marcopolo: 4.2, MagazineLuiza: 12.5 },
  { year: "2024", Marcopolo: 5.8, MagazineLuiza: 9.3 },
  { year: "2025", Marcopolo: 7.1, MagazineLuiza: 8.62 },
];

const growthData = [
  { year: "2020", growth: 2.5 },
  { year: "2021", growth: 3.8 },
  { year: "2022", growth: 4.2 },
  { year: "2023", growth: 5.1 },
  { year: "2024", growth: 6.3 },
];

const GridPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="grid-pattern"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M 40 0 L 0 0 0 40"
          fill="none"
          stroke="#a7f3d0"
          strokeWidth="0.5"
        />
      </pattern>
    </defs>
    <rect
      width="100%"
      height="100%"
      fill="url(#grid-pattern)"
    />
  </svg>
);

export default function LandingPage() {
  const [expandedRisk, setExpandedRisk] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 font-sans overflow-x-hidden">
      {/* Geometric background elements */}

      {/* Navigation */}
      <nav className="fixed bg-gray-900 text-white py-4 px-6 w-full top-0 z-50 backdrop-blur-sm bg-opacity-90">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src={logo.src}
              alt="Logo"
              className="h-14 brightness-0 w-32 invert"
            />
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#investir"
              className="hover:text-emerald-200 transition font-medium"
            >
              Investir
            </a>
            <a
              href="#servicos"
              className="hover:text-emerald-200 transition font-medium"
            >
              Serviços
            </a>
            <a
              href="#equipe"
              className="hover:text-emerald-200 transition font-medium"
            >
              Equipe
            </a>
            <a
              href="#performance"
              className="hover:text-emerald-200 transition font-medium"
            >
              Performance
            </a>
          </div>
          <button className="bg-emerald-600 hover:bg-emerald-500 px-5 py-2 rounded-full transition shadow-lg flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            <span>Fale Conosco</span>
          </button>
        </div>
      </nav>

      <section className="pt-38 relative bg-gradient-to-br from-emerald-900 to-gray-900 text-white py-24 px-6 overflow-hidden">
        <GridPattern />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-emerald-300 to-white bg-clip-text text-transparent">
                Investir em Ações
              </span>
              <br />
              Construção de riqueza a longo prazo
            </motion.h1>
            <p className="text-xl text-emerald-100 mb-8">
              Com a Ostrya Investimentos, você tem suporte de especialistas para investir com
              estratégia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-900 hover:bg-gray-100 px-8 py-4 rounded-full font-medium transition flex items-center justify-center gap-2 shadow-lg"
              >
                Falar Com um Consultor <ArrowRight className="h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-emerald-400 text-white hover:bg-emerald-800 px-8 py-4 rounded-full font-medium transition flex items-center justify-center gap-2"
              >
                Conhecer Serviços
              </motion.button>
            </div>
          </div>
        </div>

        {/* Animated financial chart in background */}
        <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <AreaChart data={growthData}>
              <Area
                type="monotone"
                dataKey="growth"
                stroke="#10b981"
                fill="#10b981"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Director Profile */}
      <section
        id="equipe"
        className="py-16 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-100 shadow-xl">
                  <img
                    src={memberImage.src}
                    alt="Jorge Ferreira, CFA"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-emerald-700 text-white px-4 py-2 rounded-full shadow-lg">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    <span className="font-medium">CFA Charterholder</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-emerald-900 mb-2">Jorge Ferreira, CFA</h2>
              <p className="text-xl text-emerald-700 mb-6">Diretor de Consultoria</p>

              <div className="prose prose-lg text-gray-700 mb-8">
                <p>
                  Economista, mestre em Finanças Corporativas (Unisinos) e CFA charterholder, possui
                  experiência de 15 anos no mercado financeiro e de capitais. Sócio fundador da
                  Ostrya Investimentos e Ostrya capital.
                </p>
                <p>
                  Professor de finanças, economia e gestão em cursos de Graduação, MBA e Mestrado,
                  na Unisinos. Professor de Economia na CFA Society Brazil. Já lecionou sobre
                  investimentos em curso de formação de reguladores na Comissão de Valores
                  Mobiliários (CVM).
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <BookOpen className="h-5 w-5 text-emerald-900 mt-1" />
                  <span className="text-emerald-900">
                    Autor do livro &quot;Análise de Investimentos e Mercado de Capitais&quot;
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <PieChart className="h-5 w-5 text-emerald-900 mt-1" />
                  <span className="text-emerald-900">
                    Consultor de Títulos e Valores Mobiliários (CVM)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Briefcase className="h-5 w-5 text-emerald-900 mt-1" />
                  <span className="text-emerald-900">
                    Ex-Superintendente Executivo dos Comitês de Crédito do Banrisul
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-emerald-900 mt-1" />
                  <span className="text-emerald-900">Artigos acadêmicos citados em 13 países</span>
                </div>
              </div>

              <a
                href="https://exame.com/colunistas/panorama-economico/investindo-em-acoes-preco-valor-e-paciencia/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-emerald-700 hover:text-emerald-900 font-medium transition border-b border-emerald-700 pb-1"
              >
                Leia nosso artigo sobre renda variável na Revista Exame{" "}
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-emerald-50 to-emerald-100 p-8 md:p-10 rounded-2xl shadow-sm border border-emerald-200"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-shrink-0 bg-emerald-100 p-4 rounded-xl border border-emerald-200">
                <Lightbulb className="h-10 w-10 text-emerald-700" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">
                  Você já pensou em investir em ações?
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    Investir em ações significa se tornar sócio de grandes empresas e participar dos
                    seus resultados. Ao contrário do que muitos pensam, esse é um investimento de
                    longo prazo, baseado em análise e estratégia, não em especulação.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Você já viu um empresário vender sua empresa dias após fundá-la? Ou um
                    fazendeiro comprar uma terra para revendê-la na mesma semana? Não faz sentido,
                    certo? Da mesma forma, investir em ações exige visão de futuro e paciência para
                    colher bons resultados.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Overview Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4"
            >
              Panorama Atual da Renda Variável no Brasil
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Em 2024, mais brasileiros deram o primeiro passo na renda variável, mas com apenas
              13,6% do total investido nesse mercado, ainda há um enorme potencial de crescimento
              para quem busca rentabilidade e protagonismo financeiro.
            </motion.p>
          </div>

          {/* Stats Grid - Now 2 columns */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Market Value Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border border-emerald-100 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-emerald-100 p-3 rounded-xl">
                  <DollarSign className="h-7 w-7 text-emerald-700" />
                </div>
                <h3 className="text-2xl font-semibold text-emerald-900">Valor de Mercado</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 h-56">
                {[
                  {
                    value: 7.3,
                    label: "Total Investido",
                    suffix: "tri",
                    description: "R$ 7,3 trilhões",
                    highlight: true,
                  },
                  {
                    value: 992.2,
                    label: "Renda Variável",
                    suffix: "bi",
                    description: "R$ 992,2 bi (13,6%)",
                  },
                  {
                    value: 4.32,
                    label: "Renda Fixa",
                    suffix: "tri",
                    description: "R$ 4,32 tri (59,2%)",
                  },
                  {
                    value: 1.23,
                    label: "Previdência",
                    suffix: "tri",
                    description: "R$ 1,23 tri (16,9%)",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border ${
                      item.highlight
                        ? "border-2 border-emerald-300 bg-emerald-50"
                        : "border-emerald-100 bg-white"
                    } flex flex-col items-center justify-center transition-all hover:scale-[1.02]`}
                  >
                    <div
                      className={`text-2xl font-bold ${
                        item.highlight ? "text-emerald-800" : "text-emerald-700"
                      }`}
                    >
                      <CountUp
                        end={item.value}
                        duration={2}
                        decimals={item.value < 10 ? 2 : 0}
                        suffix={` ${item.suffix}`}
                      />
                    </div>
                    <div
                      className={`text-sm ${
                        item.highlight ? "font-medium text-emerald-700" : "text-gray-600"
                      } text-center`}
                    >
                      {item.label}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Investor Growth Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border border-emerald-100 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-emerald-100 p-3 rounded-xl">
                  <Users className="h-7 w-7 text-emerald-700" />
                </div>
                <h3 className="text-2xl font-semibold text-emerald-900">
                  Crescimento de Investidores em Renda Variável
                </h3>
              </div>
              <div className="h-56">
                <ResponsiveContainer
                  width="100%"
                  height="100%"
                >
                  <BarChart
                    data={[
                      { year: "2023", investors: 5.0, fill: "#a7f3d0" },
                      { year: "2024", investors: 5.3, fill: "#059669" },
                    ]}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#d1fae5"
                    />
                    <XAxis
                      dataKey="year"
                      tick={{ fill: "#065f46" }}
                      axisLine={{ stroke: "#d1fae5" }}
                    />
                    <YAxis
                      domain={[4.5, 5.5]}
                      tick={{ fill: "#065f46" }}
                      axisLine={{ stroke: "#d1fae5" }}
                    />
                    <Tooltip
                      formatter={(value) => [`${value} milhões`, "Investidores"]}
                      contentStyle={{
                        backgroundColor: "#ecfdf5",
                        borderColor: "#059669",
                        borderRadius: "0.5rem",
                      }}
                    />
                    <Bar
                      dataKey="investors"
                      radius={[6, 6, 0, 0]}
                      animationDuration={2000}
                    >
                      {[
                        <Cell
                          key="cell-0"
                          fill="#a7f3d0"
                        />,
                        <Cell
                          key="cell-1"
                          fill="#059669"
                        />,
                      ]}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                <p className="text-sm text-emerald-800 font-medium">
                  <span className="text-emerald-600">↑ 6%</span> de crescimento no número de
                  investidores em renda variável (2023-2024)
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-emerald-50 to-white py-16 px-6 md:px-12 overflow-hidden">
        {/* SVGs de fundo decorativos */}
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
          <circle
            cx="10"
            cy="90"
            r="2"
            fill="green"
          />
          <circle
            cx="30"
            cy="60"
            r="2"
            fill="green"
          />
          <circle
            cx="50"
            cy="70"
            r="2"
            fill="green"
          />
          <circle
            cx="70"
            cy="40"
            r="2"
            fill="green"
          />
          <circle
            cx="90"
            cy="50"
            r="2"
            fill="green"
          />
        </svg>

        <svg
          className="absolute bottom-0 right-0 w-64 opacity-10"
          viewBox="0 0 100 100"
          fill="none"
        >
          <rect
            x="10"
            y="60"
            width="10"
            height="30"
            fill="green"
          />
          <rect
            x="30"
            y="40"
            width="10"
            height="50"
            fill="green"
          />
          <rect
            x="50"
            y="20"
            width="10"
            height="70"
            fill="green"
          />
          <rect
            x="70"
            y="50"
            width="10"
            height="40"
            fill="green"
          />
        </svg>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6">
            O que você precisa saber antes de investir em ações?
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            Ao comprar ações, você se torna sócio de empresas e pode investir em diversos setores:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {["Mineração", "Bancos", "Varejo", "Indústrias"].map((sector) => (
              <div
                key={sector}
                className="bg-white rounded-2xl shadow-lg p-4 flex items-center justify-center text-emerald-700 font-semibold text-lg hover:scale-105 transition-transform duration-300"
              >
                {sector}
              </div>
            ))}
          </div>

          <div className="bg-emerald-100 p-8 rounded-3xl shadow-inner">
            <h3 className="text-2xl font-semibold text-emerald-800 mb-4">Como obter retorno?</h3>
            <ul className="text-left space-y-4 text-gray-700 text-base">
              <li className="flex items-start">
                <span className="text-emerald-600 text-xl mr-2">•</span>
                <span>
                  <strong>Apreciação do capital</strong> – valorização do preço da ação.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 text-xl mr-2">•</span>
                <span>
                  <strong>Proventos</strong> – dividendos e juros sobre capital próprio.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 text-xl mr-2">•</span>
                <span>
                  <strong>Aluguel de ações</strong> – sim, é possível alugar suas ações para outros
                  investidores e ser remunerado por isso!
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="performance"
        className="py-20 px-6 bg-gradient-to-br from-emerald-900 to-gray-900 relative overflow-hidden"
      >
        <GridPattern />
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-300 to-white bg-clip-text text-transparent mb-6">
              Investir em Ações Exige Estratégia e Conhecimento
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              A escolha criteriosa das ações é fundamental para o sucesso nos investimentos em renda
              variável. Para ilustrar essa importância, vamos comparar o desempenho das ações da
              Marcopolo (POMO4) e da Magazine Luiza (MGLU3) entre 2021 e 2025.
            </p>
          </motion.div>

          {/* Chart Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-2xl border border-emerald-100/30 mb-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-emerald-900 mb-2">
                Comparação de Desempenho Entre Marcopolo e Magazine Luiza
              </h3>
              <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
            </div>

            <div className="h-96">
              <ResponsiveContainer
                width="100%"
                height="100%"
              >
                <LineChart data={performanceData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#e5e7eb"
                  />
                  <XAxis
                    dataKey="year"
                    tick={{ fill: "#6b7280" }}
                  />
                  <YAxis tick={{ fill: "#6b7280" }} />
                  <Tooltip
                    contentStyle={{
                      background: "#ffffff",
                      borderColor: "#059669",
                      borderRadius: "0.5rem",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="Marcopolo"
                    stroke="#059669"
                    strokeWidth={4}
                    dot={{ r: 6, strokeWidth: 2, fill: "#ffffff" }}
                    activeDot={{ r: 8, strokeWidth: 2, fill: "#ffffff" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="MagazineLuiza"
                    stroke="#ef4444"
                    strokeWidth={4}
                    dot={{ r: 6, strokeWidth: 2, fill: "#ffffff" }}
                    activeDot={{ r: 8, strokeWidth: 2, fill: "#ffffff" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-green-700" />
                  </div>
                  <h4 className="text-xl font-semibold text-green-900">Marcopolo (2021-2025)</h4>
                </div>
                <p className="text-gray-700 pl-12">
                  Retorno de aproximadamente <span className="font-bold text-green-700">300%</span>{" "}
                  para quem comprou em 2021 ou 2022 e manteve até 2025.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-red-700" />
                  </div>
                  <h4 className="text-xl font-semibold text-red-900">Magazine Luiza (2021-2025)</h4>
                </div>
                <p className="text-gray-700 pl-12">
                  Quem comprou no mesmo período perdeu cerca de{" "}
                  <span className="font-bold text-red-700">95%</span> do valor investido.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Investment Risks */}
          <div>
            <h3 className="text-3xl font-semibold bg-gradient-to-r from-emerald-300 to-white bg-clip-text text-transparent mb-6">
              Os Riscos do Investimento em Ações
            </h3>
            <p className="mb-8 text-lg text-white">
              Muitas pessoas analisam gráficos depois que tudo já aconteceu e acham que investir é
              fácil. Mas a realidade do mercado é desafiadora, e os investidores inexperientes podem
              cometer erros graves.
              <br /> <br />
              No curto prazo, os preços das ações podem ser impactados por:
            </p>

            <div className="space-y-4">
              {[
                {
                  id: 1,
                  title: "Cenário econômico",
                  content:
                    "Refere-se ao desempenho geral da economia, incluindo indicadores como PIB, inflação e juros. Quando a economia vai bem, aumenta a confiança dos investidores e a expectativa de lucro das empresas, o que tende a valorizar as ações. Já sinais de recessão ou alta dos juros podem causar queda nos preços.",
                },
                {
                  id: 2,
                  title: "Fluxo de capitais",
                  content:
                    "Representa a movimentação de dinheiro no mercado. Quando há entrada de capital, especialmente de investidores estrangeiros, há maior demanda por ações, elevando os preços. Saídas de capital, por outro lado, provocam vendas e pressão de baixa.",
                },
                {
                  id: 3,
                  title: "Notícias políticas",
                  content:
                    "Envolvem decisões governamentais, eleições, crises institucionais ou mudanças regulatórias. Boas notícias (como reformas ou estabilidade) aumentam o otimismo. Já incertezas políticas ou conflitos reduzem a confiança e provocam volatilidade no mercado.",
                },
              ].map((risk: { id: number; title: string; content: string }) => (
                <motion.div
                  key={risk.id}
                  whileHover={{ y: -2 }}
                  className="bg-white p-6 rounded-lg border border-emerald-100 shadow-sm cursor-pointer"
                  onClick={() => setExpandedRisk(expandedRisk === risk.id ? null : risk.id)}
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold text-emerald-800">{risk.title}</h4>
                    <ChevronDown
                      className={`h-5 w-5 text-emerald-600 transition-transform ${
                        expandedRisk === risk.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {expandedRisk === risk.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 text-gray-700"
                    >
                      {risk.content}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            <p className="my-8  text-white text-lg">
              No longo prazo, o que realmente importa é a qualidade da empresa e seu valor real no
              mercado.
            </p>

            <div className="mt-8 p-6 bg-emerald-100 rounded-xl border border-emerald-200">
              <p className="font-medium text-lg text-emerald-900 text-center">
                A solução? Ter acompanhamento profissional para separar as boas e as más
                oportunidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="servicos"
        className="py-16 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-emerald-900 mb-4">
              Como a Ostrya Investimentos pode te ajudar?
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-900 to-gray-900 text-white p-8 rounded-xl shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-emerald-600 p-3 rounded-lg">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold">Consultoria de Investimentos</h3>
              </div>
              <p className="text-emerald-100 mb-6">
                Acompanhamento contínuo para estruturar um portfólio sólido:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Análise fundamentalista de ações",
                  "Construção de carteira personalizada",
                  "Suporte contínuo para tomadas de decisão",
                  "Acesso à nossa carteira recomendada",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <Check className="h-5 w-5 text-emerald-300 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-emerald-900 hover:bg-gray-100 px-6 py-4 rounded-lg font-medium transition flex items-center justify-center gap-2 shadow-lg"
              >
                Falar Com um Consultor <ArrowRight className="h-5 w-5" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 p-8 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <BookOpen className="h-8 w-8 text-emerald-700" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Mentoria de Investimentos</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Se você quer aprender a investir de forma independente e entender como avaliar
                empresas, nossa mentoria inclui:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Duas reuniões mensais: macroeconomia e portfólio",
                  "Aprendizado sobre avaliação de ativos",
                  "Construção de um portfólio sólido",
                  "Relatório detalhado sobre fundamentos",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 rounded-lg font-medium transition flex items-center justify-center gap-2 shadow-lg"
              >
                Quero Aprender a Investir <ArrowRight className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-emerald-900 mb-6">
              Por que escolher a Ostrya Investimentos?
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Briefcase className="h-8 w-8" />, text: "+15 anos de experiência" },
                { icon: <Users className="h-8 w-8" />, text: "Profissionais especializados" },
                { icon: <PieChart className="h-8 w-8" />, text: "Análise fundamentalista" },
                { icon: <Calendar className="h-8 w-8" />, text: "Suporte personalizado" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-emerald-50 p-6 rounded-lg border border-emerald-100 hover:border-emerald-200 transition"
                >
                  <div className="text-emerald-700 mb-3">{item.icon}</div>
                  <p className="text-gray-700">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-900 to-gray-900 text-white relative overflow-hidden">
        <GridPattern />
        <div className="absolute inset-0 opacity-10">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 1200 800"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0h1200v800H0z"
              fill="none"
            />
            <path
              d="M0 400c100-50 300-150 500-100s400 200 600 100 200-300 100-400"
              stroke="#10b981"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10 5"
            />
            <path
              d="M0 300c100-80 300-80 500 20s400 180 600 80 200-280 100-380"
              stroke="#10b981"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10 5"
            />
            <path
              d="M0 500c100-20 300-120 500-60s400 220 600 140 200-320 100-420"
              stroke="#10b981"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10 5"
            />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Pronto para transformar sua vida financeira?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto"
          >
            Seja você iniciante ou experiente, temos a solução ideal para investir com estratégia e
            inteligência.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-emerald-900 hover:bg-gray-100 px-8 py-4 rounded-full font-medium transition flex items-center gap-2 mx-auto shadow-lg"
          >
            Fale com um Especialista Agora!
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src={logo.src}
                  alt="Logo"
                  className="h-14 brightness-0 w-32 invert"
                />
              </div>
              <p className="text-gray-400">
                Suporte especializado para investimentos em ações, alinhados ao seu perfil e
                objetivos financeiros.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4 text-white">Serviços</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Consultoria
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Mentoria
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4 text-white">Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#contato"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4 text-white">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>investimentos@ostrya.com.brm</li>
                <li>(51) 9998-4375</li>
                <li>R. Tamandaré, 140, sala 901, - Novo Hamburgo - RS, 93410-150</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              Disclaimer: A rentabilidade passada não garante rentabilidade futura. As condições
              apresentadas são meramente ilustrativas e não devem ser interpretados como
              recomendações de investimento, promessas ou garantias de rentabilidade, relatórios de
              acompanhamento ou análises de valores mobiliários que influenciem decisões de
              investimento. A Ostrya Investimentos não se responsabiliza pela não concretização das
              expectativas de mercado ou pela performance dos ativos recomendados e não se
              responsabiliza por perdas ou lucros cessantes decorrentes do uso de nossos materiais
              para quaisquer finalidades. Os investimentos apresentados podem não ser adequados aos
              seus objetivos ou situação financeira. O preenchimento do questionário de análise de
              perfil de investidor é essencial para garantir a adequação do produto de investimento
              ao perfil do cliente. Investimentos em títulos e valores mobiliários envolvem riscos,
              incluindo perda parcial ou total do capital investido ou necessidade de aportes
              adicionais. Investimentos em fundos não contam com garantia de administradores,
              corretoras, consultores, seguros ou Fundo Garantidor de Crédito (FGC). Leia
              atentamente as condições de cada produto antes de investir.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
