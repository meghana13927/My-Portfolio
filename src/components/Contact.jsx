import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-black relative overflow-hidden"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-600/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/20 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold">
            Let's <span className="text-purple-500">Connect</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Have an opportunity, project, or just want to say hello?
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-7 hover:border-purple-500 duration-300">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-purple-600 flex items-center justify-center text-2xl">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="text-lg font-semibold">
                    meghameghana370@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-7 hover:border-green-500 duration-300">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-green-600 flex items-center justify-center text-2xl">
                  <FaPhone />
                </div>

                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="text-lg font-semibold">
                    +91 9353423669
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-7 hover:border-cyan-500 duration-300">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-cyan-600 flex items-center justify-center text-2xl">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-lg font-semibold">
                    Bangalore, Karnataka
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-6 pt-4">

              <a
                href="https://github.com/meghana13927"
                target="_blank"
                rel="noreferrer"
                className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-2xl hover:bg-purple-600 hover:scale-110 duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/megh13a2/"
                target="_blank"
                rel="noreferrer"
                className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-2xl hover:bg-blue-600 hover:scale-110 duration-300"
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >

            <form className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-gray-900/70 border border-gray-700 rounded-xl p-4 outline-none focus:border-purple-500 duration-300"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-gray-900/70 border border-gray-700 rounded-xl p-4 outline-none focus:border-purple-500 duration-300"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-gray-900/70 border border-gray-700 rounded-xl p-4 outline-none focus:border-purple-500 duration-300"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full bg-gray-900/70 border border-gray-700 rounded-xl p-4 outline-none resize-none focus:border-purple-500 duration-300"
              ></textarea>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 hover:scale-[1.02] duration-300 font-semibold text-lg flex items-center justify-center gap-3 shadow-xl"
              >
                <FaPaperPlane />
                Send Message
              </button>

            </form>

          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}

export default Contact;