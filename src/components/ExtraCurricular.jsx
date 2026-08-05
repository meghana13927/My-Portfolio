import extracurricular from "../data/extracurricular";
import { motion } from "framer-motion";

const imageMap = {
  "Video Editing & UI/UX Design": "/photos/creative-work-tools.png",
  "Drawing & Painting": "/photos/drawing-painting.png",
  "Dance Performer": "/photos/dance-cultural.png",
  "Travel & Reading": "/photos/books-reading.png",
};

const featureCards = [
  {
    title: "Travel",
    text: "Nature and open landscapes bring freshness, calm, and a wider sense of perspective.",
    image: "/photos/nature-travel.png",
  },
  {
    title: "Dance",
    text: "Cultural elements like gejje and classical instruments reflect rhythm, tradition, and expressive creativity.",
    image: "/photos/dance-cultural.png",
  },
  {
    title: "Reading",
    text: "Books keep me thoughtful, reflective, and always open to learning something new.",
    image: "/photos/books-reading.png",
  },
  {
    title: "Drawing & Painting",
    text: "Sketching and painting help me stay visually observant and deeply creative.",
    image: "/photos/drawing-painting.png",
  },
];

function ExtraCurricular() {
  return (
    <motion.section id="activities" className="section-shell px-6 py-28 lg:px-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="mx-auto max-w-7xl">
        <div className="section-heading">
          <span className="section-eyebrow">Activities</span>
          <h2 className="mt-5">
            A creative side that brings <span className="accent-text">range and balance</span>
          </h2>
          <p>
            Outside software, these interests help me stay inspired, visually aware, and grounded, which carries back into the products I build.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 [perspective:1800px]">
          {extracurricular.map((item, index) => {
            const Icon = item.icon;
            const image = imageMap[item.title] ?? "/photos/creative-work-tools.png";

            return (
              <motion.div
                key={item.id}
                className={`pro-card panel-3d overflow-hidden rounded-[2rem] ${index % 2 === 0 ? "tilt-flat" : "tilt-right"}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="h-64 overflow-hidden bg-slate-950/30">
                  <img src={image} alt={item.title} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} text-3xl text-white shadow-lg`}>
                      <Icon />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-200">Creative Side</p>
                      <h3 className="mt-1 text-3xl font-bold text-slate-50">{item.title}</h3>
                    </div>
                  </div>
                  <p className="mt-5 leading-8 text-slate-300">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4 [perspective:1800px]">
          {featureCards.map((card, index) => (
            <motion.div
              key={card.title}
              className={`pro-card panel-3d overflow-hidden rounded-[2rem] ${index % 2 === 0 ? "tilt-flat" : "tilt-right"}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + index * 0.08 }}
              viewport={{ once: true }}
            >
              <img src={card.image} alt={card.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-50">{card.title}</h3>
                <p className="mt-3 text-slate-300">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default ExtraCurricular;
