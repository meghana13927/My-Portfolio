import profile from "../assets/images/image1.jpeg";
import resume from "../assets/resume/resume1.pdf";

import { TypeAnimation } from "react-type-animation";

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
      className="relative min-h-screen bg-gray-950 flex items-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 blur-[180px] rounded-full animate-pulse"></div>

        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-pink-600/20 blur-[180px] rounded-full animate-pulse"></div>

        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/10 blur-[160px] rounded-full"></div>

      </div>

     <div className="max-w-[1180px] mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* Left */}

        <div>

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-green-500 bg-green-500/10 text-green-300 mb-8">

            <span className="w-3 h-3 bg-green-400 rounded-full animate-ping"></span>

            Available for Full-Stack Developer Roles

          </div>

          <p className="text-xl text-purple-400">
            Hello, I'm
          </p>

          <h1 className="mt-4 text-6xl lg:text-7xl font-black leading-tight bg-gradient-to-r from-white via-purple-300 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_5px_25px_rgba(168,85,247,0.8)]">
            Meghana H M
          </h1>

          <TypeAnimation
            sequence={[
              "Full-Stack Web Developer",
              2000,
            ]}
            wrapper="h2"
            speed={20}
            repeat={Infinity}
            className="mt-6 text-3xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
          />

          <p className="mt-8 text-lg text-gray-400 leading-8 max-w-xl">
            Passionate Full-Stack Web Developer specializing in building
            responsive, scalable, and user-friendly web applications using
            React, Laravel, Java, MySQL, REST APIs and GraphQL.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition shadow-xl"
            >
              View Projects
            </a>

            <a
              href={resume}
              download
              className="flex items-center gap-3 px-8 py-4 rounded-xl border border-purple-500 hover:bg-purple-600 transition"
            >
              <FaDownload />
              Resume
            </a>

          </div>

          {/* Social */}

          <div className="flex gap-7 mt-10">

            <a
              href="https://github.com/meghana13927"
              target="_blank"
              rel="noreferrer"
              className="text-4xl hover:text-purple-400 hover:-translate-y-2 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/megh13a2/"
              target="_blank"
              rel="noreferrer"
              className="text-4xl hover:text-blue-400 hover:-translate-y-2 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:meghameghana370@gmail.com"
              className="text-4xl hover:text-red-400 hover:-translate-y-2 transition"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* Right */}

       <div className="flex justify-center">

  <div className="relative group">

    {/* Animated Glow */}
    <div className="absolute -inset-6 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition duration-700 animate-pulse"></div>

    {/* Glass Circle */}
    <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-lg"></div>

    {/* Profile Image */}
    <img
      src={profile}
      alt="Profile"
      className="relative w-80 h-80 lg:w-[430px] lg:h-[430px] rounded-full object-cover border-4 border-white/20 shadow-2xl transition duration-500 group-hover:scale-105 float"
    />

  </div>

</div>
</div>

    </section>
  );
}

export default Hero;