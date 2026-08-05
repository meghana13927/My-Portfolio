import skills from "../data/skills";
import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.section id="skills" className="section-shell px-6 py-28 lg:px-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="mx-auto max-w-7xl">
        <div className="section-heading">
          <span className="section-eyebrow">Skills</span>
          <h2 className="mt-5">
            A practical stack for <span className="accent-text">shipping complete products</span>
          </h2>
          <p>
            I work across frontend, backend, database, tooling, and testing layers so projects move smoothly from idea to delivery.
          </p>
        </div>

        <div className="space-y-8">
          {skills.map((category, index) => (
            <motion.div
              key={category.title}
              className="pro-card rounded-[2rem] p-8 md:p-10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="mb-8 flex items-center gap-4">
                <div className="h-12 w-1 rounded-full bg-gradient-to-b from-sky-300 to-amber-300" />
                <h3 className="text-3xl font-bold text-slate-50">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {category.items.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -6 }}
                      className="rounded-[1.5rem] border border-slate-800/80 bg-slate-950/55 p-5 text-center transition hover:border-sky-400/30 hover:bg-slate-900/80"
                    >
                      <div className="flex justify-center">
                        <Icon className={`text-4xl ${skill.color}`} />
                      </div>
                      <h4 className="mt-4 font-semibold text-slate-100">{skill.name}</h4>
                    </motion.div>
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
