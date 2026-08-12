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
      className="section-shell px-5 py-16 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="site-shell">
        <div className="contact-reference">
          <div>
            <p className="section-eyebrow">Contact</p>
            <h2 className="contact-reference-title">
              Let&apos;s build something
              <br />
              great together.
            </h2>
            <p className="contact-reference-text">
              I&apos;m open to software developer, frontend, full-stack, React, and Laravel/PHP opportunities, as well as project collaboration.
            </p>
          </div>

          <div className="contact-reference-grid">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="contact-reference-item">
                  <Icon />
                  <div>
                    <p>{item.label}</p>
                    <span>{item.value}</span>
                  </div>
                </div>
              );

              return item.href ? (
                <a key={item.label} href={item.href}>
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>

          <div className="contact-reference-links">
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
