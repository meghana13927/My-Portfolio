import { motion } from "framer-motion";
import { FaArrowRight, FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/images/home-profile.png";
import resume from "../assets/resume/resume1.pdf";

const statItems = [
  ["03", "roles across development, QA, and backend systems"],
  ["05", "featured projects with practical product delivery"],
  ["01", "creative portfolio combining engineering and performance"],
];

const coreStack = ["React", "Laravel", "PHP", "Java", "Shopify", "Figma", "MySQL", "REST APIs"];

function Hero() {
  return (
    <section id="home" className="section-shell px-5 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32">
      <div className="site-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-reference"
        >
          <div className="hero-reference-copy">
            <p className="section-eyebrow">Meghana H M / Portfolio</p>
            <h1 className="hero-reference-title">
              Software Developer
              <br />
              for modern web products.
            </h1>
            <p className="hero-reference-text">
              Full stack developer focused on clean interfaces, reliable backend systems, and practical product execution with React, PHP, Laravel, Java, Shopify, Figma, MySQL, and REST APIs.
            </p>

            <div className="hero-stack-row" aria-label="Core technologies">
              {coreStack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="hero-reference-actions">
              <a href="#projects" className="button-primary">
                View Projects
                <FaArrowRight />
              </a>
              <a href={resume} download className="button-secondary">
                <FaFileAlt />
                Resume
              </a>
              <a href="#contact" className="button-secondary">
                <FaEnvelope />
                Contact Me
              </a>
            </div>

            <div className="hero-reference-links">
              <a href="https://www.linkedin.com/in/megh13a2/" target="_blank" rel="noreferrer">
                <FaLinkedin />
                LinkedIn
              </a>
              <a href="https://github.com/meghana13927" target="_blank" rel="noreferrer">
                <FaGithub />
                GitHub
              </a>
            </div>
          </div>

          <div className="hero-reference-visual">
            <div className="hero-reference-photo">
              <img src={profile} alt="Meghana H M" className="h-full w-full object-cover" />
            </div>

            <div className="hero-reference-stats">
              {statItems.map(([value, text]) => (
                <div key={value} className="hero-stat-row">
                  <span className="hero-stat-value">{value}</span>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
