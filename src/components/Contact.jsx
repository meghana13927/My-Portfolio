import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPhone, FaRegArrowAltCircleRight } from "react-icons/fa";
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
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Bangalore, Karnataka, India",
  },
  {
    icon: FaPhone,
    label: "Resume",
    value: "Download my CV",
    href: resume,
    download: true,
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
        <div className="contact-split">
          <div className="contact-split-copy">
            <p className="section-eyebrow">Contact</p>
            <h2 className="contact-split-title">
              Let&apos;s talk
              <br />
              about your next
              <br />
              project.
            </h2>
            <p className="contact-split-text">
              Have a software role, custom frontend, backend requirement, or full-stack opportunity in mind? Share the details and I&apos;ll get back to you.
            </p>

            <div className="contact-split-details">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="contact-split-item">
                    <div className="contact-split-icon">
                      <Icon />
                    </div>
                    <div>
                      <p>{item.label}</p>
                      <span>{item.value}</span>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.download ? undefined : "_blank"}
                    rel={item.download ? undefined : "noreferrer"}
                    download={item.download}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </div>

          <div className="contact-form-shell">
            <form className="contact-form-grid">
              <label className="contact-field">
                <span>Your name *</span>
                <input type="text" placeholder="Enter your name" />
              </label>

              <label className="contact-field">
                <span>Email *</span>
                <input type="email" placeholder="you@company.com" />
              </label>

              <label className="contact-field">
                <span>Phone *</span>
                <input type="tel" placeholder="Enter phone number" />
              </label>

              <label className="contact-field">
                <span>I&apos;m interested in *</span>
                <select defaultValue="">
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
                <span>Country *</span>
                <input type="text" placeholder="Enter your country" />
              </label>

              <label className="contact-field contact-field-full">
                <span>Your message *</span>
                <textarea rows="7" placeholder="Tell me about your project, role, or idea..." />
              </label>

              <div className="contact-form-footer">
                <button type="submit" className="contact-submit">
                  <span>Submit enquiry</span>
                  <span className="contact-submit-icon">
                    <FaRegArrowAltCircleRight />
                  </span>
                </button>
                <p>Your enquiry is sent directly to my inbox. No email application opens.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
