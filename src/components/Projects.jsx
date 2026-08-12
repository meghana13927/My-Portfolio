import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/projects";

function Projects() {
  return (
    <motion.section
      id="projects"
      className="section-shell section-accent-violet px-5 py-16 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="site-shell">
        <div className="section-heading section-heading-split">
          <div>
            <p className="section-eyebrow">Projects</p>
            <h2>Selected work.</h2>
          </div>
          <p className="section-support">
            Compact project highlights from my professional web development work with live links and cleaner visual emphasis.
          </p>
        </div>

        <div className="single-project-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8 }}
              className="single-project-card"
            >
              <div className="single-project-image">
                <img
                  src={project.image}
                  alt={`Preview of the ${project.title} website`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
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

                <div className="project-card-actions">
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
