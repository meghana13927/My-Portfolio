import education from "../data/education";
import { motion } from "framer-motion";
import { FaAward, FaCalendarAlt, FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <motion.section id="education" className="section-shell px-6 py-28 lg:px-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="mx-auto max-w-6xl">
        <div className="section-heading">
          <span className="section-eyebrow">Education</span>
          <h2 className="mt-5">
            Academic foundations with <span className="accent-text">consistent performance</span>
          </h2>
          <p>
            My education built a strong base in software development, problem-solving, and disciplined execution that continues to shape my work.
          </p>
        </div>

        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              className="pro-card rounded-[2rem] p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-400/10 text-2xl text-sky-300">
                    <FaGraduationCap />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-50">{item.degree}</h3>
                    <p className="mt-3 text-lg text-slate-300">{item.college}</p>
                  </div>
                </div>

                <div className="space-y-3 text-sm font-semibold">
                  <div className="rounded-full border border-slate-700/70 bg-slate-950/55 px-4 py-2 text-slate-300">
                    <span className="inline-flex items-center gap-2"><FaCalendarAlt className="text-sky-300" /> {item.year}</span>
                  </div>
                  <div className="rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-amber-100">
                    <span className="inline-flex items-center gap-2"><FaAward /> {item.score}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Education;
