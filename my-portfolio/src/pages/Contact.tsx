import "../assets/styles/contact.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const contactLinks = [
  { id: 1, name: "GitHub", url: "https://github.com/Yuutoallalong", icon: <FaGithub /> },
  { id: 2, name: "LinkedIn", url: "https://linkedin.com/in/parathakorn-thanamee", icon: <FaLinkedin /> },
  { id: 3, name: "Email", url: "mailto:keewya18@gmail.com", icon: <FaEnvelope /> }
];

export default function Contact() {
  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Contact Me</h2>
      <div className="contact-links">
        {contactLinks.map((contact) => (
          <a key={contact.id} href={contact.url} target="_blank" rel="noopener noreferrer" className="contact-link">
            {contact.icon} {contact.name}
          </a>
        ))}
      </div>
    </motion.div>
  );
}

