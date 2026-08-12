import { motion } from "framer-motion";
import { FaDatabase, FaGlobe, FaLayerGroup, FaMobileAlt, FaPlug, FaReact } from "react-icons/fa";

const buildAreas = [
  {
    title: "Full-Stack Web Applications",
    text: "Building complete web applications with frontend, backend, and database integration.",
    icon: FaLayerGroup,
  },
  {
    title: "React Development",
    text: "Creating responsive interfaces and component-based user experiences with React.",
    icon: FaReact,
  },
  {
    title: "Laravel / PHP Development",
    text: "Developing backend features, workflows, and application logic using PHP frameworks.",
    icon: FaGlobe,
  },
  {
    title: "REST APIs",
    text: "Working with API integration and backend communication for connected applications.",
    icon: FaPlug,
  },
  {
    title: "Database Applications",
    text: "Designing and working with MySQL-based systems for structured application data.",
    icon: FaDatabase,
  },
  {
    title: "Responsive UI Development",
    text: "Building layouts that adapt cleanly across mobile, tablet, and desktop screens.",
    icon: FaMobileAlt,
  },
];

function WhatIBuild() {
  return (
    <motion.section
      id="build"
      className="section-shell section-accent-cyan px-5 py-16 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="site-shell">
        <div className="section-heading section-heading-split">
          <div>
            <p className="section-eyebrow">What I Build</p>
            <h2>Development focus shaped by real projects.</h2>
          </div>
          <p className="section-support">
            These focus areas come directly from the technologies and projects already present in the portfolio.
          </p>
        </div>

        <div className="reference-grid reference-grid-3">
          {buildAreas.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
                className="build-card"
                whileHover={{ y: -6 }}
              >
                <div className="about-icon">
                  <Icon />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

export default WhatIBuild;
