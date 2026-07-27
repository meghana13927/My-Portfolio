import projects from "../data/projects";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-24 bg-gray-950 px-6"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <h2 className="text-5xl md:text-6xl font-bold">
            Projects
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">
            A collection of full-stack applications showcasing my expertise in
            backend development, frontend technologies, database design, REST
            APIs, and scalable software solutions.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">

          {projects.map((project) => (

            <motion.div
              key={project.id}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.4 }}
              className="group overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500 hover:shadow-[0_20px_60px_rgba(168,85,247,0.25)] duration-500"
            >

              {/* Image */}

              <div className="relative overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover group-hover:scale-110 duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0 group-hover:opacity-100 duration-500 flex items-end p-6">

                  <span className="text-white font-semibold">
                    View Project →
                  </span>

                </div>

              </div>

              {/* Content */}

              <div className="p-7">

                <p className="text-purple-400 text-sm font-semibold mb-3">
                  Project {project.id.toString().padStart(2, "0")}
                </p>

                <div className="flex justify-between items-center">

                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>

                  <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500">
                    {project.type}
                  </span>

                </div>

                <p className="mt-5 text-gray-400 leading-7">
                  {project.description}
                </p>

                {/* Tech */}

                <div className="flex flex-wrap gap-3 mt-6">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="px-3 py-2 rounded-xl bg-gray-800 text-purple-300 text-sm"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Buttons */}

                <div className="flex justify-between mt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-900 hover:bg-purple-600 duration-300"
                  >
                    <FaGithub />
                    Source Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 duration-300"
                  >
                    Preview
                    <FaExternalLinkAlt />
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </motion.section>
  );
}

export default Projects;