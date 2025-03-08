import "../../assets/styles/navbar.css";

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar">
      <button onClick={() => scrollToSection("home")}>Home</button>
      <button onClick={() => scrollToSection("about")}>About</button>
      <button onClick={() => scrollToSection("skills")}>Skills</button>
      <button onClick={() => scrollToSection("projects")}>Projects</button>
      <button onClick={() => scrollToSection("contact")}>Contact</button>
    </nav>
  );
}

