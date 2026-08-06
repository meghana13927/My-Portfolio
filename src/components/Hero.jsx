import profile from "../assets/images/image1.jpeg";
import resume from "../assets/resume/resume1.pdf";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowRight, FaDownload, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";

const highlights = [
  "React and Laravel products",
  "Backend systems and APIs",
  "Modern motion-led UI",
];

const metrics = [
  ["10+", "Projects shaped end-to-end"],
  ["20+", "Technologies used in real work"],
  ["2+", "Years across dev and QA"],
];

const motionStrips = [
  "Full Stack Development",
  "React Experience",
  "Laravel Architecture",
  "REST and GraphQL APIs",
  "Modern Product UI",
  "Creative Problem Solving",
];

const headlineWords = ["Building", "modern", "web", "products"];

function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const leftY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const rightY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const heroRotate = useTransform(scrollYProgress, [0, 1], [0, -4]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const panelY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section ref={sectionRef} id="home" className="section-shell relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-18 lg:px-8">
      <div className="absolute inset-0 -z-10">
        <motion.div
          style={{ y: leftY }}
          className="absolute left-[6%] top-12 h-80 w-80 rounded-full bg-cyan-400/20 blur-[140px]"
          animate={{ x: [0, 36, 0], y: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 13, repeat: Infinity }}
        />
        <motion.div
          style={{ y: rightY }}
          className="absolute bottom-6 right-[10%] h-96 w-96 rounded-full bg-teal-400/14 blur-[150px]"
          animate={{ x: [0, -30, 0], y: [0, -24, 0], scale: [1.06, 1, 1.06] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <motion.div style={{ scale: heroScale }} className="site-shell grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
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

          <h1 className="mt-5 max-w-4xl text-5xl font-extrabold leading-[0.92] text-slate-50 md:text-6xl lg:text-7xl xl:text-[5rem]">
            {headlineWords.map((word, index) => (
              <span key={word} className="hero-word mr-4 inline-block overflow-hidden">
                <motion.span
                  initial={{ y: "110%", rotateX: -90, opacity: 0 }}
                  animate={{ y: "0%", rotateX: 0, opacity: 1 }}
                  transition={{ duration: 0.75, delay: 0.1 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={word === "modern" || word === "products" ? "accent-text" : "text-slate-50"}
                >
                  {word}
                </motion.span>
              </span>
            ))}
            <span className="block mt-2 text-slate-50">with strong backend logic and refined user experience.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-300"
          >
            I create professional full-stack applications using React, Laravel, JavaScript, MySQL, REST APIs, and GraphQL, with a focus on performance, clarity, and polished execution.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-3">
            {highlights.map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.65 + index * 0.08 }}
                className="glass-chip rounded-full px-4 py-2 text-sm font-semibold text-slate-200"
              >
                {item}
              </motion.span>
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
          style={{ y: photoY, rotate: heroRotate }}
          initial={{ opacity: 0, y: 40, rotateX: 14 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.05, delay: 0.12 }}
          className="hero-stack relative [perspective:2200px]"
        >
          <motion.div style={{ y: panelY }} className="hero-layer hidden lg:block">
            <motion.div
              animate={{ y: [0, -18, 0], rotate: [0, -3, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="hero-panel left-0 top-24 w-44 rounded-[1.6rem] p-4"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Frontend</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">Responsive interfaces with motion, rhythm, and product clarity.</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, 16, 0], rotate: [0, 4, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="hero-panel right-0 top-8 w-48 rounded-[1.6rem] p-4"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-teal-200">Backend</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">APIs, workflows, and application logic designed for reliability.</p>
            </motion.div>
          </motion.div>

          <motion.div
            animate={{ rotateY: [0, 7, 0, -6, 0], y: [0, -10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto max-w-[30rem] [transform-style:preserve-3d]"
          >
            <div className="absolute -inset-8 rounded-[2.8rem] bg-gradient-to-r from-cyan-400/18 via-transparent to-teal-300/20 blur-3xl" />

            <div className="pro-card panel-3d relative rounded-[2.6rem] p-6 md:p-7">
              <div className="mb-5 overflow-hidden rounded-[1.7rem] border border-cyan-200/10 bg-slate-950/32 px-5 py-4 text-sm font-semibold text-slate-300">
                <motion.div
                  className="flex gap-8 whitespace-nowrap"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                >
                  {[...motionStrips, ...motionStrips].map((item, index) => (
                    <span key={`${item}-${index}`} className="inline-flex items-center gap-3 text-cyan-100">
                      <span className="h-2 w-2 rounded-full bg-teal-300" />
                      {item}
                    </span>
                  ))}
                </motion.div>
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
      </motion.div>
    </section>
  );
}

export default Hero;
