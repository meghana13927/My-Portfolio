import certificates from "../data/certificates";
import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaCertificate,
  FaAward,
} from "react-icons/fa";

function Certificates() {
  return (
    <motion.section
      id="certificates"
      className="py-24 bg-gray-900 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <h2 className="text-5xl md:text-6xl font-bold">
            Certifications
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
            Professional certifications that demonstrate my continuous learning,
            technical expertise, and commitment to building high-quality software.
          </p>

        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          {certificates.map((certificate, index) => (

            <motion.div
              key={certificate.id}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: false }}
              whileHover={{
                y: -12,
              }}
              className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500 hover:shadow-[0_20px_60px_rgba(168,85,247,0.35)] duration-500"
            >

              {/* Certificate Badge */}

              <div className="absolute top-5 right-5 z-20">

                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg">

                  <FaCertificate className="text-white text-xl" />

                </div>

              </div>

              {/* Image */}

              <div className="overflow-hidden h-56">

                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover group-hover:scale-110 duration-700"
                />

              </div>

              {/* Content */}

              <div className="p-7">

                <span className="inline-flex items-center gap-2 text-xs bg-purple-600/20 text-purple-300 px-3 py-2 rounded-full">

                  <FaAward />

                  Certified

                </span>

                <h3 className="text-2xl font-bold mt-5 group-hover:text-purple-400 transition">

                  {certificate.title}

                </h3>

                <p className="text-cyan-300 mt-3">

                  {certificate.provider}

                </p>

                <p className="text-gray-500 text-sm mt-2">

                  {certificate.year}

                </p>

                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition"
                >
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