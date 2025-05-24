import { ArrowUpRight, Award, BookOpen, Briefcase, Users, PieChart, Linkedin } from "lucide-react";
import memberImage from "../../public/images/jorge-ferreira.png";
import Link from "next/link";

const highlights = [
  {
    icon: BookOpen,
    text: 'Autor do livro "Análise de Investimentos e Mercado de Capitais"',
  },
  {
    icon: PieChart,
    text: "Consultor de Títulos e Valores Mobiliários (CVM)",
  },
  {
    icon: Briefcase,
    text: "Ex-Superintendente Executivo dos Comitês de Crédito do Banrisul",
  },
  {
    icon: Users,
    text: "Artigos acadêmicos citados em 13 países",
  },
];

const articles = [
  {
    title: "Investindo em ações: preço, valor e paciência",
    link: "https://exame.com/colunistas/panorama-economico/investindo-em-acoes-preco-valor-e-paciencia/",
    icon: Award,
  },
  {
    title: "Entenda o reflexo da alta na taxa de juros para os seus investimentos",
    link: "https://exame.com/colunistas/panorama-economico/entenda-o-reflexo-da-alta-na-taxa-de-juros-para-os-seus-investimentos/",
    icon: Award,
  },
  {
    title: "A guerra comercial e os seus investimentos",
    link: "https://exame.com/colunistas/panorama-economico/a-guerra-comercial-e-os-seus-investimentos/",
    icon: Award,
  },
];

const Team = () => {
  return (
    <section
      id="equipe"
      className="scroll-mt-28 py-16 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3 flex flex-col items-center">
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

            <Link
              href="https://www.linkedin.com/in/jorge-henrique-ferreira/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center text-emerald-700 hover:text-emerald-900 transition "
            >
              <Linkedin className="h-6 w-6" />
              <span className="ml-2 mt-2 font-medium underline">Perfil no LinkedIn</span>
            </Link>
          </div>

          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-emerald-900 mb-2">Jorge Ferreira, CFA</h2>
            <p className="text-xl text-emerald-700 mb-6">Diretor de Consultoria</p>

            <div className="prose prose-lg text-gray-700 mb-8">
              <p>
                Economista, mestre em Finanças Corporativas (Unisinos) e CFA charterholder, possui
                experiência de 15 anos no mercado financeiro e de capitais. Sócio fundador da Ostrya
                Investimentos e Ostrya capital.
              </p>
              <p>
                Professor de finanças, economia e gestão em cursos de Graduação, MBA e Mestrado, na
                Unisinos. Professor de Economia na CFA Society Brazil. Já lecionou sobre
                investimentos em curso de formação de reguladores na Comissão de Valores Mobiliários
                (CVM).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {highlights.map(({ icon: Icon, text }, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <Icon className="h-5 w-5 text-emerald-900 mt-1" />
                  <span className="text-emerald-900">{text}</span>
                </div>
              ))}
            </div>
            <div>
              <p className="mr-2 text-black font-semibold ">
                Leia os artigos escritos pelo nosso sócio diretor na revista exame:{" "}
              </p>
              {articles.map((article, index) => (
                <Link
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={article.link}
                  className="inline-flex items-center text-emerald-700 hover:text-emerald-900 font-medium transition border-b border-emerald-700 pb-1"
                >
                  {article.title}
                  <ArrowUpRight className="h-4 w-4 ml-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
