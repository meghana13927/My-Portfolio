import profile from "../assets/images/image1.jpeg";
import resume from "../assets/resume/resume1.pdf";
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const floatingCards = [
  {
    title: "Coding",
    image: "/illustrations/coding.svg",
    className: "-left-8 top-6 md:-left-16",
    animation: { y: [0, -16, 0], rotate: [0, -2, 0] },
  },
  {
    title: "Design",
    image: "/illustrations/design.svg",
    className: "right-0 top-0 md:-right-12",
    animation: { y: [0, 14, 0], rotate: [0, 2, 0] },
  },
  {
    title: "Creative Build",
    image: "/illustrations/reading.svg",
    className: "left-8 bottom-0 md:left-0",
    animation: { y: [0, -12, 0], rotate: [0, 1.5, 0] },
  },
];

function Hero() {
  return (
    <section id="home" className="section-shell relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-30 lg:px-8">
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute left-[6%] top-16 h-72 w-72 rounded-full bg-amber-300/28 blur-[110px]"
          animate={{ x: [0, 20, 0], y: [0, 28, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-[8%] h-80 w-80 rounded-full bg-sky-300/26 blur-[120px]"
          animate={{ x: [0, -30, 0], y: [0, -22, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
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
            I build polished full-stack applications with strong backend logic, thoughtful UI decisions, and a focus on creating products that feel reliable and attractive.
          </p>

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
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative"
        >
          <div className="relative mx-auto max-w-xl">
            <div className="pro-card relative rounded-[2.2rem] p-6 md:p-7">
              <div className="mb-5 rounded-[1.8rem] bg-gradient-to-r from-amber-100 via-white to-sky-100 px-5 py-4 text-sm font-semibold text-slate-700">
                Building modern products with code, design sense, and clear structure.
              </div>

              <div className="overflow-hidden rounded-[1.8rem] border border-white/80 bg-white/75">
                <img src={profile} alt="Meghana H M" className="h-[470px] w-full object-cover object-top" />
              </div>
            </div>

            {floatingCards.map((card, index) => (
              <motion.div
                key={card.title}
                className={`absolute hidden w-44 rounded-[1.4rem] border border-white/80 bg-white/90 p-3 shadow-xl md:block ${card.className}`}
                animate={card.animation}
                transition={{ duration: 4 + index, repeat: Infinity }}
              >
                <img src={card.image} alt={card.title} className="h-24 w-full rounded-xl object-cover" />
                <p className="mt-3 text-sm font-bold text-slate-700">{card.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
