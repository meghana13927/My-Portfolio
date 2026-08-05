import extracurricular from "../data/extracurricular";
import { motion } from "framer-motion";

const illustrationMap = {
  "Video Editing & UI/UX Design": "/illustrations/design.svg",
  "Drawing & Painting": "/illustrations/design.svg",
  "Dance Performer": "/illustrations/dance.svg",
  "Travel & Reading": "/illustrations/travel.svg",
};

function ExtraCurricular() {
  return (
    <motion.section id="activities" className="section-shell px-6 py-28 lg:px-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="mx-auto max-w-7xl">
        <div className="section-heading">
          <span className="section-eyebrow">Activities</span>
          <h2 className="mt-5">
            Life outside coding adds <span className="accent-text">energy and creativity</span>
          </h2>
          <p>
            These interests keep me inspired and expressive, and they bring extra creativity into the way I approach design, teamwork, and problem-solving.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {extracurricular.map((item, index) => {
            const Icon = item.icon;
            const illustration = illustrationMap[item.title] ?? "/illustrations/reading.svg";

            return (
              <motion.div
                key={item.id}
                className="pro-card overflow-hidden rounded-[2rem]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="h-56 overflow-hidden bg-gradient-to-r from-orange-50 via-white to-sky-50">
                  <img src={illustration} alt={item.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} text-3xl text-white shadow-lg`}>
                      <Icon />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700">Creative Side</p>
                      <h3 className="mt-1 text-3xl font-bold text-slate-900">{item.title}</h3>
                    </div>
                  </div>
                  <p className="mt-5 leading-8 text-slate-600">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="pro-card overflow-hidden rounded-[2rem]">
            <img src="/illustrations/travel.svg" alt="Travel" className="h-44 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-900">Travel</h3>
              <p className="mt-3 text-slate-600">Exploring new places brings fresh ideas, curiosity, and a wider perspective.</p>
            </div>
          </div>
          <div className="pro-card overflow-hidden rounded-[2rem]">
            <img src="/illustrations/dance.svg" alt="Dance" className="h-44 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-900">Dance</h3>
              <p className="mt-3 text-slate-600">Dance adds expression, confidence, stage presence, and creative energy.</p>
            </div>
          </div>
          <div className="pro-card overflow-hidden rounded-[2rem]">
            <img src="/illustrations/reading.svg" alt="Reading" className="h-44 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-900">Reading</h3>
              <p className="mt-3 text-slate-600">Reading helps me stay reflective, thoughtful, and open to new ideas.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default ExtraCurricular;
