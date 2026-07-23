import certificates from "../data/certificates";
import { FaCertificate } from "react-icons/fa";

function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-gray-950 py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4">
          Certificates
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Professional certifications and learning achievements.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {certificates.map((item) => (

            <div
              key={item.id}
              className="bg-gray-900 rounded-2xl p-8 hover:-translate-y-3 hover:shadow-purple-500/30 hover:shadow-xl duration-300"
            >

              <FaCertificate
                className="text-5xl text-yellow-400 mb-6"
              />

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-purple-400 mt-3">
                {item.issuer}
              </p>

              <p className="text-gray-400 mt-2">
                {item.year}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificates;