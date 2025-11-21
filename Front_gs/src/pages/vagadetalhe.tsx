import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

type Vaga = {
  titulo: string;
  empresa: string;
  local: string;
  tipo: "Estágio" | "CLT" | "Freelancer";
  descricao: string;
  requisitos: string[];
  beneficios: string[];
};

export default function VagaDetalhe() {
  const { id } = useParams<{ id: string }>();

  const vagasMock: Record<string, Vaga> = {
    "1": {
      titulo: "Desenvolvedor Front-End Jr",
      empresa: "TechSolutions",
      local: "São Paulo, SP",
      tipo: "Estágio",
      descricao:
        "Buscamos um desenvolvedor Front-End Jr para atuar com React, Tailwind e integração com APIs. O candidato ideal deve ter boa lógica de programação, interesse em aprender e capacidade de trabalhar em equipe.",
      requisitos: ["JavaScript", "React", "CSS", "Git", "REST API"],
      beneficios: ["Bolsa auxílio", "VT", "Ambiente colaborativo"],
    },
    "2": {
      titulo: "Assistente de Suporte Técnico",
      empresa: "InfoHelp",
      local: "Remoto",
      tipo: "CLT",
      descricao:
        "Responsável pelo suporte ao usuário, resolução de problemas técnicos e manutenção básica de equipamentos. É essencial ter boa comunicação e organização.",
      requisitos: ["Linux", "Atendimento", "Montagem de PC", "Redes"],
      beneficios: ["Plano de saúde", "Vale alimentação", "Bônus anual"],
    },
    "3": {
      titulo: "UX/UI Designer",
      empresa: "CreativeLab",
      local: "Curitiba, PR",
      tipo: "Freelancer",
      descricao:
        "Atue em projetos modernos usando Figma, protótipos interativos e testes de usabilidade. Buscamos alguém criativo, atualizado e com forte senso visual.",
      requisitos: ["Figma", "Prototipação", "UI Design", "UX Research"],
      beneficios: ["Horário flexível", "Pagamento por projeto"],
    },
  };

  const vaga = id ? vagasMock[id] : undefined;

  if (!vaga) {
    return (
      <div className="app-container text-center py-20">
        <h1 className="text-3xl font-bold">Vaga não encontrada</h1>
        <Link to="/vagas" className="text-blue-500 underline mt-4 block">
          Voltar para vagas
        </Link>
      </div>
    );
  }

  const badgeColor: Record<string, string> = {
    Estágio: "bg-blue-600",
    CLT: "bg-green-600",
    Freelancer: "bg-purple-600",
  };

  return (
    <div className="app-container py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold mb-3">{vaga.titulo}</h1>
        <span
          className={`px-4 py-1 text-white rounded-lg text-sm ${badgeColor[vaga.tipo]}`}
        >
          {vaga.tipo}
        </span>
      </motion.div>

      <div className="bg-white dark:bg-gray-800 p-10 rounded-xl shadow-xl border dark:border-gray-700">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xl font-bold">
            {vaga.empresa.charAt(0)}
          </div>

          <div>
            <h2 className="text-2xl font-semibold">{vaga.empresa}</h2>
            <p className="text-gray-600 dark:text-gray-400">{vaga.local}</p>
          </div>
        </div>

        <hr className="border-gray-300 dark:border-gray-700 mb-8" />

        <h3 className="text-xl font-semibold mb-2">Descrição</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          {vaga.descricao}
        </p>

        <hr className="border-gray-300 dark:border-gray-700 mb-8" />

        <h3 className="text-xl font-semibold mb-3">Requisitos</h3>
        <ul className="flex flex-wrap gap-3 mb-8">
          {vaga.requisitos.map((req, index) => (
            <li
              key={index}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-sm"
            >
              {req}
            </li>
          ))}
        </ul>

        <hr className="border-gray-300 dark:border-gray-700 mb-8" />

        <h3 className="text-xl font-semibold mb-3">Benefícios</h3>
        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 mb-10">
          {vaga.beneficios.map((b, index) => (
            <li key={index}>{b}</li>
          ))}
        </ul>

        <Link
          to={`/aplicar/${id}`}
          className="block w-full text-center py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-lg"
        >
          Candidatar-se
        </Link>

        <Link
          to="/vagas"
          className="block text-center mt-6 text-blue-500 hover:underline"
        >
          Voltar para vagas
        </Link>
      </div>
    </div>
  );
}
