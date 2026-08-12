import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import resume from "../assets/resume/resume1.pdf";

const contactItems = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "meghameghana370@gmail.com",
    href: "mailto:meghameghana370@gmail.com",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+91 9353423669",
    href: "tel:+919353423669",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Bangalore, Karnataka",
  },
];

function Contact() {
  return (
    <motion.section
      id="contact"
      className="section-shell px-5 py-18 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="site-shell">
        <div className="section-heading">
          <p className="section-eyebrow">Contact</p>
          <h2>Let&apos;s connect.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            For jobs, collaborations, or project discussions, you can reach me here.
          </p>
        </div>

        <div className="soft-card">
          <div className="grid gap-4 md:grid-cols-3">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="contact-tile">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-rose-500">
                    <Icon />
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
                  <p className="mt-2 text-sm font-medium text-slate-700">{item.value}</p>
                </div>
              );

              return item.href ? (
                <a key={item.label} href={item.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://www.linkedin.com/in/megh13a2/" target="_blank" rel="noreferrer" className="button-secondary text-sm">
              <FaLinkedin />
              LinkedIn
            </a>
            <a href="https://github.com/meghana13927" target="_blank" rel="noreferrer" className="button-secondary text-sm">
              <FaGithub />
              GitHub
            </a>
            <a href={resume} download className="button-primary text-sm">
              Resume
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
