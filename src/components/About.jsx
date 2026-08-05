import { motion } from "framer-motion";
import { FaBriefcase, FaEnvelope, FaLaptopCode, FaMapMarkerAlt, FaPhoneAlt, FaUserGraduate } from "react-icons/fa";

const highlights = [
  {
    icon: <FaUserGraduate />,
    title: "Education",
    text: "MCA graduate with strong academic performance and a disciplined software engineering foundation.",
    tone: "bg-amber-100 text-amber-700",
  },
  {
    icon: <FaBriefcase />,
    title: "Experience",
    text: "Hands-on full-stack and backend work across Shopify, PHP, React, GraphQL, and REST APIs.",
    tone: "bg-sky-100 text-sky-700",
  },
  {
    icon: <FaLaptopCode />,
    title: "Tech Focus",
    text: "Strong interest in building practical products with clean logic, solid UI, and dependable workflows.",
    tone: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    text: "Based in Bangalore and eager to contribute to thoughtful teams building meaningful digital products.",
    tone: "bg-rose-100 text-rose-700",
  },
];

function About() {
  return (
    <motion.section id="about" className="section-shell px-6 py-28 lg:px-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="mx-auto max-w-7xl">
        <div className="section-heading">
          <span className="section-eyebrow">About</span>
          <h2 className="mt-5">
            Building products with <span className="accent-text">clarity, creativity, and care</span>
          </h2>
          <p>
            I enjoy combining backend strength with frontend presentation so the final result feels reliable, maintainable, and attractive to use.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] [perspective:1600px]">
          <motion.div className="pro-card panel-3d tilt-flat rounded-[2rem] p-8 md:p-10" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700">
              Full Stack Developer from Bangalore
            </div>
            <h3 className="mt-6 text-3xl font-bold text-slate-900">Who I Am</h3>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              I am a detail-oriented full-stack web developer with experience in React, Laravel, PHP, Java, MySQL, REST APIs, GraphQL, and Shopify development. Alongside development, I also enjoy UI/UX thinking, testing, and creative work that helps products feel more complete.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              My goal is to create software that is not only functional but also elegant, clear, and enjoyable for users.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-gradient-to-r from-orange-50 to-white p-5">
                <p className="text-sm uppercase tracking-[0.16em] text-slate-500">Name</p>
                <p className="mt-2 font-semibold text-slate-800">Meghana H M</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-r from-sky-50 to-white p-5">
                <p className="text-sm uppercase tracking-[0.16em] text-slate-500">Primary Role</p>
                <p className="mt-2 font-semibold text-sky-700">Full Stack Developer</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-r from-amber-50 to-white p-5">
                <p className="text-sm uppercase tracking-[0.16em] text-slate-500">Email</p>
                <p className="mt-2 flex items-center gap-2 font-semibold text-slate-800"><FaEnvelope className="text-sky-600" /> meghameghana370@gmail.com</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-r from-emerald-50 to-white p-5">
                <p className="text-sm uppercase tracking-[0.16em] text-slate-500">Phone</p>
                <p className="mt-2 flex items-center gap-2 font-semibold text-slate-800"><FaPhoneAlt className="text-amber-600" /> +91 9353423669</p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="pro-card panel-3d tilt-right rounded-[1.75rem] p-7"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${item.tone}`}>
                  {item.icon}
                </div>
                <h3 className="mt-5 text-2xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;


