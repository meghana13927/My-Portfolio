import resume from "../assets/resume/resume1.pdf";
import { motion } from "framer-motion";
import { FaDownload, FaFileAlt, FaLaptopCode, FaServer } from "react-icons/fa";

const highlights = [
  "Full-stack development with React, Laravel, Java, MySQL, REST APIs, and GraphQL",
  "Experience building scalable backend logic and business-focused web features",
  "Creative instincts in UI, motion, and product presentation",
];

function Resume() {
  return (
    <motion.section id="resume" className="section-shell px-6 py-28 lg:px-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="mx-auto max-w-6xl">
        <div className="pro-card panel-3d tilt-flat rounded-[2.4rem] p-8 md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.7fr] [perspective:1800px]">
            <div>
              <span className="section-eyebrow">Resume</span>
              <h2 className="mt-5 text-4xl font-extrabold leading-tight text-slate-50 md:text-5xl">
                A concise view of my <span className="accent-text">strengths, stack, and delivery style</span>
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Download my resume for a clean professional summary of my technical background, work experience, and the way I contribute to product teams.
              </p>

              <div className="mt-8 space-y-4">
                {highlights.map((item) => (
                  <div key={item} className="metric-badge flex items-start gap-4 rounded-2xl p-4">
                    <FaFileAlt className="mt-1 text-cyan-300" />
                    <p className="text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pro-card panel-3d tilt-right rounded-[2.2rem] p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-400/12 text-2xl text-teal-200">
                <FaServer />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-slate-50">Professional Snapshot</h3>
              <p className="mt-4 leading-7 text-slate-300">
                Full-stack developer with backend strength, UI awareness, and a preference for products that feel modern, stable, and thoughtfully built.
              </p>
              <div className="glass-chip mt-6 flex items-center gap-3 rounded-2xl p-4 text-slate-200">
                <FaLaptopCode className="text-cyan-300" />
                Open to full-stack and backend engineering roles.
              </div>
              <a href={resume} download className="button-primary mt-8 w-full">
                <FaDownload />
                Download Resume PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Resume;
