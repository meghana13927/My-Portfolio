import experience from "../data/experience";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaBuilding,
  FaCode,
} from "react-icons/fa";

function Experience() {
  return (
    <motion.section
      id="experience"
      className="py-24 bg-gray-950 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <h2 className="text-5xl md:text-6xl font-bold">
            Experience
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            My professional journey in software development,
            backend engineering, and quality assurance.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-purple-500 via-cyan-500 to-pink-500 rounded-full"></div>

          {experience.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              viewport={{ once: false }}
              className="relative pl-20 mb-16"
            >

              {/* Timeline Icon */}

              <div
                className="absolute left-0 top-8
                w-12 h-12 rounded-full
                bg-gradient-to-r
                from-purple-600
                to-cyan-500
                flex items-center justify-center
                shadow-lg shadow-purple-500/40"
              >

                <FaBriefcase className="text-white text-lg" />

              </div>

              {/* Card */}

              <div
                className="
                group
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-8
                hover:border-purple-500
                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(168,85,247,0.25)]
                transition-all
                duration-500"
              >

                {/* Top */}

                <div className="flex flex-wrap justify-between gap-4">

                  <div>

                    <h3 className="text-3xl font-bold group-hover:text-purple-400 transition">

                      {item.role}

                    </h3>

                    <div className="flex items-center gap-2 mt-3 text-cyan-300">

                      <FaBuilding />

                      <span>{item.company}</span>

                    </div>

                  </div>

                  <span
                    className="
                    flex items-center
                    gap-2
                    bg-purple-600/20
                    text-purple-300
                    px-4
                    py-2
                    rounded-full
                    text-sm"
                  >

                    <FaCalendarAlt />

                    {item.duration}

                  </span>

                </div>

                {/* Description */}

                <p className="text-gray-300 leading-8 mt-8">

                  {item.description}

                </p>

                {/* Tech */}

                <div className="mt-8">

                  <div className="flex items-center gap-2 mb-4 text-purple-300">

                    <FaCode />

                    <span className="font-semibold">

                      Technologies Used

                    </span>

                  </div>

                  <div className="flex flex-wrap gap-3">

                    {item.technologies.map((tech) => (

                      <span
                        key={tech}
                        className="
                        px-4
                        py-2
                        rounded-xl
                        bg-gray-900
                        border
                        border-gray-700
                        text-sm
                        text-gray-300
                        hover:bg-purple-600
                        hover:border-purple-500
                        hover:text-white
                        duration-300"
                      >

                        {tech}

                      </span>

                    ))}

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </motion.section>
  );
}

export default Experience;