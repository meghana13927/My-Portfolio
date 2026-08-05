import extracurricular from "../data/extracurricular";
import { motion } from "framer-motion";

function ExtraCurricular() {
  return (
    <motion.section id="activities" className="section-shell px-6 py-28 lg:px-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="mx-auto max-w-7xl">
        <div className="section-heading">
          <span className="section-eyebrow">Activities</span>
          <h2 className="mt-5">
            Interests beyond code that support <span className="accent-text">creativity and communication</span>
          </h2>
          <p>
            The work I do outside software helps strengthen collaboration, imagination, and the kind of personal balance that improves professional output too.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {extracurricular.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                className="pro-card rounded-[2rem] p-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} text-3xl text-white`}>
                  <Icon />
                </div>
                <h3 className="mt-6 text-3xl font-bold text-slate-50">{item.title}</h3>
                <p className="mt-4 leading-8 text-slate-400">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

export default ExtraCurricular;
