import { motion } from "framer-motion";
import experience from "../data/experience";

function Experience() {
  return (
    <motion.section
      id="experience"
      className="section-shell px-5 py-16 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="site-shell">
        <div className="section-heading section-heading-split">
          <div>
            <p className="section-eyebrow">Experience</p>
            <h2>Professional roles with practical ownership.</h2>
          </div>
          <p className="section-support">
            Cleaner timeline rows with only the most important role details.
          </p>
        </div>

        <div className="timeline-reference">
          {experience.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true }}
              className="timeline-reference-row"
            >
              <div className="timeline-reference-date">{item.duration}</div>
              <div className="timeline-reference-body">
                <div className="timeline-reference-head">
                  <h3>{item.role}</h3>
                  <span>{item.company}</span>
                </div>
                <p>{item.description}</p>
                <div className="reference-tag-row">
                  {item.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Experience;
