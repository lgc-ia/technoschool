import { motion } from "motion/react";

const stats = [
  {
    value: "75%",
    label: "Taux de réussite",
  },
  {
    value: "56",
    label: "Entreprises partenaires",
  },
  {
    value: "98%",
    label: "Satisfaction étudiante",
  },
];

export function Statistics() {
  return (
    <section className="py-20 px-6 bg-black/60">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-6xl md:text-7xl bg-gradient-to-r from-[#5C6FFF] to-[#AD6BFF] bg-clip-text text-transparent mb-4">
                {stat.value}
              </div>
              <p className="text-lg text-white">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

