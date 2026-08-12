import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt, FaUniversity } from "react-icons/fa";
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
            <h2>Academic milestones in a more expressive timeline layout.</h2>
          </div>
          <p className="section-support">
            Degree, institution, year, and score arranged in a cleaner alternating education journey.
          </p>
        </div>

        <div className="education-roadmap">
          <div className="education-roadmap-line" aria-hidden="true" />

          {education.map((item, index) => (
            <motion.article
              key={item.id}
              className={`education-roadmap-card ${index % 2 === 0 ? "education-roadmap-left" : "education-roadmap-right"}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
            >
              <span className="education-roadmap-dot">{String(index + 1).padStart(2, "0")}</span>

              <div className="education-card-shell">
                <div className="education-card-top">
                  <div>
                    <p className="education-card-label">Education Journey</p>
                    <span className="education-card-year">{item.year}</span>
                  </div>
                  <div className="education-card-icon">
                    <FaGraduationCap />
                  </div>
                </div>

                <h3>{item.degree}</h3>
                <p className="education-card-score">{item.score}</p>
                <p className="education-card-copy">
                  Focused academic progression in computing, software, and analytical foundations.
                </p>

                <div className="education-card-meta">
                  <span>
                    <FaUniversity />
                    {item.college}
                  </span>
                  <span>
                    <FaMapMarkerAlt />
                    Karnataka, India
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Education;
