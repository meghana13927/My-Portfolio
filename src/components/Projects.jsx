import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
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
            <h2>Selected work.</h2>
          </div>
          <p className="section-support">
            Compact project highlights from my professional web development work.
          </p>
        </div>

        <div className="single-project-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="single-project-card"
            >
              <div className="single-project-image">
                <img src={project.image} alt={`Preview of the ${project.title} website`} className="h-full w-full object-cover" />
              </div>

              <div className="single-project-copy">
                <p className="reference-label">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="reference-tag-row">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="mt-5">
                  <a href={project.demo} target="_blank" rel="noreferrer" className="button-primary text-sm">
                    Live Website
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
