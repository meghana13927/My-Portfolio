import experience from "../data/experience";
import { motion } from "framer-motion";
import { FaBriefcase, FaBuilding, FaCalendarAlt, FaCode } from "react-icons/fa";

function Experience() {
  return (
    <motion.section id="experience" className="section-shell px-6 py-28 lg:px-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="mx-auto max-w-7xl">
        <div className="section-heading">
          <span className="section-eyebrow">Experience</span>
          <h2 className="mt-5">
            Professional work centered on <span className="accent-text">backend strength and product delivery</span>
          </h2>
          <p>
            My experience includes application development, integration work, and building dependable features that support real business workflows.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-5 top-3 hidden h-[calc(100%-1.5rem)] w-px bg-slate-700 md:block" />

          <div className="space-y-8">
            {experience.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="relative md:pl-16"
              >
                <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border border-sky-300/30 bg-slate-900 text-sky-300 md:flex">
                  <FaBriefcase />
                </div>

                <div className="pro-card rounded-[2rem] p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-3xl font-bold text-slate-50">{item.role}</h3>
                      <p className="mt-3 flex items-center gap-2 text-sky-300"><FaBuilding /> {item.company}</p>
                    </div>
                    <div className="rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm font-semibold text-amber-100">
                      <span className="inline-flex items-center gap-2"><FaCalendarAlt /> {item.duration}</span>
                    </div>
                  </div>

                  <p className="mt-6 leading-8 text-slate-300">{item.description}</p>

                  <div className="mt-7">
                    <p className="mb-4 flex items-center gap-2 font-semibold text-slate-200"><FaCode className="text-sky-300" /> Technologies used</p>
                    <div className="flex flex-wrap gap-3">
                      {item.technologies.map((tech) => (
                        <span key={tech} className="rounded-full border border-slate-800 bg-slate-950/55 px-4 py-2 text-sm text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Experience;
