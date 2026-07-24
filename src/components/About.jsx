import {
  FaUserGraduate,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaBriefcase,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="bg-gray-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold">
            About <span className="text-purple-500">Me</span>
          </h2>

          <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            I am a passionate and detail-oriented Full-Stack Web Developer with
            hands-on experience in designing, developing, and maintaining
            scalable web applications using modern technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-gray-700 p-8">

            <h3 className="text-3xl font-bold mb-6 text-purple-400">
              Who Am I?
            </h3>

            <p className="text-gray-300 leading-8">
              I am a passionate and detail-oriented Full-Stack Web Developer with expertise in designing, developing, and maintaining modern web applications. Skilled in React, Laravel, PHP, Java, MySQL, REST APIs, GraphQL, and frontend technologies, I build secure, scalable, and user-friendly solutions. I also have experience with Automation Testing, Figma (UI/UX Design), Graphic Designing, and Content Writing, allowing me to contribute beyond development. I enjoy solving complex problems through clean, maintainable code and continuously improving my technical skills. I am enthusiastic about collaborating on innovative projects and delivering high-quality digital solutions.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">

              <div>
                <h4 className="font-semibold text-gray-400">Name</h4>
                <p>Meghana H M</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-400">Location</h4>
                <p>Bangalore, India</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-400">Qualification</h4>
                <p>MCA Graduate</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-400">Status</h4>
                <p className="text-green-400">
                  Software Developer
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-400">
                  Email
                </h4>
                <p>meghameghana370@gmail.com</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-400">
                  Phone
                </h4>
                <p>+919353423669</p>
              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="grid sm:grid-cols-2 gap-6">

            <div className="bg-white/5 rounded-3xl p-8 border border-gray-700 hover:scale-105 transition duration-300">
              <FaUserGraduate className="text-5xl text-purple-500 mb-5" />

              <h3 className="text-2xl font-bold mb-3">
                Education
              </h3>

              <p className="text-gray-400">
                Master of Computer Applications (MCA)
              </p>
              <p className="text-gray-400">
                St. Joseph Engineering College, Mangalore
              </p>
                <p className="text-gray-400">
                CGPA : 9.52/10
              </p>
            </div>

            <div className="bg-white/5 rounded-3xl p-8 border border-gray-700 hover:scale-105 transition duration-300">
              <FaBriefcase className="text-5xl text-cyan-400 mb-5" />

              <h3 className="text-2xl font-bold mb-3">
                Experience
              </h3>

              <p className="text-gray-400">
                Backend Developer at <span className="font-semibold text-purple-400">Athena Business Solution</span> with experience in Shopify, Laravel, PHP, MySQL, REST APIs, GraphQL, JavaScript, and scalable web application development.
              </p>
            </div>

            <div className="bg-white/5 rounded-3xl p-8 border border-gray-700 hover:scale-105 transition duration-300">
              <FaLaptopCode className="text-5xl text-pink-400 mb-5" />

              <h3 className="text-2xl font-bold mb-3">
                Tech Stack
              </h3>

              <p className="text-gray-400">
                Java, PHP, HTML, CSS, JavaScript, React, Laravel, Shopify, MySQL, REST APIs, GraphQL, Git & GitHub, Selenium.
              </p>
            </div>

            <div className="bg-white/5 rounded-3xl p-8 border border-gray-700 hover:scale-105 transition duration-300">
              <FaMapMarkerAlt className="text-5xl text-green-400 mb-5" />

              <h3 className="text-2xl font-bold mb-3">
                Career Goal
              </h3>

              <p className="text-gray-400">
                To build innovative, scalable, and high-performance software solutions as a Full-Stack Developer while continuously enhancing my technical expertise and contributing to impactful projects in a collaborative environment.
              </p>
            </div>

          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

          <div className="bg-purple-600 rounded-2xl p-6 text-center">
            <h2 className="text-4xl font-bold">5+</h2>
            <p>Projects</p>
          </div>

          <div className="bg-cyan-600 rounded-2xl p-6 text-center">
            <h2 className="text-4xl font-bold">15+</h2>
            <p>Technologies</p>
          </div>

          <div className="bg-pink-600 rounded-2xl p-6 text-center">
            <h2 className="text-4xl font-bold">2</h2>
            <p>Internship</p>
          </div>

          <div className="bg-green-600 rounded-2xl p-6 text-center">
            <h2 className="text-4xl font-bold">100%</h2>
            <p>Dedication</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;