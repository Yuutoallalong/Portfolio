import { motion } from "framer-motion";
import { Card } from "../components/ui/Card";
import "../assets/styles/skills.css";

const technologies = [
  {
    category: "Frontend",
    skills: ["React", "JavaScript", "TypeScript", "TailwindCSS", "Bootstrap"],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "Django",
      "Java",
      "Springboot",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
    ],
  },
  {
    category: "DevOps",
    skills: [
      "Docker",
      "AWS",
      "CI/CD",
      "Git",
      "Linux",
      "Nginx",
      "Gunicorn",
      "Kubernetes",
      "Github Actions",
    ],
  },
  {
    category: "Tools",
    skills: ["VS Code", "Postman", "Figma", "GitHub"],
  },
];
export default function Skills() {
  return (
    <motion.div
      className="skills p-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="skills-heading text-4xl font-bold text-center mb-8 text-gray-800">
        TECH STACK
      </h2>

      <div className="flex justify-center">
        <div className="grid gap-6 md:grid-cols-2">
          {technologies.map((tech) => (
            <Card key={tech.category} className="p-6 max-w-[360px]">
              <h3 className="text-lg font-semibold mb-4 text-white">
                {tech.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {tech.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-white ring-1 ring-inset ring-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
