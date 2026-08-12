import { motion } from "framer-motion";
import { FaBookOpen, FaBrush, FaMusic, FaPlaneDeparture, FaStar, FaVideo } from "react-icons/fa";
import danceArt from "../assets/images/dance1.jfif";
import danceTeam from "../assets/images/dance2.jpeg";

const danceHighlights = [
  {
    id: "01",
    label: "Dance & Cultural Activities",
    title: "Part of SDM Kalavaibhava cultural performances.",
    text: "Active participation in team performances and cultural stage presentations.",
  },
  {
    id: "02",
    label: "Training",
    title: "Multi-style dance training across classical and modern forms.",
    text: "Learned Bharatanatyam, Bali, Garba Dandiya, Kathak, and Western dance forms.",
  },
  {
    id: "03",
    label: "Recognition",
    title: "State-level performer with strong stage experience.",
    text: "Performed across Dharmastala, Dharwad, Puttur, Ujire, and other events.",
  },
  {
    id: "04",
    label: "Performance",
    title: "Featured in an extended Ramayana stage drama.",
    text: "Contributed to a continuous one-hour Ramayana performance presentation.",
  },
];

const personalCards = [
  {
    title: "Creative Interests",
    text: "Video editing, UI/UX exploration, and visual storytelling in free time.",
    icon: FaVideo,
  },
  {
    title: "Drawing & Painting",
    text: "Enjoy sketching and painting as a steady creative practice outside software.",
    icon: FaBrush,
  },
  {
    title: "Travel & Reading",
    text: "Exploring new places and reading to keep learning and perspectives fresh.",
    icon: FaPlaneDeparture,
  },
  {
    title: "Stage Confidence",
    text: "Cultural performance has strengthened presence, discipline, and team coordination.",
    icon: FaMusic,
  },
  {
    title: "Continuous Curiosity",
    text: "A mix of creative and technical interests keeps my learning process active.",
    icon: FaBookOpen,
  },
  {
    title: "Team Contribution",
    text: "Comfortable contributing in team-based events with consistency and preparation.",
    icon: FaStar,
  },
];

function BeyondCode() {
  return (
    <motion.section
      id="beyond-code"
      className="section-shell section-accent-pink px-5 py-16 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="site-shell">
        <div className="section-heading section-heading-split">
          <div>
            <p className="section-eyebrow">Beyond Code</p>
            <h2>Interests, activities and experiences beyond software development.</h2>
          </div>
          <p className="section-support">
            A snapshot of genuine creative interests, cultural participation, and experiences that shape how I collaborate and perform.
          </p>
        </div>

        <div className="beyond-feature">
          <motion.div
            className="beyond-feature-copy"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.55 }}
          >
            <p className="section-kicker">Dance & Cultural Activities</p>
            <h3>Creative discipline developed through stage performance.</h3>
            <p>
              Dance has been an important part of my journey outside engineering. It reflects consistency, team coordination, expression, and the confidence to perform under pressure.
            </p>

            <div className="beyond-feature-list">
              {danceHighlights.map((item, index) => (
                <motion.article
                  key={item.id}
                  className="beyond-point"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <span>{item.id}</span>
                  <div>
                    <p>{item.label}</p>
                    <h4>{item.title}</h4>
                    <small>{item.text}</small>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="beyond-feature-visual"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <div className="beyond-image-stack">
              <div className="beyond-image-card beyond-image-primary">
                <img src={danceArt} alt="Artistic dance visual representing stage performance" loading="lazy" />
              </div>
              <div className="beyond-image-card beyond-image-secondary">
                <img src={danceTeam} alt="SDM Kalavaibhava team performance on stage" loading="lazy" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="beyond-card-grid">
          {personalCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                className="beyond-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -6, rotate: index % 2 === 0 ? -0.4 : 0.4 }}
              >
                <div className="beyond-card-icon">
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

export default BeyondCode;
