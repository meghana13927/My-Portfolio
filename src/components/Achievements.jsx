import achievements from "../data/achievements";
import { FaTrophy } from "react-icons/fa";

function Achievements() {
  return (
    <section
      id="achievements"
      className="bg-gray-900 py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4">
          Achievements
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Milestones and accomplishments in my learning journey.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {achievements.map((item) => (

            <div
              key={item.id}
              className="bg-gray-950 p-8 rounded-2xl border border-gray-800 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-400/20 transition duration-300"
            >
              <FaTrophy className="text-5xl text-yellow-400 mb-5" />

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                {item.description}
              </p>
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Achievements;