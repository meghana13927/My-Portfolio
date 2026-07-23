import experience from "../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-gray-900 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-5">
          Experience
        </h2>

        <p className="text-center text-gray-400 mb-16">
          My professional journey.
        </p>

        {experience.map((item) => (

          <div
            key={item.id}
            className="bg-gray-950 rounded-2xl p-8 border border-gray-800 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/20 transition duration-300 mb-8"
          >

            <h3 className="text-3xl font-bold">
              {item.role}
            </h3>

            <p className="text-purple-400 mt-2">
              {item.company}
            </p>

            <p className="text-gray-500 mt-1">
              {item.duration}
            </p>

            <p className="text-gray-300 mt-6 leading-8">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-purple-600 px-4 py-2 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

        ))}

      </div>
    </section>
  );
}

export default Experience;