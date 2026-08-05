import profile from "../assets/images/image1.jpeg";
import resume from "../assets/resume/resume1.pdf";
import { motion } from "framer-motion";
import { FaArrowRight, FaDownload, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const highlights = [
  "Full-stack systems",
  "Backend architecture",
  "Motion-rich UI",
];

const metrics = [
  ["10+", "Projects shaped end-to-end"],
  ["20+", "Technologies used in real work"],
  ["2+", "Years across dev and QA"],
];

function Hero() {
  return (
    <section id="home" className="section-shell relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-18 lg:px-8">
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute left-[6%] top-12 h-80 w-80 rounded-full bg-cyan-400/20 blur-[140px]"
          animate={{ x: [0, 36, 0], y: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 13, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-6 right-[10%] h-96 w-96 rounded-full bg-teal-400/14 blur-[150px]"
          animate={{ x: [0, -30, 0], y: [0, -24, 0], scale: [1.06, 1, 1.06] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
          className="relative z-10"
        >
          <div className="glass-chip mb-7 inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm font-semibold text-cyan-100">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.8)]" />
            Open to full-time product and engineering roles
          </div>

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-200">
            Full Stack Developer
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-extrabold leading-[0.95] text-slate-50 md:text-6xl lg:text-7xl xl:text-[5.35rem]">
            Designing digital experiences that feel <span className="accent-text">2026-ready</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            I build fast, modern full-stack products with strong backend logic, refined interaction design, and interfaces that feel premium instead of template-driven.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span key={item} className="glass-chip rounded-full px-4 py-2 text-sm font-semibold text-slate-200">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="button-primary">
              Explore Work
              <FaArrowRight />
            </a>
            <a href={resume} download className="button-secondary">
              <FaDownload />
              Resume
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 text-slate-300">
            <a href="https://github.com/meghana13927" target="_blank" rel="noreferrer" className="glass-chip inline-flex items-center gap-3 rounded-full px-4 py-3 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:text-cyan-100">
              <FaGithub />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/megh13a2/" target="_blank" rel="noreferrer" className="glass-chip inline-flex items-center gap-3 rounded-full px-4 py-3 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:text-cyan-100">
              <FaLinkedin />
              LinkedIn
            </a>
            <a href="mailto:meghameghana370@gmail.com" className="glass-chip inline-flex items-center gap-3 rounded-full px-4 py-3 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:text-cyan-100">
              <FaEnvelope />
              Email
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 14 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.05, delay: 0.12 }}
          className="relative [perspective:2200px]"
        >
          <motion.div
            animate={{ rotateY: [0, 7, 0, -6, 0], y: [0, -10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto max-w-xl [transform-style:preserve-3d]"
          >
            <div className="absolute -inset-8 rounded-[2.8rem] bg-gradient-to-r from-cyan-400/18 via-transparent to-teal-300/20 blur-3xl" />

            <div className="pro-card panel-3d relative rounded-[2.6rem] p-6 md:p-7">
              <div className="mb-5 grid gap-4 sm:grid-cols-[1.3fr_0.7fr]">
                <div className="glass-chip rounded-[1.7rem] px-5 py-4 text-sm font-semibold text-slate-200">
                  Product-thinking developer with equal attention to backend systems and visual polish.
                </div>
                <div className="metric-badge rounded-[1.7rem] px-5 py-4 text-sm text-slate-300">
                  React, Laravel, GraphQL, REST APIs, MySQL
                </div>
              </div>

              <div className="overflow-hidden rounded-[1.95rem] border border-cyan-200/12 bg-slate-950/50 shadow-[0_26px_70px_rgba(0,0,0,0.34)]">
                <img src={profile} alt="Meghana H M" className="h-[500px] w-full object-cover object-top" />
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {metrics.map(([value, label]) => (
                  <div key={label} className="metric-badge rounded-2xl p-4">
                    <p className="text-3xl font-extrabold text-slate-50">{value}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
