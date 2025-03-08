import { motion } from "framer-motion";
export default function Skills() {
  return (
    <motion.div
      className="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Skills</h2>
      <p>Better Design and Graphics coming soon!!</p>
    </motion.div>
  );
}
