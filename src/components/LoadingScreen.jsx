import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="loading-card"
      >
        <p className="section-eyebrow">Portfolio</p>
        <h1>Meghana H M</h1>
        <div className="loading-bar">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
            className="loading-bar-progress"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default LoadingScreen;
