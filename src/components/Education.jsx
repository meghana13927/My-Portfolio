import { motion } from "framer-motion";
import education from "../data/education";

function Education() {
  return (
    <motion.section
      id="education"
      className="section-shell section-accent-blue px-5 py-16 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="site-shell">
        <div className="section-heading section-heading-split">
          <div>
            <p className="section-eyebrow">Education</p>
            <h2>Academic milestones presented in a cleaner way.</h2>
          </div>
          <p className="section-support">
            Focused summary of degree, institution, year, and score with a lighter recruiter-friendly layout.
          </p>
        </div>

        <div className="timeline-shell timeline-shell-education">
          <div className="timeline-line" aria-hidden="true" />
          {education.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              className="timeline-card timeline-card-education"
            >
              <span className="timeline-dot" aria-hidden="true" />
              <div className="timeline-card-date">{item.year}</div>
              <div className="timeline-card-body">
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
