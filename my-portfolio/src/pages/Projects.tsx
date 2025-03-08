import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.div
      className="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Projects</h2>
      <p>Better Design and Video coming soon!!</p>
      <a href="https://flashbook.duckdns.org/">FlashBook (Click Here)</a>
      <br />
      <br />
      <a href="https://solarizz.duckdns.org/login/">Solar Management (Click Here)</a>
    </motion.div>
  );
}
