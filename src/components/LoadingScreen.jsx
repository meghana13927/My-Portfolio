import { motion } from "framer-motion";
import profile from "../assets/images/image3.jpeg";

function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-slate-950">
      <motion.div
        className="absolute h-80 w-80 rounded-full bg-sky-400/10 blur-[120px]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute h-72 w-72 rounded-full bg-amber-300/8 blur-[120px]"
        animate={{ scale: [1.12, 1, 1.12] }}
        transition={{ duration: 4.4, repeat: Infinity }}
      />

      <div className="relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-fit rounded-[2rem] border border-slate-800 bg-slate-900/75 p-4 shadow-2xl shadow-slate-950/60"
        >
          <img src={profile} alt="Meghana H M" className="h-52 w-44 rounded-[1.4rem] object-cover object-top" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 text-4xl font-extrabold tracking-tight text-slate-50 md:text-5xl"
        >
          Meghana H M
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-3 uppercase tracking-[0.28em] text-slate-400"
        >
          Loading Portfolio
        </motion.p>

        <div className="mx-auto mt-8 h-1.5 w-72 overflow-hidden rounded-full bg-slate-800">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="h-full rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-amber-300"
          />
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
