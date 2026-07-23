import education from "../data/education";

function Education() {
  return (
    <section
      id="education"
      className="bg-gray-950 py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Education
        </h2>

        <div className="relative border-l-4 border-purple-600 ml-6">

          {education.map((item) => (

            <div
              key={item.id}
              className="mb-12 ml-8"
            >

              <div className="absolute -left-4 w-8 h-8 rounded-full bg-purple-600"></div>

              <div className="bg-gray-900 rounded-xl p-6 hover:scale-105 duration-300">

                <h3 className="text-2xl font-bold">
                  {item.degree}
                </h3>

                <p className="text-purple-400 mt-2">
                  {item.college}
                </p>

                <p className="text-gray-400 mt-2">
                  {item.year}
                </p>

               

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;