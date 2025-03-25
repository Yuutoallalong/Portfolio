import { motion } from "framer-motion";
import "../assets/styles/home.css";

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
        <p className="home-heading leading-none">FULL STACK</p>
        <p className="home-heading text-yellow-500 leading-none">/DEVOPS</p>
        <p className="home-description mt-2">Welcome to YuutoUtopia</p>
      </div>
    </motion.div>
  );
}
