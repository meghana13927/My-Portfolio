import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaBriefcase,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const cardVariant = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

function About() {
  return (
    <motion.section
      id="about"
      className="relative py-28 bg-gray-950 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
    >
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute -top-32 -left-20 w-[420px] h-[420px] rounded-full bg-purple-600/20 blur-[180px] animate-pulse"></div>

        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-cyan-500/20 blur-[180px] animate-pulse"></div>

        <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-pink-500/10 blur-[150px]"></div>

      </div>

      <div className="max-w-[1180px] mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black">

            About{" "}

            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>

          </h2>

          <div className="w-28 h-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-5"></div>

          <p className="text-gray-400 text-lg mt-8 max-w-3xl mx-auto leading-8">
            Passionate Full-Stack Web Developer specializing in scalable,
            secure and modern web applications with strong backend and frontend
            expertise.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}

          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            whileHover={{
              scale: 1.02,
              rotateX: 4,
              rotateY: -4,
            }}
            viewport={{ once: false }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 hover:border-purple-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.35)] transition-all duration-500"
          >

            <h3 className="text-3xl font-bold mb-6 text-purple-400">
              Who Am I?
            </h3>

            <p className="text-gray-300 leading-8">
              I am a passionate and detail-oriented Full-Stack Web Developer
              with expertise in React, Laravel, PHP, Java, MySQL, REST APIs,
              GraphQL and Shopify development. I build secure, scalable and
              user-friendly applications while also having experience in
              Automation Testing, UI/UX Design using Figma, Graphic Designing
              and Content Writing. I enjoy solving business problems through
              clean architecture and modern technologies.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div>
                <h4 className="text-gray-500">Name</h4>
                <p className="font-semibold">Meghana H M</p>
              </div>

              <div>
                <h4 className="text-gray-500">Location</h4>
                <p>Bangalore, India</p>
              </div>

              <div>
                <h4 className="text-gray-500">Qualification</h4>
                <p>MCA Graduate</p>
              </div>

              <div>
                <h4 className="text-gray-500">Role</h4>
                <p className="text-green-400">Backend Developer</p>
              </div>

              <div className="flex items-center gap-2">
                <FaEnvelope className="text-purple-400" />
                <span className="text-sm">
                  meghameghana370@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-cyan-400" />
                <span className="text-sm">
                  +91 9353423669
                </span>
              </div>

            </div>

          </motion.div>

          {/* Right */}

          <div className="grid sm:grid-cols-2 gap-6">

            {[
              {
                icon: <FaUserGraduate />,
                color: "text-purple-400",
                title: "Education",
                text: "Master of Computer Applications (CGPA 9.52/10) from St. Joseph Engineering College, Mangalore.",
              },
              {
                icon: <FaBriefcase />,
                color: "text-cyan-400",
                title: "Experience",
                text: "Backend Developer at Athena Business Solution working on Shopify, PHP, React, GraphQL, REST APIs and scalable web solutions.",
              },
              {
                icon: <FaLaptopCode />,
                color: "text-pink-400",
                title: "Tech Stack",
                text: "React, Java, PHP, Laravel, Shopify, MySQL, GraphQL, REST APIs, Git, Selenium and modern frontend technologies.",
              },
              {
                icon: <FaMapMarkerAlt />,
                color: "text-green-400",
                title: "Career Goal",
                text: "To create scalable digital products while continuously learning modern technologies and contributing to innovative software teams.",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: index * 0.15 }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                }}
                viewport={{ once: false }}
                className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-7 hover:border-purple-500 hover:shadow-[0_0_35px_rgba(168,85,247,0.35)] transition-all duration-500"
              >
                <div className={`text-5xl mb-5 ${card.color}`}>
                  {card.icon}
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  {card.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {card.text}
                </p>
              </motion.div>
            ))}

          </div>

        </div>

        {/* Stats */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >

          {[
            ["10+", "Projects"],
            ["20+", "Technologies"],
            ["2+", "Professional Experience"],
            ["100%", "Commitment"],
          ].map(([number, title]) => (
            <motion.div
              key={title}
              whileHover={{
                scale: 1.08,
              }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 text-center hover:border-purple-500 hover:shadow-[0_0_35px_rgba(168,85,247,0.4)] transition-all duration-500"
            >

              <h2 className="text-5xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">

                {number}

              </h2>

              <p className="text-gray-400 mt-4">
                {title}
              </p>

            </motion.div>
          ))}

        </motion.div>

      </div>
    </motion.section>
  );
}

export default About;