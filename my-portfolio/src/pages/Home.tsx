import { motion } from "framer-motion";

export default function Home() {
    return (
      <motion.div
      className="home"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="overlay">
        <h1>Welcome to My Portfolio</h1>
        <p>Intro to YuutoUtopia.</p>
        </div>
    </motion.div>
    );
  }
  