import { motion } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaFigma,
  FaLaptopCode,
  FaServer,
  FaTools,
} from "react-icons/fa";

const skillGroups = [
  {
    title: "Programming",
    icon: FaCode,
    accent: "skills-card-purple",
    items: ["Java", "JavaScript", "PHP", "Python"],
  },
  {
    title: "Frontend",
    icon: FaLaptopCode,
    accent: "skills-card-blue",
    items: ["HTML5", "CSS3", "React", "Tailwind CSS", "Bootstrap", "jQuery"],
  },
  {
    title: "Backend",
    icon: FaServer,
    accent: "skills-card-pink",
    items: ["Laravel", "CodeIgniter", "Node.js", "REST API", "GraphQL"],
  },
  {
    title: "Database",
    icon: FaDatabase,
    accent: "skills-card-teal",
    items: ["MySQL"],
  },
  {
    title: "Tools & DevOps",
    icon: FaTools,
    accent: "skills-card-orange",
    items: ["Git", "GitHub", "Postman", "Selenium", "Vite"],
  },
  {
    title: "Design & Commerce",
    icon: FaFigma,
    accent: "skills-card-violet",
    items: ["Figma", "Shopify"],
  },
];

function Skills() {
  return (
    <motion.section
      id="skills"
      className="section-shell section-accent-skills px-5 py-16 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
    >
      <div className="site-shell">
        <div className="section-heading section-heading-split">
          <div>
            <p className="section-eyebrow">Technical Skills</p>
            <h2>Technologies and tools I use to build modern applications.</h2>
          </div>
          <p className="section-support">
            Six compact skill categories designed for quick recruiter scanning across programming, frontend, backend, data, tools, and commerce-oriented work.
          </p>
        </div>

        <div className="skills-six-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                className={`skill-category-card ${group.accent}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <div className="skill-category-icon">
                  <Icon />
                </div>
                <h3>{group.title}</h3>
                <div className="skill-badge-row">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
