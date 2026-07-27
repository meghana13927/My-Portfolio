import projects from "../data/projects";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Projects() {
  return (
   
<motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false }}
>
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center">
          Featured Projects
        </h2>

        <p className="text-gray-400 text-center mt-4 mb-16">
          Some of my recent work built using modern technologies.
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">

          {projects.map((project) => (

            <div
              key={project.id}
              className="group rounded-3xl overflow-hidden
              bg-white/5 backdrop-blur-xl
              border border-white/10
              hover:border-purple-500
              hover:-translate-y-3
              hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]
              duration-500"
            >

              {/* Image */}

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover
                  group-hover:scale-110 duration-500"
                />

              </div>

              <div className="p-7">

                <div className="flex justify-between items-center">

                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>

                  <span className="text-xs bg-purple-600 px-3 py-1 rounded-full">
                    Featured
                  </span>

                </div>

                <p className="text-gray-400 mt-5 leading-7">
                  {project.description}
                </p>

                {/* Skills */}

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="bg-gray-800
                      text-purple-300
                      px-3
                      py-2
                      rounded-xl
                      text-sm"
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
                    className="flex items-center gap-2 text-white hover:text-purple-400"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
                  >
                    Live Demo
                    <FaExternalLinkAlt />
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </motion.section>
  );
}

export default Projects;