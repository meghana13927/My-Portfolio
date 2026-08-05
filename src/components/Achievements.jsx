import achievements from "../data/achievements";
import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";

function Achievements() {
  return (
    <motion.section id="achievements" className="section-shell px-6 py-28 lg:px-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="mx-auto max-w-7xl">
        <div className="section-heading">
          <span className="section-eyebrow">Achievements</span>
          <h2 className="mt-5">
            Milestones that reflect <span className="accent-text">momentum, curiosity, and consistency</span>
          </h2>
          <p>
            These achievements show the discipline behind my learning journey and the drive I bring to growth in both academics and technology.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 [perspective:1800px]">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              className="pro-card panel-3d tilt-flat rounded-[2rem] p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-300/12 text-2xl text-amber-100">
                <FaTrophy />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-slate-50">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Achievements;
