import { motion } from "framer-motion";
import profile from "../assets/images/image3.jpeg";

function LoadingScreen() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-[#030712] flex items-center justify-center z-[9999]">

      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[700px] h-[700px] rounded-full bg-purple-600/20 blur-[180px]"
      />

      <motion.div
        animate={{
          scale: [1.3, 1, 1.3],
          rotate: [360, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/15 blur-[170px]"
      />

      {/* Floating Particles */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-15, 15, -15],
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1.6, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
          }}
        />
      ))}

      {/* Rotating Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[420px] h-[420px] rounded-full border border-purple-500/20"
      />

     {/* 3D Hologram Profile */}
<motion.div
  initial={{
    opacity: 0,
    scale: 0.4,
    rotateY: -90,
    rotateX: 40,
  }}
  animate={{
    opacity: 1,
    scale: [0.4, 1.05, 1],
    rotateY: [-90, 20, 0],
    rotateX: [40, -10, 0],
    y: [40, -12, 0],
  }}
  transition={{
    duration: 2,
    ease: "easeOut",
  }}
  className="relative"
  style={{
    perspective: "1500px",
    transformStyle: "preserve-3d",
  }}
>
  {/* Neon Glow */}
  <div className="absolute -inset-8 rounded-[35px] bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 blur-[70px] opacity-70 animate-pulse"></div>

  {/* Glass Card */}
  <div
    className="
      relative
      w-60
      h-72
      rounded-[30px]
      overflow-hidden
      backdrop-blur-2xl
      bg-white/10
      border
      border-white/20
      shadow-[0_0_80px_rgba(168,85,247,0.5)]
    "
  >
    {/* Image */}
    <img
      src={profile}
      alt="Profile"
      className="w-full h-full object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-white/10"></div>

    {/* Scanning Line */}
    <motion.div
      animate={{
        y: [-260, 260],
      }}
      transition={{
        repeat: Infinity,
        duration: 2.5,
        ease: "linear",
      }}
      className="absolute left-0 w-full h-1 bg-cyan-400 blur-sm opacity-80"
    />

    {/* Corner Borders */}
    <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-cyan-400"></div>
    <div className="absolute top-3 right-3 w-8 h-8 border-r-2 border-t-2 border-purple-400"></div>
    <div className="absolute bottom-3 left-3 w-8 h-8 border-l-2 border-b-2 border-pink-400"></div>
    <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-cyan-400"></div>
  </div>
</motion.div>

      {/* Name Animation */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.4,
          rotateX: -90,
          y: 80,
        }}
        animate={{
          opacity: 1,
          scale: [0.4, 1.1, 1],
          rotateX: [-90, 20, 0],
          y: [80, -8, 0],
        }}
        transition={{
          duration: 2,
        }}
        className="absolute bottom-36 text-center"
      >
        <motion.h1
  initial={{
    opacity: 0,
    y: 60,
    scale: 0.8,
  }}
  animate={{
    opacity: 1,
    y: 0,
    scale: 1,
    textShadow: [
      "0 0 10px #9333ea",
      "0 0 35px #22d3ee",
      "0 0 60px #ec4899",
      "0 0 35px #22d3ee",
    ],
  }}
  transition={{
    duration: 2,
    textShadow: {
      repeat: Infinity,
      duration: 3,
    },
  }}
  className="mt-12 text-6xl lg:text-7xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
>
 
  Meghana H M
</motion.h1>

        <motion.p
          animate={{
            opacity: [0.3, 1, 0.3],
            letterSpacing: ["2px", "8px", "2px"],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="mt-5 uppercase text-gray-400 tracking-[6px]"
        >
          Loading Portfolio...
        </motion.p>

        <div className="w-80 h-1 rounded-full bg-gray-800 mt-8 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5 }}
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default LoadingScreen;