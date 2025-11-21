import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between border-b
                    bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      
      <h1 className="text-xl font-bold">SkillBridge</h1>

      <ul className="flex gap-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/integrantes">Integrantes</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/vagas">Vagas</Link></li>
        <li>
          <Link to="/login" className="font-semibold text-blue-600 dark:text-blue-400 hover:underline">Login</Link>
        </li>
      </ul>

      <ThemeToggle />
    </nav>
  );
}
