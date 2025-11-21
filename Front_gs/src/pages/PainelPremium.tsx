import { motion } from "framer-motion";
import { ChartNoAxesColumn, FileBarChart, Lightbulb, Lock } from "lucide-react";

export default function PainelPremium() {
  return (
    <div className="app-container py-16">
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text"
        >
          Painel Premium
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 mt-4 text-lg max-w-3xl mx-auto"
        >
          Acesso exclusivo a insights avançados, análises profissionais, relatórios detalhados
          e ferramentas especiais — disponível somente para assinantes Premium da SkillBridge.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="p-8 rounded-2xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-sm"
        >
          <div className="flex items-center gap-4 mb-4">
            <ChartNoAxesColumn size={38} className="text-indigo-400" />
            <h3 className="text-xl font-semibold text-white">Estatísticas Avançadas</h3>
          </div>
          <p className="text-gray-300">
            KPIs aprofundados, análises de desempenho, comparações técnicas e painel
            completo para evolução no mercado.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="p-8 rounded-2xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-sm"
        >
          <div className="flex items-center gap-4 mb-4">
            <FileBarChart size={38} className="text-purple-400" />
            <h3 className="text-xl font-semibold text-white">Relatórios Premium</h3>
          </div>
          <p className="text-gray-300">
            Gere relatórios profissionais em PDF, CSV e visualizações avançadas de forma
            automática e com apenas um clique.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="p-8 rounded-2xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-sm"
        >
          <div className="flex items-center gap-4 mb-4">
            <Lightbulb size={38} className="text-amber-400" />
            <h3 className="text-xl font-semibold text-white">Insights Exclusivos</h3>
          </div>
          <p className="text-gray-300">
            Descubra tendências, padrões, recomendações automáticas e oportunidades baseadas
            no seu perfil técnico.
          </p>
        </motion.div>
      </div>

      <div className="bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 border border-white/10 rounded-2xl p-12 shadow-2xl backdrop-blur-lg">
        <div className="flex items-center gap-4 mb-6">
          <Lock size={32} className="text-purple-300" />
          <h2 className="text-3xl font-bold text-white">Recursos Premium Liberados</h2>
        </div>

        <p className="text-gray-300 text-lg mb-10 max-w-3xl">
          Estes módulos avançados estarão conectados diretamente à sua API no futuro,
          desbloqueando dados reais, relatórios automáticos e análises completas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-xl bg-white/5 border border-white/10 shadow-lg"
          >
            <h3 className="text-lg font-bold text-indigo-300 mb-2">
              Painel de gráficos avançados
            </h3>
            <p className="text-gray-400 text-sm">
              Visualizações premium com Recharts, animações suaves e análise comparativa.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-xl bg-white/5 border border-white/10 shadow-lg"
          >
            <h3 className="text-lg font-bold text-purple-300 mb-2">
              Exportação profissional
            </h3>
            <p className="text-gray-400 text-sm">
              Download de relatórios completos em PDF e CSV com um clique.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-xl bg-white/5 border border-white/10 shadow-lg"
          >
            <h3 className="text-lg font-bold text-pink-300 mb-2">
              Inteligência automatizada
            </h3>
            <p className="text-gray-400 text-sm">
              Recomendações baseadas em IA e análise automática do seu perfil técnico.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
