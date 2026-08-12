import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import projects from "../data/projects";

function Projects() {
  return (
    <motion.section
      id="projects"
      className="section-shell px-5 py-16 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="site-shell">
        <div className="section-heading section-heading-split">
          <div>
            <p className="section-eyebrow">Projects</p>
            <h2>Selected builds and product work.</h2>
          </div>
          <p className="section-support">
            A more editorial project list inspired by the reference portfolio structure.
          </p>
        </div>

        <div className="reference-list">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="reference-row"
            >
              <div className="reference-row-meta">
                <span>{String(project.id).padStart(2, "0")}</span>
                <p>{project.type}</p>
              </div>

              <div className="reference-row-image">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
              </div>

              <div className="reference-row-copy">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="reference-tag-row">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className="reference-row-links">
                <a href={project.github} target="_blank" rel="noreferrer" className="button-secondary text-sm">
                  <FaGithub />
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="button-primary text-sm">
                  Live
                  <FaExternalLinkAlt />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
