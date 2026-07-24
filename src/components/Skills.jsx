import skills from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-gray-950 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center">
          Technical Skills
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-16">
          Technologies, frameworks and tools I use to build scalable applications.
        </p>

        <div className="space-y-12">

          {skills.map((category) => (

            <div
              key={category.title}
              className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-purple-500 transition"
            >

              <h3 className="text-2xl font-bold text-purple-400 mb-8">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

                {category.items.map((skill) => {

                  const Icon = skill.icon;

                  return (

                    <div
                      key={skill.name}
                      className="group bg-gray-950 rounded-2xl p-6 flex flex-col items-center justify-center hover:-translate-y-2 hover:shadow-purple-500/30 hover:shadow-xl transition duration-300"
                    >

                      <Icon
                        className={`text-5xl ${skill.color} group-hover:scale-125 transition`}
                      />

                      <h4 className="mt-5 font-semibold text-center">
                        {skill.name}
                      </h4>

                    </div>

                  );

                })}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;