import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [tipo, setTipo] = useState("estudante");
  const [erro, setErro] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro("");


    const nomeTrim = nome.trim();
    const emailTrim = email.trim();
    const senhaTrim = senha;
    const confirmarTrim = confirmarSenha;


    if (!nomeTrim || !emailTrim || !senhaTrim || !confirmarTrim) {
      setErro("Preencha todos os campos obrigatórios.");
      return;
    }

    if (senhaTrim !== confirmarTrim) {
      setErro("As senhas não coincidem");
      return;
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailTrim)) {
      setErro("Informe um email válido.");
      return;
    }

    const usuario = {
      nome: nomeTrim,
      email: emailTrim,
      senha: senhaTrim,
      tipo: tipo.toLowerCase(),
    };

    console.log("Cadastro payload:", usuario);

    setIsSubmitting(true);
    try {
      const resp = await axios.post(
        "https://java-gs-2-1.onrender.com/api/usuarios",
        usuario,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("Cadastro response:", resp);
      alert("Usuário cadastrado com sucesso!");
      setNome("");
      setEmail("");
      setSenha("");
      setConfirmarSenha("");
    } catch (error: any) {

      console.error("Cadastro error:", error.response ?? error);

      const serverMessage =
        error?.response?.data?.message ||
        error?.response?.data ||
        error?.message ||
        "Erro ao cadastrar usuário";
     
      setErro(
        typeof serverMessage === "string"
          ? serverMessage
          : JSON.stringify(serverMessage)
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <motion.div
        className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-10 w-full max-w-md border dark:border-gray-700"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-extrabold text-center mb-8 text-blue-500">
          SkillBridge
        </h1>

        <h2 className="text-xl font-semibold mb-6 text-center">
          Criar nova conta
        </h2>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div>
            <label>Nome completo</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border bg-gray-50 dark:bg-gray-700"
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border bg-gray-50 dark:bg-gray-700"
            />
          </div>

          <div>
            <label>Senha</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border bg-gray-50 dark:bg-gray-700"
            />
          </div>

          <div>
            <label>Confirmar senha</label>
            <input
              type="password"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border bg-gray-50 dark:bg-gray-700"
            />
          </div>

          <div>
            <label>Tipo de usuário</label>
            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border bg-gray-50 dark:bg-gray-700"
            >
              <option value="aluno">aluno</option>
              <option value="empresa">empresa</option>
            </select>
          </div>

          {erro && (
            <p className="text-red-500 text-sm text-center">{erro}</p>
          )}

          <button
            type="submit"
            className="mt-4 py-2 rounded-lg text-white font-medium bg-blue-600 hover:bg-blue-700 transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Cadastrando..." : "Criar conta"}
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
