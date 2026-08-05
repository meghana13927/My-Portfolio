import projects from "../data/projects";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <motion.section id="projects" className="section-shell px-6 py-28 lg:px-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="mx-auto max-w-7xl">
        <div className="section-heading">
          <span className="section-eyebrow">Projects</span>
          <h2 className="mt-5">
            Selected work with a <span className="accent-text">clear product mindset</span>
          </h2>
          <p>
            These projects reflect how I think about architecture, usability, and maintainable implementation across different application types.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="pro-card overflow-hidden rounded-[2rem]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="flex h-full flex-col p-8">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-300">Project {String(project.id).padStart(2, "0")}</p>
                  <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-200">
                    {project.type}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-bold text-slate-50">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-800 bg-slate-950/65 px-3 py-2 text-sm text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={project.github} target="_blank" rel="noreferrer" className="button-secondary text-sm">
                    <FaGithub />
                    Source Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="button-primary text-sm">
                    Live Preview
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
