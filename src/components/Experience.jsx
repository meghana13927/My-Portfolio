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
            Work experience with <span className="accent-text">clear structure and depth</span>
          </h2>
          <p>
            My experience spans development and quality, helping me build reliable applications while understanding both product implementation and software standards.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr] [perspective:1600px]">
          <div className="space-y-6">
            <div className="pro-card panel-3d tilt-flat rounded-[2rem] p-8">
              <h3 className="text-3xl font-bold text-slate-900">Experience Snapshot</h3>
              <p className="mt-4 leading-8 text-slate-600">
                I have worked across software development, testing, backend systems, integrations, and business-focused web solutions. That mix gives me a practical view of both product quality and implementation detail.
              </p>
            </div>

            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="pro-card panel-3d tilt-right rounded-[1.75rem] p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
                      <Icon />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.16em] text-slate-500">{item.label}</p>
                      <p className="mt-1 font-semibold text-slate-900">{item.value}</p>
                    </div>
                  </div>
                </div>
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
                className="pro-card panel-3d tilt-right rounded-[2rem] p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
                      <FaBriefcase />
                      Experience {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-5 text-3xl font-bold text-slate-900">{item.role}</h3>
                    <p className="mt-3 flex items-center gap-2 text-lg text-slate-600"><FaBuilding className="text-sky-600" /> {item.company}</p>
                  </div>
                  <div className="rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700">
                    <span className="inline-flex items-center gap-2"><FaCalendarAlt /> {item.duration}</span>
                  </div>
                </div>

                <p className="mt-6 leading-8 text-slate-600">{item.description}</p>

                <div className="mt-7 rounded-[1.6rem] bg-gradient-to-r from-orange-50 via-white to-sky-50 p-6">
                  <p className="mb-4 flex items-center gap-2 font-semibold text-slate-800"><FaCode className="text-sky-600" /> Technologies Used</p>
                  <div className="flex flex-wrap gap-3">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="rounded-full border border-white bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
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

