import { motion } from "framer-motion";
import { FaCodeBranch, FaLaptopCode, FaLayerGroup, FaUserTie } from "react-icons/fa";

const points = [
  {
    icon: FaLaptopCode,
    title: "Developer Background",
    text: "I work across frontend, backend, and testing with practical experience in React, PHP, Laravel, Java, JavaScript, Shopify, Figma, and MySQL.",
  },
  {
    icon: FaLayerGroup,
    title: "What I Build",
    text: "I build full-stack web applications, responsive interfaces, backend workflows, and API-driven product features.",
  },
  {
    icon: FaCodeBranch,
    title: "Technical Interests",
    text: "I am especially interested in clean UI, scalable backend logic, database-driven applications, and reliable integrations.",
  },
  {
    icon: FaUserTie,
    title: "Roles I’m Targeting",
    text: "I am looking for Software Developer, Frontend Developer, Full-Stack Developer, React Developer, and Laravel/PHP Developer roles.",
  },
];

function About() {
  return (
    <motion.section
      id="about"
      className="section-shell px-5 py-16 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="site-shell">
        <div className="section-heading section-heading-split">
          <div>
            <p className="section-eyebrow">About</p>
            <h2>Developer profile with product and engineering focus.</h2>
          </div>
          <p className="section-support">
            Full-stack developer from Bangalore with experience in application development, testing, backend-focused delivery, Shopify work, and design collaboration with Figma.
          </p>
        </div>

        <div className="reference-grid">
          <article className="about-lead">
            <p>
              I am a software developer who enjoys building practical applications that are clean on the surface and reliable under the hood. My work combines frontend development, backend logic, API integration, database-driven features, and e-commerce-oriented workflows.
            </p>
            <p>
              With experience across development and QA, I bring attention to both functionality and usability while working on business-focused web applications using tools such as Java, Shopify, and Figma alongside my core development stack.
            </p>
          </article>

          <div className="reference-grid">
            {points.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="reference-panel"
                >
                  <div className="about-icon">
                    <Icon />
                  </div>
                  <h3 className="reference-panel-title mt-4">{item.title}</h3>
                  <p className="reference-panel-text">{item.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
