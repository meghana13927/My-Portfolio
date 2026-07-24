import certificates from "../data/certificates";
import { FaExternalLinkAlt } from "react-icons/fa";

function Certificates() {
  return (
    <section
      id="certificates"
      className="py-24 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white">
          Certifications
        </h2>

        <p className="text-gray-400 text-center mt-4 mb-16">
          Certifications that validate my technical knowledge and continuous learning.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {certificates.map((certificate) => (

            <div
              key={certificate.id}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500 hover:shadow-[0_0_35px_rgba(168,85,247,0.4)] transition duration-500"
            >

              <div className="overflow-hidden">

                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-52 object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              <div className="p-6">

                <h3 className="text-xl font-semibold text-white">
                  {certificate.title}
                </h3>

                <p className="text-purple-400 mt-2">
                  {certificate.provider}
                </p>

                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-sm bg-purple-600 px-4 py-2 rounded-xl hover:bg-purple-700 transition"
                >
                  View Certificate
                  <FaExternalLinkAlt />
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificates;