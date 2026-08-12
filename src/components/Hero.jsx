import { motion } from "framer-motion";
import { FaArrowRight, FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/images/home-profile.png";
import resume from "../assets/resume/resume1.pdf";

const coreStack = ["React", "Laravel", "PHP", "Java", "Shopify", "Figma", "MySQL", "REST APIs"];

function Hero() {
  return (
    <section id="home" className="section-shell section-accent-hero px-5 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
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
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            <motion.p className="section-eyebrow" variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
              Hello, I&apos;m
            </motion.p>
            <motion.h1 className="hero-reference-title" variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
              Meghana H M
            </motion.h1>
            <motion.h2 className="hero-reference-role" variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
              Software Developer
            </motion.h2>
            <motion.p className="hero-reference-text" variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
              Full stack developer focused on responsive interfaces, reliable backend systems, e-commerce workflows, and practical product delivery using React, Laravel, PHP, Java, Shopify, Figma, MySQL, and REST APIs.
            </motion.p>

            <motion.div className="hero-stack-row" variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
              {coreStack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </motion.div>

            <motion.div className="hero-reference-actions" variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
              <a href="#projects" className="button-primary">
                View Projects
                <FaArrowRight />
              </a>
              <a href={resume} download className="button-secondary">
                <FaFileAlt />
                Download Resume
              </a>
              <a href="#contact" className="button-secondary">
                <FaEnvelope />
                Contact Me
              </a>
            </motion.div>

            <motion.div className="hero-reference-links" variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
              <a href="https://github.com/meghana13927" target="_blank" rel="noreferrer" aria-label="Visit GitHub profile">
                <FaGithub />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/megh13a2/" target="_blank" rel="noreferrer" aria-label="Visit LinkedIn profile">
                <FaLinkedin />
                LinkedIn
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-reference-visual"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
          >
            <div className="hero-blob hero-blob-one" aria-hidden="true" />
            <div className="hero-blob hero-blob-two" aria-hidden="true" />
            <div className="hero-reference-photo">
              <div className="hero-photo-glow" aria-hidden="true" />
              <img src={profile} alt="Portrait of Meghana H M" className="h-full w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
