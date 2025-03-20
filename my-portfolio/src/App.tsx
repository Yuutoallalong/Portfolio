import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./assets/styles/global.css";
import Skills from "./pages/Skills";
import Dashboard from "./pages/Dashboard";


export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div id="home"><Home /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="dashboard"><Dashboard /></div>
      <div id="about"><About /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}
