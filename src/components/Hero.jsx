import profile from "../assets/images/image1.jpeg";
import resume from "../assets/resume/resume1.pdf";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gray-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-purple-600 rounded-full blur-[150px] opacity-20 top-20 left-10"></div>

      <div className="absolute w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20 bottom-20 right-10"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center relative z-10">

        {/* Left */}

        <div>

          <p className="text-purple-400 text-lg">
            Hello 👋 I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mt-3">
            Meghana
          </h1>

          <h2 className="mt-5 text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Software Developer
          </h2>

          <p className="text-gray-400 mt-8 leading-8">
            Passionate about creating modern websites using
            React, Laravel, Java and MySQL.
            I enjoy building beautiful, responsive and
            user-friendly web applications.
          </p>

          <div className="flex gap-5 mt-10">

          <a
  href="#projects"
  className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition duration-300 shadow-lg"
>
  View Projects
</a>

            <a
  href={resume}
  download
  className="border border-purple-500 px-8 py-4 rounded-xl hover:bg-purple-700 transition duration-300 flex items-center gap-2"
>
  <FaDownload />
  Download Resume
</a>
          </div>

          <div className="flex gap-6 mt-10 text-3xl">

            <a href="https://github.com/meghana13927">
              <FaGithub className="hover:text-purple-400 transition" />
            </a>

            <a href="https://www.linkedin.com/in/megh13a2/">
              <FaLinkedin className="hover:text-blue-400 transition" />
            </a>

            <a href="mailto:meghameghana370@gmail.com">
              <FaEnvelope className="hover:text-red-400 transition" />
            </a>

          </div>

        </div>

        {/* Right */}

        <div className="flex justify-center">

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-purple-600 blur-3xl opacity-30 animate-pulse"></div>

           <img
  src={profile}
  alt="Profile"
  className="relative w-80 h-80 md:w-[430px] md:h-[430px] rounded-full object-cover border-4 border-purple-500 shadow-[0_0_60px_rgba(168,85,247,0.6)] hover:scale-105 duration-500 float"
/>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;