import skills from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-950 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4">
          My Skills
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Technologies and tools I use to build web applications.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((skill) => (

            <div
              key={skill.name}
              className="bg-gray-900 rounded-2xl p-6 hover:scale-105 duration-300 shadow-lg"
            >

              <div className="flex justify-between mb-3">

                <h3 className="text-xl font-semibold">
                  {skill.name}
                </h3>

                <span>
                  {skill.level}%
                </span>

              </div>

              <div className="w-full h-3 bg-gray-700 rounded-full">

                <div
                  className={`${skill.color} h-3 rounded-full`}
                  style={{ width: `${skill.level}%` }}
                ></div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;