import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl leading-tight"
        >
          Développez votre{" "}
          <span className="bg-gradient-to-r from-[#5C6FFF] to-[#AD6BFF] bg-clip-text text-transparent">
            expertise Tech LGC
          </span>
          ,<br />
          programmez votre{" "}
          <span className="bg-gradient-to-r from-[#5C6FFF] to-[#AD6BFF] bg-clip-text text-transparent">
            avenir !
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
        >
          La grande classe TechSchool forme celles et ceux qui construisent le monde
          numérique de demain.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="px-8 py-4 bg-[#5C6FFF] hover:bg-[#4D5FEF] text-white rounded-full shadow-[0_0_30px_rgba(92,111,255,0.5)] hover:shadow-[0_0_40px_rgba(92,111,255,0.7)] transition-all duration-300">
            Découvrir nos formations
          </button>
        </motion.div>
      </div>
    </section>
  );
}
