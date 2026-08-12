import { motion } from "framer-motion";
import danceArt from "../assets/images/image2.jpeg";
import danceTeam from "../assets/images/image3.jpeg";

const dancePoints = [
  "Member of the SDM Kalavaibhava team.",
  "Trained in Bharatanatyam, Bali, Garba Dandiya, Kathak, and Western dance forms.",
  "Recognized as a state-level dance performer.",
  "Performed at events in Dharmastala, Dharwad, Puttur, Ujire, and other locations.",
  "Took part in a one-hour continuous Ramayana stage performance.",
];

function DanceSection() {
  return (
    <motion.section
      id="dance"
      className="section-shell px-5 py-18 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="site-shell">
        <div className="section-heading">
          <p className="section-eyebrow">Dance Journey</p>
          <h2>Performing is a big part of my creative life.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            Dance has shaped my confidence, stage presence, and creative expression beyond academics and work.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="soft-card overflow-hidden p-0">
            <img src={danceArt} alt="Dance artwork" className="h-full min-h-[280px] w-full object-cover" />
          </div>

          <div className="dance-copy-card soft-card">
            <ul className="space-y-4 text-base leading-7 text-slate-700">
              {dancePoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="soft-card mt-6 overflow-hidden p-0">
          <img src={danceTeam} alt="SDM Kalavaibhava performance" className="h-full max-h-[420px] w-full object-cover" />
        </div>
      </div>
    </motion.section>
  );
}

export default DanceSection;
