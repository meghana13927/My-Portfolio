import skills from "../data/skills";
import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.section id="skills" className="section-shell px-6 py-28 lg:px-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="mx-auto max-w-7xl">
        <div className="section-heading">
          <span className="section-eyebrow">Skills</span>
          <h2 className="mt-5">
            Systems, tools, and frameworks for <span className="accent-text">shipping modern products</span>
          </h2>
          <p>
            My stack spans frontend, backend, databases, testing, and workflow tooling so I can build products from interface to implementation with confidence.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-[0.34fr_0.66fr] [perspective:1800px]">
          <div className="pro-card panel-3d tilt-flat rounded-[2rem] p-8 section-float">
            <span className="glass-chip inline-flex rounded-full px-4 py-2 text-sm font-semibold text-cyan-100">
              Skill System
            </span>
            <h3 className="mt-6 text-3xl font-bold text-slate-50">Built for real delivery</h3>
            <p className="mt-5 leading-8 text-slate-300">
              I work with the tools needed to design, build, test, and refine products in a practical delivery environment. The goal is not just knowing tools, but using the right ones with intention.
            </p>
          </div>

          <div className="space-y-8 section-float">
            {skills.map((category, index) => (
              <motion.div
                key={category.title}
                className="pro-card panel-3d tilt-flat rounded-[2rem] p-8 md:p-10"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="mb-8 flex items-center gap-4">
                  <div className="h-12 w-1 rounded-full bg-gradient-to-b from-teal-400 to-cyan-300" />
                  <h3 className="text-3xl font-bold text-slate-50">{category.title}</h3>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                  {category.items.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ y: -6, rotateX: 5, rotateY: -5 }}
                        className="metric-badge rounded-[1.5rem] p-5 text-center transition hover:border-cyan-300/20"
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
      </div>
    </motion.section>
  );
}

export default Skills;
