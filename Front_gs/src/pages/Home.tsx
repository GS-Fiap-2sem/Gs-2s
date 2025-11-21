import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  const vagasPopulares = [
    { titulo: "Front-End Jr", empresa: "TechSolutions", tipo: "Estágio" },
    { titulo: "Designer UI/UX", empresa: "CreativeLab", tipo: "Freelancer" },
    { titulo: "Suporte Técnico", empresa: "InfoHelp", tipo: "CLT" },
  ];

  const depoimentos = [
    { nome: "Gabriel S.", texto: "A SkillBridge me conectou ao meu primeiro estágio! Processo muito simples." },
    { nome: "Ana F.", texto: "Consegui fazer um microprojeto e ganhar experiência real. Sensacional!" },
    { nome: "Lucas P.", texto: "Sistema inteligente, rápido e sem burocracia. Recomendo demais." },
  ];

  return (
    <div>
      <section className="px-6 py-20 md:py-28 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Conectando talentos técnicos  
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"> a oportunidades reais.</span>
            </h1>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              A SkillBridge une estudantes técnicos e empresas através de microcontratos, estágios e projetos reais — rápido, direto e sem burocracia.
            </p>

            <Link to="/vagas" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-lg">
              Explorar Vagas
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="flex justify-center">
            <div className="w-80 md:w-[420px] h-60 md:h-72 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-xl">
              SkillBridge
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Por que usar a SkillBridge?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md border dark:border-gray-700 text-center">
              <h3 className="text-xl font-semibold mb-3">Cresça Rápido</h3>
              <p className="text-gray-600 dark:text-gray-300">Acelere sua carreira com oportunidades reais que combinam com seu perfil técnico.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md border dark:border-gray-700 text-center">
              <h3 className="text-xl font-semibold mb-3">Conexões de Verdade</h3>
              <p className="text-gray-600 dark:text-gray-300">Encontre empresas que valorizam o seu talento e buscam novos profissionais.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md border dark:border-gray-700 text-center">
              <h3 className="text-xl font-semibold mb-3">Sem Burocracia</h3>
              <p className="text-gray-600 dark:text-gray-300">Microcontratos, estágios e vagas de forma simples, rápida e transparente.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">O que oferecemos</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div className="p-8 rounded-xl shadow-md bg-white dark:bg-gray-800 border dark:border-gray-700" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h3 className="text-xl font-semibold mb-3">Microcontratos</h3>
            <p className="text-gray-600 dark:text-gray-300">Projetos rápidos que conectam estudantes e empresas de forma prática.</p>
          </motion.div>

          <motion.div className="p-8 rounded-xl shadow-md bg-white dark:bg-gray-800 border dark:border-gray-700" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            <h3 className="text-xl font-semibold mb-3">Estágios Inteligentes</h3>
            <p className="text-gray-600 dark:text-gray-300">Match automático entre vagas e perfis técnicos.</p>
          </motion.div>

          <motion.div className="p-8 rounded-xl shadow-md bg-white dark:bg-gray-800 border dark:border-gray-700" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h3 className="text-xl font-semibold mb-3">Avaliações Reais</h3>
            <p className="text-gray-600 dark:text-gray-300">Reputação baseada em entregas reais e feedback de empresas.</p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12">Vagas populares</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {vagasPopulares.map((v, i) => (
            <motion.div key={i} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border dark:border-gray-700 hover:shadow-xl transition" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h3 className="text-xl font-semibold mb-1">{v.titulo}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">{v.empresa}</p>
              <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg">{v.tipo}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">O que dizem nossos usuários</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {depoimentos.map((d, i) => (
            <motion.div key={i} className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md border dark:border-gray-700" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-gray-700 dark:text-gray-300 mb-4">“{d.texto}”</p>
              <h4 className="font-semibold">{d.nome}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6">
        <h2 className="text-4xl font-bold mb-6">Pronto para dar o próximo passo?</h2>
        <p className="text-lg mb-8">Crie sua conta gratuitamente e comece a encontrar oportunidades reais.</p>

        <Link to="/cadastro" className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition">
          Criar conta agora
        </Link>
      </section>
    </div>
  );
}
