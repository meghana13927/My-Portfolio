import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import projects from "../data/projects";

const caseStudyContent = {
  "My Portfolio": {
    overview: "A personal portfolio website created to present projects, skills, education, and professional background in a responsive format.",
    problem: "Needed a professional online presence that clearly presents development work and technical strengths.",
    contribution: "Built the portfolio interface and structure using React, Vite, Tailwind CSS, and JavaScript.",
    features: ["Responsive layout", "Project showcase", "Skills and experience sections"],
  },
  InfluenceHub: {
    overview: "A full-stack platform for brand and influencer collaboration with campaign-related workflows.",
    problem: "Brands and influencers need a structured space to manage collaboration, campaign flow, and participation.",
    contribution: "Built the platform using Laravel, PHP, Blade, and MySQL.",
    features: ["Campaign workflows", "Brand and influencer collaboration", "Structured platform features"],
  },
  "MIS File Management System": {
    overview: "A file workflow application for approvals, search, attachments, and lifecycle tracking.",
    problem: "Enterprise file handling requires organization, approval flow, and searchable document processes.",
    contribution: "Developed the management system using Laravel, PHP, GraphQL, and MySQL.",
    features: ["Approvals flow", "Search support", "Lifecycle tracking"],
  },
  "School Management System": {
    overview: "A web application for core school administration tasks.",
    problem: "Student records, attendance, fees, and administration need to be handled in one structured system.",
    contribution: "Built the application using Laravel, PHP, MySQL, and Bootstrap.",
    features: ["Student records", "Attendance tracking", "Fee management"],
  },
  "Blood Bank Management System": {
    overview: "A web-based application focused on blood bank operations and donor data management.",
    problem: "Managing donors, requests, and blood inventory manually can be difficult and inefficient.",
    contribution: "Built the application with PHP, MySQL, HTML, and CSS.",
    features: ["Donor records", "Request handling", "Blood inventory management"],
  },
};

function ProjectModal({ project, onClose }) {
  const details = caseStudyContent[project.title];

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="project-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
      <div className="project-modal">
        <button type="button" onClick={onClose} className="project-modal-close" aria-label="Close project details">
          <FaTimes />
        </button>

        <img src={project.image} alt={project.title} className="project-modal-image" />

        <div className="project-modal-body">
          <p className="section-eyebrow">Project Case Study</p>
          <h3 id="project-modal-title" className="mt-3 text-3xl font-bold text-slate-900">
            {project.title}
          </h3>

          <div className="project-modal-grid">
            <div>
              <h4>Overview</h4>
              <p>{details.overview}</p>
            </div>
            <div>
              <h4>Problem</h4>
              <p>{details.problem}</p>
            </div>
            <div>
              <h4>Solution</h4>
              <p>{project.description}</p>
            </div>
            <div>
              <h4>My Contribution</h4>
              <p>{details.contribution}</p>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="project-modal-subtitle">Key Features</h4>
            <div className="reference-tag-row mt-3">
              {details.features.map((feature) => (
                <span key={feature}>{feature}</span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h4 className="project-modal-subtitle">Technologies</h4>
            <div className="reference-tag-row mt-3">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={project.github} target="_blank" rel="noreferrer" className="button-secondary text-sm">
              <FaGithub />
              GitHub
            </a>
            <a href={project.demo} target="_blank" rel="noreferrer" className="button-primary text-sm">
              Live Demo
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [featuredProject, ...otherProjects] = projects;
  const visibleProjects = otherProjects.slice(0, 4);

  return (
    <motion.section
      id="projects"
      className="section-shell px-5 py-16 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="site-shell">
        <div className="section-heading section-heading-split">
          <div>
            <p className="section-eyebrow">Projects</p>
            <h2>Selected builds and product work.</h2>
          </div>
          <p className="section-support">
            Prioritized project presentation with one featured build and supporting case studies.
          </p>
        </div>

        <article className="featured-project">
          <div className="featured-project-image">
            <img src={featuredProject.image} alt={featuredProject.title} className="h-full w-full object-cover" />
          </div>
          <div className="featured-project-copy">
            <p className="section-eyebrow">Featured Project</p>
            <h3>{featuredProject.title}</h3>
            <p>{featuredProject.description}</p>
            <div className="reference-tag-row">
              {featuredProject.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={featuredProject.github} target="_blank" rel="noreferrer" className="button-secondary text-sm">
                <FaGithub />
                GitHub
              </a>
              <a href={featuredProject.demo} target="_blank" rel="noreferrer" className="button-primary text-sm">
                Live Demo
                <FaExternalLinkAlt />
              </a>
              <button type="button" onClick={() => setSelectedProject(featuredProject)} className="button-secondary text-sm">
                View Details
              </button>
            </div>
          </div>
        </article>

        <div className="reference-list mt-10">
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="reference-row"
            >
              <div className="reference-row-meta">
                <span>{String(project.id).padStart(2, "0")}</span>
                <p>{project.type}</p>
              </div>

              <div className="reference-row-image">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
              </div>

              <div className="reference-row-copy">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="reference-tag-row">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className="reference-row-links">
                <button type="button" onClick={() => setSelectedProject(project)} className="button-secondary text-sm">
                  View Details
                </button>
                <a href={project.github} target="_blank" rel="noreferrer" className="button-secondary text-sm">
                  <FaGithub />
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="button-primary text-sm">
                  Live
                  <FaExternalLinkAlt />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {selectedProject ? <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} /> : null}
    </motion.section>
  );
}

export default Projects;
