import { motion } from "framer-motion";
import skills from "../data/skills";

function Skills() {
  return (
    <motion.section
      id="skills"
      className="section-shell px-5 py-16 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="site-shell">
        <div className="section-heading section-heading-split">
          <div>
            <p className="section-eyebrow">Technical Skills</p>
            <h2>Skills presented in a cleaner announcement-bar system.</h2>
          </div>
          <p className="section-support">
            Frontend, backend, database, languages, and tools are grouped in motion-led bars for a more premium technical presentation.
          </p>
        </div>

        <div className="announcement-skill-stack">
          {skills.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="announcement-skill-row"
            >
              <div className="announcement-skill-head">
                <p className="reference-label">Category</p>
                <h3>{category.title}</h3>
              </div>

              <div className="announcement-skill-track">
                <div className="announcement-skill-marquee">
                  {[...category.items, ...category.items].map((skill, skillIndex) => {
                    const Icon = skill.icon;

                    return (
                      <div key={`${skill.name}-${skillIndex}`} className="announcement-skill-pill">
                        <Icon className={`text-xl ${skill.color}`} />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
