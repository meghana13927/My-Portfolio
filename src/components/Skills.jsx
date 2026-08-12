import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import skills from "../data/skills";

const filterOrder = [
  { id: "all", label: "All" },
  { id: "languages", label: "Languages" },
  { id: "frameworks", label: "Frameworks" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "design", label: "Design" },
  { id: "tools", label: "Tools" },
];

const groupMap = {
  HTML5: "all",
  CSS3: "all",
  React: "frameworks",
  "Tailwind CSS": "frameworks",
  Bootstrap: "frameworks",
  jQuery: "frameworks",
  Laravel: "frameworks",
  CodeIgniter: "frameworks",
  "Node.js": "frameworks",
  "REST API": "tools",
  GraphQL: "tools",
  Shopify: "ecommerce",
  MySQL: "languages",
  JavaScript: "languages",
  PHP: "languages",
  Java: "languages",
  Python: "languages",
  Git: "tools",
  GitHub: "tools",
  Postman: "tools",
  Figma: "design",
  Selenium: "tools",
  Vite: "tools",
};

const detailMap = {
  HTML5: "Markup",
  CSS3: "Styling",
  React: "UI Library",
  "Tailwind CSS": "CSS Framework",
  Bootstrap: "UI Framework",
  jQuery: "Frontend Library",
  Laravel: "PHP Framework",
  CodeIgniter: "Backend Framework",
  "Node.js": "Runtime",
  "REST API": "API Integration",
  GraphQL: "API Query",
  Shopify: "E-Commerce",
  MySQL: "Database",
  JavaScript: "Language",
  PHP: "Language",
  Java: "Programming",
  Python: "Programming",
  Git: "Version Control",
  GitHub: "Code Hosting",
  Postman: "API Tool",
  Figma: "Design Tool",
  Selenium: "Testing Tool",
  Vite: "Build Tool",
};

function Skills() {
  const [activeFilter, setActiveFilter] = useState("all");

  const allSkills = useMemo(
    () =>
      skills.flatMap((category) =>
        category.items.map((item) => ({
          ...item,
          category: groupMap[item.name] ?? "all",
          detail: detailMap[item.name] ?? category.title,
        })),
      ),
    [],
  );

  const filteredSkills = useMemo(() => {
    if (activeFilter === "all") {
      return allSkills;
    }

    return allSkills.filter((skill) => skill.category === activeFilter);
  }, [activeFilter, allSkills]);

  const activeIndex = filterOrder.findIndex((item) => item.id === activeFilter) + 1;

  return (
    <motion.section
      id="skills"
      className="section-shell px-5 py-16 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="site-shell">
        <div className="skills-filter-shell">
          <p className="skills-filter-label">Filter By Discipline</p>

          <div className="skills-filter-tabs" role="tablist" aria-label="Skill discipline filters">
            {filterOrder.map((filter, index) => (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter.id}
                className={`skills-filter-tab ${activeFilter === filter.id ? "skills-filter-tab-active" : ""}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{filter.label}</strong>
              </button>
            ))}
          </div>
        </div>

        <div className="skills-reference-header">
          <div>
            <p className="skills-counter">
              {String(activeIndex).padStart(2, "0")} / {String(filterOrder.length).padStart(2, "0")}
            </p>
            <h2 className="skills-reference-title">
              {activeFilter === "all"
                ? "All Skills"
                : filterOrder.find((item) => item.id === activeFilter)?.label}
            </h2>
          </div>
          <p className="skills-reference-copy">
            The complete technology stack I use across frontend engineering, backend development, design support, testing, and delivery.
          </p>
        </div>

        <div className="skills-card-grid">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.article
                key={`${skill.name}-${activeFilter}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, delay: index * 0.02 }}
                className="skills-reference-card"
              >
                <span className="skills-reference-card-count">{String(index + 1).padStart(2, "0")}</span>
                <div className="skills-reference-card-icon">
                  <Icon className={`text-4xl ${skill.color}`} />
                </div>
                <p className="skills-reference-card-detail">{skill.detail}</p>
                <h3>{skill.name}</h3>
              </motion.article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
