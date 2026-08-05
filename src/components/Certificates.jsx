import certificates from "../data/certificates";
import { motion } from "framer-motion";
import { FaAward, FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

function Certificates() {
  return (
    <motion.section id="certificates" className="section-shell px-6 py-28 lg:px-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="mx-auto max-w-7xl">
        <div className="section-heading">
          <span className="section-eyebrow">Certificates</span>
          <h2 className="mt-5">
            Continuous learning shown through <span className="accent-text">credible proof points</span>
          </h2>
          <p>
            These certifications reflect how I keep strengthening my technical base while staying ready for practical, production-oriented software work.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4 [perspective:1800px]">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              className="pro-card panel-3d tilt-right overflow-hidden rounded-[2rem]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="relative h-56 overflow-hidden">
                <img src={certificate.image} alt={certificate.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/75 text-cyan-200 shadow-md">
                  <FaCertificate />
                </div>
              </div>

              <div className="p-7">
                <span className="glass-chip inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold text-cyan-100">
                  <FaAward />
                  Certified
                </span>
                <h3 className="mt-5 text-2xl font-bold text-slate-50">{certificate.title}</h3>
                <p className="mt-3 text-teal-200">{certificate.provider}</p>
                <p className="mt-2 text-sm text-slate-500">{certificate.year}</p>
                <a href={certificate.link} target="_blank" rel="noreferrer" className="button-secondary mt-7 text-sm">
                  View Certificate
                  <FaExternalLinkAlt />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Certificates;
