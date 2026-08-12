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
            <h2>Stack built for real product delivery.</h2>
          </div>
          <p className="section-support">
            Frontend, backend, testing, and tooling arranged in a cleaner skill system.
          </p>
        </div>

        <div className="reference-grid">
          {skills.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true }}
              className="reference-panel"
            >
              <div className="reference-panel-top">
                <p className="reference-label">Category</p>
                <span>{category.items.length} items</span>
              </div>
              <h3 className="reference-panel-title">{category.title}</h3>

              <div className="skills-reference-list">
                {category.items.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div key={skill.name} className="skill-reference-tile">
                      <Icon className={`text-3xl ${skill.color}`} />
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
