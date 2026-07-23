import resume from "../assets/resume/resume1.pdf";
import { FaDownload, FaFilePdf } from "react-icons/fa";

function Resume() {
  return (
    <section
      id="resume"
      className="bg-gray-900 py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4">
          Resume
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Download my latest resume.
        </p>

        <div className="bg-gray-950 rounded-3xl border border-purple-600 p-12 text-center hover:shadow-2xl hover:shadow-purple-600/30 duration-300">

          <FaFilePdf className="text-red-500 text-8xl mx-auto mb-8" />

          <h3 className="text-3xl font-bold">
            Software Developer Resume
          </h3>

          <p className="text-gray-400 mt-6">
            Click below to download my resume.
          </p>

          <a
            href={resume}
            download
            className="inline-flex items-center gap-3 mt-10 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl"
          >
            <FaDownload />
            Download Resume
          </a>

        </div>

      </div>
    </section>
  );
}

export default Resume;