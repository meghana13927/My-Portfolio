import extracurricular from "../data/extracurricular";
import { motion } from "framer-motion";

function ExtraCurricular() {
  return (
    <motion.section
      id="activities"
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
            Beyond Coding
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
            Outside software development, I enjoy creative activities that
            enhance my imagination, teamwork, communication, and personal growth.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {extracurricular.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: false }}
                whileHover={{
                  scale: 1.03,
                }}
                className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500 hover:shadow-[0_20px_60px_rgba(168,85,247,0.35)] transition-all duration-500"
              >

                {/* Gradient Circle */}

                <div
                  className={`absolute -top-20 -right-20 w-52 h-52 rounded-full bg-gradient-to-r ${item.color} opacity-20 blur-3xl`}
                ></div>

                <div className="relative p-8">

                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg group-hover:rotate-12 duration-500`}
                  >

                    <Icon className="text-4xl text-white" />

                  </div>

                  <h3 className="text-3xl font-bold mt-8 group-hover:text-purple-400 transition">

                    {item.title}

                  </h3>

                  <p className="text-gray-400 leading-8 mt-5">

                    {item.description}

                  </p>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>
    </motion.section>
  );
}

export default ExtraCurricular;