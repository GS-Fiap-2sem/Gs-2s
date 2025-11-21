import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      pergunta: "O que é a SkillBridge?",
      resposta:
        "A SkillBridge é uma plataforma que conecta estudantes técnicos a oportunidades reais no mercado, oferecendo microcontratos, experiências práticas e estágios de curta duração com foco em desenvolvimento profissional.",
    },
    {
      pergunta: "Como funciona o match entre aluno e empresa?",
      resposta:
        "O sistema analisa habilidades, portfólio, experiência, disponibilidade e requisitos das empresas, gerando conexões mais alinhadas entre candidatos e oportunidades.",
    },
    {
      pergunta: "O projeto é focado em quais objetivos?",
      resposta:
        "O principal objetivo é ampliar o acesso ao mercado de trabalho para estudantes técnicos, facilitando contratações e promovendo experiência prática desde o início da formação.",
    },
    {
      pergunta: "As empresas pagam pelo serviço?",
      resposta:
        "Sim. As empresas podem utilizar recursos básicos gratuitamente ou optar pelo Plano Premium, que oferece maior visibilidade e funcionalidades avançadas.",
    },
    {
      pergunta: "Os estudantes recebem por cada microcontrato?",
      resposta:
        "Sim. Todos os microcontratos possuem remuneração, permitindo que o aluno adquira experiência real e fortaleça seu portfólio profissional.",
    },
  ];

  const [ativo, setAtivo] = useState<number | null>(null);

  const toggle = (index: number) => {
    setAtivo(ativo === index ? null : index);
  };

  return (
    <div className="app-container py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold">FAQ</h1>
        <p className="text-gray-400 dark:text-gray-300 text-lg">
          Dúvidas frequentes sobre a plataforma SkillBridge.
        </p>
      </div>

      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white/5 dark:bg-gray-800 border border-white/10 dark:border-gray-700 rounded-xl shadow-lg backdrop-blur-sm"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-4 flex items-center justify-between cursor-pointer"
            >
              <span className="text-lg font-semibold">{faq.pergunta}</span>

              <motion.span
                animate={{ rotate: ativo === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-gray-300"
              >
                v
              </motion.span>
            </button>

            <AnimatePresence>
              {ativo === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="px-6 pb-4 text-gray-300"
                >
                  {faq.resposta}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
