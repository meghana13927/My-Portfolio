import projects from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-900 py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4">
          My Projects
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Some of the projects I've built using modern technologies.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (

            <div
              key={project.id}
              className="bg-gray-950 rounded-2xl overflow-hidden border border-gray-800 hover:-translate-y-3 hover:shadow-purple-500/30 hover:shadow-2xl duration-300"
            >
              {/* Placeholder Image */}
              <div className="h-48 bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center">
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>
              </div>

              <div className="p-6">

                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex justify-between">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-purple-600 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-cyan-600 px-4 py-2 rounded-lg hover:bg-cyan-700 transition"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;