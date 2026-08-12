import { motion } from "framer-motion";
import experience from "../data/experience";

function Experience() {
  return (
    <motion.section
      id="experience"
      className="section-shell px-5 py-18 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="site-shell">
        <div className="section-heading">
          <p className="section-eyebrow">Experience</p>
          <h2>Short and focused professional experience.</h2>
        </div>

        <div className="space-y-4">
          {experience.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true }}
              className="soft-card"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{item.role}</h3>
                  <p className="mt-1 text-sm font-medium text-rose-500">{item.company}</p>
                </div>
                <span className="rounded-full bg-stone-100 px-3 py-1 text-sm text-slate-500">
                  {item.duration}
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600">{item.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span key={tech} className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Experience;
