import extracurricular from "../data/extracurricular";
import { motion } from "framer-motion";

const imageMap = {
  "Video Editing & UI/UX Design": "/photos/creative-work.png",
  "Drawing & Painting": "/photos/creative-work.png",
  "Dance Performer": "/photos/dance.png",
  "Travel & Reading": "/photos/reading.png",
};

const featureCards = [
  {
    title: "Travel",
    text: "Travel brings new perspectives, curiosity, and inspiration that carry over into the way I think and create.",
    image: "/photos/travel.png",
  },
  {
    title: "Dance",
    text: "Dance adds expression, confidence, rhythm, and stage presence to my creative side.",
    image: "/photos/dance.png",
  },
  {
    title: "Reading",
    text: "Reading keeps me reflective, calm, and constantly open to learning and growth.",
    image: "/photos/reading.png",
  },
];

function ExtraCurricular() {
  return (
    <motion.section id="activities" className="section-shell px-6 py-28 lg:px-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="mx-auto max-w-7xl">
        <div className="section-heading">
          <span className="section-eyebrow">Activities</span>
          <h2 className="mt-5">
            Personal interests that add <span className="accent-text">creativity and balance</span>
          </h2>
          <p>
            Outside development, these activities keep me inspired and help shape a more thoughtful, expressive approach to the work I do.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {extracurricular.map((item, index) => {
            const Icon = item.icon;
            const image = imageMap[item.title] ?? "/photos/creative-work.png";

            return (
              <motion.div
                key={item.id}
                className="pro-card overflow-hidden rounded-[2rem]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, rotateX: 1.5, rotateY: index % 2 === 0 ? -2 : 2 }}
              >
                <div className="h-64 overflow-hidden bg-slate-100">
                  <img src={image} alt={item.title} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
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
          {featureCards.map((card, index) => (
            <motion.div
              key={card.title}
              className="pro-card overflow-hidden rounded-[2rem]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <img src={card.image} alt={card.title} className="h-44 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900">{card.title}</h3>
                <p className="mt-3 text-slate-600">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default ExtraCurricular;
