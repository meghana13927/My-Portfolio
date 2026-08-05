import { motion } from "framer-motion";
import { FaBriefcase, FaEnvelope, FaLaptopCode, FaMapMarkerAlt, FaPhoneAlt, FaUserGraduate } from "react-icons/fa";

const highlights = [
  {
    icon: <FaUserGraduate />,
    title: "Education",
    text: "MCA graduate with a strong academic foundation and a consistent focus on software engineering quality.",
  },
  {
    icon: <FaBriefcase />,
    title: "Experience",
    text: "Hands-on backend and full-stack work across Shopify, PHP, React, GraphQL, REST APIs, and scalable delivery.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Tech Focus",
    text: "Comfortable across frontend, backend, databases, and deployment-oriented application workflows.",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    text: "Based in Bangalore and open to collaborative roles where product quality and growth both matter.",
  },
];

function About() {
  return (
    <motion.section id="about" className="section-shell px-6 py-28 lg:px-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="mx-auto max-w-7xl">
        <div className="section-heading">
          <span className="section-eyebrow">About</span>
          <h2 className="mt-5">
            A developer who cares about <span className="accent-text">clarity, reliability, and craft</span>
          </h2>
          <p>
            I build maintainable applications with equal attention to backend stability and frontend presentation, aiming for experiences that feel thoughtful rather than just functional.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div className="pro-card rounded-[2rem] p-8 md:p-10" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-3xl font-bold text-slate-50">Who I Am</h3>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              I am a detail-oriented full-stack web developer with experience in React, Laravel, PHP, Java, MySQL, REST APIs, GraphQL, and Shopify development. Beyond implementation, I also bring experience with automation testing, UI/UX thinking, and communicating ideas clearly through design and content.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              My approach is simple: understand the problem deeply, build with clean structure, and deliver interfaces that inspire trust.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-800/80 bg-slate-950/55 p-5">
                <p className="text-sm uppercase tracking-[0.16em] text-slate-500">Name</p>
                <p className="mt-2 font-semibold text-slate-100">Meghana H M</p>
              </div>
              <div className="rounded-2xl border border-slate-800/80 bg-slate-950/55 p-5">
                <p className="text-sm uppercase tracking-[0.16em] text-slate-500">Primary Role</p>
                <p className="mt-2 font-semibold text-emerald-300">Full-Stack Developer</p>
              </div>
              <div className="rounded-2xl border border-slate-800/80 bg-slate-950/55 p-5">
                <p className="text-sm uppercase tracking-[0.16em] text-slate-500">Email</p>
                <p className="mt-2 flex items-center gap-2 font-semibold text-slate-100"><FaEnvelope className="text-sky-300" /> meghameghana370@gmail.com</p>
              </div>
              <div className="rounded-2xl border border-slate-800/80 bg-slate-950/55 p-5">
                <p className="text-sm uppercase tracking-[0.16em] text-slate-500">Phone</p>
                <p className="mt-2 flex items-center gap-2 font-semibold text-slate-100"><FaPhoneAlt className="text-amber-300" /> +91 9353423669</p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="pro-card rounded-[1.75rem] p-7"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-400/10 text-2xl text-sky-300">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-2xl font-bold text-slate-50">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
