import { motion } from "framer-motion";
import extracurricular from "../data/extracurricular";

function ExtraCurricular() {
  return (
    <motion.section
      id="activities"
      className="section-shell px-5 py-16 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="site-shell">
        <div className="section-heading section-heading-split">
          <div>
            <p className="section-eyebrow">Extra Curricular</p>
            <h2>Creative interests beyond software.</h2>
          </div>
          <p className="section-support">
            Minimal activity blocks aligned with the new portfolio style.
          </p>
        </div>

        <div className="reference-grid">
          {extracurricular.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                viewport={{ once: true }}
                className="reference-panel"
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-lg text-white`}>
                  <Icon />
                </div>
                <h3 className="reference-panel-title mt-5">{item.title}</h3>
                <p className="reference-panel-text">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

export default ExtraCurricular;
