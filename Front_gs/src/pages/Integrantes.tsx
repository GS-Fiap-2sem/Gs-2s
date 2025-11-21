import { motion } from "framer-motion";

export default function Integrantes() {
  const membros = [
    {
      nome: "Gabriel Garcia Mayo Delatore",
      rm: "RM563298",
      papel: "Front-End e Estrutura",
      github: "https://github.com/",
      imagem: "https://ui-avatars.com/api/?name=Gabriel+Garcia&background=3b82f6&color=fff",
    },
    {
      nome: "Filippo Tolone",
      rm: "RM562329",
      papel: "Back-End e Banco de Dados",
      github: "https://github.com/",
      imagem: "https://ui-avatars.com/api/?name=Filippo+Tolone&background=10b981&color=fff",
    },
    {
      nome: "Luan Peixoto",
      rm: "RM562258",
      papel: "Design e Organização",
      github: "https://github.com/",
      imagem: "https://ui-avatars.com/api/?name=Luan+Peixoto&background=f59e0b&color=fff",
    },
  ];

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
            <img
              src={membro.imagem}
              alt={membro.nome}
              className="w-24 h-24 rounded-full mx-auto mb-3 shadow"
            />

            <h2 className="text-xl font-bold text-center mb-1">{membro.nome}</h2>
            <p className="text-center text-blue-600 dark:text-blue-400 font-medium">
              {membro.papel}
            </p>
            <p className="text-center text-gray-600 dark:text-gray-300 mt-1">
              RM: {membro.rm}
            </p>

            <a
              href={membro.github}
              target="_blank"
              className="block mt-4 text-center text-sm text-gray-700 dark:text-gray-300 hover:text-blue-500"
            >
              GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
