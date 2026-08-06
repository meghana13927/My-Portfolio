import projects from "../data/projects";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function Projects() {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <motion.section id="projects" className="section-shell px-6 py-28 lg:px-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="site-shell">
        <div className="section-heading">
          <span className="section-eyebrow">Projects</span>
          <h2 className="mt-5">
            Real work from my <span className="accent-text">GitHub portfolio</span>
          </h2>
          <p>
            The project showcase now feels more like a motion-led case study stack, with one flagship build and supporting projects layered below it.
          </p>
        </div>

        <div className="space-y-8 [perspective:2000px]">
          <motion.div
            className="pro-card panel-3d tilt-flat overflow-hidden rounded-[2.5rem]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <a href={featuredProject.demo} target="_blank" rel="noreferrer" className="block h-full overflow-hidden">
                <img src={featuredProject.image} alt={featuredProject.title} className="h-full min-h-[320px] w-full object-cover transition duration-700 hover:scale-105" />
              </a>
              <div className="p-8 md:p-10">
                <span className="glass-chip inline-flex rounded-full px-4 py-2 text-sm font-semibold text-cyan-100">
                  Featured Project
                </span>
                <h3 className="mt-6 text-4xl font-bold text-slate-50">{featuredProject.title}</h3>
                <p className="mt-5 leading-8 text-slate-300">{featuredProject.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredProject.tech.map((tech) => (
                    <span key={tech} className="metric-badge rounded-full px-3 py-2 text-sm text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={featuredProject.github} target="_blank" rel="noreferrer" className="button-secondary text-sm">
                    <FaGithub />
                    Source Code
                  </a>
                  <a href={featuredProject.demo} target="_blank" rel="noreferrer" className="button-primary text-sm">
                    View Project
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="project-stack [perspective:2200px]">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-stack-card mb-8"
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
                style={{ zIndex: otherProjects.length - index }}
              >
                <motion.div
                  whileHover={{ y: -10, rotateX: 5, rotateY: index % 2 === 0 ? -4 : 4 }}
                  className="pro-card panel-3d overflow-hidden rounded-[2rem]"
                  style={{ marginTop: index === 0 ? 0 : -32 }}
                >
                  <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
                    <a href={project.demo} target="_blank" rel="noreferrer" className="block overflow-hidden">
                      <img src={project.image} alt={project.title} className="h-full min-h-[260px] w-full object-cover transition duration-700 hover:scale-105" />
                    </a>
                    <div className="flex h-full flex-col p-8">
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-200">Project {String(project.id).padStart(2, "0")}</p>
                        <span className="glass-chip rounded-full px-3 py-1 text-xs font-semibold text-cyan-100">
                          {project.type}
                        </span>
                      </div>
                      <h3 className="mt-5 text-2xl font-bold text-slate-50">{project.title}</h3>
                      <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span key={tech} className="metric-badge rounded-full px-3 py-2 text-sm text-slate-300">
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
                          View Project
                          <FaExternalLinkAlt />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
