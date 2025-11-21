import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Aplicar() {
  const { id } = useParams();
  const [file, setFile] = useState<File | null>(null);
  const [sent, setSent] = useState(false);

  function handleFile(e: any) {
    setFile(e.target.files[0]);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="app-container py-20 max-w-xl mx-auto text-center">
        <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="p-10 rounded-2xl bg-white/10 dark:bg-black/30 backdrop-blur-xl shadow-2xl border border-white/20">
          <motion.div initial={{ rotate: -20, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-5xl mb-4"></motion.div>

          <h1 className="text-3xl font-extrabold mb-4 text-white">Candidatura enviada!</h1>

          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            Seu currículo foi recebido com sucesso.<br />
            A empresa irá analisar sua candidatura e retornará caso avance no processo.
          </p>

          <Link to="/vagas" className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-blue-700 transition shadow-lg">
            Voltar para vagas
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="app-container py-16 max-w-2xl mx-auto">
      <motion.h1 className="text-4xl font-extrabold mb-4 text-white" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        Aplicar para Vaga #{id}
      </motion.h1>

      <p className="text-gray-300 mb-10 text-lg">Preencha as informações abaixo para enviar sua candidatura profissional.</p>

      <motion.form onSubmit={handleSubmit} className="p-10 rounded-2xl bg-white/10 dark:bg-black/30 backdrop-blur-xl shadow-xl border border-white/20" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
        <label className="block mb-6 text-gray-200 font-medium">
          Nome completo
          <input required type="text" className="w-full mt-2 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Seu nome" />
        </label>

        <label className="block mb-6 text-gray-200 font-medium">
          Email
          <input required type="email" className="w-full mt-2 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="seuemail@gmail.com" />
        </label>

        <label className="block mb-6 text-gray-200 font-medium">
          Mensagem para a empresa
          <textarea required rows={4} className="w-full mt-2 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Fale sobre seu interesse, experiência e motivação..." />
        </label>

        <div className="mb-8 text-gray-200 font-medium">
          Enviar currículo (PDF)
          <input type="file" accept="application/pdf" required onChange={handleFile} className="mt-2 text-white" />

          {file && (
            <p className="mt-2 text-sm text-green-400">
              Arquivo: <strong>{file.name}</strong>
            </p>
          )}
        </div>

        <motion.button whileTap={{ scale: 0.97 }} className="w-full py-3 mt-4 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold shadow-lg hover:from-indigo-600 hover:to-blue-700">
          Enviar candidatura
        </motion.button>
      </motion.form>

      <Link to="/vagas" className="block text-center mt-8 text-blue-400 hover:underline">Voltar para vagas</Link>
    </div>
  );
}
