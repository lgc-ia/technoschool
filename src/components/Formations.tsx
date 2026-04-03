import { Code2, Database, Shield } from "lucide-react";
import { motion } from "motion/react";

const formations = [
  {
    icon: Code2,
    title: "Développement Web",
    description:
      "Maîtrisez les technologies front-end et back-end pour créer des applications web modernes et performantes.",
  },
  {
    icon: Database,
    title: "Data Science & IA",
    description:
      "Exploitez la puissance des données et de l'intelligence artificielle pour résoudre des problèmes complexes.",
  },
  {
    icon: Shield,
    title: "Cybersécurité",
    description:
      "Protégez les systèmes et les données contre les menaces numériques avec des compétences en sécurité avancées.",
  },
];

export function Formations() {
  return (
    <section
      id="formations"
      className="py-20 px-6"
      style={{ scrollMarginTop: "6rem" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Nos formations</h2>
          <p className="text-lg text-gray-400">
            Des cursus complets en développement web, data et cybersécurité.
          </p>
        </motion.div>

        <div className="space-y-6">
          {formations.map((formation, index) => {
            const Icon = formation.icon;
            return (
              <motion.div
                key={formation.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gradient-to-r from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-[#5C6FFF] hover:shadow-[0_0_30px_rgba(92,111,255,0.3)] transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-gradient-to-br from-[#5C6FFF] to-[#AD6BFF] rounded-xl group-hover:shadow-[0_0_20px_rgba(92,111,255,0.5)] transition-shadow duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-2">{formation.title}</h3>
                    <p className="text-gray-400">{formation.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
