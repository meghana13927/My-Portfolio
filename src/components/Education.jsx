import education from "../data/education";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaAward } from "react-icons/fa";

function Education() {
  return (
    <motion.section
      id="education"
      className="py-24 bg-gray-900 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <h2 className="text-5xl md:text-6xl font-bold">
            Education
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            My academic journey that built a strong foundation in software development,
            programming, and problem-solving.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-purple-500 via-cyan-500 to-pink-500 rounded-full"></div>

          {education.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: false }}
              className="relative pl-20 mb-14"
            >

              {/* Timeline Dot */}

              <div className="absolute left-0 top-6 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/40">

                <FaGraduationCap className="text-white text-xl" />

              </div>

              {/* Card */}

              <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500 hover:shadow-[0_20px_60px_rgba(168,85,247,0.3)] hover:-translate-y-2 transition-all duration-500">

                {/* Year */}

                <div className="flex justify-between items-center flex-wrap gap-4">

                  <span className="flex items-center gap-2 bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm">

                    <FaCalendarAlt />

                    {item.year}

                  </span>

                  <span className="flex items-center gap-2 bg-cyan-600/20 text-cyan-300 px-4 py-2 rounded-full text-sm">

                    <FaAward />

                    {item.score}

                  </span>

                </div>

                <h3 className="text-3xl font-bold mt-6 group-hover:text-purple-400 transition">

                  {item.degree}

                </h3>

                <p className="text-gray-300 mt-4 text-lg">

                  {item.college}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </motion.section>
  );
}

export default Education;