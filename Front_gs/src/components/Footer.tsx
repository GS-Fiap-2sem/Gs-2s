import { useEffect, useState } from "react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <footer className="mt-0 border-t dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse opacity-50"></div>

        <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-3xl font-extrabold mb-3 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              SkillBridge
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Conectando estudantes técnicos a oportunidades reais de forma simples e confiável.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-500">Home</a></li>
              <li><a href="/sobre" className="hover:text-blue-500">Sobre</a></li>
              <li><a href="/integrantes" className="hover:text-blue-500">Integrantes</a></li>
              <li><a href="/faq" className="hover:text-blue-500">FAQ</a></li>
              <li><a href="/dashboard" className="hover:text-blue-500">Dashboard</a></li>
              <li><a href="/perfil" className="hover:text-blue-500">Perfil</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">contato@skillbridge.com</li>
              <li className="flex items-center gap-2">@skillbridge</li>
              <li className="flex items-center gap-2">(11) 90000-0000</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Receba novidades</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">Digite seu email para receber atualizações.</p>

            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Seu email"
                className="px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        <div className="border-t dark:border-gray-700 py-4 text-center text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} SkillBridge — Todos os direitos reservados.
        </div>
      </footer>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-xl transition-all"
        >
          Topo
        </button>
      )}
    </>
  );
}
