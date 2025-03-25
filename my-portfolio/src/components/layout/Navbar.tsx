import "../../assets/styles/navbar.css";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    const sections = [
      { id: "home", offset: 0 },
      { id: "about", offset: 0 },
      { id: "skills", offset: 0 },
      { id: "projects", offset: 0 },
      { id: "contact", offset: 0 },
    ];

    const calculateOffsets = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          section.offset = element.offsetTop;
        }
      });
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      let activeIndex = 0;

      for (let i = 0; i < sections.length; i++) {
        if (scrollY >= sections[i].offset) {
          activeIndex = i;
        }
      }
    };

    calculateOffsets();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", calculateOffsets);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", calculateOffsets);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar">
      <button onClick={() => scrollToSection("home")}>Home</button>
      <button onClick={() => scrollToSection("skills")}>Skills</button>
      <button onClick={() => scrollToSection("projects")}>Projects</button>
      <button onClick={() => scrollToSection("about")}>About</button>
      <button onClick={() => scrollToSection("contact")}>Contact</button>
    </nav>
  );
}
