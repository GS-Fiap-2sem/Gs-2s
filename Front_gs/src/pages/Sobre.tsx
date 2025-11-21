import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <div className="app-container">
      <motion.h1
        className="text-4xl font-bold mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Sobre a SkillBridge
      </motion.h1>

      <motion.p
        className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Plataforma desenvolvida para aproximar estudantes técnicos e microempresas,
        transformando conhecimento prático em oportunidades reais de forma direta,
        segura e eficiente.
      </motion.p>

      <motion.div
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border dark:border-gray-700 mb-14"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-4">A História</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          A SkillBridge surgiu a partir da realidade enfrentada por muitos estudantes
          técnicos que possuem boa formação prática, mas encontram dificuldade em
          acessar oportunidades para aplicar seus conhecimentos em situações reais.
          Ao mesmo tempo, microempresas locais necessitam de apoio técnico pontual,
          mas evitam processos longos e burocráticos.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Essa desconexão não ocorre por falta de competência, mas sim por ausência
          de integração entre demanda e talento. A SkillBridge atua justamente nesse
          ponto, simplificando esse encontro de forma objetiva.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          O objetivo é criar um ambiente funcional em que empresas encontrem soluções
          práticas e estudantes desenvolvam experiência profissional com relevância.
        </p>
      </motion.div>

      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold mb-6">O Problema</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-panel">
            <h3 className="font-semibold text-lg mb-2">Processos demorados</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Fluxos tradicionais dificultam contratações rápidas para demandas pontuais.
            </p>
          </div>

          <div className="card-panel">
            <h3 className="font-semibold text-lg mb-2">Pouca exposição</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Estudantes não conseguem demonstrar suas capacidades de forma prática.
            </p>
          </div>

          <div className="card-panel">
            <h3 className="font-semibold text-lg mb-2">Insegurança na escolha</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Empresas têm dificuldade em avaliar perfis sem histórico profissional.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6">Nossa Solução</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-panel">
            <h3 className="font-semibold text-lg mb-2">Conexão inteligente</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Análise de perfil e demanda para sugerir combinações adequadas.
            </p>
          </div>

          <div className="card-panel">
            <h3 className="font-semibold text-lg mb-2">Projetos objetivos</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Contratos curtos focados em entregas práticas e mensuráveis.
            </p>
          </div>

          <div className="card-panel">
            <h3 className="font-semibold text-lg mb-2">Feedback estruturado</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Avaliações que fortalecem a credibilidade entre as partes.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border dark:border-gray-700 mb-14"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-4">Impacto Social</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
          O projeto contribui com metas globais relacionadas à educação e empregabilidade:
        </p>

        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <li><strong>ODS 4:</strong> Educação de qualidade</li>
          <li><strong>ODS 8:</strong> Trabalho decente e crescimento econômico</li>
          <li><strong>ODS 10:</strong> Redução das desigualdades</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mb-28"
      >
        <h2 className="text-2xl font-bold mb-6">Como Funciona</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card-panel text-center">
            <h3 className="font-semibold mb-2">Cadastro</h3>
            <p className="text-gray-600 dark:text-gray-300">Criação de perfil básico.</p>
          </div>

          <div className="card-panel text-center">
            <h3 className="font-semibold mb-2">Análise</h3>
            <p className="text-gray-600 dark:text-gray-300">Compatibilidade entre perfis.</p>
          </div>

          <div className="card-panel text-center">
            <h3 className="font-semibold mb-2">Execução</h3>
            <p className="text-gray-600 dark:text-gray-300">Entrega do serviço proposto.</p>
          </div>

          <div className="card-panel text-center">
            <h3 className="font-semibold mb-2">Avaliação</h3>
            <p className="text-gray-600 dark:text-gray-300">Registro de desempenho.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
