import education from "../data/education";
import { motion } from "framer-motion";
import { FaAward, FaCalendarAlt, FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <motion.section id="education" className="section-shell px-6 py-28 lg:px-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="mx-auto max-w-7xl">
        <div className="section-heading">
          <span className="section-eyebrow">Education</span>
          <h2 className="mt-5">
            Academic achievements with a <span className="accent-text">more visual presentation</span>
          </h2>
          <p>
            My academic path built the technical discipline, consistency, and curiosity that continue to shape my work as a developer.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.68fr_0.32fr]">
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
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-amber-400 to-orange-400 text-2xl text-white shadow-lg">
                      <FaGraduationCap />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700">Academic Stage {String(index + 1).padStart(2, "0")}</p>
                      <h3 className="mt-3 text-3xl font-bold text-slate-900">{item.degree}</h3>
                      <p className="mt-3 text-lg text-slate-600">{item.college}</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm font-semibold">
                    <div className="rounded-full bg-sky-50 px-4 py-2 text-sky-700">
                      <span className="inline-flex items-center gap-2"><FaCalendarAlt /> {item.year}</span>
                    </div>
                    <div className="rounded-full bg-emerald-50 px-4 py-2 text-emerald-700">
                      <span className="inline-flex items-center gap-2"><FaAward /> {item.score}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8">
            <div className="pro-card overflow-hidden rounded-[2rem]">
              <img src="/illustrations/reading.svg" alt="Reading illustration" className="h-56 w-full object-cover" />
              <div className="p-7">
                <h3 className="text-2xl font-bold text-slate-900">Learning Mindset</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Education gave me more than grades. It strengthened my focus, learning habit, and ability to grow quickly in technical environments.
                </p>
              </div>
            </div>
            <div className="pro-card rounded-[2rem] p-7">
              <h3 className="text-2xl font-bold text-slate-900">What It Built</h3>
              <ul className="mt-4 space-y-3 text-slate-600">
                <li>Strong problem-solving approach</li>
                <li>Clear foundation in software concepts</li>
                <li>Consistency, discipline, and curiosity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Education;
