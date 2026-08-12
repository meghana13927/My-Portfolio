import { motion } from "framer-motion";
import { FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/images/home-profile.png";
import resume from "../assets/resume/resume1.pdf";

function Hero() {
  return (
    <section id="home" className="section-shell px-5 pb-18 pt-28 sm:px-6 lg:px-8">
      <div className="site-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-card mx-auto max-w-4xl text-center"
        >
          <div className="mx-auto max-w-[280px] overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-50 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:max-w-[320px]">
            <img src={profile} alt="Meghana H M" className="h-full w-full object-cover" />
          </div>

          <p className="section-eyebrow mt-8">Meghana H M</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Full Stack Developer
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            I build clean web applications with React, PHP, Laravel, MySQL, REST APIs, and a strong focus on simple user experience.
          </p>

          <div className="mt-8 flex justify-center gap-4 sm:gap-5">
            <a
              href="https://www.linkedin.com/in/megh13a2/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="social-icon"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/meghana13927"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="social-icon"
            >
              <FaGithub />
            </a>
            <a href={resume} download aria-label="Resume" className="social-icon">
              <FaFileAlt />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
