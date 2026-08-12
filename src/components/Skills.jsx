import { motion } from "framer-motion";
import skills from "../data/skills";

function Skills() {
  return (
    <motion.section
      id="skills"
      className="section-shell px-5 py-18 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="site-shell">
        <div className="section-heading">
          <p className="section-eyebrow">Technical Skills</p>
          <h2>Tools I use to build and deliver projects.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            A practical mix of frontend, backend, testing, and tools for real project delivery.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="skills-card soft-card"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-400">Category</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">{category.title}</h3>
                </div>
                <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-500">
                  {category.items.length} skills
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {category.items.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div key={skill.name} className="skill-tile">
                      <Icon className={`text-3xl ${skill.color}`} />
                      <span className="mt-3 text-sm font-medium text-slate-700">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
