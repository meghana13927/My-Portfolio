import { motion } from "framer-motion";
import education from "../data/education";

function Education() {
  return (
    <motion.section
      id="education"
      className="section-shell px-5 py-16 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="site-shell">
        <div className="section-heading section-heading-split">
          <div>
            <p className="section-eyebrow">Education</p>
            <h2>Academic milestones in a simpler format.</h2>
          </div>
          <p className="section-support">
            Focused summary of degree, institution, year, and score.
          </p>
        </div>

        <div className="timeline-reference">
          {education.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true }}
              className="timeline-reference-row"
            >
              <div className="timeline-reference-date">{item.year}</div>
              <div className="timeline-reference-body">
                <div className="timeline-reference-head">
                  <h3>{item.degree}</h3>
                  <span>{item.score}</span>
                </div>
                <p>{item.college}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Education;
