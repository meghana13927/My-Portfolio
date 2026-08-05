import profile from "../assets/images/image1.jpeg";
import resume from "../assets/resume/resume1.pdf";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const stats = [
  ["2+", "Years building production-ready web experiences"],
  ["10+", "Portfolio and client-focused projects delivered"],
  ["20+", "Tools and technologies used confidently"],
];

function Hero() {
  return (
    <section id="home" className="section-shell relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-20 lg:px-8">
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute left-[8%] top-24 h-72 w-72 rounded-full bg-sky-400/12 blur-[120px]"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-16 right-[10%] h-80 w-80 rounded-full bg-amber-400/10 blur-[130px]"
          animate={{ x: [0, -35, 0], y: [0, -24, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/8 px-4 py-2 text-sm font-semibold text-emerald-300">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            Available for full-stack and backend developer roles
          </div>

          <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-300">
            Full-Stack Developer
          </p>

          <h1 className="mt-5 max-w-3xl text-5xl font-extrabold leading-tight text-slate-50 md:text-6xl lg:text-7xl">
            Building secure, scalable products with a polished user experience.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I&apos;m Meghana H M, a developer focused on React, Laravel, Java, MySQL, REST APIs, and GraphQL. I enjoy turning business needs into clean, reliable web applications that feel professional on every screen.
          </p>

          <div className="mt-7 text-2xl font-bold text-slate-100 md:text-3xl">
            <TypeAnimation
              sequence={[
                "Backend-first engineer with frontend polish",
                2200,
                "React and Laravel application builder",
                2200,
                "Reliable teammate for modern web products",
                2200,
              ]}
              speed={45}
              repeat={Infinity}
              wrapper="span"
            />
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="button-primary">
              View Projects
            </a>
            <a href={resume} download className="button-secondary">
              <FaDownload />
              Download Resume
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5 text-slate-300">
            <a href="https://github.com/meghana13927" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-3 transition hover:border-sky-400/40 hover:text-sky-200">
              <FaGithub />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/megh13a2/" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-3 transition hover:border-sky-400/40 hover:text-sky-200">
              <FaLinkedin />
              LinkedIn
            </a>
            <a href="mailto:meghameghana370@gmail.com" className="flex items-center gap-3 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-3 transition hover:border-sky-400/40 hover:text-sky-200">
              <FaEnvelope />
              Email
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative"
        >
          <div className="pro-card relative mx-auto max-w-md rounded-[2rem] p-6">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/80 to-transparent" />
            <div className="overflow-hidden rounded-[1.6rem] border border-slate-700/70 bg-slate-900/70">
              <img src={profile} alt="Meghana H M" className="h-[440px] w-full object-cover object-top" />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {stats.map(([value, label]) => (
                <div key={value} className="rounded-2xl border border-slate-800/80 bg-slate-950/55 p-4">
                  <p className="text-2xl font-extrabold text-slate-50">{value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{label}</p>
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
