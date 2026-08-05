import { motion } from "framer-motion";
import { FaCode, FaCube, FaLaptopCode, FaLightbulb } from "react-icons/fa";
import { SiFigma, SiLaravel, SiReact } from "react-icons/si";

const orbitIcons = [
  {
    label: "Coding",
    icon: FaCode,
    className: "left-4 top-12 md:left-10",
    tone: "from-sky-500 to-cyan-400",
    animation: { y: [0, -16, 0], rotate: [0, -6, 0] },
  },
  {
    label: "Innovation",
    icon: FaLightbulb,
    className: "right-4 top-10 md:right-10",
    tone: "from-amber-400 to-orange-400",
    animation: { y: [0, 14, 0], rotate: [0, 5, 0] },
  },
  {
    label: "React",
    icon: SiReact,
    className: "-left-2 bottom-18 md:left-8",
    tone: "from-cyan-500 to-blue-500",
    animation: { y: [0, -10, 0], rotate: [0, 8, 0] },
  },
  {
    label: "Laravel",
    icon: SiLaravel,
    className: "right-0 bottom-20 md:right-6",
    tone: "from-rose-500 to-orange-500",
    animation: { y: [0, 12, 0], rotate: [0, -5, 0] },
  },
  {
    label: "Design",
    icon: SiFigma,
    className: "left-1/2 top-0 -translate-x-1/2",
    tone: "from-violet-500 to-fuchsia-500",
    animation: { y: [0, -10, 0], rotate: [0, 4, 0] },
  },
  {
    label: "Development",
    icon: FaLaptopCode,
    className: "left-1/2 bottom-4 -translate-x-1/2",
    tone: "from-emerald-500 to-teal-400",
    animation: { y: [0, 10, 0], rotate: [0, -4, 0] },
  },
];

function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.18),_transparent_28%),linear-gradient(135deg,_#f8fafc_0%,_#eef2ff_52%,_#fff7ed_100%)]">
      <motion.div
        className="absolute h-[28rem] w-[28rem] rounded-full bg-sky-300/18 blur-[130px]"
        animate={{ scale: [1, 1.16, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute h-[22rem] w-[22rem] rounded-full bg-amber-300/20 blur-[120px]"
        animate={{ scale: [1.12, 1, 1.12] }}
        transition={{ duration: 5.4, repeat: Infinity }}
      />

      <div className="relative mx-auto w-full max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.86, rotateX: 18 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto max-w-xl [perspective:1400px]"
        >
          <motion.div
            animate={{ rotateY: [0, 5, 0, -5, 0], y: [0, -8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-[2.4rem] border border-white/80 bg-white/70 px-8 py-12 text-center shadow-[0_30px_90px_rgba(15,23,42,0.12)] backdrop-blur-2xl [transform-style:preserve-3d]"
          >
            <motion.div
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-[1.7rem] bg-gradient-to-br from-slate-900 via-sky-800 to-teal-600 text-3xl text-white shadow-xl"
              animate={{ rotate: [0, 4, 0, -4, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <FaCube />
            </motion.div>

            <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Meghana H M
            </h1>
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.34em] text-slate-500">
              Full Stack Developer Portfolio
            </p>

            <div className="mx-auto mt-7 flex max-w-md flex-wrap justify-center gap-3 text-sm font-semibold text-slate-700">
              <span className="rounded-full bg-sky-50 px-4 py-2">Coding</span>
              <span className="rounded-full bg-amber-50 px-4 py-2">Innovation</span>
              <span className="rounded-full bg-emerald-50 px-4 py-2">Development</span>
              <span className="rounded-full bg-violet-50 px-4 py-2">Technology</span>
            </div>

            <div className="mx-auto mt-8 h-2 w-72 overflow-hidden rounded-full bg-white/70 shadow-inner">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.7, ease: "easeInOut" }}
                className="h-full rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-amber-400"
              />
            </div>
          </motion.div>

          {orbitIcons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                className={`absolute hidden rounded-2xl border border-white/80 bg-white/78 px-4 py-3 shadow-xl backdrop-blur-xl md:flex md:items-center md:gap-3 ${item.className}`}
                animate={item.animation}
                transition={{ duration: 4.4 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${item.tone} text-white`}>
                  <Icon />
                </div>
                <span className="text-sm font-semibold text-slate-700">{item.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default LoadingScreen;
