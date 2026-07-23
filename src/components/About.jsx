import {
  FaUserGraduate,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaBriefcase,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-900 text-white flex items-center py-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-4">
          About Me
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-14">
          I'm a passionate Software Developer who enjoys building responsive,
          modern and user-friendly web applications using React, Laravel,
          Java and MySQL.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gray-700 hover:scale-105 transition duration-300">
            <FaUserGraduate className="text-4xl text-purple-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Education</h3>
            <p className="text-gray-300">
              MCA Graduate with strong knowledge of Full Stack Development,
              Java, React, Laravel and SQL.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gray-700 hover:scale-105 transition duration-300">
            <FaBriefcase className="text-4xl text-cyan-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Experience</h3>
            <p className="text-gray-300">
              Internship experience developing web applications using Laravel,
              MySQL and frontend technologies.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gray-700 hover:scale-105 transition duration-300">
            <FaLaptopCode className="text-4xl text-pink-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Technical Skills</h3>
            <p className="text-gray-300">
              React, JavaScript, Tailwind CSS, Laravel, PHP, Java, MySQL,
              Git and GitHub.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gray-700 hover:scale-105 transition duration-300">
            <FaMapMarkerAlt className="text-4xl text-green-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Location</h3>
            <p className="text-gray-300">
              Bangalore,Karnataka, India <br />
              Open to Work | Software Developer
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;