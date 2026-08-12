import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
} from "react-icons/fa";
import resume from "../assets/resume/resume1.pdf";

const contactItems = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "meghameghana370@gmail.com",
    href: "mailto:meghameghana370@gmail.com",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/megh13a2",
    href: "https://www.linkedin.com/in/megh13a2/",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/meghana13927",
    href: "https://github.com/meghana13927",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Bangalore, Karnataka, India",
  },
];

function Contact() {
  return (
    <motion.section
      id="contact"
      className="section-shell section-accent-pink px-5 py-16 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="site-shell">
        <div className="contact-cta-card">
          <div className="contact-ambient contact-ambient-one" aria-hidden="true" />
          <div className="contact-ambient contact-ambient-two" aria-hidden="true" />

          <div className="contact-split">
            <motion.div
              className="contact-split-copy"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="section-eyebrow">Contact</p>
              <h2 className="contact-split-title">Let's Build Something Great Together</h2>
              <p className="contact-split-text">
                Open to software development roles, frontend work, Laravel or PHP opportunities, and product-focused web projects.
              </p>

              <div className="contact-action-row">
                <a href="mailto:meghameghana370@gmail.com" className="button-primary">
                  <FaEnvelope />
                  Email Me
                </a>
                <a href={resume} download className="button-secondary">
                  <FaPhoneAlt />
                  Download Resume
                </a>
              </div>

              <div className="contact-split-details">
                {contactItems.map((item, index) => {
                  const Icon = item.icon;
                  const content = (
                    <motion.div
                      className="contact-split-item"
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="contact-split-icon">
                        <Icon />
                      </div>
                      <div>
                        <p>{item.label}</p>
                        <span>{item.value}</span>
                      </div>
                    </motion.div>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              className="contact-form-shell"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="contact-form-intro">
                <p className="section-kicker">Quick Message</p>
                <h3>Share your role, project, or idea.</h3>
              </div>

              <form className="contact-form-grid" onSubmit={(event) => event.preventDefault()}>
                <label className="contact-field">
                  <span>Your name *</span>
                  <input type="text" placeholder="Enter your name" aria-label="Your name" />
                </label>

                <label className="contact-field">
                  <span>Email *</span>
                  <input type="email" placeholder="you@company.com" aria-label="Email" />
                </label>

                <label className="contact-field">
                  <span>Phone</span>
                  <input type="tel" placeholder="Enter phone number" aria-label="Phone number" />
                </label>

                <label className="contact-field">
                  <span>I'm interested in *</span>
                  <select defaultValue="" aria-label="Interest area">
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="software-developer-role">Software Developer Role</option>
                    <option value="frontend-project">Frontend Project</option>
                    <option value="full-stack-project">Full-Stack Project</option>
                    <option value="react-work">React Development</option>
                    <option value="laravel-php-work">Laravel / PHP Development</option>
                  </select>
                </label>

                <label className="contact-field contact-field-full">
                  <span>Your message *</span>
                  <textarea rows="7" placeholder="Tell me about your project, role, or idea..." aria-label="Your message" />
                </label>

                <div className="contact-form-footer">
                  <button type="button" className="contact-submit">
                    <span>Message via email</span>
                    <span className="contact-submit-icon">
                      <FaPaperPlane />
                    </span>
                  </button>
                  <p>Use the direct email, LinkedIn, GitHub, or resume links here while form integration is pending.</p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
