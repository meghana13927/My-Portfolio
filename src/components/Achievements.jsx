import { motion } from "framer-motion";
import { FaArrowRight, FaCertificate, FaTrophy } from "react-icons/fa";
import achievements from "../data/achievements";
import certificates from "../data/certificates";

function Achievements() {
  return (
    <motion.section
      id="achievements"
      className="section-shell section-accent-cyan px-5 py-16 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="site-shell">
        <div className="section-heading section-heading-split">
          <div>
            <p className="section-eyebrow">Achievements & Certifications</p>
            <h2>Real milestones from learning, internships, and hands-on delivery.</h2>
          </div>
          <p className="section-support">
            This section uses only the achievements and certifications already present in the portfolio data.
          </p>
        </div>

        <div className="achievement-grid">
          <div className="achievement-column">
            <p className="section-kicker">Achievements</p>
            {achievements.map((item, index) => (
              <motion.article
                key={item.id}
                className="achievement-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="achievement-icon">
                  <FaTrophy />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="achievement-column">
            <p className="section-kicker">Certifications</p>
            {certificates.map((item, index) => (
              <motion.article
                key={item.id}
                className="achievement-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05 + 0.08 }}
              >
                <div className="achievement-icon achievement-icon-secondary">
                  <FaCertificate />
                </div>
                <div>
                  <div className="achievement-head">
                    <h3>{item.title}</h3>
                    <span>{item.provider}</span>
                  </div>
                  <p>
                    {item.link && item.link !== "#" ? (
                      <a href={item.link} target="_blank" rel="noreferrer" className="achievement-link">
                        View credential
                        <FaArrowRight />
                      </a>
                    ) : (
                      "Credential link not provided in the current portfolio data."
                    )}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Achievements;
