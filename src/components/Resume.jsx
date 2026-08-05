import resume from "../assets/resume/resume1.pdf";
import { motion } from "framer-motion";
import { FaDownload, FaFileAlt, FaLaptopCode, FaServer } from "react-icons/fa";

const highlights = [
  "Full-stack development with React, Laravel, Java, MySQL, REST APIs, and GraphQL",
  "Experience building scalable backend logic and business-focused web features",
  "Strong academic performance with MCA background and practical delivery mindset",
];

function Resume() {
  return (
    <motion.section id="resume" className="section-shell px-6 py-28 lg:px-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="mx-auto max-w-6xl">
        <div className="pro-card rounded-[2.25rem] p-8 md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <span className="section-eyebrow">Resume</span>
              <h2 className="mt-5 text-4xl font-extrabold leading-tight text-slate-50 md:text-5xl">
                A concise view of my <span className="accent-text">experience, skills, and impact</span>
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                If you want the full professional summary in one place, you can download my resume below. It covers my technical strengths, education, and the work I&apos;ve done across web development projects.
              </p>

              <div className="mt-8 space-y-4">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-4 rounded-2xl border border-slate-800/80 bg-slate-950/50 p-4">
                    <FaFileAlt className="mt-1 text-sky-300" />
                    <p className="text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/55 p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-400/10 text-2xl text-sky-300">
                <FaServer />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-slate-50">Professional Snapshot</h3>
              <p className="mt-4 leading-7 text-slate-400">
                Backend-focused, frontend-capable, and comfortable collaborating on modern product work that values clean structure and dependable delivery.
              </p>
              <div className="mt-6 flex items-center gap-3 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 text-amber-100">
                <FaLaptopCode />
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
