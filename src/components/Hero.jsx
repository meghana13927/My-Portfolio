import profile from "../assets/images/image1.jpeg";
import resume from "../assets/resume/resume1.pdf";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gray-950 flex items-center overflow-hidden"
    >
      {/* Animated Background */}

      <div className="absolute inset-0 overflow-hidden -z-10">

        <motion.div
          className="absolute top-0 left-0 w-[420px] h-[420px] rounded-full bg-purple-600/20 blur-[180px]"
          animate={{
            x: [0, 80, 0],
            y: [0, 50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
        />

        <motion.div
          className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-blue-500/20 blur-[180px]"
          animate={{
            x: [0, -70, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-cyan-500/10 blur-[160px]"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

      </div>

      <div className="max-w-[1180px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
        >

          {/* Badge */}

          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-green-500 bg-green-500/10 text-green-300 mb-8"
          >

            <span className="w-3 h-3 rounded-full bg-green-400 animate-ping"></span>

            Available for Full-Stack Developer Roles

          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.3,
            }}
            className="text-xl text-purple-400"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
            }}
            className="mt-4 text-6xl lg:text-7xl font-black leading-tight bg-gradient-to-r from-white via-purple-300 to-pink-400 bg-clip-text text-transparent"
          >
            Meghana H M
          </motion.h1>

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.7,
            }}
          >

            <TypeAnimation
              sequence={[
                "Full-Stack Web Developer",
                2500,
                "Backend Developer",
                2500,
                "React Developer",
                2500,
                "Laravel Developer",
                2500,
              ]}
              speed={40}
              repeat={Infinity}
              wrapper="h2"
              className="mt-6 text-3xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
            />

          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1,
            }}
            className="mt-8 text-lg text-gray-400 leading-8 max-w-xl"
          >
            Passionate Full-Stack Web Developer specializing in building
            responsive, scalable, secure and user-friendly web applications
            using React, Laravel, Java, MySQL, REST APIs and GraphQL.
          </motion.p>
                    {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap gap-5 mt-10"
          >

            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 35px rgba(168,85,247,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 font-semibold"
            >
              View Projects
            </motion.a>

            <motion.a
              href={resume}
              download
              whileHover={{
                scale: 1.08,
                borderColor: "#a855f7",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 rounded-xl border border-gray-600 hover:bg-purple-600 transition"
            >
              <FaDownload />
              Resume
            </motion.a>

          </motion.div>

          {/* Social Icons */}

          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="flex gap-7 mt-10"
          >

            <motion.a
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{
                y: -10,
                scale: 1.3,
                rotate: 15,
              }}
              href="https://github.com/meghana13927"
              target="_blank"
              rel="noreferrer"
              className="text-4xl hover:text-purple-400 transition"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{
                y: -10,
                scale: 1.3,
                rotate: -15,
              }}
              href="https://www.linkedin.com/in/megh13a2/"
              target="_blank"
              rel="noreferrer"
              className="text-4xl hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{
                y: -10,
                scale: 1.3,
                rotate: 15,
              }}
              href="mailto:meghameghana370@gmail.com"
              className="text-4xl hover:text-red-400 transition"
            >
              <FaEnvelope />
            </motion.a>

          </motion.div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.6,
          }}
        >

          <div className="relative">

            {/* Rotating Ring */}

            <motion.div
              className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/40"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Glow */}

            <motion.div
              className="absolute -inset-8 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 blur-3xl opacity-40"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.35, 0.6, 0.35],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />

            {/* Floating Dots */}

            <motion.div
              className="absolute -top-4 left-12 w-5 h-5 rounded-full bg-cyan-400"
              animate={{
                y: [0, -25, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />

            <motion.div
              className="absolute top-20 -left-6 w-4 h-4 rounded-full bg-purple-500"
              animate={{
                x: [0, 18, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />

            <motion.div
              className="absolute bottom-10 -right-4 w-4 h-4 rounded-full bg-pink-500"
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
            />

            {/* Profile */}

            <motion.img
              src={profile}
              alt="Profile"
              animate={{
                y: [0, -18, 0],
                rotate: [0, 1, 0, -1, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="relative w-80 h-80 lg:w-[430px] lg:h-[430px] rounded-full object-cover border-4 border-white/20 shadow-[0_0_60px_rgba(168,85,247,0.5)]"
            />
                        {/* Animated Border Glow */}
            <motion.div
              className="absolute inset-0 rounded-full border border-cyan-400/30"
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />

          </div>

        </motion.div>

      </div>

      {/* Scroll Down Indicator */}

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
      >
        <a href="#about">

          <div className="w-8 h-14 border-2 border-purple-400 rounded-full flex justify-center items-start p-2">

            <motion.div
              className="w-2 h-2 bg-purple-400 rounded-full"
              animate={{
                y: [0, 18, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />

          </div>

        </a>
      </motion.div>

    </section>
  );
}

export default Hero;