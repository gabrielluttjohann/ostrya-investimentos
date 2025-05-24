"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Users,
  Calendar,
  Check,
  PieChart,
  Briefcase,
  Lightbulb,
} from "lucide-react";

import logo from "../../public/logo/logo.png";
import Team from "@/components/Team";
import InvestmentBasics from "@/components/InvestmentSectors";
import A from "@/components/InvestmentPerformance";
import GridPattern from "@/components/ui/GridPattern";
import WhatsappButton from "@/components/WhatsappButton";
import Navbar from "@/components/Navbar";
import { officeData } from "@/data/data";
import Hero from "@/components/Hero";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <Team />

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

      <InvestmentBasics />
      <A />

      {/* Services Section */}
      <section
        id="servicos"
        className="scroll-mt-28  py-16 px-6 bg-white"
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
              <Link
                href={officeData.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-emerald-900 hover:bg-gray-100 px-6 py-4 rounded-lg font-medium transition flex items-center justify-center gap-2 shadow-lg"
              >
                Falar Com um Consultor <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>

            <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
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
              <Link
                href={officeData.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 rounded-lg font-medium transition flex items-center justify-center gap-2 shadow-lg"
              >
                Quero Aprender a Investir <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
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
          <Link
            href={officeData.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-white text-emerald-900 hover:bg-gray-100 px-8 py-4 rounded-full font-medium transition  items-center gap-2 mx-auto shadow-lg"
          >
            Fale com um Especialista Agora!
          </Link>
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
                  <Link
                    href="#servicos"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Consultoria
                  </Link>
                </li>
                <li>
                  <Link
                    href="#servicos"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Mentoria
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4 text-white">Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={officeData.whatsappLink}
                    target="_blank"
                    rel="nopener noreferrer"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4 text-white">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>investimentos@ostrya.com.br</li>
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
      <WhatsappButton href={officeData.whatsappLink} />
    </div>
  );
}
