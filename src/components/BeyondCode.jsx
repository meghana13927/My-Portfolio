import { motion } from "framer-motion";
import { FaBookOpen, FaMusic, FaPaintBrush, FaUsers } from "react-icons/fa";

const cards = [
  {
    title: "Dance & Cultural Activities",
    text: "Part of SDM Kalavaibhava with experience in Bharatanatyam, Bali, Garba Dandiya, Kathak, and Western dance forms.",
    icon: FaMusic,
    accent: "beyond-card-pink",
  },
  {
    title: "Events & Stage Performance",
    text: "Performed at Dharmastala, Dharwad, Puttur, Ujire, and other cultural events including a one-hour Ramayana drama.",
    icon: FaUsers,
    accent: "beyond-card-orange",
  },
  {
    title: "Creative Interests",
    text: "Enjoy video editing, UI/UX exploration, drawing, and painting as part of my creative process outside software.",
    icon: FaPaintBrush,
    accent: "beyond-card-purple",
  },
  {
    title: "Continuous Learning",
    text: "Reading, exploring new places, and staying curious helps me keep both technical and creative learning active.",
    icon: FaBookOpen,
    accent: "beyond-card-cyan",
  },
];

function BeyondCode() {
  return (
    <motion.section
      id="beyond-code"
      className="section-shell section-accent-beyond px-5 py-16 sm:px-6 lg:px-8"
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
            Genuine creative, cultural, and learning experiences that reflect discipline, collaboration, and personal growth outside engineering.
          </p>
        </div>

        <div className="beyond-compact-grid">
          {cards.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                className={`beyond-compact-card ${item.accent}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <div className="beyond-compact-icon">
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
