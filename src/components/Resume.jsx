import resume from "../assets/resume/resume1.pdf";
import { motion } from "framer-motion";
import { FaDownload, FaFileAlt, FaLaptopCode, FaServer } from "react-icons/fa";

const highlights = [
  "Full-stack development with React, Laravel, Java, MySQL, REST APIs, and GraphQL",
  "Experience building scalable backend logic and business-focused web features",
  "Strong academic background with practical delivery mindset and creative design interest",
];

function Resume() {
  return (
    <motion.section id="resume" className="section-shell px-6 py-28 lg:px-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="mx-auto max-w-6xl">
        <div className="pro-card panel-3d tilt-flat rounded-[2.25rem] p-8 md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.7fr] [perspective:1600px]">
            <div>
              <span className="section-eyebrow">Resume</span>
              <h2 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
                A quick summary of my <span className="accent-text">skills, strengths, and work</span>
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                You can download my resume for a concise overview of my technical strengths, academic background, and project experience.
              </p>

              <div className="mt-8 space-y-4">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-4 rounded-2xl bg-gradient-to-r from-teal-50 to-sky-50 p-4">
                    <FaFileAlt className="mt-1 text-teal-600" />
                    <p className="text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-gradient-to-br from-sky-50 via-white to-teal-50 p-8 shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-2xl text-teal-700">
                <FaServer />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-slate-900">Professional Snapshot</h3>
              <p className="mt-4 leading-7 text-slate-600">
                Full-stack developer with strong backend interest, good presentation sense, and a focus on clear, dependable product work.
              </p>
              <div className="mt-6 flex items-center gap-3 rounded-2xl bg-white p-4 text-slate-700 shadow-sm">
                <FaLaptopCode className="text-sky-500" />
                Open to roles involving full-stack and backend engineering.
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

