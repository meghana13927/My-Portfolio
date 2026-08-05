import experience from "../data/experience";
import { motion } from "framer-motion";
import { FaBriefcase, FaBuilding, FaCalendarAlt, FaCode, FaLayerGroup, FaRocket } from "react-icons/fa";

const highlights = [
  { label: "Roles", value: "3", icon: FaBriefcase },
  { label: "Core Focus", value: "Backend + Full Stack", icon: FaLayerGroup },
  { label: "Current Stage", value: "Building in production", icon: FaRocket },
];

function Experience() {
  return (
    <motion.section id="experience" className="section-shell px-6 py-28 lg:px-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="mx-auto max-w-7xl">
        <div className="section-heading">
          <span className="section-eyebrow">Experience</span>
          <h2 className="mt-5">
            Professional work shaped by <span className="accent-text">engineering depth and product awareness</span>
          </h2>
          <p>
            My experience spans development and quality, which helps me build software with both practical delivery speed and a strong attention to reliability.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr] [perspective:1800px]">
          <div className="space-y-6 section-float">
            <div className="pro-card panel-3d tilt-flat rounded-[2.2rem] p-8">
              <span className="glass-chip inline-flex rounded-full px-4 py-2 text-sm font-semibold text-cyan-100">
                Experience Snapshot
              </span>
              <h3 className="mt-6 text-3xl font-bold text-slate-50">From quality to production systems</h3>
              <p className="mt-4 leading-8 text-slate-300">
                I’ve worked across software testing, backend development, integrations, and business-focused platforms. That mix gives me a wider view of what good software needs to be: correct, scalable, and easy to trust.
              </p>
            </div>

            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="pro-card panel-3d tilt-right rounded-[1.85rem] p-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/12 text-cyan-200">
                      <Icon />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.16em] text-slate-500">{item.label}</p>
                      <p className="mt-1 font-semibold text-slate-100">{item.value}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="space-y-8 section-float">
            {experience.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="pro-card panel-3d tilt-right rounded-[2.2rem] p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="glass-chip inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-cyan-100">
                      <FaBriefcase />
                      Experience {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-5 text-3xl font-bold text-slate-50">{item.role}</h3>
                    <p className="mt-3 flex items-center gap-2 text-lg text-slate-300"><FaBuilding className="text-cyan-300" /> {item.company}</p>
                  </div>
                  <div className="metric-badge rounded-full px-4 py-2 text-sm font-semibold text-teal-100">
                    <span className="inline-flex items-center gap-2"><FaCalendarAlt /> {item.duration}</span>
                  </div>
                </div>

                <p className="mt-6 leading-8 text-slate-300">{item.description}</p>

                <div className="mt-7 rounded-[1.7rem] border border-cyan-300/10 bg-slate-950/28 p-6">
                  <p className="mb-4 flex items-center gap-2 font-semibold text-slate-100"><FaCode className="text-cyan-300" /> Technologies Used</p>
                  <div className="flex flex-wrap gap-3">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="metric-badge rounded-full px-4 py-2 text-sm text-slate-300">
                        {tech}
                      </span>
                    ))}
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
