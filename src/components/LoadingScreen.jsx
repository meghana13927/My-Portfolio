import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-rose-400">Portfolio</p>
        <h1 className="mt-4 text-4xl font-bold text-slate-900">Meghana H M</h1>
        <div className="mx-auto mt-6 h-1.5 w-40 overflow-hidden rounded-full bg-stone-200">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="h-full rounded-full bg-rose-400"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default LoadingScreen;
