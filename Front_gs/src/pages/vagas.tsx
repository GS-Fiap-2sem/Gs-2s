import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { api } from "../services/api";

interface Vaga {
  id: number;
  titulo: string;
  empresa: string;
  local: string;
  tipo: string;
  requisitos: string[];
}

export default function Vagas() {
  const [vagas, setVagas] = useState<Vaga[]>([]);
  const [busca, setBusca] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("Todos");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);
    (async () => {
      try {
        const response = await api.get("/vagas");
        if (mounted) setVagas(response.data);
      } catch (err) {
        console.error("Erro ao buscar vagas:", err);
        if (mounted) setError("Erro ao carregar vagas.");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  const vagasFiltradas = vagas.filter((vaga) => {
    const matchBusca =
      vaga.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      vaga.empresa.toLowerCase().includes(busca.toLowerCase());

    const matchTipo =
      filtroTipo === "Todos" ? true : vaga.tipo === filtroTipo;

    return matchBusca && matchTipo;
  });

  return (
    <div className="app-container">
      <motion.h1
        className="text-3xl font-bold mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Vagas Disponíveis
      </motion.h1>

      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Encontre vagas alinhadas ao seu perfil técnico.
      </p>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <input
          type="text"
          placeholder="Pesquisar vaga ou empresa..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
        />

        <select
          className="px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          value={filtroTipo}
          onChange={(e) => setFiltroTipo(e.target.value)}
        >
          <option>Todos</option>
          <option>Estágio</option>
          <option>CLT</option>
          <option>Freelancer</option>
        </select>
      </div>

      {loading && <p>Carregando vagas...</p>}
      {error && <p className="text-red-400">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {vagasFiltradas.map((vaga) => (
          <motion.div
            key={vaga.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border dark:border-gray-700 hover:shadow-xl transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-xl font-semibold mb-1">{vaga.titulo}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              {vaga.empresa} • {vaga.local}
            </p>

            <span
              className={`inline-block px-3 py-1 mb-4 rounded-lg text-sm text-white
              ${vaga.tipo === "Estágio" && "bg-blue-600"}
              ${vaga.tipo === "CLT" && "bg-green-600"}
              ${vaga.tipo === "Freelancer" && "bg-purple-600"}
              `}
            >
              {vaga.tipo}
            </span>

            <h3 className="font-medium mb-1">Requisitos:</h3>
            <ul className="flex flex-wrap gap-2 mb-4">
              {vaga.requisitos.map((req, index) => (
                <li
                  key={index}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-lg text-sm"
                >
                  {req}
                </li>
              ))}
            </ul>

            <Link
              to={`/vaga/${vaga.id}`}
              className="block text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Ver detalhes
            </Link>
          </motion.div>
        ))}
      </div>

      {vagasFiltradas.length === 0 && !loading && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-10">
          Nenhuma vaga encontrada. Tente outro termo ou filtro.
        </p>
      )}
    </div>
  );
}
