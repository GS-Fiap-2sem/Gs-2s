import { motion } from "framer-motion";

const placeholder = "https://via.placeholder.com/150?text=Foto";

const membros = [
  {
    nome: "Gabriel Garcia",
    rm: "RM563298",
    papel: "Front-End e Estrutura",
    github: "https://github.com/Gabriel-hub-prog22",
    imagem: "/imagens/gabriel.jpeg",
    linkedin: "",
    turma: "1tdspk",
  },
  {
    nome: "Filippo Tolone",
    rm: "RM562329",
    papel: "Back-End e Banco de Dados",
    github: "https://github.com/FilippoTolone",
    imagem: "/imagens/filippo.jpeg",
    linkedin: "https://www.linkedin.com/in/filippo-tolone",
    turma: "1tdspj",
  },
  {
    nome: "Luan Peixoto",
    rm: "RM562258",
    papel: "Design e Organização",
    github: "https://github.com/LuanPMR",
    imagem: "/imagens/Ft_boa.jpg",
    linkedin: "https://www.linkedin.com/in/luan-peixoto-marins-rocha-96940034b",
    turma: "1tdspj",
  },
];

export default function Integrantes() {
  return (
    <div className="app-container">
      <h1 className="text-3xl font-bold mb-4">Integrantes</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Equipe responsável pelo desenvolvimento e estruturação do projeto SkillBridge.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {membros.map((membro, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border dark:border-gray-700 hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="w-24 h-24 rounded-full mx-auto mb-3 shadow overflow-hidden bg-gray-200">
              <img
                src={membro.imagem}
                alt={membro.nome}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = placeholder;
                }}
              />
            </div>

            <h2 className="text-xl font-bold text-center mb-1">{membro.nome}</h2>
            <p className="text-center text-blue-600 dark:text-blue-400 font-medium">
              {membro.papel}
            </p>
            <p className="text-center text-gray-600 dark:text-gray-300 mt-1">
              RM: {membro.rm} • Turma: {membro.turma}
            </p>

            <div className="flex justify-center gap-4 mt-4">
              <a
                href={membro.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-md"
              >
                GitHub
              </a>

              {membro.linkedin ? (
                <a
                  href={membro.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm px-3 py-1 bg-blue-50 dark:bg-blue-900 rounded-md"
                >
                  LinkedIn
                </a>
              ) : (
                <button
                  className="text-sm px-3 py-1 bg-gray-50 dark:bg-gray-700 rounded-md text-gray-500"
                  disabled
                >
                  LinkedIn
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

