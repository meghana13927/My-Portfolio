import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaEnvelope,
  FaFileAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import profile from "../assets/images/home-profile.png";
import resume from "../assets/resume/resume1.pdf";

const statItems = [
  ["03", "roles across software development, QA, and backend delivery"],
  ["02", "live portfolio projects with real-world business use"],
  ["01", "developer profile blending engineering and creativity"],
];

const coreStack = ["React", "Laravel", "PHP", "Java", "Shopify", "Figma", "MySQL", "REST APIs"];

function Hero() {
  return (
    <section id="home" className="section-shell section-accent-violet px-5 pb-18 pt-30 sm:px-6 lg:px-8 lg:pb-24 lg:pt-36">
      <div className="site-shell">
        <div className="hero-reference">
          <motion.div
            className="hero-reference-copy"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.p
              className="section-eyebrow"
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
            >
              Meghana H M / Software Developer
            </motion.p>

            <motion.h1
              className="hero-reference-title"
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            >
              Meghana H M
            </motion.h1>

            <motion.h2
              className="hero-reference-role"
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            >
              Building modern web products with clean frontend, practical backend logic, and recruiter-friendly delivery.
            </motion.h2>

            <motion.p
              className="hero-reference-text"
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            >
              Full stack developer focused on responsive interfaces, reliable APIs, e-commerce workflows, and product execution using React, Laravel, PHP, Java, Shopify, Figma, MySQL, and REST APIs.
            </motion.p>

            <motion.div
              className="hero-stack-row"
              aria-label="Core technologies"
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            >
              {coreStack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </motion.div>

            <motion.div
              className="hero-reference-actions"
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            >
              <a href="#projects" className="button-primary">
                View Projects
                <FaArrowRight />
              </a>
              <a href={resume} download className="button-secondary">
                <FaFileAlt />
                Resume
              </a>
              <a href="#contact" className="button-ghost">
                <FaEnvelope />
                Contact
              </a>
            </motion.div>

            <motion.div
              className="hero-reference-links"
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            >
              <a href="https://www.linkedin.com/in/megh13a2/" target="_blank" rel="noreferrer" aria-label="Visit LinkedIn profile">
                <FaLinkedin />
                LinkedIn
              </a>
              <a href="https://github.com/meghana13927" target="_blank" rel="noreferrer" aria-label="Visit GitHub profile">
                <FaGithub />
                GitHub
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-reference-visual"
            initial={{ opacity: 0, x: 26 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
          >
            <div className="hero-floating-orb hero-floating-orb-one" aria-hidden="true" />
            <div className="hero-floating-orb hero-floating-orb-two" aria-hidden="true" />

            <div className="hero-reference-photo">
              <div className="hero-photo-glow" aria-hidden="true" />
              <img src={profile} alt="Portrait of Meghana H M" className="h-full w-full object-cover" />
            </div>

            <div className="hero-reference-stats">
              {statItems.map(([value, text], index) => (
                <motion.div
                  key={value}
                  className="hero-stat-row"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.42 + index * 0.08 }}
                >
                  <span className="hero-stat-value">{value}</span>
                  <p>{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
