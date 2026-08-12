import { motion } from "framer-motion";
import experience from "../data/experience";

function Experience() {
  return (
    <motion.section
      id="experience"
      className="section-shell section-accent-orange px-5 py-16 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="site-shell">
        <div className="section-heading section-heading-split">
          <div>
            <p className="section-eyebrow">Experience</p>
            <h2>Professional roles with practical ownership.</h2>
          </div>
          <p className="section-support">
            A cleaner timeline focused on the roles, tools, and responsibilities that matter most to recruiters.
          </p>
        </div>

        <div className="timeline-shell">
          <div className="timeline-line" aria-hidden="true" />
          {experience.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              className="timeline-card"
            >
              <span className="timeline-dot" aria-hidden="true" />
              <div className="timeline-card-date">{item.duration}</div>
              <div className="timeline-card-body">
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
