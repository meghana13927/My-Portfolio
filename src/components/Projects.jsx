import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import projects from "../data/projects";

function Projects() {
  return (
    <motion.section
      id="projects"
      className="section-shell px-5 py-18 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="site-shell">
        <div className="section-heading">
          <p className="section-eyebrow">Projects</p>
          <h2>Selected work from my portfolio.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true }}
              className="soft-card overflow-hidden p-0"
            >
              <img src={project.image} alt={project.title} className="h-52 w-full object-cover" />
              <div className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                  <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-slate-500">
                    {project.type}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-500">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-3">
                  <a href={project.github} target="_blank" rel="noreferrer" className="button-secondary text-sm">
                    <FaGithub />
                    GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="button-primary text-sm">
                    Live
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
