import { motion } from "framer-motion";
import education from "../data/education";

function Education() {
  return (
    <motion.section
      id="education"
      className="section-shell px-5 py-18 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="site-shell">
        <div className="section-heading">
          <p className="section-eyebrow">Education</p>
          <h2>Simple academic background.</h2>
        </div>

        <div className="grid gap-4">
          {education.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true }}
              className="soft-card"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.degree}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.college}</p>
                </div>
                <div className="text-sm text-slate-500 md:text-right">
                  <p>{item.year}</p>
                  <p className="mt-1 font-medium text-rose-500">{item.score}</p>
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
