import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane, FaPhone } from "react-icons/fa";

const contactCards = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "meghameghana370@gmail.com",
    tone: "bg-cyan-400/12 text-cyan-200",
  },
  {
    icon: <FaPhone />,
    title: "Phone",
    value: "+91 9353423669",
    tone: "bg-teal-400/12 text-teal-200",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Bangalore, Karnataka",
    tone: "bg-sky-400/12 text-sky-200",
  },
];

function Contact() {
  return (
    <motion.section id="contact" className="section-shell px-6 py-28 lg:px-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="mx-auto max-w-7xl">
        <div className="section-heading">
          <span className="section-eyebrow">Contact</span>
          <h2 className="mt-5">
            Let&apos;s create something <span className="accent-text">clean, modern, and memorable</span>
          </h2>
          <p>
            If you have a role, project, or collaboration idea that fits my background, I&apos;d be happy to connect and explore it with you.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] [perspective:1800px]">
          <motion.div className="space-y-6 section-float" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            {contactCards.map((card) => (
              <div key={card.title} className="pro-card panel-3d tilt-flat rounded-[1.85rem] p-6">
                <div className="flex items-center gap-5">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl text-xl ${card.tone}`}>
                    {card.icon}
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.16em] text-slate-500">{card.title}</p>
                    <p className="mt-2 text-lg font-semibold text-slate-100">{card.value}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="https://github.com/meghana13927" target="_blank" rel="noreferrer" className="button-secondary text-sm">
                <FaGithub />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/megh13a2/" target="_blank" rel="noreferrer" className="button-secondary text-sm">
                <FaLinkedin />
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <form className="pro-card panel-3d tilt-right rounded-[2.2rem] p-8 md:p-10">
              <div className="grid gap-5 md:grid-cols-2">
                <input type="text" placeholder="Your Name" className="glass-chip rounded-2xl p-4 text-slate-200 outline-none transition focus:border-cyan-300/30" />
                <input type="email" placeholder="Email Address" className="glass-chip rounded-2xl p-4 text-slate-200 outline-none transition focus:border-cyan-300/30" />
              </div>
              <input type="text" placeholder="Subject" className="glass-chip mt-5 w-full rounded-2xl p-4 text-slate-200 outline-none transition focus:border-cyan-300/30" />
              <textarea rows="6" placeholder="Write your message..." className="glass-chip mt-5 w-full rounded-2xl p-4 text-slate-200 outline-none transition focus:border-cyan-300/30 resize-none" />
              <button type="submit" className="button-primary mt-6 w-full">
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
