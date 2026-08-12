import { motion } from "framer-motion";
import { FaMedal, FaStar } from "react-icons/fa";
import danceArt from "../assets/images/dance1.jfif";
import danceTeam from "../assets/images/dance2.jpeg";

const milestones = [
  {
    id: "01",
    meta: "Team / SDM Kalavaibhava",
    title: "Active Cultural Performer",
    detail: "Part of the SDM Kalavaibhava team and involved in major cultural performances.",
    align: "left",
  },
  {
    id: "02",
    meta: "Training / Dance Forms",
    title: "Multi-Style Dance Training",
    detail: "Learned Bharatanatyam, Bali, Garba Dandiya, Kathak, and Western dance forms.",
    align: "left",
  },
  {
    id: "03",
    meta: "Level / Recognition",
    title: "State-Level Performer",
    detail: "Recognized as a state-level dance performer through stage participation and competitions.",
    align: "right",
  },
  {
    id: "04",
    meta: "Stage / Events",
    title: "Major Event Performances",
    detail: "Performed at Dharmastala, Dharwad, Puttur, Ujire, and other events, including a one-hour Ramayana drama.",
    align: "right",
  },
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
        <div className="dance-showcase">
          <div className="dance-header">
            <p className="section-eyebrow">Dance / Achievements</p>
            <h2 className="dance-title">
              Built with discipline.
              <br />
              Proven on stage.
            </h2>
          </div>

          <div className="dance-orbit">
            <div className="dance-rings" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <div className="dance-center">
              <div className="dance-center-image">
                <img src={danceArt} alt="Dance performance artwork" className="h-full w-full object-cover" />
              </div>
              <p className="dance-center-note">
                <FaMedal />
                04 creative milestones
              </p>
            </div>

            <div className="dance-grid">
              {milestones.map((item) => (
                <article
                  key={item.id}
                  className={`dance-milestone ${item.align === "right" ? "dance-milestone-right" : ""}`}
                >
                  <p className="dance-meta">
                    <span className="dance-number">{item.id}</span>
                    {item.meta}
                  </p>
                  <h3>{item.title}</h3>
                  <p className="dance-detail">{item.detail}</p>
                  <span className="dance-line" aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>

          <div className="dance-recognition">
            <div className="dance-recognition-copy">
              <p className="dance-meta">Special Recognition</p>
              <h3>Honoured for cultural performance and team contribution.</h3>
              <p className="dance-detail">
                Stage performances across multiple locations helped shape confidence, creativity, and consistency.
              </p>
            </div>
            <div className="dance-recognition-image">
              <img src={danceTeam} alt="SDM Kalavaibhava group performance" className="h-full w-full object-cover" />
            </div>
            <div className="dance-recognition-badge">
              <FaStar />
              Stage Journey
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default DanceSection;
