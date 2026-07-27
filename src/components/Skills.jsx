import skills from "../data/skills";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

function Skills() {
  return (
    <motion.section
      id="skills"
      className="relative py-28 bg-gray-950 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
    >
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute -top-24 left-0 w-[420px] h-[420px] bg-purple-600/20 rounded-full blur-[170px] animate-pulse"></div>

        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-[170px] animate-pulse"></div>

        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500/10 rounded-full blur-[150px]"></div>

      </div>

      <div className="max-w-[1180px] mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black">

            Technical{" "}

            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Skills
            </span>

          </h2>

          <div className="w-28 h-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-5"></div>

          <p className="text-gray-400 text-lg mt-8 max-w-3xl mx-auto leading-8">
            Technologies, frameworks and tools I use to build scalable,
            responsive and high-performance web applications.
          </p>

        </motion.div>

        <div className="space-y-14">

          {skills.map((category, index) => (

            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: false }}
              className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 hover:border-purple-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.35)] transition-all duration-500"
            >

              {/* Category Title */}

              <div className="flex items-center gap-4 mb-10">

                <div className="w-3 h-12 rounded-full bg-gradient-to-b from-purple-500 to-cyan-500"></div>

                <h3 className="text-3xl font-bold">

                  {category.title}

                </h3>

              </div>

              {/* Skills */}

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
              >

                {category.items.map((skill) => {

                  const Icon = skill.icon;

                  return (

                    <motion.div
                      key={skill.name}
                      variants={item}
                      whileHover={{
                        scale: 1.08,
                        rotateY: 12,
                        y: -8,
                      }}
                      className="group relative overflow-hidden bg-gray-900/70 border border-gray-800 rounded-3xl p-6 flex flex-col items-center justify-center cursor-pointer transition-all duration-500 hover:border-purple-500 hover:shadow-[0_0_35px_rgba(168,85,247,0.45)]"
                    >

                      {/* Glow */}

                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10"></div>

                      {/* Icon */}

                      <motion.div
                        animate={{
                          y: [0, -6, 0],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 2.5,
                        }}
                      >
                        <Icon
                          className={`text-5xl ${skill.color}`}
                        />
                      </motion.div>

                      {/* Name */}

                      <h4 className="mt-5 font-semibold text-center group-hover:text-purple-300 transition">

                        {skill.name}

                      </h4>

                    </motion.div>

                  );

                })}

              </motion.div>

            </motion.div>

          ))}

        </div>

      </div>

    </motion.section>
  );
}

export default Skills;