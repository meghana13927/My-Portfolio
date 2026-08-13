import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaRegArrowAltCircleRight,
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    country: "",
    message: "",
  });

  const [formMessage, setFormMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, phone, interest, country, message } = formData;

    if (!name || !email || !phone || !interest || !country || !message) {
      setFormMessage("Please fill in all required fields before submitting.");
      return;
    }

    const subject = encodeURIComponent(`${interest} enquiry from ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Interested In: ${interest}`,
        `Country: ${country}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    );

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=meghameghana370@gmail.com&su=${subject}&body=${body}`,
      "_blank",
      "noopener,noreferrer",
    );

    setFormMessage("Your enquiry draft has been opened in Gmail.");
  };

  return (
    <motion.section
      id="contact"
      className="section-shell section-accent-contact px-5 py-16 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="site-shell">
        <div className="contact-split">
          <motion.div
            className="contact-split-copy"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="section-eyebrow">Contact / Start</p>
            <h2 className="contact-split-title">
              Let&apos;s talk
              <br />
              about
              <br />
              your next
              <br />
              project.
            </h2>
            <p className="contact-split-text">
              Have a software role, custom frontend, or opportunity in mind? Share the details and I&apos;ll get back to you.
            </p>

            <div className="contact-split-details">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <motion.div
                    className="contact-split-item"
                    initial={{ opacity: 0, y: 16 }}
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
                    target={item.download ? undefined : item.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={item.download ? undefined : item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                    download={item.download}
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
            <form className="contact-form-grid" onSubmit={handleSubmit}>
              <label className="contact-field">
                <span>Your name *</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  aria-label="Your name"
                />
              </label>

              <label className="contact-field">
                <span>Email *</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  aria-label="Email"
                />
              </label>

              <label className="contact-field">
                <span>Phone *</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  aria-label="Phone number"
                />
              </label>

              <label className="contact-field">
                <span>I&apos;m interested in *</span>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  aria-label="Interest area"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="software-developer-role">Software Developer Role</option>
                  <option value="shopify-developer-role">Shopify Developer Role</option>
                  <option value="frontend-project">Frontend Project</option>
                  <option value="full-stack-project">Full-Stack Project</option>
                  <option value="react-work">React Development</option>
                  <option value="laravel-php-work">Laravel / PHP Development</option>
                </select>
              </label>

              <label className="contact-field contact-field-full">
                <span>Country *</span>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Enter your country"
                  aria-label="Country"
                />
              </label>

              <label className="contact-field contact-field-full">
                <span>Your message *</span>
                <textarea
                  rows="7"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, role, or idea..."
                  aria-label="Your message"
                />
              </label>

              <div className="contact-form-footer">
                <button type="submit" className="contact-submit">
                  <span>Submit enquiry</span>
                  <span className="contact-submit-icon">
                    <FaRegArrowAltCircleRight />
                  </span>
                </button>
                <p>{formMessage || "Your enquiry opens as a Gmail draft in the browser."}</p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
