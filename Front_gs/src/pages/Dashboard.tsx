import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as ReTooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

export default function Dashboard() {
  const navigate = useNavigate();

  const kpis = useMemo(
    () => ({ usuariosAtivos: 1280, microcontratos: 420, vagasAtivas: 32, horasGeradas: 15400 }),
    []
  );

  const lineData = [
    { month: "Mai", value: 220 },
    { month: "Jun", value: 350 },
    { month: "Jul", value: 480 },
    { month: "Aug", value: 600 },
    { month: "Sep", value: 720 },
    { month: "Oct", value: 880 },
    { month: "Nov", value: 980 },
  ];

  const barData = [
    { name: "Jan", progresso: 20 },
    { name: "Fev", progresso: 35 },
    { name: "Mar", progresso: 50 },
    { name: "Abr", progresso: 65 },
    { name: "Mai", progresso: 80 },
  ];

  const pieData = [
    { name: "Frontend", value: 40 },
    { name: "Backend", value: 25 },
    { name: "UI/UX", value: 15 },
    { name: "Soft Skills", value: 20 },
  ];

  const pieColors = ["#60A5FA", "#34D399", "#C084FC", "#FDBA74"];

  const recentActivity = [
    { id: 1, text: "Gabriel completou módulo React", date: "17/11/2025" },
    { id: 2, text: "Candidatura enviada para TechSolutions", date: "15/11/2025" },
    { id: 3, text: "Novo microcontrato publicado por InfoHelp", date: "12/11/2025" },
  ];

  const dadosCSV = recentActivity.map((r) => ({
    atividade: r.text,
    data: r.date,
    status: r.id === 1 ? "Concluído" : r.id === 2 ? "Pendente" : "Registrado",
  }));

  const exportarCSV = () => {
    const header = "Atividade,Data,Status\n";
    const linhas = dadosCSV.map((e) => `${e.atividade},${e.data},${e.status}`).join("\n");
    const csv = header + linhas;
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "relatorio_skillbridge.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const [openModal, setOpenModal] = useState(false);

  function KPI({ label, value }: { label: string; value: number | string }) {
    return (
      <div className="p-5 bg-white/5 border border-white/10 rounded-2xl shadow-sm">
        <div className="text-sm text-gray-300">{label}</div>
        <div className="text-3xl font-bold text-white mt-2">
          <CountUp end={Number(value)} duration={1.6} separator="." />
        </div>
      </div>
    );
  }

  function PremiumCard() {
    return (
      <motion.div
        whileHover={{ translateY: -6 }}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="lg:col-span-1 bg-gradient-to-br from-indigo-700/20 to-blue-700/10 rounded-2xl p-6 border border-white/10 shadow-lg"
      >
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-md">
            SB
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-300">SkillBridge</div>
                <div className="font-semibold text-white text-lg">Painel Premium</div>
                <div className="text-sm text-gray-400">Resumo rápido</div>
              </div>

              <motion.span
                initial={{ scale: 0.95 }}
                whileTap={{ scale: 0.92 }}
                className="px-3 py-1 rounded-full bg-amber-500 text-sm font-medium text-slate-900 shadow-sm"
              >
                PREMIUM
              </motion.span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="text-xs text-gray-300">Membros</div>
              <div className="text-right text-xs text-gray-300">Active since 2024</div>

              <div className="text-xl font-bold text-white">1.280</div>
              <div className="text-right text-sm text-gray-300">Última atualização</div>
            </div>

            <motion.div
              className="h-1 mt-4 rounded-full overflow-hidden bg-slate-700"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.4 }}
            >
              <div className="h-1 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 w-full" />
            </motion.div>

            <div className="mt-4">
              <button
                onClick={() => navigate("/painel-premium")}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold shadow"
              >
                Ver painel
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  const topSkills = [
    { skill: "React", pct: 92 },
    { skill: "JavaScript", pct: 88 },
    { skill: "Tailwind", pct: 75 },
    { skill: "Git", pct: 70 },
  ];

  return (
    <div className="app-container py-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
        <div>
          <h1 className="text-4xl font-extrabold text-white">Dashboard</h1>
          <p className="text-gray-300 mt-1">Visão geral profissional — métricas, progresso e insights.</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={exportarCSV}
            className="px-4 py-2 rounded-lg border border-gray-600 text-gray-200 hover:bg-white/5 transition"
          >
            Exportar CSV
          </button>

          <button
            onClick={() => setOpenModal(true)}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 text-white hover:from-indigo-600 hover:to-blue-600 shadow"
          >
            Novo relatório
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-10">
        <PremiumCard />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          <KPI label="Usuários ativos" value={kpis.usuariosAtivos} />
          <KPI label="Microcontratos" value={kpis.microcontratos} />
          <KPI label="Vagas ativas" value={kpis.vagasAtivas} />
          <KPI label="Horas geradas" value={kpis.horasGeradas} />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 p-6 rounded-2xl border border-white/10"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Usuários (últimos meses)</h3>
              <div className="text-sm text-gray-300">Atualizado agora</div>
            </div>

            <div style={{ height: 300, width: "100%" }}>
              <ResponsiveContainer>
                <LineChart data={lineData}>
                  <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <ReTooltip />
                  <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 p-6 rounded-2xl border border-white/10"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Atividades recentes</h3>
            <ul className="space-y-3">
              {recentActivity.map((a) => (
                <li key={a.id} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center text-white font-bold">
                    #{a.id}
                  </div>
                  <div>
                    <div className="text-white font-medium">{a.text}</div>
                    <div className="text-sm text-gray-400">{a.date}</div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="space-y-6">
          <motion.div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-4">Distribuição de habilidades</h3>
            <div style={{ height: 220 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={45} outerRadius={80}>
                    {pieData.map((_, i) => (
                      <Cell key={i} fill={pieColors[i % pieColors.length]} />
                    ))}
                  </Pie>
                  <Legend verticalAlign="bottom" />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-4">Top skills</h3>
            <div className="space-y-3">
              {topSkills.map((s) => (
                <div key={s.skill}>
                  <div className="flex justify-between mb-1">
                    <div className="text-sm text-gray-200">{s.skill}</div>
                    <div className="text-sm text-gray-300">{s.pct}%</div>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500"
                      style={{ width: `${s.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
