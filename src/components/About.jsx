import { motion } from "framer-motion";
import { FaBriefcase, FaEnvelope, FaLaptopCode, FaMapMarkerAlt, FaPhoneAlt, FaUserGraduate } from "react-icons/fa";

const highlights = [
  {
    icon: <FaUserGraduate />,
    title: "Academic Depth",
    text: "MCA graduate with a strong engineering foundation and disciplined software thinking.",
    tone: "bg-cyan-400/12 text-cyan-200",
  },
  {
    icon: <FaBriefcase />,
    title: "Industry Work",
    text: "Professional experience across backend, testing, integrations, and product-focused delivery.",
    tone: "bg-teal-400/12 text-teal-200",
  },
  {
    icon: <FaLaptopCode />,
    title: "Tech Lens",
    text: "Interested in products that blend performance, clarity, and strong interface craft.",
    tone: "bg-sky-400/12 text-sky-200",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Based In",
    text: "Bangalore, with a focus on opportunities where product quality and ownership matter.",
    tone: "bg-amber-300/12 text-amber-100",
  },
];

function About() {
  return (
    <motion.section id="about" className="section-shell px-6 py-28 lg:px-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="mx-auto max-w-7xl">
        <div className="section-heading">
          <span className="section-eyebrow">About</span>
          <h2 className="mt-5">
            A developer who works at the <span className="accent-text">intersection of logic and experience</span>
          </h2>
          <p>
            I care about more than shipping features. I care about how products are structured, how they feel, and whether people trust them when they use them.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] [perspective:1800px]">
          <motion.div className="pro-card panel-3d tilt-flat rounded-[2.2rem] p-8 md:p-10" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="glass-chip inline-flex rounded-full px-4 py-2 text-sm font-semibold text-cyan-100">
              Full Stack Developer from Bangalore
            </div>
            <h3 className="mt-6 text-3xl font-bold text-slate-50">What I Bring</h3>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              I am a detail-oriented full-stack developer with experience across React, Laravel, PHP, Java, MySQL, REST APIs, GraphQL, and Shopify development. I enjoy building products that are reliable under the hood and refined on the surface.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Alongside development, I bring creative instincts from UI/UX thinking, testing discipline, and an eye for polish that helps products feel intentional instead of assembled.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="metric-badge rounded-2xl p-5">
                <p className="text-sm uppercase tracking-[0.16em] text-slate-500">Name</p>
                <p className="mt-2 font-semibold text-slate-100">Meghana H M</p>
              </div>
              <div className="metric-badge rounded-2xl p-5">
                <p className="text-sm uppercase tracking-[0.16em] text-slate-500">Primary Role</p>
                <p className="mt-2 font-semibold text-cyan-100">Full Stack Developer</p>
              </div>
              <div className="metric-badge rounded-2xl p-5">
                <p className="text-sm uppercase tracking-[0.16em] text-slate-500">Email</p>
                <p className="mt-2 flex items-center gap-2 font-semibold text-slate-100"><FaEnvelope className="text-cyan-300" /> meghameghana370@gmail.com</p>
              </div>
              <div className="metric-badge rounded-2xl p-5">
                <p className="text-sm uppercase tracking-[0.16em] text-slate-500">Phone</p>
                <p className="mt-2 flex items-center gap-2 font-semibold text-slate-100"><FaPhoneAlt className="text-teal-300" /> +91 9353423669</p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 section-float">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="pro-card panel-3d tilt-right rounded-[1.9rem] p-7"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${item.tone}`}>
                  {item.icon}
                </div>
                <h3 className="mt-5 text-2xl font-bold text-slate-50">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
