import profile from "../assets/images/image1.jpeg";
import resume from "../assets/resume/resume1.pdf";
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const highlights = [
  "Scalable full-stack solutions",
  "Clean backend architecture",
  "Thoughtful user experience",
];

const stats = [
  ["10+", "Projects"],
  ["20+", "Technologies"],
  ["2+", "Years Experience"],
];

function Hero() {
  return (
    <section id="home" className="section-shell relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-20 lg:px-8">
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute left-[4%] top-10 h-72 w-72 rounded-full bg-sky-300/25 blur-[120px]"
          animate={{ x: [0, 22, 0], y: [0, 26, 0] }}
          transition={{ duration: 11, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-8 right-[8%] h-80 w-80 rounded-full bg-amber-300/28 blur-[125px]"
          animate={{ x: [0, -26, 0], y: [0, -18, 0] }}
          transition={{ duration: 13, repeat: Infinity }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-sky-100 bg-white/82 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            Available for full-time opportunities
          </div>

          <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-700">
            Full Stack Developer
          </p>

          <h1 className="mt-5 max-w-3xl text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl lg:text-7xl">
            Meghana H M
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            I build professional full-stack applications with strong backend logic, smooth user experiences, and a polished visual presentation that feels modern and dependable.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span key={item} className="rounded-full border border-white/90 bg-white/88 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                {item}
              </span>
            ))}
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

          <div className="mt-10 flex flex-wrap items-center gap-4 text-slate-600">
            <a href="https://github.com/meghana13927" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-full border border-white/80 bg-white/85 px-4 py-3 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:text-sky-700">
              <FaGithub />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/megh13a2/" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-full border border-white/80 bg-white/85 px-4 py-3 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:text-sky-700">
              <FaLinkedin />
              LinkedIn
            </a>
            <a href="mailto:meghameghana370@gmail.com" className="flex items-center gap-3 rounded-full border border-white/80 bg-white/85 px-4 py-3 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:text-sky-700">
              <FaEnvelope />
              Email
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, rotateX: 12 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.95, delay: 0.15 }}
          className="relative [perspective:1600px]"
        >
          <motion.div
            animate={{ rotateY: [0, 5, 0, -5, 0], y: [0, -8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto max-w-xl [transform-style:preserve-3d]"
          >
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-r from-sky-200/40 via-transparent to-amber-200/50 blur-3xl" />
            <div className="pro-card relative rounded-[2.4rem] p-6 md:p-7">
              <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />
              <div className="mb-5 rounded-[1.7rem] bg-gradient-to-r from-white via-sky-50 to-amber-50 px-5 py-4 text-sm font-semibold text-slate-700 shadow-sm">
                Crafting attractive web experiences with clean development and thoughtful design.
              </div>

              <div className="overflow-hidden rounded-[1.9rem] border border-white/90 bg-white/80 shadow-[0_24px_60px_rgba(15,23,42,0.10)]">
                <img src={profile} alt="Meghana H M" className="h-[480px] w-full object-cover object-top" />
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                {stats.map(([value, label]) => (
                  <div key={label} className="rounded-2xl bg-white/82 p-4 text-center shadow-sm">
                    <p className="text-2xl font-extrabold text-slate-900">{value}</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</p>
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
