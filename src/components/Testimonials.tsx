import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "La TechSchool m'a permis de me reconvertir dans la tech. Les formateurs sont passionnés et le programme est très complet.",
    name: "Mercier William",
    role: "Développeuse Full-Stack",
  },
  {
    quote:
      "Grâce à la formation machine learning, j'ai décroché un poste dans une startup innovante. Une expérience transformatrice",
    name: "Oudelet Kevin",
    role: "Machine Learning Engineer",
  },
  {
    quote:
      "Le cursus en développent est vraiment à la pointe. J'ai acquis des compétences recherchées sur le marché.",
    name: "Militello Giuseppe",
    role: "Product Owner",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-colors duration-300"
            >
              <Quote className="w-10 h-10 text-[#5C6FFF] mb-4" />
              <p className="text-white mb-6 italic">{testimonial.quote}</p>
              <div>
                <p className="text-[#FF9966]">{testimonial.name}</p>
                <p className="text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

