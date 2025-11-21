import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import FAQ from "./pages/FAQ";
import Integrantes from "./pages/Integrantes";
import Sobre from "./pages/Sobre";
import VagaDetalhe from "./pages/VagaDetalhe";
import Login from "./pages/Login"; 
import Cadastro from "./pages/Cadastro";
import Vagas from "./pages/Vagas";
import Aplicar from "./pages/Aplicar";

import PainelPremium from "./pages/PainelPremium";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vagas" element={<Vagas />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/aplicar/:id" element={<Aplicar />} />
        <Route path="/vaga/:id" element={<VagaDetalhe />} />
        <Route path="/painel-premium" element={<PainelPremium />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
