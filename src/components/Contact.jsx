import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane, FaPhone } from "react-icons/fa";

const contactCards = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "meghameghana370@gmail.com",
    tone: "bg-sky-400/10 text-sky-300",
  },
  {
    icon: <FaPhone />,
    title: "Phone",
    value: "+91 9353423669",
    tone: "bg-emerald-400/10 text-emerald-300",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Bangalore, Karnataka",
    tone: "bg-amber-300/10 text-amber-200",
  },
];

function Contact() {
  return (
    <motion.section id="contact" className="section-shell px-6 py-28 lg:px-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="mx-auto max-w-7xl">
        <div className="section-heading">
          <span className="section-eyebrow">Contact</span>
          <h2 className="mt-5">
            Let&apos;s build something <span className="accent-text">useful and well-crafted</span>
          </h2>
          <p>
            If you have an opportunity, an idea, or a project that needs a dependable developer, I&apos;d be happy to connect.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div className="space-y-6" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            {contactCards.map((card) => (
              <div key={card.title} className="pro-card rounded-[1.75rem] p-6">
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

            <div className="flex gap-4 pt-2">
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
            <form className="pro-card rounded-[2rem] p-8 md:p-10">
              <div className="grid gap-5 md:grid-cols-2">
                <input type="text" placeholder="Your Name" className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-slate-200 outline-none transition focus:border-sky-400/40" />
                <input type="email" placeholder="Email Address" className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-slate-200 outline-none transition focus:border-sky-400/40" />
              </div>
              <input type="text" placeholder="Subject" className="mt-5 w-full rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-slate-200 outline-none transition focus:border-sky-400/40" />
              <textarea rows="6" placeholder="Write your message..." className="mt-5 w-full rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-slate-200 outline-none transition focus:border-sky-400/40 resize-none" />
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
