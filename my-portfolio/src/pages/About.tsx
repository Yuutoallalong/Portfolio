import { motion } from "framer-motion";
import "../assets/styles/about.css";
import about_img from "../assets/images/aboutme.jpg";
export default function About() {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="about-container">
        <div className="about-card">
          <div className="about-image">
            <img src={about_img} alt="Profile" />
          </div>
          <div className="about-content">
            <h2 className="about-heading">About Me</h2>
            <p>
              Hi, I'm <b>Parathakorn Thanamee (Yuu)</b>, a third-year Computer
              Engineering student at
              <span className="highlight"> Thammasat University</span>. I have
              passion in
              <span className="highlight">
                {" "}
                making some world changing product to improve Thailand's economy
                situation while earn enough to not be a burnden to anyone else.{" "}
              </span>
            </p>

            <p>
              I have experience working with multiples tech stacks and have
              developed projects like{" "}
              <span className="highlight">FlashBook</span>(Volcabulary game
              site) using django to
              <span className="highlight">Neovault</span> (Secure private
              Storage App) using Flutter and Firebase. Making my own
              <span className="highlight">AuthenAPI.</span> Using OOAD concepts
              and working with team to create
              <span className="highlight">Solarizz</span>(Solar panel management
              system). I also have skills like problem-solving, fast-learning,
              communication, and scalable system design.
            </p>

            <p>
              Currently, I'm expanding my skill set for{" "}
              <span className="highlight-alt">DevOps</span>,{" "}
              <span className="highlight-alt">SAP consult</span>
              and <span className="highlight-alt">Full Stack Devepoler</span>,
              aiming to enhance my understanding of tools and infrastructure,
              especially for a big organization while crafting impactful web and
              mobile applications.
            </p>

            <p>
              Beyond coding, I enjoy fitness, geopolitics, finance, and
              Generative AI trends. I'm always eager to learn and adapt to new
              technologies. I'm open to internship and freelance opportunities
              in
              <span className="highlight"> Full Stack Developer</span>,
              <span className="highlight"> DevOps</span> ,
              <span className="highlight"> Cybersecurity</span>, and
              <span className="highlight"> SAP Consult</span>.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
