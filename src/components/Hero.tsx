import React from "react";
import GridPattern from "./ui/GridPattern";
import { ArrowRight } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { growthData, officeData } from "@/data/data";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="pt-38 relative bg-gradient-to-br from-emerald-900 to-gray-900 text-white py-24 px-6 overflow-hidden">
      <GridPattern />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-emerald-300 to-white bg-clip-text text-transparent">
              Investir em Ações
            </span>
            <br />
            Construção de riqueza a longo prazo
          </h1>
          <p className="text-xl text-emerald-100 mb-8">
            Com a Ostrya Investimentos, você tem suporte de especialistas para investir com
            estratégia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={officeData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-emerald-900 hover:bg-gray-100 px-8 py-4 rounded-full font-medium transition flex items-center justify-center gap-2 shadow-lg"
            >
              Falar Com um Consultor <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="#servicos"
              className="border-2 border-emerald-400 text-white hover:bg-emerald-800 px-8 py-4 rounded-full font-medium transition flex items-center justify-center gap-2"
            >
              Conhecer Serviços
            </Link>
          </div>
        </div>
      </div>

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
  );
};

export default Hero;
