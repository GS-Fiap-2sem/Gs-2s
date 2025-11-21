import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Cadastro() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6
                    bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      
      <motion.div
        className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-10 w-full max-w-md border dark:border-gray-700"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        
        <h1 className="text-3xl font-extrabold text-center mb-8
                       bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          SkillBridge
        </h1>

        
        <h2 className="text-xl font-semibold mb-6 text-center">
          Criar nova conta
        </h2>

        
        <form className="flex flex-col gap-5">

          <div className="flex flex-col">
            <label className="font-medium mb-1">Nome completo</label>
            <input
              type="text"
              placeholder="Seu nome"
              className="px-4 py-2 rounded-lg border bg-gray-50 dark:bg-gray-700
                         dark:border-gray-600"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="seuemail@gmail.com"
              className="px-4 py-2 rounded-lg border bg-gray-50 dark:bg-gray-700
                         dark:border-gray-600"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">Senha</label>
            <input
              type="password"
              placeholder="********"
              className="px-4 py-2 rounded-lg border bg-gray-50 dark:bg-gray-700
                         dark:border-gray-600"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">Confirmar senha</label>
            <input
              type="password"
              placeholder="********"
              className="px-4 py-2 rounded-lg border bg-gray-50 dark:bg-gray-700
                         dark:border-gray-600"
            />
          </div>

          
          <button
            type="submit"
            className="mt-4 py-2 rounded-lg text-white font-medium
                       bg-blue-600 hover:bg-blue-700 transition">
            Criar conta
          </button>
        </form>

        
        <p className="text-center mt-6 text-gray-600 dark:text-gray-300">
          Já tem conta?
          <Link to="/login" className="text-blue-500 ml-1 hover:underline">
            Entrar
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
