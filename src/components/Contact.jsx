import { motion } from "framer-motion";
import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import resume from "../assets/resume/resume1.pdf";

const links = [
  {
    label: "Email",
    value: "meghameghana370@gmail.com",
    href: "mailto:meghameghana370@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "GitHub",
    value: "github.com/meghana13927",
    href: "https://github.com/meghana13927",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/megh13a2",
    href: "https://www.linkedin.com/in/megh13a2/",
    icon: FaLinkedin,
  },
  {
    label: "Resume",
    value: "Download Resume",
    href: resume,
    download: true,
    icon: FaFileAlt,
  },
];

function Contact() {
  return (
    <motion.section
      id="contact"
      className="section-shell section-accent-contact px-5 py-16 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="site-shell">
        <div className="contact-light-shell">
          <motion.div
            className="contact-light-copy"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="section-eyebrow">Contact</p>
            <h2>Let&apos;s Build Something Great Together</h2>
            <p className="contact-light-text">
              Open to software development roles, frontend opportunities, Laravel or PHP work, and practical product-focused web projects.
            </p>

            <a href="mailto:meghameghana370@gmail.com" className="button-primary contact-main-button">
              <FaEnvelope />
              Get In Touch
            </a>
          </motion.div>

          <div className="contact-link-grid">
            {links.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.download ? undefined : item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={item.download ? undefined : item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  download={item.download}
                  className="contact-link-card"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <div className="contact-link-icon">
                    <Icon />
                  </div>
                  <div>
                    <p>{item.label}</p>
                    <span>{item.value}</span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
