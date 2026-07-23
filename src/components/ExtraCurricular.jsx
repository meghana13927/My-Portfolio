import extracurricular from "../data/extracurricular";
import { FaStar } from "react-icons/fa";

function ExtraCurricular() {
  return (
    <section
      id="extracurricular"
      className="bg-gray-950 py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4">
          Extra-Curricular Activities
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Activities that helped me grow beyond academics.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {extracurricular.map((item) => (

            <div
              key={item.id}
              className="bg-gray-900 rounded-2xl p-6 text-center hover:-translate-y-2 transition duration-300"
            >
              <FaStar className="text-4xl text-purple-400 mx-auto mb-4" />

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.description}
              </p>
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default ExtraCurricular;