import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-950 py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4">
          Contact Me
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Let's connect and build something amazing.
        </p>

        <div className="grid md:grid-cols-2 gap-12">

          <div>

            <div className="mb-8">
              <FaEnvelope className="text-purple-400 text-3xl mb-2" />
              <p>meghameghana370@gmail.com</p>
            </div>

            <div className="mb-8">
              <FaPhone className="text-green-400 text-3xl mb-2" />
              <p>+919353423669</p>
            </div>

            <div className="mb-8">
              <FaMapMarkerAlt className="text-red-400 text-3xl mb-2" />
              <p>Bangalore, Karnataka, India</p>
            </div>

            <div className="flex gap-6 mt-10 text-4xl">

              <a href="https://github.com/meghana13927">
                <FaGithub />
              </a>

              <a href="https://www.linkedin.com/in/megh13a2/">
                <FaLinkedin />
              </a>

            </div>

          </div>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name    "
              className="w-full bg-gray-900 p-4 rounded-xl"
            />

            <input
              type="email"
              placeholder="email"
              className="w-full bg-gray-900 p-4 rounded-xl"
            />

            <textarea
              rows="6"
              placeholder="Message"
              className="w-full bg-gray-900 p-4 rounded-xl"
            ></textarea>

            <button
              className="bg-purple-600 px-8 py-4 rounded-xl w-full"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;